import { useDispatch } from 'react-redux';
import { setTrue } from '../redux/viewContent';
import { musicTrue } from '../redux/playMusic';

export default function Intro(props) {
    const dispatch = useDispatch();

    const enter = () => {
        props.setHasEntered(true);
        dispatch(setTrue());
        dispatch(musicTrue());
    };

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center bg-black text-white'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h2 className='delay-1 fade-in gold mb-4 fs-4 text-xl text-center animated'>
                    Shhhh....
                </h2>
                <h1 className='delay-3 fade-in gold mb-4 stylized text-4xl text-center animated'>
                    The show is starting.
                </h1>
                <button
                    className='delay-5 fade-in animated enter btn'
                    onClick={() => enter()}
                >
                    Enter
                </button>
            </div>
        </div>
    );
}
