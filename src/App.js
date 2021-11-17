import logo from './logo.svg';
import './App.css';

import Layout from './Layout/layout';
import Header from './Components/Header.jsx';
import Programs from './Components/Programs.jsx';
import About from './Components/About';

function App() {
  return (
  <Layout>
    <Header /> 
    <About />
    <Programs />    
  </Layout>
  );
}

export default App;
