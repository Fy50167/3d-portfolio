import SPACE from '../assets/images/space.png';
import BADGE from '../assets/images/badge.png';
import BACKEND from '../assets/images/backend.png';
import UPWORK from '../assets/images/lumebox.png';
import CHARACTER from '../assets/images/animated-character.jpeg';
import PYTHON from '../assets/images/tech-newsfeed.jpeg';
import CREATOR from '../assets/images/character-creator.jpeg';
import STOCKERS from '../assets/images/stocker.png';
import CARS from '../assets/images/car-catalogue.jpeg';
import THREADS from '../assets/images/threads.jpeg';
import BRAINWAVE from '../assets/images/brainwave.png';

const projects = [
    {
        name: 'Brainwave',
        techstack: ['React', 'Vite'],
        url: 'https://github.com/Fy50167/brainwave-website',
        deploy: 'https://brainwave-website.vercel.app',
        background: BRAINWAVE,
        description: 'Extremely robust and sleek design for landing page of a hypothetical AI-based service. Features modernized design choices like parallax and gradients.'
    },
    {
        name: 'Threads',
        techstack: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk'],
        url: 'https://github.com/Fy50167/threads-clone',
        deploy: 'threads-clone-eight-eta.vercel.app',
        background: THREADS,
        description: 'Near-full rebuild of threads using Next.js and MongoDB. Account and community creation functionality is handled via Clerk.'
    },
    {
        name: '3D Character Creator',
        techstack: ['React Three Fiber', 'MongoDB', 'Express'],
        url: 'https://github.com/Fy50167/character-creator',
        deploy: 'https://my-character-creator-4239e0cc94e4.herokuapp.com',
        background: CREATOR,
        description: 'Full-stack application built with R3F and MongoDB. Users can create 3D characters, view community creations, and customize their profile with profile picture and taglines.'
    },
    {
        name: '3D Animated Character',
        techstack: ['React Three Fiber'],
        url: 'https://github.com/Fy50167/3d-animated-character',
        deploy: 'https://fy50167.github.io/3d-animated-character/',
        background: CHARACTER,
        description: 'Animated, customizable 3D character built using R3F. Character animations can be swapped with the bottom right controls while camera angles and character colors can be chosen with the top right controls.'
    },
    {
        name: 'Car Catalogue',
        techstack: ['Next.js', 'TypeScript'],
        url: 'https://github.com/Fy50167/car-catalogue',
        deploy: 'https://car-catalogue-eight.vercel.app',
        background: CARS,
        description: 'Car browsing application built using Next.js and TypeScript that serves real data from a RapidAPI database. Only uses a stock image since access to image APIs requires paid subscriptions.'
    },
    {
        name: "The Lumebox",
        techstack: ['Liquid'],
        url: "https://github.com/Fy50167/lumebox",
        deploy: "https://www.thelumebox.com",
        background: UPWORK,
        description: "Full store buildout for the Red Light Therapy company Lumebox. Although the Shopify Customizer was used for more advanced features like the cart, the vast majority of the visual components were built from the ground up."
    },
    {
        name: "Space Blog",
        techstack: ['GraphQL', 'MERN'],
        url: "https://github.com/Fy50167/space-blog",
        deploy: "https://super-space-blog-8209078db6df.herokuapp.com",
        background: SPACE,
        description: "Space blog-themed app that uses GraphQL back-end. All blog images are taken directly from the NASA APOD API, \
        with the images displayed updating automatically every day. Users can create accounts, like posts, add comments, and save images to their profile for later viewing."
    },
    {
        name: "Badge Generator",
        techstack: ['C#'],
        url: "https://github.com/Fy50167/c--badge-maker",
        background: BADGE,
        description: "Basic C# application that allows users to generate either a custom badge or random ones via an API. Randomized badges have info taken from API, while custom badges are generated via user prompt."
    },
    {
        name: 'Social Network Backend API',
        techstack: ['MongoDB', 'Mongoose'],
        url: "https://github.com/Fy50167/social-network-api",
        background: BACKEND,
        description: "Back-end application that simulates various social media platforms like Facebook, X, Instagram, etc., allowing for user creation, posting, and commenting on other posts."
    },
    {
        name: 'Python Newsfeed',
        techstack: ['Python', 'SQLAlchemy'],
        url: "https://github.com/Fy50167/python-newsfeed",
        background: PYTHON,
        description: "Full-stack blog application that uses python and SQLAlchemy in the backend. Standard blog app where users can create their own posts as well as comment on others."
    },
    {
        name: 'Stock Trader',
        techstack: ['Handlebars', 'Sequelize'],
        url: "https://github.com/Fy50167/stock-trader",
        background: STOCKERS,
        description: "Full-stack application designed to showcase basic fetch request functionality by simulating an online stock trader. All stcok info taken from the NY Times stock API."
    }
]
    

export default projects;