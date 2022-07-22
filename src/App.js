import {Routes, Route} from 'react-router-dom'
import Header from './components/main-header/header.component'
import HomePage from './pages/home-page';
import SignIn from './components/authentification/sign-in.component';

function App() {
    return (
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<SignIn/>}/>
          </Route>
        </Routes>
    );
}

export default App;
