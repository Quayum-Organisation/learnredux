import React, { useEffect, useState } from 'react';

function NbreJoueur(props) {
    const [nbr,setNbr] = useState(1);
    const [liste,setListe] = useState([0]);

    const userListe = ()=>{
        const arraynbr = []
        for (let i = 0; i < nbr; i++) {
           arraynbr.push(i)  
        }

        return arraynbr
    }
    useEffect((nbr) => {
        setListe(userListe());
    }, [])

    const handleNumber=(valeur)=>{
        setNbr(valeur)
        setListe(userListe());
        console.log(liste);
    }
    
    return (
        <div>
            <h3>Veillez bien nous indiqué le nombre de joueur {nbr}</h3>
            <input type="number" name="" id="" min={1} value={nbr} onChange={(e)=>handleNumber(e.target.value)}/>
            { ()=>{for (let i = 0; i < nbr; i++) {
               return ( <>
                <span>Hello</span>
                </>)
                
            }}

            }
        </div>
    );
}

export default NbreJoueur;