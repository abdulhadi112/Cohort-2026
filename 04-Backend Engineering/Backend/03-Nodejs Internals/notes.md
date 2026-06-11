# Nodejs Internals

- JS ko run karne k liye browsers mein ek engine hota hai like V8, spidermonkey etc
- Earlier JS browser k andar chalti thi as the engine was inside the browser.
- Additional things like setInterval, fetch, async Promises, DOM etc were provided by Browser (They are not a part of core JS, even console.log is not a part of JS)

## NODEJS

- Is a runtime that allows us to JS locally
- it is also called "JS on the server". One of the reason ki JS server par pehli baar aayi is 'Nodejs'
- Pehele joh engine JS ko execute karta tha woh sirf Browser mein tha
- Libuv humein Async I/O layer deti hai - Yehi woh layer hai joh Network se baat kar sakti hai, Input-Output kar sakti hai, Single threaded architecture bhi humein yehi se mil ta hai
- NOTE: Console is not a part of JS, it is part of Nodejs (we can view additional things added in Nodejs on nodejs.org/docs) (Nodejs andar aur bhi cheezein hai jaise : OS, path, file system, DNS, crypto etc)
- 'fs', 'path' & 'os' are some of the commonly used Built-in Modules
  - fs : Allows you to interact with the files on your computer. We can read, write, update, delete file & folders
  - path : Helps handle & transform file path. It makes sure your folder paths work correctly across different operating systems
  - os : Provides information about your computer's operating system, such as free memory, CPU details, uptime, and system architecture

### V8 Engine

- V8 Engine converts the JS code into Machine code (this process is known as JIT(Just In Time) compilation)
- JS is an interpreted language. Interpreted language cannot be compiled. Compiled languages (Java, C++) are fast (they check if there are any errors in the code, Agar hote hai toh woh user ko peheli hi bata deti hai ) as compared to Interpreted Languages which are slow (ismein saari checking runtime par hoti hai)
- V8 Engine manages the memory (heap & stack). V8 Engine doesn't know anything about Files, network or timers

### LIBUV

- It is a pure C library
- Gives us the Event Loop, Thread Pool & OS layer par joh kaam karna rahta woh bhi yehi se milta hai, DNS Lookups etc
- We get the background threads from Libuv (that help in execution)

### Nodejs Bindings

- This allows JS to communicate & overall help in performing low-level operations. Low-level Operations: reading a file or opening a network socket etc.
- JS does not have the ability to do the low0level operations. Nodejs handles these task by using libraries written in C/C++.
- Libuv se humein joh bhi OS layer par kaam karna hai woh milta hai. JS mein hum code likhte hai. How these two communicate with each other? Through Nodejs Bindings.
- Nodejs Bindings bridges the gap so that when we call a standard Node API like fs.readFile(), the request can cross over to these libraries to perform the actual work.

## When these 3 are binded we get NODEJS

## How does JS run

- JS runs differently on browser & nodejs. A simple `console.log` works differently in Browser (i.e window -> console -> log() -> display output on the console in the browser) & Nodejs environment.
- But the output is the same in both the cases.
- Ryan Dahl made sure that the syntax remained the same so that the code can run in both the environments. But the internal application is entirely different
- We use `node filename.js` to run JS in Nodejs. As soon as this command is run, nodejs internally creates a process. Iss Process k andar it acquires a thread i.e 'Main Thread', where all of the JS code runs. If we kill or block this thread toh humara code chalna bandh hojayega. It is the most IMPORTANT part.
  - What is Thread : consider 1 thread = 1 worker following instructions step by step. JS runs on 1 Main thread.
  - Nodejs runs JS on the main thread but it also uses other threads internally through 'libuv'.
  - For eg : File system or some crypto operations may run in a background thread pool.
- Steps of how the code is run(24:14) :
  - Init Project
  1. Top Level Code execution : Top level code is any code that is written outside a function, class method or block that's executed later. It runs immediately when it is loaded.
  2. Import statements : All the modules are imported. For eg : import fs from "fs"
  3. Event callbacks are registered: Kisi particular event k callback ko register karna. Like `process.on('SIGINT', ()=> {...})` SIGINT signal par process ko terminate kardo. The function after 'SIGINT' is known as 'event callback'. These types of event callbacks are registered(stored) in the memory. Also we can perform certain operation when the SIGINT signal is received(like closing the sockets, saving the unsaved data, cleaning the buffer etc before closing the server).
  4. (After the above steps are done) Starts the `Event Loop`:
  - Event Loop sabse pehele ExpiredCallbacks(timer callbacks whose delay has finished) check karti hai.
  - `IO Polling` : Event loop checks whether any async I/O work is finished like file read, DB/network socket activity, if yes then run its callback. For eg: fs.readFile('sample.txt','utf-8', ()=>{...}) - file read hogyi hai toh execute the callback function.
  - `setImmediate()`(only available in Nodejs)
  - Run closed callbacks if any
  - Lastly checks if anything is pending, YES => continue, NO => EXIT
- `setTimeout()` & `setImmediate()` behave differently with & without console.log. Also what is `process.nextTick()`
- To get the answer read this article [Nodejs Event Loop](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick)
