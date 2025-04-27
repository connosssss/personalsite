import Navbar from "../components/navbar.tsx";
import Techstack from "../components/techstack.tsx";

export default function Home() {
  
  return (
    <>
    <div id="top" class="h-screen mx-auto bg-[#7c7dd4] flex flex-col justify-center items-center py-7 gap-6">
      <Navbar/>
      <div class=" text-white bg-[#474885] rounded-lg font-semibold  
      w-5/12  h-[45%] flex items-center justify-center">

        <div class='flex flex-col p-8 gap-5 '>
        <div class='flex flex-row justify-between'>
            <div>
            <h1 class="font-bold text-6xl">hi</h1>
            <h3 class="text-3xl">I'm Connor</h3>
          </div>
          <div class=''>
            <div class='h-24 w-24 bg-slate-800 rounded-full inline-block'></div>
          </div>
        </div>
        
        <div>
        <p>An upcoming Computer Science and Engineering Student studying at _____</p>
        <p>More tk...</p>
        </div>
        <a href="https://github.com/retekant" target="_blank" class='text-white' >
         <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>


        </div>


      </div>

      <Techstack/>

        
        
    </div>
    {/*PROJECTS  */ }
    <div class='h-96 w-full bg-gradient-to-b from-[#7c7dd4]  to-[#708995] ' />


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
    <div class='h-96 w-full bg-gradient-to-b from-[#905368]  to-gray-800  '/>
    
    <div class="h-[500px] bg-gray-800 flex flex-row-2 " >
      <div class='h-full w-8/12 flex items-center justify-center'> 
      <img src='noteable.png' alt="betterfy SS" class="h-[500px] w-auto rounded-md shadow-2xl"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
        <h1 class='text-5xl font-bold'> noteable </h1>
        <p class='text-xl'>noteable is a Markdown note editor that allows users to save notes locally to the browser. It was made using Fresh by Deno and Tailwind CSS</p>
          <a href="https://github.com/retekant/noteable" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        </div>
      </div>
    </div>

    <div class='h-52 w-full bg-gray-800  '/>

    <div class='h-96 w-full bg-gradient-to-b from-gray-800  to-[#d35b5b]  '/>
    
    <div class="h-[500px] bg-[#d35b5b] flex flex-row-2 " >
      <div class='h-full w-8/12 flex items-center justify-center'> 
      <img src='Clockwise.png' alt="betterfy SS" class="h-[500px] w-auto rounded-md shadow-2xl"/>
      </div>
      <div class='h-full w-4/12 text-white'>
        <div class='w-3/4 flex flex-col gap-8 justify-center items-start h-full'>
        <h1 class='text-5xl font-bold'> Clockwise </h1>
        <p class='text-xl'>Clockwise is a shift tracker that tracks pay in real time throughout the shift, as well as keeping track of past shifts and total earnings. 
          It was built using Fresh by Deno and Tailwind CSS</p>
          <a href="https://github.com/retekant/clockwise" target="_blank" class='' >
            <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert transition-transform duration-300 hover:scale-125" />
        </a>
        </div>
      </div>
    </div>

    <div class='h-52 w-full bg-[#d35b5b]  '/>

    </>);
}
