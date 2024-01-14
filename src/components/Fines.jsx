import React from 'react'
import Fine from './Fine'
import { useParams } from 'react-router-dom'




export default function Fines({fines}) {



  return (
    <div  style={{overflow: "scroll", height: "700px"}}>
    {fines && fines.map(fine => (
        <div key={fine.id} >
            <Fine
                id={fine.id}
                modda={fine.attributes.modda}
                summa={fine.attributes.summa}
                tavsif={fine.attributes.Tavsif}
                address={fine.attributes.address}
            />
        </div>
    ))}
</div>
  )
}