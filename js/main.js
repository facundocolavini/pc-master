//Variables 
const products = [];
const shoppingCart = [];
let filters_checkboxs = [];
/* 

let getProducts = () => {
    return $.get(url, function(response, state) {
        
        if (state != "success") {
            alert("Todo se daño :'( ");
        } else {
            for (const iterator of response) {
                productos_data.push(iterator)
            }
        }
    });
} */

let products_data = [];
let url = 'js/products.json';

/* PETICIONES http */

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


/* let $products = document.querySelector('.products');
let cardProduct = document.getElementsByClassName('.container-card');
let checkboxs = document.querySelectorAll('.filter-chkbox');
let legends = document.querySelectorAll(".filter-legend");
let lists = document.getElementsByClassName("filter-list");
let body = document.querySelector("body");
 */
let searchBar = document.querySelector('.input-search ');

//Template JQuery Estructura HTML

let $container = $(`<div class="container"></div>`);
let $row = $(`<div class="row"></div>`);
let $header = $(`            
            <header class="col-lg-12" > 
            <nav class="nav  pr-0 pl-0">
                <a  href="index.html"><img src="assets/images/brand.png" alt="logo image"></a>
                <div class="bar-search">
                    <span class="icon-search"><i class="fas fa-search"></i></span>
                    <input class="input-search " type="search" placeholder="Buscar producto.."> </input>
                </div>
                <button class="btn-cart" type="button"><span><i class="fas fa-cart-arrow-down"></i> <i class="fas fa-arrow-right"></i></span></button>
            </nav>
            </header>
        `);
let $aside = $(`

                <aside class="filter col-lg-3">    
                    
                    <form action="#" class="filter-form">
                        <fieldset  class="filter-fieldset">
                            <legend id="cat-motherboards" class="filter-legend ">
                                <div class="filter-title">
                                    <span>Motherboards</span>
                                </div>    
                            </legend>
                            <ul id="motherboard" class="filter-list">
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="AMD Chipset" value="AMD Chipset">
                                    <label class="filter-label" for="AMD Chipset">AMD Chipset</label>
                                </li>
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="Intel Chipset" type="value" value="Intel Chipset">
                                    <label class="filter-label" for="Intel Chipset">Intel Chipset</label>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset class="filter-fieldset">
                            <legend id="cat-graphics" class="filter-legend">
                                <div class="filter-title">
                                    <span>Gráficas</span>
                                </div>    
                            </legend>
                            <ul id="graphics" class="filter-list ">
                                <li class="filter-item ">
                                    <input class="filter-chkbox" type="checkbox"  id="AMD GPU" value="AMD GPU">
                                    <label class="filter-label" for="AMD GPU">AMD GPU</label>
                                </li>
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="NVIDIA GPU" value="NVIDIA GPU">
                                    <label class="filter-label" for="NVIDIA GPU">NVIDIA GPU</label>
                                </li>

                            </ul>
                        </fieldset>
                        <fieldset  class="filter-fieldset">
                            <legend id="cat-processors" class="filter-legend">
                                <div class="filter-title">
                                    <span>Procesadores</span>
                                </div>    
                            </legend>
                            <ul  id="processors" class="filter-list ">
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="AMD" name="checkbox" value="AMD">
                                    <label class="filter-label" for="AMD">AMD</label>
                                </li>
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="Intel" name="checkbox" value="Intel">
                                    <label class="filter-label" for="Intel">Intel</label>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset class="filter-fieldset">
                            <legend id="cat-ram" class="filter-legend ">
                                <div class="filter-title">
                                    <span>Ram</span>
                                </div>    
                            </legend>
                            <ul id="ram" class="filter-list">
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="DDR4 8GB" value="DDR4 8GB">
                                    <label class="filter-label" for="DDR4 8GB">DDR4 8GB</label>
                                </li>
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="DDR4 16GB" value="DDR4 16GB">
                                    <label class="filter-label" for="DDR4 16GB">DDR4 16GB</label>
                                </li>
                            </ul>
                        </fieldset>
                        <div class="filter-title--price ">
                            <span>Precio</span>
                            <div class="controller-price">
                                <input class="input-price--min" type="text" placeholder="Mínimo">
                                -
                                <input class="input-price--max" type="text" placeholder="Máximo">
                                <button class="btn-price" type="button" form="reset"><span><i class="fas fa-chevron-right"></i></span> </button>
                            </div>
                        </div>    
                    </form>
                </aside>
            `);

let $main = $(`
                <main class="main col-lg-8">
                
                </main>
            `);

let $products = $(`
                    <div class="products row">
                    
                    </div>
                `);


let $productsNotFound = $(`<span class="title-notfound">No se encontraron productos...</span>`);



/* Clases */
class Stock {
    constructor(id,name,category,price,quantity,model){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.model = model;
    }
}

