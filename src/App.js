
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import SignUp from './SignUp';
import Register from './Register';

function App() {
  return (
    <div className="app"> 
    <Router>
      <Header/>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
