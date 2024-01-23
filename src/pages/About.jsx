import ME from '../assets/images/Me.jpg';
import DOWN from '../assets/images/Down.png';
import UP from '../assets/images/Up.png';
import LOGO from '../assets/images/KD_Logo.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function About() {
    document.title = 'Francis Yang - About';

    const [isScroll, setIsScroll] = useState(true);

    const changeScroll = () => {
        setIsScroll(!isScroll);
        const upArrow = document.querySelector('#arrow-up');
        if (!upArrow.classList.contains('display')) {
            upArrow.classList.add('display');
        }
    };

    return (
        <div className='section-div'>
            <CSSTransition
                in={isScroll}
                timeout={1000}
                classNames='scroll-upper'
            >
                <div className='flex w-full h-full items-center justify-evenly relative z-20 p-4 md:p-0 flex-col md:flex-row'>
                    <button
                        onClick={() => changeScroll()}
                        className='fade-down delay-2 animated absolute btn btn-arrow'
                    >
                        <img src={DOWN} className='arrow' />
                    </button>
                    <div className='fade-down delay-1 animated w-full md:w-1/4'>
                        <h2 className='stylized'>About Me</h2>
                        <p>
                            Full-stack web developer UCSD grad based in Southern
                            California. Specializing in front-end development
                            via React but also proficient in multiple back-end
                            technologies such as MySQL, NoSQL, GraphQL, and
                            Python.
                        </p>
                    </div>
                    <img
                        className='portrait fade-down delay-3 animated'
                        src={ME}
                        alt='self-image'
                    />
                    <div className='fade-down delay-5 animated w-full md:w-1/4'>
                        <h2 className='stylized'>My Background</h2>
                        <p>
                            Graduated from the University of Southern
                            California, San Diego, as a double major in
                            Cognitive Neuroscience as well as Music. Entered
                            college with these two majors with the intent to
                            conduct research concerning the brain and the way it
                            is impacted by sound, but I also developed an
                            interest in Computer Science through my time at UCSD
                            that I ultimately decided to pursue instead.
                        </p>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={!isScroll}
                timeout={1000}
                classNames='scroll-lower'
            >
                <div className='flex items-center justify-evenly fixed lower-content z-0 p-4 md:p-0 flex-col md:flex-row'>
                    <button
                        onClick={() => changeScroll()}
                        className='absolute btn btn-arrow arrow-up'
                        id='arrow-up'
                    >
                        <img src={UP} className='arrow' />
                    </button>
                    <div className='w-full md:w-1/4'>
                        <h2 className='stylized'>Experience</h2>
                        <p>
                            Since I developed an interested in computer science
                            so late (around halfway through my junior year of
                            college), I wasn't able to take many classes
                            concerning it if I wanted to graduate on time.
                            Instead, I learned basic Front-End languages such as
                            HTML, CSS, Javascript, and Liquid on my own during
                            my senior year, and took a coding bootcamp from UC
                            Berkeley shortly after graduation to gain some
                            experience with the Back-End as well. Currently, I'm
                            spending my time making projects and studying data
                            algorithms in preparation for job interviews.
                        </p>
                    </div>
                    <img className='portrait' src={LOGO} alt='large-logo' />
                    <div className='w-full md:w-1/4'>
                        <h2 className='stylized'>Freelance Work</h2>
                        <p>
                            Throughout my senior year of college, I used the
                            languages that I had learned on my own to act as a
                            freelance web developer on Upwork for people looking
                            to start E-Commerce businesses via the Shopify
                            platform. While the work that I did wasn't
                            particularly advanced, it did at the very least
                            provide me with some real work experience
                            (communicating with clients/collaborators, working
                            with deadlines, etc.) and allowed me to fund my
                            bootcamp. You can view all of my reviews (which are
                            all 5 stars) in my Upwork profile via my socials!
                        </p>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}
