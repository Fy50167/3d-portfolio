import Home from './pages/Home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
    return (
        <>
            <main>
                <Header />
                <Home />
                <Outlet />
            </main>
        </>
    );
}
