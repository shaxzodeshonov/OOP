// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
//  data.js â€” All course content: lessons, quizzes, tasks
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

// â”€â”€ OPERATOR / SYMBOL TOOLTIPS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const SYMBOL_TOOLTIPS = {
  "::": { title: "Scope Resolution", desc: "Links a function or variable to the class or namespace it belongs to. Used when defining member functions outside the class." },
  "->": { title: "Arrow Operator", desc: "Accesses a member of an object through a pointer. ptr->method() is shorthand for (*ptr).method()." },
  ".*": { title: "Pointer-to-Member", desc: "Dereferences a pointer-to-member on an object. Rarely used directly; cannot be overloaded." },
  "?:": { title: "Ternary Operator", desc: "Shorthand if/else. condition ? valueIfTrue : valueIfFalse. Cannot be overloaded." },
  "&&": { title: "Logical AND", desc: "Returns true only if both operands are true. Short-circuits: if the left side is false, the right side is never evaluated." },
  "||": { title: "Logical OR", desc: "Returns true if at least one operand is true. Short-circuits: if the left side is true, the right side is never evaluated." },
  "!": { title: "Logical NOT", desc: "Negates a boolean value. !true â†’ false, !false â†’ true. As a unary overload, you can define custom negation logic." },
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
  "*": { title: "Multiply / Dereference / Pointer", desc: "In expressions: multiplies two values. With pointers: *ptr dereferences â€” gives the value at that address. In declarations: int* ptr declares a pointer." },
  "&": { title: "Address-of / Reference / Bitwise AND", desc: "Unary &x gives the memory address of x. In declarations: int& ref is a reference. Binary a & b is bitwise AND. In parameters: & means pass by reference." },
  "new": { title: "Dynamic Allocation", desc: "Allocates memory on the heap and returns a pointer to the new object. Must be paired with delete to avoid memory leaks." },
  "delete": { title: "Dynamic Deallocation", desc: "Frees heap memory allocated with new. Use delete for single objects, delete[] for arrays. Always set the pointer to nullptr after deleting." },
  "this": { title: "this Pointer", desc: "An implicit pointer available inside every non-static member function that points to the current object. Use this->member to resolve name conflicts with parameters." },
  "friend": { title: "friend Declaration", desc: "Grants a non-member function (or another class) access to private and protected members. The friend is not a member â€” it has no implicit this pointer." },
  "static": { title: "static Member", desc: "Static data members are shared by all objects of the class â€” one copy exists regardless of how many instances there are. Static functions have no this pointer." },
  "const": { title: "const Qualifier", desc: "On a variable: value cannot change. On a member function (after the params): the function cannot modify any data members and can be called on const objects." },
  "virtual": { title: "virtual Function", desc: "Enables polymorphism: the correct overridden function in a derived class is called at runtime through a base class pointer." },
  "nullptr": { title: "Null Pointer", desc: "The modern C++ null pointer constant (since C++11). Use instead of NULL or 0 for pointers. A nullptr pointer points to nothing." },
  "#ifndef": { title: "#ifndef â€” Include Guard Open", desc: "Preprocessor directive: 'if not defined'. Used as the opening of an include guard â€” skips the file body if the macro was already defined." },
  "#define": { title: "#define â€” Macro Definition", desc: "Defines a preprocessor macro. In include guards, it marks the header as already processed so it won't be included twice." },
  "#endif": { title: "#endif â€” Preprocessor Block End", desc: "Closes a #ifdef, #ifndef, or #if preprocessor block." },
  "#include": { title: "#include â€” File Inclusion", desc: "Inserts the content of another file at this location before compilation. Use <> for system headers, \"\" for your own headers." },
  "operator": { title: "operator Keyword", desc: "Used to overload a C++ operator. Syntax: ReturnType operator@(params). Lets your class define the behavior of built-in symbols like +, ==, <<." },
  "public": { title: "public Access", desc: "Members are accessible from anywhere â€” inside the class, from derived classes, and from external code." },
  "private": { title: "private Access", desc: "Members are accessible only from inside the class itself and from friend functions/classes." },
  "protected": { title: "protected Access", desc: "Members are accessible from inside the class and from derived (child) classes, but not from external code." },
  "class": { title: "class Keyword", desc: "Defines a new class type. Members are private by default. Ends with }; (semicolon required)." },
  "struct": { title: "struct Keyword", desc: "Like class but members are public by default. In C++ both can have member functions, access specifiers, and constructors." },
  "return": { title: "return Statement", desc: "Exits a function and optionally sends a value back to the caller. In an operator overload, often returns *this (current object) or a new object." },
  "inline": { title: "inline Hint", desc: "Suggests to the compiler to expand the function body at the call site instead of making a real function call. Functions defined inside a class body are implicitly inline." },
};

// â”€â”€ NAV STRUCTURE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const NAV = [
  {
    group: "Start Here", items: [
      { id: "home", label: "Learning Plan" }
    ]
  },
  {
    group: "Week 1 Â· Classes Pt.1", items: [
      { id: "w1-oop", label: "OOP Fundamentals" },
      { id: "w1-class", label: "Classes & Objects" },
      { id: "w1-members", label: "Member Functions" },
      { id: "w1-encap", label: "Encapsulation & Get/Set" },
      { id: "w1-files", label: "Header & Source Files" },
      { id: "quiz1", label: "ðŸ§ª Quiz 1" },
    ]
  },
  {
    group: "Week 2 Â· Classes Pt.2", items: [
      { id: "w2-scope", label: "Class Scope & Access" },
      { id: "w2-ctor", label: "Constructors & Destructors" },
      { id: "w2-const", label: "Const & Composition" },
      { id: "w2-friends", label: "Friends, Pointers & Memory" },
      { id: "w2-static", label: "Static Members" },
      { id: "quiz2", label: "ðŸ§ª Quiz 2" },
    ]
  },
  {
    group: "Week 3â€“4 Â· Operators", items: [
      { id: "w3-op", label: "Operator Overloading" },
      { id: "w3-stream", label: "Stream Operators << >>" },
      { id: "w3-unary", label: "Unary Operators" },
      { id: "quiz3", label: "ðŸ§ª Mid-Quiz" },
      { id: "adv-op-binary", label: "Binary & Assignment" },
      { id: "adv-op-copy", label: "Deep vs Shallow Copy" },
      { id: "adv-op-array", label: "Dynamic Array Case" },
      { id: "adv-op-convert", label: "Type Conversion" },
      { id: "adv-op-string", label: "String Class Case" },
      { id: "quiz4", label: "ðŸ§ª Adv. Quiz" },
    ]
  },
  {
    group: "Week 5 Â· Inheritance", items: [
      { id: "inh-concepts", label: "Inheritance Basics" },
      { id: "inh-base", label: "Base & Derived Classes" },
      { id: "inh-relations", label: "Up/Downcasting" },
      { id: "inh-ctor", label: "Ctor & Dtor Order" },
      { id: "inh-types", label: "Public/Prot/Priv" },
      { id: "quiz5", label: "ðŸ§ª Inheritance Quiz" },
    ]
  },
  {
    group: "Week 6 Â· Polymorphism", items: [
      { id: "poly-intro", label: "Static vs Dynamic" },
      { id: "poly-override", label: "Virtual & Override" },
      { id: "poly-virtual", label: "Virtual Tables (vtable)" },
      { id: "poly-ptrs", label: "Base Pointers" },
      { id: "poly-dtor", label: "Virtual Destructors" },
      { id: "quiz6", label: "ðŸ§ª Polymorphism Quiz" },
    ]
  },
  {
    group: "Week 7 Â· Abstract & Templates", items: [
      { id: "abs-pure", label: "Pure Virtual & Abstract" },
      { id: "abs-interface", label: "Interfaces in C++" },
      { id: "tpl-func", label: "Function Templates" },
      { id: "tpl-class", label: "Class Templates" },
      { id: "quiz7", label: "ðŸ§ª Templates Quiz" },
    ]
  },
  {
    group: "Week 8 Â· Streams & Files", items: [
      { id: "io-streams", label: "I/O Streams & Hierarchy" },
      { id: "io-manip", label: "Stream Manipulators" },
      { id: "io-states", label: "Error States & Bits" },
      { id: "file-seq", label: "Sequential Files" },
      { id: "file-random", label: "Random Access Files" },
      { id: "exc-basics", label: "Exception Basics" },
      { id: "quiz8", label: "ðŸ§ª I/O & Files Quiz" },
    ]
  },
  {
    group: "Week 9 Â· GUI with Qt", items: [
      { id: "gui-intro", label: "Qt Intro & Signals" },
      { id: "gui-window", label: "Main Window & Widgets" },
      { id: "gui-signals", label: "Signals & Slots" },
      { id: "gui-oop", label: "OOP in Qt Design" },
      { id: "gui-files", label: "Building with Qt" },
      { id: "quiz9", label: "ðŸ§ª GUI Quiz" },
    ]
  },
];

// â”€â”€ QUIZ ANSWER KEY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const QUIZ_ANSWERS = {
  "q1-1": "B", "q1-2": "B", "q1-3": "C", "q1-4": "C", "q1-5": "B", "q1-6": "C",
  "q2-1": "B", "q2-2": "C", "q2-3": "B", "q2-4": "C", "q2-5": "B", "q2-6": "C",
  "q3-1": "B", "q3-2": "C", "q3-3": "B", "q3-4": "B", "q3-5": "C", "q3-6": "C",
  "q4-1": "B", "q4-2": "C", "q4-3": "B", "q4-4": "B", "q4-5": "C", "q4-6": "A",
  "q5-1": "B", "q5-2": "C", "q5-3": "B", "q5-4": "C", "q5-5": "A", "q5-6": "B",
  "q6-1": "C", "q6-2": "A", "q6-3": "A",
  "q7-1": "C", "q7-2": "B",
  "q8-1": "B",
  "q9-1": "B",
};

