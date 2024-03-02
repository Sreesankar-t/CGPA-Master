import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
export default function Semester1 ({ handleCallback }) {
  const [data1, setData1] = useState({
    grade: null,
    credit: null
  })
  const [ceditTotal, setCreditTotal] = useState([])
  const [total, setTotal] = useState([])
  const [visble, setVisibel] = useState(false)

  const handleChange1 = e => {
    let value = e.target.value.toUpperCase()
    setData1({ ...data1, [e.target.id]: value })
  }
  const handleSubmit = () => {
    if (
      ['S', 'A', 'B', 'C', 'D', 'E'].includes(data1.grade) &&
      !isNaN(data1.credit)
    ) {
      let gradeValue
      switch (data1.grade) {
        case 'S':
          gradeValue = 10
          break
        case 'A':
          gradeValue = 9
          break
        case 'B':
          gradeValue = 8
          break
        case 'C':
          gradeValue = 7
          break
        case 'D':
          gradeValue = 6
          break
        case 'E':
          gradeValue = 5
          break
        default:
          break
      }
      const a = parseInt(gradeValue, 10)
      const b = parseInt(data1.credit, 10)
      const ans = a * b
      setCreditTotal(preve => [...preve, b])
      setTotal(prevTotal => [...prevTotal, ans])
      setData1({
        grade: '',
        credit: ''
      })
    } else {
      alert('enter valid grade or valid cedit data')
    }
  }

  const handleFinish = () => {
    const data1 = total.reduce(
      (acumilator, correntValue) => acumilator + correntValue
    )
    const data2 = ceditTotal.reduce(
      (acumilator, correntValue) => acumilator + correntValue
    )

    handleCallback(data1, data2)
    setVisibel(true)
  }
  return (
    <div className='mainWrapper'>
      <div className='wrapper'>
        {!visble ? (
          <>
            {' '}
            <label htmlFor=''>semester 1</label>
            <input
              id='grade'
              value={data1.grade}
              onChange={handleChange1}
              type='text'
              placeholder='grade '
            />
            <input
              id='credit'
              value={data1.credit}
              onChange={handleChange1}
              type='text'
              placeholder='credit'
            />
            <button onClick={handleSubmit}>submit</button>
            <button onClick={handleFinish}>finish</button>
          </>
        ) : (
          <h3>semester 1 comppeted    <FontAwesomeIcon icon={faSquareCheck} />  </h3> 
          
          
        )}
      </div>
     
    </div>
  )
}
