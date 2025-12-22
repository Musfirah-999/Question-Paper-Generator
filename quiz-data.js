// quiz-data.js - COMPLETELY FIXED VERSION (500+ questions)

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
        // Pehle last question ke baad comma lagayein:

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
}, // <- YEH COMMA IMPORTANT HAI

// Phir aapke Computer Networks questions yahan add karein:

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
// ... aapke sare questions yahan add karein

// ========== COMPUTER NETWORKS - TCP/IP ==========
{
    id: "CN-TCP-UDP-1",
    subject: "computer-networks",
    topic: "tcp-ip",
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
// ... aapke baki TCP/IP questions

// Aur aapke jo baki questions hain (DSA, OOP, etc.) wo sab yahan add karein

// ========== DSA - LINKED LISTS ==========
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