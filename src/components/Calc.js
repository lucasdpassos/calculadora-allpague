import React, { useState, useEffect } from 'react';
import Form from './Form';
import Installments from './Installments';
import css from './installment.module.css';


export default function App() {
  const [initialValue, setInitialValue] = useState(0);
  const [percentageValue, setPercentageValue] = useState(0);
  const [installmentValue, setInstallmentValue] = useState(1);
  const [allValue, setAllValue] = useState([]);

  useEffect(() => {
    const getValue = () => {
      setAllValue([]);
      const value = [];

      for (let i = 1; i <= installmentValue; i++) {
        const amount = (initialValue* (1 + percentageValue) ** i).toFixed(2);
        const percentDifference = ((amount / initialValue- 1) *100).toFixed(2);
        const valueDifference = (amount - initialValue).toFixed(2);
        const objectValue = {
          id: i,
          valueDifference: valueDifference,
          amount: amount,
          percentageAppreciation: percentDifference,
        };
        value.push(objectValue);
      }

      setAllValue(value);
    }
    getValue();
  }, [initialValue, percentageValue, installmentValue]);

  const handleInputMoney = ({ target }) => {
    if (Number(target.value) < 99999999) {
      const initialValue= Number(target.value);
      setInitialValue(initialValue);
    }
  };

  const handleInputPercentage = ({ target }) => {
    if (Number(target.value) <= 12 && Number(target.value) >= -12) {
      const targetValue = Number(target.value);

      const percentageValue = targetValue / 100;

      setPercentageValue(percentageValue);
    }
  };

  const handleInputInstallment = ({ target }) => {
    if (Number(target.value) <= 36) {
      const installmentValue = Number(target.value);
      setInstallmentValue(installmentValue);
    }
  };

  

  return (
   <div className={`container ${css.container}`}>
      <h2 className={` ${css.h2}`}>Calculadora de parcelas Allpague
      </h2>

      <Form>
          <div className="input-field col s12 m12 14">
        
            <label
            style={{ fontSize: "1.5rem"}}
            htmlFor="inputValueCapital"
            className="active">
              Capital Inicial:
            </label>
          </div>
          <input
            style={{ fontSize: '20pt' }}
            id="inputValueCapital"
            type="number"
            step="100"
            min="100"
            max="100000000"
            defaultValue="0"
            autoFocus
            onChange={handleInputMoney}
          />

         <div className="input-field col s12 m8 l4">
           <div>
              <label
                style={{ fontSize: '20pt' }}
                htmlFor="inputPercentage"
                className="active">
                Taxa de juros mensal:
              </label>
            </div>
          </div>
          <input 
           style={{ fontSize: "1.5rem" }}
           id= "inputPercentage"
           type="number"
           min="-12"
           max="12"
           step="0.1"
           defaultValue="0"
           onChange={handleInputPercentage}/>
         
          <div className="input-field col s12 m4 14">
            <div>
               <label 
                  style={{ fontSize: "1.5rem" }}
                  htmlFor="inputInstallment"
                  className="active">

                    Período (meses):
                </label>
             </div>
              <input 
               style={{ fontSize: "1.5rem" }}
               id="inputInstallment"
               type="number"
               min="1"
               max="36"
               defaultValue="1"
               onChange={handleInputInstallment}/>
           </div>
       </Form>

       <Installments allValue={allValue}/>
    </div>
  );
}
