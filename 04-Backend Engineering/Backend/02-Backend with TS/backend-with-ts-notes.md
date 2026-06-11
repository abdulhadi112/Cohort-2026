SERVERS

- A server is a specialized computer that is always running & provides resources, data or services to other computers(users across the world) over a network. They are designed to run 24/7/365, have massive hard drives, tons of memory (RAM), and highly powerful processors to handle thousands of requests at the exact same time. We can access a server using SSH through our local computer
- A server can be locally(homelab) as well as on cloud (AWS, GCP, DigitalOcean etc)
- There are 4 common types of server:
  1. File Server : A giant digital storage locker. Instead of saving a file to your local computer, a company saves it here so every employee can access it.
  2. Print Server : A single computer that manages all the printers in an office building, queuing up print jobs so the printers don't get overwhelmed.
  3. Database Servers : A massive, ultra-fast spreadsheet. It holds organized data (like user passwords, bank account balances, or product inventory) that other programs constantly check.
  4. Mail Servers : The digital post office. It moves emails from one person to another and holds them until you open your inbox.
- They run on specific ports

WEB SERVERS

- A specialized computer that delivers web pages to other(user) devices(eg: Nginx, caddy etc)
- HTTP, HTTP/2 & HTTPS are responsible for making Web servers
- HTTPS & HTTP mein sirf encryption certificates(TLS) ka difference hota hai
- http ek nodejs ka core module hai & 'http.createServer(...)' use karke we can make a http webserver
- We rarely create raw servers using http module. There are libraries & framework available which can handle things like routing, middleware, request-response parsing, serving static files, template engine integration(helps render HTML views using simple commands). One such framework is "Express"
- 'request' is something sent by user asking for data or action. It is a object & includes many things.
- Jabh ek user req bhejta hai toh uske zariye hum bohot kuch pata laga sakte hai for eg: Method(GET,POST,PUT etc), remote IP (of user), URL, headers, hostname, secure(returns true if TLS is established) etc
- It is recommended to study these request & response object, not necessary ki sabke baare mein pata ho

Installing express

- 'npm i express': Installs the latest stable version of express (yeh hum production mein prefer nhi karte hai, we mainly focus on the reliable version )
- 'npm i express@4': Installs express 4
- 'npm i express@4.1.7': Installs the exact version of express

- package-lock.json har package & dependencies ka exact version store karta hai

# EXPRESS

- 'express.json()' :
  - IMP : This must be before route definitions
  - Automatically parses incoming requests with JSON payloads & makes that data available on req.body
  - When a client sends data to your server via a POST or PUT request using JSON, the data travels across the network as a raw text stream.
  - If try to access req.body without 'express.json()', it will return undefined
  - How it works :
    - When you add app.use(express.json()) to your app, it intercepts incoming requests and performs three tasks behind the scenes:
      1. Checks the header : It looks for requests with a `Content-Type: application/json` header
      2. Collects the stream : It gather all the raw text chunks of data streaming into the server
      3. Parses into JS : It runs `JSON.parse()` on that text & attaches the resulting JS object directly to req.body so we can read it easily.

---

# Express with TS

- Create a folder where we will keep all our TS files.
- We make a tsconfig file, it basically defines or tell the TS :
  - Where to look for the TS files (i.e src folder)
  - Where to put the results after compiling (i.e dist folder)
  - What style to use (eg: esm, es2015 etc)
  - Also we cannot change the name of this file
  - We use `tsc --init` to make the tsconfig file
  - Uncomment 'rootDir', 'outDir', 'lib' & 'types'
- To run the TS files we use `tsc -p .`
  - `tsc`:Short for TypeScript Compiler. This invokes the TypeScript tool to check your code for errors and translate your .ts files into .js files.
  - `-p` : Short for project. This flag tells the compiler, "Don't just look at a single file; look for a configuration file (tsconfig.json) to manage the compilation."
  - `.` : Represents the current directory
  - It basically reads the `tsconfig.json` file, scans the project, ensures there no bugs & finally converts the TS file into JS & drops it into our Output folder
