// import './App.css';
// import { useFormik } from 'formik';
import { useState } from "react";
import "./data";
// import * as yup from "yup";
import { Number, Symbol, lowerCaseLetters, upperCaseLetters } from "./data";
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
  };

  const increase = (e) => {
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
    <div className=" bg-slate-800 text-black flex justify-center items-center w-full h-screen ">
      <div className="generator bg-white p-7 rounded-2xl shadow-2xl shadow-slate-200 ">
        <h2 className="text-sky-300 font-bold text-2xl py-2">Password Generator</h2>
        <form action="" className="flex flex-col py-2 ">
         <div className="flex justify-between">
          <label htmlFor="Uppercase">Uppercase</label>
          <input
            type="checkbox"
            name="Uppercase"
            value="Uppercase"
            checked={isUppercase}
            onChange={(e) => setIsUppercase(e.target.checked)}
            id="Uppercase"
            required
          /></div>
          
<div className="flex justify-between">
          <label htmlFor="Lowercase">Lowercase</label>
          <input
            type="checkbox"
            name="Lowercase"
            value="Lowercase"
            // required
            checked={isLowercase}
            onChange={(e) => setIsLowercase(e.target.checked)}
            id=""
          /></div>
         <div className="flex justify-between">
          <label htmlFor="Number">Number</label>
          <input
            type="checkbox"
            name="Number"
            value="Number"
            // required
            checked={isNumber}
            onChange={(e) => setIsNumber(e.target.checked)}
            id="Number"
          /></div>
         <div className="flex justify-between">
          <label htmlFor="Symbol">Symbol</label>
          <input
            type="checkbox"
            name="Symbol"
            value="Symbol"
            // required
            checked={isSymbol}
            onChange={(e) => setIsSymbol(e.target.checked)}
            id="Symbol"
          />
          </div>
          <div className="lenght flex justify-between" required>
            <div className=""><span className="">Lenght</span></div>
            <div className=" "><button onClick={decrease} className="px-2">-</button>
            {counter}
            <button onClick={increase} className="px-2">+</button>
          </div></div>

          
          <h4 className="password px-2 py-4">{password}</h4>
          
          <button type="submit" onClick={Generator} className="py-2 bg-sky-500 hover:bg-sky-700 duration-150 text-yellow-100 rounded-2xl" >
            Generate Password
          </button>
        </form>
      </div>

      <footer></footer>
    </div>
  );
}
export default App;
