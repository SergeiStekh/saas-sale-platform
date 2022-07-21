import Header from './components/main-header/header.component'
import Categories from './components/directory/directory.component';
import {StyledPageContainer} from './styled/elements/page-container.styled'

function App() {
    return (
        <StyledPageContainer>
            <Header/>
            <Categories/>
        </StyledPageContainer>
    );
}

export default App;
