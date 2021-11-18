import './App.css';

import Layout from './layout/layout';
import Header from './Screens/Header.jsx';
import Programs from './Screens/Programs.jsx';
import About from './Screens/About';
import Opinions from './Screens/Opinions';
import Footer from './Screens/Footer';

function App() {
  return (
  <Layout>
    <Header /> 
    <About />
    <Programs />  
    <Opinions />
    <Footer />  
  </Layout>
  );
}

export default App;
