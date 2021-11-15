import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import AppRouter from './config/router/router';
import Barchart from './components/Barchart';
function App() {
  return (

    <>
    <AppRouter/>
    <hr/>
    <h1>Statistics Of Covid In United States</h1>
    <Barchart />
    
    </>
  );
}

export default App;
