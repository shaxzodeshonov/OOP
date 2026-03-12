// ═══════════════════════════════════════════════════════════
//  data.js — All course content: lessons, quizzes, tasks
// ═══════════════════════════════════════════════════════════

// ── OPERATOR / SYMBOL TOOLTIPS ──────────────────────────────
export const SYMBOL_TOOLTIPS = {
  "::":  { title: "Scope Resolution", desc: "Links a function or variable to the class or namespace it belongs to. Used when defining member functions outside the class." },
  "->":  { title: "Arrow Operator", desc: "Accesses a member of an object through a pointer. ptr->method() is shorthand for (*ptr).method()." },
  ".*":  { title: "Pointer-to-Member", desc: "Dereferences a pointer-to-member on an object. Rarely used directly; cannot be overloaded." },
  "?:":  { title: "Ternary Operator", desc: "Shorthand if/else. condition ? valueIfTrue : valueIfFalse. Cannot be overloaded." },
  "&&":  { title: "Logical AND", desc: "Returns true only if both operands are true. Short-circuits: if the left side is false, the right side is never evaluated." },
  "||":  { title: "Logical OR", desc: "Returns true if at least one operand is true. Short-circuits: if the left side is true, the right side is never evaluated." },
  "!":   { title: "Logical NOT", desc: "Negates a boolean value. !true → false, !false → true. As a unary overload, you can define custom negation logic." },
  "~":   { title: "Bitwise NOT / Destructor Prefix", desc: "As bitwise: flips all bits of an integer. In class context: the ~ prefix marks a destructor, e.g. ~MyClass()." },
  "<<":  { title: "Left Shift / Stream Insertion", desc: "Bitwise: shifts bits left. Overloaded for streams: cout << value sends value to the output stream. Returns the stream for chaining." },
  ">>":  { title: "Right Shift / Stream Extraction", desc: "Bitwise: shifts bits right. Overloaded for streams: cin >> var reads input into var. Returns the stream for chaining." },
  "++":  { title: "Increment Operator", desc: "Prefix ++x increments then returns the new value. Postfix x++ saves the old value, increments, then returns the old value. Overloadable." },
  "--":  { title: "Decrement Operator", desc: "Prefix --x decrements then returns the new value. Postfix x-- saves the old value, decrements, then returns the old value. Overloadable." },
  "+=":  { title: "Add-Assign", desc: "Adds the right operand to the left and stores the result in the left. x += 5 is shorthand for x = x + 5." },
  "-=":  { title: "Subtract-Assign", desc: "Subtracts the right operand from the left and stores the result. x -= 3 is shorthand for x = x - 3." },
  "*=":  { title: "Multiply-Assign", desc: "Multiplies left by right and stores the result. x *= 2 is shorthand for x = x * 2." },
  "/=":  { title: "Divide-Assign", desc: "Divides left by right and stores the result. x /= 4 is shorthand for x = x / 4." },
  "==":  { title: "Equality Comparison", desc: "Returns true if both operands have the same value. For objects, you can overload this to define what 'equal' means for your class." },
  "!=":  { title: "Inequality Comparison", desc: "Returns true if operands are NOT equal. Often overloaded together with ==." },
  "<=":  { title: "Less Than or Equal", desc: "Returns true if the left operand is less than or equal to the right." },
  ">=":  { title: "Greater Than or Equal", desc: "Returns true if the left operand is greater than or equal to the right." },
  "*":   { title: "Multiply / Dereference / Pointer", desc: "In expressions: multiplies two values. With pointers: *ptr dereferences — gives the value at that address. In declarations: int* ptr declares a pointer." },
  "&":   { title: "Address-of / Reference / Bitwise AND", desc: "Unary &x gives the memory address of x. In declarations: int& ref is a reference. Binary a & b is bitwise AND. In parameters: & means pass by reference." },
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
  "#endif":  { title: "#endif — Preprocessor Block End", desc: "Closes a #ifdef, #ifndef, or #if preprocessor block." },
  "#include": { title: "#include — File Inclusion", desc: "Inserts the content of another file at this location before compilation. Use <> for system headers, \"\" for your own headers." },
  "operator": { title: "operator Keyword", desc: "Used to overload a C++ operator. Syntax: ReturnType operator@(params). Lets your class define the behavior of built-in symbols like +, ==, <<." },
  "public":    { title: "public Access", desc: "Members are accessible from anywhere — inside the class, from derived classes, and from external code." },
  "private":   { title: "private Access", desc: "Members are accessible only from inside the class itself and from friend functions/classes." },
  "protected": { title: "protected Access", desc: "Members are accessible from inside the class and from derived (child) classes, but not from external code." },
  "class":     { title: "class Keyword", desc: "Defines a new class type. Members are private by default. Ends with }; (semicolon required)." },
  "struct":    { title: "struct Keyword", desc: "Like class but members are public by default. In C++ both can have member functions, access specifiers, and constructors." },
  "return":    { title: "return Statement", desc: "Exits a function and optionally sends a value back to the caller. In an operator overload, often returns *this (current object) or a new object." },
  "inline":    { title: "inline Hint", desc: "Suggests to the compiler to expand the function body at the call site instead of making a real function call. Functions defined inside a class body are implicitly inline." },
};

