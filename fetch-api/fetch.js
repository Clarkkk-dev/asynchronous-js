

//Fetching api using promises
//CRUD operations

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({

//         description: 'Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })
// // .then(response => console.log(response))
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


//fetching api using async and await    


const getAllProducts = async () => {

    try{
        const response = await fetch('https://dummyjson.com/products/')
        const json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error)
    }

}

getAllProducts();