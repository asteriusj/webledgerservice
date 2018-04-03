'use strict';

module.exports.ledgerAgentCreateService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerAgentCreateService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerAgentListService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerAgentListService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerAgentStatusService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerAgentStatusService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerAppendService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerAppendService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerEventService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerEventService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerBlockService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerBlockService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};


module.exports.ledgerQueryService = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Funtion ledgerQueryService executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

};