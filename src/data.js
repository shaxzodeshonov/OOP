// ═══════════════════════════════════════════════════════════
//  data.js — All course content: lessons, quizzes, tasks
// ═══════════════════════════════════════════════════════════

// ── OPERATOR / SYMBOL TOOLTIPS ──────────────────────────────
export const SYMBOL_TOOLTIPS = {
  "::": { title: "Scope Resolution", desc: "Links a function or variable to the class or namespace it belongs to. Used when defining member functions outside the class." },
  "->": { title: "Arrow Operator", desc: "Accesses a member of an object through a pointer. ptr->method() is shorthand for (*ptr).method()." },
  ".*": { title: "Pointer-to-Member", desc: "Dereferences a pointer-to-member on an object. Rarely used directly; cannot be overloaded." },
  "?:": { title: "Ternary Operator", desc: "Shorthand if/else. condition ? valueIfTrue : valueIfFalse. Cannot be overloaded." },
  "&&": { title: "Logical AND", desc: "Returns true only if both operands are true. Short-circuits: if the left side is false, the right side is never evaluated." },
  "||": { title: "Logical OR", desc: "Returns true if at least one operand is true. Short-circuits: if the left side is true, the right side is never evaluated." },
  "!": { title: "Logical NOT", desc: "Negates a boolean value. !true → false, !false → true. As a unary overload, you can define custom negation logic." },
  "~": { title: "Bitwise NOT / Destructor Prefix", desc: "As bitwise: flips all bits of an integer. In class context: the ~ prefix marks a destructor, e.g. ~MyClass()." },
  "<<": { title: "Left Shift / Stream Insertion", desc: "Bitwise: shifts bits left. Overloaded for streams: cout << value sends value to the output stream. Returns the stream for chaining." },
  ">>": { title: "Right Shift / Stream Extraction", desc: "Bitwise: shifts bits right. Overloaded for streams: cin >> var reads input into var. Returns the stream for chaining." },
  "++": { title: "Increment Operator", desc: "Prefix ++x increments then returns the new value. Postfix x++ saves the old value, increments, then returns the old value. Overloadable." },
  "--": { title: "Decrement Operator", desc: "Prefix --x decrements then returns the new value. Postfix x-- saves the old value, decrements, then returns the old value. Overloadable." },
  "+=": { title: "Add-Assign", desc: "Adds the right operand to the left and stores the result in the left. x += 5 is shorthand for x = x + 5." },
  "-=": { title: "Subtract-Assign", desc: "Subtracts the right operand from the left and stores the result. x -= 3 is shorthand for x = x - 3." },
  "*=": { title: "Multiply-Assign", desc: "Multiplies left by right and stores the result. x *= 2 is shorthand for x = x * 2." },
  "/=": { title: "Divide-Assign", desc: "Divides left by right and stores the result. x /= 4 is shorthand for x = x / 4." },
  "==": { title: "Equality Comparison", desc: "Returns true if both operands have the same value. For objects, you can overload this to define what 'equal' means for your class." },
  "!=": { title: "Inequality Comparison", desc: "Returns true if operands are NOT equal. Often overloaded together with ==." },
  "<=": { title: "Less Than or Equal", desc: "Returns true if the left operand is less than or equal to the right." },
  ">=": { title: "Greater Than or Equal", desc: "Returns true if the left operand is greater than or equal to the right." },
  "*": { title: "Multiply / Dereference / Pointer", desc: "In expressions: multiplies two values. With pointers: *ptr dereferences — gives the value at that address. In declarations: int* ptr declares a pointer." },
  "&": { title: "Address-of / Reference / Bitwise AND", desc: "Unary &x gives the memory address of x. In declarations: int& ref is a reference. Binary a & b is bitwise AND. In parameters: & means pass by reference." },
  "new": { title: "Dynamic Allocation", desc: "Allocates memory on the heap and returns a pointer to the new object. Must be paired with delete to avoid memory leaks." },
  "delete": { title: "Dynamic Deallocation", desc: "Frees heap memory allocated with new. Use delete for single objects, delete[] for arrays. Always set the pointer to nullptr after deleting." },
  "this": { title: "this Pointer", desc: "An implicit pointer available inside every non-static member function that points to the current object. Use this->member to resolve name conflicts with parameters." },
  "friend": { title: "friend Declaration", desc: "Grants a non-member function (or another class) access to private and protected members. The friend is not a member — it has no implicit this pointer." },
  "static": { title: "static Member", desc: "Static data members are shared by all objects of the class — one copy exists regardless of how many instances there are. Static functions have no this pointer." },
  "const": { title: "const Qualifier", desc: "On a variable: value cannot change. On a member function (after the params): the function cannot modify any data members and can be called on const objects." },
  "virtual": { title: "virtual Function", desc: "Enables polymorphism: the correct overridden function in a derived class is called at runtime through a base class pointer." },
  "nullptr": { title: "Null Pointer", desc: "The modern C++ null pointer constant (since C++11). Use instead of NULL or 0 for pointers. A nullptr pointer points to nothing." },
  "#ifndef": { title: "#ifndef — Include Guard Open", desc: "Preprocessor directive: 'if not defined'. Used as the opening of an include guard — skips the file body if the macro was already defined." },
  "#define": { title: "#define — Macro Definition", desc: "Defines a preprocessor macro. In include guards, it marks the header as already processed so it won't be included twice." },
  "#endif": { title: "#endif — Preprocessor Block End", desc: "Closes a #ifdef, #ifndef, or #if preprocessor block." },
  "#include": { title: "#include — File Inclusion", desc: "Inserts the content of another file at this location before compilation. Use <> for system headers, \"\" for your own headers." },
  "operator": { title: "operator Keyword", desc: "Used to overload a C++ operator. Syntax: ReturnType operator@(params). Lets your class define the behavior of built-in symbols like +, ==, <<." },
  "public": { title: "public Access", desc: "Members are accessible from anywhere — inside the class, from derived classes, and from external code." },
  "private": { title: "private Access", desc: "Members are accessible only from inside the class itself and from friend functions/classes." },
  "protected": { title: "protected Access", desc: "Members are accessible from inside the class and from derived (child) classes, but not from external code." },
  "class": { title: "class Keyword", desc: "Defines a new class type. Members are private by default. Ends with }; (semicolon required)." },
  "struct": { title: "struct Keyword", desc: "Like class but members are public by default. In C++ both can have member functions, access specifiers, and constructors." },
  "return": { title: "return Statement", desc: "Exits a function and optionally sends a value back to the caller. In an operator overload, often returns *this (current object) or a new object." },
  "inline": { title: "inline Hint", desc: "Suggests to the compiler to expand the function body at the call site instead of making a real function call. Functions defined inside a class body are implicitly inline." },
};

// ── NAV STRUCTURE ────────────────────────────────────────────
export const NAV = [
  {
    group: "Start Here", items: [
      { id: "home", label: "Learning Plan" }
    ]
  },
  {
    group: "Classes Pt.1", items: [
      { id: "w1-oop", label: "OOP Fundamentals" },
      { id: "w1-class", label: "Classes & Objects" },
      { id: "w1-members", label: "Member Functions" },
      { id: "w1-encap", label: "Encapsulation & Get/Set" },
      { id: "w1-files", label: "Header & Source Files" },
      { id: "quiz1", label: "🧪 Quiz 1" },
    ]
  },
  {
    group: "Classes Pt.2", items: [
      { id: "w2-scope", label: "Class Scope & Access" },
      { id: "w2-ctor", label: "Constructors & Destructors" },
      { id: "w2-const", label: "Const & Composition" },
      { id: "w2-friends", label: "Friends, Pointers & Memory" },
      { id: "w2-static", label: "Static Members" },
      { id: "quiz2", label: "🧪 Quiz 2" },
    ]
  },
  {
    group: "Operator Overloading Pt.1", items: [
      { id: "w3-op", label: "Overloading Basics" },
      { id: "w3-stream", label: "Stream Operators << >>" },
      { id: "w3-unary", label: "Unary Operators" },
      { id: "quiz3", label: "🧪 Quiz 3" },
    ]
  },
  {
    group: "Operator Overloading Pt.2", items: [
      { id: "adv-op-binary", label: "Binary Operators Deep Dive" },
      { id: "adv-op-copy", label: "Deep vs Shallow Copy" },
      { id: "adv-op-array", label: "Case Study: Array Class" },
      { id: "adv-op-convert", label: "Type Conversion Operators" },
      { id: "adv-op-string", label: "Case Study: String Class" },
      { id: "quiz4", label: "🧪 Quiz 4" },
    ]
  },
  {
    group: "Inheritance", items: [
      { id: "inh-concepts", label: "Inheritance Fundamentals" },
      { id: "inh-base", label: "Base & Derived Classes" },
      { id: "inh-relations", label: "Relationships & Access" },
      { id: "inh-ctor", label: "Constructors in Inheritance" },
      { id: "inh-types", label: "Public / Protected / Private" },
      { id: "quiz5", label: "🧪 Quiz 5" },
    ]
  },
  {
    group: "Polymorphism", items: [
      { id: "poly-intro", label: "Intro to Polymorphism" },
      { id: "poly-override", label: "Overloading vs Overriding" },
      { id: "poly-virtual", label: "Virtual Functions & Binding" },
      { id: "poly-ptrs", label: "Base Pointers & Derived Objects" },
      { id: "poly-dtor", label: "Virtual Destructors" },
      { id: "quiz6", label: "🧪 Quiz 6" },
    ]
  },
  {
    group: "Abstract Classes & Templates", items: [
      { id: "abs-pure", label: "Pure Virtual & Abstract" },
      { id: "abs-interface", label: "Designing Interfaces" },
      { id: "tpl-func", label: "Function Templates" },
      { id: "tpl-class", label: "Class Templates" },
      { id: "quiz7", label: "🧪 Quiz 7" },
    ]
  },
  {
    group: "Stream I/O & Files", items: [
      { id: "io-streams", label: "cin / cout & Formatting" },
      { id: "io-manip", label: "Stream Manipulators" },
      { id: "io-states", label: "Stream States & Errors" },
      { id: "file-seq", label: "Sequential File Processing" },
      { id: "file-random", label: "Random-Access Files" },
      { id: "exc-basics", label: "Exception Handling" },
      { id: "quiz8", label: "🧪 Quiz 8" },
    ]
  },
  {
    group: "GUI with Qt", items: [
      { id: "gui-intro", label: "Console vs GUI / Qt Intro" },
      { id: "gui-window", label: "First Window & Widgets" },
      { id: "gui-signals", label: "Signals & Slots" },
      { id: "gui-oop", label: "GUI + OOP Design" },
      { id: "gui-files", label: "GUI + Files & Integration" },
      { id: "quiz9", label: "🧪 Quiz 9" },
    ]
  },
];

// ── QUIZ ANSWER KEY ──────────────────────────────────────────
export const QUIZ_ANSWERS = {
  "q1-1": "B", "q1-2": "B", "q1-3": "C", "q1-4": "C", "q1-5": "B", "q1-6": "C",
  "q2-1": "B", "q2-2": "C", "q2-3": "B", "q2-4": "C", "q2-5": "B", "q2-6": "C",
  "q3-1": "B", "q3-2": "C", "q3-3": "B", "q3-4": "B", "q3-5": "C", "q3-6": "C",
  "q4-1": "B", "q4-2": "C", "q4-3": "B", "q4-4": "B", "q4-5": "C", "q4-6": "A",
  "q5-1": "B", "q5-2": "C", "q5-3": "B", "q5-4": "C", "q5-5": "A", "q5-6": "B",
  "q6-1": "B", "q6-2": "B", "q6-3": "D", "q6-4": "B", "q6-5": "B", "q6-6": "B",
  "q7-1": "C", "q7-2": "B", "q7-3": "B", "q7-4": "C", "q7-5": "B", "q7-6": "C",
  "q8-1": "B", "q8-2": "C", "q8-3": "B", "q8-4": "C", "q8-5": "B", "q8-6": "C",
  "q9-1": "B", "q9-2": "C", "q9-3": "B", "q9-4": "B", "q9-5": "C", "q9-6": "B",
};

