import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

export default function App() {
    const viewContent = useSelector((state) => state.content.value);

    return (
        <>
            <main>
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
            </main>
        </>
    );
}
