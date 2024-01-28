import SPACE from '../assets/images/space.png';
import BADGE from '../assets/images/badge.png';
import BACKEND from '../assets/images/backend.png';
import UPWORK from '../assets/images/lumebox.png';
import CHARACTER from '../assets/images/animated-character.png';

const projects = [
    {
        name: '3D Animated Character',
        techstack: ['React Three Fiber'],
        url: 'https://github.com/Fy50167/3d-animated-character',
        deploy: 'https://fy50167.github.io/3d-animated-character/',
        background: CHARACTER,
        description: 'Animated, customizable 3D character built using R3F. Character animations can be swapped with the bottom right controls while camera angles and character colors can be chosen with the top right controls.'
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
    }
]
    

export default projects;