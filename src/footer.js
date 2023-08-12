import './App.js'
import ScrollReveal from 'scrollreveal'
export default function foot() {
    return (

       <div className='relative justify-center items-center flex flex-col'>
        <hr className='w-[1160px] h-[1px] opacity-[0.1] bg-[#FFF] '/>
 <div className='flex h-[320px] w-[100%] mt-[100px] relative justify-center bgfoot'>
 <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="320" viewBox="0 0 867 202" fill="none">
<path d="M596 954C925.052 954 1191.8 740.436 1191.8 477C1191.8 213.56 925.052 0 596 0C266.948 0 0.199951 213.56 0.199951 477C0.199951 740.436 266.948 954 596 954Z" fill="url(#paint0_linear_2_511)"/>
<defs>
<linearGradient id="paint0_linear_2_511" x1="596" y1="528.998" x2="531.044" y2="17.6772" gradientUnits="userSpaceOnUse">
<stop stop-color="#20C997"/>
<stop offset="1" stop-color="#20C997" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
 </div>


         <div className='foot flex h-[320px]   w-[100%] mt-[-320px] relative justify-center bg-[ ] '>
           
           <br />
           <div className=' w-[33.33%] relative justify-center items-center left-[200px]'>
               <div>
               <img src={require('./img/logo.png')} alt="" className='h-[30px]'/>
               <p className='foottext w-[217px]'>
                   Decentralized non-custodial</p>
                  <p className='foottext w-[230px]'> payment automation protocol</p>
               </div>
               
           </div>
           <div className='grid grid-cols-2 w-[33.33%] left-[80px] relative h-[160px]'>
               <div>
                   <p className='ff'>ABOUT</p>
               </div>
               <div>
                   <p className='ff'>COMPANY</p>
               </div>
               <div>
                   <p className='ss mt-[10px]'>Docs</p>
               </div>
               <div>
                   <p className='ss mt-[10px]'>Business integration</p>
               </div>
               <div>
                   <p className='tt'>Blog</p>
               </div>
               <div>
                   <p className='tt'>Brand Assets</p>
               </div>

           </div>
           <div className=' w-[33.33%] overflow-hidden'>
               <p className='ff left-[52px] relative'> FOLLOW US</p>
               <div className='flex left-[50px] top-[25px] relative gap-x-[16px]'>
                   <img src={require('./img/youtube.svg.png')} alt="" srcset="" className='w-[48px] h-[48px]' />
                   <img src={require('./img/discord.svg.png')} alt="" srcset="" className='w-[48px] h-[48px]' />
                   <img src={require('./img/tw.svg.png')} alt="" srcset="" className='w-[48px] h-[48px]' />
                   <img src={require('./img/med.svg.png')} alt="" srcset="" className='w-[48px] h-[48px]' />



               </div>
           </div>
       
          
        
       </div>
       </div>
    )
}