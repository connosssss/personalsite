import { JSX } from "preact";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  githubLink: string;
  bgColor: string;
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {

  const { title, description, imageSrc, imageAlt, githubLink, bgColor } = props;
  return (
    <div class="h-screen flex flex-row-2" style={{ backgroundColor: bgColor }}>
      <div class='h-full w-8/12 flex items-center justify-center'> 
        <img src={imageSrc} alt={imageAlt} class="h-[500px] w-auto rounded-md shadow-2xl"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
          <h1 class='text-5xl font-bold'>{title}</h1>
          <p class='text-xl'>{description}</p>
          <a href={githubLink} target="_blank" class=''>
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  );
}