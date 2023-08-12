import React from 'react'
import './App.css';
import ScrollReveal from 'scrollreveal'
import { motion } from 'framer-motion';

export default function cards() {
    return (
        <div className='bg-black mt-[0px]'>
            <div>
                <motion.p initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        repeat: false,
                        duration: 1.8,

                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='ft1 '>Solutions</motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className='ft2 mt-[50px]'>Yoki Finance facilitates a number of recurring</motion.p>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}

                    className='ft2'>transactions for various use cases</motion.p>
            </div>
            <div className='flex mt-[80px]  justify-center items-center'>
                <motion.div initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        repeat: false,
                        duration: 3.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='cardss'>
                    <div>
                        <img src={require('./img/group1.png')} alt="" className='rounded-[32px]' />
                    </div>
                    <div>
                        <motion.p initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='cardtext1 mt-[25px]'>
                            Token subscription
                        </motion.p>
                        <motion.p
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className='cardtext2 mt-[26px]'>
                            The token subscription widget is a purchase</motion.p>
                        <motion.p
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} className='cardtext2'>automation solution for the projects'</motion.p>
                        <motion.p
                            initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            className='cardtext2'>
                            communities
                        </motion.p>
                        <motion.p initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 2.0,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='cardtext3'>Get early access</motion.p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 3.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} className='cardss ml-[40px]'>
                    <div>
                        <img src={require('./img/group2.png')} alt="" className='rounded-[32px]' />
                    </div>
                    <div>
                        <motion.p   
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        className='cardtext1 mt-[25px]'>
                            Auto Buy (DCA)
                        </motion.p>
                        <motion.p  
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        className='cardtext2 mt-[26px]'>
                            Start Dollar-Cost-Average buying</motion.p>
                        <motion.p   
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        className='cardtext2'>crypto automatically on DEXs on</motion.p>
                        <motion.p  
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        className='cardtext2'>
                            your own terms
                        </motion.p>
                        <motion.p  
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        className='cardtext3'>COMING SOON</motion.p>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 3.0,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='cardss ml-[40px] lcard justify-center items-center relative flex'>
                    <p className='lc1'>More cases
                        coming soon</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 3.0,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='justify-center items-center relative flex mt-[40px]'>
                <div className='w-[1160px] h-[520px] seccard flex justify-center items-center'>
                    <div className='w-[50%] relative left-[50px]'>
                        <motion.p 
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        
                        className='seccart1 mt-[50px]'>
                            Why Yoki?
                        </motion.p>
                        <motion.p  
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        
                        className='seccart2 mt-[33px] relative'>
                            Enjoy the accustomed payment automation
                        </motion.p>
                        <motion.p  
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        
                        className='seccart2'>
                            without transferring the control of the funds
                        </motion.p>
                        <motion.p 
                        initial={{ y: 70, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2.0,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                        
                        className='seccart2'>
                            to the centralized entities

                        </motion.p>
                    </div>
                    <div className='w-[50%] left-[70px] relative '>
                        <p className='intext top-[217px] left-[70px] relative w-[74px]'>
                            Automated
                            payments
                            solutions
                        </p>
                        <p className='top-[177px] relative intext left-[310px] w-[114px]'>Full control over
                            the funds</p>
                        <img src={require('./img/group3.png')} alt="" className='w-[466px] h-[319px]' />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}