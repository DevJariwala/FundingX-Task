import './App.css';
import { useState } from 'react';
import {TextField,Button} from '@material-ui/core'
import validator from 'validator'
function App() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [projectUrl, setProjectUrl] = useState('')
  const [about, setAbout] = useState('')
  const [allInformation, setallInformation] = useState({name:'',email:'',phoneNo:'',projectUrl:'',about:''})

  const [errorName, seterrorName] = useState('')
  const [errorEmail, seterrorEmail] = useState('')
  const [errorPhone, seterrorPhone] = useState('')
  const [errorUrl, seterrorUrl] = useState('')
  const [errorAbout, seterrorAbout] = useState('')

  const getName=(e)=>{
    if(e.target.value.length<1){
      seterrorName("Enter Name")
    }else{
      seterrorName('')
    }
    setName(e.target.value)
  }
  
  const getEmail=(e)=>{
    let emailID=e.target.value
    if(!validator.isEmail(emailID)){
      seterrorEmail("Enter Email")
    }else{
      seterrorEmail('')
    }
    setEmail(e.target.value)
  }
  const getPhoneNo=(e)=>{
    let phoneNumber = e.target.value
    if(validator.isMobilePhone(phoneNumber) && e.target.value.length===10){
      seterrorPhone('')
    }else{
      seterrorPhone("Enter Valid Phone No")
    }
    setPhoneNo(e.target.value)
  }
  const getProjectUrl=(e)=>{
    let url=e.target.value
    if(!validator.isURL(url)){
      seterrorUrl("Enter project url")
    }else{
      seterrorUrl('')
    }
   setProjectUrl(e.target.value)
  }
  const getAbout=(e)=>{
    if(e.target.value.length<5){
      seterrorAbout("Enter Your Answer")
    }else{
      seterrorAbout('')
    }
    setAbout(e.target.value)
  }
  
  const buttonPressed=()=>{
    let errorFound=false

    if(errorName.length>1 || name.length===0){
      errorFound=true
      seterrorName('Enter Name')
    }
    if(errorEmail.length>1 || email.length===0){
      errorFound=true
      seterrorEmail('Enter Email')
    }
    if(errorPhone.length>1 || phoneNo.length===0){
      errorFound=true
      seterrorPhone('Enter valid Phone Number')
    }
    if(errorUrl.length>1 || projectUrl.length===0){
      errorFound=true
      seterrorUrl('Enter Project Url')
    }
    if(errorAbout.length>1 || about.length===0){
      errorFound=true
      seterrorAbout('Enter Your Answer')
    }


    if(errorFound===false){
      allInformation.name=name
      allInformation.email=email
      allInformation.phoneNo=phoneNo
      allInformation.projectUrl=projectUrl
      allInformation.about=about
      console.log(allInformation)
      prompt("Your Form is Submited","Thank You")
    }
  }

  return (
    <div className="App">
      <div className="title">
          <img className="title-img" src='https://lh5.googleusercontent.com/_zWaCepfy4LZ-T_AbIr_fpYqFrcaWtS1dJOEhNTGUs4jV1kJFNu8Wu7XdIzRO45JpgIVu9P1LRD-EQFB8aKocj36DUYkKFmtsXhhj431-JoOztZ-PzYvwlsSswx-wktsbw=w6940' alt="fundigx"/>
      </div>
      

       <div className="content">
         <div className="top-border"></div>
         <h1>Web Development Task</h1>
         <p>Welcome to fundingX</p>
         <p>To become a part of our Web Development Team, please complete the task before the deadline mentioned.</p>
         <p>No task submissions will be entertained after the deadline </p>
         <p>TASK-</p>
         <p>Replicate this Google form which you are looking at.</p>
         <p>You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.</p>
         <p>If you like, you may enhance the looks of the page according to you.</p>
         <p>Host this page on GitHub pages or any hosting service you like and paste link in the form.</p>
         <p>The tasks given are for understanding how well you are equipped with the skills.</p>
         <p>Deadline for submission- July 31, 4:00 p.m.</p>
         <p className="red">*Required</p>
       </div>

       
       <div className="form2">
          <form>
              <div className="name">
                  <p>Name * </p>
                  <div className="input">
                      <TextField onChange={getName} type="text" className="input" name="name"  placeholder="Your answer" required error={Boolean(errorName.length>1)} helperText={errorName} />
                  </div>
              </div>
              <div className="email">
                  <p>Email id * </p>
                  <div className="input">
                      <TextField onChange={getEmail} type="email" className="input" placeholder="Enter Email" required error={Boolean(errorEmail.length>1)} helperText={errorEmail} />
                  </div>
              </div>
              <div className="phone">
                  <p>Phone No. * </p>
                  <div className="input">
                      <TextField onChange={getPhoneNo} type="text" className="input" placeholder="Your answer" required error={Boolean(errorPhone.length>1)} helperText={errorPhone} />
                  </div>
              </div>
              <div className="pageUrl">
                  <p>Page Url * </p>
                  <div className="input">
                      <TextField onChange={getProjectUrl} type="text" className="input" placeholder="Your answer" required error={Boolean(errorUrl.length>1)} helperText={errorUrl} />
                  </div>
              </div>
              <div className="about">
                  <p>What is FundingX about * </p>
                  <p className="small">Just a one liner as to what you think we do.</p>
                  <div className="input">
                      <TextField onChange={getAbout} type="text" className="input" placeholder="Your answer" required error={Boolean(errorAbout.length>1)} helperText={errorAbout} />
                  </div>
              </div>
          </form>
          <div className="submit">
            <Button onClick={buttonPressed} type="submit" className="button" variant="contained" color="secondary">
                  Submit
            </Button>
          </div>
          <div className="extra_small">
              Never submit passwords through Google Forms.
          </div>
       </div>
       <div className="extra_small">
          This content is neither created nor endorsed by Google. <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScENQ4WJNUKPlof7pvMuqker8VmbTTYXCNByBX-SQrnBdzPFQ/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLScENQ4WJNUKPlof7pvMuqker8VmbTTYXCNByBX-SQrnBdzPFQ/viewform">Report Abuse</a>  - <a href="https://policies.google.com/terms">Terms of Service</a>  - <a href="https://policies.google.com/privacy">Privacy Policy</a> 
       </div>
      
       <div className="google__form">
         <a href="https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms">Google Forms</a>
       </div>

    </div>
  );
}

export default App;
