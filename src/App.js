import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="*" element={<Navigate to="/" replace></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
