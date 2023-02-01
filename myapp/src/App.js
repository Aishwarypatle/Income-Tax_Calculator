import { useState } from "react";


function App() {


  const [incomeValue,setIncomeValue]  = useState('');
  const [ taxValue, setTaxValue] = useState(0);

  const handleChange = (event) => {
    setIncomeValue(event.target.value)
  }

  const calculate =()=>
  {
    if(incomeValue >= 700000)
    {
      if(incomeValue> 700000 && incomeValue <=900000)
      {
        setTaxValue(
          

        )
      }
    }
    else{
      console.log('No tax')
    }
  }

  return (

    <>
      <div className="bg-dark d-flex justify-content-center align-items-center shadow-lg vw-100 vh-100">
        <div className="bg-dark d-grid justify-content-center align-items-center shadow-lg vw-50 vh-50 p-3" 
             style={{border:'2px solid white'}}>
          <h1 className="text-light">Hello</h1>
            <input className="m-3" type='number' value={incomeValue} onChange={handleChange} />
            <button className="btn btn-success" onClick={calculate}>Calculate</button>
            <p className="text-light fw-bold m-auto mt-3">{taxValue}</p>
        </div>
      </div>
    </>
  );
}

export default App;
