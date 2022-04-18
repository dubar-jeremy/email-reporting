import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Authentication from './pages/authentication/Authentication';
function App() {
  const queryClient = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        {process.env.REACT_APP_NODE_ENV === 'development' ? (
          <>
            <Authentication />
            <ReactQueryDevtools initialIsOpen={false} position='top-right' />
          </>
        ) : null}
      </QueryClientProvider>
    </div>
  );
}

export default App;
