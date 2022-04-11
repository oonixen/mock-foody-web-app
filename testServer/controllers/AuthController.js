/**
 * The AuthController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AuthService');
const authCodeVerify = async (request, response) => {
  await Controller.handleRequest(request, response, service.authCodeVerify);
};

const authRefreshToken = async (request, response) => {
  await Controller.handleRequest(request, response, service.authRefreshToken);
};

const authSendCode = async (request, response) => {
  await Controller.handleRequest(request, response, service.authSendCode);
};

const authSocial = async (request, response) => {
  await Controller.handleRequest(request, response, service.authSocial);
};


module.exports = {
  authCodeVerify,
  authRefreshToken,
  authSendCode,
  authSocial,
};
