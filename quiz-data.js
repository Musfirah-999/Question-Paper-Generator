

const quizData = {
    subjects: {
        "discrete-maths": {
            name: "Discrete Mathematics",
            icon: "fas fa-calculator",
            topics: {
                "logic": {
                    name: "Logic",
                    subtopics: [
                        "Propositional Logic",
                        "Predicate Logic",
                        "Logical Equivalences",
                        "Rules of Inference"
                    ]
                },
                "sets": {
                    name: "Set Theory",
                    subtopics: [
                        "Set Operations",
                        "Venn Diagrams",
                        "Power Sets",
                        "Cartesian Products"
                    ]
                },
                "relations": {
                    name: "Relations",
                    subtopics: [
                        "Properties of Relations",
                        "Equivalence Relations",
                        "Partial Orderings",
                        "Hasse Diagrams"
                    ]
                },
                "functions": {
                    name: "Functions",
                    subtopics: [
                        "Function Types",
                        "Inverse Functions",
                        "Composition",
                        "Special Functions"
                    ]
                },
                "combinatorics": {
                    name: "Combinatorics",
                    subtopics: [
                        "Counting Principles",
                        "Permutations",
                        "Combinations",
                        "Pigeonhole Principle"
                    ]
                },
                "graphs": {
                    name: "Graph Theory",
                    subtopics: [
                        "Graph Types",
                        "Paths & Circuits",
                        "Planar Graphs",
                        "Graph Coloring"
                    ]
                }
            }
        },

        "computer-networks": {
            name: "Computer Networks",
            icon: "fas fa-network-wired",
            topics: {
                "network-basics": {
                    name: "Network Basics",
                    subtopics: [
                        "Network Types",
                        "Network Topologies",
                        "Network Devices",
                        "OSI Model"
                    ]
                },
                "tcp-ip": {
                    name: "TCP/IP Protocol",
                    subtopics: [
                        "TCP vs UDP",
                        "IP Addressing",
                        "Subnetting",
                        "Ports & Sockets"
                    ]
                },
                "routing": {
                    name: "Routing & Switching",
                    subtopics: [
                        "Routing Protocols",
                        "Switching Techniques",
                        "Routing Algorithms",
                        "Network Layer"
                    ]
                },
                "data-link": {
                    name: "Data Link Layer",
                    subtopics: [
                        "Error Detection",
                        "Flow Control",
                        "MAC Protocols",
                        "Ethernet"
                    ]
                },
                "application-layer": {
                    name: "Application Layer",
                    subtopics: [
                        "HTTP/HTTPS",
                        "DNS",
                        "Email Protocols",
                        "FTP & SSH"
                    ]
                }
            }
        },
        "database": {
            name: "Database Management",
            icon: "fas fa-database",
            topics: {
                "basics": {
                    name: "Database Basics",
                    subtopics: [
                        "DBMS Concepts",
                        "Data Models",
                        "Database Architecture",
                        "Data Independence"
                    ]
                },
                "er-model": {
                    name: "ER Model",
                    subtopics: [
                        "Entities & Attributes",
                        "Relationships",
                        "ER Diagrams",
                        "ER to Relational"
                    ]
                },
                "relational-model": {
                    name: "Relational Model",
                    subtopics: [
                        "Relational Algebra",
                        "Relational Calculus",
                        "Integrity Constraints",
                        "Keys"
                    ]
                },
                "sql": {
                    name: "SQL",
                    subtopics: [
                        "DDL Commands",
                        "DML Commands",
                        "Joins",
                        "Subqueries"
                    ]
                },
                "normalization": {
                    name: "Normalization",
                    subtopics: [
                        "Functional Dependencies",
                        "Normal Forms",
                        "Decomposition"
                    ]
                }
            }
        },
        "dsa": {
            name: "Data Structures & Algorithms",
            icon: "fas fa-sitemap",
            topics: {
                "arrays": {
                    name: "Arrays",
                    subtopics: [
                        "Array Operations",
                        "Multidimensional Arrays",
                        "Dynamic Arrays"
                    ]
                },
                "linked-lists": {
                    name: "Linked Lists",
                    subtopics: [
                        "Singly Linked Lists",
                        "Doubly Linked Lists",
                        "Circular Lists"
                    ]
                },
                "stacks": {
                    name: "Stacks",
                    subtopics: [
                        "Stack Operations",
                        "Stack Applications",
                        "Infix/Postfix"
                    ]
                },
                "queues": {
                    name: "Queues",
                    subtopics: [
                        "Queue Operations",
                        "Circular Queues",
                        "Priority Queues"
                    ]
                },
                "trees": {
                    name: "Trees",
                    subtopics: [
                        "Binary Trees",
                        "Binary Search Trees",
                        "AVL Trees",
                        "Heap"
                    ]
                },
                "graphs": {
                    name: "Graphs",
                    subtopics: [
                        "Graph Representation",
                        "Graph Traversal",
                        "Shortest Path"
                    ]
                }
            }
        },
        "oop": {
            name: "Object-Oriented Programming",
            icon: "fas fa-cube",
            topics: {
                "basics": {
                    name: "OOP Basics",
                    subtopics: [
                        "Classes & Objects",
                        "Abstraction",
                        "Encapsulation"
                    ]
                },
                "inheritance": {
                    name: "Inheritance",
                    subtopics: [
                        "Types of Inheritance",
                        "Method Overriding",
                        "Super Keyword"
                    ]
                },
                "polymorphism": {
                    name: "Polymorphism",
                    subtopics: [
                        "Compile-time Polymorphism",
                        "Runtime Polymorphism",
                        "Virtual Functions"
                    ]
                },
                "design-patterns": {
                    name: "Design Patterns",
                    subtopics: [
                        "Creational Patterns",
                        "Structural Patterns",
                        "Singleton Pattern"
                    ]
                },
                "exception": {
                    name: "Exception Handling",
                    subtopics: [
                        "Try-Catch Blocks",
                        "Custom Exceptions",
                        "Finally Block"
                    ]
                }
            }
        }
    },

    questions: [
        // ========== DISCRETE MATHEMATICS - LOGIC ==========
        {
            id: "DM-LOG-1",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Propositional Logic",
            question: "Which of the following is a tautology?",
            options: [
                "p ∧ ¬p",
                "p ∨ ¬p",
                "p → ¬p",
                "p ↔ ¬p"
            ],
            correctAnswer: 1,
            explanation: "p ∨ ¬p is always true, making it a tautology. This is known as the Law of Excluded Middle."
        },
        {
            id: "DM-LOG-2",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Propositional Logic",
            question: "What is the contrapositive of 'If it rains, then the ground is wet'?",
            options: [
                "If it does not rain, then the ground is not wet",
                "If the ground is wet, then it rains",
                "If the ground is not wet, then it does not rain",
                "If it rains, then the ground is not dry"
            ],
            correctAnswer: 2,
            explanation: "The contrapositive of p → q is ¬q → ¬p."
        },
        {
            id: "DM-LOG-3",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Predicate Logic",
            question: "Which quantifier expresses 'There exists a student who passed'?",
            options: [
                "∀ (for all)",
                "∃ (there exists)",
                "∄ (there does not exist)",
                "∃! (there exists exactly one)"
            ],
            correctAnswer: 1,
            explanation: "∃ is the existential quantifier meaning 'there exists'."
        },
        {
            id: "DM-LOG-4",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Logical Equivalences",
            question: "According to De Morgan's Law, ¬(p ∧ q) is equivalent to:",
            options: [
                "¬p ∧ ¬q",
                "¬p ∨ ¬q",
                "p ∧ ¬q",
                "p ∨ ¬q"
            ],
            correctAnswer: 1,
            explanation: "De Morgan's Law states that ¬(p ∧ q) ≡ ¬p ∨ ¬q."
        },
        {
            id: "DM-LOG-5",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Rules of Inference",
            question: "Which rule is used: 'If rain then wet. It rains. Therefore, wet.'?",
            options: [
                "Modus Tollens",
                "Modus Ponens",
                "Hypothetical Syllogism",
                "Disjunctive Syllogism"
            ],
            correctAnswer: 1,
            explanation: "Modus Ponens has the form: p → q, p, ∴ q."
        },
        {
            id: "DM-LOG-6",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Propositional Logic",
            question: "Which logical operator represents AND?",
            options: ["→", "∧", "∨", "¬"],
            correctAnswer: 1,
            explanation: "∧ represents logical AND."
        },
        {
            id: "DM-LOG-7",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Propositional Logic",
            question: "What is the negation of p → q?",
            options: ["¬p → ¬q", "p ∧ ¬q", "¬p ∨ q", "p → ¬q"],
            correctAnswer: 1,
            explanation: "The negation of p → q is p ∧ ¬q."
        },
        {
            id: "DM-LOG-8",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Predicate Logic",
            question: "In ∀x P(x), what does ∀ represent?",
            options: ["Existential quantifier", "Universal quantifier", "Negation", "Implication"],
            correctAnswer: 1,
            explanation: "∀ is the universal quantifier meaning 'for all'."
        },
        {
            id: "DM-LOG-9",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Logical Equivalences",
            question: "p → q is logically equivalent to:",
            options: ["¬p ∨ q", "p ∨ ¬q", "¬p ∧ q", "p ∧ ¬q"],
            correctAnswer: 0,
            explanation: "p → q ≡ ¬p ∨ q."
        },
        {
            id: "DM-LOG-10",
            subject: "discrete-maths",
            topic: "logic",
            subtopic: "Rules of Inference",
            question: "Which rule is: 'p ∨ q, ¬p, therefore q'?",
            options: ["Modus Ponens", "Modus Tollens", "Disjunctive Syllogism", "Addition"],
            correctAnswer: 2,
            explanation: "Disjunctive Syllogism: p ∨ q, ¬p, ∴ q."
        },

        // ========== DISCRETE MATHEMATICS - SETS ==========
        {
            id: "DM-SET-1",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Set Operations",
            question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
            options: [
                "{1, 2, 3, 4, 5}",
                "{3}",
                "{1, 2}",
                "{4, 5}"
            ],
            correctAnswer: 1,
            explanation: "The intersection contains elements common to both sets."
        },
        {
            id: "DM-SET-2",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Power Sets",
            question: "What is the cardinality of the power set of {a, b, c}?",
            options: ["3", "6", "8", "9"],
            correctAnswer: 2,
            explanation: "The power set has 2^n elements, where n=3 so 2³=8."
        },
        {
            id: "DM-SET-3",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Venn Diagrams",
            question: "In a Venn diagram, overlapping region represents:",
            options: ["Union", "Intersection", "Complement", "Difference"],
            correctAnswer: 1,
            explanation: "Overlapping region shows intersection of sets."
        },
        {
            id: "DM-SET-4",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Cartesian Products",
            question: "If A = {1, 2} and B = {x, y}, how many elements in A × B?",
            options: ["2", "4", "6", "8"],
            correctAnswer: 1,
            explanation: "|A × B| = |A| × |B| = 2 × 2 = 4."
        },
        {
            id: "DM-SET-5",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Set Operations",
            question: "A ∪ B means:",
            options: ["Elements in A or B", "Elements in A and B", "Elements not in A", "Elements only in A"],
            correctAnswer: 0,
            explanation: "Union (∪) contains elements in A or B or both."
        },
        {
            id: "DM-SET-6",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Set Operations",
            question: "What is A - B (set difference)?",
            options: [
                "Elements in A but not in B",
                "Elements in B but not in A",
                "Elements in both A and B",
                "All elements in A and B"
            ],
            correctAnswer: 0,
            explanation: "A - B contains elements that are in A but not in B."
        },
        {
            id: "DM-SET-7",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Venn Diagrams",
            question: "Which region represents A ∩ B'?",
            options: [
                "Only A",
                "Only B",
                "Both A and B",
                "Neither A nor B"
            ],
            correctAnswer: 0,
            explanation: "A ∩ B' represents elements in A but not in B."
        },
        {
            id: "DM-SET-8",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Power Sets",
            question: "Which is always an element of power set?",
            options: ["Empty set", "Set itself", "Both", "Neither"],
            correctAnswer: 2,
            explanation: "Power set always contains empty set and the original set."
        },
        {
            id: "DM-SET-9",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Cartesian Products",
            question: "Is A × B = B × A?",
            options: ["Always", "Never", "Sometimes", "Only when A = B"],
            correctAnswer: 2,
            explanation: "Only equal when A = B or when one is empty."
        },
        {
            id: "DM-SET-10",
            subject: "discrete-maths",
            topic: "sets",
            subtopic: "Set Operations",
            question: "(A ∩ B) ∪ (A ∩ C) = ?",
            options: ["A ∩ (B ∪ C)", "A ∪ (B ∩ C)", "(A ∪ B) ∩ C", "A ∩ B ∩ C"],
            correctAnswer: 0,
            explanation: "Distributive law: A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."
        },
        // Discrete Maths - Functions (5 more)
        {
            id: "DM-FUN-1",
            subject: "discrete-maths",
            topic: "functions",
            subtopic: "Function Types",
            question: "A function that is both one-to-one and onto is called:",
            options: [
                "Bijective function",
                "Injective function",
                "Surjective function",
                "Partial function"
            ],
            correctAnswer: 0,
            explanation: "A bijective function is both injective (one-to-one) and surjective (onto)."
        },
        {
            id: "DM-FUN-2",
            subject: "discrete-maths",
            topic: "functions",
            subtopic: "Inverse Functions",
            question: "For a function to have an inverse, it must be:",
            options: [
                "Bijective",
                "Injective only",
                "Surjective only",
                "Neither injective nor surjective"
            ],
            correctAnswer: 0,
            explanation: "Only bijective functions have true inverses."
        },
        {
            id: "DM-FUN-3",
            subject: "discrete-maths",
            topic: "functions",
            subtopic: "Composition",
            question: "If f(g(x)) is defined, what must be true about the domains and codomains?",
            options: [
                "Codomain of g ⊆ Domain of f",
                "Domain of f ⊆ Codomain of g",
                "Both domains equal",
                "Both codomains equal"
            ],
            correctAnswer: 0,
            explanation: "For composition f(g(x)), output of g must be valid input for f."
        },
        {
            id: "DM-FUN-4",
            subject: "discrete-maths",
            topic: "functions",
            subtopic: "Special Functions",
            question: "The floor function ⌊x⌋ returns:",
            options: [
                "Greatest integer ≤ x",
                "Smallest integer ≥ x",
                "x rounded to nearest integer",
                "Absolute value of x"
            ],
            correctAnswer: 0,
            explanation: "Floor function gives the greatest integer less than or equal to x."
        },
        {
            id: "DM-FUN-5",
            subject: "discrete-maths",
            topic: "functions",
            subtopic: "Function Types",
            question: "A function where f(a) = f(b) implies a = b is called:",
            options: [
                "Injective (one-to-one)",
                "Surjective (onto)",
                "Bijective",
                "Constant function"
            ],
            correctAnswer: 0,
            explanation: "Injective functions map distinct elements to distinct images."
        },

        // Discrete Maths - Combinatorics (5 more)
        {
            id: "DM-COM-6",
            subject: "discrete-maths",
            topic: "combinatorics",
            subtopic: "Counting Principles",
            question: "The sum rule is used when:",
            options: [
                "Tasks are mutually exclusive",
                "Tasks are performed in sequence",
                "Both A and B",
                "Neither A nor B"
            ],
            correctAnswer: 0,
            explanation: "Sum rule: if tasks are mutually exclusive, total ways = sum of individual ways."
        },
        {
            id: "DM-COM-7",
            subject: "discrete-maths",
            topic: "combinatorics",
            subtopic: "Permutations",
            question: "Number of permutations of n distinct objects taken r at a time:",
            options: [
                "n!/(n-r)!",
                "n!/r!(n-r)!",
                "n!",
                "r!"
            ],
            correctAnswer: 0,
            explanation: "P(n,r) = n!/(n-r)! for permutations."
        },
        {
            id: "DM-COM-8",
            subject: "discrete-maths",
            topic: "combinatorics",
            subtopic: "Combinations",
            question: "C(n,r) equals:",
            options: [
                "n!/r!(n-r)!",
                "n!/(n-r)!",
                "r!/n!(n-r)!",
                "(n-r)!/r!n!"
            ],
            correctAnswer: 0,
            explanation: "C(n,r) = n!/(r!(n-r)!) for combinations."
        },
        {
            id: "DM-COM-9",
            subject: "discrete-maths",
            topic: "combinatorics",
            subtopic: "Pigeonhole Principle",
            question: "If 13 pigeons are in 12 holes, what must be true?",
            options: [
                "At least one hole has ≥2 pigeons",
                "All holes have equal pigeons",
                "No hole is empty",
                "Exactly one hole has 2 pigeons"
            ],
            correctAnswer: 0,
            explanation: "Pigeonhole principle: if n items in m containers with n>m, at least one container has ≥2 items."
        },
        {
            id: "DM-COM-10",
            subject: "discrete-maths",
            topic: "combinatorics",
            subtopic: "Counting Principles",
            question: "Product rule is used when:",
            options: [
                "Tasks are performed in sequence",
                "Tasks are mutually exclusive",
                "Tasks are independent",
                "Tasks are identical"
            ],
            correctAnswer: 0,
            explanation: "Product rule: if task has m ways and another has n ways, total ways = m × n."
        },

        // Discrete Maths - Graphs (10 more)
        {
            id: "DM-GRAPH-11",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Graph Types",
            question: "A graph with no cycles is called:",
            options: [
                "Tree",
                "Complete graph",
                "Bipartite graph",
                "Planar graph"
            ],
            correctAnswer: 0,
            explanation: "A tree is a connected acyclic graph."
        },
        {
            id: "DM-GRAPH-12",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Graph Types",
            question: "Kₙ represents:",
            options: [
                "Complete graph with n vertices",
                "Tree with n vertices",
                "Bipartite graph",
                "Planar graph"
            ],
            correctAnswer: 0,
            explanation: "Kₙ is complete graph where every pair of vertices is connected."
        },
        {
            id: "DM-GRAPH-13",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Paths & Circuits",
            question: "Euler circuit exists if:",
            options: [
                "All vertices have even degree",
                "All vertices have odd degree",
                "Graph is connected",
                "Both A and C"
            ],
            correctAnswer: 3,
            explanation: "Euler circuit exists if graph is connected and all vertices have even degree."
        },
        {
            id: "DM-GRAPH-14",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Paths & Circuits",
            question: "Hamiltonian path visits:",
            options: [
                "Each vertex exactly once",
                "Each edge exactly once",
                "All vertices at least once",
                "All edges at least once"
            ],
            correctAnswer: 0,
            explanation: "Hamiltonian path visits each vertex exactly once."
        },
        {
            id: "DM-GRAPH-15",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Planar Graphs",
            question: "K₅ (complete graph with 5 vertices) is:",
            options: [
                "Non-planar",
                "Planar",
                "Tree",
                "Bipartite"
            ],
            correctAnswer: 0,
            explanation: "K₅ is non-planar (proved by Kuratowski's theorem)."
        },
        {
            id: "DM-GRAPH-16",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Planar Graphs",
            question: "Euler's formula for connected planar graph:",
            options: [
                "V - E + F = 2",
                "V + E - F = 2",
                "V - E - F = 2",
                "V + E + F = 2"
            ],
            correctAnswer: 0,
            explanation: "Euler's formula: V - E + F = 2 for connected planar graphs."
        },
        {
            id: "DM-GRAPH-17",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Graph Coloring",
            question: "Four Color Theorem states:",
            options: [
                "Any planar map needs ≤4 colors",
                "Any graph needs ≤4 colors",
                "Any map needs exactly 4 colors",
                "Planar graphs need ≤3 colors"
            ],
            correctAnswer: 0,
            explanation: "Four Color Theorem: any planar map can be colored with ≤4 colors."
        },
        {
            id: "DM-GRAPH-18",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Graph Coloring",
            question: "Chromatic number of bipartite graph is:",
            options: [
                "2",
                "3",
                "4",
                "1"
            ],
            correctAnswer: 0,
            explanation: "Bipartite graphs are 2-colorable."
        },
        {
            id: "DM-GRAPH-19",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Graph Types",
            question: "A graph where vertices can be divided into two sets with edges only between sets:",
            options: [
                "Bipartite graph",
                "Complete graph",
                "Tree",
                "Planar graph"
            ],
            correctAnswer: 0,
            explanation: "Bipartite graph has two partitions with no edges within same partition."
        },
        {
            id: "DM-GRAPH-20",
            subject: "discrete-maths",
            topic: "graphs",
            subtopic: "Paths & Circuits",
            question: "Dijkstra's algorithm finds:",
            options: [
                "Shortest path from source to all vertices",
                "Minimum spanning tree",
                "All paths between two vertices",
                "Longest path in graph"
            ],
            correctAnswer: 0,
            explanation: "Dijkstra's algorithm finds shortest paths from source to all vertices."
        },

        // Discrete Maths - Relations (5 more)
        {
            id: "DM-REL-6",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Properties of Relations",
            question: "A relation R is transitive if:",
            options: [
                "(a,b)∈R and (b,c)∈R implies (a,c)∈R",
                "(a,a)∈R for all a",
                "(a,b)∈R implies (b,a)∈R",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "Transitive: if a is related to b and b to c, then a is related to c."
        },
        {
            id: "DM-REL-7",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Equivalence Relations",
            question: "Equivalence classes partition the set into:",
            options: [
                "Disjoint subsets",
                "Overlapping subsets",
                "Nested subsets",
                "Random subsets"
            ],
            correctAnswer: 0,
            explanation: "Equivalence classes form a partition (disjoint subsets covering whole set)."
        },
        {
            id: "DM-REL-8",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Partial Orderings",
            question: "Example of partial order:",
            options: [
                "Set inclusion (⊆)",
                "Equality (=)",
                "Less than (<)",
                "All of these"
            ],
            correctAnswer: 0,
            explanation: "Set inclusion is reflexive, antisymmetric, and transitive."
        },
        {
            id: "DM-REL-9",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Hasse Diagrams",
            question: "In Hasse diagram, edges represent:",
            options: [
                "Covering relations",
                "All relations",
                "Reflexive relations",
                "Symmetric relations"
            ],
            correctAnswer: 0,
            explanation: "Hasse diagram shows covering relations (immediate predecessors)."
        },
        {
            id: "DM-REL-10",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Properties of Relations",
            question: "A relation that is reflexive, symmetric, and transitive is:",
            options: [
                "Equivalence relation",
                "Partial order",
                "Total order",
                "Function"
            ],
            correctAnswer: 0,
            explanation: "Equivalence relations have all three properties."
        },

        // ========== DATABASE - SQL ==========
        {
            id: "DB-SQL-1",
            subject: "database",
            topic: "sql",
            subtopic: "DDL Commands",
            question: "Which SQL command creates a new table?",
            options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "DEFINE TABLE"],
            correctAnswer: 0,
            explanation: "CREATE TABLE is used to create a new table."
        },
        {
            id: "DB-SQL-2",
            subject: "database",
            topic: "sql",
            subtopic: "DML Commands",
            question: "Which command modifies existing records?",
            options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
            correctAnswer: 0,
            explanation: "UPDATE modifies existing records."
        },
        {
            id: "DB-SQL-3",
            subject: "database",
            topic: "sql",
            subtopic: "Joins",
            question: "Which join returns all rows from both tables?",
            options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            correctAnswer: 3,
            explanation: "FULL OUTER JOIN returns all rows from both tables."
        },
        {
            id: "DB-SQL-4",
            subject: "database",
            topic: "sql",
            subtopic: "Subqueries",
            question: "A subquery that returns one value is called:",
            options: ["Scalar Subquery", "Row Subquery", "Table Subquery", "Correlated Subquery"],
            correctAnswer: 0,
            explanation: "Scalar subquery returns exactly one value."
        },
        {
            id: "DB-SQL-5",
            subject: "database",
            topic: "sql",
            subtopic: "DDL Commands",
            question: "Which command deletes a table?",
            options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
            correctAnswer: 1,
            explanation: "DROP TABLE deletes a table and all its data."
        },
        {
            id: "DB-SQL-6",
            subject: "database",
            topic: "sql",
            subtopic: "DML Commands",
            question: "Which command retrieves data?",
            options: ["SELECT", "GET", "FETCH", "RETRIEVE"],
            correctAnswer: 0,
            explanation: "SELECT retrieves data from database."
        },
        {
            id: "DB-SQL-7",
            subject: "database",
            topic: "sql",
            subtopic: "Joins",
            question: "INNER JOIN returns:",
            options: [
                "All matching rows",
                "All rows from left table",
                "All rows from right table",
                "All rows from both tables"
            ],
            correctAnswer: 0,
            explanation: "INNER JOIN returns only matching rows."
        },
        {
            id: "DB-SQL-8",
            subject: "database",
            topic: "sql",
            subtopic: "Subqueries",
            question: "Subquery in WHERE clause is called:",
            options: ["Nested subquery", "Correlated subquery", "Inline view", "Scalar subquery"],
            correctAnswer: 0,
            explanation: "Subquery in WHERE is nested subquery."
        },
        {
            id: "DB-SQL-9",
            subject: "database",
            topic: "sql",
            subtopic: "DDL Commands",
            question: "ALTER TABLE is used to:",
            options: ["Modify table structure", "Delete table", "Create table", "Insert data"],
            correctAnswer: 0,
            explanation: "ALTER TABLE modifies existing table structure."
        },
        {
            id: "DB-SQL-10",
            subject: "database",
            topic: "sql",
            subtopic: "DML Commands",
            question: "DELETE vs TRUNCATE?",
            options: [
                "DELETE can be rolled back, TRUNCATE cannot",
                "TRUNCATE can be rolled back, DELETE cannot",
                "Both are same",
                "Neither can be rolled back"
            ],
            correctAnswer: 0,
            explanation: "DELETE is DML (can rollback), TRUNCATE is DDL (cannot rollback)."
        },
        // Database - Relational Model (10 more)
        {
            id: "DB-REL-1",
            subject: "database",
            topic: "relational-model",
            subtopic: "Relational Algebra",
            question: "Which relational algebra operation removes duplicates?",
            options: [
                "Projection (π)",
                "Selection (σ)",
                "Union (∪)",
                "All automatically remove duplicates"
            ],
            correctAnswer: 0,
            explanation: "Projection (π) removes duplicate tuples in relational algebra."
        },
        {
            id: "DB-REL-2",
            subject: "database",
            topic: "relational-model",
            subtopic: "Relational Calculus",
            question: "Tuple relational calculus uses:",
            options: [
                "{t | P(t)} notation",
                "σ, π, ⋈ operators",
                "SQL syntax",
                "Flow charts"
            ],
            correctAnswer: 0,
            explanation: "Tuple calculus: {t | P(t)} where t is tuple variable, P is predicate."
        },
        {
            id: "DB-REL-3",
            subject: "database",
            topic: "relational-model",
            subtopic: "Integrity Constraints",
            question: "Primary key constraint ensures:",
            options: [
                "Uniqueness and non-null",
                "Only uniqueness",
                "Only non-null",
                "Foreign key reference"
            ],
            correctAnswer: 0,
            explanation: "Primary key: unique and not null for all tuples."
        },
        {
            id: "DB-REL-4",
            subject: "database",
            topic: "relational-model",
            subtopic: "Keys",
            question: "Superkey vs Candidate key:",
            options: [
                "Superkey may have extra attributes",
                "Candidate key has extra attributes",
                "Both are same",
                "Superkey is minimal"
            ],
            correctAnswer: 0,
            explanation: "Superkey may have extra attributes; candidate key is minimal superkey."
        },
        {
            id: "DB-REL-5",
            subject: "database",
            topic: "relational-model",
            subtopic: "Relational Algebra",
            question: "Natural join requires:",
            options: [
                "Common attribute names",
                "Same number of attributes",
                "Primary key match",
                "Foreign key constraint"
            ],
            correctAnswer: 0,
            explanation: "Natural join joins on common attribute names."
        },
        {
            id: "DB-REL-6",
            subject: "database",
            topic: "relational-model",
            subtopic: "Relational Calculus",
            question: "Domain relational calculus uses:",
            options: [
                "{<x1,...,xn> | P(x1,...,xn)}",
                "{t | P(t)}",
                "SQL statements",
                "Algebraic expressions"
            ],
            correctAnswer: 0,
            explanation: "Domain calculus: {<x1,...,xn> | P(x1,...,xn)} where xi are domain variables."
        },
        {
            id: "DB-REL-7",
            subject: "database",
            topic: "relational-model",
            subtopic: "Integrity Constraints",
            question: "Referential integrity is enforced by:",
            options: [
                "Foreign key constraint",
                "Primary key constraint",
                "Check constraint",
                "Unique constraint"
            ],
            correctAnswer: 0,
            explanation: "Foreign key ensures referential integrity between tables."
        },
        {
            id: "DB-REL-8",
            subject: "database",
            topic: "relational-model",
            subtopic: "Keys",
            question: "Foreign key can reference:",
            options: [
                "Primary key or unique key",
                "Any attribute",
                "Only primary key",
                "Only candidate key"
            ],
            correctAnswer: 0,
            explanation: "Foreign key can reference primary key or unique constraint column."
        },
        {
            id: "DB-REL-9",
            subject: "database",
            topic: "relational-model",
            subtopic: "Relational Algebra",
            question: "Division operation (÷) finds:",
            options: [
                "All values that appear with all specified values",
                "Average of values",
                "Difference between relations",
                "Product of relations"
            ],
            correctAnswer: 0,
            explanation: "Division: finds all A values paired with all B values in another relation."
        },
        {
            id: "DB-REL-10",
            subject: "database",
            topic: "relational-model",
            subtopic: "Integrity Constraints",
            question: "Check constraint validates:",
            options: [
                "Domain integrity",
                "Referential integrity",
                "Entity integrity",
                "All integrity types"
            ],
            correctAnswer: 0,
            explanation: "Check constraint ensures domain integrity (valid data values)."
        },

        // Database - Normalization (15 more)
        {
            id: "DB-NORM-11",
            subject: "database",
            topic: "normalization",
            subtopic: "Functional Dependencies",
            question: "If A→B and B→C, then:",
            options: [
                "A→C (transitivity)",
                "C→A",
                "B→A",
                "No inference"
            ],
            correctAnswer: 0,
            explanation: "Armstrong's transitivity axiom: if A→B and B→C, then A→C."
        },
        {
            id: "DB-NORM-12",
            subject: "database",
            topic: "normalization",
            subtopic: "Normal Forms",
            question: "First Normal Form (1NF) requires:",
            options: [
                "Atomic values (no repeating groups)",
                "No partial dependencies",
                "No transitive dependencies",
                "All of above"
            ],
            correctAnswer: 0,
            explanation: "1NF: all attributes have atomic (indivisible) values."
        },
        {
            id: "DB-NORM-13",
            subject: "database",
            topic: "normalization",
            subtopic: "Normal Forms",
            question: "Second Normal Form (2NF) eliminates:",
            options: [
                "Partial dependencies",
                "Transitive dependencies",
                "Multivalued dependencies",
                "All dependencies"
            ],
            correctAnswer: 0,
            explanation: "2NF: no partial dependency of non-prime attribute on any candidate key."
        },
        {
            id: "DB-NORM-14",
            subject: "database",
            topic: "normalization",
            subtopic: "Normal Forms",
            question: "Third Normal Form (3NF) eliminates:",
            options: [
                "Transitive dependencies",
                "Partial dependencies",
                "Multivalued dependencies",
                "Functional dependencies"
            ],
            correctAnswer: 0,
            explanation: "3NF: no transitive dependency of non-prime attribute on any candidate key."
        },
        {
            id: "DB-NORM-15",
            subject: "database",
            topic: "normalization",
            subtopic: "Normal Forms",
            question: "Boyce-Codd Normal Form (BCNF) is stricter than:",
            options: [
                "3NF",
                "2NF",
                "1NF",
                "All of above"
            ],
            correctAnswer: 0,
            explanation: "BCNF is stricter version of 3NF."
        },
        {
            id: "DB-NORM-16",
            subject: "database",
            topic: "normalization",
            subtopic: "Decomposition",
            question: "Lossless join decomposition ensures:",
            options: [
                "Natural join recovers original relation",
                "No data duplication",
                "All FDs preserved",
                "Minimum relations"
            ],
            correctAnswer: 0,
            explanation: "Lossless join: joining decomposed relations gives original relation."
        },
        {
            id: "DB-NORM-17",
            subject: "database",
            topic: "normalization",
            subtopic: "Decomposition",
            question: "Dependency preserving decomposition ensures:",
            options: [
                "All FDs represented in some relation",
                "No redundancy",
                "Minimum relations",
                "Fast queries"
            ],
            correctAnswer: 0,
            explanation: "Dependency preserving: all FDs can be checked within individual relations."
        },
        {
            id: "DB-NORM-18",
            subject: "database",
            topic: "normalization",
            subtopic: "Functional Dependencies",
            question: "Closure of attribute set F⁺ represents:",
            options: [
                "All FDs logically implied",
                "Only given FDs",
                "Minimal cover",
                "Candidate keys"
            ],
            correctAnswer: 0,
            explanation: "F⁺ (closure) includes all FDs logically implied by given FDs."
        },
        {
            id: "DB-NORM-19",
            subject: "database",
            topic: "normalization",
            subtopic: "Functional Dependencies",
            question: "Minimal cover of FDs has:",
            options: [
                "No extraneous attributes",
                "Maximum FDs",
                "All possible FDs",
                "Only partial FDs"
            ],
            correctAnswer: 0,
            explanation: "Minimal cover: simplified set with no extraneous attributes."
        },
        {
            id: "DB-NORM-20",
            subject: "database",
            topic: "normalization",
            subtopic: "Normal Forms",
            question: "4NF deals with:",
            options: [
                "Multivalued dependencies",
                "Transitive dependencies",
                "Partial dependencies",
                "Join dependencies"
            ],
            correctAnswer: 0,
            explanation: "4NF eliminates multivalued dependencies."
        },

        // Database - SQL Advanced (15 more)
        {
            id: "DB-SQL-ADV-21",
            subject: "database",
            topic: "sql",
            subtopic: "Joins",
            question: "CROSS JOIN returns:",
            options: [
                "Cartesian product",
                "Matching rows only",
                "Left table rows",
                "Right table rows"
            ],
            correctAnswer: 0,
            explanation: "CROSS JOIN returns Cartesian product (all possible combinations)."
        },
        {
            id: "DB-SQL-ADV-22",
            subject: "database",
            topic: "sql",
            subtopic: "Subqueries",
            question: "Correlated subquery executes:",
            options: [
                "Once for each outer query row",
                "Only once",
                "Before outer query",
                "Independent of outer query"
            ],
            correctAnswer: 0,
            explanation: "Correlated subquery references outer query and executes per outer row."
        },
        {
            id: "DB-SQL-ADV-23",
            subject: "database",
            topic: "sql",
            subtopic: "Joins",
            question: "SELF JOIN is used to:",
            options: [
                "Join table with itself",
                "Join two different tables",
                "Join three tables",
                "Join with view"
            ],
            correctAnswer: 0,
            explanation: "SELF JOIN joins table to itself (useful for hierarchical data)."
        },
        {
            id: "DB-SQL-ADV-24",
            subject: "database",
            topic: "sql",
            subtopic: "Subqueries",
            question: "IN vs EXISTS:",
            options: [
                "EXISTS is faster for large subquery results",
                "IN is always faster",
                "Both same performance",
                "EXISTS checks existence, IN checks membership"
            ],
            correctAnswer: 3,
            explanation: "EXISTS checks if subquery returns any row; IN checks value membership."
        },
        {
            id: "DB-SQL-ADV-25",
            subject: "database",
            topic: "sql",
            subtopic: "DDL Commands",
            question: "CREATE INDEX improves:",
            options: [
                "Query performance",
                "Data integrity",
                "Storage efficiency",
                "Backup speed"
            ],
            correctAnswer: 0,
            explanation: "Indexes speed up SELECT queries but slow down INSERT/UPDATE/DELETE."
        },
        {
            id: "DB-SQL-ADV-26",
            subject: "database",
            topic: "sql",
            subtopic: "DML Commands",
            question: "MERGE statement combines:",
            options: [
                "INSERT, UPDATE, DELETE",
                "SELECT and INSERT",
                "CREATE and DROP",
                "JOIN and UNION"
            ],
            correctAnswer: 0,
            explanation: "MERGE (UPSERT) performs INSERT, UPDATE, or DELETE based on condition."
        },
        {
            id: "DB-SQL-ADV-27",
            subject: "database",
            topic: "sql",
            subtopic: "Joins",
            question: "NATURAL JOIN automatically joins on:",
            options: [
                "Columns with same name",
                "Primary key",
                "All columns",
                "First column"
            ],
            correctAnswer: 0,
            explanation: "NATURAL JOIN joins tables on columns with identical names."
        },
        {
            id: "DB-SQL-ADV-28",
            subject: "database",
            topic: "sql",
            subtopic: "Subqueries",
            question: "ALL operator compares value to:",
            options: [
                "All values in subquery",
                "Any value in subquery",
                "Average of subquery",
                "First value in subquery"
            ],
            correctAnswer: 0,
            explanation: "ALL: true if comparison holds for ALL values returned by subquery."
        },
        {
            id: "DB-SQL-ADV-29",
            subject: "database",
            topic: "sql",
            subtopic: "DDL Commands",
            question: "CREATE VIEW creates:",
            options: [
                "Virtual table based on query",
                "Physical table",
                "Temporary table",
                "Index"
            ],
            correctAnswer: 0,
            explanation: "View is virtual table defined by SELECT query."
        },
        {
            id: "DB-SQL-ADV-30",
            subject: "database",
            topic: "sql",
            subtopic: "DML Commands",
            question: "WITH clause (CTE) creates:",
            options: [
                "Temporary named result set",
                "Permanent table",
                "View",
                "Index"
            ],
            correctAnswer: 0,
            explanation: "Common Table Expression (CTE) creates temporary result set for query."
        },

        // ========== DSA - ARRAYS ==========
        {
            id: "DSA-ARR-1",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "What is the time complexity of accessing an array element?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctAnswer: 0,
            explanation: "Array access is O(1) using index."
        },
        {
            id: "DSA-ARR-2",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Dynamic Arrays",
            question: "Amortized time of append in dynamic arrays?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctAnswer: 0,
            explanation: "Amortized cost of append is O(1)."
        },
        {
            id: "DSA-ARR-3",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Multidimensional Arrays",
            question: "How to access element in 2D array arr[i][j]?",
            options: [
                "Row i, Column j",
                "Column i, Row j",
                "Index i+j",
                "Index i*j"
            ],
            correctAnswer: 0,
            explanation: "arr[i][j] accesses row i, column j."
        },
        {
            id: "DSA-ARR-4",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "Time complexity of inserting at beginning of array?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctAnswer: 2,
            explanation: "Inserting at beginning requires shifting all elements, O(n)."
        },
        {
            id: "DSA-ARR-5",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "Best algorithm to search sorted array?",
            options: ["Linear Search", "Binary Search", "Jump Search", "Interpolation Search"],
            correctAnswer: 1,
            explanation: "Binary search is O(log n) for sorted arrays."
        },
        {
            id: "DSA-ARR-6",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Dynamic Arrays",
            question: "When dynamic array resizes, what happens?",
            options: [
                "Creates new larger array",
                "Deletes old array",
                "Compresses array",
                "Nothing"
            ],
            correctAnswer: 0,
            explanation: "Creates new larger array and copies elements."
        },
        {
            id: "DSA-ARR-7",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Multidimensional Arrays",
            question: "Memory layout of 2D array?",
            options: ["Row-major", "Column-major", "Random", "Diagonal"],
            correctAnswer: 0,
            explanation: "C/C++ uses row-major order."
        },
        {
            id: "DSA-ARR-8",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "Time to delete last element?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correctAnswer: 0,
            explanation: "Deleting last element is O(1)."
        },
        {
            id: "DSA-ARR-9",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "Advantage of arrays over linked lists?",
            options: ["Random access", "Dynamic size", "Easy insertion", "No memory waste"],
            correctAnswer: 0,
            explanation: "Arrays allow O(1) random access."
        },
        {
            id: "DSA-ARR-10",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Dynamic Arrays",
            question: "Default resize factor?",
            options: ["2x", "1.5x", "3x", "Depends on language"],
            correctAnswer: 3,
            explanation: "Different languages use different factors (Java: 1.5x, Python: ~1.125x)."
        },

        // DSA - Arrays
        {
            id: "DSA-ARR-EXTRA1",
            subject: "dsa",
            topic: "arrays",
            subtopic: "Array Operations",
            question: "Kadane's algorithm finds:",
            options: [
                "Maximum subarray sum",
                "Array rotation",
                "Array sorting",
                "Array searching"
            ],
            correctAnswer: 0,
            explanation: "Kadane's algorithm finds maximum sum contiguous subarray in O(n)."
        },

        // DSA - Stacks 
        {
            id: "DSA-STK-EXTRA1",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Stack Operations",
            question: "Stack overflow occurs when:",
            options: [
                "Push on full stack",
                "Pop from empty stack",
                "Both A and B",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Stack overflow: trying to push element when stack is at capacity."
        },

        // DSA - Queues 
        {
            id: "DSA-QUE-EXTRA1",
            subject: "dsa",
            topic: "queues",
            subtopic: "Queue Operations",
            question: "Queue follows:",
            options: [
                "FIFO (First In First Out)",
                "LIFO (Last In First Out)",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Queue: First In First Out (like real-world queue)."
        },

        // DSA - Trees 
        {
            id: "DSA-TREE-EXTRA1",
            subject: "dsa",
            topic: "trees",
            subtopic: "Binary Trees",
            question: "Full binary tree has:",
            options: [
                "Each node has 0 or 2 children",
                "Each node has exactly 2 children",
                "All leaves at same level",
                "Complete filling"
            ],
            correctAnswer: 0,
            explanation: "Full binary tree: each node has either 0 or 2 children."
        },

        // DSA - Graphs
        {
            id: "DSA-GRAPH-EXTRA1",
            subject: "dsa",
            topic: "graphs",
            subtopic: "Graph Traversal",
            question: "BFS uses which data structure?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Heap"
            ],
            correctAnswer: 0,
            explanation: "Breadth-First Search uses queue for traversal."
        },
        // ========== OOP - BASICS ==========
        {
            id: "OOP-BAS-1",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "What is an object?",
            options: [
                "A blueprint for instances",
                "An instance of a class",
                "A collection of methods",
                "A type of variable"
            ],
            correctAnswer: 1,
            explanation: "An object is an instance of a class."
        },
        {
            id: "OOP-BAS-2",
            subject: "oop",
            topic: "basics",
            subtopic: "Abstraction",
            question: "What is abstraction in OOP?",
            options: [
                "Hiding implementation details",
                "Creating multiple forms",
                "Reusing code through inheritance",
                "Binding data and methods"
            ],
            correctAnswer: 0,
            explanation: "Abstraction means hiding implementation details."
        },
        {
            id: "OOP-BAS-3",
            subject: "oop",
            topic: "basics",
            subtopic: "Encapsulation",
            question: "What is encapsulation?",
            options: [
                "Wrapping data and methods together",
                "Creating multiple inheritance",
                "Hiding implementation details",
                "Reusing existing code"
            ],
            correctAnswer: 0,
            explanation: "Encapsulation is wrapping data and methods together."
        },
        {
            id: "OOP-BAS-4",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "What is a class?",
            options: [
                "An instance of an object",
                "A blueprint for objects",
                "A collection of variables",
                "A type of function"
            ],
            correctAnswer: 1,
            explanation: "A class is a blueprint for creating objects."
        },
        {
            id: "OOP-BAS-5",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "What is instantiation?",
            options: [
                "Creating an object from a class",
                "Destroying an object",
                "Inheriting from a class",
                "Overriding a method"
            ],
            correctAnswer: 0,
            explanation: "Instantiation is creating an object from a class."
        },
        {
            id: "OOP-BAS-6",
            subject: "oop",
            topic: "basics",
            subtopic: "Abstraction",
            question: "How to achieve abstraction?",
            options: ["Abstract classes", "Interfaces", "Both", "Neither"],
            correctAnswer: 2,
            explanation: "Both abstract classes and interfaces provide abstraction."
        },
        {
            id: "OOP-BAS-7",
            subject: "oop",
            topic: "basics",
            subtopic: "Encapsulation",
            question: "Access modifiers for encapsulation?",
            options: ["private, protected", "public", "Both", "None"],
            correctAnswer: 2,
            explanation: "All access modifiers help in encapsulation."
        },
        {
            id: "OOP-BAS-8",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "Constructor is used for:",
            options: ["Object initialization", "Object destruction", "Memory allocation", "Method calling"],
            correctAnswer: 0,
            explanation: "Constructor initializes object state."
        },
        {
            id: "OOP-BAS-9",
            subject: "oop",
            topic: "basics",
            subtopic: "Abstraction",
            question: "Real-world example of abstraction?",
            options: ["Car steering wheel", "Car engine", "Car paint", "Car seats"],
            correctAnswer: 0,
            explanation: "Steering wheel hides complex mechanics (abstraction)."
        },
        {
            id: "OOP-BAS-10",
            subject: "oop",
            topic: "basics",
            subtopic: "Encapsulation",
            question: "Benefit of encapsulation?",
            options: ["Data hiding", "Code reusability", "Polymorphism", "Inheritance"],
            correctAnswer: 0,
            explanation: "Encapsulation provides data hiding and security."
        },

        // ========== OOP - INHERITANCE ==========
        {
            id: "OOP-INH-1",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Types of Inheritance",
            question: "Which type uses multiple base classes?",
            options: [
                "Single Inheritance",
                "Multilevel Inheritance",
                "Hierarchical Inheritance",
                "Multiple Inheritance"
            ],
            correctAnswer: 3,
            explanation: "Multiple inheritance uses multiple base classes."
        },
        {
            id: "OOP-INH-2",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Method Overriding",
            question: "What is method overriding?",
            options: [
                "Creating multiple methods with same name",
                "Redefining method in derived class",
                "Hiding method in base class",
                "Calling superclass method"
            ],
            correctAnswer: 1,
            explanation: "Method overriding redefines method in derived class."
        },
        {
            id: "OOP-INH-3",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Super Keyword",
            question: "What does 'super' keyword do?",
            options: [
                "Calls subclass constructor",
                "Calls superclass constructor/method",
                "Creates new object",
                "Deletes object"
            ],
            correctAnswer: 1,
            explanation: "'super' calls superclass constructor or method."
        },
        {
            id: "OOP-INH-4",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Types of Inheritance",
            question: "A→B→C represents which inheritance?",
            options: [
                "Single Inheritance",
                "Multilevel Inheritance",
                "Hierarchical Inheritance",
                "Multiple Inheritance"
            ],
            correctAnswer: 1,
            explanation: "A→B→C represents multilevel inheritance."
        },
        {
            id: "OOP-INH-5",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Method Overriding",
            question: "Method overriding occurs at:",
            options: [
                "Compile time",
                "Runtime",
                "Both",
                "Neither"
            ],
            correctAnswer: 1,
            explanation: "Method overriding is resolved at runtime."
        },
        {
            id: "OOP-INH-6",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Types of Inheritance",
            question: "Multiple classes inherit from one class?",
            options: [
                "Single Inheritance",
                "Multilevel Inheritance",
                "Hierarchical Inheritance",
                "Hybrid Inheritance"
            ],
            correctAnswer: 2,
            explanation: "Hierarchical inheritance: multiple derived from one base."
        },
        {
            id: "OOP-INH-7",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Method Overriding",
            question: "Requirements for method overriding?",
            options: [
                "Same method name and parameters",
                "Different return type",
                "Static method",
                "Private method"
            ],
            correctAnswer: 0,
            explanation: "Same method signature required for overriding."
        },
        {
            id: "OOP-INH-8",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Super Keyword",
            question: "super() calls:",
            options: [
                "Parent class constructor",
                "Child class constructor",
                "Current class method",
                "Static method"
            ],
            correctAnswer: 0,
            explanation: "super() calls parent class constructor."
        },
        {
            id: "OOP-INH-9",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Types of Inheritance",
            question: "Diamond problem occurs in:",
            options: [
                "Single Inheritance",
                "Multiple Inheritance",
                "Multilevel Inheritance",
                "Hierarchical Inheritance"
            ],
            correctAnswer: 1,
            explanation: "Diamond problem in multiple inheritance."
        },
        {
            id: "OOP-INH-10",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Method Overriding",
            question: "@Override annotation is:",
            options: [
                "Compile-time check",
                "Runtime check",
                "Optional",
                "Mandatory"
            ],
            correctAnswer: 0,
            explanation: "@Override helps compiler verify overriding."
        },

        // ========== ADD MORE QUESTIONS FOR EACH SUBJECT ==========
        // Database - Basics
        {
            id: "DB-BAS-1",
            subject: "database",
            topic: "basics",
            subtopic: "DBMS Concepts",
            question: "What does DBMS stand for?",
            options: [
                "Database Management System",
                "Data Basic Management System",
                "Digital Business Management System",
                "Database Manipulation System"
            ],
            correctAnswer: 0,
            explanation: "DBMS stands for Database Management System."
        },
        {
            id: "DB-BAS-2",
            subject: "database",
            topic: "basics",
            subtopic: "Data Models",
            question: "Which data model uses tables?",
            options: [
                "Hierarchical Model",
                "Network Model",
                "Relational Model",
                "Object-Oriented Model"
            ],
            correctAnswer: 2,
            explanation: "Relational model uses tables (relations)."
        },
        {
            id: "DB-BAS-3",
            subject: "database",
            topic: "basics",
            subtopic: "Database Architecture",
            question: "3-tier architecture consists of:",
            options: [
                "Presentation, Application, Database",
                "User, Server, Network",
                "Client, Middleware, Server",
                "Input, Process, Output"
            ],
            correctAnswer: 0,
            explanation: "3-tier: Presentation, Application, Database layers."
        },
        {
            id: "DB-BAS-4",
            subject: "database",
            topic: "basics",
            subtopic: "Data Independence",
            question: "Logical data independence means:",
            options: [
                "Change logical schema without affecting applications",
                "Change physical schema without affecting logical",
                "Change applications without affecting schema",
                "Change users without affecting data"
            ],
            correctAnswer: 0,
            explanation: "Logical independence: change logical schema without affecting apps."
        },
        {
            id: "DB-BAS-5",
            subject: "database",
            topic: "basics",
            subtopic: "DBMS Concepts",
            question: "ACID properties ensure:",
            options: [
                "Transaction reliability",
                "Data compression",
                "Fast queries",
                "Backup recovery"
            ],
            correctAnswer: 0,
            explanation: "ACID: Atomicity, Consistency, Isolation, Durability for transactions."
        },

        // DSA - Linked Lists
        {
            id: "DSA-LL-1",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Singly Linked Lists",
            question: "Time complexity of inserting at beginning of singly linked list?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correctAnswer: 0,
            explanation: "Inserting at beginning is O(1) in singly linked list."
        },
        {
            id: "DSA-LL-2",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Doubly Linked Lists",
            question: "Main advantage of doubly over singly linked list?",
            options: [
                "Less memory",
                "Faster insertion at beginning",
                "Bidirectional traversal",
                "Faster deletion at end"
            ],
            correctAnswer: 2,
            explanation: "Doubly linked lists allow bidirectional traversal."
        },
        {
            id: "DSA-LL-3",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Circular Lists",
            question: "Last node points to:",
            options: ["Null", "First node", "Previous node", "Next node"],
            correctAnswer: 1,
            explanation: "In circular list, last node points to first node."
        },
        {
            id: "DSA-LL-4",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Singly Linked Lists",
            question: "Disadvantage of linked lists?",
            options: [
                "No random access",
                "Fixed size",
                "Complex implementation",
                "Memory fragmentation"
            ],
            correctAnswer: 0,
            explanation: "No direct access to elements, must traverse from head."
        },
        {
            id: "DSA-LL-5",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Doubly Linked Lists",
            question: "Extra memory per node compared to singly?",
            options: ["1 pointer", "2 pointers", "3 pointers", "No extra"],
            correctAnswer: 0,
            explanation: "One extra pointer (previous) per node."
        },

        // OOP - Polymorphism
        {
            id: "OOP-POL-1",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Compile-time Polymorphism",
            question: "Example of compile-time polymorphism?",
            options: [
                "Method overriding",
                "Method overloading",
                "Virtual functions",
                "Abstract classes"
            ],
            correctAnswer: 1,
            explanation: "Method overloading is compile-time polymorphism."
        },
        {
            id: "OOP-POL-2",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Runtime Polymorphism",
            question: "How achieved?",
            options: [
                "Method overloading",
                "Method overriding with virtual functions",
                "Function templates",
                "Operator overloading"
            ],
            correctAnswer: 1,
            explanation: "Runtime polymorphism via method overriding with virtual functions."
        },
        {
            id: "OOP-POL-3",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Virtual Functions",
            question: "Virtual function allows:",
            options: [
                "Late binding",
                "Early binding",
                "Static binding",
                "Compile-time binding"
            ],
            correctAnswer: 0,
            explanation: "Virtual functions enable late (runtime) binding."
        },
        {
            id: "OOP-POL-4",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Compile-time Polymorphism",
            question: "Operator overloading is:",
            options: [
                "Compile-time polymorphism",
                "Runtime polymorphism",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Operator overloading is compile-time polymorphism."
        },
        {
            id: "OOP-POL-5",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Runtime Polymorphism",
            question: "Base class pointer can point to:",
            options: [
                "Base class object only",
                "Derived class object only",
                "Both base and derived",
                "Neither"
            ],
            correctAnswer: 2,
            explanation: "Base pointer can point to derived object (polymorphism)."
        },
        // OOP - Exception Handling (10 more)
        {
            id: "OOP-EXC-1",
            subject: "oop",
            topic: "exception",
            subtopic: "Try-Catch Blocks",
            question: "Finally block always executes:",
            options: [
                "Yes, except System.exit()",
                "Only if no exception",
                "Only if exception occurs",
                "Never"
            ],
            correctAnswer: 0,
            explanation: "Finally executes always unless program terminates (System.exit())."
        },
        {
            id: "OOP-EXC-2",
            subject: "oop",
            topic: "exception",
            subtopic: "Custom Exceptions",
            question: "Custom exceptions should extend:",
            options: [
                "Exception class",
                "Object class",
                "Main class",
                "Error class"
            ],
            correctAnswer: 0,
            explanation: "Custom exceptions extend Exception (checked) or RuntimeException (unchecked)."
        },
        {
            id: "OOP-EXC-3",
            subject: "oop",
            topic: "exception",
            subtopic: "Finally Block",
            question: "Purpose of finally block:",
            options: [
                "Cleanup code (close resources)",
                "Handle exceptions",
                "Throw exceptions",
                "Declare variables"
            ],
            correctAnswer: 0,
            explanation: "Finally used for cleanup (closing files, database connections)."
        },
        {
            id: "OOP-EXC-4",
            subject: "oop",
            topic: "exception",
            subtopic: "Try-Catch Blocks",
            question: "Multiple catch blocks are evaluated:",
            options: [
                "Top to bottom",
                "Bottom to top",
                "Parallel",
                "Random"
            ],
            correctAnswer: 0,
            explanation: "Catch blocks evaluated sequentially; put specific exceptions first."
        },
        {
            id: "OOP-EXC-5",
            subject: "oop",
            topic: "exception",
            subtopic: "Try-Catch Blocks",
            question: "Try-with-resources automatically:",
            options: [
                "Closes AutoCloseable resources",
                "Handles all exceptions",
                "Creates resources",
                "Compiles faster"
            ],
            correctAnswer: 0,
            explanation: "Try-with-resources automatically closes resources implementing AutoCloseable."
        },

        // OOP - Advanced Concepts (20 more)
        {
            id: "OOP-ADV-6",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "Static members belong to:",
            options: [
                "Class, not object",
                "Each object",
                "Both class and objects",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Static members are class-level, shared by all instances."
        },
        {
            id: "OOP-ADV-7",
            subject: "oop",
            topic: "basics",
            subtopic: "Classes & Objects",
            question: "Constructor overloading means:",
            options: [
                "Multiple constructors with different parameters",
                "Multiple classes with same name",
                "Inheriting constructors",
                "Overriding constructors"
            ],
            correctAnswer: 0,
            explanation: "Constructor overloading: same class has multiple constructors with different signatures."
        },
        {
            id: "OOP-ADV-8",
            subject: "oop",
            topic: "inheritance",
            subtopic: "Types of Inheritance",
            question: "Diamond problem solution in Java:",
            options: [
                "Interfaces with default methods",
                "Multiple inheritance",
                "Virtual inheritance",
                "All of above"
            ],
            correctAnswer: 0,
            explanation: "Java uses interfaces with default methods to handle diamond problem."
        },
        {
            id: "OOP-ADV-9",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Virtual Functions",
            question: "Abstract method has:",
            options: [
                "Declaration only, no body",
                "Complete implementation",
                "Static implementation",
                "Private access"
            ],
            correctAnswer: 0,
            explanation: "Abstract method declared without implementation (no body)."
        },
        {
            id: "OOP-ADV-10",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Virtual Functions",
            question: "Abstract class can have:",
            options: [
                "Both abstract and concrete methods",
                "Only abstract methods",
                "Only concrete methods",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Abstract class can have abstract and concrete methods."
        },

        // Discrete Maths - Relations
        {
            id: "DM-REL-1",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Properties of Relations",
            question: "A relation R is reflexive if:",
            options: [
                "(a,a) ∈ R for all a",
                "(a,b) ∈ R implies (b,a) ∈ R",
                "(a,b),(b,c) ∈ R implies (a,c) ∈ R",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "Reflexive: Every element is related to itself."
        },
        {
            id: "DM-REL-2",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Equivalence Relations",
            question: "Equivalence relation must be:",
            options: [
                "Reflexive, Symmetric, Transitive",
                "Reflexive, Anti-symmetric, Transitive",
                "Irreflexive, Symmetric, Transitive",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "Equivalence: Reflexive, Symmetric, Transitive."
        },
        {
            id: "DM-REL-3",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Partial Orderings",
            question: "Partial order must be:",
            options: [
                "Reflexive, Anti-symmetric, Transitive",
                "Reflexive, Symmetric, Transitive",
                "Irreflexive, Symmetric, Transitive",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "Partial order: Reflexive, Anti-symmetric, Transitive."
        },
        {
            id: "DM-REL-4",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Hasse Diagrams",
            question: "Hasse diagram represents:",
            options: [
                "Partial order",
                "Total order",
                "Equivalence relation",
                "Function"
            ],
            correctAnswer: 0,
            explanation: "Hasse diagram visually represents partial order."
        },
        {
            id: "DM-REL-5",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Properties of Relations",
            question: "Symmetric relation means:",
            options: [
                "(a,b) ∈ R implies (b,a) ∈ R",
                "(a,a) ∈ R for all a",
                "(a,b),(b,c) ∈ R implies (a,c) ∈ R",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "Symmetric: If a is related to b, then b is related to a."
        },

        // Database - ER Model
        {
            id: "DB-ER-1",
            subject: "database",
            topic: "er-model",
            subtopic: "Entities & Attributes",
            question: "Entity represents:",
            options: [
                "Real-world object",
                "Database table",
                "Relationship",
                "Constraint"
            ],
            correctAnswer: 0,
            explanation: "Entity represents real-world object."
        },
        {
            id: "DB-ER-2",
            subject: "database",
            topic: "er-model",
            subtopic: "Relationships",
            question: "One-to-Many relationship example:",
            options: [
                "Department to Employees",
                "Student to StudentID",
                "Product to Price",
                "None of these"
            ],
            correctAnswer: 0,
            explanation: "One department has many employees."
        },
        {
            id: "DB-ER-3",
            subject: "database",
            topic: "er-model",
            subtopic: "ER Diagrams",
            question: "Rectangle represents:",
            options: ["Entity", "Attribute", "Relationship", "Constraint"],
            correctAnswer: 0,
            explanation: "Rectangle = Entity in ER diagram."
        },
        {
            id: "DB-ER-4",
            subject: "database",
            topic: "er-model",
            subtopic: "ER to Relational",
            question: "Weak entity requires:",
            options: [
                "Foreign key",
                "Primary key of owner",
                "Both",
                "Neither"
            ],
            correctAnswer: 2,
            explanation: "Weak entity needs foreign key to owner's primary key."
        },
        {
            id: "DB-ER-5",
            subject: "database",
            topic: "er-model",
            subtopic: "Entities & Attributes",
            question: "Composite attribute example:",
            options: [
                "Name (First, Last)",
                "Age",
                "Salary",
                "ID"
            ],
            correctAnswer: 0,
            explanation: "Name can be composite (First + Last)."
        },

        // DSA - Stacks
        {
            id: "DSA-STK-1",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Stack Operations",
            question: "Stack follows:",
            options: ["LIFO", "FIFO", "LILO", "FILO"],
            correctAnswer: 0,
            explanation: "Stack: Last In First Out (LIFO)."
        },
        {
            id: "DSA-STK-2",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Stack Applications",
            question: "Stack is used in:",
            options: [
                "Function calls",
                "CPU scheduling",
                "Disk buffering",
                "All of these"
            ],
            correctAnswer: 0,
            explanation: "Function call management uses stack."
        },
        {
            id: "DSA-STK-3",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Infix/Postfix",
            question: "Postfix expression: A+B*C is:",
            options: ["ABC*+", "AB+C*", "A+BC*", "ABC+*"],
            correctAnswer: 0,
            explanation: "A+B*C = ABC*+ in postfix."
        },
        {
            id: "DSA-STK-4",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Stack Operations",
            question: "push() operation adds to:",
            options: ["Top", "Bottom", "Middle", "Anywhere"],
            correctAnswer: 0,
            explanation: "push() adds element to top of stack."
        },
        {
            id: "DSA-STK-5",
            subject: "dsa",
            topic: "stacks",
            subtopic: "Stack Applications",
            question: "Undo operation uses:",
            options: ["Stack", "Queue", "Array", "Linked List"],
            correctAnswer: 0,
            explanation: "Undo uses stack to track changes."
        },

        // OOP - Design Patterns
        {
            id: "OOP-DP-1",
            subject: "oop",
            topic: "design-patterns",
            subtopic: "Creational Patterns",
            question: "Singleton pattern ensures:",
            options: [
                "Only one instance",
                "Multiple instances",
                "No instances",
                "Dynamic instances"
            ],
            correctAnswer: 0,
            explanation: "Singleton ensures only one instance exists."
        },
        {
            id: "OOP-DP-2",
            subject: "oop",
            topic: "design-patterns",
            subtopic: "Structural Patterns",
            question: "Adapter pattern is used for:",
            options: [
                "Interface compatibility",
                "Object creation",
                "Behavior encapsulation",
                "Algorithm selection"
            ],
            correctAnswer: 0,
            explanation: "Adapter makes incompatible interfaces work together."
        },
        {
            id: "OOP-DP-3",
            subject: "oop",
            topic: "design-patterns",
            subtopic: "Singleton Pattern",
            question: "Singleton constructor is:",
            options: ["Private", "Public", "Protected", "Default"],
            correctAnswer: 0,
            explanation: "Singleton constructor is private to prevent instantiation."
        },
        {
            id: "OOP-DP-4",
            subject: "oop",
            topic: "design-patterns",
            subtopic: "Creational Patterns",
            question: "Factory pattern provides:",
            options: [
                "Object creation interface",
                "Algorithm interface",
                "Data structure",
                "Memory management"
            ],
            correctAnswer: 0,
            explanation: "Factory provides interface for creating objects."
        },
        {
            id: "OOP-DP-5",
            subject: "oop",
            topic: "design-patterns",
            subtopic: "Structural Patterns",
            question: "Decorator pattern adds:",
            options: [
                "Responsibilities dynamically",
                "New classes",
                "Inheritance",
                "Multiple inheritance"
            ],
            correctAnswer: 0,
            explanation: "Decorator adds responsibilities to objects dynamically."
        },


        {
            id: "OOP-POL-VIRT-10",
            subject: "oop",
            topic: "polymorphism",
            subtopic: "Virtual Functions",
            question: "Default virtual behavior in C++ vs Java:",
            options: [
                "C++: non-virtual by default, Java: virtual by default",
                "Both virtual by default",
                "Both non-virtual",
                "Opposite"
            ],
            correctAnswer: 0,
            explanation: "C++: non-virtual default, Java: virtual default."
        },

        // ========== COMPUTER NETWORKS - NETWORK BASICS ==========
        {
            id: "CN-BAS-TYPE-1",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Types",
            question: "LAN stands for:",
            options: [
                "Local Area Network",
                "Large Area Network",
                "Local Access Network",
                "Large Access Network"
            ],
            correctAnswer: 0,
            explanation: "LAN = Local Area Network."
        },
        {
            id: "CN-BAS-TYPE-2",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Types",
            question: "WAN stands for:",
            options: [
                "Wide Area Network",
                "Wireless Area Network",
                "Wired Area Network",
                "World Area Network"
            ],
            correctAnswer: 0,
            explanation: "WAN = Wide Area Network."
        },
        {
            id: "CN-BAS-TYPE-1",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Types",
            question: "LAN stands for:",
            options: [
                "Local Area Network",
                "Large Area Network",
                "Local Access Network",
                "Large Access Network"
            ],
            correctAnswer: 0,
            explanation: "LAN = Local Area Network."
        },
        {
            id: "CN-BAS-TYPE-2",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Types",
            question: "WAN stands for:",
            options: [
                "Wide Area Network",
                "Wireless Area Network",
                "Wired Area Network",
                "World Area Network"
            ],
            correctAnswer: 0,
            explanation: "WAN = Wide Area Network."
        },
        {
            id: "CN-BAS-TYPE-3",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Types",
            question: "Which network covers a city?",
            options: [
                "MAN",
                "LAN",
                "WAN",
                "PAN"
            ],
            correctAnswer: 0,
            explanation: "MAN = Metropolitan Area Network."
        },
        // ... aapke baki ke questions

        {
            id: "CN-BAS-TOP-1",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Topologies",
            question: "Star topology has:",
            options: [
                "All nodes connected to central hub",
                "Nodes connected in circle",
                "Each node connected to all others",
                "Linear connection"
            ],
            correctAnswer: 0,
            explanation: "Star: all nodes connect to central hub."
        },
        {
            id: "CN-BAS-TOP-2",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Topologies",
            question: "Bus topology uses:",
            options: [
                "Single backbone cable",
                "Ring structure",
                "Star structure",
                "Mesh structure"
            ],
            correctAnswer: 0,
            explanation: "Bus: single cable (backbone) with all nodes attached."
        },
        {
            id: "CN-BAS-TOP-4",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Topologies",
            question: "Which topology uses central hub?",
            options: [
                "Star",
                "Bus",
                "Ring",
                "Mesh"
            ],
            correctAnswer: 0,
            explanation: "Star topology uses central hub/switch."
        },
        {
            id: "CN-BAS-TOP-5",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Topologies",
            question: "Which topology connects all devices to single cable?",
            options: [
                "Bus",
                "Star",
                "Ring",
                "Mesh"
            ],
            correctAnswer: 0,
            explanation: "Bus topology uses single backbone cable."
        },
        {
            id: "CN-BAS-TOP-6",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Topologies",
            question: "Which topology forms a circle?",
            options: [
                "Ring",
                "Star",
                "Bus",
                "Tree"
            ],
            correctAnswer: 0,
            explanation: "Ring topology connects devices in circular fashion."
        },
        {
            id: "CN-BAS-DEV-7",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Devices",
            question: "Which device works at Layer 1?",
            options: [
                "Hub",
                "Switch",
                "Router",
                "Bridge"
            ],
            correctAnswer: 0,
            explanation: "Hub works at Physical Layer (Layer 1)."
        },
        {
            id: "CN-BAS-DEV-8",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Devices",
            question: "Which device connects different networks?",
            options: [
                "Router",
                "Switch",
                "Hub",
                "Repeater"
            ],
            correctAnswer: 0,
            explanation: "Router connects different networks."
        },
        {
            id: "CN-BAS-DEV-9",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "Network Devices",
            question: "Which device works at Layer 2?",
            options: [
                "Switch",
                "Router",
                "Hub",
                "Gateway"
            ],
            correctAnswer: 0,
            explanation: "Switch works at Data Link Layer (Layer 2)."
        },
        {
            id: "CN-BAS-OSI-10",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "OSI Model",
            question: "How many layers in OSI model?",
            options: [
                "7",
                "5",
                "4",
                "8"
            ],
            correctAnswer: 0,
            explanation: "OSI model has 7 layers."
        },
        {
            id: "CN-BAS-OSI-11",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "OSI Model",
            question: "Which layer handles physical transmission?",
            options: [
                "Physical Layer",
                "Data Link Layer",
                "Network Layer",
                "Transport Layer"
            ],
            correctAnswer: 0,
            explanation: "Physical Layer (Layer 1) handles physical transmission."
        },
        {
            id: "CN-BAS-OSI-12",
            subject: "computer-networks",
            topic: "network-basics",
            subtopic: "OSI Model",
            question: "Which layer provides end-to-end connection?",
            options: [
                "Transport Layer",
                "Network Layer",
                "Session Layer",
                "Application Layer"
            ],
            correctAnswer: 0,
            explanation: "Transport Layer (Layer 4) provides end-to-end connection."
        },

        // ... aapke sare questions yahan add karein

        // ========== COMPUTER NETWORKS - TCP/IP ==========
        {
            id: "CN-TCP-UDP-1",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "TCP vs UDP",
            question: "TCP is:",
            options: [
                "Connection-oriented",
                "Connectionless",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "TCP = Transmission Control Protocol, connection-oriented."
        },
        {
            id: "CN-TCP-UDP-13",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "TCP vs UDP",
            question: "Which protocol is connection-oriented?",
            options: [
                "TCP",
                "UDP",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "TCP is connection-oriented."
        },
        {
            id: "CN-TCP-UDP-14",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "TCP vs UDP",
            question: "Which protocol is faster?",
            options: [
                "UDP",
                "TCP",
                "Both same",
                "IP"
            ],
            correctAnswer: 0,
            explanation: "UDP is faster as it has no connection establishment."
        },
        {
            id: "CN-TCP-UDP-15",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "TCP vs UDP",
            question: "Which protocol provides reliability?",
            options: [
                "TCP",
                "UDP",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "TCP provides reliability through acknowledgments."
        },
        {
            id: "CN-TCP-IP-16",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "IP Addressing",
            question: "IPv4 address size?",
            options: [
                "32 bits",
                "64 bits",
                "128 bits",
                "256 bits"
            ],
            correctAnswer: 0,
            explanation: "IPv4 address is 32 bits."
        },
        {
            id: "CN-TCP-IP-17",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "IP Addressing",
            question: "IPv6 address size?",
            options: [
                "128 bits",
                "32 bits",
                "64 bits",
                "256 bits"
            ],
            correctAnswer: 0,
            explanation: "IPv6 address is 128 bits."
        },
        {
            id: "CN-TCP-IP-18",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "IP Addressing",
            question: "Loopback address for IPv4?",
            options: [
                "127.0.0.1",
                "192.168.1.1",
                "10.0.0.1",
                "255.255.255.255"
            ],
            correctAnswer: 0,
            explanation: "127.0.0.1 is loopback address."
        },
        {
            id: "CN-TCP-SUB-19",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Subnetting",
            question: "/24 subnet mask?",
            options: [
                "255.255.255.0",
                "255.255.0.0",
                "255.0.0.0",
                "255.255.255.255"
            ],
            correctAnswer: 0,
            explanation: "/24 = 255.255.255.0"
        },
        {
            id: "CN-TCP-SUB-20",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Subnetting",
            question: "/16 subnet mask?",
            options: [
                "255.255.0.0",
                "255.255.255.0",
                "255.0.0.0",
                "255.255.255.255"
            ],
            correctAnswer: 0,
            explanation: "/16 = 255.255.0.0"
        },
        {
            id: "CN-TCP-SUB-21",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Subnetting",
            question: "How many bits for network in Class A?",
            options: [
                "8",
                "16",
                "24",
                "32"
            ],
            correctAnswer: 0,
            explanation: "Class A has 8 network bits."
        },
        {
            id: "CN-TCP-PORT-22",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Ports & Sockets",
            question: "HTTP uses port?",
            options: [
                "80",
                "443",
                "21",
                "25"
            ],
            correctAnswer: 0,
            explanation: "HTTP uses port 80."
        },
        {
            id: "CN-TCP-PORT-23",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Ports & Sockets",
            question: "HTTPS uses port?",
            options: [
                "443",
                "80",
                "8080",
                "8443"
            ],
            correctAnswer: 0,
            explanation: "HTTPS uses port 443."
        },
        {
            id: "CN-TCP-PORT-24",
            subject: "computer-networks",
            topic: "tcp-ip-protocol",
            subtopic: "Ports & Sockets",
            question: "FTP uses port?",
            options: [
                "21",
                "22",
                "23",
                "25"
            ],
            correctAnswer: 0,
            explanation: "FTP uses port 21."
        },
        // ========== CN - ROUTING AND SWITCHING ==========
        {
            id: "CN-ROU-PRO-25",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Protocols",
            question: "RIP is what type of protocol?",
            options: [
                "Distance Vector",
                "Link State",
                "Path Vector",
                "Hybrid"
            ],
            correctAnswer: 0,
            explanation: "RIP is Distance Vector protocol."
        },
        {
            id: "CN-ROU-PRO-26",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Protocols",
            question: "OSPF is what type of protocol?",
            options: [
                "Link State",
                "Distance Vector",
                "Path Vector",
                "Hybrid"
            ],
            correctAnswer: 0,
            explanation: "OSPF is Link State protocol."
        },
        {
            id: "CN-ROU-PRO-27",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Protocols",
            question: "BGP is what type of protocol?",
            options: [
                "Path Vector",
                "Distance Vector",
                "Link State",
                "Hybrid"
            ],
            correctAnswer: 0,
            explanation: "BGP is Path Vector protocol."
        },
        {
            id: "CN-ROU-SWI-28",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Switching Techniques",
            question: "Store-and-forward switching checks?",
            options: [
                "Entire frame",
                "First 64 bytes",
                "Only header",
                "No checking"
            ],
            correctAnswer: 0,
            explanation: "Store-and-forward checks entire frame."
        },
        {
            id: "CN-ROU-SWI-29",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Switching Techniques",
            question: "Cut-through switching checks?",
            options: [
                "Only header",
                "Entire frame",
                "First 64 bytes",
                "No checking"
            ],
            correctAnswer: 0,
            explanation: "Cut-through checks only header."
        },
        {
            id: "CN-ROU-SWI-30",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Switching Techniques",
            question: "Which switching is faster?",
            options: [
                "Cut-through",
                "Store-and-forward",
                "Both same",
                "Fragment-free"
            ],
            correctAnswer: 0,
            explanation: "Cut-through is faster as it doesn't wait for entire frame."
        },
        {
            id: "CN-ROU-ALG-31",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Algorithms",
            question: "RIP uses which algorithm?",
            options: [
                "Bellman-Ford",
                "Dijkstra",
                "SPF",
                "Distance Vector"
            ],
            correctAnswer: 0,
            explanation: "RIP uses Bellman-Ford algorithm."
        },
        {
            id: "CN-ROU-ALG-32",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Algorithms",
            question: "OSPF uses which algorithm?",
            options: [
                "Dijkstra",
                "Bellman-Ford",
                "Path Vector",
                "Link State"
            ],
            correctAnswer: 0,
            explanation: "OSPF uses Dijkstra's algorithm."
        },
        {
            id: "CN-ROU-ALG-33",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Routing Algorithms",
            question: "What is count-to-infinity problem in?",
            options: [
                "Distance Vector",
                "Link State",
                "Path Vector",
                "All protocols"
            ],
            correctAnswer: 0,
            explanation: "Count-to-infinity problem occurs in Distance Vector protocols."
        },
        {
            id: "CN-ROU-NET-34",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Network Layer",
            question: "Network Layer is OSI Layer?",
            options: [
                "3",
                "2",
                "4",
                "5"
            ],
            correctAnswer: 0,
            explanation: "Network Layer is Layer 3."
        },
        {
            id: "CN-ROU-NET-35",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Network Layer",
            question: "Main function of Network Layer?",
            options: [
                "Routing",
                "Error Detection",
                "Session Management",
                "Data Encoding"
            ],
            correctAnswer: 0,
            explanation: "Network Layer handles routing."
        },
        {
            id: "CN-ROU-NET-36",
            subject: "computer-networks",
            topic: "routing-switching",
            subtopic: "Network Layer",
            question: "Which protocol at Network Layer?",
            options: [
                "IP",
                "TCP",
                "UDP",
                "HTTP"
            ],
            correctAnswer: 0,
            explanation: "IP works at Network Layer."
        },

        // ========== CN - Data Link Layer ==========
        {
            id: "CN-DLL-ERR-37",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Error Detection",
            question: "CRC stands for?",
            options: [
                "Cyclic Redundancy Check",
                "Cyclic Redundancy Code",
                "Computer Redundancy Check",
                "Code Redundancy Check"
            ],
            correctAnswer: 0,
            explanation: "CRC = Cyclic Redundancy Check."
        },
        {
            id: "CN-DLL-ERR-38",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Error Detection",
            question: "Checksum is used for?",
            options: [
                "Error Detection",
                "Error Correction",
                "Encryption",
                "Compression"
            ],
            correctAnswer: 0,
            explanation: "Checksum detects errors."
        },
        {
            id: "CN-DLL-ERR-39",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Error Detection",
            question: "Parity check can detect?",
            options: [
                "Odd number of bit errors",
                "Even number of bit errors",
                "All errors",
                "No errors"
            ],
            correctAnswer: 0,
            explanation: "Parity detects odd number of bit errors."
        },
        {
            id: "CN-DLL-FLO-40",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Flow Control",
            question: "Flow control prevents?",
            options: [
                "Receiver overload",
                "Sender overload",
                "Network congestion",
                "All of above"
            ],
            correctAnswer: 0,
            explanation: "Flow control prevents receiver overload."
        },
        {
            id: "CN-DLL-FLO-41",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Flow Control",
            question: "Sliding window protocol is for?",
            options: [
                "Flow control",
                "Error control",
                "Routing",
                "Addressing"
            ],
            correctAnswer: 0,
            explanation: "Sliding window is flow control method."
        },
        {
            id: "CN-DLL-FLO-42",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Flow Control",
            question: "Stop-and-wait is what type?",
            options: [
                "Flow control",
                "Error control",
                "Routing protocol",
                "Switching method"
            ],
            correctAnswer: 0,
            explanation: "Stop-and-wait is flow control method."
        },
        {
            id: "CN-DLL-MAC-43",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "MAC Protocols",
            question: "CSMA/CD stands for?",
            options: [
                "Carrier Sense Multiple Access/Collision Detection",
                "Carrier Sense Multiple Access/Collision Avoidance",
                "Carrier Signal Multiple Access/Collision Detection",
                "Carrier Sense Medium Access/Collision Detection"
            ],
            correctAnswer: 0,
            explanation: "CSMA/CD = Carrier Sense Multiple Access/Collision Detection."
        },
        {
            id: "CN-DLL-MAC-44",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "MAC Protocols",
            question: "CSMA/CA stands for?",
            options: [
                "Carrier Sense Multiple Access/Collision Avoidance",
                "Carrier Sense Multiple Access/Collision Detection",
                "Carrier Signal Multiple Access/Collision Avoidance",
                "Carrier Sense Medium Access/Collision Avoidance"
            ],
            correctAnswer: 0,
            explanation: "CSMA/CA = Carrier Sense Multiple Access/Collision Avoidance."
        },
        {
            id: "CN-DLL-MAC-45",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "MAC Protocols",
            question: "MAC address size?",
            options: [
                "48 bits",
                "32 bits",
                "64 bits",
                "128 bits"
            ],
            correctAnswer: 0,
            explanation: "MAC address is 48 bits."
        },
        {
            id: "CN-DLL-ETH-46",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Ethernet",
            question: "Standard Ethernet speed?",
            options: [
                "10 Mbps",
                "100 Mbps",
                "1 Gbps",
                "10 Gbps"
            ],
            correctAnswer: 0,
            explanation: "Standard Ethernet is 10 Mbps."
        },
        {
            id: "CN-DLL-ETH-47",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Ethernet",
            question: "Fast Ethernet speed?",
            options: [
                "100 Mbps",
                "10 Mbps",
                "1 Gbps",
                "10 Gbps"
            ],
            correctAnswer: 0,
            explanation: "Fast Ethernet is 100 Mbps."
        },
        {
            id: "CN-DLL-ETH-48",
            subject: "computer-networks",
            topic: "data-link-layer",
            subtopic: "Ethernet",
            question: "Gigabit Ethernet speed?",
            options: [
                "1 Gbps",
                "100 Mbps",
                "10 Mbps",
                "10 Gbps"
            ],
            correctAnswer: 0,
            explanation: "Gigabit Ethernet is 1 Gbps."
        },

        // ========== CN - APPLICATION LAYER ==========

        {
            id: "CN-APP-HTTP-49",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "HTTP/HTTPS",
            question: "HTTP stands for?",
            options: [
                "HyperText Transfer Protocol",
                "HyperText Transmission Protocol",
                "Hyper Transfer Text Protocol",
                "High Text Transfer Protocol"
            ],
            correctAnswer: 0,
            explanation: "HTTP = HyperText Transfer Protocol."
        },
        {
            id: "CN-APP-HTTP-50",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "HTTP/HTTPS",
            question: "HTTPS stands for?",
            options: [
                "HyperText Transfer Protocol Secure",
                "HyperText Transmission Protocol Secure",
                "Hyper Transfer Text Protocol Secure",
                "High Text Transfer Protocol Secure"
            ],
            correctAnswer: 0,
            explanation: "HTTPS = HyperText Transfer Protocol Secure."
        },
        {
            id: "CN-APP-HTTP-51",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "HTTP/HTTPS",
            question: "Which HTTP method gets data?",
            "options": [
                "GET",
                "POST",
                "PUT",
                "DELETE"
            ],
            correctAnswer: 0,
            explanation: "GET method retrieves data."
        },
        {
            id: "CN-APP-DNS-52",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "DNS",
            question: "DNS stands for?",
            options: [
                "Domain Name System",
                "Domain Name Server",
                "Domain Name Service",
                "Domain Name Security"
            ],
            correctAnswer: 0,
            explanation: "DNS = Domain Name System."
        },
        {
            id: "CN-APP-DNS-53",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "DNS",
            question: "DNS resolves what?",
            options: [
                "Domain to IP",
                "IP to MAC",
                "MAC to IP",
                "Domain to MAC"
            ],
            correctAnswer: 0,
            explanation: "DNS resolves domain names to IP addresses."
        },
        {
            id: "CN-APP-DNS-54",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "DNS",
            question: "Which DNS record for IP address?",
            options: [
                "A Record",
                "MX Record",
                "CNAME Record",
                "TXT Record"
            ],
            correctAnswer: 0,
            explanation: "A Record maps domain to IP address."
        },
        {
            id: "CN-APP-EMAIL-55",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "Email Protocols",
            question: "SMTP stands for?",
            options: [
                "Simple Mail Transfer Protocol",
                "Simple Mail Transmission Protocol",
                "Secure Mail Transfer Protocol",
                "Simple Message Transfer Protocol"
            ],
            correctAnswer: 0,
            explanation: "SMTP = Simple Mail Transfer Protocol."
        },
        {
            id: "CN-APP-EMAIL-56",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "Email Protocols",
            question: "POP3 stands for?",
            options: [
                "Post Office Protocol version 3",
                "Post Office Process version 3",
                "Post Office Program version 3",
                "Post Office Protocol version 3"
            ],
            correctAnswer: 0,
            explanation: "POP3 = Post Office Protocol version 3."
        },
        {
            id: "CN-APP-EMAIL-57",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "Email Protocols",
            question: "IMAP stands for?",
            options: [
                "Internet Message Access Protocol",
                "Internet Mail Access Protocol",
                "Internet Message Access Process",
                "Internet Mail Access Process"
            ],
            correctAnswer: 0,
            explanation: "IMAP = Internet Message Access Protocol."
        },
        {
            id: "CN-APP-FTP-58",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "FTP & SSH",
            question: "FTP stands for?",
            options: [
                "File Transfer Protocol",
                "File Transmission Protocol",
                "File Transfer Process",
                "File Transmission Process"
            ],
            correctAnswer: 0,
            explanation: "FTP = File Transfer Protocol."
        },
        {
            id: "CN-APP-FTP-59",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "FTP & SSH",
            question: "SSH stands for?",
            options: [
                "Secure Shell",
                "Secure Socket Host",
                "Secure System Host",
                "Shell Secure Host"
            ],
            correctAnswer: 0,
            explanation: "SSH = Secure Shell."
        },
        {
            id: "CN-APP-FTP-60",
            subject: "computer-networks",
            topic: "application-layer",
            subtopic: "FTP & SSH",
            question: "FTP uses how many ports?",
            options: [
                "2",
                "1",
                "3",
                "4"
            ],
            correctAnswer: 0,
            explanation: "FTP uses 2 ports: 21 for control, 20 for data."
        },

        // ========== DSA - LINKED LISTS ==========
        {
            id: "DSA-LL-SING-1",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Singly Linked Lists",
            question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
            options: [
                "O(1)",
                "O(n)",
                "O(log n)",
                "O(n²)"
            ],
            correctAnswer: 0,
            explanation: "Insertion at the beginning takes O(1) as we only need to update the head pointer."
        },
        {
            id: "DSA-LL-SING-2",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Singly Linked Lists",
            question: "How do you detect a cycle in a singly linked list?",
            options: [
                "Using Floyd's Cycle Detection Algorithm",
                "Using Binary Search",
                "Using Stack",
                "Using Hash Table only"
            ],
            correctAnswer: 0,
            explanation: "Floyd's Cycle Detection (Tortoise and Hare) is the standard algorithm."
        },
        {
            id: "DSA-LL-SING-3",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Singly Linked Lists",
            question: "What is the space complexity of reversing a singly linked list iteratively?",
            options: [
                "O(1)",
                "O(n)",
                "O(log n)",
                "O(n²)"
            ],
            correctAnswer: 0,
            explanation: "Iterative reversal uses constant extra space."
        },
        {
            id: "DSA-LL-DOUB-4",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Doubly Linked Lists",
            question: "What is the advantage of doubly linked list over singly linked list?",
            options: [
                "Can traverse in both directions",
                "Takes less memory",
                "Faster insertion at beginning",
                "No advantage"
            ],
            correctAnswer: 0,
            explanation: "Doubly linked list allows traversal in both forward and backward directions."
        },
        {
            id: "DSA-LL-DOUB-5",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Doubly Linked Lists",
            question: "What extra memory is needed per node in doubly linked list compared to singly linked list?",
            options: [
                "One extra pointer",
                "Two extra pointers",
                "No extra memory",
                "Extra data field"
            ],
            correctAnswer: 0,
            explanation: "Doubly linked list stores one extra pointer (previous node pointer)."
        },
        {
            id: "DSA-LL-CIRC-8",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Circular Lists",
            question: "Application of circular list:",
            options: [
                "Round-robin scheduling",
                "Undo functionality",
                "Expression evaluation",
                "Sorting"
            ],
            correctAnswer: 0,
            explanation: "Round-robin scheduling uses circular list."
        },
        {
            id: "DSA-LL-CIRC-6",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Circular Lists",
            question: "In a circular linked list, what does the last node point to?",
            options: [
                "First node",
                "NULL",
                "Previous node",
                "Itself"
            ],
            correctAnswer: 0,
            explanation: "In circular linked list, last node points to first node."
        },
        {
            id: "DSA-LL-CIRC-7",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Circular Lists",
            question: "Which problem is efficiently solved using circular linked list?",
            options: [
                "Josephus Problem",
                "Binary Search",
                "Tree Traversal",
                "Matrix Multiplication"
            ],
            correctAnswer: 0,
            explanation: "Josephus Problem is efficiently solved using circular linked list."
        },
        {
            id: "DSA-LL-OP-9",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Operations",
            question: "What is the time complexity of searching an element in unsorted linked list?",
            options: [
                "O(n)",
                "O(1)",
                "O(log n)",
                "O(n log n)"
            ],
            correctAnswer: 0,
            explanation: "In worst case, we need to traverse all n nodes."
        },
        {
            id: "DSA-LL-OP-10",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Operations",
            question: "Which algorithm is used to find the middle of linked list?",
            options: [
                "Slow and Fast pointer",
                "Binary Search",
                "Depth First Search",
                "Boyer-Moore"
            ],
            correctAnswer: 0,
            explanation: "Slow moves one step, fast moves two steps; when fast reaches end, slow is at middle."
        },
        {
            id: "DSA-LL-MEM-11",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Memory",
            question: "Linked lists allocate memory:",
            options: [
                "Dynamically",
                "Statically",
                "At compile time",
                "In contiguous blocks"
            ],
            correctAnswer: 0,
            explanation: "Nodes are allocated dynamically during runtime."
        },
        {
            id: "DSA-LL-MEM-12",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Memory",
            question: "What is cache locality characteristic of linked lists?",
            options: [
                "Poor cache locality",
                "Excellent cache locality",
                "Same as arrays",
                "Depends on implementation"
            ],
            correctAnswer: 0,
            explanation: "Nodes are scattered in memory, leading to poor cache performance."
        },
        {
            id: "DSA-LL-ADV-13",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Advanced",
            question: "How to find intersection point of two linked lists?",
            options: [
                "Using two pointers with length difference",
                "Using binary search",
                "Sorting both lists",
                "Using recursion only"
            ],
            correctAnswer: 0,
            explanation: "Calculate length difference, move longer list pointer ahead, then traverse together."
        },
        {
            id: "DSA-LL-ADV-14",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Advanced",
            question: "What is the output of reversing a linked list in groups of k?",
            options: [
                "Each group of k nodes reversed",
                "Entire list reversed",
                "Only first k nodes reversed",
                "Random nodes reversed"
            ],
            correctAnswer: 0,
            explanation: "Reverse first k nodes, then recursively reverse remaining list in groups of k."
        },
        {
            id: "DSA-LL-COMP-15",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Comparisons",
            question: "Linked list vs Array: Which allows O(1) random access?",
            options: [
                "Array",
                "Linked List",
                "Both",
                "Neither"
            ],
            correctAnswer: 0,
            explanation: "Arrays provide O(1) random access using indices."
        },
        {
            id: "DSA-LL-COMP-16",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Comparisons",
            question: "Which is better for frequent insertions/deletions?",
            options: [
                "Linked List",
                "Array",
                "Both equal",
                "Depends on size"
            ],
            correctAnswer: 0,
            explanation: "Linked lists have O(1) insertion/deletion if position is known."
        },
        {
            id: "DSA-LL-EDGE-19",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Edge Cases",
            question: "What happens if you try to delete from empty linked list?",
            options: [
                "Underflow error",
                "No effect",
                "Runtime error",
                "Memory leak"
            ],
            correctAnswer: 0,
            explanation: "Deleting from empty list causes underflow."
        },
        {
            id: "DSA-LL-EDGE-20",
            subject: "dsa",
            topic: "linked-lists",
            subtopic: "Edge Cases",
            question: "How to handle duplicate nodes in linked list?",
            options: [
                "Traverse and compare each node",
                "Sort the list first",
                "Use hash table",
                "All of the above"
            ],
            correctAnswer: 3,
            explanation: "Multiple approaches exist: brute force O(n²), sorting O(n log n), or hashing O(n)."
        },
        // ... aapke DSA, OOP ke baki questions

        // LAST QUESTION ke baad COMMA NAHI LAGANA:
        {
            id: "DM-REL-HASSE-10",
            subject: "discrete-maths",
            topic: "relations",
            subtopic: "Hasse Diagrams",
            question: "Hasse diagram is drawn:",
            options: [
                "Without arrowheads",
                "With all relations",
                "With reflexive loops",
                "As directed graph"
            ],
            correctAnswer: 0,
            explanation: "Hasse diagram is drawn without arrowheads (upward direction implied)."
        } // <- LAST QUESTION KE BAAD COMMA NAHI

    ]
};

// FIXED FUNCTIONS - WORKING PERFECTLY
function getAllQuestions() {
    return quizData.questions;
}

// SIMPLE AND WORKING VERSION
function getQuestionsBySubtopics(subject, subtopicIds) {
    const allQuestions = getAllQuestions();

    // 1. First filter by subject
    let filtered = allQuestions.filter(q => q.subject === subject);

    console.log(`🔍 Filtering: Subject=${subject}, Questions=${filtered.length}`);

    // 2. If no subtopics selected, return all subject questions
    if (!subtopicIds || subtopicIds.size === 0) {
        console.log(`✅ No subtopics selected, returning ${filtered.length} questions`);
        return filtered;
    }

    // 3. Filter by subtopics - SIMPLE VERSION THAT WORKS
    const selectedSubtopicsArray = Array.from(subtopicIds);
    console.log(`📋 Selected subtopics:`, selectedSubtopicsArray);

    const result = filtered.filter(q => {
        // Create question's subtopic identifier
        const questionSubtopic = q.subtopic.toLowerCase().replace(/\s+/g, '-');
        const questionTopic = q.topic.toLowerCase();

        // Check if ANY selected subtopic matches this question
        for (const subtopicId of selectedSubtopicsArray) {
            // subtopicId format: "logic-propositional-logic"
            if (subtopicId.includes(questionTopic) && subtopicId.includes(questionSubtopic)) {
                return true;
            }

            // Also check just by topic if subtopic not matching
            if (subtopicId.startsWith(questionTopic)) {
                return true;
            }
        }

        return false;
    });

    console.log(`✅ Final filtered questions: ${result.length}`);

    // 4. If still no questions, return all subject questions as fallback
    if (result.length === 0) {
        console.log(`⚠️ No questions found for subtopics, returning all subject questions`);
        return filtered;
    }

    return result;
}

// Export data
window.quizData = {
    subjects: quizData.subjects,
    getAllQuestions: getAllQuestions,
    getQuestionsBySubtopics: getQuestionsBySubtopics
};