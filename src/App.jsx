import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function App() {
    const viewContent = useSelector((state) => state.content.value);
    const [hasEntered, setHasEntered] = useState(false);
    console.log(hasEntered);

    return (
        <>
            <main>
                {!hasEntered ? (
                    <Intro setHasEntered={setHasEntered} />
                ) : (
                    <>
                        <Header />
                        <Home />
                        <CSSTransition
                            in={viewContent}
                            timeout={1000}
                            classNames='fade'
                            unmountOnExit
                        >
                            <Outlet />
                        </CSSTransition>
                    </>
                )}
            </main>
        </>
    );
}
