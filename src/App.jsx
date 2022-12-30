import './App.css';
import About from './page/About'
import Contact from './page/Contact'
import Home from './page/Home'
import Service from './page/Service'
import Admin from './page/Admin'
import Nest from './page/Nest'
import One from './page/Nest/One'
import Two from './page/Nest/Two'
import Three from './page/Nest/Three'
import Error from './page/Error'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact/:id' element={ <Contact/> } />
        <Route path='/service' element={ <Service/> } />
        <Route path='/admin' element={ <Admin/> } />
        <Route path='/nest' element={ <Nest/> }>
          <Route index element={ <One/> } />
          <Route path='two' element={ <Two/> } />
          <Route path='three' element={ <Three/> } />
        </Route>
        <Route path='*' element={ <Error/> }/>
      </Routes>
    </Router>
  );
}

export default App;
