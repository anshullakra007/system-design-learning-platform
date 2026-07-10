export const certificationTiers = {
  beginner: {
    title: "Tier 1: Foundations",
    description: "Definitions, basic trade-offs, and core components.",
    timeLimit: 15 * 60, // 15 minutes
    passingScore: 3,
    questions: [
      {
        question: "According to the CAP theorem, which two guarantees can a distributed system provide simultaneously when a network partition occurs?",
        options: [
          "Consistency and Availability",
          "Consistency and Partition Tolerance",
          "Availability and Partition Tolerance",
          "You must choose either Consistency or Availability"
        ],
        correctIndex: 3
      },
      {
        question: "What is the primary difference between a Forward Proxy and a Reverse Proxy?",
        options: [
          "Forward proxy acts on behalf of the client; Reverse proxy acts on behalf of the server",
          "Forward proxy acts on behalf of the server; Reverse proxy acts on behalf of the client",
          "Forward proxy caches data; Reverse proxy routes data",
          "There is no difference, they are synonymous terms"
        ],
        correctIndex: 0
      },
      {
        question: "Which HTTP verb is strictly considered idempotent?",
        options: [
          "POST",
          "PUT",
          "PATCH",
          "CONNECT"
        ],
        correctIndex: 1
      },
      {
        question: "In a standard DNS resolution flow, if the Local Resolver does not have the IP in its cache, what is the first server it queries?",
        options: [
          "TLD (Top Level Domain) Server",
          "Authoritative Name Server",
          "Root Name Server",
          "ISP Local Server"
        ],
        correctIndex: 2
      }
    ]
  },
  intermediate: {
    title: "Tier 2: Architecture",
    description: "Scaling, bottlenecks, and data management.",
    timeLimit: 20 * 60, // 20 minutes
    passingScore: 3,
    questions: [
      {
        question: "When using Consistent Hashing for database sharding, what happens when a new node is added to the ring?",
        options: [
          "All keys are remapped across all nodes",
          "Only keys mapping to the newly added node are moved from their previous node",
          "The hash function must be rewritten to accommodate the new node",
          "No keys are moved, but all future writes go to the new node"
        ],
        correctIndex: 1
      },
      {
        question: "Which cache invalidation policy minimizes write latency to the database but carries the highest risk of data loss on cache node failure?",
        options: [
          "Write-through",
          "Write-around",
          "Write-back (Write-behind)",
          "Cache-aside"
        ],
        correctIndex: 2
      },
      {
        question: "In a CDN topology, what is the purpose of an 'Origin Shield'?",
        options: [
          "To provide a WAF (Web Application Firewall) against DDoS attacks",
          "To act as an intermediate cache layer to protect the origin server from thundering herd requests if multiple edge nodes miss simultaneously",
          "To encrypt the data payload before it reaches the edge",
          "To geographically distribute the origin server"
        ],
        correctIndex: 1
      },
      {
        question: "Why might an architecture choose a Message Queue (like RabbitMQ) over a Pub/Sub system (like Kafka) for task processing?",
        options: [
          "Pub/Sub systems cannot guarantee exactly-once delivery semantics",
          "Message queues natively support competing consumers where a message is processed by exactly one worker, whereas Pub/Sub broadcasts to all subscribers",
          "Message queues have higher throughput for massive data streaming",
          "Pub/Sub requires the consumer to be synchronous"
        ],
        correctIndex: 1
      }
    ]
  },
  advanced: {
    title: "Tier 3: FAANG-Level System Design",
    description: "Extreme scale, low-latency, and custom distributed systems.",
    timeLimit: 30 * 60, // 30 minutes
    passingScore: 3,
    questions: [
      {
        question: "You are architecting a high-throughput Layer 7 Load Balancer that terminates TLS. CPU usage is maxing out purely from TLS handshakes. Which architectural change is the most effective bottleneck resolution?",
        options: [
          "Switch to a Layer 4 Load Balancer and pass TLS termination to the backend microservices",
          "Deploy Dedicated Hardware Security Modules (HSMs) or specialized ASICs for cryptographic offloading at the edge",
          "Increase the core count on the L7 Load Balancer instances horizontally",
          "Switch from ECDSA to RSA certificates"
        ],
        correctIndex: 1
      },
      {
        question: "When designing a multi-threaded, in-memory key-value store handling 10M writes/sec, global locking across the hash table causes massive thread contention. What is the standard architectural approach to solve this without sacrificing atomicity?",
        options: [
          "Implement a single-threaded event loop (e.g., Redis) to bypass locking entirely",
          "Use granular lock striping (e.g., locking at the bucket level rather than the whole table)",
          "Switch to a lock-free append-only log structure",
          "All of the above are valid distributed systems approaches to solve this specific contention"
        ],
        correctIndex: 3
      },
      {
        question: "In a distributed remote code execution engine (like LeetCode), you must execute untrusted user code safely. Which combination of isolation techniques offers the most robust security against container escapes?",
        options: [
          "Docker containers running as root with limited CPU/Memory cgroups",
          "Standard Linux namespaces combined with `chroot`",
          "MicroVMs (e.g., Firecracker) wrapping Kata Containers, enforcing strict network ingress/egress drops, and seccomp-bpf filtering",
          "Running the code via Node.js `vm2` sandboxes inside Kubernetes"
        ],
        correctIndex: 2
      },
      {
        question: "How do you handle race conditions in a distributed transaction that spans a microservice architecture without using Two-Phase Commit (2PC)?",
        options: [
          "Use a Saga Pattern with compensating transactions and optimistic concurrency control (versioning) on the database records",
          "Use a global Redis lock for the duration of the entire transaction across all microservices",
          "Force all microservices to use the same underlying physical database schema",
          "Use RabbitMQ to enforce strict FIFO ordering of all requests globally"
        ],
        correctIndex: 0
      }
    ]
  }
};
