---
source: https://albertprofe.dev/reactjs/rjslab5-3.html
title: "Lab#RE05-3: chat & AWS"
section: "React JS: Laboratories"
published: "Tuesday, June 1, 2021"
modified: "Friday, November 1, 2024"
categories: ["reactjs", "lab", "Lab#RE05"]
captured: 2026-10-30
---

> Source: <https://albertprofe.dev/reactjs/rjslab5-3.html>  
> Captured 2026-10-30 from albertprofe.dev (author: Albert Profe). Reference copy for the course team; not lesson content.

# Lab#RE05-3: chat & AWS

📘 **React JS Lab#RE05-3: chat & AWS**

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
- [Backend](https://sites.google.com/view/devopscifo/labs/1-chat-app/aws-chat-back)

[![General architecture](https://albertprofe.dev/images/reactjs/AWS-Lambda-and-DynamoDB-Architecture.png)](https://albertprofe.dev/images/reactjs/AWS-Lambda-and-DynamoDB-Architecture.png "General architecture")

General architecture

## 1 Backend: AWS

### 1.1 Free-tier

The [AWS Free Tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) is a program offered by Amazon Web Services (AWS) that provides users with access to a range of AWS services at no cost for a limited period.

- It includes various services like Amazon EC2, Amazon S3, Amazon RDS, and more.
- The Free Tier allows users to **explore and experiment** with these services, making it ideal for developers, startups, and small businesses.
- The duration and usage limits vary depending on the service, but **typically last for 12 months.**
- It’s a great opportunity to get hands-on experience with AWS and evaluate its capabilities without incurring any initial costs.

[![Be careful with the free-tier](https://albertprofe.dev/images/reactjs/aws-meme.jpg)](https://albertprofe.dev/images/reactjs/aws-meme.jpg "Be careful with the free-tier")

Be careful with the free-tier

[![AWS free-tier](https://albertprofe.dev/images/reactjs/lab-re-5-6.png)](https://albertprofe.dev/images/reactjs/lab-re-5-6.png "AWS free-tier")

AWS free-tier

[![AWS free-tier](https://albertprofe.dev/images/reactjs/lab-re-5-7.png)](https://albertprofe.dev/images/reactjs/lab-re-5-7.png "AWS free-tier")

AWS free-tier

[![AWS free-tier](https://albertprofe.dev/images/reactjs/lab-re-5-8.png)](https://albertprofe.dev/images/reactjs/lab-re-5-8.png "AWS free-tier")

AWS free-tier

## 2 AWS API Gateway

[![AWS API Gateway](https://albertprofe.dev/images/reactjs/lab-re-5-10.png)](https://albertprofe.dev/images/reactjs/lab-re-5-10.png "AWS API Gateway")

AWS API Gateway

Amazon API Gateway is a fully managed service by Amazon Web Services (AWS) that enables developers to create, publish, and manage APIs for their applications. It acts as a front door, allowing clients to securely access backend services, such as AWS Lambda functions or EC2 instances, through a consistent API interface. API Gateway provides features like authentication, authorization, request throttling, caching, and monitoring, which help enhance security, performance, and scalability. It also supports various API integration options and allows customization through API Gateway extensions. With API Gateway, developers can easily build and scale their APIs, making it a crucial component for building modern, serverless architectures on AWS.

[AWS API Gateway](https://sites.google.com/view/devopscifo/labs/1-chat-app/aws-chat-back/api-gateway-chat)

## 3 AWS Lambdas

AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and software-as-a-service (SaaS) applications and only pay for what you use.

Official documentation:

- [Run a Serverless](https://aws.amazon.com/getting-started/hands-on/run-serverless-code/) “Hello, World!” with AWS Lambda
- [Executing a Lambda](https://aws.amazon.com/es/getting-started/hands-on/run-serverless-code/) “Hello,

Be careful with the chosen version, with `NosdeJS` as a server:

[![Node version, 12 is deprecated, use 14](https://albertprofe.dev/images/reactjs/lab-re-5-9.png)](https://albertprofe.dev/images/reactjs/lab-re-5-9.png "Node version, 12 is deprecated, use 14")

Node version, 12 is deprecated, use 14

### 3.1 MyChat: lambdas

[Code Lambda Conversation](https://github.com/AlbertProfe/cifochat/blob/main/controller.js)

JSON websocket example scheme:

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

## 4 AWS DynamoDB

AWS DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.

[DynamoDB](https://sites.google.com/view/devopscifo/labs/1-chat-app/aws-chat-back/dynamodb)

## 5 AWS IAM Permissions & Billing Console

[IAM Permissions & Billing Console](https://sites.google.com/view/devopscifo/labs/1-chat-app/aws-chat-back#h.1b44t74yhmjf)

Back to top
