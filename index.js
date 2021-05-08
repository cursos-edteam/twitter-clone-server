const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolver');

const serverApollo = new ApolloServer({ typeDefs, resolvers});

try {
  (async () => {
    const response = await serverApollo.listen();
    console.log('------------------------------------');
    console.log(`Servidor corriendo en ${response.url}`);
    console.log('------------------------------------');
  })();
} catch (error) {
  console.error(error.message);
}