let cart=document.querySelectorAll('.addcart');
let glosses=[
                {
                name:'High Gloss Brilliant Lip Shine-Touch',
                tag:'01',
                price:2300,
                inCart:0
                },
                {
                name:'High Gloss Brilliant Lip Shine-Fairy',
                tag:'02',
                price:1000,
                inCart:0
                },
                {
                name:'High Gloss Brilliant Lip Shine-Cherry Blossom',
                tag:'03',
                price:2300,
                inCart:0
                },
                {
                name:'Forever Red',
                tag:'04',
                price:300,
                inCart:0
                },{
                name:'Pearl Shine Lip Gloss-Peachy Pearl',
                tag:'05',
                price:500,
                inCart:0
                }]
                

let items=localStorage.getItem('Total items');
        if(isNaN(items)!=true)
        {
         document.getElementById("num").textContent=items;       
        }
        else{
            document.getElementById("num").textContent='0';    
        }

        

let total=localStorage.getItem('Total Price');
       total=parseInt(total);
let products=localStorage.getItem('addcart');
let productSpace=document.querySelector('.ProductSpace');
products=JSON.parse(products);
       if(products!=null && productSpace!=null)
       {
        productSpace.innerHTML='';
        Object.values(products).map(items=>{productSpace.innerHTML+=`<div class="ProductSpace">
                <div class="names"><span>${items.name}</span></div>
                <div class="quantityy">${items.inCart}</div>
                <div class="costt">Rs ${items.price}.00/-</div>
                <div class="totall">Rs ${items.price*items.inCart}.00/-</div></div>`});
          productSpace.innerHTML+=`<div class=TotalCost> 
                                    <h3 class="orderTotal">Order Total</h3>
                                    <h3 class="totalPrice">Rs ${total}.00/-</h3></div>`
      }
       

 function TotalItems(){
        let items=localStorage.getItem('Total items');
        items=parseInt(items);
        if(isNaN(items))
        {
          localStorage.setItem('Total items',1);
          document.getElementById("num").textContent=1;
        }
        else{
                items++;
        localStorage.setItem('Total items',items);
        document.getElementById("num").textContent=items;
            }
         }

 function cartDirectory(product){
        //let name=product.tag;
        let items=localStorage.getItem('addcart');
        items=JSON.parse(items);
        if(items!=null){
        if (items[product.tag]==undefined){
               items={
                ...items,
                [product.tag]:product
               }
        }items[product.tag].inCart++;}
        else{
                product.inCart=1;
                items={
                [product.tag]:product
        }}
          localStorage.setItem('addcart',JSON.stringify(items));
         }

function TotalCost(product){
       let total=localStorage.getItem('Total Price');
       total=parseInt(total);
       if (isNaN(total))
     {
        total=product.price;  
     }
      else{total=total+parseInt(product.price);}
      localStorage.setItem('Total Price',total);
     }



for (let i=0;i<cart.length;i++){
      cart[i].addEventListener('click',()=>{TotalItems(); cartDirectory(glosses[i]);  TotalCost(glosses[i]);
})
    }

