import {Routes, Route} from 'react-router-dom'
import { Header } from './containers/header'
import { HomePage } from './pages/home-page';
import { SignInPage } from './pages/sign-in-page';
import { SignUpPage } from './pages/sign-up-page';

function App() {
    return (
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<HomePage/>}/>
            <Route path='login' element={<SignInPage/>}/>
            <Route path='register' element={<SignUpPage/>}/>
          </Route>
        </Routes>
    );
}

export default App;
