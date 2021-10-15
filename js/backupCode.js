/* let $products = document.querySelector('.products');
let cardProduct = document.getElementsByClassName('.container-card');
let checkboxs = document.querySelectorAll('.filter-chkbox');
let legends = document.querySelectorAll(".filter-legend");
let lists = document.getElementsByClassName("filter-list");
let body = document.querySelector("body");
 */

//Eventos 
/*    for(let i=0; legends.length>i;i++){
    legends[i].addEventListener('click',(e)=>{
        const t = e.target;
        console.log(t,'target');

        setTimeout(()=> {
            t.classList.add("filter-legend--down");
            lists[i].classList.add("filter-list--down");
        }
        ,30);
        if( t.classList.contains("filter-legend--down")){
            setTimeout(()=> {
                t.classList.remove("filter-legend--down");
                lists[i].classList.remove("filter-list--down");
                lists[i].classList.remove("filter-list--up")
                lists[i].classList.add("filter-list--up")
            }
            ,30);
        }

    });
   } */

   //Templates con js
    //Template producto
/*     const productTemplate = (prod)=>{
        return(
            `
            <div data-model=${prod.id} class="product">
                <div class="container-card">
                    <img class="card-image" src="${prod.image}" alt="image product">
                    <h2 class="title">${prod.name}</h2>
                    <div class="card-price">
                        <span class="title">$${prod.price}</span>
                        <button data-id=${prod.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                    </div>
                </div> 
            </div> 
            `
        )
    }
    function showAllProducts(products){
       
            const htmlString = products
            .map((prod)=>{
                return (
                `
                    <div data-model=${prod.id} class="product col-md-4 col-lg-4">
                        <div class="container-card">
                            <img class="card-image" src="${prod.image}" alt="image product">
                            <h2 class="title">${prod.name}</h2>
                            <div class="card-price">
                                <span class="title">$${prod.price}</span>
                                <button data-id=${prod.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                            </div>
                        </div> 
                    </div> 
            `);
            }).join('');
            $products.innerHTML = htmlString;
   } */
  
    /* Buscador de productos */
/*     function searchProduct(){
        searchBar.addEventListener('keyup',(e)=>{
            const searchString = e.target.value.toUpperCase();
            const searchProd= products.filter((prod)=>{
                return (
                    prod.name.includes(searchString) 
                )
        
            })
            if(searchString !==null){
                showAllProducts(searchProd);
                addToLocalStorage(btnsProducts);
            }else{
                showAllProducts(products);
                addToLocalStorage(btnsProducts);
            }
            console.log(searchProd,'busqueda');
        })
    } */

   /* Toma el valor del checkbox si esta checkeado o no y lo agrega a un array */

/*    const filterProduct =(checkboxs)=>{
    checkboxs.forEach((checkbox)=>{
        checkbox.onclick = (e)=>{
         
            //La primera vez que entra sin filtros
            var t = e.target
            var valueFilter =t.value.toUpperCase().replaceAll(' ','-');
          
            if(t.checked){
                const filterProducts = products.filter(p => p.model === valueFilter)
                showAllProducts(filterProducts)
                console.log(filterProducts)

                }
        }      
    })
   } */

/*    showAllProducts(products)
  
    let btnsProducts = document.querySelectorAll('.product .btn-cart-product');

    console.log(btnsProducts);
        const saveOnLocal = (clave, valor) => {
            localStorage.setItem(clave, valor);
        }

 
    function addToLocalStorage (btnsProducts){
            for(let i = 0 ; btnsProducts.length> i ; i++){
                btnsProducts[i].addEventListener('click',()=>{
                    let idProd = parseInt(btnsProducts[i].dataset.id);
                    let product = products.filter(p => idProd === p.id );
                    shoppingCart.push(product);
                    let value = JSON.stringify(shoppingCart);
                    saveOnLocal('cart', value);
                })
            }
    

    } 
    
    
    filterProduct(checkboxs)
showAllProducts(products)
searchProduct();

    
    */


   
/*     filterProduct(checkboxs)
    searchProduct();
    addToLocalStorage(btnsProducts); */
/*     console.log($products.children[0].dataset.model); */
/*    filterProduct(checkboxs,filters_checkboxs); */
//Eventos 
/*    for(let i=0; legends.length>i;i++){
    legends[i].addEventListener('click',(e)=>{
        const t = e.target;
        console.log(t,'target');

        setTimeout(()=> {
            t.classList.add("filter-legend--down");
            lists[i].classList.add("filter-list--down");
        }
        ,30);
        if( t.classList.contains("filter-legend--down")){
            setTimeout(()=> {
                t.classList.remove("filter-legend--down");
                lists[i].classList.remove("filter-list--down");
                lists[i].classList.remove("filter-list--up")
                lists[i].classList.add("filter-list--up")
            }
            ,30);
        }

    });
   } */

   //Templates con js
    //Template producto
