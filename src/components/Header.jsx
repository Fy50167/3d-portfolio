import Navigation from './Navigation';
import { useState } from 'react';
import LOGO from '../assets/images/KD_Logo.png';
import ME from '../assets/images/Me.jpg';
import { Disclosure } from '@headlessui/react';
import {
    Bars3Icon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
    EyeIcon,
    EyeSlashIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
    const [viewContent, setViewContent] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const hideContent = () => {
        setViewContent(!viewContent);
    };

    const playPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <Disclosure as='nav' className='bg-gray-800 w-full z-50'>
            {({ open }) => (
                <>
                    <div className='mx-auto w-full px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                {/* Mobile menu button*/}
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

                                <img
                                    className='h-8 w-8 rounded-full ml-4'
                                    src={ME}
                                    alt='Image of me'
                                />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            <Navigation />
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
