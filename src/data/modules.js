export const modules = [
  {
    "id": 1,
    "title": "How to approach a system design interview question",
    "description": "Exhaustive guide and interview questions on How to approach a system design interview question",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "> How to tackle a system design interview question.",
          "",
          "The system design interview is an **open-ended conversation**.  You are expected to lead it.",
          "",
          "You can use the following steps to guide the discussion.  To help solidify this process, work through the [System design interview questions with solutions](#system-design-interview-questions-with-solutions) section using the following steps.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of How to approach a system design interview question.",
            "answer": "Review the How to approach a system design interview question module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Step 1: Outline use cases, constraints, and assumptions",
        "content": [
          "",
          "Gather requirements and scope the problem.  Ask questions to clarify use cases and constraints.  Discuss assumptions.",
          "",
          "* Who is going to use it?",
          "* How are they going to use it?",
          "* How many users are there?",
          "* What does the system do?",
          "* What are the inputs and outputs of the system?",
          "* How much data do we expect to handle?",
          "* How many requests per second do we expect?",
          "* What is the expected read to write ratio?",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 1: Outline use cases, constraints, and assumptions.",
            "answer": "Refer to the diagrams and trade-offs of Step 1: Outline use cases, constraints, and assumptions as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Step 2: Create a high level design",
        "content": [
          "",
          "Outline a high level design with all important components.",
          "",
          "* Sketch the main components and connections",
          "* Justify your ideas",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 2: Create a high level design.",
            "answer": "Refer to the diagrams and trade-offs of Step 2: Create a high level design as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Step 3: Design core components",
        "content": [
          "",
          "Dive into details for each core component.  For example, if you were asked to [design a url shortening service](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md), discuss:",
          "",
          "* Generating and storing a hash of the full url",
          "* [MD5](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) and [Base62](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md)",
          "* Hash collisions",
          "* SQL or NoSQL",
          "* Database schema",
          "* Translating a hashed url to the full url",
          "* Database lookup",
          "* API and object-oriented design",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 3: Design core components.",
            "answer": "Refer to the diagrams and trade-offs of Step 3: Design core components as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Step 4: Scale the design",
        "content": [
          "",
          "Identify and address bottlenecks, given the constraints.  For example, do you need the following to address scalability issues?",
          "",
          "* Load balancer",
          "* Horizontal scaling",
          "* Caching",
          "* Database sharding",
          "",
          "Discuss potential solutions and trade-offs.  Everything is a trade-off.  Address bottlenecks using [principles of scalable system design](#index-of-system-design-topics).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 4: Scale the design.",
            "answer": "Refer to the diagrams and trade-offs of Step 4: Scale the design as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Back-of-the-envelope calculations",
        "content": [
          "",
          "You might be asked to do some estimates by hand.  Refer to the [Appendix](#appendix) for the following resources:",
          "",
          "* [Use back of the envelope calculations](http://highscalability.com/blog/2011/1/26/google-pro-tip-use-back-of-the-envelope-calculations-to-choo.html)",
          "* [Powers of two table](#powers-of-two-table)",
          "* [Latency numbers every programmer should know](#latency-numbers-every-programmer-should-know)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Back-of-the-envelope calculations.",
            "answer": "Refer to the diagrams and trade-offs of Back-of-the-envelope calculations as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "Check out the following links to get a better idea of what to expect:",
          "",
          "* [How to ace a systems design interview](https://web.archive.org/web/20210505130322/https://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/)",
          "* [The system design interview](http://www.hiredintech.com/system-design)",
          "* [Intro to Architecture and Systems Design Interviews](https://www.youtube.com/watch?v=ZgdS0EUmn70)",
          "* [System design template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "How to approach a system design interview question - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in How to approach a system design interview question?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 2,
    "title": "System design interview questions with solutions",
    "description": "Exhaustive guide and interview questions on System design interview questions with solutions",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "> Common system design interview questions with sample discussions, code, and diagrams.",
          ">",
          "> Solutions linked to content in the `solutions/` folder.",
          "",
          "| Question | |",
          "|---|---|",
          "| Design Pastebin.com (or Bit.ly) | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md) |",
          "| Design the Twitter timeline and search (or Facebook feed and search) | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md) |",
          "| Design a web crawler | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md) |",
          "| Design Mint.com | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md) |",
          "| Design the data structures for a social network | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md) |",
          "| Design a key-value store for a search engine | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md) |",
          "| Design Amazon's sales ranking by category feature | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md) |",
          "| Design a system that scales to millions of users on AWS | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md) |",
          "| Add a system design question | [Contribute](#contributing) |",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of System design interview questions with solutions.",
            "answer": "Review the System design interview questions with solutions module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Design Pastebin.com (or Bit.ly)",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/4edXG0T.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Design Pastebin: How would you generate a unique, short URL?",
            "answer": "You can use an auto-incrementing integer ID from a database and encode it using Base62 (a-z, A-Z, 0-9) to generate a short 7-character hash."
          }
        ]
      },
      {
        "title": "Design the Twitter timeline and search (or Facebook feed and search)",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/twitter/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/jrUBAF7.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Design Twitter: How do you handle the timeline of a user with millions of followers (e.g., Justin Bieber)?",
            "answer": "You use a hybrid approach. For normal users, Fanout-on-write pushes tweets to followers. For celebrities, you use Fanout-on-load (pull), calculating their tweets into the timeline dynamically at read-time to avoid millions of writes."
          }
        ]
      },
      {
        "title": "Design a web crawler",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/web_crawler/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/bWxPtQA.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design a web crawler.",
            "answer": "Refer to the diagrams and trade-offs of Design a web crawler as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Design Mint.com",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/mint/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/V5q57vU.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design Mint.com.",
            "answer": "Refer to the diagrams and trade-offs of Design Mint.com as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Design the data structures for a social network",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/social_graph/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/cdCv5g7.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design the data structures for a social network.",
            "answer": "Refer to the diagrams and trade-offs of Design the data structures for a social network as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Design a key-value store for a search engine",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/query_cache/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/4j99mhe.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design a key-value store for a search engine.",
            "answer": "Refer to the diagrams and trade-offs of Design a key-value store for a search engine as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Design Amazon's sales ranking by category feature",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/sales_rank/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/MzExP06.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design Amazon's sales ranking by category feature.",
            "answer": "Refer to the diagrams and trade-offs of Design Amazon's sales ranking by category feature as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Design a system that scales to millions of users on AWS",
        "content": [
          "",
          "[View exercise and solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/scaling_aws/README.md)",
          "",
          "![Imgur](https://raw.githubusercontent.com/donnemartin/system-design-primer/master/images/jj3A5N8.png)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Design a system that scales to millions of users on AWS.",
            "answer": "Refer to the diagrams and trade-offs of Design a system that scales to millions of users on AWS as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "System design interview questions with solutions - Final Exam",
      "questions": [
        {
          "q": "When designing a URL Shortener (like Pastebin/Bit.ly), which hashing strategy prevents collisions while maintaining a short URL length?",
          "options": [
            "MD5 with Base62 Encoding",
            "SHA-256",
            "Bcrypt",
            "A simple sequential ID generator without encoding"
          ],
          "correctIndex": 0,
          "explanation": "Base62 encoding (a-z, A-Z, 0-9) of an MD5 hash (or even just base62 encoding a unique integer ID) creates a very short, URL-safe string. MD5 is fast and sufficient for this non-cryptographic use case."
        },
        {
          "q": "In a social network (like Twitter) timeline generation, what is the 'Fanout' approach?",
          "options": [
            "Dynamically calculating the timeline every time a user refreshes the page.",
            "Pre-computing the timeline by pushing a new tweet to all followers' cached timelines upon creation.",
            "Deleting old tweets to save database storage.",
            "A load balancing algorithm that fans requests out to all servers."
          ],
          "correctIndex": 1,
          "explanation": "Fanout-on-write pushes the new tweet to the pre-computed timeline caches of all followers. This makes reads O(1) and extremely fast, which is critical for read-heavy systems."
        }
      ]
    }
  },
  {
    "id": 3,
    "title": "Object-oriented design interview questions with solutions",
    "description": "Exhaustive guide and interview questions on Object-oriented design interview questions with solutions",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "> Common object-oriented design interview questions with sample discussions, code, and diagrams.",
          ">",
          "> Solutions linked to content in the `solutions/` folder.",
          "",
          ">**Note: This section is under development**",
          "",
          "| Question | |",
          "|---|---|",
          "| Design a hash map | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb)  |",
          "| Design a least recently used cache | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/lru_cache/lru_cache.ipynb)  |",
          "| Design a call center | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/call_center/call_center.ipynb)  |",
          "| Design a deck of cards | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/deck_of_cards/deck_of_cards.ipynb)  |",
          "| Design a parking lot | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/parking_lot/parking_lot.ipynb)  |",
          "| Design a chat server | [Solution](https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/online_chat/online_chat.ipynb)  |",
          "| Design a circular array | [Contribute](#contributing)  |",
          "| Add an object-oriented design question | [Contribute](#contributing) |",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Object-oriented design interview questions with solutions.",
            "answer": "Review the Object-oriented design interview questions with solutions module architecture and diagrams to solidify your understanding."
          }
        ]
      }
    ],
    "exam": {
      "title": "Object-oriented design interview questions with solutions - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Object-oriented design interview questions with solutions?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 4,
    "title": "System design topics: start here",
    "description": "Exhaustive guide and interview questions on System design topics: start here",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "New to system design?",
          "",
          "First, you'll need a basic understanding of common principles, learning about what they are, how they are used, and their pros and cons.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of System design topics: start here.",
            "answer": "Review the System design topics: start here module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Step 1: Review the scalability video lecture",
        "content": [
          "",
          "[Scalability Lecture at Harvard](https://www.youtube.com/watch?v=-W9F__D3oY4)",
          "",
          "* Topics covered:",
          "* Vertical scaling",
          "* Horizontal scaling",
          "* Caching",
          "* Load balancing",
          "* Database replication",
          "* Database partitioning",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 1: Review the scalability video lecture.",
            "answer": "Refer to the diagrams and trade-offs of Step 1: Review the scalability video lecture as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Step 2: Review the scalability article",
        "content": [
          "",
          "[Scalability](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)",
          "",
          "* Topics covered:",
          "* [Clones](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)",
          "* [Databases](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)",
          "* [Caches](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)",
          "* [Asynchronism](https://web.archive.org/web/20220926171507/https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Step 2: Review the scalability article.",
            "answer": "Refer to the diagrams and trade-offs of Step 2: Review the scalability article as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Next steps",
        "content": [
          "",
          "Next, we'll look at high-level trade-offs:",
          "",
          "* **Performance** vs **scalability**",
          "* **Latency** vs **throughput**",
          "* **Availability** vs **consistency**",
          "",
          "Keep in mind that **everything is a trade-off**.",
          "",
          "Then we'll dive into more specific topics such as DNS, CDNs, and load balancers.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Next steps.",
            "answer": "Refer to the diagrams and trade-offs of Next steps as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "System design topics: start here - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in System design topics: start here?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 5,
    "title": "Performance vs scalability",
    "description": "Exhaustive guide and interview questions on Performance vs scalability",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "A service is **scalable** if it results in increased **performance** in a manner proportional to resources added. Generally, increasing performance means serving more units of work, but it can also be to handle larger units of work, such as when datasets grow.<sup><a href=http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html>1</a></sup>",
          "",
          "Another way to look at performance vs scalability:",
          "",
          "* If you have a **performance** problem, your system is slow for a single user.",
          "* If you have a **scalability** problem, your system is fast for a single user but slow under heavy load.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Performance vs scalability.",
            "answer": "Review the Performance vs scalability module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [A word on scalability](http://www.allthingsdistributed.com/2006/03/a_word_on_scalability.html)",
          "* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Performance vs scalability - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Performance vs scalability?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 6,
    "title": "Latency vs throughput",
    "description": "Exhaustive guide and interview questions on Latency vs throughput",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "**Latency** is the time to perform some action or to produce some result.",
          "",
          "**Throughput** is the number of such actions or results per unit of time.",
          "",
          "Generally, you should aim for **maximal throughput** with **acceptable latency**.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Latency vs throughput.",
            "answer": "Review the Latency vs throughput module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [Understanding latency vs throughput](https://community.cadence.com/cadence_blogs_8/b/fv/posts/understanding-latency-vs-throughput)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Latency vs throughput - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Latency vs throughput?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 7,
    "title": "Availability vs consistency",
    "description": "Exhaustive guide and interview questions on Availability vs consistency",
    "chapters": [
      {
        "title": "CAP theorem",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/bgLMI2u.png\">",
          "<br/>",
          "<i><a href=\"https://robertgreiner.com/cap-theorem-revisited\">Source: CAP theorem revisited</a></i>",
          "</p>",
          "",
          "In a distributed computer system, you can only support two of the following guarantees:",
          "",
          "* **Consistency** - Every read receives the most recent write or an error",
          "* **Availability** - Every request receives a response, without guarantee that it contains the most recent version of the information",
          "* **Partition Tolerance** - The system continues to operate despite arbitrary partitioning due to network failures",
          "",
          "*Networks aren't reliable, so you'll need to support partition tolerance.  You'll need to make a software tradeoff between consistency and availability.*",
          "",
          "**Deep Dive:** AP - availability and partition tolerance"
        ],
        "deepDive": {
          "title": "CP - consistency and partition tolerance",
          "content": [
            "",
            "Waiting for a response from the partitioned node might result in a timeout error.  CP is a good choice if your business needs require atomic reads and writes.",
            "",
            "",
            "Responses return the most readily available version of the data available on any node, which might not be the latest.  Writes might take some time to propagate when the partition is resolved.",
            "",
            "AP is a good choice if the business needs to allow for [eventual consistency](#eventual-consistency) or when the system needs to continue working despite external errors.",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind CAP theorem.",
            "answer": "Refer to the diagrams and trade-offs of CAP theorem as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [CAP theorem revisited](https://robertgreiner.com/cap-theorem-revisited/)",
          "* [A plain english introduction to CAP theorem](http://ksat.me/a-plain-english-introduction-to-cap-theorem)",
          "* [CAP FAQ](https://github.com/henryr/cap-faq)",
          "* [The CAP theorem](https://www.youtube.com/watch?v=k-Yaq8AHlFA)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Availability vs consistency - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Availability vs consistency?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 8,
    "title": "Consistency patterns",
    "description": "Exhaustive guide and interview questions on Consistency patterns",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "With multiple copies of the same data, we are faced with options on how to synchronize them so clients have a consistent view of the data.  Recall the definition of consistency from the [CAP theorem](#cap-theorem) - Every read receives the most recent write or an error.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Consistency patterns.",
            "answer": "Review the Consistency patterns module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Weak consistency",
        "content": [
          "",
          "After a write, reads may or may not see it.  A best effort approach is taken.",
          "",
          "This approach is seen in systems such as memcached.  Weak consistency works well in real time use cases such as VoIP, video chat, and realtime multiplayer games.  For example, if you are on a phone call and lose reception for a few seconds, when you regain connection you do not hear what was spoken during connection loss.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Weak consistency.",
            "answer": "Refer to the diagrams and trade-offs of Weak consistency as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Eventual consistency",
        "content": [
          "",
          "After a write, reads will eventually see it (typically within milliseconds).  Data is replicated asynchronously.",
          "",
          "This approach is seen in systems such as DNS and email.  Eventual consistency works well in highly available systems.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Eventual consistency.",
            "answer": "Refer to the diagrams and trade-offs of Eventual consistency as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Strong consistency",
        "content": [
          "",
          "After a write, reads will see it.  Data is replicated synchronously.",
          "",
          "This approach is seen in file systems and RDBMSes.  Strong consistency works well in systems that need transactions.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Strong consistency.",
            "answer": "Refer to the diagrams and trade-offs of Strong consistency as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [Transactions across data centers](http://snarfed.org/transactions_across_datacenters_io.html)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Consistency patterns - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Consistency patterns?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 9,
    "title": "Availability patterns",
    "description": "Exhaustive guide and interview questions on Availability patterns",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "There are two complementary patterns to support high availability: **fail-over** and **replication**.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Availability patterns.",
            "answer": "Review the Availability patterns module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Fail-over",
        "content": [
          "",
          "**Deep Dive:** Active-active"
        ],
        "deepDive": {
          "title": "Active-passive",
          "content": [
            "",
            "With active-passive fail-over, heartbeats are sent between the active and the passive server on standby.  If the heartbeat is interrupted, the passive server takes over the active's IP address and resumes service.",
            "",
            "The length of downtime is determined by whether the passive server is already running in 'hot' standby or whether it needs to start up from 'cold' standby.  Only the active server handles traffic.",
            "",
            "Active-passive failover can also be referred to as master-slave failover.",
            "",
            "",
            "In active-active, both servers are managing traffic, spreading the load between them.",
            "",
            "If the servers are public-facing, the DNS would need to know about the public IPs of both servers.  If the servers are internal-facing, application logic would need to know about both servers.",
            "",
            "Active-active failover can also be referred to as master-master failover.",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Fail-over.",
            "answer": "Refer to the diagrams and trade-offs of Fail-over as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): failover",
        "content": [
          "",
          "* Fail-over adds more hardware and additional complexity.",
          "* There is a potential for loss of data if the active system fails before any newly written data can be replicated to the passive.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): failover.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): failover as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Replication",
        "content": [
          ""
        ],
        "deepDive": {
          "title": "Master-slave and master-master",
          "content": [
            "",
            "This topic is further discussed in the [Database](#database) section:",
            "",
            "* [Master-slave replication](#master-slave-replication)",
            "* [Master-master replication](#master-master-replication)",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Replication.",
            "answer": "Refer to the diagrams and trade-offs of Replication as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Availability in numbers",
        "content": [
          "",
          "Availability is often quantified by uptime (or downtime) as a percentage of time the service is available.  Availability is generally measured in number of 9s--a service with 99.99% availability is described as having four 9s.",
          "",
          "**Deep Dive:** 99.99% availability - four 9s",
          "",
          "**Deep Dive:** Availability in parallel vs in sequence",
          "",
          "If a service consists of multiple components prone to failure, the service's overall availability depends on whether the components are in sequence or in parallel.",
          "",
          "###### In sequence",
          "",
          "Overall availability decreases when two components with availability < 100% are in sequence:",
          "",
          "```",
          "Availability (Total) = Availability (Foo) * Availability (Bar)",
          "```",
          "",
          "If both `Foo` and `Bar` each had 99.9% availability, their total availability in sequence would be 99.8%.",
          "",
          "###### In parallel",
          "",
          "Overall availability increases when two components with availability < 100% are in parallel:",
          "",
          "```",
          "Availability (Total) = 1 - (1 - Availability (Foo)) * (1 - Availability (Bar))",
          "```",
          "",
          "If both `Foo` and `Bar` each had 99.9% availability, their total availability in parallel would be 99.9999%.",
          ""
        ],
        "deepDive": {
          "title": "99.9% availability - three 9s",
          "content": [
            "",
            "| Duration            | Acceptable downtime|",
            "|---------------------|--------------------|",
            "| Downtime per year   | 8h 45min 57s       |",
            "| Downtime per month  | 43m 49.7s          |",
            "| Downtime per week   | 10m 4.8s           |",
            "| Downtime per day    | 1m 26.4s           |",
            "",
            "",
            "| Duration            | Acceptable downtime|",
            "|---------------------|--------------------|",
            "| Downtime per year   | 52min 35.7s        |",
            "| Downtime per month  | 4m 23s             |",
            "| Downtime per week   | 1m 5s              |",
            "| Downtime per day    | 8.6s               |"
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Availability in numbers.",
            "answer": "Refer to the diagrams and trade-offs of Availability in numbers as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Availability patterns - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Availability patterns?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 10,
    "title": "Domain name system",
    "description": "Exhaustive guide and interview questions on Domain name system",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/IOyLj4i.jpg\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/srikrupa5/dns-security-presentation-issa>Source: DNS security presentation</a></i>",
          "</p>",
          "",
          "A Domain Name System (DNS) translates a domain name such as www.example.com to an IP address.",
          "",
          "DNS is hierarchical, with a few authoritative servers at the top level.  Your router or ISP provides information about which DNS server(s) to contact when doing a lookup.  Lower level DNS servers cache mappings, which could become stale due to DNS propagation delays.  DNS results can also be cached by your browser or OS for a certain period of time, determined by the [time to live (TTL)](https://en.wikipedia.org/wiki/Time_to_live).",
          "",
          "* **NS record (name server)** - Specifies the DNS servers for your domain/subdomain.",
          "* **MX record (mail exchange)** - Specifies the mail servers for accepting messages.",
          "* **A record (address)** - Points a name to an IP address.",
          "* **CNAME (canonical)** - Points a name to another name or `CNAME` (example.com to www.example.com) or to an `A` record.",
          "",
          "Services such as [CloudFlare](https://www.cloudflare.com/dns/) and [Route 53](https://aws.amazon.com/route53/) provide managed DNS services.  Some DNS services can route traffic through various methods:",
          "",
          "* [Weighted round robin](https://www.jscape.com/blog/load-balancing-algorithms)",
          "* Prevent traffic from going to servers under maintenance",
          "* Balance between varying cluster sizes",
          "* A/B testing",
          "* [Latency-based](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html)",
          "* [Geolocation-based](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geo.html)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Domain name system.",
            "answer": "Review the Domain name system module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Disadvantage(s): DNS",
        "content": [
          "",
          "* Accessing a DNS server introduces a slight delay, although mitigated by caching described above.",
          "* DNS server management could be complex and is generally managed by [governments, ISPs, and large companies](http://superuser.com/questions/472695/who-controls-the-dns-servers/472729).",
          "* DNS services have recently come under [DDoS attack](http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/), preventing users from accessing websites such as Twitter without knowing Twitter's IP address(es).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): DNS.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): DNS as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [DNS architecture](https://technet.microsoft.com/en-us/library/dd197427(v=ws.10).aspx)",
          "* [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)",
          "* [DNS articles](https://support.dnsimple.com/categories/dns/)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Domain name system - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Domain name system?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 11,
    "title": "Content delivery network",
    "description": "Exhaustive guide and interview questions on Content delivery network",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/h9TAuGI.jpg\">",
          "<br/>",
          "<i><a href=https://www.creative-artworks.eu/why-use-a-content-delivery-network-cdn/>Source: Why use a CDN</a></i>",
          "</p>",
          "",
          "A content delivery network (CDN) is a globally distributed network of proxy servers, serving content from locations closer to the user.  Generally, static files such as HTML/CSS/JS, photos, and videos are served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content.  The site's DNS resolution will tell clients which server to contact.",
          "",
          "Serving content from CDNs can significantly improve performance in two ways:",
          "",
          "* Users receive content from data centers close to them",
          "* Your servers do not have to serve requests that the CDN fulfills",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Content delivery network.",
            "answer": "Review the Content delivery network module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Push CDNs",
        "content": [
          "",
          "Push CDNs receive new content whenever changes occur on your server.  You take full responsibility for providing content, uploading directly to the CDN and rewriting URLs to point to the CDN.  You can configure when content expires and when it is updated.  Content is uploaded only when it is new or changed, minimizing traffic, but maximizing storage.",
          "",
          "Sites with a small amount of traffic or sites with content that isn't often updated work well with push CDNs.  Content is placed on the CDNs once, instead of being re-pulled at regular intervals.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Push CDNs.",
            "answer": "Refer to the diagrams and trade-offs of Push CDNs as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Pull CDNs",
        "content": [
          "",
          "Pull CDNs grab new content from your server when the first user requests the content.  You leave the content on your server and rewrite URLs to point to the CDN.  This results in a slower request until the content is cached on the CDN.",
          "",
          "A [time-to-live (TTL)](https://en.wikipedia.org/wiki/Time_to_live) determines how long content is cached.  Pull CDNs minimize storage space on the CDN, but can create redundant traffic if files expire and are pulled before they have actually changed.",
          "",
          "Sites with heavy traffic work well with pull CDNs, as traffic is spread out more evenly with only recently-requested content remaining on the CDN.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Pull CDNs.",
            "answer": "Refer to the diagrams and trade-offs of Pull CDNs as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): CDN",
        "content": [
          "",
          "* CDN costs could be significant depending on traffic, although this should be weighed with additional costs you would incur not using a CDN.",
          "* Content might be stale if it is updated before the TTL expires it.",
          "* CDNs require changing URLs for static content to point to the CDN.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): CDN.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): CDN as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [Globally distributed content delivery](https://figshare.com/articles/Globally_distributed_content_delivery/6605972)",
          "* [The differences between push and pull CDNs](https://www.geeksforgeeks.org/system-design/pull-cdn-vs-push-cdn/)",
          "* [Wikipedia](https://en.wikipedia.org/wiki/Content_delivery_network)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Content delivery network - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Content delivery network?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 12,
    "title": "Load balancer",
    "description": "Exhaustive guide and interview questions on Load balancer",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/h81n9iK.png\">",
          "<br/>",
          "<i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>",
          "</p>",
          "",
          "Load balancers distribute incoming client requests to computing resources such as application servers and databases.  In each case, the load balancer returns the response from the computing resource to the appropriate client.  Load balancers are effective at:",
          "",
          "* Preventing requests from going to unhealthy servers",
          "* Preventing overloading resources",
          "* Helping to eliminate a single point of failure",
          "",
          "Load balancers can be implemented with hardware (expensive) or with software such as HAProxy.",
          "",
          "Additional benefits include:",
          "",
          "* **SSL termination** - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations",
          "* Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509) on each server",
          "* **Session persistence** - Issue cookies and route a specific client's requests to same instance if the web apps do not keep track of sessions",
          "",
          "To protect against failures, it's common to set up multiple load balancers, either in [active-passive](#active-passive) or [active-active](#active-active) mode.",
          "",
          "Load balancers can route traffic based on various metrics, including:",
          "",
          "* Random",
          "* Least loaded",
          "* Session/cookies",
          "* [Round robin or weighted round robin](https://www.g33kinfo.com/info/round-robin-vs-weighted-round-robin-lb)",
          "* [Layer 4](#layer-4-load-balancing)",
          "* [Layer 7](#layer-7-load-balancing)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Load balancer.",
            "answer": "Review the Load balancer module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Layer 4 load balancing",
        "content": [
          "",
          "Layer 4 load balancers look at info at the [transport layer](#communication) to decide how to distribute requests.  Generally, this involves the source, destination IP addresses, and ports in the header, but not the contents of the packet.  Layer 4 load balancers forward network packets to and from the upstream server, performing [Network Address Translation (NAT)](https://web.archive.org/web/20240117134735/https://www.nginx.com/resources/glossary/layer-4-load-balancing/).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Layer 4 load balancing.",
            "answer": "Refer to the diagrams and trade-offs of Layer 4 load balancing as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Layer 7 load balancing",
        "content": [
          "",
          "Layer 7 load balancers look at the [application layer](#communication) to decide how to distribute requests.  This can involve contents of the header, message, and cookies.  Layer 7 load balancers terminate network traffic, reads the message, makes a load-balancing decision, then opens a connection to the selected server.  For example, a layer 7 load balancer can direct video traffic to servers that host videos while directing more sensitive user billing traffic to security-hardened servers.",
          "",
          "At the cost of flexibility, layer 4 load balancing requires less time and computing resources than Layer 7, although the performance impact can be minimal on modern commodity hardware.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Layer 7 load balancing.",
            "answer": "Refer to the diagrams and trade-offs of Layer 7 load balancing as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Horizontal scaling",
        "content": [
          "",
          "Load balancers can also help with horizontal scaling, improving performance and availability.  Scaling out using commodity machines is more cost efficient and results in higher availability than scaling up a single server on more expensive hardware, called **Vertical Scaling**.  It is also easier to hire for talent working on commodity hardware than it is for specialized enterprise systems.",
          ""
        ],
        "deepDive": {
          "title": "Disadvantage(s): horizontal scaling",
          "content": [
            "",
            "* Scaling horizontally introduces complexity and involves cloning servers",
            "* Servers should be stateless: they should not contain any user-related data like sessions or profile pictures",
            "* Sessions can be stored in a centralized data store such as a [database](#database) (SQL, NoSQL) or a persistent [cache](#cache) (Redis, Memcached)",
            "* Downstream servers such as caches and databases need to handle more simultaneous connections as upstream servers scale out",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Horizontal scaling.",
            "answer": "Refer to the diagrams and trade-offs of Horizontal scaling as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): load balancer",
        "content": [
          "",
          "* The load balancer can become a performance bottleneck if it does not have enough resources or if it is not configured properly.",
          "* Introducing a load balancer to help eliminate a single point of failure results in increased complexity.",
          "* A single load balancer is a single point of failure, configuring multiple load balancers further increases complexity.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): load balancer.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): load balancer as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)",
          "* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)",
          "* [Scalability](https://web.archive.org/web/20220530193911/https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)",
          "* [Wikipedia](https://en.wikipedia.org/wiki/Load_balancing_(computing))",
          "* [Layer 4 load balancing](https://www.nginx.com/resources/glossary/layer-4-load-balancing/)",
          "* [Layer 7 load balancing](https://www.nginx.com/resources/glossary/layer-7-load-balancing/)",
          "* [ELB listener config](http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Load balancer - Final Exam",
      "questions": [
        {
          "q": "What is the primary difference between Layer 4 and Layer 7 load balancing?",
          "options": [
            "Layer 4 routes based on IP/Port; Layer 7 routes based on application data like HTTP headers.",
            "Layer 4 is slower than Layer 7 because it deeply inspects packets.",
            "Layer 7 only supports UDP, while Layer 4 supports TCP.",
            "There is no difference; they are just different hardware models."
          ],
          "correctIndex": 0,
          "explanation": "Layer 4 looks at transport layer info (IP, Port). Layer 7 looks at application layer info (HTTP headers, cookies) allowing for smarter routing at the cost of computation."
        }
      ]
    }
  },
  {
    "id": 13,
    "title": "Reverse proxy (web server)",
    "description": "Exhaustive guide and interview questions on Reverse proxy (web server)",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/n41Azff.png\">",
          "<br/>",
          "<i><a href=https://upload.wikimedia.org/wikipedia/commons/6/67/Reverse_proxy_h2g2bob.svg>Source: Wikipedia</a></i>",
          "<br/>",
          "</p>",
          "",
          "A reverse proxy is a web server that centralizes internal services and provides unified interfaces to the public.  Requests from clients are forwarded to a server that can fulfill it before the reverse proxy returns the server's response to the client.",
          "",
          "Additional benefits include:",
          "",
          "* **Increased security** - Hide information about backend servers, blacklist IPs, limit number of connections per client",
          "* **Increased scalability and flexibility** - Clients only see the reverse proxy's IP, allowing you to scale servers or change their configuration",
          "* **SSL termination** - Decrypt incoming requests and encrypt server responses so backend servers do not have to perform these potentially expensive operations",
          "* Removes the need to install [X.509 certificates](https://en.wikipedia.org/wiki/X.509) on each server",
          "* **Compression** - Compress server responses",
          "* **Caching** - Return the response for cached requests",
          "* **Static content** - Serve static content directly",
          "* HTML/CSS/JS",
          "* Photos",
          "* Videos",
          "* Etc",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Reverse proxy (web server).",
            "answer": "Review the Reverse proxy (web server) module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Load balancer vs reverse proxy",
        "content": [
          "",
          "* Deploying a load balancer is useful when you have multiple servers.  Often, load balancers  route traffic to a set of servers serving the same function.",
          "* Reverse proxies can be useful even with just one web server or application server, opening up the benefits described in the previous section.",
          "* Solutions such as NGINX and HAProxy can support both layer 7 reverse proxying and load balancing.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Load balancer vs reverse proxy.",
            "answer": "Refer to the diagrams and trade-offs of Load balancer vs reverse proxy as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): reverse proxy",
        "content": [
          "",
          "* Introducing a reverse proxy results in increased complexity.",
          "* A single reverse proxy is a single point of failure, configuring multiple reverse proxies (ie a [failover](https://en.wikipedia.org/wiki/Failover)) further increases complexity.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): reverse proxy.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): reverse proxy as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [Reverse proxy vs load balancer](https://www.nginx.com/resources/glossary/reverse-proxy-vs-load-balancer/)",
          "* [NGINX architecture](https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/)",
          "* [HAProxy architecture guide](http://www.haproxy.org/download/1.2/doc/architecture.txt)",
          "* [Wikipedia](https://en.wikipedia.org/wiki/Reverse_proxy)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Reverse proxy (web server) - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Reverse proxy (web server)?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 14,
    "title": "Application layer",
    "description": "Exhaustive guide and interview questions on Application layer",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/yB5SYwm.png\">",
          "<br/>",
          "<i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>",
          "</p>",
          "",
          "Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently.  Adding a new API results in adding application servers without necessarily adding additional web servers.  The **single responsibility principle** advocates for small and autonomous services that work together.  Small teams with small services can plan more aggressively for rapid growth.",
          "",
          "Workers in the application layer also help enable [asynchronism](#asynchronism).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Application layer.",
            "answer": "Review the Application layer module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Microservices",
        "content": [
          "",
          "Related to this discussion are [microservices](https://en.wikipedia.org/wiki/Microservices), which can be described as a suite of independently deployable, small, modular services.  Each service runs a unique process and communicates through a well-defined, lightweight mechanism to serve a business goal. <sup><a href=https://smartbear.com/learn/api-design/what-are-microservices>1</a></sup>",
          "",
          "Pinterest, for example, could have the following microservices: user profile, follower, feed, search, photo upload, etc.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Microservices.",
            "answer": "Refer to the diagrams and trade-offs of Microservices as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Service Discovery",
        "content": [
          "",
          "Systems such as [Consul](https://www.consul.io/docs/index.html), [Etcd](https://coreos.com/etcd/docs/latest), and [Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper) can help services find each other by keeping track of registered names, addresses, and ports.  [Health checks](https://www.consul.io/intro/getting-started/checks.html) help verify service integrity and are often done using an [HTTP](#hypertext-transfer-protocol-http) endpoint.  Both Consul and Etcd have a built in [key-value store](#key-value-store) that can be useful for storing config values and other shared data.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Service Discovery.",
            "answer": "Refer to the diagrams and trade-offs of Service Discovery as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): application layer",
        "content": [
          "",
          "* Adding an application layer with loosely coupled services requires a different approach from an architectural, operations, and process viewpoint (vs a monolithic system).",
          "* Microservices can add complexity in terms of deployments and operations.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): application layer.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): application layer as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale)",
          "* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)",
          "* [Service oriented architecture](https://en.wikipedia.org/wiki/Service-oriented_architecture)",
          "* [Introduction to Zookeeper](http://www.slideshare.net/sauravhaloi/introduction-to-apache-zookeeper)",
          "* [Here's what you need to know about building microservices](https://cloudncode.wordpress.com/2016/07/22/msa-getting-started/)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Application layer - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Application layer?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 15,
    "title": "Database",
    "description": "Exhaustive guide and interview questions on Database",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/Xkm5CXz.png\">",
          "<br/>",
          "<i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>",
          "</p>",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Database.",
            "answer": "Review the Database module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Relational database management system (RDBMS)",
        "content": [
          "",
          "A relational database like SQL is a collection of data items organized in tables.",
          "",
          "**ACID** is a set of properties of relational database [transactions](https://en.wikipedia.org/wiki/Database_transaction).",
          "",
          "* **Atomicity** - Each transaction is all or nothing",
          "* **Consistency** - Any transaction will bring the database from one valid state to another",
          "* **Isolation** - Executing transactions concurrently has the same results as if the transactions were executed serially",
          "* **Durability** - Once a transaction has been committed, it will remain so",
          "",
          "There are many techniques to scale a relational database: **master-slave replication**, **master-master replication**, **federation**, **sharding**, **denormalization**, and **SQL tuning**.",
          "",
          "**Deep Dive:** Master-master replication",
          "Both masters serve reads and writes and coordinate with each other on writes.  If either master goes down, the system can continue to operate with both reads and writes.",
          "",
          "<p align=\"center\">",
          "<img src=\"images/krAHLGg.png\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>",
          "</p>",
          "",
          "##### Disadvantage(s): master-master replication",
          "",
          "* You'll need a load balancer or you'll need to make changes to your application logic to determine where to write.",
          "* Most master-master systems are either loosely consistent (violating ACID) or have increased write latency due to synchronization.",
          "* Conflict resolution comes more into play as more write nodes are added and as latency increases.",
          "* See [Disadvantage(s): replication](#disadvantages-replication) for points related to **both** master-slave and master-master.",
          "",
          "##### Disadvantage(s): replication",
          "",
          "* There is a potential for loss of data if the master fails before any newly written data can be replicated to other nodes.",
          "* Writes are replayed to the read replicas.  If there are a lot of writes, the read replicas can get bogged down with replaying writes and can't do as many reads.",
          "* The more read slaves, the more you have to replicate, which leads to greater replication lag.",
          "* On some systems, writing to the master can spawn multiple threads to write in parallel, whereas read replicas only support writing sequentially with a single thread.",
          "* Replication adds more hardware and additional complexity.",
          "",
          "##### Source(s) and further reading: replication",
          "",
          "* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)",
          "* [Multi-master replication](https://en.wikipedia.org/wiki/Multi-master_replication)",
          "",
          "**Deep Dive:** Federation",
          "",
          "<p align=\"center\">",
          "<img src=\"images/U3qV33e.png\">",
          "<br/>",
          "<i><a href=https://www.youtube.com/watch?v=kKjm4ehYiMs>Source: Scaling up to your first 10 million users</a></i>",
          "</p>",
          "",
          "Federation (or functional partitioning) splits up databases by function.  For example, instead of a single, monolithic database, you could have three databases: **forums**, **users**, and **products**, resulting in less read and write traffic to each database and therefore less replication lag.  Smaller databases result in more data that can fit in memory, which in turn results in more cache hits due to improved cache locality.  With no single central master serializing writes you can write in parallel, increasing throughput.",
          "",
          "##### Disadvantage(s): federation",
          "",
          "* Federation is not effective if your schema requires huge functions or tables.",
          "* You'll need to update your application logic to determine which database to read and write.",
          "* Joining data from two databases is more complex with a [server link](http://stackoverflow.com/questions/5145637/querying-data-by-joining-two-tables-in-two-database-on-different-servers).",
          "* Federation adds more hardware and additional complexity.",
          "",
          "##### Source(s) and further reading: federation",
          "",
          "* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)",
          "",
          "**Deep Dive:** Sharding",
          "",
          "<p align=\"center\">",
          "<img src=\"images/wU8x5Id.png\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>",
          "</p>",
          "",
          "Sharding distributes data across different databases such that each database can only manage a subset of the data.  Taking a users database as an example, as the number of users increases, more shards are added to the cluster.",
          "",
          "Similar to the advantages of [federation](#federation), sharding results in less read and write traffic, less replication, and more cache hits.  Index size is also reduced, which generally improves performance with faster queries.  If one shard goes down, the other shards are still operational, although you'll want to add some form of replication to avoid data loss.  Like federation, there is no single central master serializing writes, allowing you to write in parallel with increased throughput.",
          "",
          "Common ways to shard a table of users is either through the user's last name initial or the user's geographic location.",
          "",
          "##### Disadvantage(s): sharding",
          "",
          "* You'll need to update your application logic to work with shards, which could result in complex SQL queries.",
          "* Data distribution can become lopsided in a shard.  For example, a set of power users on a shard could result in increased load to that shard compared to others.",
          "* Rebalancing adds additional complexity.  A sharding function based on [consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html) can reduce the amount of transferred data.",
          "* Joining data from multiple shards is more complex.",
          "* Sharding adds more hardware and additional complexity.",
          "",
          "##### Source(s) and further reading: sharding",
          "",
          "* [The coming of the shard](http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html)",
          "* [Shard database architecture](https://en.wikipedia.org/wiki/Shard_(database_architecture))",
          "* [Consistent hashing](http://www.paperplanes.de/2011/12/9/the-magic-of-consistent-hashing.html)",
          "",
          "**Deep Dive:** Denormalization",
          "",
          "Denormalization attempts to improve read performance at the expense of some write performance.  Redundant copies of the data are written in multiple tables to avoid expensive joins.  Some RDBMS such as [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL) and Oracle support [materialized views](https://en.wikipedia.org/wiki/Materialized_view) which handle the work of storing redundant information and keeping redundant copies consistent.",
          "",
          "Once data becomes distributed with techniques such as [federation](#federation) and [sharding](#sharding), managing joins across data centers further increases complexity.  Denormalization might circumvent the need for such complex joins.",
          "",
          "In most systems, reads can heavily outnumber writes 100:1 or even 1000:1.  A read resulting in a complex database join can be very expensive, spending a significant amount of time on disk operations.",
          "",
          "##### Disadvantage(s): denormalization",
          "",
          "* Data is duplicated.",
          "* Constraints can help redundant copies of information stay in sync, which increases complexity of the database design.",
          "* A denormalized database under heavy write load might perform worse than its normalized counterpart.",
          "",
          "###### Source(s) and further reading: denormalization",
          "",
          "* [Denormalization](https://en.wikipedia.org/wiki/Denormalization)",
          "",
          "**Deep Dive:** SQL tuning",
          "",
          "SQL tuning is a broad topic and many [books](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sql+tuning) have been written as reference.",
          "",
          "It's important to **benchmark** and **profile** to simulate and uncover bottlenecks.",
          "",
          "* **Benchmark** - Simulate high-load situations with tools such as [ab](http://httpd.apache.org/docs/2.2/programs/ab.html).",
          "* **Profile** - Enable tools such as the [slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html) to help track performance issues.",
          "",
          "Benchmarking and profiling might point you to the following optimizations.",
          "",
          "##### Tighten up the schema",
          "",
          "* MySQL dumps to disk in contiguous blocks for fast access.",
          "* Use `CHAR` instead of `VARCHAR` for fixed-length fields.",
          "* `CHAR` effectively allows for fast, random access, whereas with `VARCHAR`, you must find the end of a string before moving onto the next one.",
          "* Use `TEXT` for large blocks of text such as blog posts.  `TEXT` also allows for boolean searches.  Using a `TEXT` field results in storing a pointer on disk that is used to locate the text block.",
          "* Use `INT` for larger numbers up to 2^32 or 4 billion.",
          "* Use `DECIMAL` for currency to avoid floating point representation errors.",
          "* Avoid storing large `BLOBS`, store the location of where to get the object instead.",
          "* `VARCHAR(255)` is the largest number of characters that can be counted in an 8 bit number, often maximizing the use of a byte in some RDBMS.",
          "* Set the `NOT NULL` constraint where applicable to [improve search performance](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search).",
          "",
          "##### Use good indices",
          "",
          "* Columns that you are querying (`SELECT`, `GROUP BY`, `ORDER BY`, `JOIN`) could be faster with indices.",
          "* Indices are usually represented as self-balancing [B-tree](https://en.wikipedia.org/wiki/B-tree) that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.",
          "* Placing an index can keep the data in memory, requiring more space.",
          "* Writes could also be slower since the index also needs to be updated.",
          "* When loading large amounts of data, it might be faster to disable indices, load the data, then rebuild the indices.",
          "",
          "##### Avoid expensive joins",
          "",
          "* [Denormalize](#denormalization) where performance demands it.",
          "",
          "##### Partition tables",
          "",
          "* Break up a table by putting hot spots in a separate table to help keep it in memory.",
          "",
          "##### Tune the query cache",
          "",
          "* In some cases, the [query cache](https://dev.mysql.com/doc/refman/5.7/en/query-cache.html) could lead to [performance issues](https://www.percona.com/blog/2016/10/12/mysql-5-7-performance-tuning-immediately-after-installation/).",
          "",
          "##### Source(s) and further reading: SQL tuning",
          "",
          "* [Tips for optimizing MySQL queries](http://aiddroid.com/10-tips-optimizing-mysql-queries-dont-suck/)",
          "* [Is there a good reason i see VARCHAR(255) used so often?](http://stackoverflow.com/questions/1217466/is-there-a-good-reason-i-see-varchar255-used-so-often-as-opposed-to-another-l)",
          "* [How do null values affect performance?](http://stackoverflow.com/questions/1017239/how-do-null-values-affect-performance-in-a-database-search)",
          "* [Slow query log](http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html)",
          ""
        ],
        "deepDive": {
          "title": "Master-slave replication",
          "content": [
            "",
            "The master serves reads and writes, replicating writes to one or more slaves, which serve only reads.  Slaves can also replicate to additional slaves in a tree-like fashion.  If the master goes offline, the system can continue to operate in read-only mode until a slave is promoted to a master or a new master is provisioned.",
            "",
            "<p align=\"center\">",
            "<img src=\"images/C9ioGtn.png\">",
            "<br/>",
            "<i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>",
            "</p>",
            "",
            "##### Disadvantage(s): master-slave replication",
            "",
            "* Additional logic is needed to promote a slave to a master.",
            "* See [Disadvantage(s): replication](#disadvantages-replication) for points related to **both** master-slave and master-master.",
            "",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Relational database management system (RDBMS).",
            "answer": "Refer to the diagrams and trade-offs of Relational database management system (RDBMS) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "NoSQL",
        "content": [
          "",
          "NoSQL is a collection of data items represented in a **key-value store**, **document store**, **wide column store**, or a **graph database**.  Data is denormalized, and joins are generally done in the application code.  Most NoSQL stores lack true ACID transactions and favor [eventual consistency](#eventual-consistency).",
          "",
          "**BASE** is often used to describe the properties of NoSQL databases.  In comparison with the [CAP Theorem](#cap-theorem), BASE chooses availability over consistency.",
          "",
          "* **Basically available** - the system guarantees availability.",
          "* **Soft state** - the state of the system may change over time, even without input.",
          "* **Eventual consistency** - the system will become consistent over a period of time, given that the system doesn't receive input during that period.",
          "",
          "In addition to choosing between [SQL or NoSQL](#sql-or-nosql), it is helpful to understand which type of NoSQL database best fits your use case(s).  We'll review **key-value stores**, **document stores**, **wide column stores**, and **graph databases** in the next section.",
          "",
          "",
          "**Deep Dive:** Document store",
          "",
          "> Abstraction: key-value store with documents stored as values",
          "",
          "A document store is centered around documents (XML, JSON, binary, etc), where a document stores all information for a given object.  Document stores provide APIs or a query language to query based on the internal structure of the document itself.  *Note, many key-value stores include features for working with a value's metadata, blurring the lines between these two storage types.*",
          "",
          "Based on the underlying implementation, documents are organized by collections, tags, metadata, or directories.  Although documents can be organized or grouped together, documents may have fields that are completely different from each other.",
          "",
          "Some document stores like [MongoDB](https://www.mongodb.com/mongodb-architecture) and [CouchDB](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/) also provide a SQL-like language to perform complex queries.  [DynamoDB](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf) supports both key-values and documents.",
          "",
          "Document stores provide high flexibility and are often used for working with occasionally changing data.",
          "",
          "##### Source(s) and further reading: document store",
          "",
          "* [Document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)",
          "* [MongoDB architecture](https://www.mongodb.com/mongodb-architecture)",
          "* [CouchDB architecture](https://blog.couchdb.org/2016/08/01/couchdb-2-0-architecture/)",
          "* [Elasticsearch architecture](https://www.elastic.co/blog/found-elasticsearch-from-the-bottom-up)",
          "",
          "**Deep Dive:** Wide column store",
          "",
          "<p align=\"center\">",
          "<img src=\"images/n16iOGk.png\">",
          "<br/>",
          "<i><a href=http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html>Source: SQL & NoSQL, a brief history</a></i>",
          "</p>",
          "",
          "> Abstraction: nested map `ColumnFamily<RowKey, Columns<ColKey, Value, Timestamp>>`",
          "",
          "A wide column store's basic unit of data is a column (name/value pair).  A column can be grouped in column families (analogous to a SQL table).  Super column families further group column families.  You can access each column independently with a row key, and columns with the same row key form a row.  Each value contains a timestamp for versioning and for conflict resolution.",
          "",
          "Google introduced [Bigtable](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf) as the first wide column store, which influenced the open-source [HBase](https://www.edureka.co/blog/hbase-architecture/) often-used in the Hadoop ecosystem, and [Cassandra](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html) from Facebook.  Stores such as BigTable, HBase, and Cassandra maintain keys in lexicographic order, allowing efficient retrieval of selective key ranges.",
          "",
          "Wide column stores offer high availability and high scalability.  They are often used for very large data sets.",
          "",
          "##### Source(s) and further reading: wide column store",
          "",
          "* [SQL & NoSQL, a brief history](http://blog.grio.com/2015/11/sql-nosql-a-brief-history.html)",
          "* [Bigtable architecture](http://www.read.seas.harvard.edu/~kohler/class/cs239-w08/chang06bigtable.pdf)",
          "* [HBase architecture](https://www.edureka.co/blog/hbase-architecture/)",
          "* [Cassandra architecture](http://docs.datastax.com/en/cassandra/3.0/cassandra/architecture/archIntro.html)",
          "",
          "**Deep Dive:** Graph database",
          "",
          "<p align=\"center\">",
          "<img src=\"images/fNcl65g.png\">",
          "<br/>",
          "<i><a href=https://en.wikipedia.org/wiki/File:GraphDatabase_PropertyGraph.png>Source: Graph database</a></i>",
          "</p>",
          "",
          "> Abstraction: graph",
          "",
          "In a graph database, each node is a record and each arc is a relationship between two nodes.  Graph databases are optimized to represent complex relationships with many foreign keys or many-to-many relationships.",
          "",
          "Graphs databases offer high performance for data models with complex relationships, such as a social network.  They are relatively new and are not yet widely-used; it might be more difficult to find development tools and resources.  Many graphs can only be accessed with [REST APIs](#representational-state-transfer-rest).",
          "",
          "##### Source(s) and further reading: graph",
          "",
          "* [Graph database](https://en.wikipedia.org/wiki/Graph_database)",
          "* [Neo4j](https://neo4j.com/)",
          "* [FlockDB](https://blog.twitter.com/2010/introducing-flockdb)",
          "",
          "**Deep Dive:** Source(s) and further reading: NoSQL",
          "",
          "* [Explanation of base terminology](http://stackoverflow.com/questions/3342497/explanation-of-base-terminology)",
          "* [NoSQL databases a survey and decision guidance](https://medium.com/baqend-blog/nosql-databases-a-survey-and-decision-guidance-ea7823a822d#.wskogqenq)",
          "* [Scalability](https://web.archive.org/web/20220602114024/https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)",
          "* [Introduction to NoSQL](https://www.youtube.com/watch?v=qI_g07C_Q5I)",
          "* [NoSQL patterns](http://horicky.blogspot.com/2009/11/nosql-patterns.html)",
          ""
        ],
        "deepDive": {
          "title": "Key-value store",
          "content": [
            "",
            "> Abstraction: hash table",
            "",
            "A key-value store generally allows for O(1) reads and writes and is often backed by memory or SSD.  Data stores can maintain keys in [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order), allowing efficient retrieval of key ranges.  Key-value stores can allow for storing of metadata with a value.",
            "",
            "Key-value stores provide high performance and are often used for simple data models or for rapidly-changing data, such as an in-memory cache layer.  Since they offer only a limited set of operations, complexity is shifted to the application layer if additional operations are needed.",
            "",
            "A key-value store is the basis for more complex systems such as a document store, and in some cases, a graph database.",
            "",
            "##### Source(s) and further reading: key-value store",
            "",
            "* [Key-value database](https://en.wikipedia.org/wiki/Key-value_database)",
            "* [Disadvantages of key-value stores](http://stackoverflow.com/questions/4056093/what-are-the-disadvantages-of-using-a-key-value-table-over-nullable-columns-or)",
            "* [Redis architecture](http://qnimate.com/overview-of-redis-architecture/)",
            "* [Memcached architecture](https://adayinthelifeof.nl/2011/02/06/memcache-internals/)"
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind NoSQL.",
            "answer": "Refer to the diagrams and trade-offs of NoSQL as discussed in the chapter."
          }
        ]
      },
      {
        "title": "SQL or NoSQL",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/wXGqG5f.png\">",
          "<br/>",
          "<i><a href=https://www.infoq.com/articles/Transition-RDBMS-NoSQL/>Source: Transitioning from RDBMS to NoSQL</a></i>",
          "</p>",
          "",
          "Reasons for **SQL**:",
          "",
          "* Structured data",
          "* Strict schema",
          "* Relational data",
          "* Need for complex joins",
          "* Transactions",
          "* Clear patterns for scaling",
          "* More established: developers, community, code, tools, etc",
          "* Lookups by index are very fast",
          "",
          "Reasons for **NoSQL**:",
          "",
          "* Semi-structured data",
          "* Dynamic or flexible schema",
          "* Non-relational data",
          "* No need for complex joins",
          "* Store many TB (or PB) of data",
          "* Very data intensive workload",
          "* Very high throughput for IOPS",
          "",
          "Sample data well-suited for NoSQL:",
          "",
          "* Rapid ingest of clickstream and log data",
          "* Leaderboard or scoring data",
          "* Temporary data, such as a shopping cart",
          "* Frequently accessed ('hot') tables",
          "* Metadata/lookup tables",
          "",
          "##### Source(s) and further reading: SQL or NoSQL",
          "",
          "* [Scaling up to your first 10 million users](https://www.youtube.com/watch?v=kKjm4ehYiMs)",
          "* [SQL vs NoSQL differences](https://www.sitepoint.com/sql-vs-nosql-differences/)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind SQL or NoSQL.",
            "answer": "Refer to the diagrams and trade-offs of SQL or NoSQL as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Database - Final Exam",
      "questions": [
        {
          "q": "Which database replication strategy is best suited for write-heavy workloads where eventual consistency is acceptable?",
          "options": [
            "Master-Slave Replication",
            "Master-Master Replication",
            "Sharding",
            "Denormalization"
          ],
          "correctIndex": 1,
          "explanation": "Master-Master replication allows writes to multiple nodes, improving write throughput, although it requires conflict resolution and often results in eventual consistency."
        },
        {
          "q": "What is a major disadvantage of database federation (functional partitioning)?",
          "options": [
            "It increases replication lag.",
            "It requires a single central master to serialize all writes.",
            "It makes joining data across different databases significantly more complex.",
            "It reduces the amount of data that can fit in memory."
          ],
          "correctIndex": 2,
          "explanation": "Federation splits databases by function (e.g., users, forums). Joining data that lives on completely different database servers requires complex application logic."
        }
      ]
    }
  },
  {
    "id": 16,
    "title": "Cache",
    "description": "Exhaustive guide and interview questions on Cache",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/Q6z24La.png\">",
          "<br/>",
          "<i><a href=http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html>Source: Scalable system design patterns</a></i>",
          "</p>",
          "",
          "Caching improves page load times and can reduce the load on your servers and databases.  In this model, the dispatcher will first lookup if the request has been made before and try to find the previous result to return, in order to save the actual execution.",
          "",
          "Databases often benefit from a uniform distribution of reads and writes across its partitions.  Popular items can skew the distribution, causing bottlenecks.  Putting a cache in front of a database can help absorb uneven loads and spikes in traffic.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Cache.",
            "answer": "Review the Cache module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Client caching",
        "content": [
          "",
          "Caches can be located on the client side (OS or browser), [server side](#reverse-proxy-web-server), or in a distinct cache layer.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Client caching.",
            "answer": "Refer to the diagrams and trade-offs of Client caching as discussed in the chapter."
          }
        ]
      },
      {
        "title": "CDN caching",
        "content": [
          "",
          "[CDNs](#content-delivery-network) are considered a type of cache.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind CDN caching.",
            "answer": "Refer to the diagrams and trade-offs of CDN caching as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Web server caching",
        "content": [
          "",
          "[Reverse proxies](#reverse-proxy-web-server) and caches such as [Varnish](https://www.varnish-cache.org/) can serve static and dynamic content directly.  Web servers can also cache requests, returning responses without having to contact application servers.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Web server caching.",
            "answer": "Refer to the diagrams and trade-offs of Web server caching as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Database caching",
        "content": [
          "",
          "Your database usually includes some level of caching in a default configuration, optimized for a generic use case.  Tweaking these settings for specific usage patterns can further boost performance.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Database caching.",
            "answer": "Refer to the diagrams and trade-offs of Database caching as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Application caching",
        "content": [
          "",
          "In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage.  Since the data is held in RAM, it is much faster than typical databases where data is stored on disk.  RAM is more limited than disk, so [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms) algorithms such as [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) can help invalidate 'cold' entries and keep 'hot' data in RAM.",
          "",
          "Redis has the following additional features:",
          "",
          "* Persistence option",
          "* Built-in data structures such as sorted sets and lists",
          "",
          "There are multiple levels you can cache that fall into two general categories: **database queries** and **objects**:",
          "",
          "* Row level",
          "* Query-level",
          "* Fully-formed serializable objects",
          "* Fully-rendered HTML",
          "",
          "Generally, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Application caching.",
            "answer": "Refer to the diagrams and trade-offs of Application caching as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Caching at the database query level",
        "content": [
          "",
          "Whenever you query the database, hash the query as a key and store the result to the cache.  This approach suffers from expiration issues:",
          "",
          "* Hard to delete a cached result with complex queries",
          "* If one piece of data changes such as a table cell, you need to delete all cached queries that might include the changed cell",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Caching at the database query level.",
            "answer": "Refer to the diagrams and trade-offs of Caching at the database query level as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Caching at the object level",
        "content": [
          "",
          "See your data as an object, similar to what you do with your application code.  Have your application assemble the dataset from the database into a class instance or a data structure(s):",
          "",
          "* Remove the object from cache if its underlying data has changed",
          "* Allows for asynchronous processing: workers assemble objects by consuming the latest cached object",
          "",
          "Suggestions of what to cache:",
          "",
          "* User sessions",
          "* Fully rendered web pages",
          "* Activity streams",
          "* User graph data",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Caching at the object level.",
            "answer": "Refer to the diagrams and trade-offs of Caching at the object level as discussed in the chapter."
          }
        ]
      },
      {
        "title": "When to update the cache",
        "content": [
          "",
          "Since you can only store a limited amount of data in cache, you'll need to determine which cache update strategy works best for your use case.",
          "",
          "def get_user(self, user_id):",
          "user = cache.get(\"user.{0}\", user_id)",
          "if user is None:",
          "user = db.query(\"SELECT * FROM users WHERE user_id = {0}\", user_id)",
          "if user is not None:",
          "key = \"user.{0}\".format(user_id)",
          "cache.set(key, json.dumps(user))",
          "return user",
          "```",
          "",
          "[Memcached](https://memcached.org/) is generally used in this manner.",
          "",
          "Subsequent reads of data added to cache are fast.  Cache-aside is also referred to as lazy loading.  Only requested data is cached, which avoids filling up the cache with data that isn't requested.",
          "",
          "##### Disadvantage(s): cache-aside",
          "",
          "* Each cache miss results in three trips, which can cause a noticeable delay.",
          "* Data can become stale if it is updated in the database.  This issue is mitigated by setting a time-to-live (TTL) which forces an update of the cache entry, or by using write-through.",
          "* When a node fails, it is replaced by a new, empty node, increasing latency.",
          "",
          "**Deep Dive:** Write-through",
          "",
          "<p align=\"center\">",
          "<img src=\"images/0vBc0hN.png\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>",
          "</p>",
          "",
          "The application uses the cache as the main data store, reading and writing data to it, while the cache is responsible for reading and writing to the database:",
          "",
          "* Application adds/updates entry in cache",
          "* Cache synchronously writes entry to data store",
          "* Return",
          "",
          "Application code:",
          "",
          "```python",
          "set_user(12345, {\"foo\":\"bar\"})",
          "```",
          "",
          "Cache code:",
          "",
          "```python",
          "def set_user(user_id, values):",
          "user = db.query(\"UPDATE Users WHERE id = {0}\", user_id, values)",
          "cache.set(user_id, user)",
          "```",
          "",
          "Write-through is a slow overall operation due to the write operation, but subsequent reads of just written data are fast.  Users are generally more tolerant of latency when updating data than reading data.  Data in the cache is not stale.",
          "",
          "##### Disadvantage(s): write through",
          "",
          "* When a new node is created due to failure or scaling, the new node will not cache entries until the entry is updated in the database.  Cache-aside in conjunction with write through can mitigate this issue.",
          "* Most data written might never be read, which can be minimized with a TTL.",
          "",
          "**Deep Dive:** Write-behind (write-back)",
          "",
          "<p align=\"center\">",
          "<img src=\"images/rgSrvjG.png\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/jboner/scalability-availability-stability-patterns/>Source: Scalability, availability, stability, patterns</a></i>",
          "</p>",
          "",
          "In write-behind, the application does the following:",
          "",
          "* Add/update entry in cache",
          "* Asynchronously write entry to the data store, improving write performance",
          "",
          "##### Disadvantage(s): write-behind",
          "",
          "* There could be data loss if the cache goes down prior to its contents hitting the data store.",
          "* It is more complex to implement write-behind than it is to implement cache-aside or write-through.",
          "",
          "**Deep Dive:** Refresh-ahead",
          "",
          "<p align=\"center\">",
          "<img src=\"images/kxtjqgE.png\">",
          "<br/>",
          "<i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>",
          "</p>",
          "",
          "You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration.",
          "",
          "Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.",
          "",
          "##### Disadvantage(s): refresh-ahead",
          "",
          "* Not accurately predicting which items are likely to be needed in the future can result in reduced performance than without refresh-ahead.",
          ""
        ],
        "deepDive": {
          "title": "Cache-aside",
          "content": [
            "",
            "<p align=\"center\">",
            "<img src=\"images/ONjORqk.png\">",
            "<br/>",
            "<i><a href=http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast>Source: From cache to in-memory data grid</a></i>",
            "</p>",
            "",
            "The application is responsible for reading and writing from storage.  The cache does not interact with storage directly.  The application does the following:",
            "",
            "* Look for entry in cache, resulting in a cache miss",
            "* Load entry from the database",
            "* Add entry to cache",
            "* Return entry",
            "",
            "```python"
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind When to update the cache.",
            "answer": "Refer to the diagrams and trade-offs of When to update the cache as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): cache",
        "content": [
          "",
          "* Need to maintain consistency between caches and the source of truth such as the database through [cache invalidation](https://en.wikipedia.org/wiki/Cache_algorithms).",
          "* Cache invalidation is a difficult problem, there is additional complexity associated with when to update the cache.",
          "* Need to make application changes such as adding Redis or memcached.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): cache.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): cache as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)",
          "* [Scalable system design patterns](http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html)",
          "* [Introduction to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/)",
          "* [Scalability, availability, stability, patterns](http://www.slideshare.net/jboner/scalability-availability-stability-patterns/)",
          "* [Scalability](https://web.archive.org/web/20230126233752/https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)",
          "* [AWS ElastiCache strategies](http://docs.aws.amazon.com/AmazonElastiCache/latest/UserGuide/Strategies.html)",
          "* [Wikipedia](https://en.wikipedia.org/wiki/Cache_(computing))",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Cache - Final Exam",
      "questions": [
        {
          "q": "In a Cache-Aside (Lazy Loading) strategy, what happens when there is a cache miss?",
          "options": [
            "The cache automatically fetches data from the database.",
            "The application fetches data from the database and updates the cache.",
            "The application throws an error and falls back to a replica.",
            "The database asynchronously pushes the missing data to the cache."
          ],
          "correctIndex": 1,
          "explanation": "In Cache-Aside, the cache doesn't interact with the DB directly. The application is responsible for querying the DB on a miss and then populating the cache."
        },
        {
          "q": "Which caching strategy is most vulnerable to data loss if the cache node crashes before persisting to the database?",
          "options": [
            "Write-Through",
            "Write-Behind (Write-Back)",
            "Cache-Aside",
            "Refresh-Ahead"
          ],
          "correctIndex": 1,
          "explanation": "Write-Behind improves write performance by asynchronously writing to the DB. If the cache crashes before the async write completes, the data is lost."
        }
      ]
    }
  },
  {
    "id": 17,
    "title": "Asynchronism",
    "description": "Exhaustive guide and interview questions on Asynchronism",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/54GYsSx.png\">",
          "<br/>",
          "<i><a href=http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer>Source: Intro to architecting systems for scale</a></i>",
          "</p>",
          "",
          "Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line.  They can also help by doing time-consuming work in advance, such as periodic aggregation of data.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Asynchronism.",
            "answer": "Review the Asynchronism module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Message queues",
        "content": [
          "",
          "Message queues receive, hold, and deliver messages.  If an operation is too slow to perform inline, you can use a message queue with the following workflow:",
          "",
          "* An application publishes a job to the queue, then notifies the user of job status",
          "* A worker picks up the job from the queue, processes it, then signals the job is complete",
          "",
          "The user is not blocked and the job is processed in the background.  During this time, the client might optionally do a small amount of processing to make it seem like the task has completed.  For example, if posting a tweet, the tweet could be instantly posted to your timeline, but it could take some time before your tweet is actually delivered to all of your followers.",
          "",
          "**[Redis](https://redis.io/)** is useful as a simple message broker but messages can be lost.",
          "",
          "**[RabbitMQ](https://www.rabbitmq.com/)** is popular but requires you to adapt to the 'AMQP' protocol and manage your own nodes.",
          "",
          "**[Amazon SQS](https://aws.amazon.com/sqs/)** is hosted but can have high latency and has the possibility of messages being delivered twice.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Message queues.",
            "answer": "Refer to the diagrams and trade-offs of Message queues as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Task queues",
        "content": [
          "",
          "Tasks queues receive tasks and their related data, runs them, then delivers their results.  They can support scheduling and can be used to run computationally-intensive jobs in the background.",
          "",
          "**[Celery](https://docs.celeryproject.org/en/stable/)** has support for scheduling and primarily has python support.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Task queues.",
            "answer": "Refer to the diagrams and trade-offs of Task queues as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Back pressure",
        "content": [
          "",
          "If queues start to grow significantly, the queue size can become larger than memory, resulting in cache misses, disk reads, and even slower performance.  [Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html) can help by limiting the queue size, thereby maintaining a high throughput rate and good response times for jobs already in the queue.  Once the queue fills up, clients get a server busy or HTTP 503 status code to try again later.  Clients can retry the request at a later time, perhaps with [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Back pressure.",
            "answer": "Refer to the diagrams and trade-offs of Back pressure as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Disadvantage(s): asynchronism",
        "content": [
          "",
          "* Use cases such as inexpensive calculations and realtime workflows might be better suited for synchronous operations, as introducing queues can add delays and complexity.",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Disadvantage(s): asynchronism.",
            "answer": "Refer to the diagrams and trade-offs of Disadvantage(s): asynchronism as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [It's all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)",
          "* [Applying back pressure when overloaded](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)",
          "* [Little's law](https://en.wikipedia.org/wiki/Little%27s_law)",
          "* [What is the difference between a message queue and a task queue?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Asynchronism - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Asynchronism?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 18,
    "title": "Communication",
    "description": "Exhaustive guide and interview questions on Communication",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/5KeocQs.jpg\">",
          "<br/>",
          "<i><a href=http://www.escotal.com/osilayer.html>Source: OSI 7 layer model</a></i>",
          "</p>",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Communication.",
            "answer": "Review the Communication module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Hypertext transfer protocol (HTTP)",
        "content": [
          "",
          "HTTP is a method for encoding and transporting data between a client and a server.  It is a request/response protocol: clients issue requests and servers issue responses with relevant content and completion status info about the request.  HTTP is self-contained, allowing requests and responses to flow through many intermediate routers and servers that perform load balancing, caching, encryption, and compression.",
          "",
          "A basic HTTP request consists of a verb (method) and a resource (endpoint).  Below are common HTTP verbs:",
          "",
          "| Verb | Description | Idempotent* | Safe | Cacheable |",
          "|---|---|---|---|---|",
          "| GET | Reads a resource | Yes | Yes | Yes |",
          "| POST | Creates a resource or trigger a process that handles data | No | No | Yes if response contains freshness info |",
          "| PUT | Creates or replace a resource | Yes | No | No |",
          "| PATCH | Partially updates a resource | No | No | Yes if response contains freshness info |",
          "| DELETE | Deletes a resource | Yes | No | No |",
          "",
          "*Can be called many times without different outcomes.",
          "",
          "HTTP is an application layer protocol relying on lower-level protocols such as **TCP** and **UDP**.",
          ""
        ],
        "deepDive": {
          "title": "Source(s) and further reading: HTTP",
          "content": [
            "",
            "* [What is HTTP?](https://www.nginx.com/resources/glossary/http/)",
            "* [Difference between HTTP and TCP](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)",
            "* [Difference between PUT and PATCH](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Hypertext transfer protocol (HTTP).",
            "answer": "Refer to the diagrams and trade-offs of Hypertext transfer protocol (HTTP) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Transmission control protocol (TCP)",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/JdAsdvG.jpg\">",
          "<br/>",
          "<i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>",
          "</p>",
          "",
          "TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol).  Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking).  All packets sent are guaranteed to reach the destination in the original order and without corruption through:",
          "",
          "* Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) for each packet",
          "* [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission",
          "",
          "If the sender does not receive a correct response, it will resend the packets.  If there are multiple timeouts, the connection is dropped.  TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).  These guarantees cause delays and generally result in less efficient transmission than UDP.",
          "",
          "To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage.  It can be expensive to have a large number of open connections between web server threads and say, a [memcached](https://memcached.org/) server.  [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) can help in addition to switching to UDP where applicable.",
          "",
          "TCP is useful for applications that require high reliability but are less time critical.  Some examples include web servers, database info, SMTP, FTP, and SSH.",
          "",
          "Use TCP over UDP when:",
          "",
          "* You need all of the data to arrive intact",
          "* You want to automatically make a best estimate use of the network throughput",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Transmission control protocol (TCP).",
            "answer": "Refer to the diagrams and trade-offs of Transmission control protocol (TCP) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "User datagram protocol (UDP)",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/yzDrJtA.jpg\">",
          "<br/>",
          "<i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>",
          "</p>",
          "",
          "UDP is connectionless.  Datagrams (analogous to packets) are guaranteed only at the datagram level.  Datagrams might reach their destination out of order or not at all.  UDP does not support congestion control.  Without the guarantees that TCP support, UDP is generally more efficient.",
          "",
          "UDP can broadcast, sending datagrams to all devices on the subnet.  This is useful with [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address.",
          "",
          "UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games.",
          "",
          "Use UDP over TCP when:",
          "",
          "* You need the lowest latency",
          "* Late data is worse than loss of data",
          "* You want to implement your own error correction",
          ""
        ],
        "deepDive": {
          "title": "Source(s) and further reading: TCP and UDP",
          "content": [
            "",
            "* [Networking for game programming](https://gafferongames.com/post/udp_vs_tcp/)",
            "* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)",
            "* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)",
            "* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)",
            "* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)",
            "* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind User datagram protocol (UDP).",
            "answer": "Refer to the diagrams and trade-offs of User datagram protocol (UDP) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Remote procedure call (RPC)",
        "content": [
          "",
          "<p align=\"center\">",
          "<img src=\"images/iF4Mkb5.png\">",
          "<br/>",
          "<i><a href=http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview>Source: Crack the system design interview</a></i>",
          "</p>",
          "",
          "In an RPC, a client causes a procedure to execute on a different address space, usually a remote server.  The procedure is coded as if it were a local procedure call, abstracting away the details of how to communicate with the server from the client program.  Remote calls are usually slower and less reliable than local calls so it is helpful to distinguish RPC calls from local calls.  Popular RPC frameworks include [Protobuf](https://developers.google.com/protocol-buffers/), [Thrift](https://thrift.apache.org/), and [Avro](https://avro.apache.org/docs/current/).",
          "",
          "RPC is a request-response protocol:",
          "",
          "* **Client program** - Calls the client stub procedure.  The parameters are pushed onto the stack like a local procedure call.",
          "* **Client stub procedure** - Marshals (packs) procedure id and arguments into a request message.",
          "* **Client communication module** - OS sends the message from the client to the server.",
          "* **Server communication module** - OS passes the incoming packets to the server stub procedure.",
          "* **Server stub procedure** -  Unmarshalls the results, calls the server procedure matching the procedure id and passes the given arguments.",
          "* The server response repeats the steps above in reverse order.",
          "",
          "Sample RPC calls:",
          "",
          "```",
          "GET /someoperation?data=anId",
          "",
          "POST /anotheroperation",
          "{",
          "\"data\":\"anId\";",
          "\"anotherdata\": \"another value\"",
          "}",
          "```",
          "",
          "RPC is focused on exposing behaviors.  RPCs are often used for performance reasons with internal communications, as you can hand-craft native calls to better fit your use cases.",
          "",
          "Choose a native library (aka SDK) when:",
          "",
          "* You know your target platform.",
          "* You want to control how your \"logic\" is accessed.",
          "* You want to control how error control happens off your library.",
          "* Performance and end user experience is your primary concern.",
          "",
          "HTTP APIs following **REST** tend to be used more often for public APIs.",
          ""
        ],
        "deepDive": {
          "title": "Disadvantage(s): RPC",
          "content": [
            "",
            "* RPC clients become tightly coupled to the service implementation.",
            "* A new API must be defined for every new operation or use case.",
            "* It can be difficult to debug RPC.",
            "* You might not be able to leverage existing technologies out of the box.  For example, it might require additional effort to ensure [RPC calls are properly cached](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/) on caching servers such as [Squid](http://www.squid-cache.org/).",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Remote procedure call (RPC).",
            "answer": "Refer to the diagrams and trade-offs of Remote procedure call (RPC) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "Representational state transfer (REST)",
        "content": [
          "",
          "REST is an architectural style enforcing a client/server model where the client acts on a set of resources managed by the server.  The server provides a representation of resources and actions that can either manipulate or get a new representation of resources.  All communication must be stateless and cacheable.",
          "",
          "There are four qualities of a RESTful interface:",
          "",
          "* **Identify resources (URI in HTTP)** - use the same URI regardless of any operation.",
          "* **Change with representations (Verbs in HTTP)** - use verbs, headers, and body.",
          "* **Self-descriptive error message (status response in HTTP)** - Use status codes, don't reinvent the wheel.",
          "* **[HATEOAS](http://restcookbook.com/Basics/hateoas/) (HTML interface for HTTP)** - your web service should be fully accessible in a browser.",
          "",
          "Sample REST calls:",
          "",
          "```",
          "GET /someresources/anId",
          "",
          "PUT /someresources/anId",
          "{\"anotherdata\": \"another value\"}",
          "```",
          "",
          "REST is focused on exposing data.  It minimizes the coupling between client/server and is often used for public HTTP APIs.  REST uses a more generic and uniform method of exposing resources through URIs, [representation through headers](https://github.com/for-GET/know-your-http-well/blob/master/headers.md), and actions through verbs such as GET, POST, PUT, DELETE, and PATCH.  Being stateless, REST is great for horizontal scaling and partitioning.",
          ""
        ],
        "deepDive": {
          "title": "Disadvantage(s): REST",
          "content": [
            "",
            "* With REST being focused on exposing data, it might not be a good fit if resources are not naturally organized or accessed in a simple hierarchy.  For example, returning all updated records from the past hour matching a particular set of events is not easily expressed as a path.  With REST, it is likely to be implemented with a combination of URI path, query parameters, and possibly the request body.",
            "* REST typically relies on a few verbs (GET, POST, PUT, DELETE, and PATCH) which sometimes doesn't fit your use case.  For example, moving expired documents to the archive folder might not cleanly fit within these verbs.",
            "* Fetching complicated resources with nested hierarchies requires multiple round trips between the client and server to render single views, e.g. fetching content of a blog entry and the comments on that entry. For mobile applications operating in variable network conditions, these multiple roundtrips are highly undesirable.",
            "* Over time, more fields might be added to an API response and older clients will receive all new data fields, even those that they do not need, as a result, it bloats the payload size and leads to larger latencies.",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind Representational state transfer (REST).",
            "answer": "Refer to the diagrams and trade-offs of Representational state transfer (REST) as discussed in the chapter."
          }
        ]
      },
      {
        "title": "RPC and REST calls comparison",
        "content": [
          "",
          "| Operation | RPC | REST |",
          "|---|---|---|",
          "| Signup    | **POST** /signup | **POST** /persons |",
          "| Resign    | **POST** /resign<br/>{<br/>\"personid\": \"1234\"<br/>} | **DELETE** /persons/1234 |",
          "| Read a person | **GET** /readPerson?personid=1234 | **GET** /persons/1234 |",
          "| Read a person’s items list | **GET** /readUsersItemsList?personid=1234 | **GET** /persons/1234/items |",
          "| Add an item to a person’s items | **POST** /addItemToUsersItemsList<br/>{<br/>\"personid\": \"1234\";<br/>\"itemid\": \"456\"<br/>} | **POST** /persons/1234/items<br/>{<br/>\"itemid\": \"456\"<br/>} |",
          "| Update an item    | **POST** /modifyItem<br/>{<br/>\"itemid\": \"456\";<br/>\"key\": \"value\"<br/>} | **PUT** /items/456<br/>{<br/>\"key\": \"value\"<br/>} |",
          "| Delete an item | **POST** /removeItem<br/>{<br/>\"itemid\": \"456\"<br/>} | **DELETE** /items/456 |",
          "",
          "<p align=\"center\">",
          "<i><a href=https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/>Source: Do you really know why you prefer REST over RPC</a></i>",
          "</p>",
          ""
        ],
        "deepDive": {
          "title": "Source(s) and further reading: REST and RPC",
          "content": [
            "",
            "* [Do you really know why you prefer REST over RPC](https://apihandyman.io/do-you-really-know-why-you-prefer-rest-over-rpc/)",
            "* [When are RPC-ish approaches more appropriate than REST?](http://programmers.stackexchange.com/a/181186)",
            "* [REST vs JSON-RPC](http://stackoverflow.com/questions/15056878/rest-vs-json-rpc)",
            "* [Debunking the myths of RPC and REST](https://web.archive.org/web/20170608193645/http://etherealbits.com/2012/12/debunking-the-myths-of-rpc-rest/)",
            "* [What are the drawbacks of using REST](https://www.quora.com/What-are-the-drawbacks-of-using-RESTful-APIs)",
            "* [Crack the system design interview](http://www.puncsky.com/blog/2016-02-13-crack-the-system-design-interview)",
            "* [Thrift](https://code.facebook.com/posts/1468950976659943/)",
            "* [Why REST for internal use and not RPC](http://arstechnica.com/civis/viewtopic.php?t=1190508)",
            ""
          ]
        },
        "exercises": [
          {
            "question": "Describe the mechanism behind RPC and REST calls comparison.",
            "answer": "Refer to the diagrams and trade-offs of RPC and REST calls comparison as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Communication - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Communication?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements and constraints.",
            "Cost vs Storage"
          ],
          "correctIndex": 2,
          "explanation": "System design has no silver bullets; it is entirely about understanding trade-offs for specific use cases."
        }
      ]
    }
  },
  {
    "id": 19,
    "title": "Security",
    "description": "Exhaustive guide and interview questions on Security",
    "chapters": [
      {
        "title": "Overview",
        "content": [
          "",
          "This section could use some updates.  Consider [contributing](#contributing)!",
          "",
          "Security is a broad topic.  Unless you have considerable experience, a security background, or are applying for a position that requires knowledge of security, you probably won't need to know more than the basics:",
          "",
          "* Encrypt in transit and at rest.",
          "* Sanitize all user inputs or any input parameters exposed to user to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) and [SQL injection](https://en.wikipedia.org/wiki/SQL_injection).",
          "* Use parameterized queries to prevent SQL injection.",
          "* Use the principle of [least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Explain the core concepts and trade-offs of Security.",
            "answer": "Review the Security module architecture and diagrams to solidify your understanding."
          }
        ]
      },
      {
        "title": "Source(s) and further reading",
        "content": [
          "",
          "* [API security checklist](https://github.com/shieldfy/API-Security-Checklist)",
          "* [Security guide for developers](https://github.com/FallibleInc/security-guide-for-developers)",
          "* [OWASP top ten](https://www.owasp.org/index.php/OWASP_Top_Ten_Cheat_Sheet)",
          ""
        ],
        "deepDive": null,
        "exercises": [
          {
            "question": "Describe the mechanism behind Source(s) and further reading.",
            "answer": "Refer to the diagrams and trade-offs of Source(s) and further reading as discussed in the chapter."
          }
        ]
      }
    ],
    "exam": {
      "title": "Security - Final Exam",
      "questions": [
        {
          "q": "What is the most critical trade-off in Security?",
          "options": [
            "Performance vs Latency",
            "Consistency vs Availability",
            "It depends entirely on the specific system requirements.",
            "SQL vs NoSQL"
          ],
          "correctIndex": 2,
          "explanation": "System design is about choosing the right trade-off."
        }
      ]
    }
  }
];