// ── NAV STRUCTURE ────────────────────────────────────────────
export const NAV = [
  { group: "Start Here", items: [
    { id: "home", label: "Learning Plan" }
  ]},
  { group: "Week 1 · Classes Pt.1", items: [
    { id: "w1-oop",     label: "OOP Fundamentals" },
    { id: "w1-class",   label: "Classes & Objects" },
    { id: "w1-members", label: "Member Functions" },
    { id: "w1-encap",   label: "Encapsulation & Get/Set" },
    { id: "w1-files",   label: "Header & Source Files" },
    { id: "quiz1",      label: "🧪 Quiz 1" },
  ]},
  { group: "Week 2 · Classes Pt.2", items: [
    { id: "w2-scope",   label: "Class Scope & Access" },
    { id: "w2-ctor",    label: "Constructors & Destructors" },
    { id: "w2-const",   label: "Const & Composition" },
    { id: "w2-friends", label: "Friends, Pointers & Memory" },
    { id: "w2-static",  label: "Static Members" },
    { id: "quiz2",      label: "🧪 Quiz 2" },
  ]},
  { group: "Week 3–4 · Operators", items: [
    { id: "w3-op",     label: "Operator Overloading" },
    { id: "w3-stream", label: "Stream Operators << >>" },
    { id: "w3-unary",  label: "Unary Operators" },
    { id: "quiz3",     label: "🧪 Final Quiz" },
  ]},
];

// ── QUIZ ANSWER KEY ──────────────────────────────────────────
export const QUIZ_ANSWERS = {
  "q1-1":"B","q1-2":"B","q1-3":"C","q1-4":"C","q1-5":"B","q1-6":"C",
  "q2-1":"B","q2-2":"C","q2-3":"B","q2-4":"C","q2-5":"B","q2-6":"C",
  "q3-1":"B","q3-2":"C","q3-3":"B","q3-4":"B","q3-5":"C","q3-6":"C",
};

