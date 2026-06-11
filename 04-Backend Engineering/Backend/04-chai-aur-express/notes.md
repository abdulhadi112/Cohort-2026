# Chai aur Express

- If building projects through tutorial always install the exact version being used for eg: `npm i express@4`
- Explain the block_1_basicServer()
- What does process.exit(1) does & mean
- what does app.use(express.json()) & aur kitni ways mein data Frontend se aa sakta hai
- What is serialization & de-serialization
  - Serialization : The process of converting a JSON/ JS Object into a string
  - Deserialization : The process of converting string into a JSON/JS Object
- `/register`, `/login` these are called API endpoints
- `res.json()` does 2 things :
  1. Sets the `Content-Type` to `application/json` (Make notes about different types of Content-Type)
  2. Serialize whatever object that is being sent in the response (for eg: `items : ['thali', 'biryani']`)
- Sometimes we use `_` in place of `req` function, reason : Joh cheez use mein nhi aa rhi hai usae hum `_` se replace kar dete hai
- `?` lagne k baad hi URL mein Query start hoti hai. For eg : `chaicode.com/cart?q=biryani&limit=5`, the part after '?' is called `'query parameter'`. We destructure the data from the url using `req.query`. The destructuring variables should be exactly same as mentioned in the url
- Route/Path parameters are dynamic URL segment used to capture specific values(like `/user/1`, `/user/2`). They are represented by a `:` followed by parameter name. For eg: `/user/:id`. Similarly we destructuring the route params data using `req.params`. The destructuring variables should be exactly same as mentioned in the url
- There are 4 primary ways in which we receive data :
  1. Request Body (req.body) :
     - Used to send large amount of data
     - Sent via POST, PUT or PATCH requests
     - Requires `express.json()` to parse the incoming data
  2. Route parameters (req.params) :
     - Used to identify specific, required resource
     - Built directly into the URL path structure
  3. Query parameters (req.query) :
     - Used for filtering, sorting, or paginating lists of data.
     - Starts after '?'
  4. Request Headers (req.headers) :
     - Used for metadata like authentication tokens, API keys, or content types.
     - Sent in the hidden header section of the HTTP request.
     - Retrieved using `req.get()` or lowercase keys on `req.headers`
- `URL-encoded` & `Form-Data` are specific formats used to structure data inside the request body
  1. URL-encoded (application/x-www-form-urlencoded): default format used by HTML forms when submitting plain text
     - It converts form inputs into a single text string of key-value pairs, formatted exactly like a query string (e.g., name=John+Doe&age=30).
     - Best used for: Simple text fields, login forms, and search bars.
     - Express can't read url-encoded data directly. We use built-in `express.urlencoded({extended :true})` middleware to parse it into req.body
  2. Form-Data (multipart/form-data) : used when a form needs to send binary files(images, PDFs etc) alongside regular text fields
     - Best used for : Uploading profile pictures, documents, videos, or a mix of text and files.
     - Express's built-in parser(.json() & .urlencoded()) cannot handle multipart data. We use 3rd party library like `multer` to populate req.body & req.file

- `app.listen(0, async () => {})` : Why this '0' instead of PORT
  - '0' is a signal. When we pass '0' we are telling the OS to assign available free port automatically
- `const PORT = process.env.PORT` : Jabh bhi hum host karte hai different platforms par like Railway, render etc toh we get environment variable of the machine that decides user ka application kis Port par chalna chahiye. In case of VPS hum apne choice ka port de sakte hai

```js
const menuResponse = await fetch(`${base}/menu`);
const menuData = await menuResponse.json();
```

- `fetch()` returns a response object, it contains statusCode, headers, body, url etc. The actual data that we want is inside `body` which is a stream & not usable directly
- `.json()` : Does 3 things internally
  1. Reads the body stream : The response body is a ReadableStream. 'json' consumes it (reads all the chunks)
  2. Converts the stream -> text : converts the readable stream into string
  3. Parses JSON(i.e string) -> JS Object : That how we get our data in `menuData`

### `.json()`

- When used in backend, it converts a JS Object/JSON into a text string
- When used in frontend, it converts a text string(i.e the response from fetch) into JS Object/JSON
- Serialization : JSON.stringify() takes a JavaScript object, array, or primitive value and converts it into a standardized JSON string. This process is known as Serialization
- Deserialization : JSON.parse() takes a well-formed JSON string and converts it back into a JavaScript object or value. This process is known as deserialization.
