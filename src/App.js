import logo from './logo.svg';
import './App.css';
import Cards from './cards'
import Last from './last'
import Foot from './footer'
import { motion } from 'framer-motion'
// import Fade from 'react-reveal/Fade';

function App() {

  return (
    <div className='bg-black'>
      <div className='header items-center flex justify-center fixed z-50'>
        <img src={require('./img/logo.png')} alt="" srcset="" className='logo ml-[200px]' />
        <button className='butt content-end  mr-[200px] h-[50px] w-[240px] text-center'>Get early access</button>
      </div>
      <div className='flex second h-[810px] w-[100%] bg-cover top-[-100px] relative z-10  '>
        <div className=' text-white  mt-[200px] left-[220px] justify-center items-center relative h-[810px] w-[68%]'>
          <span>

            <motion.div initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }} 
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 } 
              }} 
              className='flex'>
              <span className='flex'>
                <div>
                  <img src={require('./img/1.png')} alt="" className='w-[31px] h-[50px]' />
                </div>
                <div>
                  <p className='tt1'>
                    Dora Grant DAO
                  </p>
                  <p className='tt2'>
                    FINALIST
                  </p>
                </div>
                <div>
                  <img src={require('./img/2.png')} alt="" className='w-[31px] h-[50px]' />
                </div>
              </span>
              <span className='flex ml-[100px]'>
                <div>
                  <img src={require('./img/1.png')} alt="" className='w-[31px] h-[50px]' />
                </div>
                <div>
                  <p className='tt1'>
                    TechInvestShow
                  </p>
                  <p className='tt2'>
                    FINALIST
                  </p>
                </div>
                <div>
                  <img src={require('./img/2.png')} alt="" className='w-[31px] h-[50px]' />
                </div>
              </span>
            </motion.div>

          </span>
          <motion.div  
           initial={{ y: 150 }}
           animate={{ y: 0 }}
           transition={{
            duration: 1.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
          }} 
          className='mt-[80px]'>
            <span className=''>
              <p className='t1 w-[580px]'>
                Web3 subscription
                payments made easy
              </p>

            </span>
            <span>
              <p className='t2 w-[406px]'>Yoki Finance is a decentralized non-custodial</p>
              <p className='t2 w-[425px]'>payment automation solution. Set up recurring</p>
              <p className='t2 w-[390px] '>crypto payments without locking up funds!</p>
            </span>

            <span className=''>
              <button className='b1 mt-[90px]'>Get early access</button>
              <button className='bt2 mt-[90px] ml-[25px]'>Business integration</button>
            </span>

          </motion.div>
        </div>
        <div className=''>
          <img src={require('./img/hand2.png')} alt="" srcset="" className='h-[765px] w-[485px] top-[45px] relative  float-right right-0 left-[-100px] ' />

        </div>
      </div>
      <Cards></Cards>
      <Last></Last>
      <Foot></Foot>
    </div>
  );
}

export default App;