//Productos
/* products.push(new Stock(1,"PRODUCTO 1","motherboard",500000,10,"INTEL-CHIPSET"));
products.push(new Stock(2,"PRODUCTO 2","motherboard",230000,20,"INTEL-CHIPSET"));
products.push(new Stock(3,"PRODUCTO 3","motherboard",120000,30,"AMD-CHIPSET"));
products.push(new Stock(4,"PRODUCTO 4","motherboard",170000,15,"AMD-CHIPSET"));
products.push(new Stock(5,"PRODUCTO 5","motherboard",90000,22,"INTEL-CHIPSET"));
products.push(new Stock(6,"PRODUCTO 6","motherboard",30000,5,"INTEL-CHIPSET"));
products.push(new Stock(7,"PRODUCTO 7","graphics",30000,5,"AMD-GPU"));
products.push(new Stock(8,"PRODUCTO 8","graphics",30000,5,"NVIDIA-GPU"));
products.push(new Stock(8,"PRODUCTO 9","graphics",30000,5,"AMD-GPU")); */


//Cargar del DOM de la pagina
$(  ()=>{
    $.when(getProducts()).done( () => {
        $products.html('')
        for(const prod of products_data){   
         
            products.push(new Stock(prod.id,prod.name,prod.category,prod.price,prod.quantity,prod.model))
            createProduct(prod,$products);
        }  
    })
    console.log( products,"PROD");
    console.log( "El DOM esta listo");
        $('body').prepend($container);
        $('.container').prepend($row);
        $('.container .row').prepend($header);
        $('.container .row').append($aside);
        $('.container .row').append($main);
        $('main').prepend($products);
        
 
        //Funciones 
        let createProduct =  (product, nodeParent) => {
            //TOMAMOS EL NOMBRE Y LE SACAMOS LOS ESPACIOS PARA USARLO EN EL SRC DE LA FOTO */
            let imageName = product.name.replaceAll(' ', '_')
            //ESTRUCTURA BASICA DE PRODUCTO
            let $product = $(`
                <div data-model=${product.id} class="product col-md-4 col-lg-4">
                    <div class="container-card">
                        <img class="card-image" src="assets/images/${imageName}.png" alt="image product">
                        <h2 class="title">${product.name}</h2>
                        <div class="card-price">
                            <span class="title">$${product.price}</span>
                            <button data-id=${product.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                        </div>
                    </div> 
                </div> 
            `
            );
            $(nodeParent).append($product)
          }
        //Filter 

        const listCheckboxs = $('.filter-list');
        console.log(listCheckboxs[0].id)
            listCheckboxs.each((checkbox)=>{      
                $(`#${listCheckboxs[checkbox].id} `).on('click',function(e) {
                    $("div .product").hide();
                    $(`#${listCheckboxs[checkbox].id} :checkbox:checked`).each(function(e) {
                       
                        let childs = $(this).children(":input")
                        let model = childs.prevObject[0].id.replaceAll(' ','-').toUpperCase();
                        console.log( model);

                        let fill = products.filter(prodFill=> prodFill.model === model)
                        console.log(childs,'sdsd')
                        console.log(fill,'sdsd')
                
                        $('.product').remove();
                        for (const productFill of fill) {
                            createProduct(productFill, $('.products').fadeIn('slow'))
                        }
                        $('.product').fadeIn('fast').show();                        
                    });
                });
            })
            
        //Animation
        function rotate(){
            $(`.filter-legend`).on('click',(e) => {
                const t = e.target;
             
                setTimeout(()=> {
                        $(`#${t.id}`)[0].classList.add('filter-legend--down');
                    },
                30);
                if(t.classList.contains("filter-legend--down")){
                        setTimeout(()=> {
                            $(`#${t.id}`)[0].classList.remove('filter-legend--down');
                            $(`#${t.id}`)[0].classList.add('filter-legend--up');
                        }
                    ,30);
                }     
            });
        }
        function slideCategory(){
            $('.filter-legend').on('click',(e) => {
                $(`#${e.target.parentElement.childNodes[3].id}`).slideToggle('fast');
            })
        }

        rotate();
        slideCategory();     
        //Buscador 
        $('.input-search').keyup((e) =>{
            const searchString = e.target.value.toUpperCase();

            const searchProd= products.filter((prod)=>{
                return (
                    prod.name.includes(searchString) 
                )
            })
            
            if(searchProd.length === 0){
                $('.product').remove();
                $products.prepend($productsNotFound);
            }else{
                $('.product').remove();
                $('.title-notfound').remove();
                for (const productFind of searchProd) {
                    console.log(productFind.name.indexOf(searchString),'A VER')
                    console.log(productFind)
                    createProduct(productFind, $('.products'))
                }
            }
        })

        function main (products){
            if(products.length > 1){
                for(product of products){
                    $('.title-notfound').remove();
                    createProduct(product,$products);
                }
            }   
            else{
                $products.prepend($productsNotFound);
            }
        }
        main(products);
});

