
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MyInfiniteScroll from './components/MyInfiniteScroll';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

const App = () => {

  const API_KEY = "39f19c7a648645c199770ec390893ffc"
  // API_KEY = "39f19c7a648645c199770ec390893ffc";

const [progress, setprogress] = useState(0)
  
  const setPROGRESS = (x) =>{
    setprogress(x);
  }

    return (
      <div>
        <LoadingBar color='#f11946' progress={progress}/>
        
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<MyInfiniteScroll SETProgress={setPROGRESS} />}/>
            <Route path="/business" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="business"/>}/>
            <Route path="/entertainment" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="entertainment"/>}/>
            <Route path="/general" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="general"/>}/>
            <Route path="/health" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="health"/>}/>
            <Route path="/science" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="science"/>}/>
            <Route path="/sports" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY} category="sports" />}/>
            <Route path="/technology" element={<News SETProgress={setPROGRESS} country="in" ApiKey={API_KEY}  category="technology"/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    ) 
  }

export default App;

