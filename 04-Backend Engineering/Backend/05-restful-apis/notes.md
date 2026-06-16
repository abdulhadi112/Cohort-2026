# Building RESTful APIs

- Goal: To build production ready APIs
- Jis tarah se hum inn APIs ko build kar rhe hai, iske baad we can easily shift to Nestjs, Springboot etc
- Tech Stack : Express, MongoDB,
- MongoDB se connect karne k liye mongoose hai. Similarly for SQL DBs k liye sequlize, TypeORM etc hai
- The focus of this session is to understand how to keep the codebase (code file/folder structure)
  - server.js : Used to start the web server & do other configurations
    <!-- THE MVC (Model View Controller) Architecture -->
  - ./src :
    - app.js : here routes & middlewares are added
    - controllers : Handlers are written here i.e business logic
    - routes : endpoints are created here like '/register', '/login'
    - models : Schema building is done here
    - utils : frequently used function or utility are written here like dbConnection, sendingMails etc
- Jabh frameworks k saath kaam karte hai toh folder structure fixed hota hai. Like Nestjs folder structure (we will study a similar folder structure)
- user.controller.js : ismein sirf function call likho
- user.service.js : ismein business logic likho
- These separate folder (like users,cart,payment,product etc) are called services. These 'services' folder contain their own files like controller, models, routes & service
- '.gitignore' already root file mein so did not create it here
- `NODE_ENV=development` : Kahi baar depend karta environment par ki humein 'logs' show karne hai ya nhi, konse DB se connect karna hai etc. Inshort bohot saara code hum if-else karke likh sakte hai depending on our NODE_ENV
- `modules` folder create karne ka reason : to organize related functionalites together. Like 'users' ke routes, controller, models &services ek hi jagah par hai
- `common` folder create karne ka reason : To store reusable code shared across multiple modules
- `URI` : Uniform Resource Identifier, a unique identifier for a resource. It identifies the object but doesn’t necessarily give you directions to it. Eg : `urn:isbn:0451450523` (A standard Book ISBN that identifies the book universally but tells you nothing about where to download or buy it).
- `URL` : Uniform Resource Locator, a specific type of URI that not only identifies the resource but also specifies exactly how to access it. Eg: `https://example.com/index.html` It specifies the protocol (https), the server location (example.com), and the file path (index.html)

```js
const conn = await mongoose.connect(process.env.MONGO_URI);
```

- What is inside `conn` : It is a complex object, 3 commonly used properties are `host`, `port` & `name`
- Something like this

```
host: 'ac-erntchs-shard-00-00.zchob8e.mongodb.net',
port: 27017,
name: 'Cohort-Auth',
```

---

## Standardizing API Response & Error

- Jabh bhi kuch standardize karna ho toh 'class' is the best option

```js
// API Response
  static ok(response, message, data = null) {
    return response
      .status(200)
      .json({
        success: true,
        message,
        data
      })
  }
```

- `static` : It is used to define methods & properties that belong to the class itself, rather than to the instances(objects) of that class. This means we can access these methods directly using the class name, without needing to create an object of the class first
  - If something is different per object → instance
  - If something is shared across all objects → static
- `message` : for eg: 'User created successfully', 'Product fetched successfully' etc

```js
constructor(statusCode, message) {
    super(message) // calls the constructor of the parent class (in this case its Error class)
    this.statusCode = statusCode
    this.message = message
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }

  static badRequest(message = "Bad Request") {
    return new ApiError(400, message)
  }
```

- We can call these methods on the class itself like `throw ApiError.badReqiest('Name is required')`

---

- Validation library : `Zod`, `yup`, `joi`, `Arktype`, `express-validator`
- When working with TS go with Zod or Arktype.
- When working with JS go with Joi, Yup or express-validator
- We are going with `Joi` in this project
- DTO(Data Transfer Object) is a 'design pattern' used to carry data between processes or application layer. They are simple serializable object containing no business logic
- acts as traffic police, making sure joh data maanga hai sirf wohi hi mile server ko (validation + proper structure)
- DTO is a concept & Joi is the library helping us to apply this concept
- Just like `Error` is the base class for `ApiError`. Similarly `BaseDTO` is the base class for other DTOs. We expect the extended class modifies the schema
- Steps while making any app :
  1. Database Design
  2. Create base DTO
  3. Create the validate middleware for validating particular DTOs
  4. Creates the services -> controllers -> routes
- The validation that we are doing in `auth.model.js` is validation before it is inserted in the DB. Whereas Joi layer validation is the validation before it reaches the controller
- ALSO STUDY WHAT IS DIFFERENCE BETWEEN HASHING & ENCRYPTION
- `Hashing` : The process of converting data into an irreversible, fixed-length string called 'hash'. But if the same secret is used to hash the same data again then the same hashed value is returned.
- `Encryption` : The process of scrambling the data into an unreadable format using algorithmic key. The goal is to keep the data private. It is a reversible process, anyone with correct key can decrypt the data into its original form. Eg : Securely sending data like payment details or message over the internet
- Authentication : Knowing the identity of the user (methods of identification can be different : Google Login, Phone Number or email-password etc)
- Authorization : What are the actions that the user is allowed to do
  TODO :

- loginDTO, forgotPasswordDTO, resetPasswordDTO
