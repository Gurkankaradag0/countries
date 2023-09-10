import './styles/globals.css'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.jsx'
import Store from './context/StoreContext.jsx'

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <Store>
            <App />
        </Store>
    </ApolloProvider>
)
