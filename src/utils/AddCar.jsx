export function addCar (carr, setCarr, car, count) {
    const hasItem = carr.filter(item => item.product.id === car.id)[0]
 
    if (hasItem) {
        setCarr([...carr.filter(item => item.car.id !== hasItem.car.id), {
            ...hasItem,
            count: hasItem.count + count
        }])
    } else {
        setCarr([...carr, {car, count}])
    }
 }
     