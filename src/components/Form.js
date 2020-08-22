import React from 'react';
import css from './installment.module.css';

export default function Form({ children }) {
return <div className={`row ${css.inputDiv}`}>{children}</div>
}
