---
source: https://albertprofe.dev/reactjs/rjslab5-4.html
title: "Lab#RE05-4: chat: test ws AWS"
section: "React JS: Laboratories"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "lab", "Lab#RE05"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/rjslab5-4.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# Lab#RE05-4: chat: test ws AWS

📘 **React JS Lab#RE05-4: chat & websockets**

In this lab, we will be using:

- the `react-router-dom`, which is a package with bindings for using React Router in web applications:
- `websockets`, provided by **ReactJS** framework and:
  - useState
  - useEffect
  - useContext
- `AWS`, **Amanzon Web Services**, architecture as a server-side:
  - Lambda
  - DynamoDB
  - API Gateway
  - Cloudwatch

Reference:

- [codesanbox myChat](https://codesandbox.io/s/mychat-1-ktru2t?file=/src/chat/SocketProvider.js:1278-1317)
- [myChat docs, backend & frontend](https://sites.google.com/view/devopscifo/labs/1-chat-app)

[![General architecture](https://albertprofe.dev/images/reactjs/AWS-Lambda-and-DynamoDB-Architecture.png)](https://albertprofe.dev/images/reactjs/AWS-Lambda-and-DynamoDB-Architecture.png "General architecture")

General architecture

## 1 Backend: websockets

JSON websocket example scheme, `login`:

```js
{

   "action": "login",
   "chatId": "DEVOPS",
   "userId": "albert"
 
}
```

JSON websocket example scheme, `conversation`:

```js
{

   "action": "conversation",
   "chatId": "DEVOPS",
   "userId": "ALBET#1666862612315",
   "connectionid": "aqEgvdwRFiACEYw=",
   "requesttime": "27/Oct/2022:09:23:31 +0000",
   "sourceip": "83.247.137.2",
   "text": "ASDFA",
   "timestampEpoch": 1666862612315

}
```

### 1.1 Test backend

- Web test websocket: [Websocket King](https://websocketking.com/)

[![Test app with websocketking](https://albertprofe.dev/images/reactjs/lab-re-5-3.png)](https://albertprofe.dev/images/reactjs/lab-re-5-3.png "Test app with websocketking")

Test app with websocketking

`Websocket King` is a web tool used to test the functionality and performance of WebSocket connections.

With `Websocket King`, you can **simulate** `WebSocket` communication by connecting to the `WebSocket` `endpoint` of your AWS backend.

It provides an intuitive interface to send and receive `WebSocket` messages, monitor the connection status, and analyze the received data. By using `Websocket King` to test your AWS backend, you can ensure that the `WebSocket` communication is working correctly, validate the message handling, and assess the overall performance and reliability of your backend implementation.

[![Test app with websocketking: connecting with the endpoint proporcionated by API gateway AWS](https://albertprofe.dev/images/reactjs/lab-re-5-11.png)](https://albertprofe.dev/images/reactjs/lab-re-5-11.png "Test app with websocketking: connecting with the endpoint proporcionated by API gateway AWS")

Test app with websocketking: connecting with the endpoint proporcionated by API gateway AWS

[![Test app with websocketking: connected with the endpoint proporcionated by API gateway AWS](https://albertprofe.dev/images/reactjs/lab-re-5-12.png)](https://albertprofe.dev/images/reactjs/lab-re-5-12.png "Test app with websocketking: connected with the endpoint proporcionated by API gateway AWS")

Test app with websocketking: connected with the endpoint proporcionated by API gateway AWS

[![Test app with websocketking: sending a websocket with a mistake, sever error](https://albertprofe.dev/images/reactjs/lab-re-5-13.png)](https://albertprofe.dev/images/reactjs/lab-re-5-13.png "Test app with websocketking: sending a websocket with a mistake, sever error")

Test app with websocketking: **sending a websocket with a mistake**, sever error

[![Test app with websocketking: sending a websocket, logged properly](https://albertprofe.dev/images/reactjs/lab-re-5-14.png)](https://albertprofe.dev/images/reactjs/lab-re-5-14.png "Test app with websocketking: sending a websocket, logged properly")

Test app with websocketking: **sending a websocket**, logged properly

#### 1.1.1 Example conversation

[![Test app with websocketking: sending a websocket, conversation example](https://albertprofe.dev/images/reactjs/lab-re-5-15.png)](https://albertprofe.dev/images/reactjs/lab-re-5-15.png "Test app with websocketking: sending a websocket, conversation example")

Test app with websocketking: **sending a websocket**, conversation example

##### 1.1.1.1 Albert

```js
11:14 21.34
{
  "action": "conversation",
  "time": "09/Jun/2023:09:14:19 +0000",
  "chatId": "friday",
  "userId": "fabrizio",
  "text": "yessss"
}
11:04 54.53
{
  "action": "conversation",
  "time": "09/Jun/2023:09:04:54 +0000",
  "chatId": "friday",
  "userId": "victor",
  "text": "yeaahhhhhh"
}
11:03 36.06
"sent at 09/Jun/2023:09:03:35 +0000"
11:03 35.22
{
  "action": "conversation",
  "chatId": "friday",
  "userId": "albert",
  "text": "hola, it is friday!!!!"
}
11:02 47.08
"sent at 09/Jun/2023:09:02:45 +0000"
11:02 45.43
{
  "action": "conversation",
  "chatId": "frideay",
  "userId": "albert",
  "text": "hola, it is friday!!!!"
}
10:56 20.53
{
  "action": "logged in",
  "connectionId": "GPk-Qe7cliACGeA=",
  "time": "09/Jun/2023:08:56:19 +0000"
}
10:56 19.61
{
  "action": "login",
  "chatId": "friday",
  "userId": "albert"
}
10:55 42.50
{
  "message": "Internal server error",
  "connectionId": "GPk-Qe7cliACGeA=",
  "requestId": "GPlaNF6dFiAFqjg="
}
10:55 41.76
{
   "action": "login",
   "chatId": "friday",
   "userId": "albert",
 
}
10:53 37.50
"Hello from CIFO Chat! Be careful wiht your ROUTE, it is not right"
10:53 37.07
{
"adsfda": agfafds
}
10:52 42.95
Connected to wss://xxxxxx.execute-api.eu-central-1.amazonaws.com/test
10:52 42.70
Connecting to wss://xxxxxx.execute-api.eu-central-1.amazonaws.com/test
```

##### 1.1.1.2 Victor

```js
11:24 21.27
Disconnected from wss://xxxxx.execute-api.eu-central-1.amazonaws.com/test
11:14 21.32
{
  "action": "conversation",
  "time": "09/Jun/2023:09:14:19 +0000",
  "chatId": "friday",
  "userId": "fabrizio",
  "text": "yessss"
}
11:04 54.57
"sent at 09/Jun/2023:09:04:54 +0000"
11:04 53.93
{
  "action": "conversation",
  "chatId": "friday",
  "userId": "victor",
  "text": "yeaahhhhhh"
}
11:03 36.02
{
  "action": "conversation",
  "time": "09/Jun/2023:09:03:35 +0000",
  "chatId": "friday",
  "userId": "albert",
  "text": "hola, it is friday!!!!"
}
11:00 10.76
{
  "action": "logged in",
  "connectionId": "GPmCofVfFiACFlA=",
  "time": "09/Jun/2023:09:00:10 +0000"
}
11:00 10.65
{
  "action": "login",
  "chatId": "friday",
  "userId": "victor"
}
11:00 02.29
Connected to wss://xxxxxx.execute-api.eu-central-1.amazonaws.com/test
11:00 00.27
Connecting to wss://xxxxxxx.execute-api.eu-central-1.amazonaws.com/test
```

##### 1.1.1.3 Fabrizio

```js
11:24 21.34
Disconnected from wss://xxxxx.execute-api.eu-central-1.amazonaws.com/test
11:14 21.36
"sent at 09/Jun/2023:09:14:19 +0000"
11:14 19.25
{
  "action": "conversation",
  "chatId": "friday",
  "userId": "fabrizio",
  "text": "yessss"
}
11:04 54.55
{
  "action": "conversation",
  "time": "09/Jun/2023:09:04:54 +0000",
  "chatId": "friday",
  "userId": "victor",
  "text": "yeaahhhhhh"
}
11:03 36.04
{
  "action": "conversation",
  "time": "09/Jun/2023:09:03:35 +0000",
  "chatId": "friday",
  "userId": "albert",
  "text": "hola, it is friday!!!!"
}
10:58 44.85
{
  "action": "logged in",
  "connectionId": "GPl0Jc34liACElg=",
  "time": "09/Jun/2023:08:58:44 +0000"
}
10:58 44.45
{
  "action": "login",
  "chatId": "friday",
  "userId": "fabrizio"
}
10:58 29.23
Connected to wss://xxxxxx.execute-api.eu-central-1.amazonaws.com/test
10:58 27.52
Connecting to wss://xxxxxx.execute-api.eu-central-1.amazonaws.com/test
```

#### 1.1.2 Reconnect

[![Test app with websocketking: reconnect](https://albertprofe.dev/images/reactjs/lab-re-5-16.png)](https://albertprofe.dev/images/reactjs/lab-re-5-16.png "Test app with websocketking: reconnect")

Test app with websocketking: reconnect

Back to top
