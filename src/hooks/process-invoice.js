// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { data } = context;

    // Throw an error if we didn't get a text
    if (!data.amount) {
      throw new Error('An invoice must have amount!');
    } else if (!data.date) {
      throw new Error('An invoice must have date!');
    }

    // The authenticated user
    const user = context.params.user;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      // Set the user id
      userId: user.id,
      // Add the current date
      createdAt: new Date().getTime()
    };
    return context;
  };
};
