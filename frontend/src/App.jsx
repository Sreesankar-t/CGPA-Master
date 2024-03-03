import  { useState } from 'react'
import './app.scss'
import Semester2 from './component/Semester2'
import Semester1 from './component/Semester1'
import Semester3 from './component/Semester3'
import Semester4 from './component/Semester4'
import Semester5 from './component/Semester5'
import Semester6 from './component/Semester6'


export default function App() {
  const [data1,setData1] = useState([])
  const [data2,setData2] = useState([])
  const [cgpa,setCGPA] = useState('')

 const handleCallback = (data1,data2)=>{

    setData1(preve => [...preve,data1])

    setData2(preve => [...preve,data2])
 }   



 const handleCgpa =()=>{
    let netGpa = data1.reduce((a,initialvalue)=>(
        a + initialvalue
    ))
console.log(netGpa);
    let totalCredit = data2.reduce((a,initialvalue)=>(
        a + initialvalue
    ))
    console.log(totalCredit);
 
    setCGPA(netGpa / totalCredit)
 }


  return (
 <div className='cgpaContainer'>
  <div className='h3wrapper'>
    <p>"Enter the grade point and credit for one subject, then click the 'Submit' button. Repeat this process until all subjects are completed. After the last submission, Click the 'Finish' button to complete the semester."</p>

  </div>
  <div className='semesterWrapper'>

  <div className='semester1'>
<Semester1 handleCallback={handleCallback}/>
<Semester2 handleCallback={handleCallback}/>
<Semester3 handleCallback={handleCallback}/>

  </div>
  <div className='semester2'>

<Semester4 handleCallback={handleCallback}/>
<Semester5 handleCallback={handleCallback}/>
<Semester6 handleCallback={handleCallback}/>

  </div>
  </div>

<div className='btnConatiner'>
    <button onClick={handleCgpa}>submit data</button>
</div>

<h1>{cgpa}</h1>
 </div>
  )
}
