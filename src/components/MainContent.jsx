import Home from './Home';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

export default function MainContent() {
    const viewContent = useSelector((state) => state.content.value);

    return (
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
    );
}
