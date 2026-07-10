export const modules = [
  {
    id: 1,
    title: "Module 1: Distributed Systems Fundamentals",
    description: "The absolute bedrock of system design. Understand how systems grow from a single laptop to global datacenters.",
    chapters: [
      {
        title: "Monolithic vs. Microservice Architectures",
        content: [
          "Every great system begins its life as a Monolith. A monolithic architecture means all the code for your application—the user interface, the business logic, and the database access layer—is combined into a single, unified codebase and deployed as a single unit.",
          "Monoliths are incredibly fast to develop initially. Because everything runs in the same memory space, function calls between components are practically instantaneous. Debugging is simple, and deployments are straightforward: you just copy the compiled application to a server.",
          "However, as a product scales to millions of users and the engineering team grows to hundreds of developers, the Monolith becomes a bottleneck. A single bug in the payment module can crash the entire application. Furthermore, you cannot scale components independently; if your image-processing feature is CPU-heavy, you must scale the entire application across more servers, wasting resources.",
          "Enter Microservices. In a microservice architecture, the application is broken down into small, loosely coupled, independently deployable services. Each service is responsible for a single business capability (e.g., a Payment Service, a User Service, an Inventory Service).",
          "Microservices communicate over a network (typically using HTTP/REST or gRPC). This isolation means a failure in the Payment Service won't bring down the User Service. Teams can choose the best programming language for their specific service (e.g., Rust for CPU-heavy tasks, Python for machine learning), and services can scale independently based on their unique loads."
        ],
        deepDive: {
          title: "The Hidden Costs of Microservices",
          content: [
            "While microservices solve organizational and scaling bottlenecks, they introduce massive distributed systems complexity.",
            "1. Network Latency: A function call that used to take 1 nanosecond in memory now takes 10-50 milliseconds over the network.",
            "2. Distributed Tracing: When a single user request spans 15 different microservices, finding out which service caused a failure requires sophisticated tracing tools like Jaeger or Zipkin.",
            "3. Data Consistency: You can no longer rely on a single database transaction to update a user's balance and an inventory count simultaneously. You must implement complex patterns like the Saga Pattern or Two-Phase Commit."
          ]
        },
        exercises: [
          {
            question: "Why might a startup with 3 engineers choose a Monolith over Microservices?",
            answer: "Speed of iteration. Managing the infrastructure, CI/CD pipelines, and network communication for microservices requires significant overhead. A monolith allows a small team to build and ship features rapidly without worrying about distributed system failures."
          },
          {
            question: "How does fault isolation differ between the two architectures?",
            answer: "In a monolith, a memory leak or a fatal exception in one module brings down the entire process. In microservices, if the Email Service crashes due to a bug, the core Checkout Service can theoretically continue operating (perhaps queuing emails for later)."
          }
        ]
      },
      {
        title: "Network Protocols & Communication",
        content: [
          "For distributed systems to function, servers must talk to each other. The OSI model dictates how this happens, but in system design, we primarily focus on Layer 4 (Transport) and Layer 7 (Application).",
          "At Layer 4, the dominant protocols are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is reliable and connection-oriented. It guarantees that packets arrive in order and without errors, using handshakes and acknowledgments. If you load a web page, you use TCP because losing a chunk of HTML would break the site.",
          "UDP is connectionless and offers no guarantees. It just fires packets at the destination as fast as possible. If packets are lost or arrive out of order, UDP doesn't care. It is used heavily in live video streaming or real-time multiplayer gaming where speed is more important than perfect accuracy.",
          "At Layer 7, HTTP (Hypertext Transfer Protocol) rules the web. HTTP/1.1 relies on a new TCP connection for every request (or keeps one alive), which suffers from Head-of-Line blocking. HTTP/2 introduced multiplexing, allowing multiple requests to share a single TCP connection concurrently.",
          "For modern microservice backends, gRPC is often preferred over standard HTTP/REST. gRPC uses HTTP/2 under the hood and Protocol Buffers (Protobuf) instead of JSON. Protobuf is a binary format, making it vastly smaller and faster to serialize/deserialize than text-based JSON."
        ],
        deepDive: {
          title: "Long Polling vs. WebSockets vs. Server-Sent Events (SSE)",
          content: [
            "When a client needs real-time updates from a server (e.g., a chat app), standard HTTP is insufficient because the client must constantly ask 'are there new messages?'.",
            "Long Polling: The client requests data, and the server holds the connection open until new data is available. Once sent, the client immediately opens a new connection.",
            "WebSockets: A persistent, bi-directional, full-duplex TCP connection. Both client and server can send messages to each other at any time. Ideal for multiplayer games or live collaborative editing.",
            "Server-Sent Events (SSE): A unidirectional HTTP connection where the client establishes a connection, and the server streams data down to it. Perfect for live stock tickers or news feeds where the client doesn't need to send data back."
          ]
        },
        exercises: [
          {
            question: "If you are designing a live leaderboard for a competitive video game, would you use standard HTTP polling, WebSockets, or SSE?",
            answer: "WebSockets or SSE. Since a leaderboard generally requires the server pushing updates to the client, SSE is highly efficient. If the client also needs to send its score rapidly, WebSockets provides the necessary bi-directional low-latency channel."
          },
          {
            question: "Why is gRPC faster than REST for internal microservice communication?",
            answer: "gRPC uses Protocol Buffers (a binary format) which parses incredibly fast and consumes less bandwidth than JSON. It also leverages HTTP/2 multiplexing, reducing connection overhead."
          }
        ]
      }
    ],
    exam: {
      title: "Module 1 Certification Exam",
      questions: [
        {
          q: "Which of the following is a primary disadvantage of a Microservice architecture?",
          options: ["Difficulty scaling specific components", "Lack of language flexibility", "Complex distributed data consistency", "Tightly coupled business logic"],
          correctIndex: 2,
          explanation: "In microservices, databases are usually split per service. Ensuring a transaction correctly updates multiple databases over a network introduces immense complexity (e.g., requiring Saga patterns) compared to a simple monolith SQL transaction."
        },
        {
          q: "You are building a live video streaming service (like Twitch). Which transport layer protocol should you prioritize for delivering the video frames?",
          options: ["TCP", "UDP", "HTTP", "WebSockets"],
          correctIndex: 1,
          explanation: "UDP is ideal for live video streaming because dropping a single frame is preferable to the delay caused by TCP's reliable retransmission mechanisms."
        },
        {
          q: "What does gRPC use as its interface definition language and data serialization format?",
          options: ["JSON", "XML", "Protocol Buffers", "GraphQL"],
          correctIndex: 2,
          explanation: "gRPC relies on Protocol Buffers (Protobuf), a binary format developed by Google, for defining service interfaces and serializing payload data."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Module 2: Databases & Scalable Storage",
    description: "The core of any large-scale application. Learn how data is stored, retrieved, and scaled across the globe.",
    chapters: [
      {
        title: "Relational (SQL) vs. Non-Relational (NoSQL)",
        content: [
          "Databases are broadly categorized into SQL and NoSQL.",
          "SQL (Relational) databases, like PostgreSQL and MySQL, structure data into tables with strict schemas (rows and columns). They excel at complex queries and guarantee ACID properties (Atomicity, Consistency, Isolation, Durability). If you are building a banking application where money is transferred between accounts, the ACID guarantees of a SQL database are absolutely non-negotiable.",
          "NoSQL databases emerged to handle massive scale and unstructured data. They come in several flavors: Key-Value (Redis), Document (MongoDB), Column-Family (Cassandra), and Graph (Neo4j).",
          "Document databases store data as JSON-like documents. They are schema-flexible, meaning you can easily add new attributes to a record without running expensive database migrations. Column-family databases like Cassandra are incredibly highly available and are optimized for massive write throughput across distributed clusters.",
          "The biggest tradeoff usually involves consistency versus scalability. SQL databases scale vertically (buying a bigger server) easily, but scaling them horizontally (adding more servers) is notoriously difficult. NoSQL databases are designed from the ground up to scale horizontally across commodity hardware."
        ],
        deepDive: {
          title: "The CAP Theorem",
          content: [
            "The CAP Theorem states that a distributed data store can only simultaneously provide two out of the following three guarantees:",
            "- Consistency (C): Every read receives the most recent write or an error.",
            "- Availability (A): Every request receives a (non-error) response, without the guarantee that it contains the most recent write.",
            "- Partition Tolerance (P): The system continues to operate despite an arbitrary number of messages being dropped by the network.",
            "Because networks are unreliable, Partition Tolerance (P) is a given. Therefore, system designers must choose between CP (Consistency and Partition Tolerance) or AP (Availability and Partition Tolerance). A banking system chooses CP. A social media feed chooses AP (it's okay if you see a stale 'like' count for a few seconds)."
          ]
        },
        exercises: [
          {
            question: "If you are designing a financial ledger, which database paradigm do you choose and why?",
            answer: "SQL (Relational). Financial systems absolutely require ACID properties to guarantee that money deducted from one account is reliably added to another without failure states causing data corruption."
          },
          {
            question: "According to the CAP Theorem, what happens to an AP system during a network partition?",
            answer: "The system continues to accept reads and writes (Availability), but nodes on different sides of the network partition may return different, stale data (sacrificing Consistency) until the partition resolves."
          }
        ]
      },
      {
        title: "Database Scaling: Replication & Sharding",
        content: [
          "When a single database server can no longer handle the traffic, we must scale.",
          "Replication (Master-Slave / Primary-Replica) solves the problem of read-heavy workloads. All writes go to the Primary node. The Primary asynchronously streams the updates to multiple Replica nodes. Clients can read from any Replica. If the Primary dies, a Replica can be promoted to become the new Primary. The downside is 'replication lag'—a client might write data to the Primary, and immediately read from a Replica before the data has arrived, seeing stale data.",
          "While replication scales reads, Sharding (Data Partitioning) scales writes and storage. Sharding involves breaking the database into smaller chunks (shards) and distributing them across multiple servers. For example, a user database might be sharded by User ID: IDs ending in 0-5 go to Server A, and 6-9 go to Server B.",
          "Sharding introduces extreme complexity. Performing a SQL 'JOIN' operation across two different shards is wildly inefficient. Furthermore, choosing the wrong Shard Key can lead to 'hotspots', where one server takes 90% of the traffic while others sit idle (e.g., sharding by 'country' and having most users in the USA)."
        ],
        deepDive: {
          title: "Consistent Hashing",
          content: [
            "In a naïve sharding setup, you might route data using: `server_index = hash(key) % N` (where N is the number of servers).",
            "The fatal flaw here is that if a server dies, or you add a new server, N changes. Suddenly, almost every key hashes to a different server, requiring a massive, system-halting data migration.",
            "Consistent Hashing solves this by mapping both the servers and the data keys onto a conceptual 'hash ring'. A key is assigned to the first server it encounters by moving clockwise around the ring. If a server is added or removed, only the keys immediately adjacent to it on the ring are affected, vastly minimizing data movement."
          ]
        },
        exercises: [
          {
            question: "What is the primary danger of using an asynchronous Master-Slave replication setup?",
            answer: "Replication Lag. If the master crashes before it can replicate its latest writes to the slaves, data is permanently lost when a slave is promoted to master."
          },
          {
            question: "Why is 'Celebrity' a dangerous shard key for a social network database?",
            answer: "Hotspots. If you shard by User ID, and Justin Bieber (a single ID) posts a photo, millions of requests will hit the single shard containing his data, instantly overwhelming that specific database server."
          }
        ]
      }
    ],
    exam: {
      title: "Module 2 Certification Exam",
      questions: [
        {
          q: "Which property of ACID ensures that a transaction is 'all or nothing'?",
          options: ["Atomicity", "Consistency", "Isolation", "Durability"],
          correctIndex: 0,
          explanation: "Atomicity guarantees that all operations within a transaction complete successfully; if any operation fails, the entire transaction is rolled back as if nothing ever happened."
        },
        {
          q: "In an AP (Available and Partition Tolerant) system, what trade-off are you explicitly making during a network failure?",
          options: ["The system will reject all write requests.", "The system will return stale or conflicting data.", "The system will permanently delete data.", "The system will convert to a relational model."],
          correctIndex: 1,
          explanation: "By prioritizing Availability, the system continues to serve requests even if nodes cannot communicate. This guarantees that you might read data that hasn't been synchronized yet (sacrificing Consistency)."
        },
        {
          q: "What specific problem does Consistent Hashing solve in a distributed database cluster?",
          options: ["It prevents SQL injection attacks.", "It allows ACID transactions across multiple shards.", "It drastically minimizes data re-distribution when servers are added or removed.", "It ensures zero replication lag."],
          correctIndex: 2,
          explanation: "Unlike standard modulo hashing, consistent hashing maps data onto a ring. When the number of servers changes, only a small fraction of keys need to be moved to restore balance."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Module 3: Speed, Caching, and Asynchronism",
    description: "Learn how to drop latency to sub-millisecond levels and decouple systems to handle massive traffic spikes.",
    chapters: [
      {
        title: "The Power of Caching",
        content: [
          "Databases are durable but slow because they read from and write to disk. To achieve sub-millisecond response times, we must serve data from memory (RAM). This is the role of a Cache.",
          "A cache (like Redis or Memcached) is a high-speed, volatile data store. When a client requests data, the system first checks the cache (Cache Hit). If the data is missing (Cache Miss), the system fetches it from the database, stores a copy in the cache, and returns it to the client.",
          "The hardest part of caching is Cache Invalidation. When data changes in the database, the cached version becomes stale. You must employ strategies to keep them synchronized.",
          "Write-Through Cache: Data is written into the cache and the database simultaneously. Pro: Fast reads, complete consistency. Con: Slower writes.",
          "Write-Behind (Write-Back): Data is written only to the cache, and asynchronously flushed to the database later. Pro: Blistering fast writes. Con: If the cache crashes before flushing, data is permanently lost."
        ],
        deepDive: {
          title: "Eviction Policies",
          content: [
            "Since RAM is expensive, caches have strict size limits. When the cache is full, old data must be evicted to make room for new data.",
            "- LRU (Least Recently Used): Evicts the item that hasn't been accessed for the longest time. This is the industry standard for most web applications.",
            "- LFU (Least Frequently Used): Evicts the item that has been accessed the fewest times overall. Good for static asset caching.",
            "- TTL (Time To Live): An absolute expiration timer attached to a key. After 60 seconds (for example), the key automatically deletes itself."
          ]
        },
        exercises: [
          {
            question: "If your application calculates a daily trending leaderboard once every 24 hours, what is the best cache eviction strategy?",
            answer: "A TTL (Time To Live) strategy set to 24 hours. Since the data is only calculated daily, it automatically expires right when the new leaderboard is ready to be generated."
          },
          {
            question: "Why might an e-commerce shopping cart use a Write-Behind cache for adding items?",
            answer: "To ensure lightning-fast user experience during peak traffic (like Black Friday). The write is instantly acknowledged from RAM, and flushed to the slow database in the background. (However, they risk losing the cart item if the cache server crashes)."
          }
        ]
      },
      {
        title: "Message Queues & Event-Driven Architecture",
        content: [
          "Synchronous requests are dangerous at scale. If Service A calls Service B, and Service B is slow, Service A halts. If Service B is completely down, the user request fails.",
          "Message Queues (like Apache Kafka, RabbitMQ, or AWS SQS) solve this by decoupling services. Instead of Service A calling Service B directly, Service A drops a 'Message' into the Queue and immediately responds to the user. Service B picks up the message from the Queue at its own pace and processes it asynchronously.",
          "This provides extreme resiliency. If the Image Processing Service (Service B) goes offline, the web server (Service A) doesn't care. It keeps accepting user uploads and dropping them into the queue. The queue acts as a massive shock absorber. When the Image service comes back online, it simply starts pulling the backlog of messages from the queue.",
          "Event-Driven Architectures take this further. A service publishes an 'Event' (e.g., 'UserRegistered'). Any number of other services can subscribe to that event. The Welcome Email Service, the Analytics Service, and the Fraud Detection Service can all react to the 'UserRegistered' event simultaneously, without the original User Service even knowing they exist."
        ],
        deepDive: {
          title: "At-Least-Once vs. Exactly-Once Delivery",
          content: [
            "In distributed messaging, achieving 'Exactly-Once' delivery is mathematically near-impossible due to network failures.",
            "Most robust queues (like Kafka) guarantee 'At-Least-Once' delivery. This means a consumer is guaranteed to receive a message, but during a network blip, the queue might accidentally send the *same* message twice.",
            "Because of this, consumers MUST be Idempotent. Idempotency means that processing the same message twice has the exact same effect as processing it once. For example, 'Deduct $10 from account' is NOT idempotent. 'Set account balance to $50' IS idempotent."
          ]
        },
        exercises: [
          {
            question: "How does a Message Queue protect a backend database during a massive traffic spike (e.g., buying concert tickets)?",
            answer: "It acts as a buffer (shock absorber). Instead of 100,000 requests hitting the database simultaneously and crashing it, the requests are queued. The database workers pull from the queue at a safe, controlled rate."
          },
          {
            question: "Why must payment processing workers reading from a message queue be Idempotent?",
            answer: "Because queues generally guarantee 'At-Least-Once' delivery. A network timeout might cause the queue to send the same payment request twice. If the worker isn't idempotent, the customer will be double-charged."
          }
        ]
      }
    ],
    exam: {
      title: "Module 3 Certification Exam",
      questions: [
        {
          q: "Which caching strategy provides the fastest write performance, but risks permanent data loss if the cache node crashes?",
          options: ["Write-Through", "Write-Around", "Write-Behind (Write-Back)", "Read-Through"],
          correctIndex: 2,
          explanation: "Write-Behind saves data directly to RAM (which is incredibly fast) and returns success to the user immediately, before the data has been securely saved to the persistent disk database."
        },
        {
          q: "What is the primary architectural benefit of inserting a Message Queue between a web server and an image processing worker?",
          options: ["It encrypts the image data automatically.", "It tightly couples the services for faster execution.", "It decouples the services, allowing the web server to respond instantly even if the worker is slow or offline.", "It converts the image into a binary format."],
          correctIndex: 2,
          explanation: "Decoupling is the core benefit. The web server doesn't wait for the heavy processing to finish; it just hands off the job to the queue, ensuring the user gets an immediate response."
        },
        {
          q: "Which cache eviction policy explicitly removes the data that has not been accessed for the longest continuous amount of time?",
          options: ["LRU (Least Recently Used)", "LFU (Least Frequently Used)", "FIFO (First In, First Out)", "TTL (Time To Live)"],
          correctIndex: 0,
          explanation: "LRU (Least Recently Used) keeps the most recently accessed items in memory and drops the ones that have been ignored for the longest period."
        }
      ]
    }
  }
];
