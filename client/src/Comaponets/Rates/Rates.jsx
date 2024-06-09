import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from '@material-ui/lab/Rating'; // Import Rating from @material-ui/lab
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// Define useStyles outside the component
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  },
  emptyStar: {
    color: "white"
  }
}));

const Rates = () => {
  
  const classes = useStyles(); // Use useStyles inside the component
    
  return (
    <div className='flex'>
        <Rating 
          name="size-large" 
          defaultValue={2} 
          size="large" 
          sx={{borderColor: 'white'}}
          emptyIcon={
            <StarBorderIcon fontSize="inherit" className={classes.emptyStar}/>
          }
        />
        <div className='ml-2 flex items-center'>
          <FiberManualRecordIcon sx={{color: 'white', fontSize: '10px', mt: '1px'}}/>
          <p className='text-white ml-1'>1000 rates</p>
        </div>
    </div>
  );
}

export default Rates;
