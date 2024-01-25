import projects from '../utils/projects';
import Project from '../components/Project';

export default function Projects() {
    return (
        <>
            <div className='section-div'>
                <div className='h-full w-full animated fade-in flex flex-wrap p-4 overflow-auto justify-center'>
                    {projects.map((project) => (
                        <Project
                            key={projects.indexOf(project)}
                            name={project.name}
                            techstack={project.techstack}
                            deploy={project.deploy}
                            url={project.url}
                            background={project.background}
                            description={project.description}
                        />
                    ))}
                    <div className='aligner'></div>
                    <div className='aligner'></div>
                    <div className='aligner'></div>
                </div>
            </div>
        </>
    );
}
