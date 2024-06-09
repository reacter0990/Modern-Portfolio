import React from 'react'
import classes from '../../CSS/Navbar.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {

  const listItems = ['About', 'Blog', 'Contacts', 'FAG', 'Home', 'Sliders', 'Works']

  return (
    <div className='text-white w-full px-10 py-5 text-xl flex z-10'>
      <div className={classes.briem_hand + ' ' + classes.color_pink + ' flex z-10'}>
        <h5 className='text-#fe004 mr-2 text-2xl'>Chingiz</h5>
        <h5 className='text-white text-2xl'>Topchiyev</h5>
        <p className='text-[10px] ml-2'>&#9426;</p>
      </div>
      <div className='grow flex items-center z-10'>
        <div className='w-[70%] flex justify-center'>
           {listItems.map((item, index) => (
            <li className={classes.robboto500 + ' text-white list-none mr-10 text-sm flex items-center'} key={index}>{item}</li>
           ))}
        </div>
        <div className='w-[30%] flex justify-end'>
        <button className='text-white text-xs border-2 border-white py-1 px-1 rounded-full flex items-center justify-center mr-5'>
            <TwitterIcon sx={{fontSize: '15px'}}/>
          </button>
          <button className='text-white text-xs border-2 border-white py-1 px-1 rounded-full flex items-center justify-center mr-5'>
            <InstagramIcon sx={{fontSize: '15px'}}/>
          </button>
          <button className='text-white text-xs border-2 border-white py-1 px-1 rounded-full flex items-center justify-center mr-5'>
            <GitHubIcon sx={{fontSize: '15px'}}/>
          </button>
          <button className='text-white text-xs px-2 py-1 bg-[#fe004a] text-medium'>Let's Connect</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar