import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import StudentScreen from './screens/StudentScreen';
import ManageScreen from './screens/ManageScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomeScreen/>}/>
          <Route path='/students' element={<StudentScreen/>}/>
          <Route path='/manage' element={<ManageScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
