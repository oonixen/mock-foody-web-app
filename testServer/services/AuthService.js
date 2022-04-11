/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Auth Code Verify
* Проверка кода отправленного на телефон
*
* authCodeVerifyRequest AuthCodeVerifyRequest  (optional)
* returns AuthToken
* */
const authCodeVerify = ({ authCodeVerifyRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        authCodeVerifyRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Auth Refresh Token
* Обновление токена после невалидности основного
*
* authRefreshTokenRequest AuthRefreshTokenRequest  (optional)
* returns AuthToken
* */
const authRefreshToken = ({ authRefreshTokenRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        authRefreshTokenRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Auth Send Code
* Отправка кода подтверждения на номер телефона
*
* authSendCodeRequest AuthSendCodeRequest  (optional)
* returns AuthSendCodeResponse
* */
const authSendCode = ({ authSendCodeRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        authSendCodeRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Auth Social
* Авторизация через социальные сервисы. Для авторизации потребуется указать тип провайдера, например vk и прислать токен, который отдает тот или иной сервис
*
* authCodeVerifyRequest AuthCodeVerifyRequest  (optional)
* returns AuthToken
* */
const authSocial = ({ authCodeVerifyRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        authCodeVerifyRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  authCodeVerify,
  authRefreshToken,
  authSendCode,
  authSocial,
};
