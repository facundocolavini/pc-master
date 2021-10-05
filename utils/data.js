let products_data = [];
let url = 'js/products.json';
/* GET PRODUCTS*/

const getProducts = () => {
    return $.get(url, function(response, state) {
        
        if (state != "success") {
            alert("Todo se daño :'( ");
        } else {
            console.log(response)
            for (const iterator of response) {
                products_data.push(iterator)
            }
            
        }
    });
}