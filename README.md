I am building an immutable transaction logging function (i.e.blockvhain) using [W3C Web Ledger Protocol](https://lnkd.in/eN5hT6P) 
for a multi-source ["Semantic Data Master (SDM) - Next Gen MDM"](https://lnkd.in/eUYHyyd) project. 

Who would like to work on this with me as an Open Source project?


# [webledgerservice](https://github.com/asteriusj/webledgerservice)

An Implementation of The Web Ledger Protocol 1.0

A format and protocol for decentralized ledgers on the Web 
[https://w3c.github.io/web-ledger/](https://w3c.github.io/web-ledger/)

This is a W3C Community Group Draft Report

This specification was published by the [W3C Blockchain Community Group](http://www.w3.org/community/blockchain/) on 01 March 2018.

The [Source code](https://github.com/w3c/web-ledger/tree/master/) for the specification can be found on Github.

## Objective

The objective of the webledgerservice project is to build an implemetatyion of the Ledger Agent HTTP API endpoints as defined by the specification.

Such an implemetation can be used as a simple 'standardized' example of open source blockchain technology components.

The near term motivation is to use the components as part of a master data management system interagation event logging function. 

The function will also incorporate data source provenence information and the log will provide a tracaable and immutable record of system intergation activity.



#
# Workspace preperation

### Install serverless globally
npm install serverless -g

### Create a serverless function
serverless create --template aws-nodejs

### Test stack locally
serverless invoke local -f hello --data '{"key":"bar"}' --log

### Setup cloud credentials
https://serverless.com/framework/docs/providers/aws/guide/credentials/
export AWS_ACCESS_KEY_ID=<your-key-here>
export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>

### AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are now available for serverless to use
serverless deploy

### github
$ git add <folders and files>
$ git commit -m "Update messages"
$ git push https://github.com/asteriusj/webledgerservice
Username for 'https://github.com': asteriusj
Password for 'https://asteriusj@github.com': ******



# Project Description

## Implementation of The Web Ledger Protocol 1.0
 A format and protocol for decentralized ledgers on the Web
 [https://w3c.github.io/web-ledger/](https://w3c.github.io/web-ledger/)


## Service listing

| Service                  	| Example URL                        	| Description                                 	|
|--------------------------	|------------------------------------	|---------------------------------------------	|
| ledgerAgentCreateService 	| POST /ledger-agents                	| Create a ledger agent.                      	|
| ledgerAgentListService   	| GET /ledger-agents                 	| Get all ledger agents.                      	|
| ledgerAgentStatusService 	| GET /ledger-agents/{agent}         	| Get the current status of the ledger agent. 	|
| ledgerEventService       	| POST /ledger-agents/{agent}/events 	| Request the addition of an event to ledger. 	|
| ledgerBlockService       	| GET /ledger-agents/{agent}/blocks  	| Get a specific block from the ledger.       	|
| ledgerQueryService       	| GET /ledger-agents/{agent}/query   	| Query the current state of the ledger.      	|


##Wiki Contents

[Serverless API](https://github.com/asteriusj/webledgerservice/wiki/Serverless-API)

[W3C Terminology](https://github.com/asteriusj/webledgerservice/wiki/W3C-Terminology)

[W3C Data Model](https://github.com/asteriusj/webledgerservice/wiki/W3C-Data-Model)

[W3C Ledger-Agent-HTTP-API](https://github.com/asteriusj/webledgerservice/wiki/W3C-Ledger-Agent-HTTP-API)
