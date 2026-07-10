import fs from 'fs';
import https from 'https';

const DIAGRAMS = {
  "content delivery network": [
    `### Network Topology\n\n\`\`\`mermaid\ngraph TD\n    Client1[User - Europe] -->|Requests Video| Edge1[CDN Edge - Frankfurt]\n    Client2[User - Asia] -->|Requests Video| Edge2[CDN Edge - Tokyo]\n    Edge1 -.->|Cache Miss| Origin[(Origin Server - US East)]\n    Edge2 -.->|Cache Miss| Origin\n    Origin -.->|Video Chunk| Edge1\n    Origin -.->|Video Chunk| Edge2\n    Edge1 -->|Cache Hit| Client3[User 2 - Europe]\n\`\`\``,
    `### Request Flow\n\n\`\`\`mermaid\nsequenceDiagram\n    participant U as User\n    participant E as Edge Node\n    participant O as Origin Server\n    U->>E: GET /video.mp4\n    alt In Cache\n        E-->>U: 200 OK (video.mp4)\n    else Not in Cache\n        E->>O: GET /video.mp4\n        O-->>E: 200 OK (video.mp4)\n        E->>E: Store in Cache\n        E-->>U: 200 OK (video.mp4)\n    end\n\`\`\``
  ],
  "domain name system": [
    `### DNS Resolution Flow\n\n\`\`\`mermaid\nsequenceDiagram\n    participant U as User\n    participant R as DNS Resolver\n    participant Root as Root Server (.)\n    participant TLD as TLD Server (.com)\n    participant Auth as Auth Server (google.com)\n    U->>R: Resolve google.com\n    R->>Root: Query google.com\n    Root-->>R: Refer to .com TLD\n    R->>TLD: Query google.com\n    TLD-->>R: Refer to google.com Auth\n    R->>Auth: Query A Record\n    Auth-->>R: IP: 142.250.190.46\n    R-->>U: IP: 142.250.190.46\n\`\`\``,
    `### DNS Hierarchy\n\n\`\`\`mermaid\ngraph TD\n    Root((Root .))\n    Root --> COM(.com)\n    Root --> ORG(.org)\n    Root --> NET(.net)\n    COM --> Google(google.com)\n    COM --> Amazon(amazon.com)\n    Google --> WWW(www.google.com)\n    Google --> MAIL(mail.google.com)\n\`\`\``
  ],
  "availability vs consistency": [
    `### CAP Theorem\n\n\`\`\`mermaid\ngraph LR\n    subgraph CAP\n    C((Consistency)) --- A((Availability))\n    A --- P((Partition Tolerance))\n    P --- C\n    end\n\`\`\``
  ],
  "communication": [
    `### Microservice Network Topology\n\n\`\`\`mermaid\ngraph TD\n    Client --> LB[Load Balancer]\n    LB --> API[API Gateway]\n    API --> S1[Auth Service]\n    API --> S2[User Service]\n    API --> S3[Payment Service]\n    S2 --> DB1[(User DB)]\n    S2 --> Cache[(Redis)]\n    S3 --> DB2[(Ledger DB)]\n\`\`\``,
    `### Request-Response Sequence\n\n\`\`\`mermaid\nsequenceDiagram\n    participant C as Client\n    participant A as API Gateway\n    participant U as User Service\n    participant D as Database\n    C->>A: POST /users\n    A->>U: Forward POST\n    U->>D: INSERT INTO users\n    D-->>U: ACK\n    U-->>A: 201 Created\n    A-->>C: 201 Created\n\`\`\``,
    `### OSI Model\n\n\`\`\`mermaid\ngraph TD\n    subgraph Application Layer\n    L7[7. Application - HTTP/SMTP]\n    L6[6. Presentation - SSL/TLS]\n    L5[5. Session - Sockets]\n    end\n    subgraph Transport Layer\n    L4[4. Transport - TCP/UDP]\n    end\n    subgraph Network Layer\n    L3[3. Network - IP/ICMP]\n    end\n    subgraph Physical\n    L2[2. Data Link - MAC/ARP]\n    L1[1. Physical - Cables/Radio]\n    end\n    L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1\n\`\`\``
  ],
  "database": [
    `### Master-Slave Replication\n\n\`\`\`mermaid\ngraph TD\n    WriteApp[Write Heavy App] --> Master[(Master DB)]\n    Master -.->|Async Replication| Slave1[(Slave 1)]\n    Master -.->|Async Replication| Slave2[(Slave 2)]\n    ReadApp[Read Heavy App] --> Slave1\n    ReadApp --> Slave2\n\`\`\``,
    `### Consistent Hashing (Sharding)\n\n\`\`\`mermaid\ngraph LR\n    HashRing((Hash Ring))\n    HashRing -.-> NodeA[Node A (0-100)]\n    HashRing -.-> NodeB[Node B (101-200)]\n    HashRing -.-> NodeC[Node C (201-300)]\n    Key1((Key: user_123)) --> HashRing\n    Key2((Key: user_456)) --> HashRing\n\`\`\``
  ]
};

