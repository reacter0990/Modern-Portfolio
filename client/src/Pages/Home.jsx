import React from 'react'
import CoverPicture from '../Images/paper-style-galaxy-background_23-2148975342.jpg'
import classes from '../CSS/Navbar.module.css';
import Rates from '../Comaponets/Rates/Rates';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

  return (
    <div className='text-white max-w-[1580px]'>
      <div className='header-section w-full flex relative min-h-[1050px]'>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-0' data-speed='.5'>
          <div className='w-full h-full'>
            <img data-lag='.5' src={CoverPicture} className='w-full h-full object-cover'/>
          </div>
        </div>
        <div className={classes.robboto500 + ' ' + classes.color_pink + ' pl-16 pt-20 z-10'}>
          <div className='bg-[rgba(0,0,0,0.2)] flex flex-col items-start p-10 rounded-md'>
            <button className={classes.robboto500 + ' bg-[#fe004a] mb-4 text-white text-xl px-3 py-4 rounded-[15px] w-full flex justify-center'}>
              Welcome To My Portfolio
            </button>
            <div className='flex'>
              <h5 className='text-white mr-2 text-5xl'>Hello!</h5>
            </div>
            <div className='flex mt-2'>
              <h5 className='text-#fe004a mr-2 text-5xl'>I'm Chingiz</h5>
              <h5 className='text-white text-5xl'>Topchiyev</h5>
            </div>
            <div className={classes.robboto500 + ' flex text-white'}>
              <p className='mt-5 max-w-[500px] text-wrap'>
                I am a full-stack developer, specializing in full-stack development using tools such as React.js, Express.js, Node.js, MongoDB
              </p>
            </div>
            <div className='mt-4'>
              <button className={classes.poetsen_one_regular + ' w-[300px] h-[50px] mb-2 text-white text-2xl flex justify-start items-center'}>
                Get Started <ArrowForwardIcon sx={{ ml: 1, mt: 1 }} />
              </button>
            </div>
            <div className='mt-4'>
              <Rates />
            </div>
            <div className='w-full flex items-center justify-end mt-4'>
              <p className='text-white ml-2'>110 000 vives of Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[2000px] z-10'>
        <div className="grow flex justify-center items-center">
          <h1 className={classes.robboto500 + ' text-white z-10 text-6xl'}>About Me</h1>
        </div>
        <div className='grow mt-10 px-10'>
          <div className="about-me-title-box grow overflow-hidden">
            <div className='flex'>
              <div className='about-me-icon'>
                 <PermContactCalendarIcon color='#fff' sx={{fontSize: '500px'}}/>
              </div>
              <p className={classes.robboto500 + ' text-xl'}>
                 Hello! My name is Chingiz. I am a full-stack developer specializing in MERN technologies (MongoDB, Express, React, Node). I have 2 years of experience working with React and over 1 year with Express, MongoDB, and Node.js. I am looking for excellent opportunities to advance my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home