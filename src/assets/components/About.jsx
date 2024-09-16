import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <>
      <Navbar />
      <div className='about'>
        <h1>About me</h1>
        <hr />
        <div>
          <img src="https://im.whatshot.in/img/2021/Apr/istock-1045038848-cropped-1619508566.jpg" alt="" />
          <h2>Front End Devloper</h2>

          <p>our front-end developer resume must highlight <br /> your proficiency in HTML, CSS, and JavaScript. <br /> These are the foundational languages of front-end development,<br /> demonstrating your ability to create interactive and well-structured websites. <br />
            Include examples of responsive design projects to showcase your ability to create <br /> seamless user experiences across devices. Employers value developers <br />who can ensure their websites look and function beautifully on any screen.</p>

        </div>
        <div className='about2'>

          <h2>
            Personal information
          </h2>
          <p>
            Namr=Amit kumar

          </p>
          <br />
          <p>
            Age =22
          </p>
          <br />
          <p>
            Email =amitk13077@gmail.com
          </p>
          <br />
          <p>Contact no =9588534263</p>




        </div>
      </div>
    </>
  )
}

export default About
