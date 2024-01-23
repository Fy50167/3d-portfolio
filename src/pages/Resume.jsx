import RESUME from '../assets/files/Resume.pdf';

export default function Resume() {
    document.title = 'Francis Yang - Resumé';

    return (
        <div className='section-div'>
            <div className='fade-down delay-1 animated w-full h-full flex flex-col justify-center items-center'>
                <h1 className='stylized gold text-4xl md:text-6xl mb-4'>
                    RESUMÉ
                </h1>
                <div className='text-start w-full text-base md:text-xl'>
                    <h2 className='text-center'>
                        View my full resume{' '}
                        <span>
                            <a
                                className='gold stylized'
                                download='Francis_Yang_Resume.pdf'
                                href={RESUME}
                            >
                                here!
                            </a>
                        </span>
                    </h2>
                    <div className='w-5/6 md:w-3/5 m-auto fs-4'>
                        <h2 className='gold stylized text-lg md:text-2xl'>
                            Tech Languages
                        </h2>
                        <ul>
                            <li className='mb-4'>
                                Front-end languages: HTML, CSS, JS, React
                            </li>
                            <li className='mb-4'>
                                Various React-related libraries: React Three
                                Fiber, React Transition Group, Redux, etc.
                            </li>
                            <li className='mb-4'>
                                Back-end relational databases: MySQL, NoSQL,
                                GraphQL
                            </li>
                            <li className='mb-4'>
                                Other back-end languages: Liquid, Python, C#
                            </li>
                        </ul>
                        <h2 className='gold stylized text-lg md:text-2xl'>
                            Workplace Experience
                        </h2>
                        <ul>
                            <li className='mb-4'>
                                Numerous long and short-term freelance web
                                development jobs via Upwork
                            </li>
                            <li className='mb-4'>
                                Student Lead at an on-campus restaurant during
                                college
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
