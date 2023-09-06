
import './App.css'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';




function App() {

  var data={
    "free":{
    "plan":"FREE",
    "price":"$0/month",
    "user":"Single User",
    "storage":"50GB Storage",
    "project":"Unlimited Public Projects",
    "Access":"Community Access",
    "pu_project":"Unlimited Private Projects",
    "support":"DEdicated Phone Support",
    "domain":"Free subdomain",
    "report":"Monthly Status Report",
  },
  "plus":{
  "plan":"PLUS",
  "price":"$9/month",
  "user":"5 User",
  },
  "pro":{
  "plan":"PRO",
  "price":"$49/month",
  "user":"Ultimate User",

  }
  }
  return (
  <div className='main-con'>

    <div className='small-con'>  
    <h4 className='close'>{data.free.plan}</h4>
    <h1>{data.free.price}</h1><hr></hr>
    <p className='done'><DoneIcon />{data.free.user}</p>
    <p className='done'><DoneIcon />{data.free.storage}</p>
    <p className='done'><DoneIcon />{data.free.project}</p>
    <p className='done'><DoneIcon />{data.free.Access}</p>
    <p className='close'><CloseIcon/>{data.free.pu_project}</p>
    <p className='close'><CloseIcon/>{data.free.support}</p>
    <p className='close'><CloseIcon/>{data.free.domain}</p>
    <p className='close'><CloseIcon/>{data.free.report}</p>
  <div className='button'> <button>BUTTON</button></div>
    </div>
    <div className='small-con'>  
    <h4 className='close'>{data.plus.plan}</h4>
    <h1>{data.plus.price}</h1><hr></hr>
    <p className='done'><DoneIcon />{data.plus.user}</p>
    <p className='done'><DoneIcon />{data.free.storage}</p>
    <p className='done'><DoneIcon />{data.free.project}</p>
    <p className='done'><DoneIcon />{data.free.Access}</p>
    <p className='done'><DoneIcon/>{data.free.pu_project}</p>
    <p className='done'><DoneIcon/>{data.free.support}</p>
    <p className='done'><DoneIcon/>{data.free.domain}</p>
    <p className='close'><CloseIcon/>{data.free.report}</p>
  <div className='button'> <button>BUTTON</button></div>
    </div>
    <div className='small-con'>  
    <h4 className='close'>{data.pro.plan}</h4>
    <h1>{data.pro.price}</h1><hr></hr>
    <p className='done'><DoneIcon />{data.pro.user}</p>
    <p className='done'><DoneIcon />{data.free.storage}</p>
    <p className='done'><DoneIcon />{data.free.project}</p>
    <p className='done'><DoneIcon />{data.free.Access}</p>
    <p className='done'><DoneIcon/>{data.free.pu_project}</p>
    <p className='done'><DoneIcon/>{data.free.support}</p>
    <p className='done'><DoneIcon/>{data.free.domain}</p>
    <p className='done'><DoneIcon/>{data.free.report}</p>
  <div className='button'> <button>BUTTON</button></div>
    </div>



</div>

  )
}

export default App
