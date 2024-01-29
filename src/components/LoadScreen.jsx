import { useProgress } from '@react-three/drei';
import { useDispatch } from 'react-redux';
import { setTrue } from '../redux/viewContent';
import { musicTrue } from '../redux/playMusic';
import { useEffect } from 'react';

export default function LoadScreen() {
    const { progress } = useProgress();
    const dispatch = useDispatch();

    useEffect(() => {
        if (progress == 100) {
            dispatch(musicTrue());
            const timeout = setTimeout(() => {
                dispatch(setTrue());
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    return (
        <div
            className={`w-screen h-screen flex flex-col items-center justify-center bg-black text-white load-screen ${
                progress === 100 ? 'loadingScreen--started' : ''
            }`}
        >
            <h2 className='delay-1 fade-in gold mb-4 fs-4 text-xl text-center animated'>
                One moment.
            </h2>
            <h1 className='delay-3 fade-in gold mb-4 stylized text-4xl text-center animated'>
                The stage is being set...
            </h1>
            <div className='loadingScreen__progress'>
                <div
                    className='loadingScreen__progress__value'
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}
