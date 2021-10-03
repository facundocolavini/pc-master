var products_data = [];

let getProducts = () => {
    return $.ajax({
        type: 'GET',
        //ANTES DE ENVIAR LE SACAMOS LA CLASE HIDDEN A LA ANIMACION DE CARGA
        url: "products.json",
        dataType: "json",
        success: function (response) {
            for (const iterator of response) {
                products_data.push(iterator)
            }
        },

    });
}
