import * as React from 'react';
import Button from '@mui/material/Button';
import "./App.css"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


export default function App() {
  return (
    <div className='main-contain'>
        <div className='main'>
      <h3 className='head'>FREE</h3>
      <p className='price'>$0<lable className='duration'>/month</lable></p><hr></hr>
        {/* <div className='underline'></div> */}
      
         <div className='font'>
         <ul >
      <li className='font'><lable className='icon'><DoneIcon/></lable>Single User</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>5GB Storage</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Unlimited Public Projects</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Community Access</li>
      <li className='font1'><lable className='icon'><CloseIcon/></lable>Unlimited Private Projects</li>
      <li className='font1'><lable className='icon'><CloseIcon/></lable>Free Subdomain</li>
      <li className='font1'><lable className='icon'><CloseIcon/></lable>Monthly Status Reports</li>   
      <li className='font1'><lable className='icon'><CloseIcon/></lable>Dedicated Phone Support</li>
      </ul>
         </div>
      <div className='button'>
        <Button sx={{borderRadius: "40px"}} variant='contained'>BUTTON</Button>
        </div> 
    </div>
    <div className='main'>
      <h3 className='head'>PLUS</h3>
      <p className='price'>$9<lable className='duration'>/month</lable></p><hr></hr>
        {/* <div className='underline'></div> */}
      
         <div className='font'>
         <ul >
      <li className='font' ><lable className='icon'><DoneIcon/></lable><b>5 User</b></li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>50GB Storage</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Unlimited Public Projects</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Community Access</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Unlimited Private Projects</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Free Subdomain</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Monthly Status Reports</li>   
      <li className='font1'><lable className='icon'><CloseIcon/></lable>Dedicated Phone Support</li>
      </ul>
         </div>
      <div className='button'>
        <Button sx={{borderRadius: "40px"}} variant='contained'>BUTTON</Button>
        </div> 
    </div>    
    <div className='main'>
      <h3 className='head'>PRO</h3>
      <p className='price'>$49<lable className='duration'>/month</lable></p><hr></hr>
        {/* <div className='underline'></div> */}
      
         <div className='font'>
         <ul >
      <li className='font'><lable className='icon'><DoneIcon/></lable><b>Ultimate User</b></li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>150GB Storage</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Unlimited Public Projects</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Community Access</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Unlimited Private Projects</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable><b>Ultimate</b> Free Subdomain</li>
      <li className='font'><lable className='icon'><DoneIcon/></lable>Monthly Status Reports</li>   
      <li className='font'><lable className='icon'><DoneIcon/></lable>Dedicated Phone Support</li>
      </ul>
         </div>
      <div className='button'>
        <Button sx={{borderRadius: "40px"}} variant='contained'>BUTTON</Button>
        </div> 
    </div>





    </div>
  );
}


