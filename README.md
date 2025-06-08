# Record Chain

Record Chain is a backend Node.js-based REST API application that simulates a blockchain with proof-of-work verification. The API allows creating blocks with data (in this case, music albums), listing all blocks in the chain, and retrieving a specific block by its ID.

The application is built with test-driven development (TDD), and follows the MVC design pattern to ensure a clear and scalable architecture.

The purpose is to provide a basic blockchain solution that can be used as a template or starting point for further development of blockchain-related projects.

### 📋 Features

- List all blocks  
- Create new blocks in the chain as complex objects  
- Retrieve a specific block by ID  
- Proof of Work validation
- Test-driven development using [Vitest](https://vitest.dev)  
- Data is stored in a JSON file and remains available after the server restarts  
- Error and event logging to an external log file with centralized logging  

### 🧱 Built With

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Vitest](https://vitest.dev/)
- [Crypto (Node.js)](https://nodejs.org/api/crypto.html) – for hashing and proof-of-work
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  

### 🧪 Development Environment

- [Postman](https://www.postman.com/)  
- [Nodemon](https://www.npmjs.com/package/nodemon)  
- [Dotenv](https://www.npmjs.com/package/dotenv) 

### 💾 Installation

Dependencies:

```bash
npm install dotenv express@4.18.2
npm install -D nodemon vitest@3.14 json-server@0.17.4
````

### ⚙️ Run

```bash
npm run dev
````


Tests (vitest):

```bash
npm run test
````


