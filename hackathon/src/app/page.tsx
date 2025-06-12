import Image from "next/image";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Home() {
  return (
   <>
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10">

       <div className="flex w-full max-w-6xl px-6">
           <div className="w-1/2 flex items-center">
              <h1 className="uppercase text-5xl font-bold leading-snug">Welcome to GOKULDHAM  - A Safe, Connected, and Thriving Community You Can Call Home</h1>    
           </div>
           <div className="w-1/2 flex items-center justify-center relative"> 
                <div className="absolute w-[450px] h-[350px] bg-[#FB37FF] rounded-full blur-3xl opacity-50"></div>
                <img src="/images/gokuldhamimg.jpg" alt="Gokuldham"className="relative z-10 w-[450px] rounded-xl shadow-xl object-contain 
                         transition-transform duration-500 hover:scale-105 "/>
           </div>           
 
       </div> 
          <Button variant="contained"className="px-6 py-3  " >Enter</Button>
    </div>
     
    
   </>
  );
}





