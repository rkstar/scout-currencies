import ApolloClient from 'apollo-boost';
import resolvers from './resolvers';

export default new ApolloClient({
  clientState: {
    resolvers,
  },
});
