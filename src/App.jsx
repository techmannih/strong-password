// import './App.css';
// import { useFormik } from 'formik';
import { useState } from 'react';
import "./data"
// import * as yup from "yup";
import { upperCaseLetters,lowerCaseLetters,Symbol,Number } from './data';
function App() {

  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(6);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  // const formik=useFormik({
  //   initialValues:{
  //     Uppercase:"",
  //     Lowercase:"",
  //     Number:"",
  //     Symbol:"",
  //   },

  //   onSubmit:(values)=>{
  //     console.log(values)
  //   },
  //   validationSchema:yup.object({
  //   //  Username:yup.string()
  //   //  .max(10,"not more than 10")
  //   //  .required("this is required field")
  //   })
  // }

  // )

  // console.log(formik.values)

// console.log(Generator());
  const ticker = () => {
    const character = [];

    if (isUppercase) {
      character.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }

    if (isLowercase) {
      character.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }

    if (isNumber) {
      character.push(Number[Math.floor(Math.random() * Number.length)]);
    }

    if (isSymbol) {
      character.push(Symbol[Math.floor(Math.random() * Symbol.length)]);
    }

    if (character.length === 0) return "";

    return character[Math.floor(Math.random() * character.length)];
  }

  const increase= (e) => {
    e.preventDefault();

    if (counter < 32) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };



  const decrease = (e) => {
    e.preventDefault();

    if (counter > 6) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };


  const Generator = (e) => {
    e.preventDefault();

    let _password = "";

    for (let i = 0; i < counter; i++) {
      _password += ticker();
    }

    setPassword(_password);
  };
  return (
    <div className="container">
      <div className="generator">
      <h2>Password Generator</h2>
      <form  
      action="" className='flex flex-col'>
      {/* <input type="text" name="Username" id=""
      onChange={ formik.handleChange} 
      value={formik.values.Username}
      placeholder='Username'
      onBlur={formik.handleBlur}
      required/> */}
{/* {formik.touched.Username && formik.errors.Username && <p style={{color:"red"}}>{formik.errors.Username}</p>} */}
<br />
<label htmlFor='Uppercase' >Uppercase</label>
      <input type="checkbox"
      name='Uppercase'
      value="Uppercase"
      
      checked={isUppercase}
      onChange={(e) => setIsUppercase(e.target.checked)}
      id='Uppercase'
      // required
      
      />
<br />

<label htmlFor='Lowercase' >Lowercase</label>
      <input type="checkbox"
      name='Lowercase'
      value="Lowercase"
      // required
      checked={isLowercase}
      onChange={(e) => setIsLowercase(e.target.checked)}
      id=''
      />
<br />
<label htmlFor='Number' >Number</label>
      <input type="checkbox"
      name='Number'
      value="Number"
      // required
      checked={isNumber}
      onChange={(e) => setIsNumber(e.target.checked)}
      id='Number'
      />
<br />
<label htmlFor='Symbol' >Symbol</label>
      <input type="checkbox"
      name='Symbol'
      value="Symbol"
      // required
      checked={isSymbol}
      onChange={(e) => setIsSymbol(e.target.checked)}
      id='Symbol'
      />
<br />
      <div className="lenght" required>
        <span>Lenght</span>
        <button onClick={decrease}>-</button>{counter}<button onClick={increase}>+</button>
      </div>

<br />
      <h4 className="password">{password}</h4>
      <br />
      <button  type='submit' onClick={Generator}>Generate Password</button>
      </form>
    </div></div>
  );
} 
export default App;