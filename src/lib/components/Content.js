import Spotify from "$lib/images/Spotify.svg";
import Bpr from "$lib/images/BPR.svg"

const contents = [
    {
        title: 'Software Engineer',
        description:
            'As an undergraduate student with a passion for software engineering, I seek for the opportunity to broaden my knowledge and skills through internship and study abroad. Through my studies, I have gained expertise in various programming languages and software development methodologies, as well as experience in collaborating with diverse teams to create and deliver high-quality software products. I am motivated for more collaboration, improve soft skills and eager to continue learning and growing in this field.'
    },
    {
        title: 'Frontend Engineer',
        description:
            'I am a frontend developer who is passionate about making website and web design. I learn about how to make website more valuable and user-friendly using UI/UX design. By making code usable, it will make more readable and best practices.'
    },
    {
        title: 'Data Engineer',
        description:
            'I am a data engineer who is passionate about learning processing data flow and making the pipeline. With using the technology like Apache Spark and Kafka to collecting data from another source and processed it. By making the pipeline, the purpose is to help others as analyze the data has the dataset and can be visualize to another team.'
    }
];

const experiences = [
    {
        startDate: 'Aug 2022',
        endDate: 'Feb 2023',
        position: 'Data Engineer Intern',
        company: 'PT VKTR Indonesia',
        skills: ['Python', 'cantools', 'Apache Spark', 'Apache Hadoop', 'Pyspark', 'Cassandra']
    },
    {
        startDate: 'May 2022',
        endDate: 'Aug 2022',
        position: 'Frontend Engineer Intern',
        company: 'Pinhome',
        skills: ['Jest Unit', 'Javascript', 'ReactJS', 'NextJS', 'Jira', 'Redux.js']
    },
    {
        startDate: 'Jan 2022',
        endDate: 'Apr 2022',
        position: 'Full-stack Developer',
        company: 'Bank UMKM Jawa Timur',
        skills: ['ReactJS', 'Laravel', 'UI/UX', 'Research UX', 'Figma', 'PHP']
    }
];

const skills = {
    tech_stacks: ['Python', 'Big Data', 'Apache Spark', 'Apache Hadoop', 'Cassandra', 'Docker', 'Bash Script', 'Google Cloud Platform', 'ReactJS', 'Redux', 'Typescript', 'Laravel', 'DevOps', 'Amazon Web Services'],
    tools: ['Figma', 'Github', 'Jira', 'Gitlab']
}

const projects = [
    {
        name: 'Spotify Playlist Generator',
        photo: Spotify,
        tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'ReduxJS'],
        link: 'https://spotify-playlist-project.vercel.app'
    },
    {
        name: 'Mailing System',
        photo: Bpr,
        tech: ['ReactJs', 'TypeScript', 'Laravel', 'Figma', 'PHP'],
        link: 'https://github.com/ardyutama/mailing-bpr'
    },  
    
]

export { contents, experiences, skills, projects };