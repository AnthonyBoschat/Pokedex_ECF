import { BrowserRouter, Routes, Route } from 'react-router'
import './style.scss'
import { ROUTES } from '@constants/routes'
import { AppProvider } from '@contexts/app/index'
import { AppLayout } from '@layouts/app'
import { HomePage } from '@pages/home'

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTES.ROOT} element={<AppLayout/>}>
            <Route path={ROUTES.HOME} element={<HomePage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
