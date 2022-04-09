import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import TestComponent from './TestComponent';
function App() {
  const queryClient = new QueryClient();
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        {process.env.REACT_APP_NODE_ENV === 'development' ? (
          <>
          <TestComponent />
          <ReactQueryDevtools initialIsOpen={false} position='top-right' />
          </>
        ) : null}
      </QueryClientProvider>
    </div>
  );
}

export default App;
