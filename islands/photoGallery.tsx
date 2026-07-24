import { useState } from "preact/hooks";

export default function PhotoGallery({image1, image2, image3}) {

  const [img, setimg] = useState([0, 1, 2]);




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

  const images = [image1, image2, image3];

  return (
    <div class='h-full w-8/12 flex items-center justify-center flex-col'>
      <div class="relative h-[450px] w-[720px] flex items-center justify-center">
        <img 
          src={images[img[2]]}  
          class="absolute h-[450px] w- object-cover rounded-md shadow-xl transition-all duration-300 
          transform translate-x-40 rotate-12 "
        />
        
        <img 
          src={images[img[1]]} 
          class="absolute h-[450px] w-auto object-cover rounded-md shadow-xl transition-all duration-300 
          transform translate-x-20 rotate-6 " />


        <img 
          src={images[img[0]]} 
          class="absolute h-[450px] w-auto object-cover rounded-md shadow-xl transition-all duration-300 
          transform hover:z-10 hover:scale-110 "
        />
      </div>

      <div class='flex flex-row gap-4 mt-4 text-white'>

        <button 
          class='w-10 py-2 bg-[#2A292E] rounded hover:bg-[#313136] transition-colors' 
          onClick={() => changeImg(img, setimg, true)}
        >
          ←
        </button>

        <button 
          class='w-10 py-2 bg-[#2A292E] rounded hover:bg-[#313136] transition-colors' 
          onClick={() => changeImg(img, setimg, false)}
        >
          →
        </button>
        
      </div>
    </div>
  );
}