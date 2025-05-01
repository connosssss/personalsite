export default function Techstack() {
  return (
    <div class=" text-white bg-[#474885] rounded-lg font-semibold p-6 gap-5 w-4/12
        text-center flex flex-col"> 
         <h1 class="font-bold text-xl "> Tech Stacks</h1>
        <div class='w-full flex flex-row place-content-evenly justify-items-center text-lg pt-6'>

            <li class='flex flex-row items-center gap-2 group relative justify-center'> 
            <div class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 w-40"> 
              Fresh by Deno
                </div>
            <img src="/logo.svg" width="48" height="48" alt="the Fresh by deno logo"
            class=' hover:scale-125 transition-transfrom duration-300'/>
            
            </li>

            <li class='flex flex-row items-center gap-2 group relative justify-center'>
            <div class=" px-4 absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 ">
                TypeScript
                </div>
            <img src="/typescript-logo-svgrepo-com.svg" width="48" height="48" alt="the typescript logo"
            class=' hover:scale-125 transition-transfrom duration-300'/>
            
            </li>

            <li class='flex flex-row items-center gap-2 group relative  justify-center'>
            <div class=" px-4 absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 ">
                React
            </div>
            <img src="/react-javascript-js-framework-facebook-svgrepo-com.svg" width="60" height="60" alt="the react logo"
            class='hover:scale-125 transition-transfrom duration-300'/>
          
            </li>

            <li class='flex flex-row items-center gap-2 group relative justify-center'>
            <div class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 w-28">
                Next JS
                </div>
            <img src="/nextjs-icon-svgrepo-com.svg" width="48" height="48" alt="the Next JS"
            class='rounded-sm hover:scale-125 transition-transfrom duration-300'/>
            
            </li>

            <li class='flex flex-row items-center gap-2 group relative justify-center'>
            <div class="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 w-28">
                Node JS
            </div>
            <img src="/nodejs-icon-svgrepo-com.svg" width="48" height="48" alt="the Node JS logo"
            class='rounded-sm hover:scale-125 transition-transfrom duration-300'/>
          
            </li>

            <li class='flex flex-row items-center gap-2 group relative justify-center'>
              <div class=" px-4 absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-1 
              rounded shadow-md z-10 bg-opacity-35 w-28">
                Tailwind CSS
              </div>
            <img src="/tailwindcss.svg" width="48" height="48" alt="The Tailwindcss Logo"
              class='invert hover:scale-125 transition-transfrom duration-300'/>
            
            </li>
        </div>
      </div>
  )
}