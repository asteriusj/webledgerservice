# webledgerservice
Implementation of The Web Ledger Protocol 1.0 
A format and protocol for decentralized ledgers on the Web 
https://w3c.github.io/web-ledger/

### Install serverless globally
npm install serverless -g

### Create a serverless function
serverless create --template aws-nodejs

### Deploy to cloud provider
serverless deploy --aws-profile default

### github
$ git add <folders and files>
$ git commit -m "Update messages"
$ git push https://github.com/asteriusj/webledgerservice
Username for 'https://github.com': asteriusj
Password for 'https://asteriusj@github.com': ******

# Implementation of The Web Ledger Protocol 1.0
 A format and protocol for decentralized ledgers on the Web
 https://w3c.github.io/web-ledger/

 Service	                Example URL	                         Description
 ledgerAgentCreateService	POST  /ledger-agents	             Create a ledger agent.
 ledgerAgentListService	    GET   /ledger-agents	             Get all ledger agents.
 ledgerAgentStatusService	GET   /ledger-agents/{agent}	     Get the current status of the ledger agent.
 ledgerEventService	        POST  /ledger-agents/{agent}/events	 Request the addition of an event to ledger.
 ledgerBlockService	        GET   /ledger-agents/{agent}/blocks	 Get a specific block from the ledger.
 ledgerQueryService	        GET   /ledger-agents/{agent}/query	 Query the current state of the ledger.



<!--// https://w3c.github.io/web-ledger/-->
<!--//-->
<!--// 3.2 Configuration Block-->
<!--// {-->
<!--//   "@context": "https://w3id.org/web-ledger/v1",-->
<!--//   "id": BLOCK_ID,-->
<!--//   "type": "LedgerConfigurationBlock",-->
<!--//   "ledgerConfig": {-->
<!--//     "id": LEDGER_ID,-->
<!--//     "type": "LedgerConfiguration",-->
<!--//     "name": "example",-->
<!--//     "description": "This is an example ledger.",-->
<!--//     "storageMechanism": STORAGE_DATA_STRUCTURE,-->
<!--//     "consensusAlgorithm": CONSENSUS_ALGORITHM,-->
<!--//   "previousBlock": {-->
<!--//     "hash": "urn:sha256:0000000000000000000000000000000000000000000000000000000000000000"-->
<!--//   },-->
<!--//   "signature": SIGNATURE_VALUE-->
<!--// }-->

<!--//  3.3 Storage Block-->
<!--// {-->
<!--//   "@context": ["https://w3id.org/web-ledger/v1", MARKET_VERTICAL_CONTEXT],-->
<!--//   "id": BLOCK_ID,-->
<!--//   "type": "LedgerStorageBlock",-->
<!--//   "setObject": [ OBJECTS ],-->
<!--//   "previousBlock": {-->
<!--//     "id": PREVIOUS_BLOCK_ID-->
<!--//     "hash": PREVIOUS_BLOCK_HASH-->
<!--//   },-->
<!--//   "signature": SIGNATURE_VALUE-->
<!--// }-->

<!--// HTTP API-->
<!--// Service	Example URL	Description-->
<!--// ledgerAgentCreateService	POST /ledger-agents	Create a ledger agent.-->
<!--// ledgerAgentListService	GET /ledger-agents	Get all ledger agents.-->
<!--// ledgerAgentStatusService	GET /ledger-agents/{agent}	Get the current status of the ledger agent.-->
<!--// ledgerEventService	POST /ledger-agents/{agent}/events	Request the addition of an event to ledger.-->
<!--// ledgerBlockService	GET /ledger-agents/{agent}/blocks	Get a specific block from the ledger.-->
<!--// ledgerQueryService	GET /ledger-agents/{agent}/query	Query the current state of the ledger.-->

<!--// EXAMPLE 8: Ledger creation request-->
<!--// POST /ledger-agents HTTP/1.1-->
<!--// Host: example.com-->
<!--// Content-Type: application/ld+json-->
<!--// Content-Length: 1062-->
<!--// Accept: application/ld+json, application/json, text/plain, */*-->
<!--// Accept-Encoding: gzip, deflate-->

<!--// {-->
<!--//   "@context": "https://w3id.org/web-ledger/v1",-->
<!--//   "id": "did:1628bf39-c8f9-453f-93d7-0fbdebb3dfef/blocks/1",-->
<!--//   "type": "LedgerConfigurationBlock",-->
<!--//   "ledgerConfig": {-->
<!--//     "id": "did:1628bf39-c8f9-453f-93d7-0fbdebb3dfef",-->
<!--//     "type": "LedgerConfiguration",-->
<!--//     "name": "example",-->
<!--//     "description": "An example ledger.",-->
<!--//     "storageMechanism": "SequentialList",-->
<!--//     "consensusAlgorithm": {-->
<!--//       "type": "ProofOfSignature2016",-->
<!--//       "approvedSigner": [-->
<!--//         "http://blue.example.com/keys/234",-->
<!--//         "http://red.example.com/keys/987",-->
<!--//       ],-->
<!--//       "minimumSignaturesRequired":1-->
<!--//     }-->
<!--//   },-->
<!--//   "previousBlock": {-->
<!--//     "hash": "urn:sha256:0000000000000000000000000000000000000000000000000000000000000000"-->
<!--//   },-->
<!--//   "signature": {-->
<!--//     "type": "RsaSignature2016",-->
<!--//     "created": "2016-10-14T18:35:33Z",-->
<!--//     "creator": "http://blue.example.com/keys/234",-->
<!--//     "signatureValue": "HvfvRQ57EO...J0Q=="-->
<!--//   }-->
<!--// }-->
<!--// EXAMPLE 9: Successful ledger creation response-->
<!--// HTTP/1.1 201 Created-->
<!--// Location: http://ledger.example.com/ledger-agents/example-->
<!--// Cache-Control: no-cache, no-store, must-revalidate-->
<!--// Pragma: no-cache-->
<!--// Expires: 0-->
<!--// Date: Fri, 14 Oct 2016 18:35:33 GMT-->
<!--// Connection: keep-alive-->
<!--// Transfer-Encoding: chunked-->

