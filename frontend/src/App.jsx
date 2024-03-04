import { useState } from 'react'
import './app.scss'
import Semester2 from './component/Semester2'
import Semester1 from './component/Semester1'
import Semester3 from './component/Semester3'
import Semester4 from './component/Semester4'
import Semester5 from './component/Semester5'
import Semester6 from './component/Semester6'

import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

export default function App () {
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [cgpa, setCGPA] = useState('')
  const [percentage, setPercentage] = useState('')
  const [visible, SetVisible] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleCallback = (data1, data2) => {
    setData1(preve => [...preve, data1])

    setData2(preve => [...preve, data2])
  }

  const handleCgpa = () => {
    let netGpa = data1.reduce((a, initialvalue) => a + initialvalue)
    console.log(netGpa)
    let totalCredit = data2.reduce((a, initialvalue) => a + initialvalue)
    console.log(totalCredit)

    setCGPA(netGpa / totalCredit)

    openModal()
    SetVisible(true)
  }

  const handlePercentage =()=>{
    setPercentage(cgpa * 9.5)
  }

  return (
    <div className='cgpaContainer'>
      <div className='h3wrapper'>
        <p>
          "Enter the grade point and credit for one subject, then click the
          'Submit' button. Repeat this process until all subjects are completed.
          After the last submission, Click the 'Finish' button to complete the
          semester."
        </p>
      </div>
      <div className='semesterWrapper'>
        <div className='semester1'>
          <Semester1 handleCallback={handleCallback} />
          <Semester2 handleCallback={handleCallback} />
          <Semester3 handleCallback={handleCallback} />
        </div>
        <div className='semester2'>
          <Semester4 handleCallback={handleCallback} />
          <Semester5 handleCallback={handleCallback} />
          <Semester6 handleCallback={handleCallback} />
        </div>
      </div>

      <div className='btnConatiner'>
        {!visible ? (
          <button onClick={handleCgpa}>submit data</button>
        ) : (
          <>
          <h2 style={{ color: 'orange' }}>
            {cgpa >= 8
              ? `${cgpa} Congratulations! You got First Class with distinction.`
              : cgpa >= 6
              ? `${cgpa} Congratulations! You got First Class`
              : cgpa >= 4
              ? `${cgpa} You got Second Class`
              : 'You need to improve'}
          </h2>
          
          </>
        )}
      </div>

      <div className='modalWrapper'>
        {/* <button onClick={openModal}>Open modal</button> */}
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          center
          styles={{
            modal: {
              border: '1px solid orange',
              borderRadius: '5px',
              textAlign: 'center'
            }
          }}
        >
          <h2 style={{ paddingTop: '20px', color: 'orange' }}>
            {' '}
            <b>
              {cgpa >= 8
                ? ` Congratulations! You got First Class with distinction.`
                : cgpa >= 6
                ? ` Congratulations! You got First Class`
                : cgpa >= 4
                ? ` You got Second Class`
                : 'You need to improve'}
            </b>
          </h2>
          <h1 style={{ color: 'rebeccapurple' }}>
            {cgpa >= 8
              ? `${cgpa} `
              : cgpa >= 6
              ? `${cgpa}`
              : cgpa >= 4
              ? `${cgpa} `
              : 'You need to improve'}
              <br />
              {percentage && percentage  } {percentage && "%"}
          </h1>
          <a onClick={handlePercentage} style={{color:'blue', cursor:'pointer' }}>Click to convert percentage</a>
        </Modal>
      </div>
    </div>
  )
}
