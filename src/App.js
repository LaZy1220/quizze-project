import {Header} from './components/Header/Header'
import {Routes,Route} from 'react-router-dom'
import { About } from './components/About/About';
import { Authorization } from './components/Authorization/Authorization';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/authorization' element={<Authorization/>}/>
        </Routes>
    </div>
  );
}

export default App;
