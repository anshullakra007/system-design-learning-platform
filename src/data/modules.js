export const modules = [
  {
    id: 1,
    title: "Module 1: Advanced Architecture",
    topics: [
      {
        title: "Hardware Constraints & Latency Numbers",
        concept: "The foundation of all distributed systems lies in hardware bottlenecks. Recognizing the precise latency jumps across the memory hierarchy is crucial for capacity planning.",
        dive: "L1 cache reference: ~0.5ns, Branch mispredict: ~5ns, L2 cache: ~7ns, Mutex lock/unlock: ~25ns, Main memory (RAM): ~100ns, Read 1MB sequentially from memory: ~250µs, Read 1MB sequentially from network: ~10ms, Read 1MB sequentially from disk: ~30ms, Packet roundtrip CA to Netherlands: ~150ms. A system is overwhelmingly I/O bound in web architectures.",
        tradeoffs: [
          { item: "CPU Cache (SRAM)", speed: "1-10 ns", capacity: "L3 up to ~64MB", cost: "Highest" },
          { item: "Main Memory (DRAM)", speed: "100 ns", capacity: "TBs", cost: "High" },
          { item: "Solid State (NVMe)", speed: "10-100 µs", capacity: "TBs-PBs", cost: "Moderate" }
        ],
        interview: {
          question: "Estimate the latency impact of hitting a Redis cache vs an indexed SSD Postgres read.",
          answer: "Redis (in-memory) will incur network round-trip (~0.5ms on AWS same-AZ) + RAM read (~100ns). Postgres SSD read adds seek/read time (~10-100µs) + parsing overhead. While SSDs are fast, bypassing disk I/O and query planning yields sub-millisecond latencies critical for high-throughput reads."
        }
      },
      {
        title: "Statelessness & The CAP Theorem",
        concept: "Eric Brewer's CAP Theorem dictates that in the presence of a network partition (P), a distributed data store must choose between Consistency (C) and Availability (A).",
        dive: "Consistency implies all nodes see the same data at the same time. Availability implies every request receives a response (not an error). In real-world web scale (where partitions are guaranteed), you must choose CP or AP. AP relies on Eventual Consistency (e.g., DNS, Cassandra) often resolved via Vector Clocks or Last-Write-Wins (LWW) conflict resolution.",
        tradeoffs: [
          { item: "CP (Consistency + Partition Tolerance)", pros: "Strictly accurate data (e.g., Banking ledgers, MongoDB)", cons: "Blocks/errors out if nodes lose communication" },
          { item: "AP (Availability + Partition Tolerance)", pros: "Always responds, high uptime (e.g., DynamoDB, Cassandra)", cons: "Stale data, complex conflict resolution" }
        ],
        interview: {
          question: "How does Amazon Dynamo achieve high availability?",
          answer: "Dynamo is an AP system. It uses consistent hashing for partitioning, sloppy quorums and hinted handoff to handle temporary node failures, and vector clocks to resolve concurrent write conflicts, prioritizing writes above all."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Module 2: Network & Load Balancing",
    topics: [
      {
        title: "L4 vs L7 Load Balancing",
        concept: "Load Balancers distribute traffic across a cluster. The OSI layer at which they operate dictates their computational cost and routing intelligence.",
        dive: "L4 LBs (e.g., AWS NLB, HAProxy) route at the Transport layer (TCP/UDP) using IP and port. They do not inspect the packet payload, meaning zero SSL termination overhead. L7 LBs (e.g., AWS ALB, NGINX) inspect the HTTP/HTTPS header, allowing for routing by URL path, SNI, or cookie, but at a higher compute cost.",
        tradeoffs: [
          { item: "Layer 4 LB", speed: "Ultra-fast (kernel-level routing)", intelligence: "Low (IP/Port only)", useCase: "Database routing, high-throughput gaming" },
          { item: "Layer 7 LB", speed: "Slower (inspects payload)", intelligence: "High (URL, Headers)", useCase: "Microservice API gateways, SSL Termination" }
        ],
        interview: {
          question: "How does consistent hashing prevent cache avalanches during scaling?",
          answer: "Modulo hashing (hash % N) forces complete rehashing when N (servers) changes. Consistent hashing maps keys and servers to a ring (0-360 deg). Adding a server only displaces keys strictly between it and the adjacent node (approx 1/N keys), maintaining cache stability."
        }
      },
      {
        title: "TCP Mechanics & Head-of-Line Blocking",
        concept: "TCP guarantees delivery via congestion control and windowing, but introduces latency bottlenecks.",
        dive: "HTTP/1.1 suffers from Head-of-Line (HoL) blocking at the application layer. HTTP/2 solved this via multiplexing, but HoL blocking remained at the TCP layer (one lost packet halts the entire connection). HTTP/3 (QUIC) runs over UDP to eliminate TCP HoL blocking while maintaining cryptographic reliability.",
        tradeoffs: [],
        interview: {
          question: "Why did Google build QUIC (HTTP/3) over UDP instead of TCP?",
          answer: "To bypass the OS kernel's TCP stack constraints. QUIC eliminates TCP handshake overhead (0-RTT for known servers) and removes TCP-level Head-of-Line blocking, allowing independent byte streams to progress even if one stream drops a packet."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Module 3: Database Internals",
    topics: [
      {
        title: "B-Trees vs LSM-Trees",
        concept: "How databases store bytes on disk determines whether they are optimized for read-heavy or write-heavy workloads.",
        dive: "Relational DBs (Postgres, MySQL) typically use B-Trees, where data is updated in-place. This makes reads O(log N) and highly efficient, but writes incur random disk I/O. NoSQL DBs (Cassandra, RocksDB) use Log-Structured Merge (LSM) Trees. Writes are sequential (appended to an in-memory MemTable, then flushed to immutable SSTables on disk), allowing massive write throughput. Reads are slower as they must check multiple SSTables (mitigated by Bloom Filters).",
        tradeoffs: [
          { item: "B-Tree (Postgres)", optimizedFor: "Read-heavy workloads", writes: "Random I/O (Slower)", reads: "Fast, predictable" },
          { item: "LSM-Tree (Cassandra)", optimizedFor: "Write-heavy workloads", writes: "Sequential I/O (Blazing fast)", reads: "Slower (relies on compaction/Bloom Filters)" }
        ],
        interview: {
          question: "How does Cassandra achieve fast reads despite using LSM-Trees?",
          answer: "It uses Bloom Filters in memory. A Bloom Filter tells the DB 'definitely not here' or 'maybe here'. If it's 'definitely not', it skips the disk read entirely. If 'maybe', it uses sparse indexes to quickly locate the data block in the SSTable."
        }
      },
      {
        title: "Distributed Transactions (2PC & Sagas)",
        concept: "Maintaining atomicity across multiple microservices without a shared database.",
        dive: "Two-Phase Commit (2PC) relies on a coordinator to ensure all nodes Prepare, then Commit. It is blocking and non-resilient to coordinator failure. The Saga Pattern breaks the transaction into local DB transactions. If a step fails, compensating transactions are published to undo the previous steps.",
        tradeoffs: [],
        interview: {
          question: "How would you handle a distributed payment transaction (deduct balance -> ship order)?",
          answer: "Avoid 2PC due to lock contention. Use an Orchestrated Saga Pattern with a durable message queue (Kafka) ensuring At-Least-Once delivery, and implement Idempotency Keys on all endpoints to prevent double-charging during retries."
        }
      }
    ]
  }
];
