
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer';
import Loader from './components/Loader';

import Alert from './components/Alert';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState({isOn: false, type: '', msg: ''});

  useEffect(() => {
    const timeout = setTimeout(()=> {
      setIsLoading(false);
    }, 2000);
  
    return () => {
      clearTimeout(timeout);
    }
  }, [])
  

  return (
    <Router >
    <div className="App"> {
      isLoading ? <Loader/> :

      <>{
        alert.isOn? <Alert alert={alert} setAlert={setAlert}/> : ''
      }
        <Navbar/>         
        <AnimatedRoutes setAlert={setAlert}/>        
        <Social/>
        <Footer/>
      </>
    }
    </div>
    </Router>
  );
}

export default App;
