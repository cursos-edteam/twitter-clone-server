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
    newUser: (_, { input }) => {
      console.log('------------------------------------');
      console.log('addUser');
      console.log(input);
      console.log('------------------------------------');
      return input;
    }
  }
};

module.exports = resolver;