- We create a gitignore file, that includes all the files that we don't want to push on github
- A command that create a gitignore file for Node projects `npx gitignore Node`
- To avoid typing the same command again & again we have scripts in package.json, we just run `npm run <scriptName>` & it runs that command
- We install TS in our prj as DevDependencies, `npm i -D typescript` & a ts watcher, `npm i -D tsc-watch`
- `"dev": "tsc-watch --onSuccess \"node dist/index.js\""`:
  - Meaning, TS watch my file & on successfull compile run 'node dist/index.js'
  - 'tsc-watch' : Watches the TS files & recompiles automatically when we make changes
- While writing TS code we need types. Express is written in JS & doesn't include types. But there is `@types/express` that provides the necessary types required while coding

---

# Moving towards Production level structuring

- In src/index.ts : There is any issue while giving the PORT. Ho sakta hai PORT ho but woh string mein ho & typecasting par NaN ban jaye. Ho sakta hai PORT is undefined in that case it can fallback to 3000
- So to make sure that our env variables are also type validated we use 'zod' library (yeh saari cheez env mein honi chahiye & of valid type)
- Note : Env variables can never be number. Woh humesha String k roop mein aate hai
- In src/index.ts :

  ```js
  const server = http.createServer(createServerApp);
  ```

  - http.createServer : Creates a web server & just listens to the incoming requests. Does not know what to do when a user request on '/me' or '/pricing' etc.
  - The handling or the guide that tell the http server what to do when someone asks for '/me' or '/pricing' is provided by createServerApp
  - createServerApp mein abhi k liye hum express use kar rhe hai par aage chal kar agar 'Hono' ya 'fastify' use karna padha toh we just have to change one file i.e src/app/index.ts

- The 'app' folder contains all the business logic. We create separate folder for each feature for eg: todo folder containers todo's routes, controller & models
- We are making class based controller. This is a new pattern that we learned
- In 'src/validation/todo.schema.ts' : Humne schema banya ki humara Todo kaise dikhega, usae validate bhi kara & uski typing based on the schema bhi bana li. Typing will help us when we make our controllers.
  - How is it useful :
    1. Validation : Ensures that the Todo matches the expected structure before processing or storing it

# The `env.ts`

- This file helps validate & normalize environment variables at startup using Zod(a runtime schema validation library)
- What it does :
  - Checks all the environment variables against a set of rules defined by zod
  - It checks if they actually exist & are of correct type(eg: PORT is valid number, DB_URL is a valid link)
- `Zod`: A Runtime schema validation library that lets us define what shape/types we expect from the env file & validate it
- `envSchema` : This is where we define the shape of the env.
  - `z.object({ })`: It expects an object with the following keys
  - Like PORT must be a string & if it is undefined Zod will set it to "3000" in the parsed output.
- `createEnv` : It takes raw env variables, validates them against the predefined Zod schema(i.e envSchema) & exports a clean, type-safe object to use across our application
  - `envSchema` : The schema we defined earlier. Holds the rules of how our environment variables should look like.
  - `safeParse()` : A crucial Zod method. Instead of throwing loud, disruptive code error if the validation fails, safeParse quietly runs the check & returns a neat object containing the results
  - `safeParseResult.success` : Zod's safeParse object always includes a boolean '.success' property.
    - If false, it means your .env file is missing a required variable, or a variable failed a type check
    - If true, it returns safeParseResult.data which contains finalized & validated data.
  - `throw new Error()` : The application intentionally crashes right here during startup. It stops execution and prints out Zod's detailed error message, telling us exactly which env variable is broken & why
- `export ...` : By using export, we can import this clean env OBJECT into any other file of our backend (eg: import {env} from "./env"). We can directly use `env.PORT` instead of process.env.PORT
