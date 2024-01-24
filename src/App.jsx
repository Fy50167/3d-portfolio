import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useSelector } from 'react-redux';

export default function App() {
    const viewContent = useSelector((state) => state.content.value);

    return (
        <>
            <main>
                <Header />
                <Home />
                {viewContent && <Outlet />}
            </main>
        </>
    );
}
