import { BrowserRouter, Routes, Route } from 'react-router'
import './style.scss'
import { ROUTES } from '@constants/routes'
import { AppProvider } from '@contexts/app/index'
import { AppLayout } from '@layouts/app'
import { HomePage } from '@pages/home'
import { DetailPage } from '@pages/detail'
import { ToastContainer } from 'react-toastify'
import { NotFound } from '@pages/404'

function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>

            <Route path={ROUTES.ROOT} element={<AppLayout/>}>
              <Route path={ROUTES.HOME} element={<HomePage/>}/>
              <Route path={ROUTES.DETAIL} element={<DetailPage/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

          </Routes>
        </BrowserRouter>
      </AppProvider>
      <ToastContainer autoClose={1500} position='bottom-left' limit={2} />
    
    </>
  )
}

export default App
