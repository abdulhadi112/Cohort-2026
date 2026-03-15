Date - 7/2/26
Topics Covered :

- Internals & Behind the scenes
- Variables, Loops, Conditionals
- Hoisting
- Global Execution Context

<br>

- Story based introduction to JS
- Roles :
  - `Type of Wood ` - Datatypes
  - `Dept. (cutting, framing, etc)` - Functions (Each with its own Local Execution Context)
  - `Factory` - Global Context
  - `Manager` - Call Stack
- Programming mein there 2 things - Kya karna hai (the Processing) & Kis par karna hai (The datatype)

<br>

- Browser understands only 3 languages `HTML CSS & JS`
- To run JS on browser we need Engine, some popular engines are - Spidermonkey, v8
- NodeJS - a v8 engine with cpp bindings, basically a runtime environment that helps us run JS locally
- A short tour on Chrome Developer Tools
  - Elements : HTML & CSS
    - View and edit DOM structure.
    - Change CSS styles live.
    - See computed styles, event listeners, and box model.
    - Edit attributes and text content.
  - Console : JS
    - Execute JS commands.
    - View errors, warnings, and logs.
    - Interact with page objects.
    - Debug scripts with console outputs.
  - Sources :Debug JS & view source files, watch variables & call stack
  - Network : monitoring external API calls made by the browser
    - Inspect HTTP requests/responses.
    - View resource load times.
    - Analyze request headers, payloads, and responses.
    - Simulate network conditions.
  - Performance : Analyze runtime performance
    - Record and profile page activity.
    - View CPU usage, frame rates, and bottlenecks.
    - Identify slow scripts and rendering issues.

<br>
LOOPS :
1. For : When you exactly know how many times you need to run the code
2. While : Run the code until the work is done
3. Do..while : Run at least once even if the condition is false

<br>
- Jabhi JS code run hota hai, a Execution Context(EC) is created
- The EC has 2 phases :
  1. Memory Phase
  2. Code Phase
- The JS engine sort of scans the entire code & loads all the variables, but the values are not assigned. This happens in the memory phase
- All the values are assigned to the variables & the code is run line-by-line. This happens in the code phase
- Memory phase mein Variables & functions dono hoist hote hai

## Temporal Dead zone

- It is a specific period in JS where variables declared with `let` & `const` exist in memory but are uninitialized & inaccessible
- This zone last from the start to the block scope until the line where the variable is defined, causing a `ReferenceError` when accessed

<hr>
- Functions are hoisted 
- Arrow Functions & Function expression arent

## from here on there are mostly code based notes

---

## Random notes:

- Const is blocked level scope
- Jitni cheezein Solid rahegi humare code mein ki change na ho paye, utna humare software bug-free, error-free & predictable rahta hai
-

# Pointers - Research work

- Does using \_ for big numbers affect performance ? eg : 1_00_000
