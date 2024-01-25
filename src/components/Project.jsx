export default function Projects(props) {
    const { name, techstack, deploy, url, background, description } = props;

    const renderLink = () => {
        if (deploy) {
            return (
                <div className='border-top w-full'>
                    <a
                        target='_blank'
                        className='text-sm gold stylized'
                        href={deploy}
                    >
                        DEPLOYED LINK
                    </a>
                </div>
            );
        }
    };

    return (
        <div className='m-6 bg-white card text-black rounded shadow-lg relative'>
            <a
                target='blank'
                href={url}
                className='w-full h-1/3 md:h-1/2 pop-out rounded'
            >
                <img
                    src={background}
                    className='w-full h-1/3 pop-out rounded'
                />
            </a>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-black'>{name}</div>
                <p className='text-sm text-black'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2 w-full absolute bottom-0'>
                {techstack.map((language) => (
                    <span
                        key={techstack.indexOf(language)}
                        className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2'
                    >
                        {language}
                    </span>
                ))}
                {renderLink()}
            </div>
        </div>
    );
}
