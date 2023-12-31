import React from 'react'
import Car from './Car'

const Cars = ({cars}) => {
    
    return (
        <div>
        {cars.map((car) => (
            <div key={car.id}>
                {/* <Car 
                    id={car.id}
                    number={car.attributes.number}
                    tachniche={car.attributes.tachniche}
                    brand={car.attributes.brand}
                    thumb={car.attributes.image.data.attributes.formats.thumbnail.url}
                    car={car}
                /> */}
            </div>
        ))}
    </div>
  )
}

export default Cars