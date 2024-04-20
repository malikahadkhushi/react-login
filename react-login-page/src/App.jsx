import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login/Page';
import Home from './Component/Home/Page';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
