import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './App.css'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { NotFound } from './pages/NotFound'
import { Landing } from './pages/landing'
function App() { 
  

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
      <Route element={<Landing/>} path='/'></Route>
        <Route element={<Home/>} path='/Home'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<SignUp/>} path='/signUp'></Route>
        <Route element={<NotFound/>} path='*'></Route>
      </Routes>
    </Router>
     
    </div>
  )
}

export default App
