import fs from 'fs';
import https from 'https';

const DIAGRAMS = {
  "content delivery network": `\`\`\`mermaid
graph TD
    Client1[User - Europe] -->|Requests Video| Edge1[CDN Edge Server - Frankfurt]
    Client2[User - Asia] -->|Requests Video| Edge2[CDN Edge Server - Tokyo]
    Edge1 -.->|Cache Miss| Origin[(Origin Server - US East)]
    Edge2 -.->|Cache Miss| Origin
    Origin -.->|Video Chunk| Edge1
    Origin -.->|Video Chunk| Edge2
    Edge1 -->|Cache Hit| Client3[User 2 - Europe]
    style Edge1 fill:#1e3a8a,stroke:#3b82f6
    style Edge2 fill:#1e3a8a,stroke:#3b82f6
    style Origin fill:#991b1b,stroke:#ef4444
\`\`\``,
  "domain name system": `\`\`\`mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Resolver as DNS Resolver
    participant Root as Root Server
    participant TLD as TLD Server
    participant Auth as Auth Nameserver
    User->>Browser: Type google.com
    Browser->>Resolver: Where is google.com?
    Resolver->>Root: Query .com
    Root-->>Resolver: Go to TLD Server
    Resolver->>TLD: Query google.com
    TLD-->>Resolver: Go to Auth Server
    Resolver->>Auth: Query google.com A Record
    Auth-->>Resolver: IP: 142.250.190.46
    Resolver-->>Browser: IP: 142.250.190.46
    Browser->>Browser: Cache IP
\`\`\``,
  "availability vs consistency": `\`\`\`mermaid
graph LR
    subgraph CAP Theorem
    C((Consistency)) --- A((Availability))
    A --- P((Partition Tolerance))
    P --- C
    end
    style P fill:#047857,stroke:#10b981
\`\`\``
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
                currentModule.chapters[0].content.unshift(DIAGRAMS[key]);
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
