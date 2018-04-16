// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    if(!data.amount) {
      throw new Error('A invoice must have a amount');
    } else if(!data.description) {
      throw new Error('A invoice must have a description');
    } else if(!data.date) {
      throw new Error('A invoice must have a date');
    }
    // The authenticated user
    const user = context.params.user;
    const description = context.data.description;
    const amount = context.data.amount;
    const date = context.data.date;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      description,
      amount,
      date,
      // Set the user id
      userId: user.id,
      // Add the current date
      createdAt: new Date().getTime()
    };

    return context;
  };
};
