Lecture 1 : Intro to Backend Engineering

- Covering HTTP methods & intro to TS

What are HTTP Methods(HTTP Verbs)

- standardized request types that tell a server what action to perform on a specific resource
- Eg: GET method is used to read/retrieve resource from the server.

Types :

1. GET

- Used to read/retrieve a resource
- No side effects, meaning ek kaam kar rhe ho toh uska effect kisi dusri cheez par nhi padhna chahiye. In simpler terms, data ko read karke lao don't make any changes in the DB
- Idempotent (calling 10x times = same as calling 1x time). Eg: GET /users/123 always returns the same user data without changing the server state. 10 baar data mil sakta hai but 10so baar same hi data milega
- is made cacheable by Browser & CDN

2. POST

- Used to create a new resource
- Not idempotent, reason: it is specifically designed to create new resources or trigger actions where every request results in a new state change on the server, ho sakta hai user 10 baar post karna chahta ho & each one has different content.
- Calling 10x times may create 10x resources
- POST request khaali bhi jaa sakti hai, not necessary agar POST req bhej rhe hai toh resource create karna zaruri hai
- Jabh bhi hum koi resource create karte hai toh we send status codes in response. Common ones are : 200(OK), 201(Created).

3. PUT

- Replace or update a resource completely
- PUT req mein expected yeh hai ki hum saara data bhejege, for eg: if we just want to update a user's age but we send his entire data
- Is usually Idempotent

4. PATCH

- partially updates a resource, send ONLY changed field (bandwidth efficient)
- (Bandwidth consumption is the total amount of data transferred into or out of a system over a specific period.)

5. DELETE

- Used to remove a resource
- Expected hai ki delete bhi idempotent hoga.

6. HEAD (rarely used)

- Same as GET but returns only Headers & no body

7. OPTIONS (rarely used)

- Jabh hum server banayege tabh dekhege
- It is used for Preflight/ capability check
- Browser req bhejne se just Pehle CORS ki req bhejta hai
- Browser automatically bhejta hai but hum CORS req OPTIONS k through bhej sakte hai

Jabh humare kaam backend se hojaata hai toh we send a response. Depend karta hai kya operation/processing humne ki hai uske basis par response bhejte hai. Each response has status code, some common ones are : 404(Not found), 201(created), 200(OK), 500(internal server error). The status codes range from 100 - 599. Best resource is to read on mdn about this.

`node --watch chai.js` : '--watch' se humari file continuously monitor hoti hai for changes. If there are any changes, the changes are shown automatically whenever we save

TYPESCRIPT

- Nothing but JS with types
- Cannot be used alone
- Is used for developing purposes. We write our source code in TS but when we want to deploy, we compile TS into JS & then run the JS file
- TS file k andar any valid JS code can be written
- Suppose we make a `addTwo` function usmein we have 2 parameters 'a & b'. TS says ki inn parameters ka bhi type bata do. Once we do that, jabh hum iss function ko use karege we know what datatype we need to pass as an argument. It looks something like this : `add(a:number, b:number):number`. Meaning `add` takes 2 parameters both are of type number & it also returns a number
- If we send any other datatype apart from these TS gives us error.
- One more benefit is since we know the datatype we can access functions of that class as well (suggestions mein milte hai)
- Improves overall DX & helps fix errors early

NODEJS

- Is a runtime that allows us to JS locally
- it is also called "JS on the server". One of the reason ki JS server par pehli baar aayi is 'Nodejs'
- Pehele joh engine JS ko execute karta tha woh sirf Browser mein tha
- Libuv humein Async I/O layer deti hai - Yehi woh layer hai joh Network se baat kar sakti hai, Input-Output kar sakti hai, Single threaded architecture bhi humein yehi se mil ta hai
- NOTE: Console is not a part of JS, it is part of Nodejs (we can view additional things added in Nodejs on nodejs.org/docs) (Nodejs andar aur bhi cheezein hai jaise : OS, path, file system, DNS, crypto etc)
- 'fs', 'path' & 'os' are some of the commonly used Built-in Modules
  - fs : Allows you to interact with the files on your computer. We can read, write, update, delete file & folders
  - path : Helps handle & transform file path. It makes sure your folder paths work correctly across different operating systems
  - os : Provides information about your computer's operating system, such as free memory, CPU details, uptime, and system architecture

V8 Engine

- V8 Engine converts the JS code into Machine code (this process is known as JIT(Just In Time) compilation)
- JS is an interpreted language. Interpreted language cannot be compiled. Compiled languages (Java, C++) are fast (they check if there are any errors in the code, Agar hote hai toh woh user ko peheli hi bata deti hai ) as compared to Interpreted Languages which are slow (ismein saari checking runtime par hoti hai)
- V8 Engine manages the memory (heap & stack). V8 Engine doesn't know anything about Files, network or timers

LIBUV

- It is a pure C library
- Gives us the Event Loop, Thread Pool & OS layer par joh kaam karna rahta woh bhi yehi se milta hai, DNS Lookups etc
- We get the background threads from Libuv (that help in execution)

Nodejs Bindings

- This allows JS to communicate & overall help in performing low-level operations. Low-level Operations: reading a file or opening a network socket etc.
- JS does not have the ability to do the low0level operations. Nodejs handles these task by using libraries written in C/C++.
- Libuv se humein joh bhi OS layer par kaam karna hai woh milta hai. JS mein hum code likhte hai. How these two communicate with each other? Through Nodejs Bindings.
- Nodejs Bindings bridges the gap so that when we call a standard Node API like fs.readFile(), the request can cross over to these libraries to perform the actual work.

When these 3 are binded we get NODEJS
