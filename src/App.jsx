import Login from './views/Login'
import Signin from './views/Signin'
import Dashboard from './views/Dashboard'
import Products from './views/Products/Products'
import Tools from './views/Tools/Tools'
import User from './views/User/User'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/login" element={< Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='products' element={<Products />} />
            <Route path='tools' element={<Tools />} />
            <Route path='user' element={<User />} />
          </Route>
        </Routes>
     
    </BrowserRouter>
  )
}

