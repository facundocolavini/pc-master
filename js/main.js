//INSTALAR DEPENDECIA UUID  PARA TRABAJAR CON ID
class Stock {
    constructor(id,name,category,price,quantity,image){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
}

const products = [];
let containerCards = document.getElementById("card-product");
let legends = document.querySelectorAll(".filter-legend");
let lists = document.getElementsByClassName("filter-list");

console.log(legends,'legend')
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
                t.classList.add("filter-legend--up");
                lists[i].classList.add("filter-list--up");

            }
            
            ,30);
        }

    });
   }
 
        



console.log(legends);
products.push(new Stock(123123,"X99A Godlike Gamingcarbon","motherboard",500000,10,"assets/images/X99A Godlike Gamingcarbon.png"));
products.push(new Stock(12312,"X99A GODLIKE GAMING","motherboard",230000,20,"assets/images/X99A GODLIKE GAMING.png"));
products.push(new Stock(44334,"box1asdasdasd asdasdasd","motherboard",120000,30,"assets/images/box1.png"));
products.push(new Stock(23124,"box2","motherboard",170000,15,"assets/images/box2.png"));
products.push(new Stock(2314454,"box3","motherboard",90000,22,"assets/images/box3.png"));
products.push(new Stock(52341534,"box4","motherboard",30000,5,"assets/images/box4.png"));

                


/* console.log(containerCards); */

function productTemplate(prod){
    return(
        `
        <div class="container-card">
            <img class="card-image" src="${prod.image}" alt="image product">
            <h2 class="title">${prod.name}</h2>
            <div class="card-price">
                <span class="title">$${prod.price}</span>
                <button class="btn-cart" type="button"><span><i class="fas fa-cart-plus"></i> <i class="fas fa-arrow-right"></i></span> </button>
            </div>
        </div> 
        `
    )
}

function createTemplate (HTMLString){
    html = document.implementation.createHTMLDocument();//Crea una estructura HTML nueva
    html.body.innerHTML = HTMLString; //añade al html nuevo los template como parte de html,ya no es texto el template.
    return html.body.children[0]; //returno solamente los hijos de mi body
  }
  let cardTxt = productTemplate(products);
/*   console.log(cardTxt); */

  let cardHtml = createTemplate(cardTxt);
/*   console.log(cardHtml); */


function showProducts($container,products){
    for(const product of products){
        let HTMLString = productTemplate(product);
        let HTMLelement = createTemplate(HTMLString)
        $container.appendChild(HTMLelement);
    }
}
showProducts(containerCards,products);
