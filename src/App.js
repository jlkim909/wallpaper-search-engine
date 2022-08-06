import styled from 'styled-components';
import ToggleThemeButton from './component/ToggleThemeButton';
import Hero from './component/Hero';
import ResultContainer from './component/ResultContainer';
import Footer from './component/Footer';
import './App.css';
import { createContext, useState } from 'react';

const Container = styled.div`
    position: relative;
    background-color: var(--primary);
    min-height: 100vh;
`;

const initialState = {
    q: '',
    order: 'popular',
    per_page: 20,
    page: 1,
    orientation: 'all',
};
export const paramContext = createContext({
    params: initialState,
    setData: () => {},
});
function App() {
    const [params, setParams] = useState(initialState);

    return (
        <>
            <Container>
                <paramContext.Provider value={{ params, setParams }}>
                    <Hero />
                    <ResultContainer />
                    <Footer />
                    <ToggleThemeButton />
                </paramContext.Provider>
            </Container>
        </>
    );
}

export default App;
