// import logo from './logo.svg';
import './App.css';
import Navbar2 from './figma2/navbar2/navbar2';
import Global from './figma2/global/global';
import Branding from './figma2/Branding/branding';
import Design from './figma2/design/design';
import Development from './figma2/Development/development';
import Brains from './figma2/brains/brains';
import Services from './figma2/services/services';
import Form from './figma2/form/form';
import Footer from './figma2/footer/footer';

function App() {
  return (
    <div>
      <Navbar2 />
      <Global />
      <Branding />
      <Design />
      <Development />
      <Brains />
      <Services />
      <Form />
      <Footer />
      </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
