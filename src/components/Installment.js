import React from 'react';
import css from './installment.module.css';
import { formatToBrl, formatNumber } from '../helpers/Format';

export default function Installment({ value }) {
  const { id, amount, percentageAppreciation, valueDifference } = value;

  return (
      <div className= "col s12 m6 14">
         <div className={`card-panel hoverable responsive ${css.card}`}>
           <div className={`hoverable responsive ${css.id}`}>{id}</div>

           <div>
             <p 
              className={` horevable responsive ${css.p1}`}
              style={valueDifference < 0 ? { color: "#FF0000"}: { color: "#008000"}}>
                {formatToBrl(Number(amount))}
              </p>

              {valueDifference > 0 ? (
                <p 
                 className={`hoverable responsive ${css.p2}`}
                 style={{ color: "#008000"}}>
                   +{formatToBrl(Number(valueDifference))}
                 </p>
               ) : (
                 <p 
                 className={`hoverable responsive ${css.p2}`}
                 style={{ color: "#FF0000 "}}>
                   {formatToBrl(Number(valueDifference))}
                 </p> 
               )}

                <p 
                 className={`hoverable responsive ${css.p3}`}
                 style={valueDifference < 0 ? { color: "#ffa500" } : { color: "#0000ff"}}>
                   {amount === "0.00"
                     ? `0%`
                     : `${formatNumber(Number(percentageAppreciation))}%`}
                 </p>
           </div>
          </div>
      </div>
  );
}
