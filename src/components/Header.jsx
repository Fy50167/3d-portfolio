import Navigation from './Navigation';
import { useState, useRef, useEffect, Fragment } from 'react';
import LOGO from '../assets/images/KD_Logo.png';
import DANCE from '../assets/music/Moonlight Dance (Mastered).mp3';
import AVATAR from '../assets/images/KD_Avatar_Circle.png';
import { Disclosure, Transition, Menu } from '@headlessui/react';
import GITHUB from '../assets/images/github.png';
import LINKEDIN from '../assets/images/linkedin.png';
import UPWORK from '../assets/images/upwork-logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setTrue, setFalse } from '../redux/viewContent';
import { musicTrue, musicFalse } from '../redux/playMusic';
import {
    Bars3Icon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
    EyeIcon,
    EyeSlashIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
    const viewContent = useSelector((state) => state.content.value);
    const isPlaying = useSelector((state) => state.isPlaying.value);
    const dispatch = useDispatch();
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const musicPlayer = useRef();
    const hasPageBeenRendered = useRef(false);

    const hideContent = () => {
        if (viewContent) {
            dispatch(setFalse());
        } else {
            dispatch(setTrue());
        }
    };

    const setTimes = () => {
        setDuration(Math.floor(musicPlayer.current.duration));
        setCurrentTime(Math.floor(musicPlayer.current.currentTime));
        musicPlayer.current.play();
        musicPlayer.current.volume = 0.5;
    };

    const playPause = () => {
        if (isPlaying) {
            dispatch(musicFalse());
            musicPlayer.current.pause();
            musicPlayer.current.volume = 0.5;
        } else {
            dispatch(musicTrue());
            musicPlayer.current.play();
            musicPlayer.current.volume = 0.5;
        }
    };

    useEffect(() => {
        if (hasPageBeenRendered.current) {
            musicPlayer.current.play();
            musicPlayer.current.volume = 0.5;
            dispatch(musicTrue());
        }
        hasPageBeenRendered.current = true;
    }, []);

    useEffect(() => {
        if (currentTime === duration && duration !== 0) {
        }
    }, [currentTime]);

    return (
        <>
            <audio
                loop
                src={DANCE}
                ref={musicPlayer}
                onLoadedMetadata={setTimes}
            ></audio>
            <Disclosure as='nav' className='bg-gray-800 w-full z-50'>
                {({ open }) => (
                    <>
                        <div className='mx-auto w-full px-2 sm:px-6 lg:px-8'>
                            <div className='relative flex h-16 items-center justify-between'>
                                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                    <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                        <span className='absolute -inset-0.5' />
                                        <span className='sr-only'>
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className='block h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                    <div className='flex flex-shrink-0 items-center'>
                                        <img
                                            className='h-8 w-auto'
                                            src={LOGO}
                                            alt='My Logo'
                                        />
                                    </div>
                                    <div className='hidden sm:ml-6 sm:block'>
                                        <div className='flex space-x-4'>
                                            <Navigation />
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                                    <button onClick={() => hideContent()}>
                                        {viewContent ? (
                                            <EyeIcon
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <EyeSlashIcon
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </button>
                                    <button onClick={() => playPause()}>
                                        {isPlaying ? (
                                            <SpeakerWaveIcon
                                                className='h-6 ml-4 w-6'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <SpeakerXMarkIcon
                                                className='h-6 ml-4 w-6'
                                                aria-hidden='true'
                                            />
                                        )}
                                    </button>

                                    <Menu as='div' className='relative ml-3'>
                                        <div>
                                            <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm '>
                                                <span className='sr-only'>
                                                    Open user menu
                                                </span>
                                                <img
                                                    className='h-8 w-8 rounded-full'
                                                    src={AVATAR}
                                                    alt='Avatar image'
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'
                                        >
                                            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='https://www.linkedin.com/in/francis-yang-125082222/'
                                                            target='_blank'
                                                            className='px-4 py-2 text-sm text-gray-700 flex'
                                                        >
                                                            <img
                                                                src={LINKEDIN}
                                                                className='social'
                                                            />
                                                            LinkedIn
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='https://github.com/Fy50167'
                                                            target='_blank'
                                                            className='px-4 py-2 text-sm text-gray-700 flex'
                                                        >
                                                            <img
                                                                src={GITHUB}
                                                                className='social'
                                                            />
                                                            GitHub
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='https://www.upwork.com/freelancers/~019d1770b0e5419a80'
                                                            target='_blank'
                                                            className='px-4 py-2 text-sm text-gray-700 flex'
                                                        >
                                                            <img
                                                                src={UPWORK}
                                                                className='social'
                                                            />
                                                            Upwork
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className='sm:hidden'>
                            <div className='space-y-1 px-2 pb-3 pt-2 flex flex-col'>
                                <Navigation />
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
