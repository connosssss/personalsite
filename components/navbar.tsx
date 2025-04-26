export default function Navbar() {
  return (
    <div className='w-full absolute top-0 flex flex-row p-4 text-white font-semibold'>
     
        <div class="flex flex-row gap-6"> 
          <a href="/" class="hover:underline">Home</a>
          <a href="/projects" class="hover:underline">Projects</a>
        </div>
    </div>
  )
}