// ── LESSONS ──────────────────────────────────────────────────
export const LESSONS = {

  home: {
    badge: "Welcome",
    title: "C++ OOP Mastery",
    subtitle: "Concept → Syntax → Rules → Practice → Quiz. The best path through C++ Object Oriented Programming.",
    type: "home",
    dayPlan: [
      { label: "Module 1", icon: "🏗️", title: "Classes Fundamentals",
        items: ["OOP concepts","Classes, objects, members","Encapsulation, getters/setters","Header & source files","Constructors & destructors","Const, composition, friends","Static members"] },
      { label: "Module 2", icon: "⚙️", title: "Advanced + Operators",
        items: ["Review + Quizzes","Pointers with objects","Dynamic memory new/delete","Operator overloading basics","Stream operators << >>","Unary operators","Final quiz"] },
    ],
    tips: [
      { icon:"⚡", title:"Best Method", text:"Read concept → study syntax → do practice tasks yourself → quiz. Never skip practice — writing code by hand locks it in." },
      { icon:"🧠", title:"Active Recall", text:"After each page, close it and write what you remember. This doubles retention vs passive reading." },
      { icon:"🔨", title:"Build as you learn", text:"Keep one file open. Build a BankAccount class and keep adding features as you progress through lessons." },
      { icon:"🎯", title:"Quiz honestly", text:"Attempt every question before reading feedback. Wrong answers show exactly what to re-read." },
    ],
    next: "w1-oop",
  },

  "w1-oop": {
    badge: "Week 1 · Lesson 1", title: "OOP Fundamentals",
    intro: "Object-Oriented Programming structures code around <em>objects</em> — bundles of data and functions — instead of loose procedures.",
    next: "w1-class",
    sections: [
      { title: "4 Core Concepts", type: "cards", items: [
        { head: "Object", text: "A specific instance in memory. <code>myCar</code> is an object of type <code>Car</code> — it holds real values." },
        { head: "Class", text: "A blueprint/template defining what data and behaviors every object of that type will have." },
        { head: "Attribute (Data Member)", text: "Variables belonging to the class. A <code>Car</code> has <code>speed</code>, <code>color</code>, <code>brand</code>." },
        { head: "Behavior (Member Function)", text: "Functions belonging to the class: <code>accelerate()</code>, <code>brake()</code>, <code>getSpeed()</code>." },
      ]},
      { title: "Why OOP?", type: "bullets", items: [
        "Groups related data + functions together → cleaner, maintainable code",
        "Encapsulation hides internal details → fewer bugs, safer changes",
        "Classes are reusable across projects",
        "Models real-world things naturally (a Student, a BankAccount, a Car)",
      ]},
    ],
    tasks: [
      { title:"Real-World Mapping", diff:"easy", text:"Pick 3 real-world things (phone, dog, car). For each: list at least 3 attributes and 2 behaviors. Don't code yet — just think in data and actions." },
      { title:"Identify OOP Terms", diff:"easy", text:'Given: "a function calculates area by taking width and height as parameters". Restate in OOP terms: what is the class, what are the data members, what is the member function?' },
      { title:"Design a Class on Paper", diff:"medium", text:"Design a <code>Book</code> class on paper. Include: class name, 4 data members with types, 3 member functions with return types and parameters." },
    ],
  },

  "w1-class": {
    badge: "Week 1 · Lesson 2", title: "Defining Classes & Creating Objects",
    intro: "A class is declared with the <code>class</code> keyword. Objects are created like variables using that class as their type.",
    next: "w1-members",
    sections: [
      { title: "Class Syntax", type: "code", lang: "C++",
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
      { title: "Creating & Using Objects", type: "code", lang: "C++",
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
      { title:"Create a Rectangle Class", diff:"easy", text:"Define class <code>Rectangle</code> with public <code>double width</code> and <code>double height</code>. Add <code>double area()</code> returning <code>width * height</code>. In <code>main()</code>, create two Rectangle objects with different sizes and print both areas." },
      { title:"Two Objects, Same Class", diff:"easy", text:"Create class <code>Person</code> with <code>string name</code> and <code>int age</code>. Create two Person objects, set different values, add <code>void introduce()</code> that prints 'Hi, I'm [name], age [age]'. Call it on both and confirm different output." },
      { title:"Fix the Bug", diff:"medium", text:"This has exactly two errors. Find and fix them:<br><code>class Dog { public: string name; void bark() { cout &lt;&lt; \"Woof!\"; } }</code><br><code>int main() { Dog d; d.name = \"Rex\"; d->bark(); }</code>" },
    ],
  },

  "w1-members": {
    badge: "Week 1 · Lesson 3", title: "Member Functions",
    intro: "Member functions define what objects <em>do</em>. They can be defined inside (inline) or outside the class using the scope resolution operator <code>::</code>.",
    next: "w1-encap",
    sections: [
      { title: "Inside vs Outside Definition", type: "code", lang: "C++",
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
      { title: "Functions With Parameters", type: "code", lang: "C++",
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
      { title:"Outside Definition Practice", diff:"easy", text:"Create class <code>Circle</code> with <code>double radius</code>. Declare <code>double area()</code> and <code>double circumference()</code> inside, define both outside using <code>Circle::</code>. Use π = 3.14159." },
      { title:"BankAccount with Feedback", diff:"medium", text:"Add <code>void printBalance()</code> to BankAccount. In <code>main()</code>: deposit 500, try withdrawing 200 then 400. Print balance after each. Check the <code>bool</code> return and print 'Insufficient funds' if it fails." },
      { title:"Temperature Converter", diff:"medium", text:"Write class <code>Temperature</code> with <code>double celsius</code>. Add <code>double toFahrenheit()</code> (C × 9/5 + 32) and <code>double toKelvin()</code> (C + 273.15). Define both outside the class. Test with 0°C, 100°C, -40°C." },
    ],
  },

  "w1-encap": {
    badge: "Week 1 · Lesson 4", title: "Encapsulation, Getters & Setters",
    intro: "Encapsulation means making data <code>private</code> so it can only be accessed through controlled <code>public</code> getter and setter functions.",
    next: "w1-files",
    sections: [
      { title: "Access Specifiers", type: "cards", items: [
        { head: "public", text: "Accessible from anywhere — inside or outside the class. Used for functions that form the interface." },
        { head: "private", text: "Accessible only inside the class. Default for <code>class</code> keyword. Used to hide data members." },
      ]},
      { title: "Getters & Setters with Validation", type: "code", lang: "C++",
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
      { title:"Encapsulate Temperature", diff:"easy", text:"Make <code>celsius</code> private in your Temperature class. Add <code>setCelsius(double c)</code> rejecting values below -273.15. Add <code>getCelsius()</code>. Try direct access in main — confirm the compile error." },
      { title:"Private BankAccount Balance", diff:"medium", text:"Make <code>balance</code> private. Add <code>getBalance() const</code>. Add <code>setBalance(double b)</code> accepting only values ≥ 0. Confirm the compile error when accessing directly, then fix it." },
      { title:"Employee Class", diff:"hard", text:"Class <code>Employee</code> with private <code>string name</code>, <code>double salary</code>, <code>int age</code>. Add validated setters (salary ≥ 0, age 16–70) and const getters. Test all validation cases." },
    ],
  },

  "w1-files": {
    badge: "Week 1 · Lesson 5", title: "Header & Source Files",
    intro: "In professional C++, classes are split: a <strong>.h header</strong> for declarations, and a <strong>.cpp source</strong> for definitions.",
    next: "quiz1",
    sections: [
      { title: "Student.h — Header (Interface)", type: "code", lang: "Student.h",
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
      { title: "Student.cpp — Source (Implementation)", type: "code", lang: "Student.cpp",
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
      { title:"Split Rectangle into Files", diff:"easy", text:"Split your <code>Rectangle</code> class into <code>Rectangle.h</code> and <code>Rectangle.cpp</code>. Create <code>main.cpp</code> that includes it. Compile: <code>g++ main.cpp Rectangle.cpp -o app</code>" },
      { title:"Include Guard Test", diff:"medium", text:"Write <code>#include \"Rectangle.h\"</code> twice in <code>main.cpp</code>. Verify the include guard prevents an error. Then remove the guard and observe the redefinition error." },
      { title:"Full 3-File Project", diff:"hard", text:"Build a complete 3-file project for your <code>Employee</code> class: <code>Employee.h</code> (declarations + guard), <code>Employee.cpp</code> (all definitions with <code>Employee::</code>), <code>main.cpp</code> (creates 2 employees, prints them). Compile and run." },
    ],
  },

  "w2-scope": {
    badge: "Week 2 · Lesson 1", title: "Class Scope & Access Functions",
    intro: "All class members exist in <em>class scope</em>. Inside any member function you can access all data members directly by name.",
    next: "w2-ctor",
    sections: [
      { title: "this Pointer & Name Conflicts", type: "code", lang: "C++",
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
      { title: "Access vs Utility Functions", type: "cards", items: [
        { head: "Access Functions", text: "Public getters and setters — the class's interface to outside code." },
        { head: "Utility Functions", text: "Private helpers called internally. Never exposed outside the class." },
      ]},
      { title: "Utility Function Example", type: "code", lang: "C++",
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
      { title:"Use this Pointer", diff:"easy", text:"Write class <code>Point</code> with private <code>int x, y</code>. Constructor <code>Point(int x, int y)</code> where params match member names. Use <code>this->x = x</code>. Add <code>print()</code>." },
      { title:"Add a Utility Function", diff:"medium", text:"Add private <code>bool isValidRadius(double r)</code> to your <code>Circle</code> class (returns true if r > 0). Use it inside <code>setRadius()</code>. Test with a negative radius." },
      { title:"Login Class", diff:"hard", text:"Create <code>UserLogin</code> with private <code>string username, password</code>. Private utility <code>bool isStrongPassword(string p)</code> checks length ≥ 8. Public <code>bool login(string u, string p)</code> returns true only if both match." },
    ],
  },

  "w2-ctor": {
    badge: "Week 2 · Lesson 2", title: "Constructors & Destructors",
    intro: "Constructors run automatically when an object is created. Destructors run when it is destroyed. Neither has a return type.",
    next: "w2-const",
    sections: [
      { title: "Constructor Types & Destructor", type: "code", lang: "C++",
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
      { title: "Member Initializer List", type: "code", lang: "C++",
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
      { title:"Observe Construction/Destruction Order", diff:"easy", text:"Create class <code>Obj</code> with a <code>string label</code>. Print 'created [label]' in constructor, 'destroyed [label]' in destructor. Create 3 objects with different labels and observe the order." },
      { title:"Overloaded Constructors", diff:"medium", text:"Add two constructors to <code>BankAccount</code>: a default setting balance to 0, and a parameterized one taking an initial balance. Create one account each way and confirm correct initialization." },
      { title:"Const Member with Initializer List", diff:"hard", text:"Write class <code>Circle</code> with <code>const double PI</code> and <code>double radius</code>. Use the initializer list to set both. Try assigning PI in the constructor body — observe the compile error, then fix it." },
    ],
  },

  "w2-const": {
    badge: "Week 2 · Lesson 3", title: "Const Objects & Composition",
    intro: "Const member functions guarantee they won't modify the object. Composition means a class contains another class as a data member.",
    next: "w2-friends",
    sections: [
      { title: "Constant Member Functions", type: "code", lang: "C++",
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
      { title: "Composition — 'Has-A'", type: "code", lang: "C++",
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
      { title:"Const Object Test", diff:"easy", text:"Create a <code>const Rectangle r(4.0, 5.0)</code>. Try calling a non-const member on it — see the compile error. Add <code>const</code> to all getters/read functions and confirm they work on const objects." },
      { title:"Address Composition", diff:"medium", text:"Create class <code>Address</code> with <code>string street, city, country</code>. Create class <code>Person</code> with an <code>Address</code> as a private member. Pass the address via constructor using the initializer list. Print full info." },
      { title:"Order Book", diff:"hard", text:"Create class <code>Product</code> with <code>string name</code> and <code>double price</code>. Create class <code>Order</code> with a <code>Product</code> and <code>int quantity</code>. Add <code>double total() const</code> returning price × quantity. Test with a few orders." },
    ],
  },

  "w2-friends": {
    badge: "Week 2 · Lesson 4", title: "friend, Pointers & Dynamic Memory",
    intro: "friend grants a non-member function access to private members. Dynamic memory is heap allocation with <code>new</code> and <code>delete</code>.",
    next: "w2-static",
    sections: [
      { title: "friend Functions", type: "code", lang: "C++",
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
      { title: "Pointers & Arrow Operator", type: "code", lang: "C++",
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
      { title: "Dynamic Memory: new & delete", type: "code", lang: "C++",
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
      { title:"Arrow vs Dot", diff:"easy", text:"Create a <code>Car</code> object on the stack. Create a pointer to it. Access the same member using both <code>.</code> and <code>-></code> notation. Confirm they produce the same result." },
      { title:"Dynamic Single Object", diff:"medium", text:"Dynamically allocate a <code>Student</code> object with <code>new</code>. Set name and grade. Print them. Then <code>delete</code> it. Add a print in the destructor to confirm it's called at deletion." },
      { title:"Dynamic Array of Objects", diff:"hard", text:"Allocate an array of 3 <code>Student</code> objects. Loop through, use setters to assign names and grades, then loop again to print them. Free correctly with <code>delete[]</code>." },
    ],
  },

  "w2-static": {
    badge: "Week 2 · Lesson 5", title: "Static Data Members & Functions",
    intro: "Static members belong to the <em>class itself</em>, not to any single object. They are shared across all instances.",
    next: "quiz2",
    sections: [
      { title: "Static Object Counter", type: "code", lang: "C++",
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
      { title:"Instance Counter", diff:"easy", text:"Create class <code>Car</code> with static <code>int totalCars</code>. Increment in constructor, decrement in destructor. Add static <code>getTotal()</code>. Create and destroy objects in different scopes and watch the count change." },
      { title:"Static Config / Shared Tax Rate", diff:"medium", text:"Add <code>static double taxRate</code> to <code>BankAccount</code>. Initialize outside to 0.15. Add static setter/getter. Add <code>double calculateTax()</code> using the shared rate. Verify that changing the rate affects all accounts." },
      { title:"ID Generator", diff:"hard", text:"Create class <code>Ticket</code> with static <code>int nextId</code> starting at 1000. Each new Ticket gets the next ID automatically via the constructor. Add static <code>int peekNextId()</code>. Create 5 tickets and confirm IDs are 1000–1004." },
    ],
  },

  "w3-op": {
    badge: "Week 3–4 · Lesson 1", title: "Operator Overloading",
    intro: "Operator overloading lets you define what operators like <code>+</code>, <code>==</code>, <code>[]</code> mean for your custom classes.",
    next: "w3-stream",
    sections: [
      { title: "Member Function Overloading", type: "code", lang: "C++",
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
      { title:"Fraction Class — + and ==", diff:"medium", text:"Create class <code>Fraction</code> with <code>int numerator, denominator</code>. Overload <code>+</code> (a/b + c/d = (a*d + b*c)/(b*d)). Overload <code>==</code> (cross-multiply). Test both." },
      { title:"Money Class — + and -", diff:"medium", text:"Create class <code>Money</code> with <code>double amount</code>. Overload <code>+</code> and <code>-</code> as member functions. Also overload a version where the right side is a plain <code>double</code>." },
      { title:"Matrix 2x2 Multiply", diff:"hard", text:"Create class <code>Matrix2</code> storing a 2×2 grid as 4 doubles (a,b,c,d). Overload <code>*</code> for matrix multiplication. Overload <code>==</code>. Test by multiplying the identity matrix with another matrix." },
    ],
  },

  "w3-stream": {
    badge: "Week 3–4 · Lesson 2", title: "Stream Operators << and >>",
    intro: "Overloading these lets you use <code>cout &lt;&lt;</code> and <code>cin &gt;&gt;</code> directly with your own objects.",
    next: "w3-unary",
    sections: [
      { title: "Implementation", type: "code", lang: "C++",
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
      { title:"Student Stream Output", diff:"easy", text:"Add <code>operator&lt;&lt;</code> to your <code>Student</code> class so <code>cout &lt;&lt; student</code> works. Output format: <code>Student[name, grade: 88]</code>. Test chaining: <code>cout &lt;&lt; s1 &lt;&lt; \" and \" &lt;&lt; s2</code>." },
      { title:"Both << and >>", diff:"medium", text:"Add both operators to your <code>Fraction</code> class. Output format: <code>3/4</code>. Input: user types <code>3/4</code>, operator reads numerator, slash, denominator. Test a round-trip: read then print." },
      { title:"BankAccount Statement", diff:"hard", text:"Overload <code>operator&lt;&lt;</code> for <code>BankAccount</code> to print: <code>Account[owner: Alice | balance: $1500.00]</code>. Use <code>setprecision(2)</code> and <code>fixed</code>. Print an array of 3 accounts in a loop." },
    ],
  },

  "w3-unary": {
    badge: "Week 3–4 · Lesson 3", title: "Unary Operator Overloading",
    intro: "Unary operators act on a single operand: <code>-</code>, <code>!</code>, <code>++</code>, <code>--</code>.",
    next: "quiz3",
    sections: [
      { title: "Prefix vs Postfix ++ / --", type: "code", lang: "C++",
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
      { title:"Verify Prefix vs Postfix", diff:"easy", text:"Copy the Counter example exactly and run it. Then implement both <code>--c</code> (prefix decrement) and <code>c--</code> (postfix decrement). Predict the output before running each." },
      { title:"Vector Negate & Zero Check", diff:"medium", text:"Add unary <code>operator-</code> to <code>Vector2D</code> so <code>-v</code> negates both components. Add <code>bool operator!</code> returning true if both x and y are zero. Test both." },
      { title:"Complete Fraction Operators", diff:"hard", text:"Extend <code>Fraction</code> with: unary <code>-</code> (negate), prefix <code>++</code> (adds 1/1), and <code>bool operator!</code> (true if numerator is 0). Combine with earlier <code>+</code>, <code>==</code>, <code>&lt;&lt;</code> operators and test them all together." },
    ],
  },

  // ── QUIZ PAGES ──────────────────────────────────────────────
  quiz1: {
    badge: "Quiz 1", title: "Classes: Part 1 Test",
    intro: "OOP fundamentals, class syntax, member functions, encapsulation, header files.",
    type: "quiz", quizId: "1", next: "w2-scope",
    questions: [
      { id:"q1-1", type:"mc", num:"Q1", text:"Which access specifier makes data members accessible only from within the class?",
        opts:["public","private","protected","internal"], answer:"B",
        ok:"✓ Correct! <code>private</code> restricts access to inside the class only. <code>internal</code> is not a C++ keyword.",
        no:"✗ Answer: <strong>private</strong>. <code>public</code> is accessible from anywhere. <code>internal</code> doesn't exist in C++." },
      { id:"q1-2", type:"output", num:"Q2", text:"What does this program output?",
        code:`<span class="kw">class</span> <span class="cls">Box</span> {
<span class="kw">public</span>:
    <span class="type">int</span> x = <span class="num">5</span>;
    <span class="type">void</span> <span class="fn">show</span>() { cout &lt;&lt; x * <span class="num">2</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Box</span> a, b;
    b.x = <span class="num">10</span>;
    a.<span class="fn">show</span>(); cout &lt;&lt; <span class="str">" "</span>; b.<span class="fn">show</span>();
}`,
        opts:["10 10","10 20","5 10","20 20"], answer:"B",
        ok:"✓ Correct! a.x=5 → 5×2=10. b.x=10 → 10×2=20. Objects are independent.",
        no:"✗ Answer: <strong>10 20</strong>. Object a keeps default x=5 (×2=10). b.x was set to 10 (×2=20)." },
      { id:"q1-3", type:"mc", num:"Q3", text:"What is wrong with this setter?",
        code:`<span class="type">void</span> <span class="fn">setAge</span>(<span class="type">int</span> a) {
    age = a;
}`,
        opts:["The parameter name should match the member name","It should return int, not void","No input validation — bad values accepted silently","Nothing is wrong"], answer:"C",
        ok:"✓ Correct! A setter's main purpose is validation. Without it, setAge(-5) silently corrupts data.",
        no:"✗ Answer: <strong>C</strong>. Setters must validate — that's their entire purpose over direct assignment." },
      { id:"q1-4", type:"output", num:"Q4", text:"What is the output?",
        code:`<span class="kw">class</span> <span class="cls">Counter</span> {
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
        opts:["0","1","3","Compile error — count is private"], answer:"C",
        ok:"✓ Correct! Public functions legally access private members. inc() called 3 times → count = 3.",
        no:"✗ Answer: <strong>3</strong>. Public functions legally access private members. 3 increments → count = 3." },
      { id:"q1-5", type:"mc", num:"Q5", text:"When defining a member function outside the class, which syntax is correct?",
        opts:["void Student.setName(string n) { ... }","void Student::setName(string n) { ... }","Student void setName(string n) { ... }","void setName(Student, string n) { ... }"], answer:"B",
        ok:"✓ Correct! Use ClassName:: — the scope resolution operator links the function to its class.",
        no:"✗ Answer: <strong>B</strong>. The :: scope resolution operator is required. The dot . is for object access, not definitions." },
      { id:"q1-6", type:"mc", num:"Q6", text:"What is the purpose of an include guard (#ifndef / #define / #endif)?",
        opts:["To make the class compile faster","To prevent the class from being used externally","To prevent the header from being included more than once","To define constants inside the class"], answer:"C",
        ok:"✓ Correct! Without a guard, including a header twice causes 'already defined' compile errors.",
        no:"✗ Answer: <strong>C</strong>. Double inclusion causes redefinition errors. The guard skips re-processing if the macro is already defined." },
    ],
  },

  quiz2: {
    badge: "Quiz 2", title: "Classes: Part 2 Test",
    intro: "Constructors, const, composition, friends, pointers, dynamic memory, static members.",
    type: "quiz", quizId: "2", next: "w3-op",
    questions: [
      { id:"q2-1", type:"output", num:"Q1", text:"What is printed?",
        code:`<span class="kw">class</span> <span class="cls">A</span> {
<span class="kw">public</span>:
    <span class="cls">A</span>()  { cout &lt;&lt; <span class="str">"born "</span>; }
    ~<span class="cls">A</span>() { cout &lt;&lt; <span class="str">"dead "</span>; }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">A</span> x;
    cout &lt;&lt; <span class="str">"alive "</span>;
}`,
        opts:["alive born dead","born alive dead","born dead alive","alive dead born"], answer:"B",
        ok:"✓ Correct! Constructor fires at creation → 'born'. Then 'alive'. Destructor fires when x goes out of scope → 'dead'.",
        no:"✗ Answer: <strong>born alive dead</strong>. Constructor runs at creation, code runs, destructor runs when block ends." },
      { id:"q2-2", type:"mc", num:"Q2", text:"Which statement about const member functions is TRUE?",
        opts:["They cannot access any data members","They can modify private but not public data","They can read but not modify any data members","They must return const values only"], answer:"C",
        ok:"✓ Correct! A const function has full read access to all members but cannot modify any.",
        no:"✗ Answer: <strong>C</strong>. Const functions read freely but cannot modify anything." },
      { id:"q2-3", type:"mc", num:"Q3", text:"When accessing a class member through a pointer, you use:",
        opts:["The dot operator .","The arrow operator ->","The scope operator ::","Either . or ->"], answer:"B",
        ok:"✓ Correct! Use -> for pointers. ptr->method() equals (*ptr).method().",
        no:"✗ Answer: <strong>B</strong>. Pointers require ->. Regular objects use .. They cannot be swapped." },
      { id:"q2-4", type:"output", num:"Q4", text:"What does this print?",
        code:`<span class="kw">class</span> <span class="cls">C</span> {
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
        opts:["0","2","3","Compile error"], answer:"C",
        ok:"✓ Correct! Three constructor calls (a, b, heap object) increment the shared static n to 3.",
        no:"✗ Answer: <strong>3</strong>. a, b, and the new object each call the constructor, incrementing the shared static n." },
      { id:"q2-5", type:"mc", num:"Q5", text:"When a class contains another class as a data member, this is called:",
        opts:["Inheritance — an 'is-a' relationship","Composition — a 'has-a' relationship","Encapsulation — a 'hides-a' relationship","Aggregation — a 'uses-a' relationship"], answer:"B",
        ok:"✓ Correct! Composition = 'has-a'. A Car 'has-a' Engine. An Employee 'has-a' BirthDate.",
        no:"✗ Answer: <strong>B</strong>. Composition is 'has-a'. Inheritance is 'is-a'." },
      { id:"q2-6", type:"mc", num:"Q6", text:"You allocate new Student[10]. How must you free it?",
        opts:["delete ptr;","free(ptr);","delete[] ptr;","It's freed automatically"], answer:"C",
        ok:"✓ Correct! Arrays allocated with new[] must be freed with delete[]. Plain delete causes undefined behavior.",
        no:"✗ Answer: <strong>C</strong>. Use delete[] for arrays. free() is C-style. Plain delete on an array is undefined behavior." },
    ],
  },

  quiz3: {
    badge: "Final Quiz", title: "Operator Overloading Test",
    intro: "Covers all operator overloading: binary, stream, and unary operators.",
    type: "quiz", quizId: "3", next: null,
    questions: [
      { id:"q3-1", type:"mc", num:"Q1", text:"Why must << and >> be non-member functions?",
        opts:["C++ simply doesn't allow member stream operators","The left operand is ostream/istream, not your class — it can't be a member of your class","Member functions can't accept stream references","They need friend access to private members"], answer:"B",
        ok:"✓ Correct! In cout << p, the left side is an ostream object. That's not your class, so the operator can't be its member.",
        no:"✗ Answer: <strong>B</strong>. The left side of << is always a stream — not your type." },
      { id:"q3-2", type:"output", num:"Q2", text:"What is printed?",
        code:`<span class="kw">class</span> <span class="cls">N</span> {
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
        opts:["7","9","12","Compile error"], answer:"C",
        ok:"✓ Correct! (a+b) = N(7), then N(7)+c = N(12). Chaining evaluates left to right.",
        no:"✗ Answer: <strong>12</strong>. a+b = N(7), then N(7)+c = N(12). Left-to-right chaining." },
      { id:"q3-3", type:"mc", num:"Q3", text:"What distinguishes postfix operator++(int) from prefix operator++()?",
        opts:["Postfix has a return type of void","Postfix has a dummy int parameter that is never used","Postfix must always be a non-member function","The compiler tells them apart by context only"], answer:"B",
        ok:"✓ Correct! The dummy int marks the function as postfix — you never pass a value for it.",
        no:"✗ Answer: <strong>B</strong>. The dummy int is a C++ convention to mark postfix — required but never used." },
      { id:"q3-4", type:"output", num:"Q4", text:"What is the output?",
        code:`<span class="kw">class</span> <span class="cls">C</span> {
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
        opts:["11 11","10 11","10 10","11 10"], answer:"B",
        ok:"✓ Correct! Postfix saves old copy (10), increments x to 11, returns old. So (x++)=10, then x=11.",
        no:"✗ Answer: <strong>10 11</strong>. Postfix saves old value (10), increments to 11, returns old copy." },
      { id:"q3-5", type:"mc", num:"Q5", text:"Stream insertion operator<< must return:",
        opts:["void","A copy of the printed object","ostream& — a reference to the stream","bool indicating success"], answer:"C",
        ok:"✓ Correct! Returning the stream by reference enables chaining: cout << a << b << c.",
        no:"✗ Answer: <strong>C</strong>. The stream reference is returned so chaining works: cout << x << y << endl." },
      { id:"q3-6", type:"mc", num:"Q6", text:"Which of these operators CANNOT be overloaded in C++?",
        opts:["+ - * /","++ -- << >>",":: . .* ?:","[] () -> =="], answer:"C",
        ok:"✓ Correct! These four are not overloadable: scope resolution ::, member access ., pointer-to-member .*, and ternary ?:.",
        no:"✗ Answer: <strong>C</strong>. ::, ., .*, and ?: cannot be overloaded. All others in the list can be." },
    ],
  },
};