
export default function Home() {
  
  return (
    <div class="h-2/3 mx-auto bg-[#7c7dd4] flex flex-col justify-center items-center py-7 gap-6">
      <div class="flex flex-col text-white bg-[#474885] rounded-lg font-semibold p-5 gap-5 w-4/12">

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
      </div>
        
        <div class=" text-white bg-[#474885] rounded-lg font-semibold p-5 gap-5 w-4/12
        text-center flex flex-col gap2">
         <h1 class="font-bold text-2xl "> Technologies</h1>
        <div class='w-full flex flex-row'>
          <ul class='flex flex-row items-center'>
            <li class='flex flex-row items-center'>
            <img src="/logo.svg" width="48" height="48" alt="the Fresh by deno logo"/>
            <p>Fresh</p>
            </li>
            
            <li>

            </li>
            <li>

            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