<!--// EXAMPLE 14-->
<!--// POST /ledger-agents/example/events HTTP/1.1-->
<!--// Host: example.com-->
<!--// Connection: keep-alive-->
<!--// Content-Length: 1054-->
<!--// Content-Type: application/json;charset=UTF-8-->
<!--// Accept: application/ld+json, application/json, text/plain, */*-->
<!--// Accept-Encoding: gzip, deflate-->
<!--// Accept-Language: en-US,en;q=0.8-->

<!--// {-->
<!--//   "@context": ["https://w3id.org/web-ledger/v1", "https://w3id.org/fema/v1"],-->
<!--//   "type": "LedgerStorageEvent",-->
<!--//   "setObject": [{-->
<!--//     "id": "https://fema.gov/credentials/9754457",-->
<!--//     "type": ["Credential", "EmergencyResponderCredential"],-->
<!--//     "claim": {-->
<!--//       "id": "did:bc380e48-a6d9-4602-ab20-1beb403d4bcc",-->
<!--//       "emsLicense": {-->
<!--//         "id": "ems:FF-12-01655",-->
<!--//         "status": "valid"-->
<!--//       }-->
<!--//     }-->
<!--//   }],-->
<!--//   "signature": {-->
<!--//     "type": "RsaSignature2016",-->
<!--//     "created": "2016-10-14T19:47:15Z",-->
<!--//     "creator": "https://example.com/keys/fema-key-1",-->
<!--//     "signatureValue": "JoS27wqaTX...s0mpBFMgXIMw=="-->
<!--//   }-->
<!--// }-->
<!--// If the storage attempt is successful, a HTTP 200 response is expected:-->

<!--// EXAMPLE 15-->
<!--// HTTP/1.1 201 Created-->
<!--// Location: https://example.com/ledger-agents/example/events?id=d1328828-3d44-4e14-9c3a-263af54ed032-->
<!--// Cache-Control: no-cache, no-store, must-revalidate-->
<!--// Pragma: no-cache-->
<!--// Expires: 0-->
<!--// Date: Fri, 14 Oct 2016 19:47:16 GMT-->
<!--// Connection: keep-alive-->
<!--// Transfer-Encoding: chunked-->

<!--// An example retrieval of a ledger block is shown below:-->
<!--// EXAMPLE 16-->
<!--// GET /ledger-agents/example/blocks?id=did:de7adbe7-79f2-425a-9dfb-76a234782f30/blocks/2 HTTP/1.1-->
<!--// Host: example.com-->
<!--// Connection: keep-alive-->
<!--// Accept: application/ld+json, application/json, text/plain, */*-->
<!--// Accept-Encoding: gzip, deflate, sdch-->
<!--// Accept-Language: en-US,en;q=0.8-->
<!--// If the ledger block retrieval is successful, a HTTP 200 response is expected:-->

<!--// EXAMPLE 17-->
<!--// HTTP/1.1 200 OK-->
<!--// Cache-Control: no-cache, no-store, must-revalidate-->
<!--// Pragma: no-cache-->
<!--// Expires: 0-->
<!--// Access-Control-Allow-Origin: *-->
<!--// Vary: Accept, Accept-Encoding-->
<!--// Content-Type: application/ld+json; charset=utf-8-->
<!--// Etag: W/"41e-PJKXv/OxofX29WykKb3PZg"-->
<!--// Content-Encoding: gzip-->
<!--// Date: Fri, 14 Oct 2016 20:20:44 GMT-->
<!--// Connection: keep-alive-->
<!--// Transfer-Encoding: chunked-->

<!--// {-->
<!--//   "@context": ["https://w3id.org/web-ledger/v1", "https://w3id.org/fema/v1"],-->
<!--//   "id": "did:de7adbe7-79f2-425a-9dfb-76a234782f30/blocks/2",-->
<!--//   "type": "LedgerStorageBlock",-->
<!--//   "setObject": [{-->
<!--//     "id": "https://fema.gov/credentials/9754457",-->
<!--//     "type": ["Credential", "EmergencyResponderCredential"],-->
<!--//     "claim": {-->
<!--//       "id": "did:bc380e48-a6d9-4602-ab20-1beb403d4bcc",-->
<!--//       "emsLicense": {-->
<!--//         "id": "ems:FF-12-01655",-->
<!--//         "status": "valid"-->
<!--//       }-->
<!--//     }-->
<!--//   }],-->
<!--//   "previousBlock": {-->
<!--//     "id": "did:de7adbe7-79f2-425a-9dfb-76a234782f30/blocks/1",-->
<!--//     "hash": "urn:sha256:7eb0603c9a3982284c7db09b1eb40bc85a1177bdc594b027fba0e746b79db15b"-->
<!--//   },-->
<!--//   "signature": {-->
<!--//     "type": "RsaSignature2016",-->
<!--//     "created": "2016-10-14T19:47:15Z",-->
<!--//     "creator": "http://example.com/keys/789",-->
<!--//     "signatureValue": "JoS27wqa...BFMgXIMw=="-->
<!--//   }-->
<!--// }-->