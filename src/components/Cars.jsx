import React from 'react'
import Car from './Car'

const Cars = ({cars}) => {

    console.log(cars);
    
    return (
        <div>
        {cars.map((car) => (
            <div key={car.id}>
                <Car 
                    thumb={car.attributes.image.data.attributes.url}
                    car={car}
                />
            </div>
        ))}
    </div>
  )
}

export default Cars