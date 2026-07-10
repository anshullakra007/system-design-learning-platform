export const practiceProblems = [
  {
    id: 'design-leetcode',
    title: 'Design LeetCode',
    difficulty: 'Easy',
    requirements: [
      'Users can view a list of coding problems',
      'Users can submit code solutions in various languages',
      'System executes the code and returns Pass/Fail results',
      'Scale: 1M Daily Active Users, heavy read/write ratio on submissions'
    ],
    hints: [
      'How will you securely execute arbitrary user code? Think about sandbox environments.',
      'What type of database should you use to store problem descriptions vs user submissions?',
      'Since execution takes time, how should the frontend communicate with the backend? (Synchronous vs Asynchronous)'
    ],
    solutionText: 'The core challenge is securely executing arbitrary code. We use a microservices architecture where an API Gateway handles traffic. Problem data is stored in a relational database (PostgreSQL) since it is highly structured. For code execution, we use an asynchronous worker queue (RabbitMQ/Kafka). When a user submits code, it is placed in the queue, and isolated Docker containers (workers) pull the code, execute it in a sandbox with strict resource limits, and write the result back to the database. The client polls or uses WebSockets to get the final result.',
    solutionDiagram: `\`\`\`mermaid
graph TD
    Client --> API_Gateway
    API_Gateway --> User_Service
    API_Gateway --> Problem_Service
    API_Gateway --> Submission_Service
    
    Problem_Service --> DB[(PostgreSQL)]
    
    Submission_Service --> Queue[Message Queue]
    Queue --> Worker1[Docker Sandbox]
    Queue --> Worker2[Docker Sandbox]
    
    Worker1 --> ResultDB[(NoSQL / Cassandra)]
    Worker2 --> ResultDB
\`\`\``
  },
  {
    id: 'design-url-shortener',
    title: 'Design URL Shortener',
    difficulty: 'Easy',
    requirements: [
      'Given a long URL, return a much shorter unique alias',
      'When users click the alias, redirect them to the original URL',
      'Links expire after a certain timespan',
      'Scale: 100M URLs generated per day, 1B redirects per day'
    ],
    hints: [
      'How many characters do you need for the short URL to support 10 years of generated links? (Base62 encoding)',
      'What database is best for massive amounts of simple Key-Value lookups?',
      'How do you handle generating unique IDs quickly without collisions in a distributed environment?'
    ],
    solutionText: 'To handle the massive read-heavy load (10:1 read to write ratio), we use a NoSQL database (like Cassandra or DynamoDB) mapping the shortHash to the longURL. To guarantee unique short URLs without collisions, we use a distributed ID generator (like Twitter Snowflake or a ZooKeeper-backed range allocator) which assigns a unique base-10 ID to each request. This base-10 ID is then converted to Base62 (a-z, A-Z, 0-9) to form the short alias. We place a massive Memcached/Redis cluster in front of the database to handle the 1B daily redirects at sub-millisecond latency.',
    solutionDiagram: `\`\`\`mermaid
graph TD
    User --> LB[Load Balancer]
    LB --> Web[Web Servers]
    
    Web --> Cache[(Redis Cache)]
    Web --> DB[(NoSQL Key-Value Store)]
    
    Web --> IDGen[Distributed ID Generator]
\`\`\``
  },
  {
    id: 'design-google-docs',
    title: 'Design Google Docs',
    difficulty: 'Medium',
    requirements: [
      'Multiple users can edit the same document concurrently',
      'Changes are reflected in real-time across all active clients',
      'Documents are saved persistently without data loss'
    ],
    hints: [
      'How do you handle conflict resolution when two users type at the exact same cursor position? (Look into Operational Transformation or CRDTs)',
      'How do clients maintain a continuous connection to receive real-time updates?',
      'How often should you persist changes to the database to avoid overloading it?'
    ],
    solutionText: 'The system relies on WebSockets to maintain persistent connections with active clients. When a user edits the document, the change is sent to a Collaboration Server via WebSocket. To resolve concurrent editing conflicts, the server uses Operational Transformation (OT) or Conflict-free Replicated Data Types (CRDT). Instead of writing every keystroke to a database, the server keeps the active document state in memory (or Redis) and flushes checkpoints to a persistent blob store (S3) or a NoSQL database every few seconds.',
    solutionDiagram: `\`\`\`mermaid
graph TD
    Client1 <-->|WebSocket| Collab[Collaboration Server]
    Client2 <-->|WebSocket| Collab
    
    Collab <--> Redis[(In-Memory State)]
    
    Collab -->|Async Flush| Worker[Snapshot Worker]
    Worker --> DB[(Persistent Document Store)]
\`\`\``
  },
  {
    id: 'design-twitter',
    title: 'Design Twitter',
    difficulty: 'Hard',
    requirements: [
      'Users can post tweets (text and images)',
      'Users can follow other users',
      'Users have a home timeline showing tweets from people they follow',
      'Scale: 300M Daily Active Users, celebrities with millions of followers'
    ],
    hints: [
      'Calculating a timeline on-the-fly for a user who follows 5,000 people is too slow. How can you pre-compute it?',
      'What happens when Justin Bieber (50M followers) tweets? Pre-computing 50M timelines simultaneously will crash the system. How do you solve this "fanout" problem?'
    ],
    solutionText: 'Twitter uses a hybrid Fanout architecture. For normal users, when they tweet, a background worker uses "Fanout-on-write" to push the tweet ID into the pre-computed Timeline Cache (Redis) of all their followers. This makes reading timelines O(1) fast. However, for celebrities, Fanout-on-write is impossible (thundering herd). Instead, celebrities use "Fanout-on-read": their tweets are not pushed. When a user loads their timeline, the system merges their pre-computed cache with the latest tweets from the celebrities they follow on-the-fly.',
    solutionDiagram: `\`\`\`mermaid
graph TD
    User_Post --> API_Write
    API_Write --> Fanout[Fanout Worker]
    
    Fanout -->|Push to Followers| Redis_Timeline[(Redis Timelines)]
    
    User_Read --> API_Read
    API_Read --> Merge[Merge Service]
    
    Merge --> Redis_Timeline
    Merge -->|Fetch Celeb Tweets| Redis_Celeb[(Redis Celeb Cache)]
\`\`\``
  }
];
