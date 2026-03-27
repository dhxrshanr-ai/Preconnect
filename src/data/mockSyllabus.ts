export interface Unit {
  title: string;
  topics: string[];
}

export interface SyllabusData {
  [subjectCode: string]: {
    name: string;
    description: string;
    units: Unit[];
  };
}

export const mockSyllabus: SyllabusData = {
  "HS3151": {
    name: "Professional English - I",
    description: "To improve the communicative competence of learners in English.",
    units: [
      { title: "UNIT I: INTRODUCTION TO FUNDAMENTALS OF COMMUNICATION", topics: ["Listening to conversations", "Speaking - introducing oneself", "Reading - skimming", "Writing - free writing", "Grammar - tenses"] },
      { title: "UNIT II: NARRATION AND IMAGINATION", topics: ["Listening - narratives", "Speaking - narrating a story", "Reading - short stories", "Writing - paragraph writing", "Grammar - articles"] },
      { title: "UNIT III: DESCRIPTION AND EXPLANATION", topics: ["Listening - descriptions", "Speaking - describing an object", "Reading - descriptive texts", "Writing - essays", "Grammar - adjectives"] },
      { title: "UNIT IV: EVALUATION AND ANALYSIS", topics: ["Listening - analytical talks", "Speaking - expressing opinions", "Reading - analytical texts", "Writing - reviewing", "Grammar - prepositions"] },
      { title: "UNIT V: PERSUASION AND ARGUMENTATION", topics: ["Listening - debates", "Speaking - arguing a point", "Reading - persuasive texts", "Writing - argumentative essays", "Grammar - conjunctions"] }
    ]
  },
  "MA3151": {
    name: "Matrices and Calculus",
    description: "To develop the use of matrix algebra techniques and calculus.",
    units: [
      { title: "UNIT I: MATRICES", topics: ["Eigenvalues and Eigenvectors", "Cayley-Hamilton Theorem", "Diagonalization of matrices", "Quadratic forms", "Orthogonal transformation"] },
      { title: "UNIT II: DIFFERENTIAL CALCULUS", topics: ["Limit, Continuity, Differentiability", "Derivatives", "Maxima and Minima", "Taylor's series", "Rolle's Theorem"] },
      { title: "UNIT III: FUNCTIONS OF SEVERAL VARIABLES", topics: ["Partial differentiation", "Homogeneous functions", "Euler's theorem", "Jacobians", "Lagrange multipliers"] },
      { title: "UNIT IV: INTEGRAL CALCULUS", topics: ["Definite and Indefinite integrals", "Integration by parts", "Substitution rule", "Improper integrals", "Beta and Gamma functions"] },
      { title: "UNIT V: MULTIPLE INTEGRALS", topics: ["Double integrals", "Change of order of integration", "Area enclosed by plane curves", "Triple integrals", "Volume of solids"] }
    ]
  },
  "PH3151": {
    name: "Engineering Physics",
    description: "To understand the essential principles of Physics of semiconductor device and Electron transport properties.",
    units: [
      { title: "UNIT I: MECHANICS", topics: ["Multiparticle dynamics", "Center of mass", "Moment of inertia", "Angular momentum", "Rigid body dynamics"] },
      { title: "UNIT II: ELECTROMAGNETIC WAVES", topics: ["Maxwell's equations", "Wave equation", "Plane electromagnetic waves", "Energy density", "Poynting vector"] },
      { title: "UNIT III: OSCILLATIONS AND OPTICS", topics: ["Simple harmonic motion", "Damped and forced oscillations", "Interference", "Diffraction", "Polarization"] },
      { title: "UNIT IV: BASIC QUANTUM MECHANICS", topics: ["Photons and light waves", "Electrons and matter waves", "Schrodinger equation", "Particle in a box", "Tunneling"] },
      { title: "UNIT V: APPLIED QUANTUM MECHANICS", topics: ["Density of states", "Fermi-Dirac statistics", "Band theory of solids", "Semiconductors", "Superconductivity"] }
    ]
  },
  "CY3151": {
    name: "Engineering Chemistry",
    description: "To inculcate sound understanding of water technology, polymer science and phase rule.",
    units: [
      { title: "UNIT I: WATER AND ITS TREATMENT", topics: ["Hardness of water", "Boiler troubles", "Internal treatment", "External treatment", "Desalination"] },
      { title: "UNIT II: NANOCHEMISTRY", topics: ["Basics of nanochemistry", "Synthesis of nanoparticles", "Properties of nanomaterials", "Carbon nanotubes", "Applications"] },
      { title: "UNIT III: PHASE RULE AND COMPOSITES", topics: ["Phase rule basics", "One component system", "Two component system", "Composites", "FRP composites"] },
      { title: "UNIT IV: FUELS AND COMBUSTION", topics: ["Classification of fuels", "Coal", "Petroleum", "Synthetic petrol", "Combustion calculations"] },
      { title: "UNIT V: ENERGY SOURCES AND STORAGE DEVICES", topics: ["Nuclear energy", "Solar energy", "Batteries", "Fuel cells", "Supercapacitors"] }
    ]
  },
  "GE3151": {
    name: "Problem Solving and Python Programming",
    description: "To understand the basics of algorithmic problem solving and python programming.",
    units: [
      { title: "UNIT I: ALGORITHMIC PROBLEM SOLVING", topics: ["Algorithms", "Building blocks of algorithms", "Flowcharts", "Pseudocode", "Algorithmic problem solving"] },
      { title: "UNIT II: DATA, EXPRESSIONS, STATEMENTS", topics: ["Python variables", "Data types", "Keywords", "Operators", "Expressions and statements"] },
      { title: "UNIT III: CONTROL FLOW, FUNCTIONS", topics: ["Conditional statements", "Iteration", "Functions", "Parameters and arguments", "Return values"] },
      { title: "UNIT IV: LISTS, TUPLES, DICTIONARIES", topics: ["Lists", "List operations", "Tuples", "Tuple operations", "Dictionaries"] },
      { title: "UNIT V: FILES, MODULES, PACKAGES", topics: ["Files and exception", "Reading and writing files", "Modules", "Packages", "Command line arguments"] }
    ]
  },
  "GE3251": {
    name: "Engineering Graphics",
    description: "To develop graphic skills for communication of concepts, ideas and design of engineering products.",
    units: [
      { title: "UNIT I: PLANE CURVES AND FREEHAND SKETCHING", topics: ["Conics", "Cycloids", "Involutes", "Freehand sketching", "Orthographic projection"] },
      { title: "UNIT II: PROJECTION OF POINTS, LINES AND PLANE SURFACE", topics: ["Projection of points", "Projection of straight lines", "Projection of planes", "Traces", "True length and true inclinations"] },
      { title: "UNIT III: PROJECTION OF SOLIDS", topics: ["Projection of simple solids", "Prisms", "Pyramids", "Cylinders", "Cones"] },
      { title: "UNIT IV: PROJECTION OF SECTIONED SOLIDS", topics: ["Sectioning of solids", "True shape of section", "Development of surfaces", "Frustum", "Truncated solids"] },
      { title: "UNIT V: ISOMETRIC AND PERSPECTIVE PROJECTIONS", topics: ["Isometric projection", "Isometric scale", "Isometric views", "Perspective projection", "Visual ray method"] }
    ]
  },
  "CS3351": {
    name: "Digital Principles and Computer Organization",
    description: "To learn the fundamentals of boolean algebra, combinational logic, and computer architecture.",
    units: [
      { title: "UNIT I: COMBINATIONAL LOGIC", topics: ["Combinational Circuits", "Karnaugh Map", "Logic Gates", "Adders and Subtractors", "Multiplexers and Decoders"] },
      { title: "UNIT II: SYNCHRONOUS SEQUENTIAL LOGIC", topics: ["Sequential Circuits", "Flip Flops", "Analysis and Design", "State Reduction", "State Assignment"] },
      { title: "UNIT III: COMPUTER FUNDAMENTALS", topics: ["Functional Units", "Hardware Software Interface", "Translation", "Instruction Set Architecture", "Instruction Formats"] },
      { title: "UNIT IV: PROCESSOR", topics: ["Datapath", "Instruction Execution", "Hardwired Control", "Microprogrammed Control", "Pipelining"] },
      { title: "UNIT V: MEMORY AND I/O", topics: ["Memory Technologies", "Hierarchy", "Cache Memory", "Virtual Memory", "I/O Peripherals and DMA"] }
    ]
  },
  "CS3352": {
    name: "Foundations of Data Science",
    description: "To understand the basics of data science and statistical modeling.",
    units: [
      { title: "UNIT I: INTRODUCTION TO DATA SCIENCE", topics: ["Data Science Process", "Types of Data", "Data Collection", "Data Preprocessing", "Exploratory Data Analysis"] },
      { title: "UNIT II: DESCRIPTIVE STATISTICS", topics: ["Central Tendency", "Dispersion", "Skewness", "Kurtosis", "Correlation"] },
      { title: "UNIT III: PROBABILITY DISTRIBUTION", topics: ["Probability Basics", "Random Variables", "Discrete Distributions", "Continuous Distributions", "Joint Distributions"] },
      { title: "UNIT IV: STATISTICAL INFERENCE", topics: ["Sampling", "Estimation", "Hypothesis Testing", "t-test", "Chi-square Test", "ANOVA"] },
      { title: "UNIT V: REGRESSION AND CLASSIFICATION", topics: ["Linear Regression", "Multiple Regression", "Logistic Regression", "Decision Trees", "Model Evaluation"] }
    ]
  },
  "CS3391": {
    name: "Object Oriented Programming",
    description: "To understand Object Oriented Programming concepts and characteristics of Java.",
    units: [
      { title: "UNIT I: OOP AND JAVA FUNDAMENTALS", topics: ["Abstraction, Encapsulation", "Polymorphism", "Java Environment", "Data Types", "Control Statements", "Arrays and Strings"] },
      { title: "UNIT II: INHERITANCE AND INTERFACES", topics: ["Inheritance", "Super Keyword", "Method Overriding", "Dynamic Dispatch", "Abstract Classes", "Interfaces"] },
      { title: "UNIT III: EXCEPTION HANDLING AND I/O", topics: ["Exception Handling Fundamentals", "Try-Catch", "Throw and Throws", "Java File I/O", "Byte and Character Streams"] },
      { title: "UNIT IV: MULTITHREADING AND GENERICS", topics: ["Java Thread Model", "Creating a Thread", "Synchronization", "Generic Classes", "Bounded Types"] },
      { title: "UNIT V: EVENT DRIVEN PROGRAMMING", topics: ["Event Handling", "Delegation Event Model", "Adapter Classes", "AWT Components", "Swing Components"] }
    ]
  },
  "CS3451": {
    name: "Introduction to Operating Systems",
    description: "To understand the basic concepts and functions of operating systems.",
    units: [
      { title: "UNIT I: OPERATING SYSTEM OVERVIEW", topics: ["OS Objectives and Functions", "Evolution of OS", "System Calls", "System Programs", "OS Structure"] },
      { title: "UNIT II: PROCESS MANAGEMENT", topics: ["Processes", "Process Scheduling", "Operations on Processes", "Inter-process Communication", "Threads"] },
      { title: "UNIT III: PROCESS SYNCHRONIZATION AND DEADLOCK", topics: ["Critical Section Problem", "Mutex Locks", "Semaphores", "Deadlock Characterization", "Deadlock Avoidance and Prevention"] },
      { title: "UNIT IV: MEMORY MANAGEMENT", topics: ["Main Memory", "Swapping", "Contiguous Memory Allocation", "Paging", "Segmentation", "Virtual Memory"] },
      { title: "UNIT V: STORAGE MANAGEMENT", topics: ["Mass Storage Structure", "Disk Scheduling", "File System Interface", "Directory Structure", "File System Implementation"] }
    ]
  },
  "CS3401": {
    name: "Algorithms",
    description: "To understand and apply the algorithm design techniques.",
    units: [
      { title: "UNIT I: INTRODUCTION", topics: ["Notion of an Algorithm", "Fundamentals of Algorithmic Problem Solving", "Asymptotic Notations", "Mathematical Analysis", "Empirical Analysis"] },
      { title: "UNIT II: BRUTE FORCE AND DIVIDE-AND-CONQUER", topics: ["Selection Sort and Bubble Sort", "Sequential Search", "Merge Sort", "Quick Sort", "Binary Search"] },
      { title: "UNIT III: DYNAMIC PROGRAMMING AND GREEDY TECHNIQUE", topics: ["Knapsack Problem and Memory Functions", "Optimal Binary Search Trees", "Warshall's and Floyd's Algorithms", "Prim's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm"] },
      { title: "UNIT IV: ITERATIVE IMPROVEMENT", topics: ["The Simplex Method", "The Maximum-Flow Problem", "Maximum Matching in Bipartite Graphs", "The Stable marriage Problem"] },
      { title: "UNIT V: COPING WITH THE LIMITATIONS", topics: ["Lower-Bound Arguments", "P, NP and NP-Complete Problems", "Backtracking", "Branch and Bound", "Approximation Algorithms"] }
    ]
  },
  "CS3491": {
    name: "Artificial Intelligence and Machine Learning",
    description: "To understand the basic concepts of Artificial Intelligence and Machine Learning techniques.",
    units: [
      { title: "UNIT I: PROBLEM SOLVING", topics: ["Intelligent Agents", "Problem Solving by Search", "Uninformed Search", "Informed Search", "Adversarial Search"] },
      { title: "UNIT II: LOGICAL REASONING", topics: ["Logical Agents", "Propositional Logic", "First Order Logic", "Inference in FOL", "Forward and Backward Chaining"] },
      { title: "UNIT III: SUPERVISED LEARNING", topics: ["Learning from Examples", "Decision Trees", "Linear Regression", "Logistic Regression", "Support Vector Machines"] },
      { title: "UNIT IV: UNSUPERVISED LEARNING", topics: ["Clustering", "K-Means", "Hierarchical Clustering", "Dimensionality Reduction", "Principal Component Analysis"] },
      { title: "UNIT V: NEURAL NETWORKS AND DEEP LEARNING", topics: ["Artificial Neural Networks", "Perceptron", "Multi-layer Perceptron", "Backpropagation", "Deep Learning Basics"] }
    ]
  },
  "CS3492": {
    name: "Database Management Systems",
    description: "To learn the fundamentals of database systems, conceptual modeling and SQL.",
    units: [
      { title: "UNIT I: RELATIONAL DATABASES", topics: ["Purpose of Database Systems", "View of Data", "Database Architecture", "Relational Model", "ER Model"] },
      { title: "UNIT II: SQL AND QUERY OPTIMIZATION", topics: ["SQL Fundamentals", "Advanced SQL syntax", "Triggers", "Query Processing", "Query Optimization"] },
      { title: "UNIT III: NORMALIZATION", topics: ["Functional Dependencies", "1NF", "2NF", "3NF", "BCNF", "Multi-valued Dependency and 4NF"] },
      { title: "UNIT IV: TRANSACTION MANAGEMENT", topics: ["Transaction Concepts", "ACID Properties", "Schedules", "Serializability", "Concurrency Control", "Deadlock Handling"] },
      { title: "UNIT V: STORAGE AND ADVANCED DATABASES", topics: ["Physical Storage Media", "RAID", "File Organization", "Indexing", "B+ Trees", "NoSQL Databases"] }
    ]
  },
  "CS3591": {
    name: "Computer Networks",
    description: "To understand the concepts of computer networks and various layers of OSI model.",
    units: [
      { title: "UNIT I: INTRODUCTION AND PHYSICAL LAYER", topics: ["Networks", "Network Types", "Protocol Layering", "TCP/IP Protocol suite", "OSI Model", "Physical Layer Performance"] },
      { title: "UNIT II: DATA-LINK LAYER & MEDIA ACCESS", topics: ["Error Detection and Correction", "Data Link Control", "MAC", "Wired LANs", "Wireless LANs"] },
      { title: "UNIT III: NETWORK LAYER", topics: ["Logical Addressing", "Internet Protocol", "Address Mapping", "Error Reporting", "Multicasting", "Delivery and Forwarding", "Routing Algorithms"] },
      { title: "UNIT IV: TRANSPORT LAYER", topics: ["Process to Process Delivery", "UDP", "TCP", "SCTP", "Congestion Control", "Quality of Service"] },
      { title: "UNIT V: APPLICATION LAYER", topics: ["Domain Name Space", "DDNS", "TELNET", "Electronic Mail", "FTP", "WWW and HTTP"] }
    ]
  },
  "MA3354": {
    name: "Discrete Mathematics",
    description: "To equip students with valid mathematical arguments and concepts of discrete structures.",
    units: [
      { title: "UNIT I: LOGIC AND PROOFS", topics: ["Propositional Logic", "Propositional Equivalences", "Predicates and Quantifiers", "Nested Quantifiers", "Rules of Inference", "Introduction to Proofs"] },
      { title: "UNIT II: COMBINATORICS", topics: ["Mathematical Induction", "Strong Induction", "Pigeonhole Principle", "Permutations and Combinations", "Recurrence Relations", "Generating Functions"] },
      { title: "UNIT III: GRAPHS", topics: ["Graphs and Graph Models", "Graph Terminology", "Connectivity", "Euler and Hamilton Paths", "Shortest Path Problems", "Planar Graphs"] },
      { title: "UNIT IV: ALGEBRAIC STRUCTURES", topics: ["Algebraic Systems", "Semigroups and Monoids", "Groups", "Subgroups", "Homomorphisms", "Normal Subgroups and Rings"] },
      { title: "UNIT V: LATTICES AND BOOLEAN ALGEBRA", topics: ["Partial Ordering", "Posets", "Lattices", "Properties of Lattices", "Boolean Algebra", "Boolean Functions"] }
    ]
  },
  "EC3351": {
    name: "Control Systems",
    description: "To introduce the elements of control system and their modeling in time and frequency domain.",
    units: [
      { title: "UNIT I: SYSTEMS COMPONENTS AND THEIR REPRESENTATION", topics: ["Control System Basics", "Open and Closed Loop Systems", "Transfer Function", "Block Diagram Reduction", "Signal Flow Graphs"] },
      { title: "UNIT II: TIME RESPONSE ANALYSIS", topics: ["Standard Test Signals", "Time Response of First and Second Order Systems", "Time Domain Specifications", "Steady State Errors", "PID Controllers"] },
      { title: "UNIT III: FREQUENCY RESPONSE ANALYSIS", topics: ["Frequency Response", "Bode Plot", "Polar Plot", "Nyquist Plot", "Frequency Domain Specifications"] },
      { title: "UNIT IV: STABILITY ANALYSIS", topics: ["Concept of Stability", "Routh-Hurwitz Criterion", "Root Locus Technique", "Nyquist Stability Criterion", "Relative Stability"] },
      { title: "UNIT V: STATE VARIABLE ANALYSIS", topics: ["State Space Representation", "State Equations", "Solutions of State Equations", "Controllability", "Observability"] }
    ]
  },
  "EE3301": {
    name: "Electromagnetic Fields",
    description: "To impart knowledge on the concepts of electrostatics, magneto statics and electromagnetic waves.",
    units: [
      { title: "UNIT I: ELECTROSTATICS - I", topics: ["Sources and Effects of Electromagnetic Fields", "Coordinate Systems", "Vector Calculus", "Coulomb's Law", "Electric Field Intensity"] },
      { title: "UNIT II: ELECTROSTATICS - II", topics: ["Electric Potential", "Electric Dipole", "Dielectrics", "Polarization", "Boundary Conditions", "Capacitance"] },
      { title: "UNIT III: MAGNETOSTATICS", topics: ["Magnetic Fields", "Biot-Savart Law", "Ampere's Circuital Law", "Magnetic Flux Density", "Magnetic Boundary Conditions"] },
      { title: "UNIT IV: ELECTRODYNAMIC FIELDS", topics: ["Faraday's Law", "Lenz's Law", "Maxwell's Equations", "Displacement Current", "Relation Between Field Theory and Circuit Theory"] },
      { title: "UNIT V: ELECTROMAGNETIC WAVES", topics: ["Electromagnetic Wave Equation", "Wave Parameters", "Velocity", "Intrinsic Impedance", "Skin Depth", "Poynting Vector"] }
    ]
  },
  "EC3352": {
    name: "Digital Systems Design",
    description: "To present the fundamentals of digital circuits and design using HDL.",
    units: [
      { title: "UNIT I: BASIC CONCEPTS", topics: ["Number Systems", "Boolean Algebra", "Logic Gates", "Simplification of Boolean Functions", "Hardware Description Language (HDL)"] },
      { title: "UNIT II: COMBINATIONAL LOGIC", topics: ["Design Procedure", "Adders", "Subtractors", "Multiplexers", "Decoders", "Encoders", "HDL Models of Combinational Circuits"] },
      { title: "UNIT III: SYNCHRONOUS SEQUENTIAL LOGIC", topics: ["Latches", "Flip-Flops", "Analysis of Clocked Sequential Circuits", "State Reduction", "State Assignment", "Design Procedure"] },
      { title: "UNIT IV: ASYNCHRONOUS SEQUENTIAL LOGIC", topics: ["Analysis Procedure", "Circuits with Latches", "Design Procedure", "Reduction of State and Flow Tables", "Race-Free State Assignment", "Hazards"] },
      { title: "UNIT V: MEMORY AND PROGRAMMABLE LOGIC", topics: ["RAM", "Memory Decoding", "Error Detection and Correction", "ROM", "Programmable Logic Array", "Programmable Array Logic"] }
    ]
  },
  "ME3351": {
    name: "Engineering Mechanics",
    description: "To review and extend the principles of statics and dynamics to engineering problems.",
    units: [
      { title: "UNIT I: STATICS OF PARTICLES", topics: ["Forces in a Plane", "Resolution of Forces", "Equilibrium of a Particle", "Forces in Space", "Equilibrium of a Particle in Space"] },
      { title: "UNIT II: EQUILIBRIUM OF RIGID BODIES", topics: ["Equivalent Systems of Forces", "Moment of a Force", "Couples", "Equilibrium in Two Dimensions", "Equilibrium in Three Dimensions"] },
      { title: "UNIT III: PROPERTIES OF SURFACES AND SOLIDS", topics: ["Centroids", "Center of Gravity", "Moments of Inertia of Areas", "Parallel Axis Theorem", "Moments of Inertia of Masses"] },
      { title: "UNIT IV: DYNAMICS OF PARTICLES", topics: ["Kinematics of Particles", "Rectilinear Motion", "Curvilinear Motion", "Kinetics of Particles", "Newton's Second Law", "Energy and Momentum Methods"] },
      { title: "UNIT V: FRICTION AND RIGID BODY DYNAMICS", topics: ["Friction Laws", "Wedges", "Screws", "Belt Friction", "Kinematics of Rigid Bodies", "Kinetics of Rigid Bodies"] }
    ]
  },
  "CE3301": {
    name: "Fluid Mechanics",
    description: "To understand the basic properties of fluids and their behavior under static and dynamic conditions.",
    units: [
      { title: "UNIT I: FLUID PROPERTIES AND FLUID STATICS", topics: ["Definitions of Fluid Properties", "Newton's Law of Viscosity", "Fluid Statics", "Pascal's Law", "Buoyancy", "Floatation"] },
      { title: "UNIT II: FLUID KINEMATICS AND DYNAMICS", topics: ["Classifications of Fluid Flow", "Continuity Equation", "Euler's Equation", "Bernoulli's Equation", "Momentum Equation"] },
      { title: "UNIT III: FLOW THROUGH PIPES", topics: ["Laminar Flow", "Turbulent Flow", "Darcy-Weisbach Equation", "Moody Diagram", "Minor Losses", "Pipes in Series and Parallel"] },
      { title: "UNIT IV: BOUNDARY LAYER", topics: ["Boundary Layer Concept", "Boundary Layer Thickness", "Drag and Lift", "Separation of Boundary Layer"] },
      { title: "UNIT V: DIMENSIONAL ANALYSIS AND MODEL STUDIES", topics: ["Fundamental Dimensions", "Buckingham Pi Theorem", "Dimensionless Numbers", "Model Laws", "Similarities"] }
    ]
  },
  "CB3491": {
    name: "Cryptography and Cyber Security",
    description: "To understand the concepts of cryptography and cybersecurity.",
    units: [
      { title: "UNIT I: INTRODUCTION TO SECURITY", topics: ["Computer Security Concepts", "Security Attacks", "Security Services", "Security Mechanisms", "Classical Encryption Techniques"] },
      { title: "UNIT II: SYMMETRIC CRYPTOGRAPHY", topics: ["Block Ciphers", "Data Encryption Standard", "Advanced Encryption Standard", "Block Cipher Modes of Operation"] },
      { title: "UNIT III: PUBLIC KEY CRYPTOGRAPHY", topics: ["Principles of Public-Key Cryptosystems", "RSA Algorithm", "Diffie-Hellman Key Exchange", "Elliptic Curve Cryptography"] },
      { title: "UNIT IV: MAC AND HASH FUNCTIONS", topics: ["Message Authentication Requirements", "MACs", "Hash Functions", "Digital Signatures", "Authentication Protocols"] },
      { title: "UNIT V: NETWORK AND SYSTEM SECURITY", topics: ["Transport-Level Security", "Wireless Network Security", "Electronic Mail Security", "IP Security", "Intruders", "Firewalls"] }
    ]
  },
  "EE3302": {
    name: "Digital Logic Circuits",
    description: "To impart knowledge on the design of digital logic circuits.",
    units: [
      { title: "UNIT I: NUMBER SYSTEMS AND DIGITAL LOGIC FAMILIES", topics: ["Number Systems", "Boolean Postulates", "Logic Gates", "RTL", "DTL", "TTL", "ECL", "CMOS"] },
      { title: "UNIT II: COMBINATIONAL CIRCUITS", topics: ["Standard Representation", "K-Map Simplification", "Adders", "Subtractors", "Multiplexer", "Demultiplexer", "Encoder", "Decoder"] },
      { title: "UNIT III: SYNCHRONOUS SEQUENTIAL CIRCUITS", topics: ["Latches", "Flip-Flops", "Shift Registers", "Counters", "State Diagram", "State Table", "State Assignment"] },
      { title: "UNIT IV: ASYNCHRONOUS SEQUENTIAL CIRCUITS", topics: ["Fundamental Mode", "Pulse Mode", "Analysis of Asynchronous Circuits", "Races", "Hazards", "Design Problems"] },
      { title: "UNIT V: PROGRAMMABLE LOGIC DEVICES", topics: ["ROM", "PROM", "EPROM", "EEPROM", "Programmable Logic Array (PLA)", "Programmable Array Logic (PAL)", "FPGA"] }
    ]
  },
  "ME3352": {
    name: "Engineering Materials and Metallurgy",
    description: "To impart knowledge on the structure, properties, treatment, testing and applications of metals.",
    units: [
      { title: "UNIT I: ALLOYS AND PHASE DIAGRAMS", topics: ["Constitution of Alloys", "Solid Solutions", "Phase Rule", "Isomorphous", "Eutectic", "Peritectic", "Iron-Carbon Equilibrium Diagram"] },
      { title: "UNIT II: HEAT TREATMENT", topics: ["Defintion", "Full Annealing", "Stress Relief", "Recrystallization", "Normalizing", "Hardening", "Tempering", "TTT Diagrams", "CCT Diagrams"] },
      { title: "UNIT III: FERROUS AND NON-FERROUS METALS", topics: ["Effect of Alloying Additions on Steel", "Stainless Steel", "Tool Steel", "Cast Irons", "Copper Alloys", "Aluminum Alloys", "Magnesium Alloys"] },
      { title: "UNIT IV: NON-METALLIC MATERIALS", topics: ["Polymers", "Types of Polymers", "Engineering Plastics", "Ceramics", "Types of Ceramics", "Composites", "Applications"] },
      { title: "UNIT V: MECHANICAL PROPERTIES AND DEFORMATION", topics: ["Mechanisms of Plastic Deformation", "Slip and Twinning", "Tensile Test", "Compression Test", "Hardness Tests", "Fatigue", "Creep"] }
    ]
  },
  "CE3302": {
    name: "Solid Mechanics",
    description: "To understand the stresses, strains and deformations in solid bodies subjected to various forces.",
    units: [
      { title: "UNIT I: STRESS AND STRAIN", topics: ["Tension", "Compression", "Shear", "Hooke's Law", "Elastic Constants", "Thermal Stresses", "Principal Stresses and Strains", "Mohr's Circle"] },
      { title: "UNIT II: SHEAR AND BENDING IN BEAMS", topics: ["Types of Beams", "Loads and Reactions", "Shear Force and Bending Moment Diagrams", "Theory of Simple Bending", "Bending Stresses", "Shear Stresses"] },
      { title: "UNIT III: DEFLECTION OF BEAMS", topics: ["Elastic Curve", "Double Integration Method", "Macaulay's Method", "Area Moment Method", "Conjugate Beam Method"] },
      { title: "UNIT IV: TORSION", topics: ["Torsion Formulation", "Stresses and Deformation in Circular and Hollow Shafts", "Stepped Shafts", "Shafts Fixed at Both Ends", "Stresses in Helical Springs"] },
      { title: "UNIT V: COMPLEX STRESSES AND PLANE TRUSSES", topics: ["Stresses in Thin Cylindrical Shells", "Stresses in Thick Cylinders", "Analysis of Plane Trusses", "Method of Joints", "Method of Sections"] }
    ]
  },
  "CS3501": {
    name: "Compiler Design",
    description: "To learn the design principles of a Compiler and the various parsing techniques.",
    units: [
      { title: "UNIT I: INTRODUCTION TO COMPILERS", topics: ["Translators", "Compilation Process", "Phases of a Compiler", "Cousins of the Compiler", "Lexical Analysis", "Role of Lexical Analyzer"] },
      { title: "UNIT II: SYNTAX ANALYSIS", topics: ["Role of the Parser", "Context Free Grammars", "Top Down Parsing", "Recursive Descent Parsing", "Predictive Parsing", "Bottom Up Parsing", "Shift Reduce Parsing"] },
      { title: "UNIT III: SYNTAX DIRECTED TRANSLATION", topics: ["Syntax Directed Definitions", "Evaluation Orders", "Intermediate Languages", "Syntax Tree", "Three Address Code", "Types and Declarations"] },
      { title: "UNIT IV: RUN TIME ENVIRONMENT", topics: ["Source Language Issues", "Storage Organization", "Storage Allocation Strategies", "Access to Non-Local Names", "Parameter Passing", "Symbol Tables"] },
      { title: "UNIT V: CODE OPTIMIZATION AND GENERATION", topics: ["Principal Sources of Optimization", "Peephole Optimization", "Basic Blocks and Flow Graphs", "Optimization of Basic Blocks", "Code Generation Issues", "Simple Code Generator"] }
    ]
  },
  "HS3251": {
    name: "Professional English - II",
    description: "To develop the language skills of students for professional networking.",
    units: [
      { title: "UNIT I: COMMUNICATING IN THE WORKPLACE", topics: ["Listening to interviews", "Speaking - introducing oneself in a professional context", "Reading - formal letters", "Writing - cover letters", "Grammar - active and passive voice"] },
      { title: "UNIT II: COMMUNICATING ACROSS CULTURES", topics: ["Listening to cultural talks", "Speaking - cross cultural communication", "Reading - emails", "Writing - formal emails", "Grammar - direct and indirect speech"] },
      { title: "UNIT III: PROBLEM SOLVING", topics: ["Listening to problem discussions", "Speaking - group discussions", "Reading - reports", "Writing - technical reports", "Grammar - conditionals"] },
      { title: "UNIT IV: PRESENTATION SKILLS", topics: ["Listening to presentations", "Speaking - formal presentations", "Reading - manuals", "Writing - manuals and instructions", "Grammar - modal verbs"] },
      { title: "UNIT V: LEADERSHIP SKILLS", topics: ["Listening to leadership talks", "Speaking - negotiation skills", "Reading - proposals", "Writing - project proposals", "Grammar - subject verb agreement"] }
    ]
  },
  "CS3691": {
    name: "Embedded Systems and IoT",
    description: "To understand the architecture of embedded systems and Internet of Things.",
    units: [
      { title: "UNIT I: INTRODUCTION TO EMBEDDED SYSTEMS", topics: ["Embedded System Architecture", "Classification", "Embedded Processor", "Memory", "I/O Devices", "Interrupts"] },
      { title: "UNIT II: EMBEDDED REAL TIME OPERATING SYSTEMS", topics: ["RTOS Basics", "Tasks", "Process and Threads", "Multiprocessing", "Multitasking", "Task Scheduling"] },
      { title: "UNIT III: IOT FUNDAMENTALS", topics: ["Introduction to IoT", "IoT Characteristics", "Physical and Logical Design of IoT", "IoT Enabling Technologies", "IoT Levels"] },
      { title: "UNIT IV: IOT PROTOCOLS AND SYSTEM DESIGN", topics: ["IoT MAC Protocols", "Routing Protocols", "Application Layer Protocols", "Building Blocks of IoT Device", "Raspberry Pi", "Arduino"] },
      { title: "UNIT V: IOT APPLICATIONS AND CLOUD", topics: ["Home Automation", "Smart Cities", "Environment Monitoring", "Smart Agriculture", "Cloud Storage Models", "Communication APIs"] }
    ]
  },
  "MA3251": {
    name: "Statistics and Numerical Methods",
    description: "To equip students with statistical tools and numerical methods for problem solving.",
    units: [
      { title: "UNIT I: TESTING OF HYPOTHESIS", topics: ["Sampling distributions", "Tests for single mean, proportion", "Difference of means", "Chi-square test", "ANOVA"] },
      { title: "UNIT II: DESIGN OF EXPERIMENTS", topics: ["One way layout", "Two way layout", "Randomized block design", "Latin square design", "2^2 factorial design"] },
      { title: "UNIT III: SOLUTION OF EQUATIONS", topics: ["Newton-Raphson method", "Gauss elimination method", "Gauss-Jordan method", "Iterative methods", "Eigenvalues by Power method"] },
      { title: "UNIT IV: INTERPOLATION AND INTEGRATION", topics: ["Lagrange's and Newton's interpolation", "Newton's forward and backward difference", "Trapezoidal rule", "Simpson's rule"] },
      { title: "UNIT V: DIFFERENTIAL EQUATIONS", topics: ["Taylor's series method", "Euler's method", "Runge-Kutta method", "Milne's predictor-corrector method", "Finite difference methods"] }
    ]
  },
  "PH3256": {
    name: "Physics for Information Science",
    description: "To understand the principles of quantum physics, semiconductors, and magnetic materials.",
    units: [
      { title: "UNIT I: ELECTRICAL PROPERTIES OF MATERIALS", topics: ["Classical free electron theory", "Quantum free electron theory", "Density of energy states", "Carrier concentration in metals"] },
      { title: "UNIT II: SEMICONDUCTOR PHYSICS", topics: ["Intrinsic and extrinsic semiconductors", "Carrier concentration derivation", "Hall effect", "Semiconductor devices", "PN junction diode"] },
      { title: "UNIT III: MAGNETIC PROPERTIES OF MATERIALS", topics: ["Magnetic dipole moment", "Dia, Para, Ferro, Anti-ferro magnetism", "Domain theory", "Hysteresis", "Soft and hard magnetic materials"] },
      { title: "UNIT IV: OPTICAL PROPERTIES OF MATERIALS", topics: ["Classification of optical materials", "Absorption emission and scattering", "LED", "OLED", "Laser", "Optical fibers"] },
      { title: "UNIT V: NANO DEVICES", topics: ["Introduction to nanomaterials", "Quantum confinement", "Quantum well, wire, dot", "Carbon nanotubes", "Spintronics"] }
    ]
  },
  "BE3251": {
    name: "Basic Electrical and Electronics Engineering",
    description: "To introduce the fundamentals of electrical, electronics, and communication engineering.",
    units: [
      { title: "UNIT I: ELECTRICAL CIRCUITS", topics: ["DC Circuits", "Ohm's Law", "Kirchhoff's Laws", "Mesh and Nodal Analysis", "AC Circuits", "Phasors", "Power and Power Factor"] },
      { title: "UNIT II: ELECTRICAL MACHINES", topics: ["DC Generator", "DC Motor", "Transformer", "Three Phase Induction Motor", "Single Phase Induction Motor", "Synchronous Motor"] },
      { title: "UNIT III: MEASURING INSTRUMENTS", topics: ["Operating Principles", "Moving Coil and Moving Iron Instruments", "Dynamometer Type Wattmeter", "Energy Meter", "Megger"] },
      { title: "UNIT IV: ELECTRONIC DEVICES", topics: ["PN Junction Diode", "Zener Diode", "BJT", "JFET", "MOSFET", "UJT", "Thyristor"] },
      { title: "UNIT V: COMMUNICATION ENGINEERING", topics: ["Block Diagram of Communication System", "Modulation and Demodulation", "AM, FM, PM", "Digital Communication", "Data Communication"] }
    ]
  },
  "CS3251": {
    name: "Programming in C",
    description: "To understand the basic concepts in C Programming Language.",
    units: [
      { title: "UNIT I: BASICS OF C PROGRAMMING", topics: ["Introduction to programming paradigms", "Structure of C program", "Data Types", "Operators", "Expressions", "Control Statements", "Loops"] },
      { title: "UNIT II: ARRAYS AND STRINGS", topics: ["Introduction to Arrays", "One dimensional array", "Two dimensional arrays", "String Operations", "String manipulation functions"] },
      { title: "UNIT III: FUNCTIONS AND POINTERS", topics: ["Function Prototypes", "Parameter Passing", "Recursion", "Pointers basics", "Pointers and Arrays", "Dynamic Memory Allocation"] },
      { title: "UNIT IV: STRUCTURES AND UNIONS", topics: ["Structure definition", "Array of structures", "Pointers to structures", "Self-referential structures", "Unions", "Bit fields"] },
      { title: "UNIT V: FILE PROCESSING", topics: ["Files basics", "File operations", "Sequential access files", "Random access files", "Command line arguments", "Preprocessor directives"] }
    ]
  },
  "MA3355": {
    name: "Random Processes and Linear Algebra",
    description: "To equip students with concepts of random processes, Markov chains, and linear algebra.",
    units: [
      { title: "UNIT I: PROBABILITY AND RANDOM VARIABLES", topics: ["Axioms of probability", "Conditional probability", "Discrete and continuous random variables", "Moments", "Moment generating functions"] },
      { title: "UNIT II: TWO DIMENSIONAL RANDOM VARIABLES", topics: ["Joint distributions", "Marginal and conditional distributions", "Covariance", "Correlation and linear regression", "Central limit theorem"] },
      { title: "UNIT III: RANDOM PROCESSES", topics: ["Classification", "Stationary process", "Markov process", "Poisson process", "Discrete parameter Markov chain", "Chapman Kolmogorov equations"] },
      { title: "UNIT IV: VECTOR SPACES", topics: ["Vector spaces", "Subspaces", "Linear combinations and linear system of equations", "Linear independence and linear dependence", "Bases and dimensions"] },
      { title: "UNIT V: LINEAR TRANSFORMATION AND INNER PRODUCT SPACES", topics: ["Linear transformation", "Null spaces and ranges", "Dimension theorem", "Matrix representation of a linear transformations", "Inner product", "Norms", "Gram Schmidt orthogonalization"] }
    ]
  },
  "CS3353": {
    name: "C Programming and Data Structures",
    description: "To comprehend the fundamentals of object oriented programming and basic data structures.",
    units: [
      { title: "UNIT I: C PROGRAMMING BASICS", topics: ["Structure of a C program", "Data Types", "Operators", "Control structures", "Functions", "Pointers", "Arrays and Strings"] },
      { title: "UNIT II: LINEAR DATA STRUCTURES - LIST", topics: ["Abstract Data Types", "List ADT", "Array abstraction", "Linked list implementation", "Doubly linked lists", "Circular linked lists", "Applications"] },
      { title: "UNIT III: LINEAR DATA STRUCTURES - STACKS AND QUEUES", topics: ["Stack ADT", "Array and linked list implementation", "Applications of stacks", "Queue ADT", "Circular queues", "Priority queues"] },
      { title: "UNIT IV: NON LINEAR DATA STRUCTURES - TREES", topics: ["Tree ADT", "Binary Tree ADT", "Tree traversals", "Binary Search Tree", "AVL Trees", "B-Tree", "Heaps"] },
      { title: "UNIT V: NON LINEAR DATA STRUCTURES - GRAPHS", topics: ["Graph ADT", "Representation of Graphs", "Breadth First Search", "Depth First Search", "Topological Sort", "Shortest Path Algorithm", "Minimum Spanning Tree"] }
    ]
  },
  "EC3354": {
    name: "Signals and Systems",
    description: "To understand the basic properties of signals & systems and analyze linear time invariant systems.",
    units: [
      { title: "UNIT I: CLASSIFICATION OF SIGNALS AND SYSTEMS", topics: ["Continuous Time Signals", "Discrete Time Signals", "Standard Signals", "Energy and Power signals", "Linear Time Invariant Systems", "Causality and Stability"] },
      { title: "UNIT II: ANALYSIS OF CONTINUOUS TIME SIGNALS", topics: ["Fourier series analysis", "Spectrum of Continuous Time signals", "Fourier Transform", "Laplace Transform", "Properties and Inverse Transforms"] },
      { title: "UNIT III: LINEAR TIME INVARIANT- CONTINUOUS TIME SYSTEMS", topics: ["Differential Equation", "Block Diagram Representation", "Impulse Response", "Convolution Integral", "Frequency Response", "Poles and Zeros"] },
      { title: "UNIT IV: ANALYSIS OF DISCRETE TIME SIGNALS", topics: ["Baseband signal Sampling", "Aliasing", "Discrete Time Fourier Transform (DTFT)", "Z-Transform", "Properties", "Inverse Z-transform"] },
      { title: "UNIT V: LINEAR TIME INVARIANT-DISCRETE TIME SYSTEMS", topics: ["Difference Equations", "Block Diagram Representation", "Impulse Response", "Convolution Sum", "Frequency Response"] }
    ]
  },
  "EC3353": {
    name: "Electronic Devices and Circuits",
    description: "To acquaint the students with the construction, theory and operation of the basic electronic devices.",
    units: [
      { title: "UNIT I: PN JUNCTION DEVICES", topics: ["PN Junction Diode", "Energy Band Diagram", "V-I Characteristics", "Zener Diode", "Varactor Diode", "Tunnel Diode", "Rectifiers", "Filters"] },
      { title: "UNIT II: TRANSISTORS", topics: ["Bipolar Junction Transistor", "CE, CB, CC Configurations", "Early Effect", "JFET", "MOSFET", "Enhancement and Depletion Modes", "FINFET"] },
      { title: "UNIT III: BIASING AND SMALL SIGNAL ANALYSIS", topics: ["DC Load Line", "Operating Point", "Biasing Circuits for BJT", "Bias Stability", "h-parameter model", "Small Signal Analysis of BJT Amplifiers"] },
      { title: "UNIT IV: MULTISTAGE OSCILLATORS AND AMPLIFIERS", topics: ["Cascaded Amplifiers", "Darlington Amplifier", "Feedback Amplifiers", "Barkhausen Criterion", "RC Phase Shift Oscillator", "LC Oscillators", "Crystal Oscillators"] },
      { title: "UNIT V: POWER SUPPLIES AND REGULATORS", topics: ["Linear Mode Power Supply", "Switched Mode Power Supply", "Voltage Regulators", "Series and Shunt Regulators", "Overvoltage Protection"] }
    ]
  },
  "EC3251": {
    name: "Circuit Analysis",
    description: "To introduce the basic concepts of DC and AC circuits behavior and their analysis.",
    units: [
      { title: "UNIT I: BASIC CIRCUITS ANALYSIS", topics: ["Ohm's Law", "Kirchhoff's Laws", "Resistors in Series and Parallel", "Voltage and Current Division", "Mesh Analysis", "Nodal Analysis", "Source Transformation"] },
      { title: "UNIT II: NETWORK THEOREMS FOR DC AND AC CIRCUITS", topics: ["Superposition Theorem", "Thevenin's Theorem", "Norton's Theorem", "Maximum Power Transfer Theorem", "Reciprocity Theorem", "Application to DC and AC Networks"] },
      { title: "UNIT III: RESONANCE AND COUPLED CIRCUITS", topics: ["Series and Parallel Resonance", "Bandwidth and Quality Factor", "Coupled Circuits", "Self and Mutual Inductance", "Coefficient of Coupling", "Tuned Circuits"] },
      { title: "UNIT IV: TRANSIENT ANALYSIS", topics: ["Source-free circuits", "Step response of RC, RL, and RLC circuits", "Transients in DC Circuits", "Laplace Transform Application to Circuit Analysis"] },
      { title: "UNIT V: TWO PORT NETWORKS", topics: ["Z parameters", "Y parameters", "h parameters", "ABCD parameters", "Interconnection of Two Port Networks", "Filter Characteristics"] }
    ]
  },
  "EC3451": {
    name: "Linear Integrated Circuits",
    description: "To introduce the basic building blocks of linear integrated circuits and applications of operational amplifiers.",
    units: [
      { title: "UNIT I: BASICS OF OPERATIONAL AMPLIFIERS", topics: ["Basic Information about Op-Amps", "Ideal Operational Amplifier", "DC and AC Characteristics", "Slew Rate", "Frequency Compensation", "Inverting and Non-inverting Amplifiers"] },
      { title: "UNIT II: APPLICATIONS OF OPERATIONAL AMPLIFIERS", topics: ["Sign Changer", "Scale Changer", "Phase Shift Circuits", "Voltage Follower", "V-to-I and I-to-V Converters", "Adder", "Subtractor", "Instrumentation Amplifier", "Integrator", "Differentiator"] },
      { title: "UNIT III: ANALOG MULTIPLIER AND PLL", topics: ["Analog Multiplier", "Voltage Controlled Oscillator", "Phase Locked Loop", "Monolithic PLL", "Application of PLL", "Frequency Synthesization"] },
      { title: "UNIT IV: ANALOG TO DIGITAL AND DIGITAL TO ANALOG CONVERTERS", topics: ["D/A Converter Basics", "Weighted Resistor DAC", "R-2R Ladder DAC", "A/D Converter", "Flash ADC", "Successive Approximation ADC", "Dual Slope ADC"] },
      { title: "UNIT V: SPECIAL FUNCTION ICs", topics: ["Timer IC 555", "Monostable and Astable Multivibrators", "Voltage Regulators", "Switching Regulators", "Active Filters", "Audio Power Amplifiers"] }
    ]
  },
  "EC3492": {
    name: "Digital Signal Processing",
    description: "To learn discrete Fourier transform, properties of DFT and its application to linear filtering.",
    units: [
      { title: "UNIT I: DISCRETE FOURIER TRANSFORM", topics: ["Review of Signals and Systems", "Concept of Frequency in Discrete Time Signals", "Discrete Fourier Transform (DFT)", "Properties of DFT", "Linear Convolution using DFT"] },
      { title: "UNIT II: FAST FOURIER TRANSFORM", topics: ["Radix-2 FFT Algorithms", "Decimation in Time (DIT)", "Decimation in Frequency (DIF)", "Computation of Inverse DFT using FFT", "Applications of FFT"] },
      { title: "UNIT III: IIR FILTER DESIGN", topics: ["Analog Filter Design", "Butterworth and Chebyshev Approximations", "Digital Filter Design via Impulse Invariant Transformation and Bilinear Transformation", "Realization of IIR Filters"] },
      { title: "UNIT IV: FIR FILTER DESIGN", topics: ["Linear Phase FIR Filters", "Design of FIR Filters using Windowing Techniques", "Rectangular, Hamming, Hanning Windows", "Frequency Sampling Method", "Realization of FIR Filters"] },
      { title: "UNIT V: FINITE WORD LENGTH EFFECTS", topics: ["Fixed Point and Floating Point Number Representation", "Truncation and Rounding Errors", "Quantization Noise", "Limit Cycle Oscillations", "Dead Band"] }
    ]
  },
  "EC3491": {
    name: "Communication Systems",
    description: "To introduce the concepts of various analog modulations and their spectral characteristics.",
    units: [
      { title: "UNIT I: ANALOG MODULATION", topics: ["Amplitude Modulation", "DSB-SC", "SSB", "VSB", "Modulators and Demodulators", "Superheterodyne Receiver"] },
      { title: "UNIT II: ANGLE MODULATION", topics: ["Frequency Modulation", "Phase Modulation", "Narrowband FM", "Wideband FM", "Generation of FM", "Demodulation of FM", "FM Transmitters and Receivers"] },
      { title: "UNIT III: NOISE THEORY", topics: ["Types of Noise", "White Noise", "Narrowband Noise", "Signal to Noise Ratio", "Noise Figure", "Noise Equivalent Temperature", "Noise in AM and FM systems"] },
      { title: "UNIT IV: DIGITAL TRANSMISSION", topics: ["Sampling Theorem", "Pulse Code Modulation", "DPCM", "Delta Modulation", "Line Coding", "Intersymbol Interference", "Nyquist Criterion"] },
      { title: "UNIT V: DIGITAL MODULATION SCHEMES", topics: ["ASK", "FSK", "PSK", "QPSK", "QAM", "Bandwidth Efficiency", "Carrier Synchronization", "Error Control Coding Fundamentals"] }
    ]
  },
  "EC3501": {
    name: "Wireless Communication",
    description: "To study the characteristic of wireless channel and the various cellular architectures.",
    units: [
      { title: "UNIT I: WIRELESS CHANNELS", topics: ["Large Scale Path Loss", "Free Space Propagation Model", "Small Scale Fading", "Multipath Propagation", "Fading Channels", "Doppler Shift"] },
      { title: "UNIT II: CELLULAR ARCHITECTURE", topics: ["Multiple Access Techniques", "FDMA", "TDMA", "CDMA", "Cellular Concept", "Frequency Reuse", "Handoff Strategies", "Interference", "Trunking and Grade of Service"] },
      { title: "UNIT III: DIGITAL SIGNALLING FOR FADING CHANNELS", topics: ["Structure of Wireless Communication Link", "Modulation Techniques for Mobile Radio", "Performance of Digital Modulation in Slow Flat Fading Channels", "Equalization", "Diversity Techniques"] },
      { title: "UNIT IV: MULTIPATH MITIGATION TECHNIQUES", topics: ["Equalization", "Linear and Non-Linear Equalizers", "Zero Forcing", "MMSE", "Diversity Routing", "Space, Time, Frequency Diversity", "Rake Receiver"] },
      { title: "UNIT V: MULTIPLE ANTENNA TECHNIQUES", topics: ["MIMO Systems", "Spatial Multiplexing", "System Model", "Pre-coding", "Beamforming", "Transmitter Diversity", "Receiver Diversity"] }
    ]
  },
  "CS3301": {
    name: "Data Structures and Algorithms",
    description: "To define, understand and implement the linear and non-linear data structures.",
    units: [
      { title: "UNIT I: LINEAR DATA STRUCTURES", topics: ["Abstract Data Types", "List ADT", "Array based implementation", "Linked list implementation", "Singly linked lists", "Doubly linked lists", "Circular linked lists"] },
      { title: "UNIT II: STACKS AND QUEUES", topics: ["Stack ADT", "Operations", "Applications", "Evaluating arithmetic expressions", "Queue ADT", "Operations", "Circular Queue", "Priority Queue", "DeQueue"] },
      { title: "UNIT III: NON-LINEAR DATA STRUCTURES - TREES", topics: ["Tree Traversal Techniques", "Binary Tree", "Binary Search Tree", "AVL Tree", "B-Tree", "B+ Tree", "Heap", "Heap Sort"] },
      { title: "UNIT IV: NON-LINEAR DATA STRUCTURES - GRAPHS", topics: ["Definition", "Representation of Graph", "Types of Graph", "Breadth First Search (BFS)", "Depth First Search (DFS)", "Topological Sort", "Shortest Path Algorithm"] },
      { title: "UNIT V: SEARCHING, SORTING AND HASHING", topics: ["Linear Search", "Binary Search", "Insertion Sort", "Selection Sort", "Merge Sort", "Quick Sort", "Hashing Techniques", "Collision Resolution Methods"] }
    ]
  },
  "EC3401": {
    name: "Networks and Security",
    description: "To understand the fundamental concepts of computer networking and network security.",
    units: [
      { title: "UNIT I: DATA COMMUNICATIONS AND PHYSICAL LAYER", topics: ["Networks", "Network Types", "Protocol Layering", "TCP/IP Protocol suite", "OSI Model", "Physical Layer Performance", "Transmission media"] },
      { title: "UNIT II: DATA-LINK LAYER", topics: ["Introduction", "Link-Layer Addressing", "Error Detection and Correction", "Data Link Control", "MAC", "Wired LANs", "Wireless LANs", "Connecting Devices"] },
      { title: "UNIT III: NETWORK LAYER", topics: ["Network Layer Services", "Packetizing", "Routing and Forwarding", "IPv4 Addresses", "Internet Protocol (IP)", "Routing Algorithms", "Unicast Routing Protocols"] },
      { title: "UNIT IV: TRANSPORT LAYER AND APPLICATION LAYER", topics: ["Introduction", "Transport Layer Protocols", "UDP", "TCP", "Congestion Control", "Standard Client-Server Protocols", "WWW and HTTP", "FTP", "Electronic Mail", "DNS"] },
      { title: "UNIT V: NETWORK SECURITY", topics: ["Security Goals", "Cryptography", "Symmetric-Key Cryptography", "Asymmetric-Key Cryptography", "Message Integrity and Authentication", "Digital Signature", "IP Security", "Firewalls"] }
    ]
  },
  "CS3551": {
    name: "Distributed Computing",
    description: "To study the concepts and algorithms related to distributed systems.",
    units: [
      { title: "UNIT I: INTRODUCTION AND COMMUNICATION", topics: ["Definition", "Goals", "Hardware Concepts", "Software Concepts", "Client-Server Model", "Remote Procedure Call", "Remote Object Invocation", "Message Oriented Communication"] },
      { title: "UNIT II: SYNCHRONIZATION", topics: ["Clock Synchronization", "Logical Clocks", "Global State", "Election Algorithms", "Mutual Exclusion", "Distributed Transactions"] },
      { title: "UNIT III: REPLICATION AND CONSISTENCY", topics: ["System Model", "Data-Centric Consistency Models", "Client-Centric Consistency Models", "Replica Management", "Consistency Protocols"] },
      { title: "UNIT IV: FAULT TOLERANCE", topics: ["Basic Concepts", "Failure Models", "Failure Masking", "Process Resilience", "Reliable Client-Server Communication", "Reliable Group Communication", "Distributed Commit", "Recovery"] },
      { title: "UNIT V: DISTRIBUTED FILE SYSTEMS", topics: ["Architecture", "Processes", "Communication", "Naming", "Synchronization", "Consistency and Replication", "Fault Tolerance", "Security in Distributed Systems"] }
    ]
  },
  "CS3661": {
    name: "Web Technologies",
    description: "To learn the technologies of the web, understand how to build web applications.",
    units: [
      { title: "UNIT I: WEB ESSENTIALS", topics: ["Internet concepts", "Web servers", "Web clients", "HTTP Protocol", "HTML5", "CSS3", "JavaScript semantics", "DOM Manipulation"] },
      { title: "UNIT II: CLIENT SIDE PROGRAMMING", topics: ["JavaScript Advanced Features", "Asynchronous JavaScript", "Promises", "Async/Await", "AJAX", "JSON", "React JS Fundamentals", "Components and Props"] },
      { title: "UNIT III: SERVER SIDE PROGRAMMING", topics: ["Node.js Architecture", "Event Loop", "NPM", "Express.js framework", "Routing", "Middleware", "RESTful Web Services", "API Design"] },
      { title: "UNIT IV: DATABASE INTEGRATION", topics: ["Relational vs NoSQL databases", "MongoDB Fundamentals", "Mongoose ORM", "CRUD Operations", "Data Modeling", "Database Connectivity", "Session Management"] },
      { title: "UNIT V: ADVANCED WEB DEVELOPMENT", topics: ["Authentication and Authorization", "JWT", "Web Security", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "Deployment Strategies", "Web Hosting"] }
    ]
  },
  "GE3791": {
    name: "Human Values and Ethics",
    description: "To create an awareness on Engineering Ethics and Human Values.",
    units: [
      { title: "UNIT I: HUMAN VALUES", topics: ["Morals, values and Ethics", "Integrity", "Work ethic", "Service learning", "Civic virtue", "Respect for others", "Living peacefully", "Caring", "Sharing", "Honesty", "Courage", "Valuing time", "Cooperation"] },
      { title: "UNIT II: ENGINEERING ETHICS", topics: ["Senses of Engineering Ethics", "Variety of moral issues", "Types of inquiry", "Moral dilemmas", "Moral Autonomy", "Kohlberg's theory", "Gilligan's theory", "Consensus and Controversy"] },
      { title: "UNIT III: ENGINEERING AS SOCIAL EXPERIMENTATION", topics: ["Engineering as Experimentation", "Engineers as responsible Experimenters", "Codes of Ethics", "A Balanced Outlook on Law"] },
      { title: "UNIT IV: SAFETY, RESPONSIBILITIES AND RIGHTS", topics: ["Safety and Risk", "Assessment of Safety and Risk", "Risk Benefit Analysis and Reducing Risk", "Respect for Authority", "Collective Bargaining", "Confidentiality", "Conflicts of Interest"] },
      { title: "UNIT V: GLOBAL ISSUES", topics: ["Multinational Corporations", "Environmental Ethics", "Computer Ethics", "Weapons Development", "Engineers as Managers", "Consulting Engineers", "Engineers as Expert Witnesses and Advisors", "Moral Leadership"] }
    ]
  },
  "HS3751": {
    name: "Human Values and Ethics",
    description: "To create an awareness on Engineering Ethics and Human Values.",
    units: [
      { title: "UNIT I: HUMAN VALUES", topics: ["Morals, values and Ethics", "Integrity", "Work ethic", "Service learning", "Civic virtue", "Respect for others", "Living peacefully", "Caring", "Sharing", "Honesty", "Courage", "Valuing time", "Cooperation"] },
      { title: "UNIT II: ENGINEERING ETHICS", topics: ["Senses of Engineering Ethics", "Variety of moral issues", "Types of inquiry", "Moral dilemmas", "Moral Autonomy", "Kohlberg's theory", "Gilligan's theory", "Consensus and Controversy"] },
      { title: "UNIT III: ENGINEERING AS SOCIAL EXPERIMENTATION", topics: ["Engineering as Experimentation", "Engineers as responsible Experimenters", "Codes of Ethics", "A Balanced Outlook on Law"] },
      { title: "UNIT IV: SAFETY, RESPONSIBILITIES AND RIGHTS", topics: ["Safety and Risk", "Assessment of Safety and Risk", "Risk Benefit Analysis and Reducing Risk", "Respect for Authority", "Collective Bargaining", "Confidentiality", "Conflicts of Interest"] },
      { title: "UNIT V: GLOBAL ISSUES", topics: ["Multinational Corporations", "Environmental Ethics", "Computer Ethics", "Weapons Development", "Engineers as Managers", "Consulting Engineers", "Engineers as Expert Witnesses and Advisors", "Moral Leadership"] }
    ]
  },
  "GE3451": {
    name: "Environmental Sciences and Sustainability",
    description: "To study the nature and facts about environment and natural resources.",
    units: [
      { title: "UNIT I: ENVIRONMENT AND ECOSYSTEMS", topics: ["Definition and Scope", "Structure and Function of an Ecosystem", "Energy Flow", "Ecological Succession", "Food Chains, Food Webs and Ecological Pyramids"] },
      { title: "UNIT II: BIODIVERSITY AND CONSERVATION", topics: ["Introduction to Biodiversity", "Biogeographical Classification of India", "Value of Biodiversity", "Threats to Biodiversity", "Endangered and Endemic Species", "Conservation of Biodiversity"] },
      { title: "UNIT III: ENVIRONMENTAL POLLUTION", topics: ["Definition", "Causes, Effects and Control Measures of Air Pollution", "Water Pollution", "Soil Pollution", "Marine Pollution", "Noise Pollution", "Thermal Pollution", "Nuclear Hazards"] },
      { title: "UNIT IV: NATURAL RESOURCES", topics: ["Forest Resources", "Water Resources", "Mineral Resources", "Food Resources", "Energy Resources", "Land Resources", "Role of an Individual in Conservation of Natural Resources"] },
      { title: "UNIT V: SOCIAL ISSUES AND THE ENVIRONMENT", topics: ["Sustainable Development", "Urban Problems Related to Energy", "Water Conservation", "Resettlement and Rehabilitation", "Environmental Ethics", "Climate Change", "Global Warming", "Ozone Layer Depletion"] }
    ]
  },
  "EC3452": {
    name: "Electromagnetic Fields",
    description: "To gain conceptual and basic mathematical understanding of electric and magnetic fields in free space and in materials.",
    units: [
      { title: "UNIT I: STATIC ELECTRIC FIELD", topics: ["Coordinate Systems", "Vector Calculus", "Coulomb's Law", "Electric Field Intensity", "Electric Flux Density", "Gauss's Law", "Applications of Gauss's Law", "Electric Potential"] },
      { title: "UNIT II: CONDUCTORS AND DIELECTRICS", topics: ["Current and Current Density", "Continuity of Current", "Conductors in Static Electric Fields", "Dielectrics", "Polarization", "Boundary Conditions", "Capacitance", "Poisson's and Laplace's Equations"] },
      { title: "UNIT III: STATIC MAGNETIC FIELDS", topics: ["Biot-Savart Law", "Ampere's Circuital Law", "Magnetic Flux Density", "Magnetic Scalar and Vector Potentials", "Forces due to Magnetic Fields", "Magnetic Torque and Moment", "Magnetic Materials", "Magnetic Boundary Conditions"] },
      { title: "UNIT IV: TIME VARYING FIELDS", topics: ["Faraday's Law", "Transformer and Motional Electromotive Forces", "Displacement Current", "Maxwell's Equations in Integral form and Differential form", "Time varying potentials", "Time-Harmonic Fields"] },
      { title: "UNIT V: ELECTROMAGNETIC WAVES", topics: ["Electromagnetic Wave Equation", "Uniform Plane Waves", "Wave Propagation in Free Space", "Wave Propagation in Dielectrics", "Skin Effect", "Poynting's Theorem and Wave Power", "Reflection of Plane Waves"] }
    ]
  },
  "EC3552": {
    name: "VLSI and Chip Design",
    description: "To study the fundamentals of CMOS circuits and its characteristics, and design VLSI subsystems.",
    units: [
      { title: "UNIT I: CMOS TECHNOLOGY", topics: ["MOS Transistor Theory", "Ideal I-V Characteristics", "C-V Characteristics", "Non-ideal I-V Effects", "CMOS Fabrication", "Layout Design Rules", "CMOS Inverter", "DC Characteristics"] },
      { title: "UNIT II: COMBINATIONAL LOGIC CIRCUITS", topics: ["Propagation Delays", "Logical Effort", "Delay Estimation", "Power Dissipation", "Static CMOS Design", "Dynamic CMOS Design", "Pass Transistor Logic", "Transmission Gates"] },
      { title: "UNIT III: SEQUENTIAL LOGIC CIRCUITS", topics: ["Static Latches and Registers", "Dynamic Latches and Registers", "Timing Issues", "Pipelining", "Clock Generation", "Clock Distribution", "Synchronizers"] },
      { title: "UNIT IV: DESIGN OF ARITHMETIC BUILDING BLOCKS", topics: ["Data Path Circuits", "Architectures for Adders", "Ripple Carry Adders", "Carry Look Ahead Adders", "Multipliers", "Array Multipliers", "Dividers", "Shifters", "ALU Design"] },
      { title: "UNIT V: IMPLEMENTATION STRATEGIES", topics: ["Full Custom and Semi-Custom Design", "Standard Cell Design", "FPGA Building Block Architectures", "FPGA Interconnect Routing Procedures", "Testing logic circuits", "Design for Testability"] }
    ]
  },
  "EC3551": {
    name: "Transmission Lines and RF Systems",
    description: "To introduce the various types of transmission lines and to critically analyze the RF systems.",
    units: [
      { title: "UNIT I: TRANSMISSION LINE THEORY", topics: ["General Theory of Transmission Lines", "Reflection Coefficient", "SWR", "Open and Short Circuited Lines", "Input Impedance", "Power and Impedance Measurement on Lines"] },
      { title: "UNIT II: HIGH FREQUENCY TRANSMISSION LINES", topics: ["Transmission Line at Radio Frequencies", "Constants of dissipationless line", "Voltages and currents on dissipationless line", "Smith Chart", "Applications of Smith Chart", "Impedance Matching", "Stub Matching"] },
      { title: "UNIT III: GUIDED WAVES", topics: ["Waves between parallel planes of perfect conductors", "Transverse Electric (TE) waves", "Transverse Magnetic (TM) waves", "Transverse Electromagnetic (TEM) waves", "Velocities of propagation", "Attenuation of TE and TM waves"] },
      { title: "UNIT IV: RECTANGULAR WAVEGUIDES", topics: ["Transverse Magnetic Waves in Rectangular Waveguides", "Transverse Electric Waves in Rectangular Waveguides", "Characteristics of TE and TM Waves", "Cutoff frequency and phase velocity", "Impedance and attenuation"] },
      { title: "UNIT V: RF SYSTEM DESIGN CONCEPTS", topics: ["Active RF components", "RF amplifier design", "Low Noise Amplifiers", "RF Oscillators", "Mixers", "RF filter design", "Matching networks"] }
    ]
  },
  "ET3491": {
    name: "Embedded Systems and IoT Design",
    description: "To learn the architecture and programming of ARM processor and design IoT systems.",
    units: [
      { title: "UNIT I: 8-BIT MICROCONTROLLER", topics: ["Architecture of 8051", "Special Function Registers", "I/O Ports", "Memory Organization", "Instruction Set", "Addressing Modes", "Assembly Language Programming"] },
      { title: "UNIT II: ARM PROCESSOR", topics: ["ARM Architecture Versions", "ARM Architecture", "Instruction Set", "Thumb Instruction Set", "Memory Management", "Pipelining", "Interrupts", "Exceptions"] },
      { title: "UNIT III: EMBEDDED SYSTEM DESIGN", topics: ["Introduction to Embedded Systems", "Characteristics and Quality Attributes", "Hardware Software Co-Design", "Embedded Product Development Life Cycle", "RTOS Concepts"] },
      { title: "UNIT IV: INTERNET OF THINGS", topics: ["Introduction to IoT", "Physical Design of IoT", "Logical Design of IoT", "IoT Enabling Technologies", "IoT Levels", "Domain Specific IoTs"] },
      { title: "UNIT V: IOT PROTOCOLS AND APPLICATIONS", topics: ["IoT MAC Protocols", "Routing Protocols", "Application Layer Protocols", "Building Blocks of IoT Device", "Raspberry Pi", "Arduino", "IoT Case Studies"] }
    ]
  }
};