// ── LESSONS ──────────────────────────────────────────────────
export const LESSONS = {

  home: {
    badge: "Welcome",
    title: "C++ OOP Mastery",
    subtitle: "Concept → Syntax → Rules → Practice → Quiz. The best path through C++ Object Oriented Programming.",
    type: "home",
    dayPlan: [
      {
        label: "Module 1", icon: "🏗️", title: "Classes Fundamentals",
        items: ["OOP concepts", "Classes, objects, members", "Encapsulation, getters/setters", "Header & source files", "Constructors & destructors", "Const, composition, friends", "Static members"]
      },
      {
        label: "Module 2", icon: "⚙️", title: "Operators & Deep Copy",
        items: ["Operator overloading basics", "Stream operators << >>", "Unary operators", "Binary operators deep dive", "Deep vs shallow copy", "Array & String case studies", "Type conversion operators"]
      },
      {
        label: "Module 3", icon: "🧬", title: "OOP Pillars",
        items: ["Inheritance fundamentals", "Base & derived classes", "Constructor chaining", "Polymorphism & virtual functions", "Abstract classes & interfaces", "Function & class templates"]
      },
      {
        label: "Module 4", icon: "🖥️", title: "I/O, Files & GUI",
        items: ["Stream I/O & formatting", "File processing (sequential & random)", "Exception handling try/catch/throw", "Qt GUI fundamentals", "Signals & Slots", "GUI + OOP & file integration"]
      },
    ],
    tips: [
      { icon: "⚡", title: "Best Method", text: "Read concept → study syntax → do practice tasks yourself → quiz. Never skip practice — writing code by hand locks it in." },
      { icon: "🧠", title: "Active Recall", text: "After each page, close it and write what you remember. This doubles retention vs passive reading." },
      { icon: "🔨", title: "Build as you learn", text: "Keep one file open. Build a BankAccount class and keep adding features as you progress through lessons." },
      { icon: "🎯", title: "Quiz honestly", text: "Attempt every question before reading feedback. Wrong answers show exactly what to re-read." },
    ],
    next: "w1-oop",
  },

  "w1-oop": {
    badge: "Week 1 · Lesson 1", title: "OOP Fundamentals",
    intro: "Object-Oriented Programming structures code around <em>objects</em> — bundles of data and functions — instead of loose procedures.",
    next: "w1-class",
    sections: [
      {
        title: "4 Core Concepts", type: "cards", items: [
          { head: "Object", text: "A specific instance in memory. <code>myCar</code> is an object of type <code>Car</code> — it holds real values." },
          { head: "Class", text: "A blueprint/template defining what data and behaviors every object of that type will have." },
          { head: "Attribute (Data Member)", text: "Variables belonging to the class. A <code>Car</code> has <code>speed</code>, <code>color</code>, <code>brand</code>." },
          { head: "Behavior (Member Function)", text: "Functions belonging to the class: <code>accelerate()</code>, <code>brake()</code>, <code>getSpeed()</code>." },
        ]
      },
      {
        title: "Why OOP?", type: "bullets", items: [
          "Groups related data + functions together → cleaner, maintainable code",
          "Encapsulation hides internal details → fewer bugs, safer changes",
          "Classes are reusable across projects",
          "Models real-world things naturally (a Student, a BankAccount, a Car)",
        ]
      },
    ],
    tasks: [
      { title: "Real-World Mapping", diff: "easy", text: "Pick 3 real-world things (phone, dog, car). For each: list at least 3 attributes and 2 behaviors. Don't code yet — just think in data and actions." },
      { title: "Identify OOP Terms", diff: "easy", text: 'Given: "a function calculates area by taking width and height as parameters". Restate in OOP terms: what is the class, what are the data members, what is the member function?' },
      { title: "Design a Class on Paper", diff: "medium", text: "Design a <code>Book</code> class on paper. Include: class name, 4 data members with types, 3 member functions with return types and parameters." },
    ],
  },

  "w1-class": {
    badge: "Week 1 · Lesson 2", title: "Defining Classes & Creating Objects",
    intro: "A class is declared with the <code>class</code> keyword. Objects are created like variables using that class as their type.",
    next: "w1-members",
    sections: [
      {
        title: "Class Syntax", type: "code", lang: "C++",
        code: `<span class="cmt">// Class definition — the blueprint</span>
<span class="kw">class</span> <span class="cls">Car</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">string</span> brand;
    <span class="type">int</span>    speed;

    <span class="type">void</span> <span class="fn">accelerate</span>(<span class="type">int</span> amount) {
        speed += amount;
    }
    <span class="type">void</span> <span class="fn">display</span>() {
        cout <span class="op"><<</span> brand <span class="op"><<</span> <span class="str">" going "</span> <span class="op"><<</span> speed <span class="op"><<</span> <span class="str">" km/h\\n"</span>;
    }
}; <span class="cmt">// ← semicolon REQUIRED</span>`,
        rules: [
          "Class name starts with an uppercase letter (strong C++ convention)",
          "The closing brace <strong>must</strong> end with a semicolon: <code>};</code>",
          "<code>public:</code> members are accessible from anywhere; <code>private:</code> only inside the class",
          "Functions defined inside the class body are automatically inline",
          "A class definition creates no object — it's just a blueprint",
        ]
      },
      {
        title: "Creating & Using Objects", type: "code", lang: "C++",
        code: `<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Car</span> myCar;             <span class="cmt">// create object on the stack</span>
    myCar.brand = <span class="str">"BMW"</span>;   <span class="cmt">// dot (.) accesses members</span>
    myCar.speed = <span class="num">0</span>;

    myCar.<span class="fn">accelerate</span>(<span class="num">60</span>);
    myCar.<span class="fn">display</span>();        <span class="cmt">// BMW going 60 km/h</span>

    <span class="cls">Car</span> car2;              <span class="cmt">// completely independent object</span>
    car2.brand = <span class="str">"Toyota"</span>;
    car2.speed = <span class="num">100</span>;      <span class="cmt">// does NOT affect myCar</span>
    <span class="kw">return</span> <span class="num">0</span>;
}`,
        rules: [
          "Use dot operator <code>.</code> to access any member: <code>object.member</code>",
          "Every object is <strong>completely independent</strong> — modifying one never affects another",
          "Multiple objects of the same class can exist simultaneously",
          "Each object gets its own copy of all non-static data members",
        ]
      },
    ],
    tasks: [
      { title: "Create a Rectangle Class", diff: "easy", text: "Define class <code>Rectangle</code> with public <code>double width</code> and <code>double height</code>. Add <code>double area()</code> returning <code>width * height</code>. In <code>main()</code>, create two Rectangle objects with different sizes and print both areas." },
      { title: "Two Objects, Same Class", diff: "easy", text: "Create class <code>Person</code> with <code>string name</code> and <code>int age</code>. Create two Person objects, set different values, add <code>void introduce()</code> that prints 'Hi, I'm [name], age [age]'. Call it on both and confirm different output." },
      { title: "Fix the Bug", diff: "medium", text: "This has exactly two errors. Find and fix them:<br><code>class Dog { public: string name; void bark() { cout &lt;&lt; \"Woof!\"; } }</code><br><code>int main() { Dog d; d.name = \"Rex\"; d->bark(); }</code>" },
    ],
  },

  "w1-members": {
    badge: "Week 1 · Lesson 3", title: "Member Functions",
    intro: "Member functions define what objects <em>do</em>. They can be defined inside (inline) or outside the class using the scope resolution operator <code>::</code>.",
    next: "w1-encap",
    sections: [
      {
        title: "Inside vs Outside Definition", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Rectangle</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">double</span> width, height;

    <span class="cmt">// Defined INSIDE — inline</span>
    <span class="type">double</span> <span class="fn">area</span>() {
        <span class="kw">return</span> width <span class="op">*</span> height;
    }

    <span class="cmt">// Declared inside, defined OUTSIDE</span>
    <span class="type">double</span> <span class="fn">perimeter</span>();
};

<span class="cmt">// Outside — ClassName:: prefix required</span>
<span class="type">double</span> <span class="cls">Rectangle</span><span class="op">::</span><span class="fn">perimeter</span>() {
    <span class="kw">return</span> <span class="num">2</span> <span class="op">*</span> (width <span class="op">+</span> height);
}`,
        rules: [
          "Functions defined inside the class are inline — good for simple one-liners",
          "Functions defined outside use <code>ClassName::functionName()</code> — <code>::</code> is the scope resolution operator",
          "Declaration inside and definition outside must have identical signatures",
          "You cannot put a body both inside and outside",
        ]
      },
      {
        title: "Functions With Parameters", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">BankAccount</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">double</span> balance;

    <span class="type">void</span> <span class="fn">deposit</span>(<span class="type">double</span> amount) {
        balance <span class="op">+=</span> amount;
    }
    <span class="type">bool</span> <span class="fn">withdraw</span>(<span class="type">double</span> amount) {
        <span class="kw">if</span> (amount <span class="op">></span> balance) <span class="kw">return</span> <span class="kw">false</span>;
        balance <span class="op">-=</span> amount;
        <span class="kw">return</span> <span class="kw">true</span>;
    }
};`,
        rules: [
          "Parameters work exactly like regular C++ function parameters",
          "Member functions have direct access to all data members — no need to pass them as arguments",
          "A <code>bool</code> return lets the caller know if the operation succeeded",
        ]
      },
    ],
    tasks: [
      { title: "Outside Definition Practice", diff: "easy", text: "Create class <code>Circle</code> with <code>double radius</code>. Declare <code>double area()</code> and <code>double circumference()</code> inside, define both outside using <code>Circle::</code>. Use π = 3.14159." },
      { title: "BankAccount with Feedback", diff: "medium", text: "Add <code>void printBalance()</code> to BankAccount. In <code>main()</code>: deposit 500, try withdrawing 200 then 400. Print balance after each. Check the <code>bool</code> return and print 'Insufficient funds' if it fails." },
      { title: "Temperature Converter", diff: "medium", text: "Write class <code>Temperature</code> with <code>double celsius</code>. Add <code>double toFahrenheit()</code> (C × 9/5 + 32) and <code>double toKelvin()</code> (C + 273.15). Define both outside the class. Test with 0°C, 100°C, -40°C." },
    ],
  },

  "w1-encap": {
    badge: "Week 1 · Lesson 4", title: "Encapsulation, Getters & Setters",
    intro: "Encapsulation means making data <code>private</code> so it can only be accessed through controlled <code>public</code> getter and setter functions.",
    next: "w1-files",
    sections: [
      {
        title: "Access Specifiers", type: "cards", items: [
          { head: "public", text: "Accessible from anywhere — inside or outside the class. Used for functions that form the interface." },
          { head: "private", text: "Accessible only inside the class. Default for <code>class</code> keyword. Used to hide data members." },
        ]
      },
      {
        title: "Getters & Setters with Validation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Student</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="type">int</span>    grade;

<span class="kw">public</span><span class="op">:</span>
    <span class="cmt">// SETTER — validate before assigning</span>
    <span class="type">void</span> <span class="fn">setGrade</span>(<span class="type">int</span> g) {
        <span class="kw">if</span> (g <span class="op">>=</span> <span class="num">0</span> <span class="op">&&</span> g <span class="op"><=</span> <span class="num">100</span>)
            grade = g;
        <span class="kw">else</span>
            cout <span class="op"><<</span> <span class="str">"Invalid grade!\\n"</span>;
    }
    <span class="cmt">// GETTER — read-only, always const</span>
    <span class="type">int</span> <span class="fn">getGrade</span>() <span class="kw">const</span> { <span class="kw">return</span> grade; }
    <span class="type">void</span>   <span class="fn">setName</span>(<span class="type">string</span> n) { name = n; }
    <span class="type">string</span> <span class="fn">getName</span>() <span class="kw">const</span>  { <span class="kw">return</span> name; }
};`,
        rules: [
          "Setter naming: <code>setXxx(type param)</code> — always returns <code>void</code>",
          "Getter naming: <code>getXxx()</code> — returns the member's type, always marked <code>const</code>",
          "Setters <strong>must validate</strong> input — this is their entire purpose",
          "Direct access to a <code>private</code> member from outside the class is a compile error",
          "Getters are <code>const</code> because they don't modify the object",
        ]
      },
    ],
    tasks: [
      { title: "Encapsulate Temperature", diff: "easy", text: "Make <code>celsius</code> private in your Temperature class. Add <code>setCelsius(double c)</code> rejecting values below -273.15. Add <code>getCelsius()</code>. Try direct access in main — confirm the compile error." },
      { title: "Private BankAccount Balance", diff: "medium", text: "Make <code>balance</code> private. Add <code>getBalance() const</code>. Add <code>setBalance(double b)</code> accepting only values ≥ 0. Confirm the compile error when accessing directly, then fix it." },
      { title: "Employee Class", diff: "hard", text: "Class <code>Employee</code> with private <code>string name</code>, <code>double salary</code>, <code>int age</code>. Add validated setters (salary ≥ 0, age 16–70) and const getters. Test all validation cases." },
    ],
  },

  "w1-files": {
    badge: "Week 1 · Lesson 5", title: "Header & Source Files",
    intro: "In professional C++, classes are split: a <strong>.h header</strong> for declarations, and a <strong>.cpp source</strong> for definitions.",
    next: "quiz1",
    sections: [
      {
        title: "Student.h — Header (Interface)", type: "code", lang: "Student.h",
        code: `<span class="cmt">// Student.h</span>
<span class="kw">#ifndef</span> STUDENT_H
<span class="kw">#define</span> STUDENT_H

<span class="kw">#include</span> <span class="str">&lt;string&gt;</span>
<span class="kw">using namespace</span> std;

<span class="kw">class</span> <span class="cls">Student</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="type">int</span>    grade;
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span>   <span class="fn">setName</span>(<span class="type">string</span> n);
    <span class="type">string</span> <span class="fn">getName</span>() <span class="kw">const</span>;
    <span class="type">void</span>   <span class="fn">setGrade</span>(<span class="type">int</span> g);
    <span class="type">int</span>    <span class="fn">getGrade</span>() <span class="kw">const</span>;
};

<span class="kw">#endif</span>`,
        rules: [
          "<code>#ifndef / #define / #endif</code> — the include guard — is mandatory in every .h file",
          "Guard name must be ALL_CAPS matching the filename: <code>STUDENT_H</code> for <code>Student.h</code>",
          "Header contains only <strong>declarations</strong> — no function bodies",
          "<code>#include &lt;...&gt;</code> for system headers; <code>#include \"...\"</code> for your own",
        ]
      },
      {
        title: "Student.cpp — Source (Implementation)", type: "code", lang: "Student.cpp",
        code: `<span class="cmt">// Student.cpp</span>
<span class="kw">#include</span> <span class="str">"Student.h"</span>
<span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>

<span class="type">void</span> <span class="cls">Student</span><span class="op">::</span><span class="fn">setName</span>(<span class="type">string</span> n)  { name = n; }
<span class="type">string</span> <span class="cls">Student</span><span class="op">::</span><span class="fn">getName</span>() <span class="kw">const</span> { <span class="kw">return</span> name; }

<span class="type">void</span> <span class="cls">Student</span><span class="op">::</span><span class="fn">setGrade</span>(<span class="type">int</span> g) {
    grade = (g <span class="op">>=</span> <span class="num">0</span> <span class="op">&&</span> g <span class="op"><=</span> <span class="num">100</span>) ? g : <span class="num">0</span>;
}
<span class="type">int</span> <span class="cls">Student</span><span class="op">::</span><span class="fn">getGrade</span>() <span class="kw">const</span> { <span class="kw">return</span> grade; }`,
        rules: [
          "Always <code>#include \"ClassName.h\"</code> at the top of the .cpp",
          "Use <code>ClassName::</code> prefix before every function name",
          "Every function declared in the .h must be defined in the .cpp",
          "The .cpp does NOT need an include guard",
        ]
      },
    ],
    tasks: [
      { title: "Split Rectangle into Files", diff: "easy", text: "Split your <code>Rectangle</code> class into <code>Rectangle.h</code> and <code>Rectangle.cpp</code>. Create <code>main.cpp</code> that includes it. Compile: <code>g++ main.cpp Rectangle.cpp -o app</code>" },
      { title: "Include Guard Test", diff: "medium", text: "Write <code>#include \"Rectangle.h\"</code> twice in <code>main.cpp</code>. Verify the include guard prevents an error. Then remove the guard and observe the redefinition error." },
      { title: "Full 3-File Project", diff: "hard", text: "Build a complete 3-file project for your <code>Employee</code> class: <code>Employee.h</code> (declarations + guard), <code>Employee.cpp</code> (all definitions with <code>Employee::</code>), <code>main.cpp</code> (creates 2 employees, prints them). Compile and run." },
    ],
  },

  "w2-scope": {
    badge: "Week 2 · Lesson 1", title: "Class Scope & Access Functions",
    intro: "All class members exist in <em>class scope</em>. Inside any member function you can access all data members directly by name.",
    next: "w2-ctor",
    sections: [
      {
        title: "this Pointer & Name Conflicts", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Circle</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">double</span> radius;
<span class="kw">public</span><span class="op">:</span>
    <span class="type">double</span> <span class="fn">area</span>() {
        <span class="kw">return</span> <span class="num">3.14159</span> <span class="op">*</span> radius <span class="op">*</span> radius; <span class="cmt">// direct access</span>
    }
    <span class="type">void</span> <span class="fn">setRadius</span>(<span class="type">double</span> radius) {
        <span class="cmt">// param and member share name — use this-></span>
        <span class="kw">this</span><span class="op">-></span>radius = radius;
    }
};`,
        rules: [
          "Inside a member function, data members are accessed directly by name",
          "When a parameter and member share the same name, use <code>this->member</code>",
          "<code>this</code> is a pointer to the current object — always available in non-static functions",
          "Class scope is separate from local/global scope",
        ]
      },
      {
        title: "Access vs Utility Functions", type: "cards", items: [
          { head: "Access Functions", text: "Public getters and setters — the class's interface to outside code." },
          { head: "Utility Functions", text: "Private helpers called internally. Never exposed outside the class." },
        ]
      },
      {
        title: "Utility Function Example", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Payment</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">double</span> amount;
    <span class="type">bool</span> <span class="fn">isValid</span>(<span class="type">double</span> a) {     <span class="cmt">// private utility</span>
        <span class="kw">return</span> a <span class="op">></span> <span class="num">0</span> <span class="op">&&</span> a <span class="op"><</span> <span class="num">10000</span>;
    }
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">setAmount</span>(<span class="type">double</span> a) {    <span class="cmt">// public access</span>
        <span class="kw">if</span> (<span class="fn">isValid</span>(a)) amount = a;
    }
    <span class="type">double</span> <span class="fn">getAmount</span>() <span class="kw">const</span> { <span class="kw">return</span> amount; }
};`,
        rules: [
          "A public function can freely call a private utility function",
          "Breaking validation into a utility keeps setters clean and reusable",
        ]
      },
    ],
    tasks: [
      { title: "Use this Pointer", diff: "easy", text: "Write class <code>Point</code> with private <code>int x, y</code>. Constructor <code>Point(int x, int y)</code> where params match member names. Use <code>this->x = x</code>. Add <code>print()</code>." },
      { title: "Add a Utility Function", diff: "medium", text: "Add private <code>bool isValidRadius(double r)</code> to your <code>Circle</code> class (returns true if r > 0). Use it inside <code>setRadius()</code>. Test with a negative radius." },
      { title: "Login Class", diff: "hard", text: "Create <code>UserLogin</code> with private <code>string username, password</code>. Private utility <code>bool isStrongPassword(string p)</code> checks length ≥ 8. Public <code>bool login(string u, string p)</code> returns true only if both match." },
    ],
  },

  "w2-ctor": {
    badge: "Week 2 · Lesson 2", title: "Constructors & Destructors",
    intro: "Constructors run automatically when an object is created. Destructors run when it is destroyed. Neither has a return type.",
    next: "w2-const",
    sections: [
      {
        title: "Constructor Types & Destructor", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Person</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="type">int</span>    age;
<span class="kw">public</span><span class="op">:</span>
    <span class="cmt">// 1. Default constructor</span>
    <span class="cls">Person</span>() : name(<span class="str">"Unknown"</span>), age(<span class="num">0</span>) {
        cout <span class="op"><<</span> <span class="str">"Person created\\n"</span>;
    }
    <span class="cmt">// 2. Parameterized constructor</span>
    <span class="cls">Person</span>(<span class="type">string</span> n, <span class="type">int</span> a) : name(n), age(a) {
        cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">" created\\n"</span>;
    }
    <span class="cmt">// 3. Destructor — ~ prefix, no params</span>
    <span class="op">~</span><span class="cls">Person</span>() { cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">" destroyed\\n"</span>; }
    <span class="type">void</span> <span class="fn">print</span>() <span class="kw">const</span> {
        cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">", age "</span> <span class="op"><<</span> age <span class="op"><<</span> <span class="str">"\\n"</span>;
    }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Person</span> p1;               <span class="cmt">// → Person created</span>
    <span class="cls">Person</span> p2(<span class="str">"Alice"</span>, <span class="num">30</span>); <span class="cmt">// → Alice created</span>
    p2.<span class="fn">print</span>();              <span class="cmt">// Alice, age 30</span>
} <span class="cmt">// → Alice destroyed, Unknown destroyed</span>`,
        rules: [
          "Constructor name = class name exactly. No return type — not even <code>void</code>",
          "Destructor: <code>~ClassName()</code> — no parameters, no return type, only one per class",
          "Constructors can be overloaded; the destructor cannot",
          "If you define any constructor, the compiler's auto-generated default disappears",
        ]
      },
      {
        title: "Member Initializer List", type: "code", lang: "C++",
        code: `<span class="cmt">// Preferred — runs before the body</span>
<span class="cls">Person</span>(<span class="type">string</span> n, <span class="type">int</span> a) <span class="op">:</span> name(n), age(a) { }

<span class="cmt">// REQUIRED for const members:</span>
<span class="kw">class</span> <span class="cls">Config</span> {
    <span class="kw">const</span> <span class="type">int</span> MAX;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Config</span>(<span class="type">int</span> m) <span class="op">:</span> MAX(m) {} <span class="cmt">// only valid way</span>
};`,
        rules: [
          "Syntax: <code>ClassName(params) : member1(val1), member2(val2) { }</code>",
          "Initializer list runs <em>before</em> the constructor body — prefer it over body assignment",
          "<strong>Required</strong> for <code>const</code> members and references — they can't be assigned after construction",
          "Members initialize in their declaration order in the class, not the list order",
        ]
      },
    ],
    tasks: [
      { title: "Observe Construction/Destruction Order", diff: "easy", text: "Create class <code>Obj</code> with a <code>string label</code>. Print 'created [label]' in constructor, 'destroyed [label]' in destructor. Create 3 objects with different labels and observe the order." },
      { title: "Overloaded Constructors", diff: "medium", text: "Add two constructors to <code>BankAccount</code>: a default setting balance to 0, and a parameterized one taking an initial balance. Create one account each way and confirm correct initialization." },
      { title: "Const Member with Initializer List", diff: "hard", text: "Write class <code>Circle</code> with <code>const double PI</code> and <code>double radius</code>. Use the initializer list to set both. Try assigning PI in the constructor body — observe the compile error, then fix it." },
    ],
  },

  "w2-const": {
    badge: "Week 2 · Lesson 3", title: "Const Objects & Composition",
    intro: "Const member functions guarantee they won't modify the object. Composition means a class contains another class as a data member.",
    next: "w2-friends",
    sections: [
      {
        title: "Constant Member Functions", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Temperature</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">double</span> celsius;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Temperature</span>(<span class="type">double</span> c) <span class="op">:</span> celsius(c) {}

    <span class="type">double</span> <span class="fn">toFahrenheit</span>() <span class="kw">const</span> { <span class="cmt">// read-only</span>
        <span class="kw">return</span> celsius <span class="op">*</span> <span class="num">9.0</span> <span class="op">/</span> <span class="num">5.0</span> <span class="op">+</span> <span class="num">32</span>;
    }
    <span class="type">void</span> <span class="fn">setTemp</span>(<span class="type">double</span> c) { celsius = c; }
};

<span class="kw">const</span> <span class="cls">Temperature</span> freezing(<span class="num">0.0</span>);
<span class="cmt">// freezing.setTemp(5);     ← COMPILE ERROR</span>
cout <span class="op"><<</span> freezing.<span class="fn">toFahrenheit</span>(); <span class="cmt">// OK — const function</span>`,
        rules: [
          "<code>const</code> goes after the closing parenthesis: <code>returnType name() const { }</code>",
          "A const function can read all members but cannot modify any",
          "A const object can only call const member functions",
          "All getters should always be marked <code>const</code>",
        ]
      },
      {
        title: "Composition — 'Has-A'", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Date</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">int</span> day, month, year;
    <span class="cls">Date</span>(<span class="type">int</span> d, <span class="type">int</span> m, <span class="type">int</span> y) : day(d), month(m), year(y) {}
    <span class="type">void</span> <span class="fn">print</span>() <span class="kw">const</span> {
        cout <span class="op"><<</span> day <span class="op"><<</span> <span class="str">"/"</span> <span class="op"><<</span> month <span class="op"><<</span> <span class="str">"/"</span> <span class="op"><<</span> year;
    }
};
<span class="kw">class</span> <span class="cls">Employee</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="cls">Date</span>   birthDate; <span class="cmt">// composed Date object</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Employee</span>(<span class="type">string</span> n, <span class="cls">Date</span> d) : name(n), birthDate(d) {}
    <span class="type">void</span> <span class="fn">print</span>() <span class="kw">const</span> {
        cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">", born: "</span>; birthDate.<span class="fn">print</span>();
    }
};`,
        rules: [
          "Composition = one class has another class as a data member ('has-a' relationship)",
          "The inner object's constructor is called via the initializer list before the outer body",
          "The inner object is destroyed after the outer object's destructor runs",
          "Differs from inheritance ('is-a') — prefer composition when the relationship is 'has-a'",
        ]
      },
    ],
    tasks: [
      { title: "Const Object Test", diff: "easy", text: "Create a <code>const Rectangle r(4.0, 5.0)</code>. Try calling a non-const member on it — see the compile error. Add <code>const</code> to all getters/read functions and confirm they work on const objects." },
      { title: "Address Composition", diff: "medium", text: "Create class <code>Address</code> with <code>string street, city, country</code>. Create class <code>Person</code> with an <code>Address</code> as a private member. Pass the address via constructor using the initializer list. Print full info." },
      { title: "Order Book", diff: "hard", text: "Create class <code>Product</code> with <code>string name</code> and <code>double price</code>. Create class <code>Order</code> with a <code>Product</code> and <code>int quantity</code>. Add <code>double total() const</code> returning price × quantity. Test with a few orders." },
    ],
  },

  "w2-friends": {
    badge: "Week 2 · Lesson 4", title: "friend, Pointers & Dynamic Memory",
    intro: "friend grants a non-member function access to private members. Dynamic memory is heap allocation with <code>new</code> and <code>delete</code>.",
    next: "w2-static",
    sections: [
      {
        title: "friend Functions", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Box</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">double</span> volume;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Box</span>(<span class="type">double</span> v) <span class="op">:</span> volume(v) {}
    <span class="kw">friend</span> <span class="type">void</span> <span class="fn">printVolume</span>(<span class="cls">Box</span> b); <span class="cmt">// declared friend</span>
};

<span class="cmt">// Defined outside — no Box:: prefix!</span>
<span class="type">void</span> <span class="fn">printVolume</span>(<span class="cls">Box</span> b) {
    cout <span class="op"><<</span> b.volume; <span class="cmt">// accesses private — allowed</span>
}`,
        rules: [
          "Declared inside the class with <code>friend</code>, defined outside as a regular function (no <code>::</code>)",
          "A friend is <strong>not</strong> a member — it has no <code>this</code> pointer",
          "Friendship is one-directional and not inherited",
          "Use sparingly — prefer getters when possible",
        ]
      },
      {
        title: "Pointers & Arrow Operator", type: "code", lang: "C++",
        code: `<span class="cls">Student</span> s;
s.<span class="fn">setName</span>(<span class="str">"Ali"</span>);

<span class="cls">Student</span><span class="op">*</span> ptr = <span class="op">&</span>s;       <span class="cmt">// pointer to existing object</span>
ptr<span class="op">-></span><span class="fn">setGrade</span>(<span class="num">95</span>);      <span class="cmt">// -> for pointer access</span>
cout <span class="op"><<</span> ptr<span class="op">-></span><span class="fn">getGrade</span>();  <span class="cmt">// 95</span>
<span class="cmt">// ptr->x  ≡  (*ptr).x</span>`,
        rules: [
          "Use dot <code>.</code> for objects; use arrow <code>-></code> for pointers to objects",
          "<code>ptr->member</code> is exactly equivalent to <code>(*ptr).member</code>",
          "Mixing them up is a compile error",
        ]
      },
      {
        title: "Dynamic Memory: new & delete", type: "code", lang: "C++",
        code: `<span class="cmt">// Allocate single object on the HEAP</span>
<span class="cls">Student</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">Student</span>();
p<span class="op">-></span><span class="fn">setName</span>(<span class="str">"Bob"</span>);

<span class="kw">delete</span> p;      <span class="cmt">// MUST free! destructor called here</span>
p = <span class="kw">nullptr</span>;   <span class="cmt">// prevent dangling pointer</span>

<span class="cmt">// Allocate array of objects</span>
<span class="cls">Student</span><span class="op">*</span> arr = <span class="kw">new</span> <span class="cls">Student</span>[<span class="num">5</span>];
<span class="kw">delete</span>[] arr;  <span class="cmt">// use delete[] for arrays!</span>`,
        rules: [
          "Every <code>new</code> → matching <code>delete</code>. Every <code>new[]</code> → matching <code>delete[]</code>",
          "Using plain <code>delete</code> on a <code>new[]</code> array is undefined behavior",
          "After deleting, set the pointer to <code>nullptr</code> to avoid dangling pointer bugs",
          "Forgetting <code>delete</code> causes a memory leak",
        ]
      },
    ],
    tasks: [
      { title: "Arrow vs Dot", diff: "easy", text: "Create a <code>Car</code> object on the stack. Create a pointer to it. Access the same member using both <code>.</code> and <code>-></code> notation. Confirm they produce the same result." },
      { title: "Dynamic Single Object", diff: "medium", text: "Dynamically allocate a <code>Student</code> object with <code>new</code>. Set name and grade. Print them. Then <code>delete</code> it. Add a print in the destructor to confirm it's called at deletion." },
      { title: "Dynamic Array of Objects", diff: "hard", text: "Allocate an array of 3 <code>Student</code> objects. Loop through, use setters to assign names and grades, then loop again to print them. Free correctly with <code>delete[]</code>." },
    ],
  },

  "w2-static": {
    badge: "Week 2 · Lesson 5", title: "Static Data Members & Functions",
    intro: "Static members belong to the <em>class itself</em>, not to any single object. They are shared across all instances.",
    next: "quiz2",
    sections: [
      {
        title: "Static Object Counter", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Widget</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="kw">static</span> <span class="type">int</span> count; <span class="cmt">// shared by ALL Widget objects</span>
    <span class="type">int</span> id;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Widget</span>() { id = ++count; }
    <span class="op">~</span><span class="cls">Widget</span>() { --count; }
    <span class="kw">static</span> <span class="type">int</span> <span class="fn">getCount</span>() { <span class="kw">return</span> count; }
    <span class="type">int</span> <span class="fn">getId</span>() <span class="kw">const</span> { <span class="kw">return</span> id; }
};

<span class="cmt">// MUST define static outside the class:</span>
<span class="type">int</span> <span class="cls">Widget</span><span class="op">::</span>count = <span class="num">0</span>;

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Widget</span> a, b, c;
    cout <span class="op"><<</span> <span class="cls">Widget</span><span class="op">::</span><span class="fn">getCount</span>(); <span class="cmt">// 3</span>
    cout <span class="op"><<</span> a.<span class="fn">getId</span>();          <span class="cmt">// 1</span>
}`,
        rules: [
          "Static data members must be <strong>defined outside the class</strong>: <code>int ClassName::member = 0;</code>",
          "Static member functions can only access other static members — they have no <code>this</code> pointer",
          "Call static functions using <code>ClassName::function()</code> (preferred)",
          "All objects share the same copy of a static member",
          "Static members exist even if zero objects have been created",
        ]
      },
    ],
    tasks: [
      { title: "Instance Counter", diff: "easy", text: "Create class <code>Car</code> with static <code>int totalCars</code>. Increment in constructor, decrement in destructor. Add static <code>getTotal()</code>. Create and destroy objects in different scopes and watch the count change." },
      { title: "Static Config / Shared Tax Rate", diff: "medium", text: "Add <code>static double taxRate</code> to <code>BankAccount</code>. Initialize outside to 0.15. Add static setter/getter. Add <code>double calculateTax()</code> using the shared rate. Verify that changing the rate affects all accounts." },
      { title: "ID Generator", diff: "hard", text: "Create class <code>Ticket</code> with static <code>int nextId</code> starting at 1000. Each new Ticket gets the next ID automatically via the constructor. Add static <code>int peekNextId()</code>. Create 5 tickets and confirm IDs are 1000–1004." },
    ],
  },

  "w3-op": {
    badge: "Week 3–4 · Lesson 1", title: "Operator Overloading",
    intro: "Operator overloading lets you define what operators like <code>+</code>, <code>==</code>, <code>[]</code> mean for your custom classes.",
    next: "w3-stream",
    sections: [
      {
        title: "Member Function Overloading", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Vector2D</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">double</span> x, y;
    <span class="cls">Vector2D</span>(<span class="type">double</span> x, <span class="type">double</span> y) <span class="op">:</span> x(x), y(y) {}

    <span class="cmt">// left operand = this (implicit)</span>
    <span class="cls">Vector2D</span> <span class="kw">operator</span><span class="op">+</span>(<span class="kw">const</span> <span class="cls">Vector2D</span><span class="op">&</span> rhs) <span class="kw">const</span> {
        <span class="kw">return</span> <span class="cls">Vector2D</span>(x <span class="op">+</span> rhs.x, y <span class="op">+</span> rhs.y);
    }
    <span class="type">bool</span> <span class="kw">operator</span><span class="op">==</span>(<span class="kw">const</span> <span class="cls">Vector2D</span><span class="op">&</span> rhs) <span class="kw">const</span> {
        <span class="kw">return</span> x == rhs.x <span class="op">&&</span> y == rhs.y;
    }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Vector2D</span> a(<span class="num">1</span>,<span class="num">2</span>), b(<span class="num">3</span>,<span class="num">4</span>);
    <span class="cls">Vector2D</span> c = a <span class="op">+</span> b;   <span class="cmt">// c.x=4, c.y=6</span>
    cout <span class="op"><<</span> (a <span class="op">==</span> b);    <span class="cmt">// 0 (false)</span>
}`,
        rules: [
          "Syntax: <code>ReturnType operator@(params) const { }</code>",
          "As a member function, the left operand is the implicit <code>this</code>",
          "Take the right operand by <code>const</code> reference: <code>const ClassName&</code>",
          "Cannot change operator precedence, associativity, or arity",
          "Cannot overload: <code>::</code>  <code>.</code>  <code>.*</code>  <code>?:</code>",
        ]
      },
    ],
    tasks: [
      { title: "Fraction Class — + and ==", diff: "medium", text: "Create class <code>Fraction</code> with <code>int numerator, denominator</code>. Overload <code>+</code> (a/b + c/d = (a*d + b*c)/(b*d)). Overload <code>==</code> (cross-multiply). Test both." },
      { title: "Money Class — + and -", diff: "medium", text: "Create class <code>Money</code> with <code>double amount</code>. Overload <code>+</code> and <code>-</code> as member functions. Also overload a version where the right side is a plain <code>double</code>." },
      { title: "Matrix 2x2 Multiply", diff: "hard", text: "Create class <code>Matrix2</code> storing a 2×2 grid as 4 doubles (a,b,c,d). Overload <code>*</code> for matrix multiplication. Overload <code>==</code>. Test by multiplying the identity matrix with another matrix." },
    ],
  },

  "w3-stream": {
    badge: "Week 3–4 · Lesson 2", title: "Stream Operators << and >>",
    intro: "Overloading these lets you use <code>cout &lt;&lt;</code> and <code>cin &gt;&gt;</code> directly with your own objects.",
    next: "w3-unary",
    sections: [
      {
        title: "Implementation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Point</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">int</span> x, y;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Point</span>(<span class="type">int</span> x, <span class="type">int</span> y) <span class="op">:</span> x(x), y(y) {}
    <span class="kw">friend</span> ostream<span class="op">&</span> <span class="kw">operator</span><span class="op"><<</span>(ostream<span class="op">&</span> out, <span class="kw">const</span> <span class="cls">Point</span><span class="op">&</span> p);
    <span class="kw">friend</span> istream<span class="op">&</span> <span class="kw">operator</span><span class="op">>></span>(istream<span class="op">&</span> in,  <span class="cls">Point</span><span class="op">&</span> p);
};

ostream<span class="op">&</span> <span class="kw">operator</span><span class="op"><<</span>(ostream<span class="op">&</span> out, <span class="kw">const</span> <span class="cls">Point</span><span class="op">&</span> p) {
    out <span class="op"><<</span> <span class="str">"("</span> <span class="op"><<</span> p.x <span class="op"><<</span> <span class="str">", "</span> <span class="op"><<</span> p.y <span class="op"><<</span> <span class="str">")"</span>;
    <span class="kw">return</span> out; <span class="cmt">// enables: cout << p1 << p2</span>
}
istream<span class="op">&</span> <span class="kw">operator</span><span class="op">>></span>(istream<span class="op">&</span> in, <span class="cls">Point</span><span class="op">&</span> p) {
    in <span class="op">>></span> p.x <span class="op">>></span> p.y;
    <span class="kw">return</span> in;
}`,
        rules: [
          "Always a <strong>non-member</strong> (global) function — the left operand is a stream, not your class",
          "Take the stream by <strong>reference</strong> (<code>ostream&</code>) — streams cannot be copied",
          "Must <strong>return the stream by reference</strong> to enable chaining: <code>cout &lt;&lt; a &lt;&lt; b</code>",
          "The object for <code>&lt;&lt;</code> is <code>const ClassName&</code>; for <code>&gt;&gt;</code> it's plain <code>ClassName&</code> (will be modified)",
          "Declare as <code>friend</code> inside the class to access private members",
        ]
      },
    ],
    tasks: [
      { title: "Student Stream Output", diff: "easy", text: "Add <code>operator&lt;&lt;</code> to your <code>Student</code> class so <code>cout &lt;&lt; student</code> works. Output format: <code>Student[name, grade: 88]</code>. Test chaining: <code>cout &lt;&lt; s1 &lt;&lt; \" and \" &lt;&lt; s2</code>." },
      { title: "Both << and >>", diff: "medium", text: "Add both operators to your <code>Fraction</code> class. Output format: <code>3/4</code>. Input: user types <code>3/4</code>, operator reads numerator, slash, denominator. Test a round-trip: read then print." },
      { title: "BankAccount Statement", diff: "hard", text: "Overload <code>operator&lt;&lt;</code> for <code>BankAccount</code> to print: <code>Account[owner: Alice | balance: $1500.00]</code>. Use <code>setprecision(2)</code> and <code>fixed</code>. Print an array of 3 accounts in a loop." },
    ],
  },

  "w3-unary": {
    badge: "Week 3–4 · Lesson 3", title: "Unary Operator Overloading",
    intro: "Unary operators act on a single operand: <code>-</code>, <code>!</code>, <code>++</code>, <code>--</code>.",
    next: "quiz3",
    sections: [
      {
        title: "Prefix vs Postfix ++ / --", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Counter</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">int</span> val;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Counter</span>(<span class="type">int</span> v = <span class="num">0</span>) <span class="op">:</span> val(v) {}

    <span class="cmt">// Prefix ++c — no dummy param, return reference</span>
    <span class="cls">Counter</span><span class="op">&</span> <span class="kw">operator</span><span class="op">++</span>() {
        <span class="op">++</span>val;
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="cmt">// Postfix c++ — dummy int, return copy of old value</span>
    <span class="cls">Counter</span> <span class="kw">operator</span><span class="op">++</span>(<span class="type">int</span>) {
        <span class="cls">Counter</span> old = <span class="op">*</span><span class="kw">this</span>; <span class="cmt">// save copy</span>
        <span class="op">++</span>val;
        <span class="kw">return</span> old;          <span class="cmt">// return old</span>
    }
    <span class="cmt">// Unary minus</span>
    <span class="cls">Counter</span> <span class="kw">operator</span><span class="op">-</span>() <span class="kw">const</span> { <span class="kw">return</span> <span class="cls">Counter</span>(<span class="op">-</span>val); }

    <span class="type">int</span> <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> val; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Counter</span> c(<span class="num">5</span>);
    cout <span class="op"><<</span> (++c).<span class="fn">get</span>(); <span class="cmt">// 6  — prefix: new value</span>
    cout <span class="op"><<</span> (c++).<span class="fn">get</span>(); <span class="cmt">// 6  — postfix: old value</span>
    cout <span class="op"><<</span> c.<span class="fn">get</span>();     <span class="cmt">// 7  — now incremented</span>
    cout <span class="op"><<</span> (-c).<span class="fn">get</span>(); <span class="cmt">// -7</span>
}`,
        rules: [
          "<strong>Prefix</strong> <code>operator++()</code>: no params, increments then returns <code>*this</code> by reference",
          "<strong>Postfix</strong> <code>operator++(int)</code>: dummy <code>int</code> distinguishes it — save old, increment, return old copy",
          "Prefix is more efficient — no copy needed. Prefer <code>++x</code> over <code>x++</code> in loops",
          "Unary minus: const function, returns a new object with negated value",
          "The dummy <code>int</code> in postfix is a C++ convention — you never pass a value for it",
        ]
      },
    ],
    tasks: [
      { title: "Verify Prefix vs Postfix", diff: "easy", text: "Copy the Counter example exactly and run it. Then implement both <code>--c</code> (prefix decrement) and <code>c--</code> (postfix decrement). Predict the output before running each." },
      { title: "Vector Negate & Zero Check", diff: "medium", text: "Add unary <code>operator-</code> to <code>Vector2D</code> so <code>-v</code> negates both components. Add <code>bool operator!</code> returning true if both x and y are zero. Test both." },
      { title: "Complete Fraction Operators", diff: "hard", text: "Extend <code>Fraction</code> with: unary <code>-</code> (negate), prefix <code>++</code> (adds 1/1), and <code>bool operator!</code> (true if numerator is 0). Combine with earlier <code>+</code>, <code>==</code>, <code>&lt;&lt;</code> operators and test them all together." },
    ],
  },

  // ── QUIZ PAGES ──────────────────────────────────────────────
  quiz1: {
    badge: "Quiz 1", title: "Classes: Part 1 Test",
    intro: "OOP fundamentals, class syntax, member functions, encapsulation, header files.",
    type: "quiz", quizId: "1", next: "w2-scope",
    questions: [
      {
        id: "q1-1", type: "mc", num: "Q1", text: "Which access specifier makes data members accessible only from within the class?",
        opts: ["public", "private", "protected", "internal"], answer: "B",
        ok: "✓ Correct! <code>private</code> restricts access to inside the class only. <code>internal</code> is not a C++ keyword.",
        no: "✗ Answer: <strong>private</strong>. <code>public</code> is accessible from anywhere. <code>internal</code> doesn't exist in C++."
      },
      {
        id: "q1-2", type: "output", num: "Q2", text: "What does this program output?",
        code: `<span class="kw">class</span> <span class="cls">Box</span> {
<span class="kw">public</span>:
    <span class="type">int</span> x = <span class="num">5</span>;
    <span class="type">void</span> <span class="fn">show</span>() { cout &lt;&lt; x * <span class="num">2</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Box</span> a, b;
    b.x = <span class="num">10</span>;
    a.<span class="fn">show</span>(); cout &lt;&lt; <span class="str">" "</span>; b.<span class="fn">show</span>();
}`,
        opts: ["10 10", "10 20", "5 10", "20 20"], answer: "B",
        ok: "✓ Correct! a.x=5 → 5×2=10. b.x=10 → 10×2=20. Objects are independent.",
        no: "✗ Answer: <strong>10 20</strong>. Object a keeps default x=5 (×2=10). b.x was set to 10 (×2=20)."
      },
      {
        id: "q1-3", type: "mc", num: "Q3", text: "What is wrong with this setter?",
        code: `<span class="type">void</span> <span class="fn">setAge</span>(<span class="type">int</span> a) {
    age = a;
}`,
        opts: ["The parameter name should match the member name", "It should return int, not void", "No input validation — bad values accepted silently", "Nothing is wrong"], answer: "C",
        ok: "✓ Correct! A setter's main purpose is validation. Without it, setAge(-5) silently corrupts data.",
        no: "✗ Answer: <strong>C</strong>. Setters must validate — that's their entire purpose over direct assignment."
      },
      {
        id: "q1-4", type: "output", num: "Q4", text: "What is the output?",
        code: `<span class="kw">class</span> <span class="cls">Counter</span> {
<span class="kw">private</span>: <span class="type">int</span> count = <span class="num">0</span>;
<span class="kw">public</span>:
    <span class="type">void</span> <span class="fn">inc</span>() { count++; }
    <span class="type">int</span>  <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> count; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Counter</span> c;
    c.<span class="fn">inc</span>(); c.<span class="fn">inc</span>(); c.<span class="fn">inc</span>();
    cout &lt;&lt; c.<span class="fn">get</span>();
}`,
        opts: ["0", "1", "3", "Compile error — count is private"], answer: "C",
        ok: "✓ Correct! Public functions legally access private members. inc() called 3 times → count = 3.",
        no: "✗ Answer: <strong>3</strong>. Public functions legally access private members. 3 increments → count = 3."
      },
      {
        id: "q1-5", type: "mc", num: "Q5", text: "When defining a member function outside the class, which syntax is correct?",
        opts: ["void Student.setName(string n) { ... }", "void Student::setName(string n) { ... }", "Student void setName(string n) { ... }", "void setName(Student, string n) { ... }"], answer: "B",
        ok: "✓ Correct! Use ClassName:: — the scope resolution operator links the function to its class.",
        no: "✗ Answer: <strong>B</strong>. The :: scope resolution operator is required. The dot . is for object access, not definitions."
      },
      {
        id: "q1-6", type: "mc", num: "Q6", text: "What is the purpose of an include guard (#ifndef / #define / #endif)?",
        opts: ["To make the class compile faster", "To prevent the class from being used externally", "To prevent the header from being included more than once", "To define constants inside the class"], answer: "C",
        ok: "✓ Correct! Without a guard, including a header twice causes 'already defined' compile errors.",
        no: "✗ Answer: <strong>C</strong>. Double inclusion causes redefinition errors. The guard skips re-processing if the macro is already defined."
      },
    ],
  },

  quiz2: {
    badge: "Quiz 2", title: "Classes: Part 2 Test",
    intro: "Constructors, const, composition, friends, pointers, dynamic memory, static members.",
    type: "quiz", quizId: "2", next: "w3-op",
    questions: [
      {
        id: "q2-1", type: "output", num: "Q1", text: "What is printed?",
        code: `<span class="kw">class</span> <span class="cls">A</span> {
<span class="kw">public</span>:
    <span class="cls">A</span>()  { cout &lt;&lt; <span class="str">"born "</span>; }
    ~<span class="cls">A</span>() { cout &lt;&lt; <span class="str">"dead "</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">A</span> x;
    cout &lt;&lt; <span class="str">"alive "</span>;
}`,
        opts: ["alive born dead", "born alive dead", "born dead alive", "alive dead born"], answer: "B",
        ok: "✓ Correct! Constructor fires at creation → 'born'. Then 'alive'. Destructor fires when x goes out of scope → 'dead'.",
        no: "✗ Answer: <strong>born alive dead</strong>. Constructor runs at creation, code runs, destructor runs when block ends."
      },
      {
        id: "q2-2", type: "mc", num: "Q2", text: "Which statement about const member functions is TRUE?",
        opts: ["They cannot access any data members", "They can modify private but not public data", "They can read but not modify any data members", "They must return const values only"], answer: "C",
        ok: "✓ Correct! A const function has full read access to all members but cannot modify any.",
        no: "✗ Answer: <strong>C</strong>. Const functions read freely but cannot modify anything."
      },
      {
        id: "q2-3", type: "mc", num: "Q3", text: "When accessing a class member through a pointer, you use:",
        opts: ["The dot operator .", "The arrow operator ->", "The scope operator ::", "Either . or ->"], answer: "B",
        ok: "✓ Correct! Use -> for pointers. ptr->method() equals (*ptr).method().",
        no: "✗ Answer: <strong>B</strong>. Pointers require ->. Regular objects use .. They cannot be swapped."
      },
      {
        id: "q2-4", type: "output", num: "Q4", text: "What does this print?",
        code: `<span class="kw">class</span> <span class="cls">C</span> {
    <span class="kw">static</span> <span class="type">int</span> n;
<span class="kw">public</span>:
    <span class="cls">C</span>() { n++; }
    <span class="kw">static</span> <span class="type">int</span> <span class="fn">get</span>() { <span class="kw">return</span> n; }
};
<span class="type">int</span> <span class="cls">C</span>::n = <span class="num">0</span>;
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">C</span> a, b;
    <span class="cls">C</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">C</span>();
    cout &lt;&lt; <span class="cls">C</span>::<span class="fn">get</span>();
    <span class="kw">delete</span> p;
}`,
        opts: ["0", "2", "3", "Compile error"], answer: "C",
        ok: "✓ Correct! Three constructor calls (a, b, heap object) increment the shared static n to 3.",
        no: "✗ Answer: <strong>3</strong>. a, b, and the new object each call the constructor, incrementing the shared static n."
      },
      {
        id: "q2-5", type: "mc", num: "Q5", text: "When a class contains another class as a data member, this is called:",
        opts: ["Inheritance — an 'is-a' relationship", "Composition — a 'has-a' relationship", "Encapsulation — a 'hides-a' relationship", "Aggregation — a 'uses-a' relationship"], answer: "B",
        ok: "✓ Correct! Composition = 'has-a'. A Car 'has-a' Engine. An Employee 'has-a' BirthDate.",
        no: "✗ Answer: <strong>B</strong>. Composition is 'has-a'. Inheritance is 'is-a'."
      },
      {
        id: "q2-6", type: "mc", num: "Q6", text: "You allocate new Student[10]. How must you free it?",
        opts: ["delete ptr;", "free(ptr);", "delete[] ptr;", "It's freed automatically"], answer: "C",
        ok: "✓ Correct! Arrays allocated with new[] must be freed with delete[]. Plain delete causes undefined behavior.",
        no: "✗ Answer: <strong>C</strong>. Use delete[] for arrays. free() is C-style. Plain delete on an array is undefined behavior."
      },
    ],
  },

  quiz3: {
    badge: "Final Quiz", title: "Operator Overloading Test",
    intro: "Covers all operator overloading: binary, stream, and unary operators.",
    type: "quiz", quizId: "3", next: "adv-op-binary",
    questions: [
      {
        id: "q3-1", type: "mc", num: "Q1", text: "Why must << and >> be non-member functions?",
        opts: ["C++ simply doesn't allow member stream operators", "The left operand is ostream/istream, not your class — it can't be a member of your class", "Member functions can't accept stream references", "They need friend access to private members"], answer: "B",
        ok: "✓ Correct! In cout << p, the left side is an ostream object. That's not your class, so the operator can't be its member.",
        no: "✗ Answer: <strong>B</strong>. The left side of << is always a stream — not your type."
      },
      {
        id: "q3-2", type: "output", num: "Q2", text: "What is printed?",
        code: `<span class="kw">class</span> <span class="cls">N</span> {
    <span class="type">int</span> v;
<span class="kw">public</span>:
    <span class="cls">N</span>(<span class="type">int</span> v) : v(v) {}
    <span class="cls">N</span> <span class="kw">operator</span>+(<span class="kw">const</span> <span class="cls">N</span>&amp; o) <span class="kw">const</span> { <span class="kw">return</span> <span class="cls">N</span>(v + o.v); }
    <span class="type">int</span> <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> v; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">N</span> a(<span class="num">3</span>), b(<span class="num">4</span>), c(<span class="num">5</span>);
    cout &lt;&lt; (a + b + c).<span class="fn">get</span>();
}`,
        opts: ["7", "9", "12", "Compile error"], answer: "C",
        ok: "✓ Correct! (a+b) = N(7), then N(7)+c = N(12). Chaining evaluates left to right.",
        no: "✗ Answer: <strong>12</strong>. a+b = N(7), then N(7)+c = N(12). Left-to-right chaining."
      },
      {
        id: "q3-3", type: "mc", num: "Q3", text: "What distinguishes postfix operator++(int) from prefix operator++()?",
        opts: ["Postfix has a return type of void", "Postfix has a dummy int parameter that is never used", "Postfix must always be a non-member function", "The compiler tells them apart by context only"], answer: "B",
        ok: "✓ Correct! The dummy int marks the function as postfix — you never pass a value for it.",
        no: "✗ Answer: <strong>B</strong>. The dummy int is a C++ convention to mark postfix — required but never used."
      },
      {
        id: "q3-4", type: "output", num: "Q4", text: "What is the output?",
        code: `<span class="kw">class</span> <span class="cls">C</span> {
    <span class="type">int</span> n;
<span class="kw">public</span>:
    <span class="cls">C</span>(<span class="type">int</span> n) : n(n) {}
    <span class="cls">C</span>&amp; <span class="kw">operator</span>++()    { ++n; <span class="kw">return</span> *<span class="kw">this</span>; }
    <span class="cls">C</span>  <span class="kw">operator</span>++(<span class="type">int</span>) { <span class="cls">C</span> t=*<span class="kw">this</span>; ++n; <span class="kw">return</span> t; }
    <span class="type">int</span> <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> n; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">C</span> x(<span class="num">10</span>);
    cout &lt;&lt; (x++).<span class="fn">get</span>() &lt;&lt; <span class="str">" "</span> &lt;&lt; x.<span class="fn">get</span>();
}`,
        opts: ["11 11", "10 11", "10 10", "11 10"], answer: "B",
        ok: "✓ Correct! Postfix saves old copy (10), increments x to 11, returns old. So (x++)=10, then x=11.",
        no: "✗ Answer: <strong>10 11</strong>. Postfix saves old value (10), increments to 11, returns old copy."
      },
      {
        id: "q3-5", type: "mc", num: "Q5", text: "Stream insertion operator<< must return:",
        opts: ["void", "A copy of the printed object", "ostream& — a reference to the stream", "bool indicating success"], answer: "C",
        ok: "✓ Correct! Returning the stream by reference enables chaining: cout << a << b << c.",
        no: "✗ Answer: <strong>C</strong>. The stream reference is returned so chaining works: cout << x << y << endl."
      },
      {
        id: "q3-6", type: "mc", num: "Q6", text: "Which of these operators CANNOT be overloaded in C++?",
        opts: ["+ - * /", "++ -- << >>", ":: . .* ?:", "[] () -> =="], answer: "C",
        ok: "✓ Correct! These four are not overloadable: scope resolution ::, member access ., pointer-to-member .*, and ternary ?:.",
        no: "✗ Answer: <strong>C</strong>. ::, ., .*, and ?: cannot be overloaded. All others in the list can be."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 4 · ADVANCED OPERATOR OVERLOADING
  // ══════════════════════════════════════════════════════════

  "adv-op-binary": {
    badge: "Adv. Operators · Lesson 1", title: "Binary Operators — Deep Dive",
    intro: "Binary operators take two operands. Overloaded as a member the left side is implicit <code>this</code>; as a non-member both are explicit parameters.",
    next: "adv-op-copy",
    sections: [
      {
        title: "Assignment & Comparison Operators", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">MyInt</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">int</span> val;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">MyInt</span>(<span class="type">int</span> v = <span class="num">0</span>) <span class="op">:</span> val(v) {}

    <span class="cmt">// Assignment — must return *this for chaining  a=b=c</span>
    <span class="cls">MyInt</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> rhs) {
        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">!=</span> <span class="op">&</span>rhs) val = rhs.val; <span class="cmt">// self-assignment guard</span>
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="type">bool</span> <span class="kw">operator</span><span class="op"><</span> (<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> r) <span class="kw">const</span> { <span class="kw">return</span> val <span class="op"><</span>  r.val; }
    <span class="type">bool</span> <span class="kw">operator</span><span class="op"><=</span>(<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> r) <span class="kw">const</span> { <span class="kw">return</span> val <span class="op"><=</span> r.val; }
    <span class="type">int</span>  <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> val; }
};`,
        rules: [
          "Assignment <code>operator=</code> must return <code>ClassName&</code> so chaining <code>a = b = c</code> works",
          "Always guard against self-assignment: <code>if (this != &rhs)</code>",
          "The compiler generates a default <code>operator=</code> that copies members — only replace it when you manage raw pointers",
          "Comparison operators should be <code>const</code> member functions returning <code>bool</code>",
        ]
      },
      {
        title: "Subscript & Function-Call Operators", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">SafeArray</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">int</span> data[<span class="num">10</span>]; <span class="type">int</span> sz = <span class="num">10</span>;
<span class="kw">public</span><span class="op">:</span>
    <span class="cmt">// operator[] — subscript (non-const: returns ref)</span>
    <span class="type">int</span><span class="op">&</span> <span class="kw">operator</span>[](<span class="type">int</span> i) {
        <span class="kw">if</span> (i <span class="op"><</span> <span class="num">0</span> <span class="op">||</span> i <span class="op">>=</span> sz) <span class="kw">throw</span> std<span class="op">::</span>out_of_range(<span class="str">"bad index"</span>);
        <span class="kw">return</span> data[i];
    }
    <span class="cmt">// const version for read-only access</span>
    <span class="type">int</span> <span class="kw">operator</span>[](<span class="type">int</span> i) <span class="kw">const</span> { <span class="kw">return</span> data[i]; }

    <span class="cmt">// operator() — makes object callable like a function</span>
    <span class="type">int</span> <span class="kw">operator</span>()(<span class="type">int</span> i, <span class="type">int</span> j) <span class="kw">const</span> { <span class="kw">return</span> data[i] <span class="op">+</span> data[j]; }
};
<span class="cls">SafeArray</span> a;
a[<span class="num">3</span>] = <span class="num">99</span>;       <span class="cmt">// calls operator[]</span>
cout <span class="op"><<</span> a(<span class="num">0</span>,<span class="num">3</span>);  <span class="cmt">// calls operator()</span>`,
        rules: [
          "<code>operator[]</code> returns a reference so it can be on the left side of assignment",
          "Provide both const and non-const <code>[]</code> overloads for full coverage",
          "<code>operator()</code> makes objects callable — useful for functors and callbacks",
          "<code>[]</code>, <code>()</code>, <code>=</code>, and <code>-></code> must be member functions — they cannot be non-members",
        ]
      },
    ],
    tasks: [
      { title: "Self-Assignment Guard", diff: "easy", text: "Write class <code>Wrapper</code> with a single <code>int value</code>. Implement <code>operator=</code> with a self-assignment guard. Test <code>a = a</code> and chaining <code>a = b = c</code>." },
      { title: "Safe Bounded Array", diff: "medium", text: "Create <code>BoundedArray</code> storing 5 ints. Overload <code>operator[]</code> to throw <code>std::out_of_range</code> on bad indices. Test both valid and invalid indices inside a try/catch." },
      { title: "Polynomial Class", diff: "hard", text: "Create class <code>Poly</code> with coefficients in an array. Overload <code>+</code>, <code>[]</code> (access by degree), and <code>()</code> (evaluate at x). Test: (3x²+2x+1) at x=2 should return 17." },
    ],
  },

  "adv-op-copy": {
    badge: "Adv. Operators · Lesson 2", title: "Deep vs Shallow Copy",
    intro: "The default copy makes two pointers to the same heap data — a <em>shallow copy</em>. A <em>deep copy</em> allocates independent memory.",
    next: "adv-op-array",
    sections: [
      {
        title: "Why Shallow Copy Crashes", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Buffer</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> size;
    <span class="cls">Buffer</span>(<span class="type">int</span> n) <span class="op">:</span> size(n), data(<span class="kw">new</span> <span class="type">int</span>[n]()) {}
    <span class="op">~</span><span class="cls">Buffer</span>() { <span class="kw">delete</span>[] data; }
    <span class="cmt">// Default copy ctor copies the pointer value — DANGER!</span>
    <span class="cmt">// b1.data == b2.data → both delete the same memory → crash</span>
};`,
        rules: [
          "If a class has <code>new</code> in the constructor, it needs the <strong>Rule of Three</strong>:",
          "⟶ Destructor + Copy Constructor + Copy Assignment Operator",
          "Default copy just copies the pointer — both objects then <code>delete</code> the same array → double-free crash",
        ]
      },
      {
        title: "Deep Copy — The Fix", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Buffer</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> size;
    <span class="cls">Buffer</span>(<span class="type">int</span> n) <span class="op">:</span> size(n), data(<span class="kw">new</span> <span class="type">int</span>[n]()) {}

    <span class="cmt">// Deep copy constructor</span>
    <span class="cls">Buffer</span>(<span class="kw">const</span> <span class="cls">Buffer</span><span class="op">&</span> src) <span class="op">:</span> size(src.size), data(<span class="kw">new</span> <span class="type">int</span>[src.size]) {
        std<span class="op">::</span>copy(src.data, src.data <span class="op">+</span> size, data);
    }
    <span class="cmt">// Deep copy assignment</span>
    <span class="cls">Buffer</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">Buffer</span><span class="op">&</span> src) {
        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">==</span> <span class="op">&</span>src) <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
        <span class="kw">delete</span>[] data;
        size = src.size; data = <span class="kw">new</span> <span class="type">int</span>[size];
        std<span class="op">::</span>copy(src.data, src.data <span class="op">+</span> size, data);
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="op">~</span><span class="cls">Buffer</span>() { <span class="kw">delete</span>[] data; }
};`,
        rules: [
          "Copy constructor signature: <code>ClassName(const ClassName& src)</code>",
          "Copy assignment: <strong>free old memory first</strong>, then allocate fresh and copy values",
          "Copy constructor is called for: <code>Buffer b2 = b1</code>, pass-by-value, return-by-value",
          "Assignment operator is called for: <code>b2 = b1</code> when b2 already exists",
        ]
      },
    ],
    tasks: [
      { title: "Reproduce Shallow Copy Crash", diff: "easy", text: "Write <code>IntBox</code> with <code>int* val</code>. Copy it with the default copy, modify the original — observe the copy changed too. Add a destructor print to confirm the double-free." },
      { title: "Implement Deep Copy", diff: "medium", text: "Add a proper copy constructor and <code>operator=</code> to <code>IntBox</code>. Confirm modifying the original no longer affects the copy. Verify each destructor prints exactly once." },
      { title: "String Buffer Class", diff: "hard", text: "Create <code>StrBuf</code> with a <code>char*</code> buffer — full Rule of Three: destructor, copy ctor, copy assignment. Overload <code>operator+</code> to concatenate two <code>StrBuf</code> objects. Test all operations." },
    ],
  },

  "adv-op-array": {
    badge: "Adv. Operators · Lesson 3", title: "Case Study: Dynamic Array Class",
    intro: "Putting it all together — a heap-backed resizable array class with deep copy, <code>[]</code>, <code>+</code>, and stream output.",
    next: "adv-op-convert",
    sections: [
      {
        title: "DynArray — Complete Implementation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">DynArray</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> len;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">DynArray</span>(<span class="type">int</span> n = <span class="num">0</span>) <span class="op">:</span> len(n), data(n ? <span class="kw">new</span> <span class="type">int</span>[n]() : <span class="kw">nullptr</span>) {}

    <span class="cls">DynArray</span>(<span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> o) <span class="op">:</span> len(o.len), data(<span class="kw">new</span> <span class="type">int</span>[o.len]) {
        std<span class="op">::</span>copy(o.data, o.data <span class="op">+</span> len, data);
    }
    <span class="cls">DynArray</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> o) {
        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">==</span> <span class="op">&</span>o) <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
        <span class="kw">delete</span>[] data; len = o.len; data = <span class="kw">new</span> <span class="type">int</span>[len];
        std<span class="op">::</span>copy(o.data, o.data <span class="op">+</span> len, data);
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="op">~</span><span class="cls">DynArray</span>() { <span class="kw">delete</span>[] data; }

    <span class="type">int</span><span class="op">&</span> <span class="kw">operator</span>[](<span class="type">int</span> i)       { <span class="kw">return</span> data[i]; }
    <span class="type">int</span>  <span class="kw">operator</span>[](<span class="type">int</span> i) <span class="kw">const</span> { <span class="kw">return</span> data[i]; }
    <span class="type">int</span>  <span class="fn">size</span>()            <span class="kw">const</span> { <span class="kw">return</span> len; }

    <span class="kw">friend</span> ostream<span class="op">&</span> <span class="kw">operator</span><span class="op"><<</span>(ostream<span class="op">&</span> out, <span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> a) {
        out <span class="op"><<</span> <span class="str">"["</span>;
        <span class="kw">for</span>(<span class="type">int</span> i=<span class="num">0</span>; i<span class="op"><</span>a.len; i++) out <span class="op"><<</span> a.data[i] <span class="op"><<</span> (i<span class="op"><</span>a.len<span class="op">-</span><span class="num">1</span>?<span class="str">","</span>:<span class="str">""</span>);
        <span class="kw">return</span> out <span class="op"><<</span> <span class="str">"]"</span>;
    }
};`,
        rules: [
          "Rule of Three implemented together — destructor, copy ctor, copy assignment",
          "Provide both const and non-const <code>operator[]</code> overloads",
          "Destructor must use <code>delete[]</code> — never plain <code>delete</code> for arrays",
          "Copy assignment must free old memory before allocating new",
        ]
      },
    ],
    tasks: [
      { title: "Build and Test DynArray", diff: "medium", text: "Implement the full <code>DynArray</code>. In <code>main()</code>: create an array of 5 ints, fill it via <code>[]</code>, print it, copy it, modify the original — confirm the copy is unaffected." },
      { title: "Add operator+ (concatenate)", diff: "medium", text: "Add <code>DynArray operator+(const DynArray& b) const</code> returning a new array containing all elements of <code>this</code> followed by all of <code>b</code>. Test with two arrays of different sizes." },
      { title: "Add push_back()", diff: "hard", text: "Add <code>void push_back(int val)</code>: allocate new array of size+1, copy old data, append new value, free old array. Call it 5 times and verify the size grows with each call." },
    ],
  },

  "adv-op-convert": {
    badge: "Adv. Operators · Lesson 4", title: "Type Conversion Operators",
    intro: "C++ lets you define how your class converts to or from other types — both implicitly via constructors and explicitly via conversion operators.",
    next: "adv-op-string",
    sections: [
      {
        title: "Conversion Constructor & Conversion Operator", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Celsius</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">double</span> temp;
<span class="kw">public</span><span class="op">:</span>
    <span class="cmt">// Conversion constructor: double → Celsius</span>
    <span class="cls">Celsius</span>(<span class="type">double</span> t) <span class="op">:</span> temp(t) {}

    <span class="cmt">// Conversion operator: Celsius → double (implicit)</span>
    <span class="kw">operator</span> <span class="type">double</span>() <span class="kw">const</span> { <span class="kw">return</span> temp; }

    <span class="cmt">// explicit blocks accidental implicit use</span>
    <span class="kw">explicit</span> <span class="kw">operator</span> <span class="type">int</span>() <span class="kw">const</span> { <span class="kw">return</span> (<span class="type">int</span>)temp; }
};

<span class="cls">Celsius</span> c(<span class="num">36.6</span>);
<span class="type">double</span> d = c;          <span class="cmt">// OK  — implicit operator double()</span>
<span class="type">int</span>    i = (<span class="type">int</span>)c;     <span class="cmt">// OK  — explicit cast required</span>
<span class="cmt">// int j = c;           ← ERROR — explicit blocks implicit</span>`,
        rules: [
          "Conversion constructor: single-argument ctor enabling implicit conversion <em>to</em> your class",
          "Conversion operator syntax: <code>operator TargetType() const</code> — no return type written",
          "Mark conversion operators <code>explicit</code> to prevent unintended implicit conversions",
          "Mark single-argument constructors <code>explicit</code> too — prevents accidental implicit construction",
        ]
      },
    ],
    tasks: [
      { title: "Celsius ↔ Fahrenheit", diff: "easy", text: "Create classes <code>Celsius</code> and <code>Fahrenheit</code>. Add a conversion constructor in each that accepts the other type. Test: <code>Fahrenheit f = Celsius(100.0)</code> → 212.0, and <code>Celsius c = Fahrenheit(32.0)</code> → 0.0." },
      { title: "Fraction to double", diff: "medium", text: "Add <code>operator double()</code> to your <code>Fraction</code> class returning numerator/denominator as a double. Test it: <code>Fraction(1,4)</code> should produce 0.25 when assigned to a double." },
      { title: "explicit vs implicit Test", diff: "medium", text: "Create class <code>SafeInt</code> wrapping an int with an <code>explicit</code> constructor. Try to assign an int to a <code>SafeInt</code> implicitly — observe the compile error. Then use an explicit cast and confirm it works." },
    ],
  },

  "adv-op-string": {
    badge: "Adv. Operators · Lesson 5", title: "Case Study: Simplified String Class",
    intro: "A complete <code>MyString</code> class combining deep copy, <code>+</code>, <code>[]</code>, <code>==</code>, <code>&lt;&lt;</code>, and a conversion operator.",
    next: "quiz4",
    sections: [
      {
        title: "MyString — Full Implementation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">MyString</span> {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">char</span><span class="op">*</span> buf; <span class="type">int</span> len;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">MyString</span>(<span class="kw">const</span> <span class="type">char</span><span class="op">*</span> s = <span class="str">""</span>) {
        len = strlen(s); buf = <span class="kw">new</span> <span class="type">char</span>[len<span class="op">+</span><span class="num">1</span>]; strcpy(buf, s);
    }
    <span class="cls">MyString</span>(<span class="kw">const</span> <span class="cls">MyString</span><span class="op">&</span> o) <span class="op">:</span> len(o.len), buf(<span class="kw">new</span> <span class="type">char</span>[o.len<span class="op">+</span><span class="num">1</span>]) {
        strcpy(buf, o.buf);
    }
    <span class="cls">MyString</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">MyString</span><span class="op">&</span> o) {
        <span class="kw">if</span>(<span class="kw">this</span> <span class="op">==</span> <span class="op">&</span>o) <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
        <span class="kw">delete</span>[] buf; len = o.len; buf = <span class="kw">new</span> <span class="type">char</span>[len<span class="op">+</span><span class="num">1</span>]; strcpy(buf, o.buf);
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="op">~</span><span class="cls">MyString</span>() { <span class="kw">delete</span>[] buf; }

    <span class="type">char</span><span class="op">&</span> <span class="kw">operator</span>[](<span class="type">int</span> i)       { <span class="kw">return</span> buf[i]; }
    <span class="type">char</span>  <span class="kw">operator</span>[](<span class="type">int</span> i) <span class="kw">const</span> { <span class="kw">return</span> buf[i]; }
    <span class="type">bool</span>  <span class="kw">operator</span><span class="op">==</span>(<span class="kw">const</span> <span class="cls">MyString</span><span class="op">&</span> o) <span class="kw">const</span> { <span class="kw">return</span> strcmp(buf,o.buf)<span class="op">==</span><span class="num">0</span>; }
    <span class="cls">MyString</span> <span class="kw">operator</span><span class="op">+</span>(<span class="kw">const</span> <span class="cls">MyString</span><span class="op">&</span> o) <span class="kw">const</span> {
        <span class="cls">MyString</span> r; <span class="kw">delete</span>[] r.buf;
        r.len = len<span class="op">+</span>o.len; r.buf = <span class="kw">new</span> <span class="type">char</span>[r.len<span class="op">+</span><span class="num">1</span>];
        strcpy(r.buf, buf); strcat(r.buf, o.buf);
        <span class="kw">return</span> r;
    }
    <span class="kw">operator</span> <span class="kw">const</span> <span class="type">char</span><span class="op">*</span>() <span class="kw">const</span> { <span class="kw">return</span> buf; }
    <span class="type">int</span> <span class="fn">length</span>() <span class="kw">const</span> { <span class="kw">return</span> len; }
    <span class="kw">friend</span> ostream<span class="op">&</span> <span class="kw">operator</span><span class="op"><<</span>(ostream<span class="op">&</span> out, <span class="kw">const</span> <span class="cls">MyString</span><span class="op">&</span> s) {
        <span class="kw">return</span> out <span class="op"><<</span> s.buf;
    }
};`,
        rules: [
          "Full Rule of Three in a realistic context: destructor, copy ctor, copy assignment",
          "<code>operator+</code> allocates fresh memory — caller's destructor cleans it up",
          "<code>operator const char*()</code> lets the object be passed to C functions like <code>printf</code>",
          "Two <code>operator[]</code> overloads handle both reading (const) and writing (non-const)",
        ]
      },
    ],
    tasks: [
      { title: "Implement and Test MyString", diff: "medium", text: "Implement the full <code>MyString</code> class. Test: construction from literal, copy, assignment, <code>==</code>, <code>+</code>, <code>[]</code> access, and <code>cout &lt;&lt;</code>." },
      { title: "Add operator!= and operator<", diff: "medium", text: "Add <code>operator!=</code> and <code>operator&lt;</code> using <code>strcmp</code>. Create an array of 3 MyString objects and sort them with a simple bubble sort using your operators." },
      { title: "Add toUpper() and operator+=", diff: "hard", text: "Add <code>MyString toUpper() const</code> and <code>MyString& operator+=(const MyString& o)</code> that appends in place (reallocate, deep copy). Test both thoroughly." },
    ],
  },

  quiz4: {
    badge: "Quiz 4", title: "Advanced Operator Overloading",
    intro: "Deep vs shallow copy, Rule of Three, assignment, subscript, and conversion operators.",
    type: "quiz", quizId: "4", next: "inh-concepts",
    questions: [
      {
        id: "q4-1", type: "mc", num: "Q1", text: "What is the 'Rule of Three' in C++?",
        opts: ["Any class with 3+ members needs special treatment", "If a class defines destructor, copy ctor, or copy assignment — it likely needs all three", "A class can have at most 3 overloaded operators", "3 methods must be const"], answer: "B",
        ok: "✓ Correct! If you manually manage resources (heap memory), you need all three: destructor, copy constructor, and copy assignment operator.",
        no: "✗ Answer: <strong>B</strong>. Rule of Three: if you need any one of destructor / copy ctor / copy assignment, you almost certainly need all three."
      },
      {
        id: "q4-2", type: "mc", num: "Q2", text: "Without a copy constructor, what happens with: <code>Buffer b2 = b1;</code>",
        opts: ["Compile error", "A deep copy is created", "Shallow copy: b1.data and b2.data share the same heap address → double-free crash", "b2 is left uninitialized"], answer: "C",
        ok: "✓ Correct! Without a copy constructor the compiler copies the pointer value. Both objects then delete the same memory → undefined behaviour / crash.",
        no: "✗ Answer: <strong>C</strong>. No copy ctor → shallow copy → both pointers share the same address → double-free on destruction."
      },
      {
        id: "q4-3", type: "mc", num: "Q3", text: "The copy assignment operator should return:",
        opts: ["void", "const ClassName&", "ClassName& (reference to *this)", "A new object by value"], answer: "B",
        ok: "✓ Correct! Returning <code>*this</code> by reference allows chaining: <code>a = b = c</code>.",
        no: "✗ Answer: <strong>C</strong> — <code>ClassName&</code>. Returning *this by reference enables chaining."
      },
      {
        id: "q4-4", type: "mc", num: "Q4", text: "A conversion operator is written as:",
        opts: ["ReturnType operator TargetType() const", "TargetType convert() const", "operator TargetType() const  (no return type)", "static TargetType from(const ClassName&)"], answer: "B",
        ok: "✓ Correct! Conversion operators have no written return type: <code>operator double() const { ... }</code>",
        no: "✗ Answer: <strong>C</strong>. Conversion operators: operator TargetType() const — the return type is implicit."
      },
      {
        id: "q4-5", type: "mc", num: "Q5", text: "Which operators MUST be member functions (cannot be non-members)?",
        opts: ["+ - * /", "<< >> == !=", "= [] () ->", "++ --"], answer: "C",
        ok: "✓ Correct! The C++ standard requires that =, [], (), and -> are member functions.",
        no: "✗ Answer: <strong>C</strong>. = [] () -> must be members. The others can be either members or non-members."
      },
      {
        id: "q4-6", type: "mc", num: "Q6", text: "Marking a conversion operator explicit means:",
        opts: ["It can only be used via a direct cast — implicit conversions are blocked", "It runs faster", "It must be called from the destructor", "It prevents copying"], answer: "A",
        ok: "✓ Correct! explicit means you must write an explicit cast — accidental implicit conversions are prevented.",
        no: "✗ Answer: <strong>A</strong>. explicit operators require the programmer to write a cast: (double)obj or static_cast<double>(obj)."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 5 · INHERITANCE
  // ══════════════════════════════════════════════════════════

  "inh-concepts": {
    badge: "Inheritance · Lesson 1", title: "Inheritance Fundamentals",
    intro: "Inheritance lets a derived class <em>reuse</em> the members of a base class. It models the <strong>is-a</strong> relationship: a Dog IS-A Animal.",
    next: "inh-base",
    sections: [
      {
        title: "Why Inheritance?", type: "cards", items: [
          { head: "Code Reuse", text: "A derived class inherits all public/protected members — no duplication needed." },
          { head: "Extensibility", text: "Add new behaviour in the derived class without modifying the tested base class." },
          { head: "Polymorphism", text: "A base pointer can hold any derived object — enabling runtime dispatch." },
          { head: "Is-A Relationship", text: "Dog IS-A Animal. SavingsAccount IS-A BankAccount. Inheritance models this naturally." },
        ]
      },
      {
        title: "Basic Inheritance Syntax", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {               <span class="cmt">// Base class</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="type">void</span> <span class="fn">breathe</span>() { cout <span class="op"><<</span> <span class="str">"breathing\\n"</span>; }
};

<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {   <span class="cmt">// Derived class</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">bark</span>() {
        cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">": Woof!\\n"</span>; <span class="cmt">// uses Animal's name</span>
    }
};

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Dog</span> d;
    d.name = <span class="str">"Rex"</span>;
    d.<span class="fn">breathe</span>(); <span class="cmt">// inherited from Animal</span>
    d.<span class="fn">bark</span>();    <span class="cmt">// Dog's own method</span>
}`,
        rules: [
          "Syntax: <code>class Derived : public Base { };</code>",
          "Derived class inherits all <code>public</code> and <code>protected</code> members of the base",
          "<code>private</code> members are inherited but not directly accessible in the derived class",
          "Derived class can add new members and override existing virtual functions",
        ]
      },
    ],
    tasks: [
      { title: "Shape Hierarchy", diff: "easy", text: "Create base <code>Shape</code> with <code>string color</code> and <code>void describe()</code>. Derive <code>Circle</code> (adds <code>double radius</code>, <code>double area()</code>) and <code>Rectangle</code> (adds <code>double w, h</code>, <code>double area()</code>). Create one of each and test all methods." },
      { title: "Vehicle Hierarchy", diff: "medium", text: "Create <code>Vehicle</code> with <code>string brand</code>, <code>int year</code>, and <code>void info()</code>. Derive <code>Car</code> (adds <code>int doors</code>) and <code>Truck</code> (adds <code>double payload</code>). Test all inherited and new methods." },
    ],
  },

  "inh-base": {
    badge: "Inheritance · Lesson 2", title: "Base & Derived Classes",
    intro: "Understanding what gets inherited, what gets hidden, and how derived classes extend the base.",
    next: "inh-relations",
    sections: [
      {
        title: "Member Visibility Across Hierarchy", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>    <span class="type">int</span> pub  = <span class="num">1</span>; <span class="cmt">// accessible everywhere</span>
<span class="kw">protected</span><span class="op">:</span> <span class="type">int</span> prot = <span class="num">2</span>; <span class="cmt">// accessible in derived classes</span>
<span class="kw">private</span><span class="op">:</span>   <span class="type">int</span> priv = <span class="num">3</span>; <span class="cmt">// NOT accessible in derived classes</span>
};
<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">show</span>() {
        cout <span class="op"><<</span> pub;   <span class="cmt">// ✓</span>
        cout <span class="op"><<</span> prot;  <span class="cmt">// ✓</span>
        <span class="cmt">// cout << priv;  ← ✗ COMPILE ERROR</span>
    }
};`,
        rules: [
          "<code>public</code>: accessible everywhere",
          "<code>protected</code>: accessible inside the class AND in derived classes — not outside",
          "<code>private</code>: accessible ONLY inside the declaring class — not even derived classes",
        ]
      },
      {
        title: "Function Hiding (non-virtual)", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">speak</span>() { cout <span class="op"><<</span> <span class="str">"..."</span>; } <span class="cmt">// non-virtual</span>
};
<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">speak</span>() { cout <span class="op"><<</span> <span class="str">"Woof!"</span>; } <span class="cmt">// HIDES Animal::speak</span>
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Dog</span> d;
    d.<span class="fn">speak</span>();             <span class="cmt">// Woof! — Dog's version</span>
    d.<span class="cls">Animal</span><span class="op">::</span><span class="fn">speak</span>();    <span class="cmt">// ... — force base version</span>
}`,
        rules: [
          "Without <code>virtual</code>, a same-name derived function <em>hides</em> the base version — no runtime dispatch",
          "Force the base version with <code>Base::method()</code>",
          "True <em>override</em> (runtime polymorphism) requires <code>virtual</code>",
        ]
      },
    ],
    tasks: [
      { title: "Access Specifier Experiment", diff: "easy", text: "Create <code>Base</code> with one public, one protected, one private int. In a derived class member function try to access all three — observe which compile and which don't." },
      { title: "Call Base Method Explicitly", diff: "medium", text: "Create <code>Animal</code> with <code>void speak()</code>. Derive <code>Cat</code> that hides it. In <code>main()</code> call <code>speak()</code> (Cat's) and then <code>Animal::speak()</code> explicitly." },
    ],
  },

  "inh-relations": {
    badge: "Inheritance · Lesson 3", title: "Relationships Between Base & Derived",
    intro: "A derived object IS-A base object. A derived pointer can be assigned to a base pointer — but not the reverse without an explicit cast.",
    next: "inh-ctor",
    sections: [
      {
        title: "Upcasting & Downcasting", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">breathe</span>() { cout <span class="op"><<</span> <span class="str">"breathe\\n"</span>; } };
<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">bark</span>() { cout <span class="op"><<</span> <span class="str">"Woof!\\n"</span>; } };

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Dog</span> dog;
    <span class="cls">Animal</span><span class="op">*</span> ap = <span class="op">&</span>dog;  <span class="cmt">// Upcast — always safe (Dog IS-A Animal)</span>
    ap<span class="op">-></span><span class="fn">breathe</span>();       <span class="cmt">// OK</span>
    <span class="cmt">// ap->bark();        ← ERROR: Animal* can't see bark()</span>

    <span class="cls">Dog</span><span class="op">*</span> dp = (<span class="cls">Dog</span><span class="op">*</span>)ap; <span class="cmt">// Downcast — requires explicit cast</span>
    dp<span class="op">-></span><span class="fn">bark</span>();          <span class="cmt">// OK only if ap really IS a Dog</span>
}`,
        rules: [
          "Upcasting (Derived* → Base*) is always safe — a Dog IS always an Animal",
          "Downcasting (Base* → Derived*) requires explicit cast and is only safe if the object really is that derived type",
          "Use <code>dynamic_cast&lt;Derived*&gt;(ptr)</code> for safe downcast — returns <code>nullptr</code> if it fails",
          "Through a base pointer you only see base-class members (unless the function is virtual)",
        ]
      },
    ],
    tasks: [
      { title: "Upcast Array", diff: "medium", text: "Create <code>Shape</code>, <code>Circle : Shape</code>, <code>Square : Shape</code>. Store one Circle and one Square in a <code>Shape*</code> array. Call a <code>describe()</code> base method on each through the base pointer." },
      { title: "Dynamic Cast Safety", diff: "hard", text: "Attempt <code>dynamic_cast&lt;Circle*&gt;</code> on each element. Print 'Is a circle' if non-null, 'Not a circle' if null. This requires at least one virtual function in Shape — add it and observe." },
    ],
  },

  "inh-ctor": {
    badge: "Inheritance · Lesson 4", title: "Constructors & Destructors in Inheritance",
    intro: "Derived class constructors must call the base constructor. Destructors run in reverse order.",
    next: "inh-types",
    sections: [
      {
        title: "Constructor Chaining", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {
<span class="kw">protected</span><span class="op">:</span> <span class="type">string</span> name;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Animal</span>(<span class="type">string</span> n) <span class="op">:</span> name(n) {
        cout <span class="op"><<</span> <span class="str">"Animal("</span> <span class="op"><<</span> name <span class="op"><<</span> <span class="str">") created\\n"</span>;
    }
    <span class="op">~</span><span class="cls">Animal</span>() { cout <span class="op"><<</span> <span class="str">"Animal destroyed\\n"</span>; }
};
<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">string</span> breed;
<span class="kw">public</span><span class="op">:</span>
    <span class="cmt">// Call base constructor via initializer list</span>
    <span class="cls">Dog</span>(<span class="type">string</span> n, <span class="type">string</span> b) <span class="op">:</span> <span class="cls">Animal</span>(n), breed(b) {
        cout <span class="op"><<</span> <span class="str">"Dog("</span> <span class="op"><<</span> breed <span class="op"><<</span> <span class="str">") created\\n"</span>;
    }
    <span class="op">~</span><span class="cls">Dog</span>() { cout <span class="op"><<</span> <span class="str">"Dog destroyed\\n"</span>; }
};
<span class="cmt">// Dog d("Rex","Labrador") outputs:</span>
<span class="cmt">// Animal(Rex) created → Dog(Labrador) created</span>
<span class="cmt">// Dog destroyed       → Animal destroyed</span>`,
        rules: [
          "Base constructor always runs BEFORE the derived constructor body",
          "If you don't call the base constructor explicitly, the base's default constructor is called",
          "If the base has no default constructor you MUST call it in the initializer list",
          "Destructors run in REVERSE order: derived first, then base",
        ]
      },
    ],
    tasks: [
      { title: "Observe Order", diff: "easy", text: "Implement <code>Animal</code> and <code>Dog</code> from the example. Create a Dog and confirm the construction then destruction order in the output." },
      { title: "Three-Level Chain", diff: "medium", text: "Create <code>LivingThing → Animal → Dog</code>. Each prints 'created' and 'destroyed'. Confirm the full chain: LT→A→D created, then D→A→LT destroyed." },
      { title: "Force Base Constructor Call", diff: "hard", text: "Remove the default constructor from <code>Animal</code>. Try creating a Dog that doesn't call Animal's constructor in the initializer list. Observe the error, then fix it." },
    ],
  },

  "inh-types": {
    badge: "Inheritance · Lesson 5", title: "Public, Protected & Private Inheritance",
    intro: "The inheritance specifier controls how base class access levels appear to the outside world through the derived class.",
    next: "quiz5",
    sections: [
      {
        title: "Three Inheritance Types", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>    <span class="type">int</span> pub;
<span class="kw">protected</span><span class="op">:</span> <span class="type">int</span> prot;
<span class="kw">private</span><span class="op">:</span>   <span class="type">int</span> priv; <span class="cmt">// never inherited directly</span>
};
<span class="kw">class</span> <span class="cls">PubDer</span>  <span class="op">:</span> <span class="kw">public</span>    <span class="cls">Base</span> {}; <span class="cmt">// pub→public,    prot→protected</span>
<span class="kw">class</span> <span class="cls">ProtDer</span> <span class="op">:</span> <span class="kw">protected</span> <span class="cls">Base</span> {}; <span class="cmt">// pub→protected, prot→protected</span>
<span class="kw">class</span> <span class="cls">PrivDer</span> <span class="op">:</span> <span class="kw">private</span>   <span class="cls">Base</span> {}; <span class="cmt">// pub→private,   prot→private</span>

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">PubDer</span>  a; a.pub = <span class="num">1</span>;  <span class="cmt">// OK — still public</span>
    <span class="cls">ProtDer</span> b; <span class="cmt">// b.pub = 1;  ← ERROR — now protected</span>
    <span class="cls">PrivDer</span> c; <span class="cmt">// c.pub = 1;  ← ERROR — now private</span>
}`,
        rules: [
          "<strong>public</strong> (most common): keeps public/protected as-is. Use for IS-A relationships.",
          "<strong>protected</strong>: public → protected. The interface becomes internal to further derived classes.",
          "<strong>private</strong> (rare): everything becomes private. Hides the IS-A relationship — use for implementation reuse only.",
          "Private base members are always inaccessible regardless of inheritance type.",
        ]
      },
    ],
    tasks: [
      { title: "Compare All Three Types", diff: "easy", text: "Create <code>Base</code> with a public <code>int x</code>. Derive three classes using each inheritance type. Try accessing <code>x</code> from outside each — confirm which compile and which don't." },
      { title: "Private Inheritance for Reuse", diff: "medium", text: "Design an <code>Engine</code> class. Make <code>Car</code> inherit from it using <strong>private</strong> inheritance. Expose selected engine methods through public wrapper methods in <code>Car</code>." },
    ],
  },

  quiz5: {
    badge: "Quiz 5", title: "Inheritance Test",
    intro: "Base/derived access levels, constructor chaining, upcasting, inheritance types.",
    type: "quiz", quizId: "5", next: "poly-intro",
    questions: [
      {
        id: "q5-1", type: "mc", num: "Q1", text: "Which base class members are directly accessible inside a derived class?",
        opts: ["Only public members", "Public and protected members", "All members including private", "Only protected members"], answer: "B",
        ok: "✓ Correct! Public and protected are accessible in derived classes. Private members are inherited but not directly accessible.",
        no: "✗ Answer: <strong>B</strong>. Derived classes can reach public and protected, but not private."
      },
      {
        id: "q5-2", type: "output", num: "Q2", text: "What is the output?",
        code: `<span class="kw">class</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="cls">A</span>() { cout &lt;&lt; <span class="str">"A "</span>; } ~<span class="cls">A</span>() { cout &lt;&lt; <span class="str">"~A "</span>; }
};
<span class="kw">class</span> <span class="cls">B</span> : <span class="kw">public</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="cls">B</span>() { cout &lt;&lt; <span class="str">"B "</span>; } ~<span class="cls">B</span>() { cout &lt;&lt; <span class="str">"~B "</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() { <span class="cls">B</span> b; }`,
        opts: ["B A ~A ~B", "A B ~A ~B", "A B ~B ~A", "B ~B A ~A"], answer: "C",
        ok: "✓ Correct! Base ctor first: A, then B. Destruction is reverse: ~B first, then ~A.",
        no: "✗ Answer: <strong>C</strong>. Construction: base first (A), then derived (B). Destruction always reverses: ~B then ~A."
      },
      {
        id: "q5-3", type: "mc", num: "Q3", text: "If a base class has NO default constructor, the derived class must:",
        opts: ["Define its own default constructor", "Explicitly call the base constructor in its initializer list", "Declare itself abstract", "Use private inheritance only"], answer: "B",
        ok: "✓ Correct! Without a default base constructor you must call it explicitly: Derived(args) : Base(args) { }",
        no: "✗ Answer: <strong>B</strong>. No default base ctor → you must call it explicitly in the derived's initializer list."
      },
      {
        id: "q5-4", type: "mc", num: "Q4", text: "With public inheritance, protected base members become _____ in the derived class.",
        opts: ["public", "private", "protected", "inaccessible"], answer: "C",
        ok: "✓ Correct! Public inheritance preserves access levels: public stays public, protected stays protected.",
        no: "✗ Answer: <strong>C</strong>. Protected stays protected with public inheritance."
      },
      {
        id: "q5-5", type: "mc", num: "Q5", text: "Assigning a derived pointer to a base pointer is called:",
        opts: ["Upcasting — always safe", "Downcasting — requires explicit cast", "Implicit casting — never safe", "Polymorphic assignment — requires virtual"], answer: "A",
        ok: "✓ Correct! Upcasting (Derived* → Base*) is always safe — derived IS always a base.",
        no: "✗ Answer: <strong>A</strong>. Moving up the hierarchy is upcasting and is always safe."
      },
      {
        id: "q5-6", type: "mc", num: "Q6", text: "Which inheritance type completely hides the base class's public interface from external code?",
        opts: ["public inheritance", "private inheritance", "protected inheritance", "friend inheritance"], answer: "B",
        ok: "✓ Correct! Private inheritance turns all inherited public and protected members into private.",
        no: "✗ Answer: <strong>B</strong>. Private inheritance makes all inherited members private — the interface is completely hidden."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 6 · POLYMORPHISM
  // ══════════════════════════════════════════════════════════

  "poly-intro": {
    badge: "Polymorphism · Lesson 1", title: "Introduction to Polymorphism",
    intro: "Polymorphism means 'many forms'. The same function call produces different behaviour depending on the actual object type at runtime.",
    next: "poly-override",
    sections: [
      {
        title: "The Core Idea", type: "cards", items: [
          { head: "Compile-Time (Static)", text: "Function overloading and templates — resolved by the compiler." },
          { head: "Run-Time (Dynamic)", text: "Virtual functions — correct function chosen at runtime based on actual object type." },
          { head: "Why it matters", text: "Write code that handles many types. Add new types without modifying existing code." },
          { head: "How it works", text: "Each class with virtual functions has a vtable. A vptr in each object points to its class's vtable." },
        ]
      },
      {
        title: "Without vs With Polymorphism", type: "code", lang: "C++",
        code: `<span class="cmt">// WITHOUT — must add a case for every new type</span>
<span class="type">void</span> <span class="fn">makeSound</span>(<span class="cls">Animal</span><span class="op">*</span> a, <span class="type">string</span> type) {
    <span class="kw">if</span>(type<span class="op">==</span><span class="str">"dog"</span>) cout<span class="op"><<</span><span class="str">"Woof"</span>; <span class="kw">else if</span>(type<span class="op">==</span><span class="str">"cat"</span>) cout<span class="op"><<</span><span class="str">"Meow"</span>;
}

<span class="cmt">// WITH polymorphism — extensible, no modification needed</span>
<span class="kw">class</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">speak</span>() { cout<span class="op"><<</span><span class="str">"..."</span>; } };
<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">speak</span>() <span class="kw">override</span> { cout<span class="op"><<</span><span class="str">"Woof!"</span>; } };
<span class="kw">class</span> <span class="cls">Cat</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">speak</span>() <span class="kw">override</span> { cout<span class="op"><<</span><span class="str">"Meow!"</span>; } };
<span class="type">void</span> <span class="fn">makeSound</span>(<span class="cls">Animal</span><span class="op">*</span> a) { a<span class="op">-></span><span class="fn">speak</span>(); } <span class="cmt">// works for ANY Animal!</span>`,
        rules: [
          "Polymorphism requires: virtual function in base, override in derived, base pointer/reference",
          "The <code>override</code> keyword (C++11) is optional but strongly recommended — catches spelling mistakes at compile time",
          "Without <code>virtual</code>, base version is always called through a base pointer (static binding)",
          "Polymorphism only works through pointers or references — not through object copies",
        ]
      },
    ],
    tasks: [
      { title: "Shape Area Polymorphism", diff: "medium", text: "Create <code>Shape</code> with <code>virtual double area()</code>. Derive <code>Circle</code>, <code>Rectangle</code>, <code>Triangle</code>. Store them in a <code>Shape*</code> array and loop calling <code>area()</code> — each uses its own formula." },
    ],
  },

  "poly-override": {
    badge: "Polymorphism · Lesson 2", title: "Overloading vs Overriding",
    intro: "Overloading = same name, different params, same class, compile-time. Overriding = same name AND params, derived class, runtime.",
    next: "poly-virtual",
    sections: [
      {
        title: "Side by Side", type: "code", lang: "C++",
        code: `<span class="cmt">// OVERLOADING — compile-time, same class, different params</span>
<span class="kw">class</span> <span class="cls">Printer</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">print</span>(<span class="type">int</span> n)    { cout <span class="op"><<</span> n; }
    <span class="type">void</span> <span class="fn">print</span>(<span class="type">double</span> d) { cout <span class="op"><<</span> d; }
    <span class="type">void</span> <span class="fn">print</span>(<span class="type">string</span> s) { cout <span class="op"><<</span> s; }
};

<span class="cmt">// OVERRIDING — runtime, derived class, same signature</span>
<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">greet</span>() { cout <span class="op"><<</span> <span class="str">"Hello from Base"</span>; }
};
<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">greet</span>() <span class="kw">override</span> { cout <span class="op"><<</span> <span class="str">"Hello from Derived"</span>; }
};`,
        rules: [
          "Overloading: same name, <strong>different</strong> parameter list, compile-time resolution",
          "Overriding: same name AND <strong>same</strong> parameter list, derived class, runtime resolution",
          "The <code>override</code> keyword makes overriding explicit and catches typos",
          "The <code>final</code> keyword prevents a virtual function from being overridden further",
        ]
      },
    ],
    tasks: [
      { title: "Spot the Difference", diff: "easy", text: "Create <code>Calculator</code> with overloaded <code>add(int,int)</code>, <code>add(double,double)</code>, <code>add(string,string)</code>. Separately create <code>Animal → Dog</code> with an overriding <code>speak()</code>. Call both and note compile-time vs runtime dispatch." },
      { title: "Catch an Override Mistake", diff: "medium", text: "Create <code>Animal</code> with <code>virtual void speak(string loudness)</code>. In <code>Dog</code> write <code>void speak()</code> (no param) and add <code>override</code> — observe the compile error. Fix the signature to correctly match the base." },
    ],
  },

  "poly-virtual": {
    badge: "Polymorphism · Lesson 3", title: "Virtual Functions & Dynamic Binding",
    intro: "Without <code>virtual</code>, calls through a base pointer are resolved at compile time by the pointer type. With <code>virtual</code>, they are resolved at runtime by the actual object type.",
    next: "poly-ptrs",
    sections: [
      {
        title: "Virtual vs Non-Virtual Through a Base Pointer", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span>    <span class="fn">normalCall</span>() { cout <span class="op"><<</span> <span class="str">"Base::normal"</span>; }
    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">vCall</span>()    { cout <span class="op"><<</span> <span class="str">"Base::virtual"</span>; }
};
<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">normalCall</span>() { cout <span class="op"><<</span> <span class="str">"Derived::normal"</span>; }
    <span class="type">void</span> <span class="fn">vCall</span>() <span class="kw">override</span> { cout <span class="op"><<</span> <span class="str">"Derived::virtual"</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Derived</span> d;
    <span class="cls">Base</span><span class="op">*</span> bp = <span class="op">&</span>d;
    bp<span class="op">-></span><span class="fn">normalCall</span>(); <span class="cmt">// "Base::normal"     — pointer type wins</span>
    bp<span class="op">-></span><span class="fn">vCall</span>();       <span class="cmt">// "Derived::virtual" — object type wins!</span>
}`,
        rules: [
          "Non-virtual: resolved at compile time — always calls the pointer type's version",
          "Virtual: resolved at runtime — calls the actual object's most-derived version",
          "Once declared virtual in the base, a function stays virtual in all derived classes",
          "Virtual dispatch has a tiny runtime cost (vtable lookup) — negligible in practice",
        ]
      },
    ],
    tasks: [
      { title: "Verify Dynamic Binding", diff: "easy", text: "Copy the example above. Remove <code>virtual</code> from <code>vCall</code> and confirm both calls print Base's version. Add it back and confirm derived version is called." },
      { title: "Mixed Container", diff: "medium", text: "Create <code>Shape</code> with <code>virtual double area()</code>. Derive Circle, Rectangle, Triangle. Store in <code>vector&lt;Shape*&gt;</code>. Sum all areas in a loop — each object computes its own." },
    ],
  },

  "poly-ptrs": {
    badge: "Polymorphism · Lesson 4", title: "Base-Class Pointers & Derived Objects",
    intro: "Storing derived objects through base pointers enables heterogeneous collections — a vector of Animals holding Dogs, Cats, Birds.",
    next: "poly-dtor",
    sections: [
      {
        title: "Heterogeneous Collection", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Employee</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">string</span> name;
    <span class="kw">virtual</span> <span class="type">double</span> <span class="fn">pay</span>() <span class="kw">const</span> = <span class="num">0</span>;
    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">Employee</span>() {}
};
<span class="kw">class</span> <span class="cls">Salaried</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Employee</span> {
    <span class="type">double</span> salary;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Salaried</span>(<span class="type">string</span> n, <span class="type">double</span> s) { name=n; salary=s; }
    <span class="type">double</span> <span class="fn">pay</span>() <span class="kw">const</span> <span class="kw">override</span> { <span class="kw">return</span> salary; }
};
<span class="kw">class</span> <span class="cls">Hourly</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Employee</span> {
    <span class="type">double</span> rate, hours;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Hourly</span>(<span class="type">string</span> n, <span class="type">double</span> r, <span class="type">double</span> h) { name=n; rate=r; hours=h; }
    <span class="type">double</span> <span class="fn">pay</span>() <span class="kw">const</span> <span class="kw">override</span> { <span class="kw">return</span> rate <span class="op">*</span> hours; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    vector<span class="op"><</span><span class="cls">Employee</span><span class="op">*></span> staff = {
        <span class="kw">new</span> <span class="cls">Salaried</span>(<span class="str">"Alice"</span>,<span class="num">5000</span>), <span class="kw">new</span> <span class="cls">Hourly</span>(<span class="str">"Bob"</span>,<span class="num">25</span>,<span class="num">160</span>)
    };
    <span class="kw">for</span>(<span class="kw">auto</span> e : staff) cout <span class="op"><<</span> e<span class="op">-></span>name <span class="op"><<</span> <span class="str">": $"</span> <span class="op"><<</span> e<span class="op">-></span><span class="fn">pay</span>() <span class="op"><<</span> <span class="str">"\\n"</span>;
    <span class="kw">for</span>(<span class="kw">auto</span> e : staff) <span class="kw">delete</span> e;
}`,
        rules: [
          "A <code>vector&lt;Base*&gt;</code> holds any mix of derived types — a heterogeneous collection",
          "Virtual dispatch ensures each object calls its own pay()",
          "Always delete heap-allocated polymorphic objects through a base pointer — requires virtual destructor",
        ]
      },
    ],
    tasks: [
      { title: "Payroll System", diff: "hard", text: "Implement Employee/Salaried/Hourly. Add <code>Commission</code> where <code>pay() = sales * rate</code>. Create a mixed vector of all three types, print each pay, then compute and print the total payroll." },
    ],
  },

  "poly-dtor": {
    badge: "Polymorphism · Lesson 5", title: "Virtual Destructors",
    intro: "When deleting a derived object through a base pointer, the destructor <strong>must</strong> be virtual — otherwise only the base destructor runs and the derived part leaks.",
    next: "quiz6",
    sections: [
      {
        title: "The Bug & The Fix", type: "code", lang: "C++",
        code: `<span class="cmt">// BUG — non-virtual destructor leaks derived resources</span>
<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="op">~</span><span class="cls">Base</span>() { cout <span class="op"><<</span> <span class="str">"~Base\\n"</span>; } <span class="cmt">// non-virtual</span>
};
<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {
    <span class="type">int</span><span class="op">*</span> data;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Derived</span>() { data = <span class="kw">new</span> <span class="type">int</span>[<span class="num">100</span>]; }
    <span class="op">~</span><span class="cls">Derived</span>() { <span class="kw">delete</span>[] data; cout <span class="op"><<</span> <span class="str">"~Derived\\n"</span>; }
};
<span class="cls">Base</span><span class="op">*</span> bp = <span class="kw">new</span> <span class="cls">Derived</span>();
<span class="kw">delete</span> bp; <span class="cmt">// only ~Base runs — data leaks!</span>

<span class="cmt">// FIX — virtual destructor</span>
<span class="kw">class</span> <span class="cls">Base</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">Base</span>() {} <span class="cmt">// Now: ~Derived then ~Base runs</span>
};`,
        rules: [
          "If a class is meant to be a base class, its destructor should be <code>virtual</code>",
          "Without virtual destructor: delete through Base* → only ~Base runs → derived resources leak",
          "Even an empty destructor must be virtual: <code>virtual ~Base() = default;</code>",
          "Rule of thumb: if a class has ANY virtual function, give it a virtual destructor",
        ]
      },
    ],
    tasks: [
      { title: "Reproduce the Bug", diff: "easy", text: "Implement the broken version (non-virtual destructor). Delete through a base pointer — confirm only ~Base prints. Make it virtual and verify both run." },
      { title: "Memory Leak Proof", diff: "medium", text: "Add heap memory to Derived. Without virtual destructor confirm the leak (print messages or use valgrind). Fix with virtual destructor and verify complete cleanup." },
    ],
  },

  quiz6: {
    badge: "Quiz 6", title: "Polymorphism Test",
    intro: "Virtual functions, overriding vs overloading, dynamic binding, virtual destructors.",
    type: "quiz", quizId: "6", next: "abs-pure",
    questions: [
      {
        id: "q6-1", type: "output", num: "Q1", text: "What is printed?",
        code: `<span class="kw">class</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">f</span>() { cout &lt;&lt; <span class="str">"A "</span>; }
};
<span class="kw">class</span> <span class="cls">B</span> : <span class="kw">public</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="type">void</span> <span class="fn">f</span>() <span class="kw">override</span> { cout &lt;&lt; <span class="str">"B "</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() { <span class="cls">A</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">B</span>(); p-><span class="fn">f</span>(); <span class="kw">delete</span> p; }`,
        opts: ["A ", "B ", "A B ", "Compile error"], answer: "B",
        ok: "✓ Correct! p holds a B object. Because f() is virtual, dynamic binding calls B::f() → 'B'.",
        no: "✗ Answer: <strong>B</strong>. Virtual keyword causes runtime dispatch. p holds a B, so B::f() runs."
      },
      {
        id: "q6-2", type: "mc", num: "Q2", text: "The key difference between overloading and overriding:",
        opts: ["They are the same thing", "Overloading: same name, different params, compile-time. Overriding: same name and params, derived class, runtime.", "Overriding requires different parameter types", "Overloading is only for constructors"], answer: "B",
        ok: "✓ Correct! Overloading differs in parameters, resolved at compile time. Overriding matches exactly, resolved at runtime via vtable.",
        no: "✗ Answer: <strong>B</strong>. Overloading: different params, compile-time. Overriding: same params, runtime with virtual."
      },
      {
        id: "q6-3", type: "output", num: "Q3", text: "What is the output?",
        code: `<span class="kw">class</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="type">void</span> <span class="fn">f</span>() { cout &lt;&lt; <span class="str">"A "</span>; } <span class="cmt">// not virtual</span>
};
<span class="kw">class</span> <span class="cls">B</span> : <span class="kw">public</span> <span class="cls">A</span> {
<span class="kw">public</span>: <span class="type">void</span> <span class="fn">f</span>() { cout &lt;&lt; <span class="str">"B "</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() { <span class="cls">A</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">B</span>(); p-><span class="fn">f</span>(); <span class="kw">delete</span> p; }`,
        opts: ["B ", "A B ", "Compile error", "A "], answer: "D",
        ok: "✓ Correct! Without virtual, static binding uses the pointer's type (A*) → A::f() is always called.",
        no: "✗ Answer: <strong>D — A</strong>. No virtual = static binding. Pointer type is A*, so A::f() runs regardless of the actual object."
      },
      {
        id: "q6-4", type: "mc", num: "Q4", text: "Why must a base class destructor be virtual when using polymorphism?",
        opts: ["To allow derived classes to override the destructor", "Without virtual, only the base destructor runs when deleting through a base pointer — derived resources leak", "Virtual destructors improve performance", "The override keyword requires it"], answer: "B",
        ok: "✓ Correct! Non-virtual base destructor + delete through Base* = only ~Base runs. Derived object resources are never freed.",
        no: "✗ Answer: <strong>B</strong>. Non-virtual destructor + base pointer delete = only base cleanup, derived leaks."
      },
      {
        id: "q6-5", type: "mc", num: "Q5", text: "The override keyword causes a compile error if:",
        opts: ["The function is not public", "The function doesn't actually override any base class virtual function", "The base class is abstract", "The function has a return type"], answer: "B",
        ok: "✓ Correct! override validates that you're actually overriding a virtual function — great for catching signature mismatches.",
        no: "✗ Answer: <strong>B</strong>. override tells the compiler 'this should override a base virtual' — if it doesn't match, compile error."
      },
      {
        id: "q6-6", type: "mc", num: "Q6", text: "Runtime polymorphism through a base pointer only works when:",
        opts: ["The derived class is public", "The function is virtual in the base class", "The function is defined in both base and derived", "The function is const"], answer: "B",
        ok: "✓ Correct! Only virtual functions use the vtable for runtime dispatch. Non-virtual calls use the pointer type.",
        no: "✗ Answer: <strong>B</strong>. Only virtual enables runtime dispatch. Without it, the pointer type determines the call."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 7 · ABSTRACT CLASSES & TEMPLATES
  // ══════════════════════════════════════════════════════════

  "abs-pure": {
    badge: "Abstract · Lesson 1", title: "Pure Virtual Functions & Abstract Classes",
    intro: "A pure virtual function declares a contract — every derived class MUST implement it. A class with any pure virtual function is abstract and cannot be instantiated.",
    next: "abs-interface",
    sections: [
      {
        title: "Pure Virtual Syntax", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Shape</span> {                 <span class="cmt">// Abstract class</span>
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">virtual</span> <span class="type">double</span> <span class="fn">area</span>()      = <span class="num">0</span>; <span class="cmt">// pure virtual</span>
    <span class="kw">virtual</span> <span class="type">double</span> <span class="fn">perimeter</span>() = <span class="num">0</span>; <span class="cmt">// pure virtual</span>
    <span class="kw">virtual</span> <span class="type">void</span>   <span class="fn">draw</span>() {          <span class="cmt">// regular virtual (has body)</span>
        cout <span class="op"><<</span> <span class="str">"Drawing a shape\\n"</span>;
    }
    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">Shape</span>() {}
};
<span class="cmt">// Shape s;  ← COMPILE ERROR — cannot instantiate abstract class</span>

<span class="kw">class</span> <span class="cls">Circle</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Shape</span> {
    <span class="type">double</span> r;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Circle</span>(<span class="type">double</span> r) <span class="op">:</span> r(r) {}
    <span class="type">double</span> <span class="fn">area</span>()      <span class="kw">override</span> { <span class="kw">return</span> <span class="num">3.14159</span> <span class="op">*</span> r <span class="op">*</span> r; }
    <span class="type">double</span> <span class="fn">perimeter</span>() <span class="kw">override</span> { <span class="kw">return</span> <span class="num">2</span> <span class="op">*</span> <span class="num">3.14159</span> <span class="op">*</span> r; }
};`,
        rules: [
          "Pure virtual: append <code>= 0</code> to the declaration",
          "A class with at least one pure virtual function is <strong>abstract</strong> — cannot be instantiated",
          "A derived class must implement ALL pure virtual functions or it also becomes abstract",
          "Abstract classes can still have constructors, regular methods, and data members",
          "Pointers and references to abstract classes work fine — this is the basis of polymorphism",
        ]
      },
    ],
    tasks: [
      { title: "Abstract Shape Hierarchy", diff: "medium", text: "Create abstract <code>Shape</code> with pure virtual <code>area()</code> and <code>perimeter()</code>. Derive Circle, Rectangle, Triangle. Verify you cannot create a Shape directly. Store in a <code>Shape*</code> array and print all areas." },
      { title: "Abstract Payment System", diff: "hard", text: "Abstract <code>Payment</code> with pure virtual <code>double process(double amount)</code>. Derive: <code>CashPayment</code> (returns full amount), <code>CreditCard</code> (deducts 2% fee), <code>Crypto</code> (deducts 1.5% + $0.50). Process $100 through each via a base pointer." },
    ],
  },

  "abs-interface": {
    badge: "Abstract · Lesson 2", title: "Designing Interfaces with Abstract Classes",
    intro: "A class with only pure virtual functions acts like a Java interface — a pure contract with zero implementation.",
    next: "tpl-func",
    sections: [
      {
        title: "Interface Pattern in C++", type: "code", lang: "C++",
        code: `<span class="cmt">// Pure interface — only pure virtuals + virtual destructor</span>
<span class="kw">class</span> <span class="cls">ISerializable</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">serialize</span>(ostream<span class="op">&</span> out) <span class="kw">const</span> = <span class="num">0</span>;
    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">deserialize</span>(istream<span class="op">&</span> in)         = <span class="num">0</span>;
    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">ISerializable</span>() {}
};
<span class="kw">class</span> <span class="cls">IComparable</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="kw">virtual</span> <span class="type">int</span> <span class="fn">compareTo</span>(<span class="kw">const</span> <span class="cls">IComparable</span><span class="op">&</span>) <span class="kw">const</span> = <span class="num">0</span>;
    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">IComparable</span>() {}
};

<span class="cmt">// A class can implement multiple interfaces</span>
<span class="kw">class</span> <span class="cls">Student</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">ISerializable</span>, <span class="kw">public</span> <span class="cls">IComparable</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">serialize</span>(ostream<span class="op">&</span> out) <span class="kw">const</span> <span class="kw">override</span> { out <span class="op"><<</span> <span class="str">"student"</span>; }
    <span class="type">void</span> <span class="fn">deserialize</span>(istream<span class="op">&</span> in) <span class="kw">override</span> {}
    <span class="type">int</span>  <span class="fn">compareTo</span>(<span class="kw">const</span> <span class="cls">IComparable</span><span class="op">&</span>) <span class="kw">const</span> <span class="kw">override</span> { <span class="kw">return</span> <span class="num">0</span>; }
};`,
        rules: [
          "Convention: prefix interface names with <code>I</code> — clear signal it's a pure contract",
          "A class can inherit multiple interfaces — safe multiple inheritance",
          "Interfaces have no data members — just pure virtuals + virtual destructor",
          "Coding to interfaces makes code more flexible and testable",
        ]
      },
    ],
    tasks: [
      { title: "IPrintable Interface", diff: "medium", text: "Create <code>IPrintable</code> with pure virtual <code>void print() const</code>. Implement it in Student, Employee, and Product. Write <code>void printAll(vector&lt;IPrintable*&gt;)</code> that calls print() on each. Test with a mixed vector." },
    ],
  },

  "tpl-func": {
    badge: "Templates · Lesson 1", title: "Function Templates",
    intro: "Templates let you write one function that works for any type. The compiler generates the concrete version for each type you use.",
    next: "tpl-class",
    sections: [
      {
        title: "Template Syntax & Type Deduction", type: "code", lang: "C++",
        code: `<span class="cmt">// Without templates — one per type</span>
<span class="type">int</span>    <span class="fn">maxOf</span>(<span class="type">int</span> a, <span class="type">int</span> b)       { <span class="kw">return</span> a<span class="op">></span>b ? a : b; }
<span class="type">double</span> <span class="fn">maxOf</span>(<span class="type">double</span> a, <span class="type">double</span> b) { <span class="kw">return</span> a<span class="op">></span>b ? a : b; }

<span class="cmt">// With templates — one for all types</span>
<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T<span class="op">></span>
T <span class="fn">maxOf</span>(T a, T b) { <span class="kw">return</span> a <span class="op">></span> b ? a : b; }

<span class="cmt">// Swap template</span>
<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T<span class="op">></span>
<span class="type">void</span> <span class="fn">swapVals</span>(T<span class="op">&</span> a, T<span class="op">&</span> b) { T tmp = a; a = b; b = tmp; }

<span class="type">int</span>    a = <span class="fn">maxOf</span>(<span class="num">3</span>, <span class="num">7</span>);          <span class="cmt">// T=int deduced</span>
<span class="type">double</span> b = <span class="fn">maxOf</span>(<span class="num">3.14</span>, <span class="num">2.71</span>);   <span class="cmt">// T=double deduced</span>
<span class="type">string</span> c = <span class="fn">maxOf</span><span class="op"><</span><span class="type">string</span><span class="op">></span>(<span class="str">"a"</span>,<span class="str">"b"</span>); <span class="cmt">// T=string explicit</span>`,
        rules: [
          "Syntax: <code>template&lt;typename T&gt;</code> before the function",
          "The compiler <em>instantiates</em> a concrete version for each type used — no runtime overhead",
          "Type is usually deduced automatically from the arguments",
          "Specify explicitly with <code>funcName&lt;Type&gt;(args)</code> when deduction is ambiguous",
          "The type T must support all operations used inside (e.g. <code>&gt;</code> for maxOf)",
        ]
      },
      {
        title: "Multiple Template Parameters", type: "code", lang: "C++",
        code: `<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T, <span class="kw">typename</span> U<span class="op">></span>
<span class="type">void</span> <span class="fn">printPair</span>(T first, U second) {
    cout <span class="op"><<</span> first <span class="op"><<</span> <span class="str">" : "</span> <span class="op"><<</span> second <span class="op"><<</span> <span class="str">"\\n"</span>;
}
<span class="fn">printPair</span>(<span class="str">"score"</span>, <span class="num">99</span>);      <span class="cmt">// T=string, U=int</span>
<span class="fn">printPair</span>(<span class="num">3.14</span>, <span class="str">"pi"</span>);    <span class="cmt">// T=double, U=string</span>`,
        rules: [
          "Use multiple type parameters with comma-separated <code>typename</code> declarations",
          "Each parameter is deduced independently from the function arguments",
        ]
      },
    ],
    tasks: [
      { title: "Generic min/max/swap", diff: "easy", text: "Write template functions <code>minOf&lt;T&gt;</code>, <code>maxOf&lt;T&gt;</code>, and <code>swapVals&lt;T&gt;</code>. Test each with int, double, and string." },
      { title: "Generic print array", diff: "medium", text: "Write <code>template&lt;typename T&gt; void printArray(T arr[], int size)</code> that prints all elements separated by commas. Test with int[], double[], and string[]." },
      { title: "Generic sort (bubble)", diff: "hard", text: "Write <code>template&lt;typename T&gt; void bubbleSort(T arr[], int n)</code>. It should work for any type that supports <code>&gt;</code>. Test with int[], double[], and string[]." },
    ],
  },

  "tpl-class": {
    badge: "Templates · Lesson 2", title: "Class Templates",
    intro: "Class templates let you create a generic container or class that works with any data type — like how <code>vector&lt;int&gt;</code> and <code>vector&lt;string&gt;</code> come from the same template.",
    next: "quiz7",
    sections: [
      {
        title: "Class Template Syntax", type: "code", lang: "C++",
        code: `<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T<span class="op">></span>
<span class="kw">class</span> <span class="cls">Pair</span> {
<span class="kw">private</span><span class="op">:</span>
    T first, second;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Pair</span>(T a, T b) <span class="op">:</span> first(a), second(b) {}
    T <span class="fn">getFirst</span>()  <span class="kw">const</span> { <span class="kw">return</span> first; }
    T <span class="fn">getSecond</span>() <span class="kw">const</span> { <span class="kw">return</span> second; }
    T <span class="fn">max</span>() <span class="kw">const</span> { <span class="kw">return</span> first <span class="op">></span> second ? first : second; }
};

<span class="cmt">// Outside definition needs template prefix each time:</span>
<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T<span class="op">></span>
T <span class="cls">Pair</span><span class="op"><</span>T<span class="op">>::</span><span class="fn">max</span>() <span class="kw">const</span> { <span class="kw">return</span> first <span class="op">></span> second ? first : second; }

<span class="cls">Pair</span><span class="op"><</span><span class="type">int</span><span class="op">></span>    p1(<span class="num">3</span>, <span class="num">7</span>);
<span class="cls">Pair</span><span class="op"><</span><span class="type">string</span><span class="op">></span> p2(<span class="str">"apple"</span>, <span class="str">"mango"</span>);
cout <span class="op"><<</span> p1.<span class="fn">max</span>(); <span class="cmt">// 7</span>
cout <span class="op"><<</span> p2.<span class="fn">max</span>(); <span class="cmt">// mango</span>`,
        rules: [
          "Syntax: <code>template&lt;typename T&gt;</code> before the class definition",
          "Instantiate with: <code>ClassName&lt;ActualType&gt; obj;</code>",
          "Outside definitions need: <code>template&lt;typename T&gt; RetType ClassName&lt;T&gt;::method() { }</code>",
          "Template definitions are usually kept entirely in the header file",
          "Each instantiation (<code>Pair&lt;int&gt;</code>, <code>Pair&lt;string&gt;</code>) is a separate compiled class",
        ]
      },
      {
        title: "Generic Stack Template", type: "code", lang: "C++",
        code: `<span class="kw">template</span><span class="op"><</span><span class="kw">typename</span> T<span class="op">></span>
<span class="kw">class</span> <span class="cls">Stack</span> {
<span class="kw">private</span><span class="op">:</span>
    T     data[<span class="num">100</span>];
    <span class="type">int</span>   top = <span class="op">-</span><span class="num">1</span>;
<span class="kw">public</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">push</span>(T val)  { data[++top] = val; }
    T    <span class="fn">pop</span>()        { <span class="kw">return</span> data[top--]; }
    T    <span class="fn">peek</span>() <span class="kw">const</span> { <span class="kw">return</span> data[top]; }
    <span class="type">bool</span> <span class="fn">empty</span>() <span class="kw">const</span> { <span class="kw">return</span> top <span class="op">==</span> <span class="op">-</span><span class="num">1</span>; }
};
<span class="cls">Stack</span><span class="op"><</span><span class="type">int</span><span class="op">></span>    si; si.<span class="fn">push</span>(<span class="num">1</span>); si.<span class="fn">push</span>(<span class="num">2</span>);
<span class="cls">Stack</span><span class="op"><</span><span class="type">string</span><span class="op">></span> ss; ss.<span class="fn">push</span>(<span class="str">"hello"</span>);`,
        rules: [
          "One Stack template works for int, double, string — any copyable type",
          "The compiler generates a separate class for each instantiation",
          "Template containers are the foundation of the STL: <code>vector&lt;T&gt;</code>, <code>stack&lt;T&gt;</code>, <code>queue&lt;T&gt;</code>",
        ]
      },
    ],
    tasks: [
      { title: "Pair Template", diff: "easy", text: "Implement the <code>Pair&lt;T&gt;</code> class. Test it with <code>Pair&lt;int&gt;</code>, <code>Pair&lt;double&gt;</code>, and <code>Pair&lt;string&gt;</code>. Call <code>max()</code> on each." },
      { title: "Generic Stack", diff: "medium", text: "Implement the <code>Stack&lt;T&gt;</code> template. Push 5 items, peek at the top, pop them all in a loop. Test with both <code>Stack&lt;int&gt;</code> and <code>Stack&lt;string&gt;</code>." },
      { title: "Generic Queue", diff: "hard", text: "Implement <code>Queue&lt;T&gt;</code> with <code>enqueue(T)</code>, <code>T dequeue()</code>, <code>T front() const</code>, and <code>bool empty() const</code>. Test with ints and strings. Then write a function <code>template&lt;typename T&gt; void transfer(Queue&lt;T&gt;&amp; src, Stack&lt;T&gt;&amp; dst)</code> that moves all items." },
    ],
  },

  quiz7: {
    badge: "Quiz 7", title: "Abstract Classes & Templates",
    intro: "Pure virtuals, abstract classes, interface design, function templates, class templates.",
    type: "quiz", quizId: "7", next: "io-streams",
    questions: [
      {
        id: "q7-1", type: "mc", num: "Q1", text: "A class becomes abstract when:",
        opts: ["It has more than 5 members", "It inherits from another class", "It contains at least one pure virtual function", "It has a private constructor"], answer: "C",
        ok: "✓ Correct! Any class with at least one pure virtual function (= 0) is abstract and cannot be instantiated.",
        no: "✗ Answer: <strong>C</strong>. One pure virtual function is enough to make the class abstract."
      },
      {
        id: "q7-2", type: "mc", num: "Q2", text: "If a derived class does NOT implement all pure virtual functions it inherits, it:",
        opts: ["Gets a runtime error on instantiation", "Also becomes abstract — cannot be instantiated", "Compiles fine but the functions do nothing", "Inherits the base class implementations automatically"], answer: "B",
        ok: "✓ Correct! Failing to implement all pure virtuals makes the derived class abstract too — it cannot be instantiated until all are overridden.",
        no: "✗ Answer: <strong>B</strong>. Any unimplemented pure virtuals make the class abstract — it cannot be instantiated."
      },
      {
        id: "q7-3", type: "mc", num: "Q3", text: "What does <code>template&lt;typename T&gt;</code> mean?",
        opts: ["T is a global variable", "T is a placeholder for any type, determined at the point of use", "T must be an integer type", "T is a pointer type"], answer: "B",
        ok: "✓ Correct! typename T declares a type placeholder — the compiler substitutes the real type when the template is used.",
        no: "✗ Answer: <strong>B</strong>. T is a type placeholder substituted by the compiler for each instantiation."
      },
      {
        id: "q7-4", type: "output", num: "Q4", text: "What is the output?",
        code: `<span class="kw">template</span>&lt;<span class="kw">typename</span> T&gt;
T <span class="fn">add</span>(T a, T b) { <span class="kw">return</span> a + b; }
<span class="type">int</span> <span class="fn">main</span>() {
    cout &lt;&lt; <span class="fn">add</span>(<span class="num">3</span>, <span class="num">4</span>) &lt;&lt; <span class="str">" "</span> &lt;&lt; <span class="fn">add</span>(<span class="str">"hi"</span>, <span class="str">"!"</span>);
}`,
        opts: ["3 4 hi!", "3hi !", "7 hi!", "Compile error — T can't be string"], answer: "C",
        ok: "✓ Correct! add(3,4) instantiates T=int → 7. add(\"hi\",\"!\") instantiates T=const char* but string concatenation works → 'hi!'.",
        no: "✗ Answer: <strong>C</strong>. add(3,4) → T=int → 7. add('hi','!') → string concatenation → 'hi!'. Output: '7 hi!'"
      },
      {
        id: "q7-5", type: "mc", num: "Q5", text: "How do you instantiate a class template Stack for int?",
        opts: ["Stack s;", "Stack&lt;int&gt; s;", "template Stack s = int;", "int Stack s;"], answer: "B",
        ok: "✓ Correct! Class templates require explicit type arguments: Stack&lt;int&gt; s;",
        no: "✗ Answer: <strong>B</strong>. Class templates need explicit type: Stack<int> s; (unlike function templates which can deduce)."
      },
      {
        id: "q7-6", type: "mc", num: "Q6", text: "Where should class template definitions normally be placed?",
        opts: ["Only in a .cpp file", "In a separate template.h file", "In the same header file as the declaration", "In main.cpp only"], answer: "C",
        ok: "✓ Correct! Template definitions must be visible wherever they're instantiated — typically kept entirely in the header file.",
        no: "✗ Answer: <strong>C</strong>. The compiler needs to see the full template definition at the point of instantiation — so it goes in the header."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 8 · STREAM I/O, FILE PROCESSING & EXCEPTIONS
  // ══════════════════════════════════════════════════════════

  "io-streams": {
    badge: "I/O · Lesson 1", title: "cin / cout & Output Formatting",
    intro: "<code>cin</code> and <code>cout</code> are objects connected to standard input and output. C++ provides powerful formatting tools through stream manipulators.",
    next: "io-manip",
    sections: [
      {
        title: "Basic I/O Review & Formatting", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;iomanip&gt;</span>    <span class="cmt">// for formatting manipulators</span>
<span class="kw">using namespace</span> std;

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="type">double</span> price = <span class="num">3.14159</span>;

    <span class="cmt">// Field width + alignment</span>
    cout <span class="op"><<</span> setw(<span class="num">10</span>) <span class="op"><<</span> <span class="str">"Price"</span> <span class="op"><<</span> setw(<span class="num">10</span>) <span class="op"><<</span> <span class="str">"Qty"</span> <span class="op"><<</span> <span class="str">"\\n"</span>;

    <span class="cmt">// Fixed decimal precision</span>
    cout <span class="op"><<</span> fixed <span class="op"><<</span> setprecision(<span class="num">2</span>) <span class="op"><<</span> price <span class="op"><<</span> <span class="str">"\\n"</span>; <span class="cmt">// 3.14</span>

    <span class="cmt">// Left / right alignment</span>
    cout <span class="op"><<</span> left  <span class="op"><<</span> setw(<span class="num">15</span>) <span class="op"><<</span> <span class="str">"Left"</span>  <span class="op"><<</span> <span class="str">"\\n"</span>;
    cout <span class="op"><<</span> right <span class="op"><<</span> setw(<span class="num">15</span>) <span class="op"><<</span> <span class="str">"Right"</span> <span class="op"><<</span> <span class="str">"\\n"</span>;

    <span class="cmt">// Boolean output</span>
    cout <span class="op"><<</span> boolalpha <span class="op"><<</span> <span class="kw">true</span> <span class="op"><<</span> <span class="str">"\\n"</span>; <span class="cmt">// "true" not 1</span>

    <span class="type">string</span> name; <span class="type">int</span> age;
    cin <span class="op">>></span> name <span class="op">>></span> age;         <span class="cmt">// reads whitespace-separated tokens</span>
    getline(cin, name);          <span class="cmt">// reads full line including spaces</span>
}`,
        rules: [
          "<code>setw(n)</code> sets the minimum field width for the NEXT output only — not sticky",
          "<code>setprecision(n)</code> with <code>fixed</code> gives exactly n decimal places — sticky until changed",
          "<code>left</code> / <code>right</code> set alignment — sticky",
          "<code>cin &gt;&gt;</code> skips whitespace and reads one token. Use <code>getline()</code> to read full lines",
          "<code>cin.ignore()</code> discards the leftover newline before calling <code>getline()</code>",
        ]
      },
    ],
    tasks: [
      { title: "Formatted Table", diff: "easy", text: "Print a table of 5 products with columns: Name (left-aligned, width 20), Price (right-aligned, width 8, 2 decimal places), Quantity (width 6). Use setw, left, right, fixed, setprecision." },
      { title: "Mixed cin and getline", diff: "medium", text: "Ask user for their age (cin >>) then their full name (getline). Remember to call cin.ignore() between them. Print: 'Hello [name], you are [age] years old'." },
    ],
  },

  "io-manip": {
    badge: "I/O · Lesson 2", title: "Stream Manipulators",
    intro: "Manipulators modify the formatting state of a stream. Some are sticky (persist), others apply only once.",
    next: "io-states",
    sections: [
      {
        title: "Common Manipulators Reference", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;iomanip&gt;</span>
<span class="kw">using namespace</span> std;

<span class="cmt">// ── NUMBER FORMAT ─────────────────────────────────────────</span>
cout <span class="op"><<</span> fixed        <span class="op"><<</span> <span class="num">3.14</span>;    <span class="cmt">// always show decimal point</span>
cout <span class="op"><<</span> scientific   <span class="op"><<</span> <span class="num">3.14</span>;    <span class="cmt">// 3.140000e+00</span>
cout <span class="op"><<</span> setprecision(<span class="num">4</span>) <span class="op"><<</span> <span class="num">3.14</span>; <span class="cmt">// 4 sig figs or decimal places</span>

<span class="cmt">// ── INTEGER BASE ──────────────────────────────────────────</span>
cout <span class="op"><<</span> hex   <span class="op"><<</span> <span class="num">255</span>;     <span class="cmt">// ff</span>
cout <span class="op"><<</span> oct   <span class="op"><<</span> <span class="num">255</span>;     <span class="cmt">// 377</span>
cout <span class="op"><<</span> dec   <span class="op"><<</span> <span class="num">255</span>;     <span class="cmt">// 255  (reset)</span>
cout <span class="op"><<</span> showbase <span class="op"><<</span> hex <span class="op"><<</span> <span class="num">255</span>; <span class="cmt">// 0xff</span>

<span class="cmt">// ── FILL CHARACTER ────────────────────────────────────────</span>
cout <span class="op"><<</span> setfill(<span class="str">'0'</span>) <span class="op"><<</span> setw(<span class="num">5</span>) <span class="op"><<</span> <span class="num">42</span>; <span class="cmt">// 00042</span>

<span class="cmt">// ── MISCELLANEOUS ─────────────────────────────────────────</span>
cout <span class="op"><<</span> boolalpha  <span class="op"><<</span> <span class="kw">true</span>;     <span class="cmt">// "true"</span>
cout <span class="op"><<</span> noboolalpha <span class="op"><<</span> <span class="kw">true</span>;    <span class="cmt">// "1"</span>
cout <span class="op"><<</span> showpos <span class="op"><<</span> <span class="num">42</span>;          <span class="cmt">// "+42"</span>
cout <span class="op"><<</span> uppercase <span class="op"><<</span> hex <span class="op"><<</span> <span class="num">255</span>; <span class="cmt">// "FF"</span>`,
        rules: [
          "<strong>Sticky manipulators</strong>: fixed, scientific, setprecision, left, right, hex, oct, dec, boolalpha, showbase, setfill",
          "<strong>Non-sticky</strong> (applies once): <code>setw</code> — must be repeated for each value",
          "Reset numeric base with <code>dec</code>; reset float format with <code>defaultfloat</code>",
          "All manipulators from <code>&lt;iomanip&gt;</code> except <code>endl</code> and <code>flush</code>",
        ]
      },
    ],
    tasks: [
      { title: "Invoice Formatter", diff: "medium", text: "Print an invoice: item name (left, width 20), unit price (fixed, 2 decimal places, width 10), quantity (width 6), total (width 12). Add a separator line and a total row. Use setfill(' ') and setfill('-') appropriately." },
      { title: "Hex Dump", diff: "hard", text: "Write a function <code>void hexDump(int arr[], int n)</code> that prints each value in decimal (width 6), hex with prefix (0xff style), and octal. Use setfill, setw, showbase, and uppercase." },
    ],
  },

  "io-states": {
    badge: "I/O · Lesson 3", title: "Stream States & Error Handling",
    intro: "Streams maintain state flags that tell you whether operations succeeded. Checking them prevents silent failures.",
    next: "file-seq",
    sections: [
      {
        title: "Stream State Flags", type: "code", lang: "C++",
        code: `<span class="type">int</span> n;
cin <span class="op">>></span> n;

<span class="cmt">// Check individual flags</span>
<span class="kw">if</span> (cin.<span class="fn">fail</span>())    cout <span class="op"><<</span> <span class="str">"Input failed (bad type)"</span>;
<span class="kw">if</span> (cin.<span class="fn">eof</span>())     cout <span class="op"><<</span> <span class="str">"End of file reached"</span>;
<span class="kw">if</span> (cin.<span class="fn">bad</span>())     cout <span class="op"><<</span> <span class="str">"Unrecoverable error"</span>;
<span class="kw">if</span> (cin.<span class="fn">good</span>())    cout <span class="op"><<</span> <span class="str">"All good"</span>;

<span class="cmt">// Clear error and discard bad input</span>
cin.<span class="fn">clear</span>();                            <span class="cmt">// reset error flags</span>
cin.<span class="fn">ignore</span>(numeric_limits<span class="op"><</span>streamsize<span class="op">>::</span>max(), <span class="str">'\\n'</span>); <span class="cmt">// flush line</span>

<span class="cmt">// Robust input loop</span>
<span class="kw">while</span> (!(cin <span class="op">>></span> n)) {
    cout <span class="op"><<</span> <span class="str">"Enter a valid integer: "</span>;
    cin.<span class="fn">clear</span>();
    cin.<span class="fn">ignore</span>(<span class="num">1000</span>, <span class="str">'\\n'</span>);
}`,
        rules: [
          "<code>fail()</code>: logical error — wrong type or format. Most common.",
          "<code>eof()</code>: end of input reached",
          "<code>bad()</code>: hardware-level unrecoverable error",
          "<code>good()</code>: all flags clear — stream is healthy",
          "After an error, call <code>clear()</code> to reset flags, then <code>ignore()</code> to discard bad input",
        ]
      },
    ],
    tasks: [
      { title: "Robust Integer Input", diff: "medium", text: "Write a function <code>int getValidInt(string prompt, int min, int max)</code> that keeps asking until the user enters a valid integer in range. Use cin.fail(), cin.clear(), cin.ignore() in a loop." },
    ],
  },

  "file-seq": {
    badge: "Files · Lesson 1", title: "Sequential File Processing",
    intro: "Files are opened with <code>ofstream</code> (write) and <code>ifstream</code> (read). Sequential processing reads from start to end in order.",
    next: "file-random",
    sections: [
      {
        title: "Writing & Reading Files", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;fstream&gt;</span>
<span class="kw">using namespace</span> std;

<span class="cmt">// ── WRITE ────────────────────────────────────────────────</span>
ofstream out(<span class="str">"data.txt"</span>);
<span class="kw">if</span> (!out) { cerr <span class="op"><<</span> <span class="str">"Cannot open file!"</span>; <span class="kw">return</span> <span class="num">1</span>; }
out <span class="op"><<</span> <span class="str">"Alice"</span> <span class="op"><<</span> <span class="str">" "</span> <span class="op"><<</span> <span class="num">90</span> <span class="op"><<</span> <span class="str">"\\n"</span>;
out <span class="op"><<</span> <span class="str">"Bob"</span>   <span class="op"><<</span> <span class="str">" "</span> <span class="op"><<</span> <span class="num">85</span> <span class="op"><<</span> <span class="str">"\\n"</span>;
out.<span class="fn">close</span>();  <span class="cmt">// always close when done</span>

<span class="cmt">// ── READ ─────────────────────────────────────────────────</span>
ifstream in(<span class="str">"data.txt"</span>);
<span class="kw">if</span> (!in) { cerr <span class="op"><<</span> <span class="str">"Cannot open file!"</span>; <span class="kw">return</span> <span class="num">1</span>; }
<span class="type">string</span> name; <span class="type">int</span> score;
<span class="kw">while</span> (in <span class="op">>></span> name <span class="op">>></span> score)
    cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">": "</span> <span class="op"><<</span> score <span class="op"><<</span> <span class="str">"\\n"</span>;
in.<span class="fn">close</span>();

<span class="cmt">// ── APPEND ───────────────────────────────────────────────</span>
ofstream app(<span class="str">"data.txt"</span>, ios<span class="op">::</span>app); <span class="cmt">// append mode</span>
app <span class="op"><<</span> <span class="str">"Charlie"</span> <span class="op"><<</span> <span class="str">" "</span> <span class="op"><<</span> <span class="num">92</span> <span class="op"><<</span> <span class="str">"\\n"</span>;`,
        rules: [
          "<code>ofstream</code> opens for writing (truncates by default). <code>ifstream</code> opens for reading.",
          "Always check if the file opened: <code>if (!stream) { /* error */ }</code>",
          "Use <code>ios::app</code> to append instead of overwrite",
          "Always close files explicitly — or use RAII (destructor auto-closes on scope exit)",
          "<code>while (in &gt;&gt; var)</code> is the standard idiom for reading until EOF",
        ]
      },
    ],
    tasks: [
      { title: "Student Grade File", diff: "easy", text: "Write a program that asks the user for 3 student names and grades, saves them to 'grades.txt', then reads the file back and prints all entries." },
      { title: "CSV File Reader", diff: "medium", text: "Create a CSV file manually with: name,age,city. Write a program that reads the file line by line using getline, splits each line at commas, and prints the fields. Test with at least 5 rows." },
      { title: "Log File with Timestamps", diff: "hard", text: "Write a function <code>void log(string message)</code> that appends a timestamped entry to 'app.log'. Format: [2025-01-01 12:00:00] message. Call it from multiple places. Then write a reader that counts total entries and shows the last 5." },
    ],
  },

  "file-random": {
    badge: "Files · Lesson 2", title: "Random-Access File Processing",
    intro: "Random-access files allow jumping to any position using <code>seekg/seekp</code> — ideal for fixed-size record databases.",
    next: "exc-basics",
    sections: [
      {
        title: "seekg / seekp & Fixed Records", type: "code", lang: "C++",
        code: `<span class="kw">struct</span> <span class="cls">Record</span> { <span class="type">int</span> id; <span class="type">char</span> name[<span class="num">20</span>]; <span class="type">double</span> balance; };

<span class="cmt">// Write records</span>
ofstream out(<span class="str">"bank.dat"</span>, ios<span class="op">::</span>binary);
<span class="cls">Record</span> r = { <span class="num">1</span>, <span class="str">"Alice"</span>, <span class="num">1500.0</span> };
out.<span class="fn">write</span>((<span class="type">char</span><span class="op">*</span>)<span class="op">&</span>r, <span class="kw">sizeof</span>(r));

<span class="cmt">// Read specific record by index (random access)</span>
ifstream in(<span class="str">"bank.dat"</span>, ios<span class="op">::</span>binary);
<span class="type">int</span> idx = <span class="num">0</span>; <span class="cmt">// record index to jump to</span>
in.<span class="fn">seekg</span>(idx <span class="op">*</span> <span class="kw">sizeof</span>(<span class="cls">Record</span>));   <span class="cmt">// jump to position</span>
in.<span class="fn">read</span> ((<span class="type">char</span><span class="op">*</span>)<span class="op">&</span>r, <span class="kw">sizeof</span>(r));    <span class="cmt">// read one record</span>

<span class="cmt">// Update a record in place</span>
fstream rw(<span class="str">"bank.dat"</span>, ios<span class="op">::</span>binary <span class="op">|</span> ios<span class="op">::</span>in <span class="op">|</span> ios<span class="op">::</span>out);
rw.<span class="fn">seekp</span>(idx <span class="op">*</span> <span class="kw">sizeof</span>(<span class="cls">Record</span>));
rw.<span class="fn">write</span>((<span class="type">char</span><span class="op">*</span>)<span class="op">&</span>r, <span class="kw">sizeof</span>(r));`,
        rules: [
          "Random-access requires fixed-size records — use binary mode (<code>ios::binary</code>)",
          "<code>seekg(pos)</code> positions the read pointer; <code>seekp(pos)</code> positions the write pointer",
          "Position formula: <code>recordIndex * sizeof(RecordType)</code>",
          "Use <code>fstream</code> (read+write) for in-place updates",
          "Use <code>ios::in | ios::out</code> to open for both reading and writing without truncating",
        ]
      },
    ],
    tasks: [
      { title: "Binary Record Writer/Reader", diff: "medium", text: "Define a struct <code>Student { int id; char name[30]; double gpa; }</code>. Write 3 students to a binary file. Then read them back one by one. Jump directly to record index 1 using seekg and print only that student." },
      { title: "Update Record in Place", diff: "hard", text: "Extend the above: open the file with fstream (in|out|binary). Update the GPA of the student at index 1 without rewriting the whole file. Read all records back and confirm only that one changed." },
    ],
  },

  "exc-basics": {
    badge: "Exceptions · Lesson 1", title: "Exception Handling: try, catch, throw",
    intro: "Exceptions separate error-handling code from normal logic. A <code>throw</code> transfers control to the nearest matching <code>catch</code>.",
    next: "quiz8",
    sections: [
      {
        title: "try / catch / throw", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;stdexcept&gt;</span>

<span class="type">double</span> <span class="fn">divide</span>(<span class="type">double</span> a, <span class="type">double</span> b) {
    <span class="kw">if</span> (b == <span class="num">0</span>) <span class="kw">throw</span> invalid_argument(<span class="str">"Division by zero!"</span>);
    <span class="kw">return</span> a <span class="op">/</span> b;
}

<span class="type">int</span> <span class="fn">main</span>() {
    <span class="kw">try</span> {
        cout <span class="op"><<</span> <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">2</span>);   <span class="cmt">// OK: prints 5</span>
        cout <span class="op"><<</span> <span class="fn">divide</span>(<span class="num">10</span>, <span class="num">0</span>);   <span class="cmt">// throws!</span>
    }
    <span class="kw">catch</span> (<span class="kw">const</span> invalid_argument<span class="op">&</span> e) {
        cerr <span class="op"><<</span> <span class="str">"Error: "</span> <span class="op"><<</span> e.<span class="fn">what</span>() <span class="op"><<</span> <span class="str">"\\n"</span>;
    }
    <span class="kw">catch</span> (...) {
        cerr <span class="op"><<</span> <span class="str">"Unknown error\\n"</span>; <span class="cmt">// catch-all</span>
    }
    cout <span class="op"><<</span> <span class="str">"Program continues\\n"</span>;
}`,
        rules: [
          "<code>throw expr</code> stops execution and unwinds the stack until a matching catch is found",
          "<code>catch (const ExceptionType& e)</code> — catch by const reference to avoid slicing",
          "Standard exception hierarchy: <code>exception → logic_error → invalid_argument, out_of_range</code>; <code>exception → runtime_error → overflow_error</code>",
          "Use <code>catch (...)</code> as a last-resort catch-all — always put it last",
          "After the catch block, program continues normally — the exception is 'handled'",
          "Unhandled exceptions terminate the program via <code>std::terminate()</code>",
        ]
      },
      {
        title: "Custom Exception Classes", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">InsufficientFundsException</span> <span class="op">:</span> <span class="kw">public</span> std<span class="op">::</span>exception {
<span class="kw">private</span><span class="op">:</span>
    <span class="type">double</span> shortfall;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">InsufficientFundsException</span>(<span class="type">double</span> s) <span class="op">:</span> shortfall(s) {}
    <span class="kw">const</span> <span class="type">char</span><span class="op">*</span> <span class="fn">what</span>() <span class="kw">const</span> noexcept <span class="kw">override</span> {
        <span class="kw">return</span> <span class="str">"Insufficient funds"</span>;
    }
    <span class="type">double</span> <span class="fn">getShortfall</span>() <span class="kw">const</span> { <span class="kw">return</span> shortfall; }
};

<span class="kw">void</span> <span class="fn">withdraw</span>(<span class="type">double</span> bal, <span class="type">double</span> amount) {
    <span class="kw">if</span> (amount <span class="op">></span> bal) <span class="kw">throw</span> <span class="cls">InsufficientFundsException</span>(amount <span class="op">-</span> bal);
}`,
        rules: [
          "Derive custom exceptions from <code>std::exception</code> (or its subclasses)",
          "Override <code>what()</code> marked <code>noexcept</code> to provide a human-readable description",
          "Store relevant error data in the exception object — accessible after catching",
          "Use specific exception types for different errors — easier to catch selectively",
        ]
      },
    ],
    tasks: [
      { title: "Division Guard", diff: "easy", text: "Write a <code>divide(a, b)</code> function that throws <code>invalid_argument</code> if b is 0. Wrap calls in try/catch. Test with valid and zero denominators." },
      { title: "BankAccount with Exceptions", diff: "medium", text: "Create <code>BankAccount</code> where <code>withdraw()</code> throws <code>InsufficientFundsException</code> if balance is too low. Catch it and print the shortfall. Also throw <code>invalid_argument</code> if a negative amount is passed." },
      { title: "File Exception Handler", diff: "hard", text: "Wrap file operations in try/catch. Throw a custom <code>FileNotFoundException</code> if the file can't be opened. Throw a custom <code>ParseException</code> if a line has bad data. Demonstrate catching each type separately." },
    ],
  },

  quiz8: {
    badge: "Quiz 8", title: "Stream I/O, Files & Exceptions",
    intro: "Formatting, file I/O (sequential & random), stream states, exception handling.",
    type: "quiz", quizId: "8", next: "gui-intro",
    questions: [
      {
        id: "q8-1", type: "mc", num: "Q1", text: "Which manipulator sets a fixed number of decimal places AND is sticky?",
        opts: ["setw(n)", "fixed and setprecision(n)", "setfill('0')", "showbase"], answer: "B",
        ok: "✓ Correct! fixed + setprecision(n) together produce exactly n decimal places and both are sticky (persist until changed).",
        no: "✗ Answer: <strong>B</strong>. fixed + setprecision(n) is the combination — both are sticky. setw applies only once."
      },
      {
        id: "q8-2", type: "mc", num: "Q2", text: "After a failed cin >> int, what must you do before the next read attempt?",
        opts: ["Close and reopen cin", "Call cin.clear() then cin.ignore()", "Call cin.reset()", "Nothing — cin recovers automatically"], answer: "C",
        ok: "✓ Correct! cin.clear() resets the error flags; cin.ignore() discards the bad input from the buffer. Both are needed.",
        no: "✗ Answer: <strong>C</strong>. You need cin.clear() to reset flags AND cin.ignore() to flush the bad input. Skipping either leaves the stream stuck."
      },
      {
        id: "q8-3", type: "mc", num: "Q3", text: "What is the correct class to open a file for writing?",
        opts: ["ifstream", "fstream", "ofstream", "wstream"], answer: "B",
        ok: "✓ Correct! ofstream (output file stream) is used for writing. ifstream is for reading, fstream for both.",
        no: "✗ Answer: <strong>C</strong>. ofstream = output file stream = writing. ifstream = input = reading."
      },
      {
        id: "q8-4", type: "mc", num: "Q4", text: "For random-access files, how do you jump to record index N?",
        opts: ["file.goto(N)", "file.seek(N)", "file.seekg(N * sizeof(RecordType))", "file.jump(N * sizeof(RecordType))"], answer: "C",
        ok: "✓ Correct! seekg(N * sizeof(RecordType)) positions the read pointer at the start of record N.",
        no: "✗ Answer: <strong>C</strong>. seekg/seekp with recordIndex * sizeof(record) is the formula for random access."
      },
      {
        id: "q8-5", type: "mc", num: "Q5", text: "Exceptions are caught by:",
        opts: ["The throw statement", "catch (const ExceptionType& e)", "The try block", "The compiler automatically"], answer: "B",
        ok: "✓ Correct! catch clauses match by type. Always catch by const reference to avoid object slicing.",
        no: "✗ Answer: <strong>B</strong>. catch(const Type& e) catches matching exceptions. Catch by const reference — never by value."
      },
      {
        id: "q8-6", type: "mc", num: "Q6", text: "What does catch (...) do?",
        opts: ["Catches only std::exception types", "Catches integer exceptions only", "Catches every type of exception — the catch-all", "Rethrows the exception"], answer: "C",
        ok: "✓ Correct! catch(...) is a catch-all that matches any exception type. Always put it last in a chain of catch blocks.",
        no: "✗ Answer: <strong>C</strong>. catch(...) catches everything. It should always be the last catch clause."
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  //  MODULE 9 · GUI WITH Qt
  // ══════════════════════════════════════════════════════════

  "gui-intro": {
    badge: "GUI · Lesson 1", title: "Console vs GUI / Qt Intro",
    intro: "A GUI program responds to user events — clicks, key presses — rather than running top-to-bottom. Qt is the industry-standard C++ GUI framework.",
    next: "gui-window",
    sections: [
      {
        title: "Console vs Event-Driven", type: "cards", items: [
          { head: "Console Program", text: "Runs sequentially: ask → read → process → print → repeat. The program controls the flow." },
          { head: "GUI Program", text: "Runs an event loop: waits for events (click, keypress), dispatches them to handlers, then waits again. The user controls the flow." },
          { head: "Event Loop", text: "Qt's QApplication::exec() starts the event loop. It runs until the main window is closed." },
          { head: "Qt Creator", text: "The IDE for Qt. Has a visual form designer (drag-and-drop widgets) and integrates with qmake/CMake build system." },
        ]
      },
      {
        title: "Minimal Qt Application", type: "code", lang: "C++",
        code: `<span class="cmt">// main.cpp</span>
<span class="kw">#include</span> <span class="str">&lt;QApplication&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QMainWindow&gt;</span>

<span class="type">int</span> <span class="fn">main</span>(<span class="type">int</span> argc, <span class="type">char</span><span class="op">*</span> argv[]) {
    QApplication app(argc, argv);  <span class="cmt">// manages the app & event loop</span>

    QMainWindow window;
    window.<span class="fn">setWindowTitle</span>(<span class="str">"My First Qt App"</span>);
    window.<span class="fn">resize</span>(<span class="num">600</span>, <span class="num">400</span>);
    window.<span class="fn">show</span>();

    <span class="kw">return</span> app.<span class="fn">exec</span>(); <span class="cmt">// start event loop — blocks until window closed</span>
}`,
        rules: [
          "Every Qt app needs exactly one <code>QApplication</code> object created first",
          "<code>app.exec()</code> starts the event loop — it blocks until the last window is closed",
          "<code>QMainWindow</code> provides a window with menu bar, toolbar, status bar slots",
          "<code>QWidget</code> is the simpler base — use it for child widgets or simpler windows",
          "Qt class names all start with <code>Q</code>",
        ]
      },
    ],
    tasks: [
      { title: "Create Your First Window", diff: "easy", text: "In Qt Creator: File → New Project → Qt Widgets Application. Run it. You should see an empty window. Change the title and size using setWindowTitle and resize." },
      { title: "Compare Event Loops", diff: "easy", text: "Write a console C++ program with a while loop that reads commands. Then look at your Qt app. Write a short paragraph explaining the difference in control flow between the two." },
    ],
  },

  "gui-window": {
    badge: "GUI · Lesson 2", title: "First Window, Buttons, Labels & Text Fields",
    intro: "Qt widgets are the building blocks of a GUI. You can place them visually in the form designer or create them in code.",
    next: "gui-signals",
    sections: [
      {
        title: "Core Widgets in Code", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;QWidget&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QPushButton&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QLabel&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QLineEdit&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QVBoxLayout&gt;</span>

<span class="type">int</span> <span class="fn">main</span>(<span class="type">int</span> argc, <span class="type">char</span><span class="op">*</span> argv[]) {
    QApplication app(argc, argv);

    QWidget window;
    window.<span class="fn">setWindowTitle</span>(<span class="str">"Widgets Demo"</span>);

    QLabel<span class="op">*</span>      label  = <span class="kw">new</span> QLabel(<span class="str">"Enter your name:"</span>);
    QLineEdit<span class="op">*</span>  input  = <span class="kw">new</span> QLineEdit();
    QPushButton<span class="op">*</span> btn   = <span class="kw">new</span> QPushButton(<span class="str">"Say Hello"</span>);
    QLabel<span class="op">*</span>      output = <span class="kw">new</span> QLabel(<span class="str">""</span>);

    QVBoxLayout<span class="op">*</span> layout = <span class="kw">new</span> QVBoxLayout(<span class="op">&</span>window);
    layout<span class="op">-></span><span class="fn">addWidget</span>(label);
    layout<span class="op">-></span><span class="fn">addWidget</span>(input);
    layout<span class="op">-></span><span class="fn">addWidget</span>(btn);
    layout<span class="op">-></span><span class="fn">addWidget</span>(output);

    window.<span class="fn">show</span>();
    <span class="kw">return</span> app.<span class="fn">exec</span>();
}`,
        rules: [
          "<code>QLabel</code>: displays text or images (read-only)",
          "<code>QLineEdit</code>: single-line text input. Use <code>text()</code> to get value, <code>setText()</code> to set",
          "<code>QPushButton</code>: clickable button. Connect its <code>clicked()</code> signal to a slot",
          "<code>QVBoxLayout</code>: stacks widgets vertically. <code>QHBoxLayout</code> arranges horizontally",
          "Widgets created with <code>new</code> — Qt's parent system manages memory automatically",
        ]
      },
    ],
    tasks: [
      { title: "Layout Practice", diff: "easy", text: "Using Qt Creator's form designer (or code), create a window with: a label 'Username:', a QLineEdit for input, a label 'Password:', a QLineEdit (echoMode = Password), and a QPushButton 'Login'. Arrange them vertically." },
      { title: "Widget Properties", diff: "medium", text: "In code: create a QLabel and set its text, font size (via setFont), and alignment. Create a QPushButton and disable it initially (setEnabled(false)). Run and verify the visual appearance." },
    ],
  },

  "gui-signals": {
    badge: "GUI · Lesson 3", title: "Signals & Slots",
    intro: "Signals & Slots is Qt's event system. A signal is emitted when something happens; a slot is a function that handles it. <code>connect()</code> wires them together.",
    next: "gui-oop",
    sections: [
      {
        title: "Connecting Signals to Slots", type: "code", lang: "C++",
        code: `<span class="cmt">// Lambda slot (simplest — C++11)</span>
QObject<span class="op">::</span><span class="fn">connect</span>(btn, <span class="op">&</span>QPushButton<span class="op">::</span>clicked, [=]() {
    <span class="type">QString</span> name = input<span class="op">-></span><span class="fn">text</span>();
    output<span class="op">-></span><span class="fn">setText</span>(<span class="str">"Hello, "</span> <span class="op">+</span> name <span class="op">+</span> <span class="str">"!"</span>);
});

<span class="cmt">// Connect to a class method slot (requires Q_OBJECT + slots:)</span>
<span class="kw">class</span> <span class="cls">MyWindow</span> <span class="op">:</span> <span class="kw">public</span> QMainWindow {
    Q_OBJECT
<span class="kw">public slots</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">onButtonClicked</span>() {
        output<span class="op">-></span><span class="fn">setText</span>(<span class="str">"Button was clicked!"</span>);
    }
};

<span class="cmt">// In constructor:</span>
<span class="fn">connect</span>(btn, <span class="op">&</span>QPushButton<span class="op">::</span>clicked, <span class="kw">this</span>, <span class="op">&</span>MyWindow<span class="op">::</span>onButtonClicked);`,
        rules: [
          "Syntax: <code>connect(sender, &SenderClass::signal, receiver, &ReceiverClass::slot)</code>",
          "Lambda shortcut: <code>connect(btn, &QPushButton::clicked, [=]() { /* code */ })</code>",
          "Slots in a class require: the <code>Q_OBJECT</code> macro AND a <code>slots:</code> section",
          "One signal can be connected to multiple slots",
          "Qt automatically disconnects connections when the sender or receiver is deleted",
          "<code>QString</code> is Qt's string class. Convert to/from std::string with <code>.toStdString()</code> / <code>QString::fromStdString()</code>",
        ]
      },
    ],
    tasks: [
      { title: "Hello World Button", diff: "easy", text: "Create a window with a QLineEdit and a QPushButton 'Greet'. Connect the button's clicked() signal to a lambda that reads the text and shows 'Hello, [name]!' in a QLabel." },
      { title: "Counter with Signals", diff: "medium", text: "Create two buttons: 'Increment' and 'Reset'. Connect each to a slot. Increment adds 1 to a counter, Reset sets it to 0. Display the counter value in a QLabel that updates on every click." },
      { title: "Input Validation Live", diff: "hard", text: "Connect QLineEdit::textChanged signal to a slot that validates the input in real time. If the text is empty or less than 3 characters, show a red warning label. If valid, show a green checkmark. Disable the Submit button while invalid." },
    ],
  },

  "gui-oop": {
    badge: "GUI · Lesson 4", title: "GUI + OOP: Designing with Classes",
    intro: "The proper way to build Qt apps: subclass <code>QMainWindow</code> (or QWidget), keep UI and logic separate, and connect GUI events to your own class methods.",
    next: "gui-files",
    sections: [
      {
        title: "Subclassing QMainWindow", type: "code", lang: "C++",
        code: `<span class="cmt">// mainwindow.h</span>
<span class="kw">#pragma once</span>
<span class="kw">#include</span> <span class="str">&lt;QMainWindow&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QLineEdit&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QLabel&gt;</span>

<span class="kw">class</span> <span class="cls">MainWindow</span> <span class="op">:</span> <span class="kw">public</span> QMainWindow {
    Q_OBJECT
<span class="kw">private</span><span class="op">:</span>
    QLineEdit<span class="op">*</span> nameInput;
    QLineEdit<span class="op">*</span> gradeInput;
    QLabel<span class="op">*</span>    resultLabel;
    <span class="type">void</span> <span class="fn">setupUI</span>();

<span class="kw">private slots</span><span class="op">:</span>
    <span class="type">void</span> <span class="fn">onSubmit</span>();
    <span class="type">void</span> <span class="fn">onClear</span>();

<span class="kw">public</span><span class="op">:</span>
    <span class="kw">explicit</span> <span class="cls">MainWindow</span>(QWidget<span class="op">*</span> parent = <span class="kw">nullptr</span>);
};`,
        rules: [
          "Subclass QMainWindow (or QWidget) — put widget pointers as private data members",
          "The <code>Q_OBJECT</code> macro is required in any class that uses signals/slots",
          "Put slots in a <code>private slots:</code> (or <code>public slots:</code>) section",
          "Separate UI setup into <code>setupUI()</code> — keeps the constructor clean",
          "Use Qt Designer's <code>.ui</code> files for complex layouts — the UI class is auto-generated",
        ]
      },
      {
        title: "Student Registration Form Example", type: "code", lang: "C++",
        code: `<span class="cmt">// mainwindow.cpp</span>
<span class="kw">#include</span> <span class="str">"mainwindow.h"</span>
<span class="kw">#include</span> <span class="str">&lt;QVBoxLayout&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QPushButton&gt;</span>

<span class="cls">MainWindow</span><span class="op">::</span><span class="cls">MainWindow</span>(QWidget<span class="op">*</span> parent) <span class="op">:</span> QMainWindow(parent) {
    <span class="fn">setupUI</span>();
}
<span class="type">void</span> <span class="cls">MainWindow</span><span class="op">::</span><span class="fn">setupUI</span>() {
    QWidget<span class="op">*</span> central = <span class="kw">new</span> QWidget(<span class="kw">this</span>);
    <span class="fn">setCentralWidget</span>(central);

    nameInput   = <span class="kw">new</span> QLineEdit;
    gradeInput  = <span class="kw">new</span> QLineEdit;
    resultLabel = <span class="kw">new</span> QLabel(<span class="str">"Fill in and submit"</span>);

    QPushButton<span class="op">*</span> submit = <span class="kw">new</span> QPushButton(<span class="str">"Submit"</span>);
    QPushButton<span class="op">*</span> clear  = <span class="kw">new</span> QPushButton(<span class="str">"Clear"</span>);

    <span class="fn">connect</span>(submit, <span class="op">&</span>QPushButton<span class="op">::</span>clicked, <span class="kw">this</span>, <span class="op">&</span><span class="cls">MainWindow</span><span class="op">::</span>onSubmit);
    <span class="fn">connect</span>(clear,  <span class="op">&</span>QPushButton<span class="op">::</span>clicked, <span class="kw">this</span>, <span class="op">&</span><span class="cls">MainWindow</span><span class="op">::</span>onClear);

    QVBoxLayout<span class="op">*</span> layout = <span class="kw">new</span> QVBoxLayout(central);
    layout<span class="op">-></span><span class="fn">addWidget</span>(<span class="kw">new</span> QLabel(<span class="str">"Student Name:"</span>));
    layout<span class="op">-></span><span class="fn">addWidget</span>(nameInput);
    layout<span class="op">-></span><span class="fn">addWidget</span>(<span class="kw">new</span> QLabel(<span class="str">"Grade (0–100):"</span>));
    layout<span class="op">-></span><span class="fn">addWidget</span>(gradeInput);
    layout<span class="op">-></span><span class="fn">addWidget</span>(submit);
    layout<span class="op">-></span><span class="fn">addWidget</span>(clear);
    layout<span class="op">-></span><span class="fn">addWidget</span>(resultLabel);
}
<span class="type">void</span> <span class="cls">MainWindow</span><span class="op">::</span><span class="fn">onSubmit</span>() {
    <span class="type">QString</span> name  = nameInput<span class="op">-></span><span class="fn">text</span>().<span class="fn">trimmed</span>();
    <span class="type">int</span>     grade = gradeInput<span class="op">-></span><span class="fn">text</span>().<span class="fn">toInt</span>();
    <span class="kw">if</span> (name.<span class="fn">isEmpty</span>() <span class="op">||</span> grade <span class="op"><</span> <span class="num">0</span> <span class="op">||</span> grade <span class="op">></span> <span class="num">100</span>) {
        resultLabel<span class="op">-></span><span class="fn">setText</span>(<span class="str">"Invalid input!"</span>);
        <span class="kw">return</span>;
    }
    resultLabel<span class="op">-></span><span class="fn">setText</span>(<span class="str">"Saved: "</span> <span class="op">+</span> name <span class="op">+</span> <span class="str">" — Grade: "</span> <span class="op">+</span> <span class="type">QString</span><span class="op">::</span><span class="fn">number</span>(grade));
}
<span class="type">void</span> <span class="cls">MainWindow</span><span class="op">::</span><span class="fn">onClear</span>() {
    nameInput<span class="op">-></span><span class="fn">clear</span>(); gradeInput<span class="op">-></span><span class="fn">clear</span>();
    resultLabel<span class="op">-></span><span class="fn">setText</span>(<span class="str">"Cleared"</span>);
}`,
        rules: [
          "Separate concerns: UI setup in setupUI(), event logic in slot methods",
          "<code>setCentralWidget()</code> sets the main content area of QMainWindow",
          "<code>QString::number(n)</code> converts int to QString for display",
          "<code>.trimmed()</code> removes leading/trailing whitespace from user input",
          "Validate ALL user input inside slots before using the values",
        ]
      },
    ],
    tasks: [
      { title: "Student Registration Form", diff: "hard", text: "Implement the full MainWindow / StudentRegistration example from the lesson. Add input validation: name must be non-empty, grade 0–100. On valid submit, add the student to a QListWidget displayed below. Add a Clear button that resets inputs and clears the list." },
    ],
  },

  "gui-files": {
    badge: "GUI · Lesson 5", title: "GUI + Files & Final Integration",
    intro: "Persist your GUI data to files so it survives between runs. Load on startup, save on submit.",
    next: "quiz9",
    sections: [
      {
        title: "Save & Load GUI Data", type: "code", lang: "C++",
        code: `<span class="kw">#include</span> <span class="str">&lt;QFile&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QTextStream&gt;</span>
<span class="kw">#include</span> <span class="str">&lt;QMessageBox&gt;</span>

<span class="cmt">// Save to file</span>
<span class="type">void</span> <span class="cls">MainWindow</span><span class="op">::</span><span class="fn">saveToFile</span>() {
    QFile file(<span class="str">"students.txt"</span>);
    <span class="kw">if</span> (!file.<span class="fn">open</span>(QIODevice<span class="op">::</span>WriteOnly <span class="op">|</span> QIODevice<span class="op">::</span>Append <span class="op">|</span> QIODevice<span class="op">::</span>Text)) {
        QMessageBox<span class="op">::</span><span class="fn">critical</span>(<span class="kw">this</span>, <span class="str">"Error"</span>, <span class="str">"Cannot open file!"</span>);
        <span class="kw">return</span>;
    }
    QTextStream out(<span class="op">&</span>file);
    out <span class="op"><<</span> nameInput<span class="op">-></span><span class="fn">text</span>() <span class="op"><<</span> <span class="str">","</span> <span class="op"><<</span> gradeInput<span class="op">-></span><span class="fn">text</span>() <span class="op"><<</span> <span class="str">"\\n"</span>;
    file.<span class="fn">close</span>();
}

<span class="cmt">// Load from file and populate a QListWidget</span>
<span class="type">void</span> <span class="cls">MainWindow</span><span class="op">::</span><span class="fn">loadFromFile</span>() {
    QFile file(<span class="str">"students.txt"</span>);
    <span class="kw">if</span> (!file.<span class="fn">open</span>(QIODevice<span class="op">::</span>ReadOnly <span class="op">|</span> QIODevice<span class="op">::</span>Text)) <span class="kw">return</span>;
    QTextStream in(<span class="op">&</span>file);
    listWidget<span class="op">-></span><span class="fn">clear</span>();
    <span class="kw">while</span> (!in.<span class="fn">atEnd</span>()) {
        <span class="type">QString</span> line = in.<span class="fn">readLine</span>().<span class="fn">trimmed</span>();
        <span class="kw">if</span> (!line.<span class="fn">isEmpty</span>()) listWidget<span class="op">-></span><span class="fn">addItem</span>(line);
    }
    file.<span class="fn">close</span>();
}`,
        rules: [
          "Use <code>QFile</code> + <code>QTextStream</code> for text files — equivalent to fstream but Qt-native",
          "<code>QMessageBox::critical/warning/information</code> shows native dialog boxes for errors",
          "Call <code>loadFromFile()</code> in the constructor to restore state on startup",
          "Always check <code>file.open()</code> return value before reading/writing",
          "Use <code>QIODevice::Append</code> to add records without overwriting existing ones",
        ]
      },
    ],
    tasks: [
      { title: "Persistent Student Form", diff: "hard", text: "Complete the student registration form: on Submit, validate → save to file → display in QListWidget. On startup (constructor), call loadFromFile() to restore previous entries. Add a 'Clear File' button that deletes the file content and clears the list. Show a QMessageBox for all error conditions." },
    ],
  },

  quiz9: {
    badge: "Quiz 9", title: "GUI with Qt",
    intro: "Event-driven programming, Signals & Slots, Qt widgets, OOP in Qt, file integration.",
    type: "quiz", quizId: "9", next: null,
    questions: [
      {
        id: "q9-1", type: "mc", num: "Q1", text: "What does QApplication::exec() do?",
        opts: ["Compiles the Qt project", "Starts the event loop — blocks until the last window is closed", "Opens the first window", "Connects signals to slots"], answer: "B",
        ok: "✓ Correct! exec() starts the event loop. It blocks, processing events, until the application is told to quit.",
        no: "✗ Answer: <strong>B</strong>. exec() starts and runs the event loop — the heart of any GUI app."
      },
      {
        id: "q9-2", type: "mc", num: "Q2", text: "What is the correct way to connect a button click to a lambda in Qt?",
        opts: ["btn.onClick = [](){...};", "connect(btn, clicked, [](){...});", "QObject::connect(btn, &QPushButton::clicked, [=](){ ... });", "btn->signal(clicked, [](){...});"], answer: "C",
        ok: "✓ Correct! Qt5+ connect syntax: QObject::connect(sender, &SenderClass::signal, lambda)",
        no: "✗ Answer: <strong>C</strong>. Modern Qt: QObject::connect(sender, &SenderClass::signal, [=]() { ... });"
      },
      {
        id: "q9-3", type: "mc", num: "Q3", text: "Which macro is required in a QObject subclass that uses signals or slots?",
        opts: ["Q_SIGNALS", "Q_OBJECT", "QT_OBJECT", "DECLARE_SIGNALS"], answer: "B",
        ok: "✓ Correct! The Q_OBJECT macro enables the meta-object system — required for any class using signals/slots.",
        no: "✗ Answer: <strong>B</strong>. Q_OBJECT must appear in the private section of any class using Qt's signal/slot system."
      },
      {
        id: "q9-4", type: "mc", num: "Q4", text: "How do you read the text from a QLineEdit widget?",
        opts: ["input.getText()", "input->value()", "input->text()", "input.read()"], answer: "B",
        ok: "✓ Correct! QLineEdit::text() returns the current text as a QString.",
        no: "✗ Answer: <strong>C</strong>. input->text() returns the current content as a QString."
      },
      {
        id: "q9-5", type: "mc", num: "Q5", text: "Which Qt class + open mode is used to APPEND text to an existing file?",
        opts: ["ofstream with ios::app", "QFile with QIODevice::Append | QIODevice::Text", "QTextStream with append mode", "fstream with append flag"], answer: "C",
        ok: "✓ Correct! QFile opened with QIODevice::Append | QIODevice::Text adds to the file without overwriting existing content.",
        no: "✗ Answer: <strong>C</strong>. Qt's file API: QFile::open(QIODevice::WriteOnly | QIODevice::Append | QIODevice::Text)"
      },
      {
        id: "q9-6", type: "mc", num: "Q6", text: "When should loadFromFile() be called in a Qt app that restores previous session data?",
        opts: ["In the constructor of the main window — so data is ready before the window is shown", "When the user manually triggers it", "In QApplication::exec()", "After the event loop starts"], answer: "A",
        ok: "✓ Correct! Calling loadFromFile() in the constructor ensures the data is loaded and displayed before the window becomes visible.",
        no: "✗ Answer: <strong>A</strong>. Constructor is the right place — data loads before the window shows, giving the user a seamless experience."
      },
    ],
  },

};
