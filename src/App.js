
import './App.css';
import { Fragment } from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Nash_pro from './Components/Nash_pro';
import Informatsia from './Components/Informatsia';
import Comp_users from './Components/Comp_users';
import Novosti from './Components/Novosti';
import Footer from './Components/Footer';
function App() {
  return (
<Fragment>
  <Nav/>
  <Header/>
  <Aside/>
  <Nash_pro/>
  <Informatsia/>
  <Comp_users/>
  <Novosti/>
  <Footer/>
</Fragment>
  );
}

export default App;
