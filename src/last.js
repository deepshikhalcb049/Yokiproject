import './App.css'
import ScrollReveal from 'scrollreveal'
import {motion} from 'framer-motion'

export default function last() {
    return (
        <div className='justify-center items-center relative flex w-[100%] h-[640px]'>
            <div className=' w-[40%] justify-center items-center relative flex'>
                <motion.p initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.5,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='newt top-[18px]  relative'>
                    Integrates
                    deeply with
                    crypto stack
                </motion.p>
            </div>
            <div className='w-[45%]  justify-center items-center relative flex flex-col left-[-70px]'>
                <div className='flex'>
                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration:1 ,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} src={require('./img/ic1.png')} className='cc' alt="" />
                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration:1 ,
                                delay: 0.4,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}  src={require('./img/ic2.png')} className='cc left-[20px] relative' alt="" />


                </div>

                <div className='flex relative top-[20px] ml-[120px]'>

                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration:1 ,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}  src={require('./img/ic3.png')} className='cc' alt="" />

                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration:1 ,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}  src={require('./img/ic4.png')} className='cc left-[20px] relative' alt="" />


                </div>

                <div className='flex top-[40px] relative'>
                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration:1 ,
                                delay: 1.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}  src={require('./img/ic5.png')} className='cc' alt="" />
                    <motion.img initial={{  opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}

                            transition={{
                                duration:1 ,
                                delay: 1.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} src={require('./img/ic6.png')} className='cc left-[20px] relative' alt="" />


                </div>
            </div>
        </div>
    )
}
