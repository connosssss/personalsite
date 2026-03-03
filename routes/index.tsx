import Navbar from "../components/navbar.tsx";
import Techstack from "../components/techstack.tsx";
import Project from "../components/project.tsx";
import PhotoGallery from "../islands/photoGallery.tsx";

//
export default function Home() {
  return (
    <>
    <div id="top" class="h-screen mx-auto bg-[#14161b] flex flex-col justify-center items-center py-7 gap-6">
      <Navbar/>
      <div class=" text-white bg-[#0f1015] rounded-lg font-semibold  
      w-5/12  h-[45%] flex items-center justify-center">

        <div class='flex flex-col p-8 gap-5 '>
        <div class='flex flex-row justify-between gap-4 items-center'>
            <div class='w-full h-full flex items-center '>
            
            <h3 class="text-6xl">I'm Connor</h3>
          </div>
          <div class=''>
           {/* <div class='h-24 w-24 bg-slate-800 rounded-full inline-block overflow-hidden'>
             <img src="/asdf.png"  alt="the react logo"
            class='w-full h-full object-cover'/> 
            </div>*/} 
          </div>
        </div>
        
        <div>
          <p>A Computer Science and Engineering Student studying at UCI</p>
        
        </div>
        <div class='flex flex-row gap-4 w-full items-center '>
            <a href="https://github.com/connosssss" target="_blank" class='text-white' >
              <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/connor-griffin-a5174724b/" target="_blank" class='text-white' >
              <img src="iconmonstr-linkedin-3.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
            </a>
            <a href="" target="_blank" class='text-white flex flex-row group gap-4' >
              <img src="maildotru.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
              <p class='opacity-0 transform transform-origin-left transition-all
               duration-300 ease-out group-hover:opacity-100'>connorgriffin2424@gmail.com</p>
            </a>
        </div>


        </div>


      </div>

            <Techstack bgColor="#0f1015"/>

        
        
    </div>
    {/*PROJECTS  */ }
    <div class='h-[500px] w-full bg-gradient-to-b from-[#14161b]  to-[#708995] ' />


    <div class='h-52 w-full bg-[#708995] text-center text-6xl font-semibold flex justify-center text-white'>
      <h1  id="projects"> Projects</h1>
    </div>

    <div class="h-[500px] bg-gradient-to-b from-[#708995]  to-[#905368] flex flex-row-2 " >
      <div class='h-full w-8/12 flex items-center justify-center'> 
      <img src='bullets-betterfy.png' alt="betterfy SS" class="h-[500px] w-auto rounded-md shadow-xl"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
        <h1 class='text-5xl font-bold'> betterfy </h1>
        <p class='text-xl'>betterfy is a web app that uses the Spotify API to make a more customizable and better looking UI for the web player. 
          It was built using Next JS, Tailwind CSS, and Node JS</p>
          <a href="https://github.com/retekant/betterfy" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        </div>
      </div>
    </div>

    <div class='h-52 w-full bg-[#905368]  '/>
    <div class='h-96 w-full bg-gradient-to-b from-[#905368]  to-[#141318]  '/>
    
    <div class=" bg-[#141318] flex flex-row-2 py-64 justify-start items-start w-full gap-20" >
      <PhotoGallery image1="/trackr1.png" image2="/trackr2.png" image3="/trackr3.png"/>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full z-30'>
        <h1 class='text-5xl font-bold'> trackr </h1>
        <p class='text-xl z-40'>trackr is a simple time tracker meant at giving users full access to their data, an abundance of analytics, and making it open-source, allowing
          for people to change whatever they would like. 
          It was built using Next JS, Tailwind CSS, and was deployed on Vercel</p>
          <div class='flex flex-row gap-5'>
          <a href="https://github.com/retekant/betterfy" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        <a href="https://trackr-nu.vercel.app" target="_blank" class='' >
              <img src="/link-svgrepo-com.svg" alt="A Link icon" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class='h-96 w-full bg-gradient-to-b from-[#141318]  to-[#020617]  '/>
    <div class='h-52 w-full bg-[#020617]  '/>
    
    <div class="h-[500px] bg-gradient-to-b from-[#020617]  to-[#020617] flex flex-row-2 " >
      <div class='h-full w-8/12 flex items-center justify-center'> 
      <img src='simple.png' alt="simple" class="h-[500px] w-auto rounded-md shadow-xl shadow-[#1e293b]"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
        <h1 class='text-5xl font-bold'> simple </h1>
        <p class='text-xl'>simple is an electron based browser made to give users customization while also cutting down on ram ussage </p>
          <a href="https://github.com/retekant/simple" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        </div>
      </div>
    </div>

    <div class='h-52 w-full bg-[#020617]  '/>
    <div class='h-96 w-full bg-gradient-to-b from-[#020617] to-[#273346]    '/>

    <div class=" bg-[#273346] flex flex-row-2 py-64 justify-start items-start w-full gap-20" >
      <PhotoGallery image1="/inked1.png" image2="/inked2.png" image3="/inked3.png"/>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full z-30'>
        <h1 class='text-5xl font-bold'> inked </h1>
        <p class='text-xl z-40'>inked is a site that allows users to make and join lobbies to draw with friends in real time.
          I mainly made it just to learn more about websockets and multiplayer lobby hosting + creating 
          It was built using Fresh, Tailwind CSS, and was deployed on Deno Deploy</p>
          <div class='flex flex-row gap-5'>
          <a href="https://github.com/retekant/inked" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>

        <a href="https://inked.connosssss.deno.net" target="_blank" class='' >
              <img src="/link-svgrepo-com.svg" alt="A Link icon" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
   
 
    <div class='h-96 w-full bg-gradient-to-b from-[#273346]  to-emerald-300  '/>
    
    <div class="h-[800px] bg-emerald-300 flex flex-row-2 py-64" >
      <div class='h-full w-8/12 flex items-center justify-center'> 
      <img src='NextStep.png' alt="nextstep SS" class="h-[500px] w-auto rounded-md shadow-xl"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
        <h1 class='text-5xl font-bold'> Next Step </h1>
        <p class='text-xl'>Next Step uses Machine learning models like linear regression and Random Forest train off of past stock data, test the predictions to past data, and 
          predict future price movements. It was mainly made as a way to just experiment with machine learning while also using Next JS for the front end and python for the backend.
        </p>
          <a href="https://github.com/connosssss/Next-Step" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        </div>
      </div>
    </div>
    
    <div class='h-96 w-full bg-gradient-to-b from-emerald-300  to-slate-700  '/>

    <Project 
      title="noteable"
      description="noteable is a Markdown note editor that allows users to save notes locally to the browser. It was made using Fresh by Deno and Tailwind CSS"
      imageSrc="noteable.png"
      imageAlt="noteable screenshot"
      githubLink="https://github.com/retekant/noteable"
      bgColor="#334155"
      siteLink="https://noteable.deno.dev"
    />

     {/*Recent Hackathons  */ }
< div class='h-96 w-full bg-gradient-to-b from-slate-700  to-white  '/>
     <div class='h-52 w-full bg-white text-center text-6xl font-semibold items-center flex justify-center text-white'>
      <h1  id="hackathons" class="text-gray-950"> Recent Hackathons </h1>
    </div>

    
    
    <div class=" bg-white flex flex-row-2 py-64 justify-start items-start w-full gap-20" >
      <PhotoGallery image1="/muv1.png" image2="/muv5.png" image3="/muv2.png"/>
      <div class='h-full w-4/12 text-black-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full z-30'>
        <h1 class='text-5xl font-bold'> Irvine Hacks 2026: muve </h1>
        <p class='text-xl z-40'>muv was our project built for Irvine Hacks 2026. We made out project around using AI to scan house listing images for 
          anything that would make it innaccessible based on user's input, with it also taking in contextual data of the surrounding area based on the input as well. At the end 
          of all of that, it makes a final report that compiles everything and shows where there could be potential problems for the user
        </p>
          <div class='flex flex-row gap-5'>
          <a href="https://github.com/ParzivalPerhaps/muve" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class=" transition-transform duration-300 hover:scale-125" />
        </a>
        <a href="https://devpost.com/software/muve-frx3n0" target="_blank" class='' >
              <img src="/link-svgrepo-com.svg" alt="A Link icon" width="32" height="32" class=" transition-transform duration-300 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>
  
    </>);
}
