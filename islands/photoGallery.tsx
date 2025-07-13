import { useState } from "preact/hooks";

export default function PhotoGallery() {

  const [trackrImg, setTrackrImg] = useState([0, 1, 2]);




  const changeImg = (getImg, setImg, directionL) => {
    const temp = [...getImg]; 
    
    if (directionL) {
      const last = temp.pop();
      temp.unshift(last);
      setImg(temp);
    } 

    else {
      const first = temp.shift();
      temp.push(first);
      setImg(temp);
    }
  };

  const images = ['/trackr1.png', '/trackr2.png', '/trackr3.png'];

  return (
    <div class='h-full w-8/12 flex items-center justify-center flex-col'>
      <div class="relative h-[500px] w-[800px] flex items-center justify-center">
        <img 
          src={images[trackrImg[2]]} alt="trackr ss 1" 
          class="absolute h-[450px] w-auto rounded-md shadow-xl transition-all duration-300 
          transform translate-x-40 rotate-12 "
        />
        
        <img 
          src={images[trackrImg[1]]} alt="trackr ss 2" 
          class="absolute h-[450px] w-auto rounded-md shadow-xl transition-all duration-300 
          transform translate-x-20 rotate-6 "
        />

        <img 
          src={images[trackrImg[0]]} alt="trackr ss 3" 
          class="absolute h-[450px] w-auto rounded-md shadow-xl transition-all duration-300 
          transform hover:z-10 hover:scale-110"
        />
      </div>

      <div class='flex flex-row gap-4 mt-4'>

        <button 
          class='w-10 h-5 bg-white/50 rounded hover:bg-white/70 transition-colors' 
          onClick={() => changeImg(trackrImg, setTrackrImg, true)}
        >
          ←
        </button>

        <button 
          class='w-10 h-5 bg-white/50 rounded hover:bg-white/70 transition-colors' 
          onClick={() => changeImg(trackrImg, setTrackrImg, false)}
        >
          →
        </button>
        
      </div>
    </div>
  );
}