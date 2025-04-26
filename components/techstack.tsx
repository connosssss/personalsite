export default function Techstack() {
  return (
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
            <img src="/tailwindcss.svg" width="48" height="48" alt="The Tailwindcss Logo"
              class='invert'/>
            <p>Tailwind CSS</p>
            </li>
        </div>
      </div>
  )
}