const URL = 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/README.md';
const IMG_BASE_URL = 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/';

// A mapping of real exam questions for specific modules to replace the dummy questions.
const REAL_EXAMS = {
  "Database": [
    {
      q: "Which database replication strategy is best suited for write-heavy workloads where eventual consistency is acceptable?",
      options: ["Master-Slave Replication", "Master-Master Replication", "Sharding", "Denormalization"],
      correctIndex: 1,
      explanation: "Master-Master replication allows writes to multiple nodes, improving write throughput, although it requires conflict resolution and often results in eventual consistency."
    },
    {
      q: "What is a major disadvantage of database federation (functional partitioning)?",
      options: ["It increases replication lag.", "It requires a single central master to serialize all writes.", "It makes joining data across different databases significantly more complex.", "It reduces the amount of data that can fit in memory."],
      correctIndex: 2,
      explanation: "Federation splits databases by function (e.g., users, forums). Joining data that lives on completely different database servers requires complex application logic."
    }
  ],
  "Cache": [
    {
      q: "In a Cache-Aside (Lazy Loading) strategy, what happens when there is a cache miss?",
      options: [
        "The cache automatically fetches data from the database.",
        "The application fetches data from the database and updates the cache.",
        "The application throws an error and falls back to a replica.",
        "The database asynchronously pushes the missing data to the cache."
      ],
      correctIndex: 1,
      explanation: "In Cache-Aside, the cache doesn't interact with the DB directly. The application is responsible for querying the DB on a miss and then populating the cache."
    },
    {
      q: "Which caching strategy is most vulnerable to data loss if the cache node crashes before persisting to the database?",
      options: ["Write-Through", "Write-Behind (Write-Back)", "Cache-Aside", "Refresh-Ahead"],
      correctIndex: 1,
      explanation: "Write-Behind improves write performance by asynchronously writing to the DB. If the cache crashes before the async write completes, the data is lost."
    }
  ],
  "Load balancer": [
    {
      q: "What is the primary difference between Layer 4 and Layer 7 load balancing?",
      options: [
        "Layer 4 routes based on IP/Port; Layer 7 routes based on application data like HTTP headers.",
        "Layer 4 is slower than Layer 7 because it deeply inspects packets.",
        "Layer 7 only supports UDP, while Layer 4 supports TCP.",
        "There is no difference; they are just different hardware models."
      ],
      correctIndex: 0,
      explanation: "Layer 4 looks at transport layer info (IP, Port). Layer 7 looks at application layer info (HTTP headers, cookies) allowing for smarter routing at the cost of computation."
    }
  ],
  "System design interview questions with solutions": [
    {
      q: "When designing a URL Shortener (like Pastebin/Bit.ly), which hashing strategy prevents collisions while maintaining a short URL length?",
      options: ["MD5 with Base62 Encoding", "SHA-256", "Bcrypt", "A simple sequential ID generator without encoding"],
      correctIndex: 0,
      explanation: "Base62 encoding (a-z, A-Z, 0-9) of an MD5 hash (or even just base62 encoding a unique integer ID) creates a very short, URL-safe string. MD5 is fast and sufficient for this non-cryptographic use case."
    },
    {
      q: "In a social network (like Twitter) timeline generation, what is the 'Fanout' approach?",
      options: [
        "Dynamically calculating the timeline every time a user refreshes the page.",
        "Pre-computing the timeline by pushing a new tweet to all followers' cached timelines upon creation.",
        "Deleting old tweets to save database storage.",
        "A load balancing algorithm that fans requests out to all servers."
      ],
      correctIndex: 1,
      explanation: "Fanout-on-write pushes the new tweet to the pre-computed timeline caches of all followers. This makes reads O(1) and extremely fast, which is critical for read-heavy systems."
    }
  ]
};

https.get(URL, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    parseAndGenerate(data);
  });
}).on('error', (err) => {
  console.error('Error fetching README:', err);
});

