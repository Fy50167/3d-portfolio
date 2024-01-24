import MainContent from './components/MainContent';
import Intro from './components/Intro';

import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function App() {
    const [hasEntered, setHasEntered] = useState(false);

    return (
        <>
            <main>
                {!hasEntered ? (
                    <Intro setHasEntered={setHasEntered} />
                ) : (
                    <>
                        <CSSTransition
                            in={hasEntered}
                            timeout={1000}
                            classNames='content-fade'
                        >
                            <MainContent />
                        </CSSTransition>
                    </>
                )}
            </main>
        </>
    );
}
