import './App.css';

import Layout from './layout/layout';
import Header from './Screens/Header.jsx';
import Programs from './Screens/Programs.jsx';
import About from './Screens/About';
import Opinions from './Screens/Opinions';

function App() {
  return (
  <Layout>
    <Header /> 
    <About />
    <Programs />  
    <Opinions />  
  </Layout>
  );
}

export default App;