function parseAndGenerate(markdown) {
  const lines = markdown.split('\n');
  
  let isContent = false;
  const modules = [];
  
  let currentModule = null;
  let currentChapter = null;
  
  let idCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Start parsing much earlier to include Interview Questions!
    if (line === '## How to approach a system design interview question') {
      isContent = true;
    }
    
    // Stop parsing at Appendix
    if (line === '## Appendix') {
      isContent = false;
      break;
    }
    
    if (!isContent) continue;
    
    // Rewrite image URLs to absolute URLs
    line = line.replace(/\!\[(.*?)\]\((images\/.*?)\)/g, `![$1](${IMG_BASE_URL}$2)`);

    // Rewrite raw HTML image src
    line = line.replace(/src="(images\/.*?)"/g, `src="${IMG_BASE_URL}$1"`);

    // Rewrite relative Markdown links to absolute GitHub URLs
    line = line.replace(/(?<!!)\[(.*?)\]\((?!http|#)(.*?)\)/g, `[$1](https://github.com/donnemartin/system-design-primer/blob/master/$2)`);

    if (line.startsWith('## ')) {
      if (currentModule) {
        // Add exams to the previous module before moving on
        let questions = REAL_EXAMS[currentModule.title];
        if (!questions) {
          questions = [
            {
              q: `What is the most critical trade-off in ${currentModule.title}?`,
              options: ["Performance vs Latency", "Consistency vs Availability", "It depends entirely on the specific system requirements and constraints.", "Cost vs Storage"],
              correctIndex: 2,
              explanation: "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
            }
          ];
        }
        currentModule.exam = {
          title: `${currentModule.title} - Final Exam`,
          questions: questions
        };
        
        let titleKey = currentModule.title.toLowerCase();
        // Inject mermaid diagram if available for this module
        for (const key in DIAGRAMS) {
            if (titleKey.includes(key) && currentModule.chapters.length > 0) {
                if (Array.isArray(DIAGRAMS[key])) {
                    currentModule.chapters[0].content.unshift(...DIAGRAMS[key]);
                } else {
                    currentModule.chapters[0].content.unshift(DIAGRAMS[key]);
                }
                break;
            }
        }
        modules.push(currentModule);
      }
      
      const title = line.substring(3).trim();
      currentModule = {
        id: idCounter++,
        title: title,
        description: `Exhaustive guide and interview questions on ${title}`,
        chapters: []
      };
      
      currentChapter = {
        title: "Overview",
        content: [],
        deepDive: null,
        exercises: [{
          question: `Explain the core concepts and trade-offs of ${title}.`,
          answer: `Review the ${title} module architecture and diagrams to solidify your understanding.`
        }]
      };
      currentModule.chapters.push(currentChapter);
      
    } else if (line.startsWith('### ')) {
      const title = line.substring(4).trim();
      
      // Inject some real knowledge checks into chapters if we detect certain keywords
      let exerciseQ = `Describe the mechanism behind ${title}.`;
      let exerciseA = `Refer to the diagrams and trade-offs of ${title} as discussed in the chapter.`;
      
      if (title.toLowerCase().includes("pastebin")) {
        exerciseQ = "Design Pastebin: How would you generate a unique, short URL?";
        exerciseA = "You can use an auto-incrementing integer ID from a database and encode it using Base62 (a-z, A-Z, 0-9) to generate a short 7-character hash.";
      } else if (title.toLowerCase().includes("twitter")) {
        exerciseQ = "Design Twitter: How do you handle the timeline of a user with millions of followers (e.g., Justin Bieber)?";
        exerciseA = "You use a hybrid approach. For normal users, Fanout-on-write pushes tweets to followers. For celebrities, you use Fanout-on-load (pull), calculating their tweets into the timeline dynamically at read-time to avoid millions of writes.";
      }

      currentChapter = {
        title: title,
        content: [],
        deepDive: null,
        exercises: [{
          question: exerciseQ,
          answer: exerciseA
        }]
      };
      currentModule.chapters.push(currentChapter);
      
    } else if (line.startsWith('#### ')) {
      const title = line.substring(5).trim();
      if (!currentChapter.deepDive) {
        currentChapter.deepDive = {
          title: title,
          content: []
        };
      } else {
        currentChapter.content.push(`**Deep Dive:** ${title}`);
      }
    } else {
      if (currentChapter.deepDive && line.startsWith('#### ') === false && currentChapter.deepDive.content.length < 15) {
        currentChapter.deepDive.content.push(line);
      } else {
        currentChapter.content.push(line);
      }
    }
  }
  
  if (currentModule) {
    let questions = REAL_EXAMS[currentModule.title] || [
      {
        q: `What is the most critical trade-off in ${currentModule.title}?`,
        options: ["Performance vs Latency", "Consistency vs Availability", "It depends entirely on the specific system requirements.", "SQL vs NoSQL"],
        correctIndex: 2,
        explanation: "System design is about choosing the right trade-off."
      }
    ];
    currentModule.exam = {
      title: `${currentModule.title} - Final Exam`,
      questions: questions
    };
    modules.push(currentModule);
  }

  modules.forEach(mod => {
    mod.chapters = mod.chapters.filter(ch => ch.content.join('').trim() !== '' || ch.title !== 'Overview');
  });

  const jsContent = `export const modules = ${JSON.stringify(modules, null, 2)};\n`;
  fs.writeFileSync('src/data/modules.js', jsContent);
  console.log("Successfully ingested the System Design Primer V3 into src/data/modules.js!");
}
