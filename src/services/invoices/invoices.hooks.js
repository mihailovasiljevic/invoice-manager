const { authenticate } = require('@feathersjs/authentication').hooks;

const processInvoice = require('../../hooks/process-invoice');

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processInvoice()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [populateUser()],
    create: [populateUser()],
    update: [populateUser()],
    patch: [populateUser()],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
