/* eslint-disable */ 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VocaAddPage from './components/VocaAdd';
import HomePage from './pages/HomePage';


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path='/voca/add' element={<VocaAddPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
