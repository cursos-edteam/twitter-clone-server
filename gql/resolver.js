const { User } = require('../controllers');

const resolver = {
  Query: {
    // Usuarios
    getUser: () => {
      console.log('-----------------asdasd-------------------');
      console.log('Retornando usuarios');
      console.log('------------------------------------');
      return null;
    }
  },
  Mutation: {
    // Usuarios
    newUser: (_, { input }) => User.newUser(input),
    authentication: (_, { input }) => User.authentication(input)
  }
};

module.exports = resolver;