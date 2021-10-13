


//Variables 
const products = [];
var cartProducts = [];
let products_data = [];
let url = 'js/products.json';


/* PETICIONES http */

/* GET PRODUCTS*/
 const getProducts = () => {
    return $.get(url, function(response, state) {
        
        if (state != "success") {
            console.log("Error")
        } else {
            for (const iterator of response) {
                products_data.push(iterator)
            }
            
        }
    });
}

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
                <button  class="btn-cart" type="button"><span><i class="fas fa-cart-arrow-down"></i> <i class="fas fa-arrow-right"></i></span></button>
            </nav>
            </header>
        `);

let $aside = $(`
                <aside class="filter col-lg-3">    
                    <form  action="#" class="filter-form">
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
                                    <input class="filter-chkbox" type="checkbox" id="AMD processors" name="checkbox" value="AMD processors">
                                    <label class="filter-label" for="AMD processors">AMD</label>
                                </li>
                                <li class="filter-item filter-item--show">
                                    <input class="filter-chkbox" type="checkbox" id="Intel processors" name="checkbox" value="Intel processors">
                                    <label class="filter-label" for="Intel processors">Intel</label>
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
                    </form>
                    <form onsubmit id="form-filter-price" class="filter-form ">
                        <div class="filter-title--price ">
                            <span>Precio</span>
                            <div class="controller-price">
                           
                                <input id="min" class="input-price--min" type="number" placeholder="Mínimo">
                                -
                                <input id="max" class="input-price--max" type="number" placeholder="Máximo">
                                <button class="btn-price" type="submit" ><span><i class="fas fa-chevron-right"></i></span> </button>
                            
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

/* let $cartProducts = $( `                            
                        <div class="cart-products">
                    
                        </div>
                    `) */
let $shoppingCart = $(`
                        <div id="slide" class="cart hide-cart">
                            <button class="btn-cart btn-cart--close" type="button"><span><i class="fas fa-times"></i></span></button>
                            <div class="title-cart">Mi pedido</div> 
                            <div class="cart-products">
                    
                            </div>
                            <button class="btn-cart-buy" type=submit> CONTINUAR </button>
                        </div>

                    `)

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

//Cargar del DOM de la pagina
$(()=>{
        $.when(getProducts()).done( () => {
            $products.html('')
            for(const prod of products_data){   
                products.push(new Stock(prod.id,prod.name,prod.category,prod.price,prod.quantity,prod.model))
                createProduct(prod,$products);
        }  
        })
    console.log( "El DOM esta listo");
        $('body').prepend($container);
        $('.container').prepend($row);
        $('.container .row').prepend($header);
        $('.container .row').append($aside);
        $('.container .row').append($main);
        $('main').prepend($products);
        $('.container').prepend($shoppingCart);

 
        //Funciones 
        let createProduct =  (product, nodeParent) => {
            //TOMAMOS EL NOMBRE Y LE SACAMOS LOS ESPACIOS PARA USARLO EN EL SRC DE LA FOTO */
            let imageName = product.name.replaceAll(' ', '_')
            //ESTRUCTURA BASICA DE PRODUCTO
            let $product = $(`
                    <div id=${product.model} class="product col-md-4 col-lg-4">
                        <div class="container-card">
                            <img class="card-image" src="assets/images/${imageName}.png" alt="image product">
                            <h2 class="title">${product.name}</h2>
                            <div class="card-price">
                                <span class="price title">$${product.price}</span>
                                <button data-id=${product.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                            </div>
                        </div> 
                    </div> 
                `
            )
            $(nodeParent).append($product).delay(100).fadeIn('fast');
          }

        function createCartProduct (productsCart, nodeParent){
            const $productC = productsCart
            .map((prod)=>{
                let imageName = prod.name.replaceAll(' ', '_');
                return (
                            `
                                <div class="cart-product">
                                    <img class="cart-image" src="assets/images/${imageName}.png" alt="image product">
                                    <h3 class="title-product">${prod.name}</h3>
                                    <div class="btns-product">
                                        <button class="btn-add"><i class="fas fa-plus"></i></button>
                                        <div class="counter-quantity" id="counter" type="number">${prod.quantity}</div>
                                        <button class="btn-subtraction"><i class="fas fa-minus"></i></button>
                                        <div class="prod-price" id="counter" >${prod.price}</div>
                                        <button class="btn-delete"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            `
                        );
            }).join('');
               console.log(nodeParent,'CART PRODUCT ARRAY')
       
            nodeParent.innerHTML= $productC;
        }
        function main (products){
            if(products.length > 0){
                for(const product of products){
                    $('.title-notfound').remove();
                    createProduct(product,$products);
                }
            }else{
                $products.prepend($productsNotFound);
            }
        }
        
        //Filter
        const checkboxs =$('.filter-chkbox');
        checkboxs.on('change',function(e) {
            $('.products').html('');
            let inputTarget = e.target;
            let dataModel = inputTarget.value;
            dataModel =dataModel.replaceAll(' ','-').toUpperCase()
            let fill ; 
            if(inputTarget.checked){
                fill = products.filter((prod)=>{
                    return (
                        prod.model.includes(dataModel) 
                    )
                })
                main(fill);

            }else{
                main(products);
            } 
        });
        //Filter Price 
        let $inputMinPrice = $(`#min`);
        let $inputMaxPrice = $(`#max`);
        let $formFilterPrice = $(`#form-filter-price`);

        $('aside').on('submit',$formFilterPrice,(e)=>{
            
            e.preventDefault()
            let min = parseInt( $inputMinPrice.val());
            let max = parseInt($inputMaxPrice.val());
            let rangePrice = [];
            const priceMin=(min)=>{
                return products.filter(pmin => pmin.price <= min);
            }
            const priceMax=(max)=>{
                return products.filter(pmax => pmax.price <= max);
            }
            rangePrice=priceMin(min).concat(priceMax(max))
            const deleteDuplicate = rangePrice.filter((p,index) =>{ return rangePrice.indexOf(p) === index})
            $('.products').html('');
            $('.products')
            main(deleteDuplicate);
        }) 
   
       //Animation Aside
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
                $('.products').html('')
                main(searchProd)
            }
        })

        //Identifier the button sell

        $('.products').on('click' , e=>{
            if(e.target.className ==='btn-cart-product') addToCart(e);
        })
        const addToCart= (e)=>{
            const button = e.target;
            const item = button.closest('.container-card');
            const itemTitle = item.querySelector('.title').textContent;
            const itemPrice = item.querySelector('.price').textContent;
            const itemImg = item.querySelector('.card-image').src;

            const newCartItem={
                name: itemTitle,
                price: itemPrice,
                image: itemImg,
                quantity: 1
            }
            addItemToCart(newCartItem)
        }
        function addItemToCart(newCartItem){
            cartProducts.push(newCartItem);
            createCartProduct(cartProducts,$shoppingCart.children()[2]);
            
        }
        
 
        //Shopping Cart         
        //Open and close Cart
        let btnCart = $('.btn-cart');
        btnCart.on('click',(e)=>{
            $('.cart').toggleClass('hide-cart')
            $('.cart').toggleClass('open-cart')
        })
        
        //Add Producto To localStorage
});

