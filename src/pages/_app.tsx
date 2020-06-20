import { ApolloProvider } from '@apollo/client';
import { createClient } from '../graphql/client';

const App = ({ Component, pageProps }) => {
  const client = createClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
