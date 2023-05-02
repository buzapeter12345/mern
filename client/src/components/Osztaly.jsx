 import React from 'react'
 
 const Osztaly = ({elem}) => {
   return (
    <div className="osztaly">
    <h2>{elem.osztaly}</h2>
    <p>Diákok száma: {elem.diakokSzama}</p>
    <p>Bejáró diákok száma: {elem.bejaroDiakokSzama}</p>
    <img src={elem.kep} alt="kép" />
    </div>
   )
 }
 
 export default Osztaly