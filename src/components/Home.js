import React, { useState } from 'react';
import css from './installment.module.css';
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Calc from '../components/Calc'
  

export default function Home() {
   
  
  const [formVisible, setFormVisible] = useState(false)  

 

  return (
      <Router>
   <div  className={`container ${css.container}`}>
   
    <FormHolder  >
      <Text1>Seu nome:</Text1>
      <NameInput disabled={formVisible} placeholder="João da Silva" />
      <Text1>E-mail:</Text1>
      <MailInput disabled={formVisible} placeholder="abc@allpague.com" />
      <Text1>Telefone:</Text1>
      <PhoneInput disabled={formVisible} placeholder="## #########" />

      <Submit1 disabled={formVisible} onClick={() => {setFormVisible(!formVisible)}} ><Link to="/calc">Abrir Calculadora</Link></Submit1>
      </FormHolder>
  
    </div>

    <Switch>
          <Route path="/calc">
            <Calc />
          </Route>       
         
        </Switch>
    </Router>


  );
}


export const FormHolder = styled.div`   
    display:flex;
    align-items:center;
    flex-direction:column

`

export const NameInput = styled.input`
    background-color:red;
    max-width:500px;
    height:50px;

`
export const MailInput = styled.input`
    background-color:red;
    max-width:300px;
    height:50px;

`
export const PhoneInput = styled.input`
    background-color:red;
    max-width:300px;
    height:50px;

`
export const Text1 = styled.p`
   font-size: 26px;
   color: tomato;

`
export const Submit1 = styled.button`
   background-color:rgba(254, 192, 15);
   width:200px;
   height:50px;  
   border: 1 px solid grey;
   margin-top: 70px;


`