/*     const productTemplate = (prod)=>{
        return(
            `
            <div data-model=${prod.id} class="product">
                <div class="container-card">
                    <img class="card-image" src="${prod.image}" alt="image product">
                    <h2 class="title">${prod.name}</h2>
                    <div class="card-price">
                        <span class="title">$${prod.price}</span>
                        <button data-id=${prod.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                    </div>
                </div> 
            </div> 
            `
        )
    }
    function showAllProducts(products){
       
            const htmlString = products
            .map((prod)=>{
                return (
                `
                    <div data-model=${prod.id} class="product col-md-4 col-lg-4">
                        <div class="container-card">
                            <img class="card-image" src="${prod.image}" alt="image product">
                            <h2 class="title">${prod.name}</h2>
                            <div class="card-price">
                                <span class="title">$${prod.price}</span>
                                <button data-id=${prod.id} class="btn-cart-product" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
                            </div>
                        </div> 
                    </div> 
            `);
            }).join('');
            $products.innerHTML = htmlString;
   } */
  
    /* Buscador de productos */
/*     function searchProduct(){
        searchBar.addEventListener('keyup',(e)=>{
            const searchString = e.target.value.toUpperCase();
            const searchProd= products.filter((prod)=>{
                return (
                    prod.name.includes(searchString) 
                )
        
            })
            if(searchString !==null){
                showAllProducts(searchProd);
                addToLocalStorage(btnsProducts);
            }else{
                showAllProducts(products);
                addToLocalStorage(btnsProducts);
            }
            console.log(searchProd,'busqueda');
        })
    } */

   /* Toma el valor del checkbox si esta checkeado o no y lo agrega a un array */

/*    const filterProduct =(checkboxs)=>{
    checkboxs.forEach((checkbox)=>{
        checkbox.onclick = (e)=>{
         
            //La primera vez que entra sin filtros
            var t = e.target
            var valueFilter =t.value.toUpperCase().replaceAll(' ','-');
          
            if(t.checked){
                const filterProducts = products.filter(p => p.model === valueFilter)
                showAllProducts(filterProducts)
                console.log(filterProducts)

                }
        }      
    })
   } */

/*    showAllProducts(products)
  
    let btnsProducts = document.querySelectorAll('.product .btn-cart-product');

    console.log(btnsProducts);
        const saveOnLocal = (clave, valor) => {
            localStorage.setItem(clave, valor);
        }

 
    function addToLocalStorage (btnsProducts){
            for(let i = 0 ; btnsProducts.length> i ; i++){
                btnsProducts[i].addEventListener('click',()=>{
                    let idProd = parseInt(btnsProducts[i].dataset.id);
                    let product = products.filter(p => idProd === p.id );
                    shoppingCart.push(product);
                    let value = JSON.stringify(shoppingCart);
                    saveOnLocal('cart', value);
                })
            }
    

    } 
    
    
    filterProduct(checkboxs)
showAllProducts(products)
searchProduct();

    
    */


   
/*     filterProduct(checkboxs)
    searchProduct();
    addToLocalStorage(btnsProducts); */
/*     console.log($products.children[0].dataset.model); */
/*    filterProduct(checkboxs,filters_checkboxs); */



/* 
else{ 
                //DESCHEQUEADOS
                console.log(dataModel)
       
                dataModel =dataModel.replaceAll(' ','-').toUpperCase()
                inputChecked = inputChecked.filter(input =>input !== dataModel ? $(`${dataModel}`).remove() : input)
                console.log(inputChecked)
                fill = products.filter((prod)=>{
                    return (
                        prod.model.includes(dataModel)
                    )
                })
                if(inputChecked.length>0){//HAY TODAVIA CHECKBOX CHEQUEADOS
                    console.log(fill,'descheck')
                    $('.product').remove()
                    main(fill);
                   
                   
                }else{
                    $('.products').remove()
                    main(products);
                }
              
            }

*/











/* -----------------------CARRITO----------------- */
/*         //Add new item to my cart
        function addItemToCart(newCartItem,itemPrice,itemId){  
            const {id} = newCartItem;       
            for(let i=0;i<cartProducts.length;i++){
                if(cartProducts[i].id === id){
                    cartProducts[i].quantity++;
                    cartProducts[i].price = itemPrice * cartProducts[i].quantity;
                    createCartProduct(cartProducts,$shoppingCart.children()[2]);

                    totalMount(cartProducts);
                    return null;
                }
          
            }
            cartProducts.push(newCartItem);
            createCartProduct(cartProducts,$shoppingCart.children()[2]);

            totalMount(cartProducts);
        }

        //Total price
        const totalMount=(cartProducts)=>{
            let contentTotal = document.querySelector('.content-total');
            totalMountCart = cartProducts
                                .map(p => p.price )
                                .reduce ((a, e) => a + e)
                               
            renderTotal([totalMountCart],contentTotal)
        }
        console.log(cartProducts)
        const deleteProductCart=(e,prod)=>{
            console.log(e.target.id)
            return  prod.filter(p => e.target.id !== p.id)

        }   */