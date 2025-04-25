
export default function Home() {
  
  return (
    <div class="h-screen mx-auto bg-[#7c7dd4] flex flex-col justify-center items-center py-7 gap-6">

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
        
        
        <p>An upcoming Computer Science and Engineering Student studying at _____</p>

        <a href="https://github.com/retekant" class='text-white' >
         <img src="/github.svg" alt="GitHub Logo" width="32" height="32" class="invert" />
        </a>


        </div>


      </div>
        
        <div class=" text-white bg-[#474885] rounded-lg font-semibold p-8 gap-5 w-4/12
        text-center flex flex-col"> 
         <h1 class="font-bold text-xl "> Technologies</h1>
        <div class='w-full grid grid-cols-3 gap-x-8 gap-y-4 justify-items-center text-lg'>

            <li class='flex flex-row items-center gap-2'> 
            <img src="/logo.svg" width="48" height="48" alt="the Fresh by deno logo"/>
            <p>Fresh</p>
            </li>

            <li class='flex flex-row items-center gap-2'>
            <img src="/typescript-logo-svgrepo-com.svg" width="48" height="48" alt="the typescript logo"
            class='rounded-sm'/>
            <p>TypeScript</p>
            </li>

            <li class='flex flex-row items-center gap-2'>
            <img src="/react-javascript-js-framework-facebook-svgrepo-com.svg" width="48" height="48" alt="the react logo"/>
            <p>React</p>
            </li>

            <li class='flex flex-row items-center gap-2'>
            <img src="/nextjs-icon-svgrepo-com.svg" width="48" height="48" alt="the Next JS"/>
            <p>Next JS</p>
            </li>

            <li class='flex flex-row items-center gap-2'>
            <img src="/nodejs-icon-svgrepo-com.svg" width="48" height="48" alt="the Node JS logo"
            class='rounded-sm'/>
            <p>Node JS</p>
            </li>

            <li class='flex flex-row items-center gap-2'>
            <img src="/sql-database-generic-svgrepo-com.svg" width="48" height="48" alt="A SQL Logo"/>
            <p>SQL</p>
            </li>
        </div>
      </div>
    </div>
  );
}
