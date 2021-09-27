
const products = [];
const shoppingCart = [];
var filters_checkboxs = [];
let $container = document.body.children[0];

let $products = document.querySelector('.products');
let cardProduct = document.getElementsByClassName('.container-card');
let checkboxs = document.querySelectorAll('.filter-chkbox');
let legends = document.querySelectorAll(".filter-legend");
let lists = document.getElementsByClassName("filter-list");
let body = document.querySelector("body");
let searchBar = document.querySelector('.input-search ');

/* Clases */
class Stock {
    constructor(id,name,category,price,quantity,image,model){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.model = model;
    }
}
//Productos
products.push(new Stock(1,"PRODUCTO 1","motherboard",500000,10,"assets/images/X99A Godlike Gamingcarbon.png","INTEL-CHIPSET"));
products.push(new Stock(2,"PRODUCTO 2","motherboard",230000,20,"assets/images/X99A GODLIKE GAMING.png","INTEL-CHIPSET"));
products.push(new Stock(3,"PRODUCTO 3","motherboard",120000,30,"assets/images/box1.png","AMD-CHIPSET"));
products.push(new Stock(4,"PRODUCTO 4","motherboard",170000,15,"assets/images/box2.png","AMD-CHIPSET"));
products.push(new Stock(5,"PRODUCTO 5","motherboard",90000,22,"assets/images/box3.png","INTEL-CHIPSET"));
products.push(new Stock(6,"PRODUCTO 6","motherboard",30000,5,"assets/images/box4.png","INTEL-CHIPSET"));
products.push(new Stock(7,"PRODUCTO 7","graphics",30000,5,"assets/images/Radeon-RX-6900-XT-16G.png","AMD-GPU"));
products.push(new Stock(8,"PRODUCTO 8","graphics",30000,5,"assets/images/GEFORCE-RTX-3070-SUPRIM-X-8G-LHR.png","NVIDIA-GPU"));



//Eventos 
   for(let i=0; legends.length>i;i++){
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
   }

   //Templates 
    //Template producto
    const productTemplate = (prod)=>{
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
            `);
            }).join('');
            $products.innerHTML = htmlString;
           /*  for(product of products){
                $products.innerHTML = productTemplate(product);
            } */
      
      

   }
  
    /* Buscador de productos */
    function searchProduct(){
        searchBar.addEventListener('keyup',(e)=>{

            const searchString = e.target.value.toUpperCase();
             const searchProd= products.filter((prod)=>{
                return (
                    prod.name.includes(searchString) 
                )
       
            })
            if(searchString !==null){
                showAllProducts(searchProd);
            }else{
                showAllProducts(products);
            }
           
            console.log(searchProd,'busqueda');
        })
    }

   /* Toma el valor del checkbox si esta checkeado o no y lo agrega a un array */

   const filterProduct =(checkboxs)=>{
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
   }

   showAllProducts(products)
  
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
    searchProduct();
    addToLocalStorage(btnsProducts);
/*     console.log($products.children[0].dataset.model); */
/*    filterProduct(checkboxs,filters_checkboxs); */


