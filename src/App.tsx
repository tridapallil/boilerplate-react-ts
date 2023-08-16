import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { AuthProvider } from 'react-auth-kit'
import { Header } from './components/Header'

function App () {
  return (
    <AuthProvider
      authType='cookie'
      authName='_auth'
      cookieSecure={false}
    >
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
