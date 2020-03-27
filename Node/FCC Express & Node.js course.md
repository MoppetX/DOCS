Concurrency is when two or more "processes" are executing simultaneously over the same period, regardless of whether their individual constituent operations happen *in parallel* (at the same instant on separate processors or cores) or not. You can think of concurrency then as "process"-level (or task-level) parallelism, as opposed to operation-level parallelism (separate-processor threads).

???

"Process 1" and "Process 2" run concurrently (task-level parallel), but their individual events run sequentially on the event loop queue.

By the way, notice how `response 6` and `response 5` came back out of expected order?

The single-threaded event loop is one expression of concurrency (there are certainly others, which we'll come back to later).



---------------

### FCC Express & Node.js course

#### install express:

`$ npm install express-generator -g`

`$ express --view=pug myapp`
will generate an Express app named *myapp*. view engine/html templating engine is *pug*. 

### FCC How to Build a Restful API using Node, Express, and Mongo



**REST: Representational State Transfer**
can be used over nearly any protocol, it usually takes advantage of HTTP when used for Web APIs. This means that developers do not need to install libraries or additional software in order to take advantage of a REST API design.



**CRUD**: create, read, update, delete

maybe use in my app too (run: `npm start`):

```json
"scripts": {
  "start": "node src/index.js"
}
```

**Express**: an npm package, basically a lightweight web server; took all the nodejs http classes and added a layer on top, which allows you to communicate via restful endpoints

`$ npm install express`

```js
let express = require('express');
let app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;
app.list(PORT, () => console.infi(`Server has started on ${PORT}`))
```

#### Route

API endpoints are ususally set up with HTTP verbs

#### MongoDB

`$ npm i mongoose`

```js
const mongoose = require('mongoose');

const server = '';
const database = 'rest-api-workshop';
const user = 'theoutlander';
const password = 'pssword';

mongoose.connect(`mongodb://${user}:${password}@$ {server}/${database});

let CustomerSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		require: true,
		unique: true
	},
	
})
```



