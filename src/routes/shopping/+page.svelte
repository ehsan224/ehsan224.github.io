<script>

let products = [
        {info:"Grå Hoodie, prise;400kr",image:"https://www.rudecru.com/eu/31048-large_default/baggy-hoodie-heather-grey.jpg"},
        {info:"Svart Hoodie, \n prise400kr",image:"https://egettryck.se/2456-large_default/svart-hoodie-med-eget-tryck.jpg"},
        {info:"MADE in USA Core Hoodie.............,  Prise; 2 300kr",image:"https://nb.scene7.com/is/image/NB/mt21540tco_nb_70_i?$pdpflexf2$&wid=440&hei=440"},
        {info:"Basic Hoody SWE, Prise:249 SEK",image:"https://www.butikblagul.se/wp-content/uploads/2021/04/031031SE_10_SWEDEN_HOODY_Front.jpg"},
        {info:"THE ORIGINAL EQYFT - Luvtröja, Prise:424,50 kr",image:"https://images.boardriders.com/globalGrey/quiksilver-products/all/default/large/eqyft04739_quiksilver,w_byg0_frt1.jpg"},
        {info:"Praying Scull Hoodie by BSAT, Prise:693 kr.",image:"https://www.rudecru.com/eu/9892-home_default/praying-scull-hoodie-by-bsat.jpg"},
        {info:"Street Instinct ZipHoodie BlackNYellow by Amstaff, Prise:979 kr",image:"https://www.rudecru.com/eu/27520-home_default/street-instinct-ziphoodie-blacknyellow-by-amstaff.jpg"},
        {info:"Mjølnir Crewneck Sweatshirt Navy Blue by Nordic Worlds, Prise:759 kr",image:"https://www.rudecru.com/eu/35499-home_default/mjolnir-crewneck-sweatshirt-navy-blue-by-nordic-worlds.jpg"},
        {info:"Nike Dunk High Game Royal, Prise:3 410 kr",image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"},
        {info:"Nike Air Force 1 '07, Prise:1 449 kr",image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png"},
    ];
    

    
    let shoppingList = [];

  function addToCart(product) {
  shoppingList = [...shoppingList, product]; 
}

  function eraseList() {
    shoppingList = [];
   
  }

  

       
    
    
    
    
    
    
</script>

<body>
    <h1>Kläder och Skor</h1>
    <div class="container">
        {#each products as product }
        <div class="product" on:click={() => addToCart(product.image)}>
            <img src={product.image} style="width: 60%; height: 60%">
            {product.info}
        </div>
        {/each}
    </div>

      







    <div class="varukorg">
        <h1>Varukorge</h1>
        <ol>
          {#each shoppingList as item }
            <li><img src={item} alt="Produkt" style="width: 40px; height: 40px;"> Produkt</li>
          {/each}
        </ol>
        <div>
          <button on:click={eraseList}>Handla</button>
        </div>
      </div>

      

    
    <style>
        
        
        
        .container{
            width:78vw;
            height: 75vh;
            background-color: rgb(172, 71, 253);
            border-width: 1px;
            border-style:solid;
            border-color: red;
            border-radius: 10px;
            padding-top:10px;
            padding-left:2%;
            position:absolute;
            left:0%;
            display: grid;
            grid-template-columns: 18% 18% 18% 18% 18%;

          

        }

        .varukorg{
            width:17vw;
            height: 75vh;
            background-color:#ade292;
            border-width: 1px;
            border-style:solid;
            border-color: rgb(89, 22, 245);
            border-radius: 10px;
            padding-top:10px;
            padding-left:2%;
            position:fixed;
            right:12px;
           


          

        }

        .product {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        width: 200px;
        float: left;
       text-align: center;
       }

       button{
            background-color: rgb(61, 94, 183);
            width: 100px;
            height:30px;
            font-size: 15px;
            padding: 6px;
            border-radius: 10px;
            border: 3px solid rgb(40, 174, 80);
            color: rgb(204,255,204);
            cursor: pointer;
            position:absolute;
            bottom:2%;
            left:35%;
       }

      



       

       
    

        
      
        
        

    </style>
   
</body>