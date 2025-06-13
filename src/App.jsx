import { BrowserRouter, Routes, Route } from 'react-router'
import './style.scss'
import { ROUTES } from '@constants/routes'
import { AppProvider } from '@contexts/app/index'
import { AppLayout } from '@layouts/app'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTES.HOME} element={<AppLayout/>}>
            <Route index element={"coucou"}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
