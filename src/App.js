import {Routes, Route} from 'react-router-dom'
import Header from './components/main-header/header.component'
import HomePage from './pages/home-page';

function App() {
    return (
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<HomePage/>}/>
          </Route>
        </Routes>
    );
}

export default App;
