import { BrowserRouter, Routes, Route } from 'react-router'
import './style.scss'
import { ROUTES } from '@Constants/routes'
import { AppProvider } from '@Contexts/app/index'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTES.HOME}>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
