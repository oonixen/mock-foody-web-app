/**
 * The UserController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UserService');
const createUserAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserAddress);
};

const getCurrentUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCurrentUser);
};

const getUserAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserAddress);
};

const getUserAddresses = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserAddresses);
};

const removeUserAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeUserAddress);
};

const updateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUser);
};

const updateUserAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserAddress);
};


module.exports = {
  createUserAddress,
  getCurrentUser,
  getUserAddress,
  getUserAddresses,
  removeUserAddress,
  updateUser,
  updateUserAddress,
};
