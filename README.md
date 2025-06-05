# Record Chain

Record Chain is a backend Node.js-based REST API application that simulates a blockchain. The API allows creating blocks with data, listing all blocks in the chain, and retrieving a specific block by its ID.

The application is built with a focus on proof-of-work verification, test-driven development (TDD), and follows the MVC design pattern to ensure a clear and scalable architecture.

The purpose is to provide a basic blockchain solution that can be used as a template or starting point for further development of blockchain-related projects.

### 📋 Features

- List all blocks  
- Create new blocks in the chain as complex objects  
- Retrieve a specific block by ID  
- Proof of Work validation for each new block  
- Data is stored in a JSON file and remains available after the server restarts  
- Test-driven development using [Vitest](https://vitest.dev)  
- Error and event logging to an external log file with centralized logging  

### 📦 Tech Stack

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Vitest](https://vitest.dev/)  
- [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)  

### 🧪 Development Environment

- [Nodemon](https://github.com/remy/nodemon)  
- [Dotenv](https://github.com/motdotla/dotenv)  
- [Postman](https://www.postman.com/)  