// â”€â”€ LESSONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const LESSONS = {

  home: {
    badge: "Welcome",
    title: "C++ OOP Mastery",
    subtitle: "Concept â†’ Syntax â†’ Rules â†’ Practice â†’ Quiz. The best path through C++ Object Oriented Programming.",
    type: "home",
    dayPlan: [
      {
        label: "Module 1", icon: "ðŸ—ï¸", title: "Classes Fundamentals",
        items: ["OOP concepts", "Classes, objects, members", "Encapsulation, getters/setters", "Header & source files", "Constructors & destructors", "Const, composition, friends", "Static members"]
      },
      {
        label: "Module 2", icon: "âš™ï¸", title: "Advanced + Operators",
        items: ["Review + Quizzes", "Pointers with objects", "Dynamic memory new/delete", "Operator overloading basics", "Stream operators << >>", "Unary operators", "Final quiz"]
      },
    ],
    tips: [
      { icon: "âš¡", title: "Best Method", text: "Read concept â†’ study syntax â†’ do practice tasks yourself â†’ quiz. Never skip practice â€” writing code by hand locks it in." },
      { icon: "ðŸ§ ", title: "Active Recall", text: "After each page, close it and write what you remember. This doubles retention vs passive reading." },
      { icon: "ðŸ”¨", title: "Build as you learn", text: "Keep one file open. Build a BankAccount class and keep adding features as you progress through lessons." },
      { icon: "ðŸŽ¯", title: "Quiz honestly", text: "Attempt every question before reading feedback. Wrong answers show exactly what to re-read." },
    ],
    next: "w1-oop",
  },

  "w1-oop": {
    badge: "Week 1 Â· Lesson 1", title: "OOP Fundamentals",
    intro: "Object-Oriented Programming structures code around <em>objects</em> â€” bundles of data and functions â€” instead of loose procedures.",
    next: "w1-class",
    sections: [
      {
        title: "4 Core Concepts", type: "cards", items: [
          { head: "Object", text: "A specific instance in memory. <code>myCar</code> is an object of type <code>Car</code> â€” it holds real values." },
          { head: "Class", text: "A blueprint/template defining what data and behaviors every object of that type will have." },
          { head: "Attribute (Data Member)", text: "Variables belonging to the class. A <code>Car</code> has <code>speed</code>, <code>color</code>, <code>brand</code>." },
          { head: "Behavior (Member Function)", text: "Functions belonging to the class: <code>accelerate()</code>, <code>brake()</code>, <code>getSpeed()</code>." },
        ]
      },
      {
        title: "Why OOP?", type: "bullets", items: [
          "Groups related data + functions together â†’ cleaner, maintainable code",
          "Encapsulation hides internal details â†’ fewer bugs, safer changes",
          "Classes are reusable across projects",
          "Models real-world things naturally (a Student, a BankAccount, a Car)",
        ]
      },
    ],
    tasks: [
      { title: "Real-World Mapping", diff: "easy", text: "Pick 3 real-world things (phone, dog, car). For each: list at least 3 attributes and 2 behaviors. Don't code yet â€” just think in data and actions." },
      { title: "Identify OOP Terms", diff: "easy", text: 'Given: "a function calculates area by taking width and height as parameters". Restate in OOP terms: what is the class, what are the data members, what is the member function?' },
      { title: "Design a Class on Paper", diff: "medium", text: "Design a <code>Book</code> class on paper. Include: class name, 4 data members with types, 3 member functions with return types and parameters." },
    ],
  },

  "w1-class": {
    badge: "Week 1 Â· Lesson 2", title: "Defining Classes & Creating Objects",
    intro: "A class is declared with the <code>class</code> keyword. Objects are created like variables using that class as their type.",
    next: "w1-members",
    sections: [
      {
        title: "Class Syntax", type: "code", lang: "C++",
        code: `<span class="cmt">// Class definition â€” the blueprint</span>
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
}; <span class="cmt">// â† semicolon REQUIRED</span>`,
        rules: [
          "Class name starts with an uppercase letter (strong C++ convention)",
          "The closing brace <strong>must</strong> end with a semicolon: <code>};</code>",
          "<code>public:</code> members are accessible from anywhere; <code>private:</code> only inside the class",
          "Functions defined inside the class body are automatically inline",
          "A class definition creates no object â€” it's just a blueprint",
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
          "Every object is <strong>completely independent</strong> â€” modifying one never affects another",
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
    badge: "Week 1 Â· Lesson 3", title: "Member Functions",
    intro: "Member functions define what objects <em>do</em>. They can be defined inside (inline) or outside the class using the scope resolution operator <code>::</code>.",
    next: "w1-encap",
    sections: [
      {
        title: "Inside vs Outside Definition", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Rectangle</span> {
<span class="kw">public</span><span class="op">:</span>
    <span class="type">double</span> width, height;

    <span class="cmt">// Defined INSIDE â€” inline</span>
    <span class="type">double</span> <span class="fn">area</span>() {
        <span class="kw">return</span> width <span class="op">*</span> height;
    }

    <span class="cmt">// Declared inside, defined OUTSIDE</span>
    <span class="type">double</span> <span class="fn">perimeter</span>();
};

<span class="cmt">// Outside â€” ClassName:: prefix required</span>
<span class="type">double</span> <span class="cls">Rectangle</span><span class="op">::</span><span class="fn">perimeter</span>() {
    <span class="kw">return</span> <span class="num">2</span> <span class="op">*</span> (width <span class="op">+</span> height);
}`,
        rules: [
          "Functions defined inside the class are inline â€” good for simple one-liners",
          "Functions defined outside use <code>ClassName::functionName()</code> â€” <code>::</code> is the scope resolution operator",
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
          "Member functions have direct access to all data members â€” no need to pass them as arguments",
          "A <code>bool</code> return lets the caller know if the operation succeeded",
        ]
      },
    ],
    tasks: [
      { title: "Outside Definition Practice", diff: "easy", text: "Create class <code>Circle</code> with <code>double radius</code>. Declare <code>double area()</code> and <code>double circumference()</code> inside, define both outside using <code>Circle::</code>. Use Ï€ = 3.14159." },
      { title: "BankAccount with Feedback", diff: "medium", text: "Add <code>void printBalance()</code> to BankAccount. In <code>main()</code>: deposit 500, try withdrawing 200 then 400. Print balance after each. Check the <code>bool</code> return and print 'Insufficient funds' if it fails." },
      { title: "Temperature Converter", diff: "medium", text: "Write class <code>Temperature</code> with <code>double celsius</code>. Add <code>double toFahrenheit()</code> (C Ã— 9/5 + 32) and <code>double toKelvin()</code> (C + 273.15). Define both outside the class. Test with 0Â°C, 100Â°C, -40Â°C." },
    ],
  },

  "w1-encap": {
    badge: "Week 1 Â· Lesson 4", title: "Encapsulation, Getters & Setters",
    intro: "Encapsulation means making data <code>private</code> so it can only be accessed through controlled <code>public</code> getter and setter functions.",
    next: "w1-files",
    sections: [
      {
        title: "Access Specifiers", type: "cards", items: [
          { head: "public", text: "Accessible from anywhere â€” inside or outside the class. Used for functions that form the interface." },
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
    <span class="cmt">// SETTER â€” validate before assigning</span>
    <span class="type">void</span> <span class="fn">setGrade</span>(<span class="type">int</span> g) {
        <span class="kw">if</span> (g <span class="op">>=</span> <span class="num">0</span> <span class="op">&&</span> g <span class="op"><=</span> <span class="num">100</span>)
            grade = g;
        <span class="kw">else</span>
            cout <span class="op"><<</span> <span class="str">"Invalid grade!\\n"</span>;
    }
    <span class="cmt">// GETTER â€” read-only, always const</span>
    <span class="type">int</span> <span class="fn">getGrade</span>() <span class="kw">const</span> { <span class="kw">return</span> grade; }
    <span class="type">void</span>   <span class="fn">setName</span>(<span class="type">string</span> n) { name = n; }
    <span class="type">string</span> <span class="fn">getName</span>() <span class="kw">const</span>  { <span class="kw">return</span> name; }
};`,
        rules: [
          "Setter naming: <code>setXxx(type param)</code> â€” always returns <code>void</code>",
          "Getter naming: <code>getXxx()</code> â€” returns the member's type, always marked <code>const</code>",
          "Setters <strong>must validate</strong> input â€” this is their entire purpose",
          "Direct access to a <code>private</code> member from outside the class is a compile error",
          "Getters are <code>const</code> because they don't modify the object",
        ]
      },
    ],
    tasks: [
      { title: "Encapsulate Temperature", diff: "easy", text: "Make <code>celsius</code> private in your Temperature class. Add <code>setCelsius(double c)</code> rejecting values below -273.15. Add <code>getCelsius()</code>. Try direct access in main â€” confirm the compile error." },
      { title: "Private BankAccount Balance", diff: "medium", text: "Make <code>balance</code> private. Add <code>getBalance() const</code>. Add <code>setBalance(double b)</code> accepting only values â‰¥ 0. Confirm the compile error when accessing directly, then fix it." },
      { title: "Employee Class", diff: "hard", text: "Class <code>Employee</code> with private <code>string name</code>, <code>double salary</code>, <code>int age</code>. Add validated setters (salary â‰¥ 0, age 16â€“70) and const getters. Test all validation cases." },
    ],
  },

  "w1-files": {
    badge: "Week 1 Â· Lesson 5", title: "Header & Source Files",
    intro: "In professional C++, classes are split: a <strong>.h header</strong> for declarations, and a <strong>.cpp source</strong> for definitions.",
    next: "quiz1",
    sections: [
      {
        title: "Student.h â€” Header (Interface)", type: "code", lang: "Student.h",
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
          "<code>#ifndef / #define / #endif</code> â€” the include guard â€” is mandatory in every .h file",
          "Guard name must be ALL_CAPS matching the filename: <code>STUDENT_H</code> for <code>Student.h</code>",
          "Header contains only <strong>declarations</strong> â€” no function bodies",
          "<code>#include &lt;...&gt;</code> for system headers; <code>#include \"...\"</code> for your own",
        ]
      },
      {
        title: "Student.cpp â€” Source (Implementation)", type: "code", lang: "Student.cpp",
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
    badge: "Week 2 Â· Lesson 1", title: "Class Scope & Access Functions",
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
        <span class="cmt">// param and member share name â€” use this-></span>
        <span class="kw">this</span><span class="op">-></span>radius = radius;
    }
};`,
        rules: [
          "Inside a member function, data members are accessed directly by name",
          "When a parameter and member share the same name, use <code>this->member</code>",
          "<code>this</code> is a pointer to the current object â€” always available in non-static functions",
          "Class scope is separate from local/global scope",
        ]
      },
      {
        title: "Access vs Utility Functions", type: "cards", items: [
          { head: "Access Functions", text: "Public getters and setters â€” the class's interface to outside code." },
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
      { title: "Login Class", diff: "hard", text: "Create <code>UserLogin</code> with private <code>string username, password</code>. Private utility <code>bool isStrongPassword(string p)</code> checks length â‰¥ 8. Public <code>bool login(string u, string p)</code> returns true only if both match." },
    ],
  },

  "w2-ctor": {
    badge: "Week 2 Â· Lesson 2", title: "Constructors & Destructors",
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
    <span class="cmt">// 3. Destructor â€” ~ prefix, no params</span>
    <span class="op">~</span><span class="cls">Person</span>() { cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">" destroyed\\n"</span>; }
    <span class="type">void</span> <span class="fn">print</span>() <span class="kw">const</span> {
        cout <span class="op"><<</span> name <span class="op"><<</span> <span class="str">", age "</span> <span class="op"><<</span> age <span class="op"><<</span> <span class="str">"\\n"</span>;
    }
};
<span class="type">int</span> <span class="fn">main</span>() {
    <span class="cls">Person</span> p1;               <span class="cmt">// â†’ Person created</span>
    <span class="cls">Person</span> p2(<span class="str">"Alice"</span>, <span class="num">30</span>); <span class="cmt">// â†’ Alice created</span>
    p2.<span class="fn">print</span>();              <span class="cmt">// Alice, age 30</span>
} <span class="cmt">// â†’ Alice destroyed, Unknown destroyed</span>`,
        rules: [
          "Constructor name = class name exactly. No return type â€” not even <code>void</code>",
          "Destructor: <code>~ClassName()</code> â€” no parameters, no return type, only one per class",
          "Constructors can be overloaded; the destructor cannot",
          "If you define any constructor, the compiler's auto-generated default disappears",
        ]
      },
      {
        title: "Member Initializer List", type: "code", lang: "C++",
        code: `<span class="cmt">// Preferred â€” runs before the body</span>
<span class="cls">Person</span>(<span class="type">string</span> n, <span class="type">int</span> a) <span class="op">:</span> name(n), age(a) { }

<span class="cmt">// REQUIRED for const members:</span>
<span class="kw">class</span> <span class="cls">Config</span> {
    <span class="kw">const</span> <span class="type">int</span> MAX;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Config</span>(<span class="type">int</span> m) <span class="op">:</span> MAX(m) {} <span class="cmt">// only valid way</span>
};`,
        rules: [
          "Syntax: <code>ClassName(params) : member1(val1), member2(val2) { }</code>",
          "Initializer list runs <em>before</em> the constructor body â€” prefer it over body assignment",
          "<strong>Required</strong> for <code>const</code> members and references â€” they can't be assigned after construction",
          "Members initialize in their declaration order in the class, not the list order",
        ]
      },
    ],
    tasks: [
      { title: "Observe Construction/Destruction Order", diff: "easy", text: "Create class <code>Obj</code> with a <code>string label</code>. Print 'created [label]' in constructor, 'destroyed [label]' in destructor. Create 3 objects with different labels and observe the order." },
      { title: "Overloaded Constructors", diff: "medium", text: "Add two constructors to <code>BankAccount</code>: a default setting balance to 0, and a parameterized one taking an initial balance. Create one account each way and confirm correct initialization." },
      { title: "Const Member with Initializer List", diff: "hard", text: "Write class <code>Circle</code> with <code>const double PI</code> and <code>double radius</code>. Use the initializer list to set both. Try assigning PI in the constructor body â€” observe the compile error, then fix it." },
    ],
  },

  "w2-const": {
    badge: "Week 2 Â· Lesson 3", title: "Const Objects & Composition",
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
<span class="cmt">// freezing.setTemp(5);     â† COMPILE ERROR</span>
cout <span class="op"><<</span> freezing.<span class="fn">toFahrenheit</span>(); <span class="cmt">// OK â€” const function</span>`,
        rules: [
          "<code>const</code> goes after the closing parenthesis: <code>returnType name() const { }</code>",
          "A const function can read all members but cannot modify any",
          "A const object can only call const member functions",
          "All getters should always be marked <code>const</code>",
        ]
      },
      {
        title: "Composition â€” 'Has-A'", type: "code", lang: "C++",
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
          "Differs from inheritance ('is-a') â€” prefer composition when the relationship is 'has-a'",
        ]
      },
    ],
    tasks: [
      { title: "Const Object Test", diff: "easy", text: "Create a <code>const Rectangle r(4.0, 5.0)</code>. Try calling a non-const member on it â€” see the compile error. Add <code>const</code> to all getters/read functions and confirm they work on const objects." },
      { title: "Address Composition", diff: "medium", text: "Create class <code>Address</code> with <code>string street, city, country</code>. Create class <code>Person</code> with an <code>Address</code> as a private member. Pass the address via constructor using the initializer list. Print full info." },
      { title: "Order Book", diff: "hard", text: "Create class <code>Product</code> with <code>string name</code> and <code>double price</code>. Create class <code>Order</code> with a <code>Product</code> and <code>int quantity</code>. Add <code>double total() const</code> returning price Ã— quantity. Test with a few orders." },
    ],
  },

  "w2-friends": {
    badge: "Week 2 Â· Lesson 4", title: "friend, Pointers & Dynamic Memory",
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

<span class="cmt">// Defined outside â€” no Box:: prefix!</span>
<span class="type">void</span> <span class="fn">printVolume</span>(<span class="cls">Box</span> b) {
    cout <span class="op"><<</span> b.volume; <span class="cmt">// accesses private â€” allowed</span>
}`,
        rules: [
          "Declared inside the class with <code>friend</code>, defined outside as a regular function (no <code>::</code>)",
          "A friend is <strong>not</strong> a member â€” it has no <code>this</code> pointer",
          "Friendship is one-directional and not inherited",
          "Use sparingly â€” prefer getters when possible",
        ]
      },
      {
        title: "Pointers & Arrow Operator", type: "code", lang: "C++",
        code: `<span class="cls">Student</span> s;
s.<span class="fn">setName</span>(<span class="str">"Ali"</span>);

<span class="cls">Student</span><span class="op">*</span> ptr = <span class="op">&</span>s;       <span class="cmt">// pointer to existing object</span>
ptr<span class="op">-></span><span class="fn">setGrade</span>(<span class="num">95</span>);      <span class="cmt">// -> for pointer access</span>
cout <span class="op"><<</span> ptr<span class="op">-></span><span class="fn">getGrade</span>();  <span class="cmt">// 95</span>
<span class="cmt">// ptr->x  â‰¡  (*ptr).x</span>`,
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
          "Every <code>new</code> â†’ matching <code>delete</code>. Every <code>new[]</code> â†’ matching <code>delete[]</code>",
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
    badge: "Week 2 Â· Lesson 5", title: "Static Data Members & Functions",
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
          "Static member functions can only access other static members â€” they have no <code>this</code> pointer",
          "Call static functions using <code>ClassName::function()</code> (preferred)",
          "All objects share the same copy of a static member",
          "Static members exist even if zero objects have been created",
        ]
      },
    ],
    tasks: [
      { title: "Instance Counter", diff: "easy", text: "Create class <code>Car</code> with static <code>int totalCars</code>. Increment in constructor, decrement in destructor. Add static <code>getTotal()</code>. Create and destroy objects in different scopes and watch the count change." },
      { title: "Static Config / Shared Tax Rate", diff: "medium", text: "Add <code>static double taxRate</code> to <code>BankAccount</code>. Initialize outside to 0.15. Add static setter/getter. Add <code>double calculateTax()</code> using the shared rate. Verify that changing the rate affects all accounts." },
      { title: "ID Generator", diff: "hard", text: "Create class <code>Ticket</code> with static <code>int nextId</code> starting at 1000. Each new Ticket gets the next ID automatically via the constructor. Add static <code>int peekNextId()</code>. Create 5 tickets and confirm IDs are 1000â€“1004." },
    ],
  },

  "w3-op": {
    badge: "Week 3â€“4 Â· Lesson 1", title: "Operator Overloading",
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
      { title: "Fraction Class â€” + and ==", diff: "medium", text: "Create class <code>Fraction</code> with <code>int numerator, denominator</code>. Overload <code>+</code> (a/b + c/d = (a*d + b*c)/(b*d)). Overload <code>==</code> (cross-multiply). Test both." },
      { title: "Money Class â€” + and -", diff: "medium", text: "Create class <code>Money</code> with <code>double amount</code>. Overload <code>+</code> and <code>-</code> as member functions. Also overload a version where the right side is a plain <code>double</code>." },
      { title: "Matrix 2x2 Multiply", diff: "hard", text: "Create class <code>Matrix2</code> storing a 2Ã—2 grid as 4 doubles (a,b,c,d). Overload <code>*</code> for matrix multiplication. Overload <code>==</code>. Test by multiplying the identity matrix with another matrix." },
    ],
  },

  "w3-stream": {
    badge: "Week 3â€“4 Â· Lesson 2", title: "Stream Operators << and >>",
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
          "Always a <strong>non-member</strong> (global) function â€” the left operand is a stream, not your class",
          "Take the stream by <strong>reference</strong> (<code>ostream&</code>) â€” streams cannot be copied",
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
    badge: "Week 3â€“4 Â· Lesson 3", title: "Unary Operator Overloading",
    intro: "Unary operators act on a single operand: <code>-</code>, <code>!</code>, <code>++</code>, <code>--</code>.",
    next: "quiz3",
    sections: [
      {
        title: "Prefix vs Postfix ++ / --", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Counter</span> {
<span class="kw">private</span><span class="op">:</span> <span class="type">int</span> val;
<span class="kw">public</span><span class="op">:</span>
    <span class="cls">Counter</span>(<span class="type">int</span> v = <span class="num">0</span>) <span class="op">:</span> val(v) {}

    <span class="cmt">// Prefix ++c â€” no dummy param, return reference</span>
    <span class="cls">Counter</span><span class="op">&</span> <span class="kw">operator</span><span class="op">++</span>() {
        <span class="op">++</span>val;
        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;
    }
    <span class="cmt">// Postfix c++ â€” dummy int, return copy of old value</span>
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
    cout <span class="op"><<</span> (++c).<span class="fn">get</span>(); <span class="cmt">// 6  â€” prefix: new value</span>
    cout <span class="op"><<</span> (c++).<span class="fn">get</span>(); <span class="cmt">// 6  â€” postfix: old value</span>
    cout <span class="op"><<</span> c.<span class="fn">get</span>();     <span class="cmt">// 7  â€” now incremented</span>
    cout <span class="op"><<</span> (-c).<span class="fn">get</span>(); <span class="cmt">// -7</span>
}`,
        rules: [
          "<strong>Prefix</strong> <code>operator++()</code>: no params, increments then returns <code>*this</code> by reference",
          "<strong>Postfix</strong> <code>operator++(int)</code>: dummy <code>int</code> distinguishes it â€” save old, increment, return old copy",
          "Prefix is more efficient â€” no copy needed. Prefer <code>++x</code> over <code>x++</code> in loops",
          "Unary minus: const function, returns a new object with negated value",
          "The dummy <code>int</code> in postfix is a C++ convention â€” you never pass a value for it",
        ]
      },
    ],
    tasks: [
      { title: "Verify Prefix vs Postfix", diff: "easy", text: "Copy the Counter example exactly and run it. Then implement both <code>--c</code> (prefix decrement) and <code>c--</code> (postfix decrement). Predict the output before running each." },
      { title: "Vector Negate & Zero Check", diff: "medium", text: "Add unary <code>operator-</code> to <code>Vector2D</code> so <code>-v</code> negates both components. Add <code>bool operator!</code> returning true if both x and y are zero. Test both." },
      { title: "Complete Fraction Operators", diff: "hard", text: "Extend <code>Fraction</code> with: unary <code>-</code> (negate), prefix <code>++</code> (adds 1/1), and <code>bool operator!</code> (true if numerator is 0). Combine with earlier <code>+</code>, <code>==</code>, <code>&lt;&lt;</code> operators and test them all together." },
    ],
  },

  // â”€â”€ QUIZ PAGES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  quiz1: {
    badge: "Quiz 1", title: "Classes: Part 1 Test",
    intro: "OOP fundamentals, class syntax, member functions, encapsulation, header files.",
    type: "quiz", quizId: "1", next: "w2-scope",
    questions: [
      {
        id: "q1-1", type: "mc", num: "Q1", text: "Which access specifier makes data members accessible only from within the class?",
        opts: ["public", "private", "protected", "internal"], answer: "B",
        ok: "âœ“ Correct! <code>private</code> restricts access to inside the class only. <code>internal</code> is not a C++ keyword.",
        no: "âœ— Answer: <strong>private</strong>. <code>public</code> is accessible from anywhere. <code>internal</code> doesn't exist in C++."
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
        ok: "âœ“ Correct! a.x=5 â†’ 5Ã—2=10. b.x=10 â†’ 10Ã—2=20. Objects are independent.",
        no: "âœ— Answer: <strong>10 20</strong>. Object a keeps default x=5 (Ã—2=10). b.x was set to 10 (Ã—2=20)."
      },
      {
        id: "q1-3", type: "mc", num: "Q3", text: "What is wrong with this setter?",
        code: `<span class="type">void</span> <span class="fn">setAge</span>(<span class="type">int</span> a) {
    age = a;
}`,
        opts: ["The parameter name should match the member name", "It should return int, not void", "No input validation â€” bad values accepted silently", "Nothing is wrong"], answer: "C",
        ok: "âœ“ Correct! A setter's main purpose is validation. Without it, setAge(-5) silently corrupts data.",
        no: "âœ— Answer: <strong>C</strong>. Setters must validate â€” that's their entire purpose over direct assignment."
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
        opts: ["0", "1", "3", "Compile error â€” count is private"], answer: "C",
        ok: "âœ“ Correct! Public functions legally access private members. inc() called 3 times â†’ count = 3.",
        no: "âœ— Answer: <strong>3</strong>. Public functions legally access private members. 3 increments â†’ count = 3."
      },
      {
        id: "q1-5", type: "mc", num: "Q5", text: "When defining a member function outside the class, which syntax is correct?",
        opts: ["void Student.setName(string n) { ... }", "void Student::setName(string n) { ... }", "Student void setName(string n) { ... }", "void setName(Student, string n) { ... }"], answer: "B",
        ok: "âœ“ Correct! Use ClassName:: â€” the scope resolution operator links the function to its class.",
        no: "âœ— Answer: <strong>B</strong>. The :: scope resolution operator is required. The dot . is for object access, not definitions."
      },
      {
        id: "q1-6", type: "mc", num: "Q6", text: "What is the purpose of an include guard (#ifndef / #define / #endif)?",
        opts: ["To make the class compile faster", "To prevent the class from being used externally", "To prevent the header from being included more than once", "To define constants inside the class"], answer: "C",
        ok: "âœ“ Correct! Without a guard, including a header twice causes 'already defined' compile errors.",
        no: "âœ— Answer: <strong>C</strong>. Double inclusion causes redefinition errors. The guard skips re-processing if the macro is already defined."
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
        ok: "âœ“ Correct! Constructor fires at creation â†’ 'born'. Then 'alive'. Destructor fires when x goes out of scope â†’ 'dead'.",
        no: "âœ— Answer: <strong>born alive dead</strong>. Constructor runs at creation, code runs, destructor runs when block ends."
      },
      {
        id: "q2-2", type: "mc", num: "Q2", text: "Which statement about const member functions is TRUE?",
        opts: ["They cannot access any data members", "They can modify private but not public data", "They can read but not modify any data members", "They must return const values only"], answer: "C",
        ok: "âœ“ Correct! A const function has full read access to all members but cannot modify any.",
        no: "âœ— Answer: <strong>C</strong>. Const functions read freely but cannot modify anything."
      },
      {
        id: "q2-3", type: "mc", num: "Q3", text: "When accessing a class member through a pointer, you use:",
        opts: ["The dot operator .", "The arrow operator ->", "The scope operator ::", "Either . or ->"], answer: "B",
        ok: "âœ“ Correct! Use -> for pointers. ptr->method() equals (*ptr).method().",
        no: "âœ— Answer: <strong>B</strong>. Pointers require ->. Regular objects use .. They cannot be swapped."
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
        ok: "âœ“ Correct! Three constructor calls (a, b, heap object) increment the shared static n to 3.",
        no: "âœ— Answer: <strong>3</strong>. a, b, and the new object each call the constructor, incrementing the shared static n."
      },
      {
        id: "q2-5", type: "mc", num: "Q5", text: "When a class contains another class as a data member, this is called:",
        opts: ["Inheritance â€” an 'is-a' relationship", "Composition â€” a 'has-a' relationship", "Encapsulation â€” a 'hides-a' relationship", "Aggregation â€” a 'uses-a' relationship"], answer: "B",
        ok: "âœ“ Correct! Composition = 'has-a'. A Car 'has-a' Engine. An Employee 'has-a' BirthDate.",
        no: "âœ— Answer: <strong>B</strong>. Composition is 'has-a'. Inheritance is 'is-a'."
      },
      {
        id: "q2-6", type: "mc", num: "Q6", text: "You allocate new Student[10]. How must you free it?",
        opts: ["delete ptr;", "free(ptr);", "delete[] ptr;", "It's freed automatically"], answer: "C",
        ok: "âœ“ Correct! Arrays allocated with new[] must be freed with delete[]. Plain delete causes undefined behavior.",
        no: "âœ— Answer: <strong>C</strong>. Use delete[] for arrays. free() is C-style. Plain delete on an array is undefined behavior."
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
        opts: ["C++ simply doesn't allow member stream operators", "The left operand is ostream/istream, not your class â€” it can't be a member of your class", "Member functions can't accept stream references", "They need friend access to private members"], answer: "B",
        ok: "âœ“ Correct! In cout << p, the left side is an ostream object. That's not your class, so the operator can't be its member.",
        no: "âœ— Answer: <strong>B</strong>. The left side of << is always a stream â€” not your type."
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
        ok: "âœ“ Correct! (a+b) = N(7), then N(7)+c = N(12). Chaining evaluates left to right.",
        no: "âœ— Answer: <strong>12</strong>. a+b = N(7), then N(7)+c = N(12). Left-to-right chaining."
      },
      {
        id: "q3-3", type: "mc", num: "Q3", text: "What distinguishes postfix operator++(int) from prefix operator++()?",
        opts: ["Postfix has a return type of void", "Postfix has a dummy int parameter that is never used", "Postfix must always be a non-member function", "The compiler tells them apart by context only"], answer: "B",
        ok: "âœ“ Correct! The dummy int marks the function as postfix â€” you never pass a value for it.",
        no: "âœ— Answer: <strong>B</strong>. The dummy int is a C++ convention to mark postfix â€” required but never used."
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
        ok: "âœ“ Correct! Postfix saves old copy (10), increments x to 11, returns old. So (x++)=10, then x=11.",
        no: "âœ— Answer: <strong>10 11</strong>. Postfix saves old value (10), increments to 11, returns old copy."
      },
      {
        id: "q3-5", type: "mc", num: "Q5", text: "Stream insertion operator<< must return:",
        opts: ["void", "A copy of the printed object", "ostream& â€” a reference to the stream", "bool indicating success"], answer: "C",
        ok: "âœ“ Correct! Returning the stream by reference enables chaining: cout << a << b << c.",
        no: "âœ— Answer: <strong>C</strong>. The stream reference is returned so chaining works: cout << x << y << endl."
      },
      {
        id: "q3-6", type: "mc", num: "Q6", text: "Which of these operators CANNOT be overloaded in C++?",
        opts: ["+ - * /", "++ -- << >>", ":: . .* ?:", "[] () -> =="], answer: "C",
        ok: "âœ“ Correct! These four are not overloadable: scope resolution ::, member access ., pointer-to-member .*, and ternary ?:.",
        no: "âœ— Answer: <strong>C</strong>. ::, ., .*, and ?: cannot be overloaded. All others in the list can be."
      },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 4 Â· ADVANCED OPERATOR OVERLOADING
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "adv-op-binary": {
    badge: "Adv. Operators Â· Lesson 1", title: "Binary Operators â€” Deep Dive",
    intro: "Binary operators take two operands. Overloaded as a member the left side is implicit <code>this</code>; as a non-member both are explicit parameters.",
    next: "adv-op-copy",
    sections: [
      { title: "Assignment & Comparison Operators", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">MyInt</span> {\\n<span class="kw">private</span><span class="op">:</span> <span class="type">int</span> val;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cls">MyInt</span>(<span class="type">int</span> v = <span class="num">0</span>) <span class="op">:</span> val(v) {}\\n\\n    <span class="cmt">// Assignment â€” must return *this for chaining  a=b=c</span>\\n    <span class="cls">MyInt</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> rhs) {\\n        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">!=</span> <span class="op">&</span>rhs) val = rhs.val; <span class="cmt">// self-assignment guard</span>\\n        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;\\n    }\\n    <span class="type">bool</span> <span class="kw">operator</span><span class="op"><</span> (<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> r) <span class="kw">const</span> { <span class="kw">return</span> val <span class="op"><</span>  r.val; }\\n    <span class="type">bool</span> <span class="kw">operator</span><span class="op"><=</span>(<span class="kw">const</span> <span class="cls">MyInt</span><span class="op">&</span> r) <span class="kw">const</span> { <span class="kw">return</span> val <span class="op"><=</span> r.val; }\\n    <span class="type">int</span>  <span class="fn">get</span>() <span class="kw">const</span> { <span class="kw">return</span> val; }\\n};`,
        rules: [
          "Assignment <code>operator=</code> must return <code>ClassName&</code> so chaining <code>a = b = c</code> works",
          "Always guard against self-assignment: <code>if (this != &rhs)</code>",
          "The compiler generates a default <code>operator=</code> that copies members â€” only replace it when you manage raw pointers",
          "Comparison operators should be <code>const</code> member functions returning <code>bool</code>",
        ]
      },
      { title: "Subscript & Function-Call Operators", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">SafeArray</span> {\\n<span class="kw">private</span><span class="op">:</span>\\n    <span class="type">int</span> data[<span class="num">10</span>]; <span class="type">int</span> sz = <span class="num">10</span>;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cmt">// operator[] â€” subscript (non-const: returns ref)</span>\\n    <span class="type">int</span><span class="op">&</span> <span class="kw">operator</span>[](<span class="type">int</span> i) {\\n        <span class="kw">if</span> (i <span class="op"><</span> <span class="num">0</span> <span class="op">||</span> i <span class="op">>=</span> sz) <span class="kw">throw</span> std<span class="op">::</span>out_of_range(<span class="str">"bad index"</span>);\\n        <span class="kw">return</span> data[i];\\n    }\\n    <span class="cmt">// const version for read-only access</span>\\n    <span class="type">int</span> <span class="kw">operator</span>[](<span class="type">int</span> i) <span class="kw">const</span> { <span class="kw">return</span> data[i]; }\\n\\n    <span class="cmt">// operator() â€” makes object callable like a function</span>\\n    <span class="type">int</span> <span class="kw">operator</span>()(<span class="type">int</span> i, <span class="type">int</span> j) <span class="kw">const</span> { <span class="kw">return</span> data[i] <span class="op">+</span> data[j]; }\\n};\\n<span class="cls">SafeArray</span> a;\\na[<span class="num">3</span>] = <span class="num">99</span>;       <span class="cmt">// calls operator[]</span>\\ncout <span class="op"><<</span> a(<span class="num">0</span>,<span class="num">3</span>);  <span class="cmt">// calls operator()</span>`,
        rules: [
          "<code>operator[]</code> returns a reference so it can be on the left side of assignment",
          "Provide both const and non-const <code>[]</code> overloads for full coverage",
          "<code>operator()</code> makes objects callable â€” useful for functors and callbacks",
          "<code>[]</code>, <code>()</code>, <code>=</code>, and <code>-></code> must be member functions â€” they cannot be non-members",
        ]
      },
    ],
    tasks: [
      { title: "Self-Assignment Guard", diff: "easy", text: "Write class <code>Wrapper</code> with a single <code>int value</code>. Implement <code>operator=</code> with a self-assignment guard. Test <code>a = a</code> and chaining <code>a = b = c</code>." },
      { title: "Safe Bounded Array", diff: "medium", text: "Create <code>BoundedArray</code> storing 5 ints. Overload <code>operator[]</code> to throw <code>std::out_of_range</code> on bad indices. Test both valid and invalid indices inside a try/catch." },
      { title: "Polynomial Class", diff: "hard", text: "Create class <code>Poly</code> with coefficients in an array. Overload <code>+</code>, <code>[]</code> (access by degree), and <code>()</code> (evaluate at x). Test: (3xÂ² + 2x + 1) at x=2 should return 17." },
    ],
  },

  "adv-op-copy": {
    badge: "Adv. Operators Â· Lesson 2", title: "Deep vs Shallow Copy",
    intro: "The default copy makes two pointers to the same heap data â€” a <em>shallow copy</em>. A <em>deep copy</em> allocates independent memory.",
    next: "adv-op-array",
    sections: [
      { title: "Why Shallow Copy Crashes", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Buffer</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> size;\\n    <span class="cls">Buffer</span>(<span class="type">int</span> n) <span class="op">:</span> size(n), data(<span class="kw">new</span> <span class="type">int</span>[n]()) {}\\n    <span class="op">~</span><span class="cls">Buffer</span>() { <span class="kw">delete</span>[] data; }\\n    <span class="cmt">// Default copy ctor copies the pointer value â€” DANGER!</span>\\n    <span class="cmt">// b1.data == b2.data â†’ both delete the same memory â†’ crash</span>\\n};`,
        rules: [
          "If a class has <code>new</code> in the constructor, it needs the <strong>Rule of Three</strong>:",
          "âŸ¶ Destructor + Copy Constructor + Copy Assignment Operator",
          "Default copy just copies the pointer â€” both objects then <code>delete</code> the same array â†’ double-free crash",
        ]
      },
      { title: "Deep Copy â€” The Fix", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Buffer</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> size;\\n    <span class="cls">Buffer</span>(<span class="type">int</span> n) <span class="op">:</span> size(n), data(<span class="kw">new</span> <span class="type">int</span>[n]()) {}\\n\\n    <span class="cmt">// Deep copy constructor</span>\\n    <span class="cls">Buffer</span>(<span class="kw">const</span> <span class="cls">Buffer</span><span class="op">&</span> src) <span class="op">:</span> size(src.size), data(<span class="kw">new</span> <span class="type">int</span>[src.size]) {\\n        std<span class="op">::</span>copy(src.data, src.data <span class="op">+</span> size, data);\\n    }\\n    <span class="cmt">// Deep copy assignment</span>\\n    <span class="cls">Buffer</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">Buffer</span><span class="op">&</span> src) {\\n        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">==</span> <span class="op">&</span>src) <span class="kw">return</span> <span class="op">*</span><span class="kw)this</span>;\\n        <span class="kw">delete</span>[] data;\\n        size = src.size; data = <span class="kw">new</span> <span class="type">int</span>[size];\\n        std<span class="op">::</span>copy(src.data, src.data <span class="op">+</span> size, data);\\n        <span class="kw">return</span> <span class="op">*</span><span class="kw)this</span>;\\n    }\\n    <span class="op">~</span><span class="cls">Buffer</span>() { <span class="kw">delete</span>[] data; }\\n};`,
        rules: [
          "Copy constructor signature: <code>ClassName(const ClassName& src)</code>",
          "Copy assignment: <strong>free old memory first</strong>, then allocate fresh and copy values",
          "Copy constructor is called for: <code>Buffer b2 = b1</code>, pass-by-value, return-by-value",
          "Assignment operator is called for: <code>b2 = b1</code> when b2 already exists",
        ]
      },
    ],
    tasks: [
      { title: "Reproduce Shallow Copy Crash", diff: "easy", text: "Write <code>IntBox</code> with <code>int* val</code>. Copy it with the default copy, modify the original â€” observe the copy changed too. Add a destructor print to confirm the double-free." },
      { title: "Implement Deep Copy", diff: "medium", text: "Add a proper copy constructor and <code>operator=</code> to <code>IntBox</code>. Confirm modifying the original no longer affects the copy. Verify each destructor prints exactly once." },
      { title: "String Buffer Class", diff: "hard", text: "Create <code>StrBuf</code> with a <code>char*</code> buffer â€” full Rule of Three: destructor, copy ctor, copy assignment. Overload <code>operator+</code> to concatenate two <code>StrBuf</code> objects. Test all operations." },
    ],
  },

  "adv-op-array": {
    badge: "Adv. Operators Â· Lesson 3", title: "Case Study: Dynamic Array Class",
    intro: "Putting it all together â€” a heap-backed resizable array class with deep copy, <code>[]</code>, <code>+</code>, and stream output.",
    next: "adv-op-convert",
    sections: [
      { title: "DynArray â€” Complete Implementation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">DynArray</span> {\\n<span class="kw">private</span><span class="op">:</span>\\n    <span class="type">int</span><span class="op">*</span> data; <span class="type">int</span> len;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cls">DynArray</span>(<span class="type">int</span> n = <span class="num">0</span>) <span class="op">:</span> len(n), data(n ? <span class="kw">new</span> <span class="type">int</span>[n]() : <span class="kw">nullptr</span>) {}\\n\\n    <span class="cls">DynArray</span>(<span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> o) <span class="op">:</span> len(o.len), data(<span class="kw">new</span> <span class="type">int</span>[o.len]) {\\n        std<span class="op">::</span>copy(o.data, o.data <span class="op">+</span> len, data);\\n    }\\n    <span class="cls">DynArray</span><span class="op">&</span> <span class="kw">operator</span><span class="op">=</span>(<span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> o) {\\n        <span class="kw">if</span> (<span class="kw">this</span> <span class="op">==</span> <span class="op">&</span>o) <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;\\n        <span class="kw">delete</span>[] data; len = o.len; data = <span class="kw">new</span> <span class="type">int</span>[len];\\n        std<span class="op">::</span>copy(o.data, o.data <span class="op">+</span> len, data);\\n        <span class="kw">return</span> <span class="op">*</span><span class="kw">this</span>;\\n    }\\n    <span class="op">~</span><span class="cls">DynArray</span>() { <span class="kw">delete</span>[] data; }\\n\\n    <span class="type">int</span><span class="op">&</span> <span class="kw">operator</span>[](<span class="type">int</span> i)       { <span class="kw">return</span> data[i]; }\\n    <span class="type">int</span>  <span class="kw">operator</span>[](<span class="type">int</span> i) <span class="kw">const</span> { <span class="kw">return</span> data[i]; }\\n    <span class="type">int</span>  <span class="fn">size</span>()            <span class="kw">const</span> { <span class="kw">return</span> len; }\\n\\n    <span class="kw">friend</span> ostream<span class="op">&</span> <span class="kw">operator</span><span class="op"><<</span>(ostream<span class="op">&</span> out, <span class="kw">const</span> <span class="cls">DynArray</span><span class="op">&</span> a) {\\n        out <span class="op"><<</span> <span class="str">"["</span>;\\n        for(int i=0; i<a.len; i++) out << a.data[i] << (i<a.len-1?",":"");\\n        return out << "]";\\n    }\\n};`,
        rules: [
          "Rule of Three implemented together â€” destructor, copy ctor, copy assignment",
          "Provide both const and non-const <code>operator[]</code> overloads",
          "Destructor must use <code>delete[]</code> â€” never plain <code>delete</code> for arrays",
          "Copy assignment must free old memory before allocating new",
        ]
      },
    ],
    tasks: [
      { title: "Build and Test DynArray", diff: "medium", text: "Implement the full <code>DynArray</code>. In <code>main()</code>: create an array of 5 ints, fill it via <code>[]</code>, print it, copy it, modify the original â€” confirm the copy is unaffected." },
      { title: "Add operator+ (concatenate)", diff: "medium", text: "Add <code>DynArray operator+(const DynArray& b) const</code> returning a new array containing all elements of <code>this</code> followed by all of <code>b</code>. Test with two arrays of different sizes." },
      { title: "Add push_back()", diff: "hard", text: "Add <code>void push_back(int val)</code>: allocate new array of size+1, copy old data, append new value, free old array. Call it 5 times and verify the size grows with each call." },
    ],
  },

  "adv-op-convert": {
    badge: "Adv. Operators Â· Lesson 4", title: "Type Conversion Operators",
    intro: "C++ lets you define how your class converts to or from other types â€” both implicitly via constructors and explicitly via conversion operators.",
    next: "adv-op-string",
    sections: [
      { title: "Conversion Constructor & Conversion Operator", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Celsius</span> {\\n<span class="kw">private</span><span class="op">:</span> <span class="type">double</span> temp;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cmt">// Conversion constructor: double â†’ Celsius</span>\\n    <span class="cls">Celsius</span>(<span class="type">double</span> t) <span class="op">:</span> temp(t) {}\\n\\n    <span class="cmt">// Conversion operator: Celsius â†’ double (implicit)</span>\\n    <span class="kw">operator</span> <span class="type">double</span>() <span class="kw">const</span> { <span class="kw">return</span> temp; }\\n\\n    <span class="cmt">// explicit blocks accidental implicit use</span>\\n    <span class="kw">explicit</span> <span class="kw">operator</span> <span class="type">int</span>() <span class="kw">const</span> { <span class="kw">return</span> (<span class="type">int</span>)temp; }\\n};\\n\\n<span class="cls">Celsius</span> c(<span class="num">36.6</span>);\\n<span class="type">double</span> d = c;          <span class="cmt">// OK  â€” implicit operator double()</span>\\n<span class="type">int</span>    i = (<span class="type">int</span>)c;     <span class="cmt">// OK  â€” explicit cast required</span>\\n<span class="cmt">// int j = c;           â† ERROR â€” explicit blocks implicit</span>`,
        rules: [
          "Conversion constructor: single-argument ctor enabling implicit conversion <em>to</em> your class",
          "Conversion operator syntax: <code>operator TargetType() const</code> â€” no return type written",
          "Mark conversion operators <code>explicit</code> to prevent unintended implicit conversions",
          "Mark single-argument constructors <code>explicit</code> too â€” prevents accidental implicit construction",
        ]
      },
    ],
    tasks: [
      { title: "Celsius â†” Fahrenheit", diff: "easy", text: "Create classes <code>Celsius</code> and <code>Fahrenheit</code>. Add a conversion constructor in each that accepts the other type. Test: <code>Fahrenheit f = Celsius(100.0)</code> â†’ 212.0, and <code>Celsius c = Fahrenheit(32.0)</code> â†’ 0.0." },
      { title: "Fraction to double", diff: "medium", text: "Add <code>operator double()</code> to your <code>Fraction</code> class returning numerator/denominator as a double. Test it: <code>Fraction(1,4)</code> should produce 0.25 when assigned to a double." },
      { title: "explicit vs implicit Test", diff: "medium", text: "Create class <code>SafeInt</code> wrapping an int with an <code>explicit</code> constructor. Try to assign an int to a <code>SafeInt</code> implicitly â€” observe the compile error. Then use an explicit cast and confirm it works." },
    ],
  },

  "adv-op-string": {
    badge: "Adv. Operators Â· Lesson 5", title: "Case Study: Simplified String Class",
    intro: "A complete <code>MyString</code> class combining deep copy, <code>+</code>, <code>[]</code>, <code>==</code>, <code>&lt;&lt;</code>, and a conversion operator.",
    next: "quiz4",
    sections: [
      { title: "MyString â€” Full Implementation", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">MyString</span> {\\n<span class="kw">private</span><span class="op">:</span>\\n    <span class="type">char</span><span class="op">*</span> buf; <span class="type">int</span> len;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cls">MyString</span>(<span class="kw">const</span> <span class="type">char</span><span class="op">*</span> s = "") {\\n        len = strlen(s); buf = new char[len+1]; strcpy(buf, s);\\n    }\\n    <span class="cls">MyString</span>(const <span class="cls">MyString</span>& o) : len(o.len), buf(new char[o.len+1]) {\\n        strcpy(buf, o.buf);\\n    }\\n    <span class="cls">MyString</span>& <span class="kw">operator</span>=(const <span class="cls">MyString</span>& o) {\\n        if(this == &o) return *this;\\n        delete[] buf; len = o.len; buf = new char[len+1]; strcpy(buf, o.buf);\\n        return *this;\\n    }\\n    <span class="op">~</span><span class="cls">MyString</span>() { delete[] buf; }\\n\\n    <span class="type">char</span>& <span class="kw">operator</span>[](int i)       { return buf[i]; }\\n    <span class="type">char</span>  <span class="kw">operator</span>[](int i) const { return buf[i]; }\\n    <span class="type">bool</span>  <span class="kw">operator</span>==(const <span class="cls">MyString</span>& o) const { return strcmp(buf,o.buf)==0; }\\n    <span class="cls">MyString</span> <span class="kw">operator</span>+(const <span class="cls">MyString</span>& o) const {\\n        <span class="cls">MyString</span> r; delete[] r.buf;\\n        r.len = len+o.len; r.buf = new char[r.len+1];\\n        strcpy(r.buf, buf); strcat(r.buf, o.buf);\\n        return r;\\n    }\\n    <span class="kw">operator</span> const char*() const { return buf; }\\n    <span class="type">int</span> <span class="fn">length</span>() const { return len; }\\n    <span class="kw">friend</span> ostream& <span class="kw">operator</span><<(ostream& out, const <span class="cls">MyString</span>& s) {\\n        return out << s.buf;\\n    }\\n};`,
        rules: [
          "Full Rule of Three in a realistic context: destructor, copy ctor, copy assignment",
          "<code>operator+</code> allocates fresh memory â€” caller's destructor cleans it up",
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
      { id:"q4-1", type:"mc", num:"Q1", text:"What is the 'Rule of Three' in C++?",
        opts:["Any class with 3+ members needs special treatment","If a class defines destructor, copy ctor, or copy assignment â€” it likely needs all three","A class can have at most 3 overloaded operators","3 methods must be const"], answer:"B",
        ok:"âœ“ Correct! If you manually manage resources (heap memory), you need all three: destructor, copy constructor, and copy assignment operator.",
        no:"âœ— Answer: <strong>B</strong>. Rule of Three: if you need any one of destructor / copy ctor / copy assignment, you almost certainly need all three." },
      { id:"q4-2", type:"mc", num:"Q2", text:"Without a copy constructor, what happens with: <code>Buffer b2 = b1;</code>",
        opts:["Compile error","A deep copy is created","Shallow copy: b1.data and b2.data share the same heap address â†’ double-free crash","b2 is left uninitialized"], answer:"C",
        ok:"âœ“ Correct! Without a copy constructor the compiler copies the pointer value. Both objects then delete the same memory â†’ undefined behaviour / crash.",
        no:"âœ— Answer: <strong>C</strong>. No copy ctor â†’ shallow copy â†’ both pointers share the same address â†’ double-free on destruction." },
      { id:"q4-3", type:"mc", num:"Q3", text:"The copy assignment operator should return:",
        opts:["void","const ClassName&","ClassName& (reference to *this)","A new object by value"], answer:"B",
        ok:"âœ“ Correct! Returning <code>*this</code> by reference allows chaining: <code>a = b = c</code>.",
        no:"âœ— Answer: <strong>C</strong> â€” <code>ClassName&</code>. Returning *this by reference enables chaining." },
      { id:"q4-4", type:"mc", num:"Q4", text:"A conversion operator is written as:",
        opts:["ReturnType operator TargetType() const","TargetType convert() const","operator TargetType() const  (no return type)","static TargetType from(const ClassName&)"], answer:"B",
        ok:"âœ“ Correct! Conversion operators have no written return type: <code>operator double() const { ... }</code>",
        no:"âœ— Answer: <strong>C</strong>. Conversion operators: operator TargetType() const â€” the return type is implicit." },
      { id:"q4-5", type:"mc", num:"Q5", text:"Which operators MUST be member functions (cannot be non-members)?",
        opts:["+ - * /","<< >> == !=","= [] () ->","++ --"], answer:"C",
        ok:"âœ“ Correct! The C++ standard requires that =, [], (), and -> are member functions.",
        no:"âœ— Answer: <strong>C</strong>. = [] () -> must be members. The others can be either members or non-members." },
      { id:"q4-6", type:"mc", num:"Q6", text:"Marking a conversion operator explicit means:",
        opts:["It can only be used via a direct cast â€” implicit conversions are blocked","It runs faster","It must be called from the destructor","It prevents copying"], answer:"A",
        ok:"âœ“ Correct! explicit means you must write an explicit cast â€” accidental implicit conversions are prevented.",
        no:"âœ— Answer: <strong>A</strong>. explicit operators require the programmer to write a cast: (double)obj or static_cast<double>(obj)." },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 5 Â· INHERITANCE
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "inh-concepts": {
    badge: "Inheritance Â· Lesson 1", title: "Inheritance Fundamentals",
    intro: "Inheritance lets a derived class <em>reuse</em> the members of a base class. It models the <strong>is-a</strong> relationship: a Dog IS-A Animal.",
    next: "inh-base",
    sections: [
      { title: "Why Inheritance?", type: "cards", items: [
        { head: "Code Reuse", text: "A derived class inherits all public/protected members â€” no duplication needed." },
        { head: "Extensibility", text: "Add new behaviour in the derived class without modifying the tested base class." },
        { head: "Polymorphism", text: "A base pointer can hold any derived object â€” enabling runtime dispatch." },
        { head: "Is-A Relationship", text: "Dog IS-A Animal. SavingsAccount IS-A BankAccount. Inheritance models this naturally." },
      ]},
      { title: "Basic Inheritance Syntax", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {               <span class="cmt">// Base class\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">string</span> name;\\n    <span class="type">void</span> <span class="fn">breathe</span>() { cout << "breathing\\\\n"; }\\n};\\n\\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {   <span class="cmt">// Derived class\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">bark</span>() {\\n        cout << name << ": Woof!\\\\n"; <span class="cmt">// uses Animal's name\\n    }\\n};\\n\\n<span class="type">int</span> <span class="fn">main</span>() {\\n    <span class="cls">Dog</span> d;\\n    d.name = "Rex";\\n    d.<span class="fn">breathe</span>(); <span class="cmt">// inherited from Animal\\n    d.<span class="fn">bark</span>();    <span class="cmt">// Dog's own method\\n}</span>`,
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
    badge: "Inheritance Â· Lesson 2", title: "Base & Derived Classes",
    intro: "Understanding what gets inherited, what gets hidden, and how derived classes extend the base.",
    next: "inh-relations",
    sections: [
      { title: "Member Visibility Across Hierarchy", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {\\n<span class="kw">public</span><span class="op">:</span>    <span class="type">int</span> pub  = 1; <span class="cmt">// accessible everywhere\\n<span class="kw">protected</span><span class="op">:</span> <span class="type">int</span> prot = 2; <span class="cmt">// accessible in derived classes\\n<span class="kw">private</span><span class="op">:</span>   <span class="type">int</span> priv = 3; <span class="cmt">// NOT accessible in derived classes\\n};\\n<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">show</span>() {\\n        cout << pub;   <span class="cmt">// âœ“\\n        cout << prot;  <span class="cmt">// âœ“\\n        <span class="cmt">// cout << priv;  â† âœ— COMPILE ERROR\\n    }\\n};</span>`,
        rules: [
          "<code>public</code>: accessible everywhere",
          "<code>protected</code>: accessible inside the class AND in derived classes â€” not outside",
          "<code>private</code>: accessible ONLY inside the declaring class â€” not even derived classes",
        ]
      },
      { title: "Function Hiding (non-virtual)", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">speak</span>() { cout << "..."; } <span class="cmt">// non-virtual\\n};\\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">speak</span>() { cout << "Woof!"; } <span class="cmt">// HIDES Animal::speak\\n};\\n<span class="type">int</span> <span class="fn">main</span>() {\\n    <span class="cls">Dog</span> d;\\n    d.<span class="fn">speak</span>();             <span class="cmt">// Woof! â€” Dog's version\\n    d.<span class="cls">Animal</span><span class="op">::</span><span class="fn">speak</span>();    <span class="cmt">// ... â€” force base version\\n}</span>`,
        rules: [
          "Without <code>virtual</code>, a same-name derived function <em>hides</em> the base version â€” no runtime dispatch",
          "Force the base version with <code>Base::method()</code>",
          "True <em>override</em> (runtime polymorphism) requires <code>virtual</code>",
        ]
      },
    ],
    tasks: [
      { title: "Access Specifier Experiment", diff: "easy", text: "Create <code>Base</code> with one public, one protected, one private int. In a derived class member function try to access all three â€” observe which compile and which don't." },
      { title: "Call Base Method Explicitly", diff: "medium", text: "Create <code>Animal</code> with <code>void speak()</code>. Derive <code>Cat</code> that hides it. In <code>main()</code> call <code>speak()</code> (Cat's) and then <code>Animal::speak()</code> explicitly." },
    ],
  },

  "inh-relations": {
    badge: "Inheritance Â· Lesson 3", title: "Relationships Between Base & Derived",
    intro: "A derived object IS-A base object. A derived pointer can be assigned to a base pointer â€” but not the reverse without an explicit cast.",
    next: "inh-ctor",
    sections: [
      { title: "Upcasting & Downcasting", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">breathe</span>() { cout << "breathe\\\\n"; } };\\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> { <span class="kw">public</span><span class="op">:</span> <span class="type">void</span> <span class="fn">bark</span>() { cout << "Woof!\\\\n"; } };\\n\\n<span class="type">int</span> <span class="fn">main</span>() {\\n    <span class="cls">Dog</span> dog;\\n    <span class="cls">Animal</span><span class="op">*</span> ap = &dog;  <span class="cmt">// Upcast â€” always safe (Dog IS-A Animal)\\n    ap<span class="op">-&gt;</span><span class="fn">breathe</span>();       <span class="cmt">// OK\\n    <span class="cmt">// ap-&gt;bark();        â† ERROR: Animal* can't see bark()\\n\\n    <span class="cls">Dog</span><span class="op">*</span> dp = (Dog*)ap; <span class="cmt">// Downcast â€” requires explicit cast\\n    dp<span class="op">-&gt;</span><span class="fn">bark</span>();          <span class="cmt">// OK only if ap really IS a Dog\\n}</span>`,
        rules: [
          "Upcasting (Derived* â†’ Base*) is always safe â€” a Dog IS always an Animal",
          "Downcasting (Base* â†’ Derived*) requires explicit cast and is only safe if the object really is that derived type",
          "Use <code>dynamic_cast<Derived*>(ptr)</code> for safe downcast â€” returns <code>nullptr</code> if it fails",
          "Through a base pointer you only see base-class members (unless the function is virtual)",
        ]
      },
    ],
    tasks: [
      { title: "Upcast Array", diff: "medium", text: "Create <code>Shape</code>, <code>Circle : Shape</code>, <code>Square : Shape</code>. Store one Circle and one Square in a <code>Shape*</code> array. Call a <code>describe()</code> base method on each through the base pointer." },
      { title: "Dynamic Cast Safety", diff: "hard", text: "Attempt <code>dynamic_cast<Circle*></code> on each element. Print 'Is a circle' if non-null, 'Not a circle' if null. This requires at least one virtual function in Shape â€” add it and observe." },
    ],
  },

  "inh-ctor": {
    badge: "Inheritance Â· Lesson 4", title: "Constructors & Destructors in Inheritance",
    intro: "Derived class constructors must call the base constructor. Destructors run in reverse order.",
    next: "inh-types",
    sections: [
      { title: "Constructor Chaining", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Animal</span> {\\n<span class="kw">protected</span><span class="op">:</span> <span class="type">string</span> name;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cls">Animal</span>(<span class="type">string</span> n) <span class="op">:</span> name(n) {\\n        cout << "Animal(" << name << ") created\\\\n";\\n    }\\n    <span class="op">~</span><span class="cls">Animal</span>() { cout << "Animal destroyed\\\\n"; }\\n};\\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Animal</span> {\\n<span class="kw">private</span><span class="op">:</span> <span class="type">string</span> breed;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cmt">// Call base constructor via initializer list\\n    <span class="cls">Dog</span>(<span class="type">string</span> n, <span class="type">string</span> b) <span class="op">:</span> <span class="cls">Animal</span>(n), breed(b) {\\n        cout << "Dog(" << breed << ") created\\\\n";\\n    }\\n    <span class="op">~</span><span class="cls">Dog</span>() { cout << "Dog destroyed\\\\n"; }\\n};\\n<span class="cmt">// Dog d("Rex","Labrador") outputs:\\n<span class="cmt">// Animal(Rex) created â†’ Dog(Labrador) created\\n<span class="cmt">// Dog destroyed       â†’ Animal destroyed</span>`,
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
      { title: "Three-Level Chain", diff: "medium", text: "Create <code>LivingThing â†’ Animal â†’ Dog</code>. Each prints 'created' and 'destroyed'. Confirm the full chain: LTâ†’Aâ†’D created, then Dâ†’Aâ†’LT destroyed." },
      { title: "Force Base Constructor Call", diff: "hard", text: "Remove the default constructor from <code>Animal</code>. Try creating a Dog that doesn't call Animal's constructor in the initializer list. Observe the error, then fix it." },
    ],
  },

  "inh-types": {
    badge: "Inheritance Â· Lesson 5", title: "Public, Protected & Private Inheritance",
    intro: "The inheritance specifier controls how base class access levels appear to the outside world through the derived class.",
    next: "quiz5",
    sections: [
      { title: "Three Inheritance Types", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {\\n<span class="kw">public</span><span class="op">:</span>    <span class="type">int</span> pub;\\n<span class="kw">protected</span><span class="op">:</span> <span class="type">int</span> prot;\\n<span class="kw">private</span><span class="op">:</span>   <span class="type">int</span> priv; <span class="cmt">// never inherited directly\\n};\\n<span class="kw">class</span> <span class="cls">PubDer</span>  <span class="op">:</span> <span class="kw">public</span>    <span class="cls">Base</span> {}; <span class="cmt">// pubâ†’public,    protâ†’protected\\n<span class="kw">class</span> <span class="cls">ProtDer</span> <span class="op">:</span> <span class="kw">protected</span> <span class="cls">Base</span> {}; <span class="cmt">// pubâ†’protected, protâ†’protected\\n<span class="kw">class</span> <span class="cls">PrivDer</span> <span class="op">:</span> <span class="kw">private</span>   <span class="cls">Base</span> {}; <span class="cmt">// pubâ†’private,   protâ†’private\\n\\n<span class="type">int</span> <span class="fn">main</span>() {\\n    <span class="cls">PubDer</span>  a; a.pub = 1;  <span class="cmt">// OK â€” still public\\n    <span class="cls">ProtDer</span> b; <span class="cmt">// b.pub = 1;  â† ERROR â€” now protected\\n    <span class="cls">PrivDer</span> c; <span class="cmt">// c.pub = 1;  â† ERROR â€” now private\\n}</span>`,
        rules: [
          "<strong>public</strong> (most common): keeps public/protected as-is. Use for IS-A relationships.",
          "<strong>protected</strong>: public â†’ protected. The interface becomes internal to further derived classes.",
          "<strong>private</strong> (rare): everything becomes private. Hides the IS-A relationship â€” use for implementation reuse only.",
          "Private base members are always inaccessible regardless of inheritance type.",
        ]
      },
    ],
    tasks: [
      { title: "Compare All Three Types", diff: "easy", text: "Create <code>Base</code> with a public <code>int x</code>. Derive three classes using each inheritance type. Try accessing <code>x</code> from outside each â€” confirm which compile and which don't." },
      { title: "Private Inheritance for Reuse", diff: "medium", text: "Design an <code>Engine</code> class. Make <code>Car</code> inherit from it using <strong>private</strong> inheritance. Expose selected engine methods through public wrapper methods in <code>Car</code>." },
    ],
  },

  quiz5: {
    badge: "Quiz 5", title: "Inheritance Test",
    intro: "Base/derived access levels, constructor chaining, upcasting, inheritance types.",
    type: "quiz", quizId: "5", next: "poly-intro",
    questions: [
      { id:"q5-1", type:"mc", num:"Q1", text: "Which base class members are directly accessible inside a derived class?",
        opts:["Only public members","Public and protected members","All members including private","Only protected members"], answer:"B",
        ok:"âœ“ Correct! Public and protected are accessible in derived classes. Private members are inherited but not directly accessible.",
        no:"âœ— Answer: <strong>B</strong>. Derived classes can reach public and protected, but not private." },
      { id:"q5-2", type:"output", num:"Q2", text: "What is the output?",
        code:`<span class="kw">class</span> <span class="cls">A</span> {\\n<span class="kw">public</span>: <span class="cls">A</span>() { cout << "A "; } ~<span class="cls">A</span>() { cout << "~A "; }\\n};\\n<span class="kw">class</span> <span class="cls">B</span> : <span class="kw">public</span> <span class="cls">A</span> {\\n<span class="kw">public</span>: <span class="cls">B</span>() { cout << "B "; } ~<span class="cls">B</span>() { cout << "~B "; }\\n};\\n<span class="type">int</span> <span class="fn">main</span>() { <span class="cls">B</span> b; }`,
        opts:["B A ~A ~B","A B ~A ~B","A B ~B ~A","B ~B A ~A"], answer:"C",
        ok:"âœ“ Correct! Base ctor first: A, then B. Destruction is reverse: ~B first, then ~A.",
        no:"âœ— Answer: <strong>C</strong>. Construction: base first (A), then derived (B). Destruction always reverses: ~B then ~A." },
      { id:"q5-3", type:"mc", num:"Q3", text: "If a base class has NO default constructor, the derived class must:",
        opts:["Define its own default constructor","Explicitly call the base constructor in its initializer list","Declare itself abstract","Use private inheritance only"], answer:"B",
        ok:"âœ“ Correct! Without a default base constructor you must call it explicitly: Derived(args) : Base(args) { }",
        no:"âœ— Answer: <strong>B</strong>. No default base ctor â†’ you must call it explicitly in the derived's initializer list." },
      { id:"q5-4", type:"mc", num:"Q4", text: "With public inheritance, protected base members become _____ in the derived class.",
        opts:["public","private","protected","inaccessible"], answer:"C",
        ok:"âœ“ Correct! Public inheritance preserves access levels: public stays public, protected stays protected.",
        no:"âœ— Answer: <strong>C</strong>. Protected stays protected with public inheritance." },
      { id:"q5-5", type:"mc", num:"Q5", text: "Assigning a derived pointer to a base pointer is called:",
        opts:["Upcasting â€” always safe","Downcasting â€” requires explicit cast","Implicit casting â€” never safe","Polymorphic assignment â€” requires virtual"], answer:"A",
        ok:"âœ“ Correct! Upcasting (Derived* â†’ Base*) is always safe â€” derived IS always a base.",
        no:"âœ— Answer: <strong>A</strong>. Moving up the hierarchy is upcasting and is always safe." },
      { id:"q5-6", type:"mc", num:"Q6", text: "Which inheritance type completely hides the base class's public interface from external code?",
        opts:["public inheritance","private inheritance","protected inheritance","friend inheritance"], answer:"B",
        ok:"âœ“ Correct! Private inheritance turns all inherited public and protected members into private.",
        no:"âœ— Answer: <strong>B</strong>. Private inheritance makes all inherited members private â€” the interface is completely hidden." },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 6 Â· POLYMORPHISM
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "poly-intro": {
    badge: "Polymorphism Â· Lesson 1", title: "Virtual Functions & Dynamic Binding",
    intro: "Polymorphism (many forms) allows one interface to control access to different implementations. The <code>virtual</code> keyword is the key.",
    next: "poly-vf-table",
    sections: [
      { title: "Statics vs Dynamic Binding", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">show</span>() { cout <span class="op"><<</span> <span class="str">"Base\\\\n"</span>; }\\n    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">print</span>() { cout <span class="op"><<</span> <span class="str">"Base\\\\n"</span>; }\\n};\\n<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="type">void</span> <span class="fn">show</span>() { cout <span class="op"><<</span> <span class="str">"Derived\\\\n"</span>; }\\n    <span class="type">void</span> <span class="fn">print</span>() <span class="kw">override</span> { cout <span class="op"><<</span> <span class="str">"Derived\\\\n"</span>; }\\n};\\n\\n<span class="cls">Base</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">Derived</span>();\\np<span class="op">-></span><span class="fn">show</span>();  <span class="cmt">// Output: Base (Static Binding - by pointer type)</span>\\np<span class="op">-></span><span class="fn">print</span>(); <span class="cmt">// Output: Derived (Dynamic Binding - by object type)</span>`,
        rules: [
          "<strong>Static Binding</strong> (Normal): Compiler picks the function based on the <em>pointer's</em> type at compile time.",
          "<strong>Dynamic Binding</strong> (Virtual): Program picks the function based on the <em>object's</em> type at runtime.",
          "<code>virtual</code> in base class makes all same-named functions in derived classes virtual too.",
          "Use <code>override</code> keyword in derived classes to catch signature mistakes at compile time.",
        ]
      },
      { title: "Virtual Destructors â€” Essential!", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Base</span> { <span class="kw">public</span><span class="op">:</span> <span class="kw">virtual</span> <span class="op">~</span><span class="cls">Base</span>() {} };\\n<span class="kw">class</span> <span class="cls">Derived</span> <span class="op">:</span> <span class="kw">public</span> <span class="cls">Base</span> { <span class="kw">public</span><span class="op">:</span> <span class="op">~</span><span class="cls">Derived</span>() { <span class="cmt">/* clean up */</span> } };\\n\\n<span class="cls">Base</span><span class="op">*</span> p = <span class="kw">new</span> <span class="cls">Derived</span>();\\n<span class="kw">delete</span> p; <span class="cmt">// Without virtual, only Base::~Base() runs â†’ Memory Leak!</span>`,
        rules: [
          "If a class has even ONE virtual function, it MUST have a <strong>virtual destructor</strong>.",
          "Without it, <code>delete pointer_to_base</code> won't call the derived destructor, causing leaks.",
        ]
      },
    ],
    tasks: [
      { title: "Fix the Leak", diff: "easy", text: "Write <code>Base</code> and <code>Derived</code> each with a destructor printing a message. Delete a <code>Base*</code> pointing to <code>Derived</code>. Add <code>virtual</code> to the base destructor and observe the change." },
      { title: "Employee Payroll", diff: "medium", text: "Create <code>Employee</code> with <code>virtual double getSalary()</code>. Derive <code>Developer</code> and <code>Manager</code> with different salary calculations. Store them in a <code>vector<Employee*></code> and print total payroll." },
    ],
  },

  "poly-vf-table": {
    badge: "Polymorphism Â· Lesson 2", title: "The vTable Mechanism",
    intro: "How does C++ know which function to call at runtime? Under the hood, it uses a 'Virtual Method Table' (vTable).",
    next: "quiz6",
    sections: [
      { title: "How vTable Works", type: "bullets", items: [
        "Each class with virtual functions gets a <strong>vTable</strong> (an array of function pointers).",
        "Each object of that class gets a hidden <strong>vPointer</strong> (vptr) pointing to the class's vTable.",
        "Calling a virtual function follows the vPointer â†’ finds the vTable â†’ jumps to the correct address.",
        "Objects with virtual functions are slightly larger (size of one pointer usually 8 bytes).",
      ]},
    ],
    tasks: [
      { title: "Measure vPointer Size", diff: "medium", text: "Create an empty class <code>A</code>. Create class <code>B</code> with one virtual function. Compare <code>sizeof(A)</code> vs <code>sizeof(B)</code>. Explain the difference." },
    ],
  },

  quiz6: {
    badge: "Quiz 6", title: "Polymorphism Test",
    intro: "Virtual functions, dynamic binding, virtual destructors, and vTables.",
    type: "quiz", quizId: "6", next: "abs-concepts",
    questions: [
      { id:"q6-1", type:"mc", num:"Q1", text: "Which keyword enables runtime polymorphism?",
        opts:["static","overload","virtual","inline"], answer:"C",
        ok:"âœ“ Correct! virtual creates an entry in the vTable for runtime resolution.",
        no:"âœ— Answer: <strong>C</strong>. virtual is the key to dynamic binding." },
      { id:"q6-2", type:"mc", num:"Q2", text: "What happens if a base class has no virtual destructor and you delete via Base*?",
        opts:["Memory leaks / Undefined behavior","Syntax error","Compiler fixes it automatically","Object is not deleted"], answer:"A",
        ok:"âœ“ Correct! Only the base destructor runs, leaking the derived part of the object.",
        no:"âœ— Answer: <strong>A</strong>. You must use virtual destructors in polymorphic hierarchies." },
      { id:"q6-3", type:"mc", num:"Q3", text: "Correct signature for overriding <code>void run()</code>?",
        opts:["void run() override","virtual void run()","void run(int x) override","run() override"], answer:"A",
        ok:"âœ“ Correct! override ensures the signature perfectly matches a base virtual function.",
        no:"âœ— Answer: <strong>A</strong>. override keyword helps prevent subtle bugs." },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 7 Â· ABSTRACT CLASSES & TEMPLATES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "abs-concepts": {
    badge: "Abstract Â· Lesson 1", title: "Abstract Classes & Interfaces",
    intro: "An abstract class serves as a blueprint. It cannot be instantiated; it exists only to be inherited from.",
    next: "abs-temp-intro",
    sections: [
      { title: "Pure Virtual Functions", type: "code", lang: "C++",
        code: `<span class="kw">class</span> <span class="cls">Shape</span> {\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cmt">// Pure virtual function = 0</span>\\n    <span class="kw">virtual</span> <span class="type">void</span> <span class="fn">draw</span>() <span class="op">=</span> <span class="num">0</span>;\\n    <span class="kw">virtual</span> <span class="op">~</span><span class="cls">Shape</span>() {}\\n};\\n\\n<span class="cmt">// Shape s; â† ERROR: Cannot instantiate abstract class</span>`,
        rules: [
          "A function with <code>= 0</code> is a <strong>pure virtual function</strong>.",
          "Any class with at least one pure virtual function is <strong>Abstract</strong>.",
          "Derived classes MUST override all pure virtual functions to become concrete (instantiable).",
          "In C++, an 'Interface' is just an abstract class with <em>only</em> pure virtual functions.",
        ]
      },
    ],
    tasks: [
      { title: "Abstract Appliance", diff: "easy", text: "Create abstract <code>Appliance</code> with <code>virtual void turnOn() = 0</code>. Derive <code>Fan</code> and <code>Light</code>. Test by creating pointers to Appliance holding Fan and Light objects." },
    ],
  },

  "abs-temp-intro": {
    badge: "Templates Â· Lesson 2", title: "Function & Class Templates",
    intro: "Templates are a way to write generic code. You write the logic once, and the compiler generates versions for different types.",
    next: "quiz7",
    sections: [
      { title: "Generic Functions", type: "code", lang: "C++",
        code: `<span class="kw">template</span> <span class="op"><</span><span class="kw">typename</span> <span class="cls">T</span><span class="op">></span>\\n<span class="cls">T</span> <span class="fn">myMax</span>(<span class="cls">T</span> a, <span class="cls">T</span> b) {\\n    <span class="kw">return</span> (a <span class="op">></span> b) <span class="op">?</span> a <span class="op">:</span> b;\\n}\\n\\ncout <span class="op"><<</span> <span class="fn">myMax</span>(<span class="num">10</span>, <span class="num">20</span>);      <span class="cmt">// T is int</span>\\ncout <span class="op"><<</span> <span class="fn">myMax</span>(<span class="num">3.14</span>, <span class="num">2.71</span>);  <span class="cmt">// T is double</span>`,
        rules: [
          "<code>template <typename T></code> tells the compiler <code>T</code> is a placeholder type.",
          "Templates enable **Generic Programming**.",
          "Code is generated when the function is <em>called</em> (instantiated).",
        ]
      },
      { title: "Class Templates", type: "code", lang: "C++",
        code: `<span class="kw">template</span> <span class="op"><</span><span class="kw">class</span> <span class="cls">T</span><span class="op">></span>\\n<span class="kw">class</span> <span class="cls">Box</span> {\\n    <span class="cls">T</span> item;\\n<span class="kw">public</span><span class="op">:</span>\\n    <span class="cls">Box</span>(<span class="cls">T</span> i) <span class="op">:</span> item(i) {}\\n    <span class="cls">T</span> <span class="fn">get</span>() { <span class="kw">return</span> item; }\\n};\\n\\n<span class="cls">Box</span><span class="op"><</span><span class="type">int</span><span class="op">></span> <span class="fn">intBox</span>(<span class="num">123</span>);`,
        rules: [
          "STL containers like <code>vector<int></code> are class templates.",
        ]
      },
    ],
    tasks: [
      { title: "Generic Swap", diff: "easy", text: "Write a template function <code>mySwap(T& a, T& b)</code>. Test it with <code>int</code>, <code>double</code>, and <code>string</code>." },
      { title: "Simple Stack", diff: "hard", text: "Create a <code>Stack<T></code> class template with <code>push()</code>, <code>pop()</code>, and <code>top()</code>. Test it by stacking ints and then strings." },
    ],
  },

  quiz7: {
    badge: "Quiz 7", title: "Abstract & Templates Test",
    intro: "Pure virtual functions, instantiability, and template syntax.",
    type: "quiz", quizId: "7", next: "io-concepts",
    questions: [
      { id:"q7-1", type:"mc", num:"Q1", text: "How do you make a function 'pure virtual'?",
        opts:["virtual void f() {}","void f() = 0","virtual void f() = 0","pure void f()"], answer:"C",
        ok:"âœ“ Correct! The = 0 makes it pure virtual.",
        no:"âœ— Answer: <strong>C</strong>. It must be virtual AND end with = 0." },
      { id:"q7-2", type:"mc", num:"Q2", text: "Can you create an object of an abstract class?",
        opts:["Yes, always","No, never","Only if it has a constructor","Only if it has no variables"], answer:"B",
        ok:"âœ“ Correct! Abstract classes can only be used as base classes.",
        no:"âœ— Answer: <strong>B</strong>. Abstract classes' instances are prohibited." },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 8 Â· STREAM I/O & FILES
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "io-concepts": {
    badge: "I/O Â· Lesson 1", title: "Files & Streams",
    intro: "C++ uses streams for input and output. <code>ifstream</code> for reading, <code>ofstream</code> for writing.",
    next: "gui-intro",
    sections: [
      { title: "Writing & Reading Files", type: "code", lang: "C++",
        code: `#include <fstream>\\n\\n<span class="cmt">// Writing</span>\\nofstream <span class="fn">out</span>(<span class="str">"test.txt"</span>);\\nout <span class="op"><<</span> <span class="str">"Hello File!"</span> <span class="op"><<</span> endl;\\nout.close();\\n\\n<span class="cmt">// Reading</span>\\nifstream <span class="fn">in</span>(<span class="str">"test.txt"</span>);\\n<span class="type">string</span> line;\\ngetline(in, line);\\ncout <span class="op"><<</span> line;`,
        rules: [
          "Include <code><fstream></code> for file operations.",
          "Check if file is open with <code>if(file.is_open())</code>.",
          "Streams close automatically when they go out of scope, but <code>.close()</code> is good practice.",
        ]
      },
    ],
    tasks: [
      { title: "Logger Class", diff: "medium", text: "Create a <code>Logger</code> class that appends strings to a <code>log.txt</code> file. Add a timestamp if you can." },
    ],
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  //  MODULE 9 Â· GUI WITH QT
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

  "gui-intro": {
    badge: "GUI Â· Lesson 1", title: "Introduction to Qt",
    intro: "Qt is a powerful C++ framework for building cross-platform GUI applications using a Signals & Slots mechanism.",
    next: "nav-home",
    sections: [
      { title: "Signals and Slots", type: "bullets", items: [
        "<strong>Signals</strong>: Emitted when an event happens (e.g., button clicked).",
        "<strong>Slots</strong>: Functions called in response to signals.",
        "Connection: <code>connect(button, &QPushButton::clicked, receiver, &MySlot);</code>",
      ]},
    ],
    tasks: [
      { title: "Hello Qt", diff: "easy", text: "Install Qt Creator. Create a basic 'Widgets Application' with a button that changes a label text when clicked." },
    ],
  },

};
