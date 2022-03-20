import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled from 'styled-components';
import AutosuggestionSelect from './components/AutosuggestionSelect';
import GlobalCSS from './global.css';

const Container = styled.div`
	padding: 5rem 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const App = () => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalCSS />
				<Container>
					<AutosuggestionSelect />
				</Container>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
};

export default App;
