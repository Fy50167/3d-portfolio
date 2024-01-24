import MainContent from './components/MainContent';
import Intro from './components/Intro';

import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function App() {
    const [hasEntered, setHasEntered] = useState(false);

    return (
        <>
            {!hasEntered ? (
                <Intro setHasEntered={setHasEntered} />
            ) : (
                <main>
                    <>
                        <MainContent />
                    </>
                </main>
            )}
        </>
    );
}
