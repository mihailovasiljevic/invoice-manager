const users = require('./users/users.service.js');
const invoices = require('./invoices/invoices.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(invoices);
};
