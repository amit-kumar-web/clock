import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div className='information'>
       <marquee behavior="alternate" direction="right"> <h1> Hello, I'm Amit kumar.
       <br />Front End Developer
       </h1>
       </marquee>
   
        <div className='btn'>
            <button><Link to={'mailto:work.amitkumardev@gmail.com'}> Hire Me</Link></button>
            <button> <Link to={"https://drive.google.com/file/d/1-9meIaan1r3OobcXrS-nJ9ZQEqzpLAYb/view?usp=drivesdk"} > Resume </Link></button>
        </div>
        <div className='icon'>
          <a href="https://www.linkedin.com/in/amit-kumar-9457a431b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>
       <a href=""></a>
        <img width="48" height="40" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvvXZH5i33MsyxBuhd1hJQLPhUXn28KP0ddBrVomUgtpO9B4q1kzWPByeszeSgShOrVUhzPp2En3XtoyPusMNRyupKWQFay3J-srM8MEcs8qTtbmq2dzbWx9a5LKkJmocW_bsOSthPBhzus9EuDWB7snhz2z3u_ycKp1mhC6tYe35Gq6Tad5EAeO9h5BvL/w1200-h630-p-k-no-nu/github.png" alt="facebook"/>

        <a href="https://wa.me/qr/J547FYLJCIQTM1">
        <img width="48" height="48  " src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
        </a>
        </div>
        </div>
      
    </div>
  )
}

export default Home
