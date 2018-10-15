# Boilerplate for Watson assistant chatbot
 
Boilerplate contains a light weight client and server. No setup required, just make changes in env file and your chat bot is up and running.


## Prequisities

- Create a Bluemix account
- Create watson assistant workflow on bluemix

## Setup

- Provision an instance of Watson Assistant on bluemix
- Create a new conversation workspace
- Install client and server dependencies
- Update the env file with your workspace ID and watson assistance api credentials.

```shell
WATSON_ASSISTANT_USERNAME=<WATSON_ASSISTANT_USERNAME>
WATSON_ASSISTANT_PASSWORD=<WATSON_ASSISTANT_PASSWORD>
WATSON_ASSISTANT_WORKSPACE_ID=<WATSON_ASSISTANT_WORKSPACE_ID>
```

### Server

Install server dependencies

```shell
npm install
```

### Client

Install client dependencies

```shell
cd client
npm install
```

## Build / Run (Development)
- Start the server `npm start`
- Start the client `cd client && npm start`
- Navigate to http://localhost:3000

## Build / Run (Production)

```shell
cd client
npm run build
cd ..
npm start
```
Navigate to [http://localhost:3000](http://localhost:3000)
