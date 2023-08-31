import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashborad';
import Commingsoon from './components/Commingsoon';

function App()
{
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home/:id' element={<Home/>}>
            <Route path='profile' element={<Dashboard/>}/>
            <Route path='posts' element={<Commingsoon/>}/>
            <Route path='gallery' element={<Commingsoon/>}/>
            <Route path='todo' element={<Commingsoon/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
