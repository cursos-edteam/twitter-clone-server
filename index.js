require('dotenv').config();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/typeDefs');
const resolvers = require('./gql/resolver');

const serverApollo = new ApolloServer({ typeDefs, resolvers});

try {
  (async () => {
    mongoose.connect(process.env.MONGO_ATLAS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    });
    // Vamos a iniciar coneccion con nuestro server graphql
    const response = await serverApollo.listen();
    console.log('------------------------------------');
    console.log(`Servidor corriendo en ${response.url}`);
    console.log('------------------------------------');
  })();
} catch (error) {
  console.error(error.message);
}
