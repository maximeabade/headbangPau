var guitaresTabObject = [
    {
        "id": "G1",
        "Name": "Harley Benton",
        "Image": "./img/guitares/HarleyBenton.png",
        "Details": "Corps en peuplier, manche en érable, touche en Roseacer, 22 frettes, 2 micros double bobinage, cordes .010-.046",
        "Price": "148",
        "Stock": "5"
    },
    {
        "id": "G2",
        "Name": "Jackson JS22",
        "Image": "./img/guitares/JacksonJS22.png",
        "Details": "Corps en peuplier, manche en érable, touche en amarante, 24 frettes, 2 micros double bobinage",
        "Price": "229",
        "Stock": "5"
    },
    {
        "id": "G3",
        "Name": "Jackson JS32 King V",
        "Image": "./img/guitares/JacksonJS32KingV.png",
        "Details": "Corps en peuplier, manche en érable, touche en amarante, 24 frettes, 3 micros double bobinage, cordes .009-.042",
        "Price": "359",
        "Stock": "5"
    },
    {
        "id": "G4",
        "Name": "ESP E-II HORIZON-III FM RDB",
        "Image": "./img/guitares/espHorizon.png",
        "Details": "Corps en aulne, manche en érable, touche en ébène, 24 frettes, 2 micros double bobinage, cordes .009-.042",
        "Price": "2320",
        "Stock": "5"
    },
    {
        "id": "G5",
        "Name": "Harley Benton BS-20BK Rock Series",
        "Image": "./img/guitares/harleyBentonBS20.png",
        "Details": "Corps en tilleul, manche en érable canadien, touche en Roseacer, 24 frettes, 2 micros double bobinage, cordes .009-.042",
        "Price": "130",
        "Stock": "5"
    }
];

var microsTabObject = [
    {
        "id": "M1",
        "Name": "SENNHEISER E385 S",
        "Image": "./img/micros/e385s.png",
        "Details": "40Hz-16kHz, -59dBV/Pa, 330g, 2.0m cable",
        "Price": "92",
        "Stock": "5"
    },
    {
        "id": "M2",
        "Name": "R77",
        "Image": "./img/micros/r77.png",
        "Details": "20Hz-18kHz, -55dBV/Pa, 860g, 1.5m cable",
        "Price": "290",
        "Stock": "5"
    },
    {
        "id": "M3",
        "Name": "Shure S55",
        "Image": "./img/micros/shureS55.png",
        "Details": "50Hz-15kHz, -58dBV/Pa, 624g, 3.5m cable",
        "Price": "185",
        "Stock": "5"
    },
    {
        "id": "M4",
        "Name": "Slate Digital ML-1",
        "Image": "./img/micros/slateDigital.png",
        "Details": "Condensateur large membrane, 20Hz-20kHz, -38dBV/Pa, 1000g, 1.5m cable",
        "Price": "800",
        "Stock": "5"
    },
    {
        "id": "M5",
        "Name": "Rode NT1-A",
        "Image": "./img/micros/rodeNT1.png",
        "Details": "Condenateur large membrane, 20Hz-20kHz, -38dBV/Pa, 1.5m cable",
        "Price": "166",
        "Stock": "5"
    }
];

var batteriesTabObject = [
    {
        "id": "B1",
        "Name": "PearlEXX705NBR",
        "Image": "./img/batteries/PearlEXX705NBR.png",
        "Details": "Gross Caisse, Tom10X07, Tom12X08, StandTom 14X14, caisse claire 14X5.5, livrée sans siège",
        "Price": "1100",
        "Stock": "5"
    },
    {
        "id": "B2",
        "Name": "Startone",
        "Image": "./img/batteries/Startone.png",
        "Details": "Grosse Caisse, Tom10X08, Tom12X09, StandTom 14X14, caisse claire 14X5.5, livrée avec siège",
        "Price": "270",
        "Stock": "5"
    },
    {
        "id": "B3",
        "Name": "YamahaRYDEEN",
        "Image": "./img/batteries/YamahaRYDEEN.png",
        "Details": "Grosse Caisse, Tom10X07, Tom12X08, StandTom 14X13, caisse claire 14X5.5, livrée sans siège",
        "Price": "750",
        "Stock": "5"
    },
    {
        "id": "B4",
        "Name": "Efnote 3 E-Drum",
        "Image": "./img/batteries/efnote3.png",
        "Details": "Grosse Caisse Aluminium, Tom10X3.5 (x2), Tom12X04, StandTom 14X14, caisse claire 14X5.5, livrée sans siège",
        "Price": "2330",
        "Stock": "5"
    },
    {
        "id": "B5",
        "Name": "Millenium Rookie E-Drum",
        "Image": "./img/batteries/milleniumRookie.png",
        "Details": "Caisse claire 07, Tom10X07 (x3), livrée sans siège",
        "Price": "189",
        "Stock": "5"
    }  
];

function removeChildren(){
    var guitaresContainer = document.getElementById("guitaresContainer");
    var microsContainer = document.getElementById("microsContainer");
    var batteriesContainer = document.getElementById("batteriesContainer");
    //now we remove every of its child
    if(guitaresContainer.hasChildNodes()) {
        while (guitaresContainer.firstChild) {
            guitaresContainer.removeChild(guitaresContainer.firstChild);
        }
    }else if(microsContainer.hasChildNodes()) {
        while (microsContainer.firstChild) {
            microsContainer.removeChild(microsContainer.firstChild);
        }
    }else if(batteriesContainer.hasChildNodes()) {
        while (batteriesContainer.firstChild) {
            batteriesContainer.removeChild(batteriesContainer.firstChild);
        }
    }
};

let cart = [];
let cartTotal = 0;

let cartProvisory = [];

function addCart(id, quantity) {
    var item = guitaresTabObject.find(item => item.id === id);
    var itemProvisory = guitaresTabObject.find(item => item.id === id);
    item.quantity = quantity;
    itemProvisory.quantity = quantity;
    cart.push(item);
    cartProvisory.push(itemProvisory);
    console.log(cart);
    console.log(cartProvisory);
    cartTotal += item.Price * quantity;
    cartProvisoryTotal += itemProvisory.Price * quantity;
    console.log(cartTotal);
    console.log(cartProvisoryTotal);
    //alert("Votre produit a été ajouté au panier");
    document.getElementById("cartTotal").innerHTML = cartTotal;
    document.getElementById("cartProvisoryTotal").innerHTML = cartProvisoryTotal;
}



 //FONCTION POUR RETURN LA QUANTITÉ DES QU ON CLICK SUR PLUS OU MOINS
 function getQuantity(id){
    var quantity= document.getElementById(id).value;
    console.log(quantity);
    return quantity;
 }



function guitareChilds() {
    removeChildren();
    var container = document.getElementById("guitaresContainer");
    for(let i=0; i<guitaresTabObject.length; i++) {
        function showQuantityInput() {
            if (quantityInput.style.display === "none") {
              quantityInput.style.display = "block";
            } else {
              quantityInput.style.display = "none";
            }
        }
        var id= guitaresTabObject[i].id;
        var guitare = guitaresTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");

        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", guitare.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            //on hover zoom
            img.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            img.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
            //we want to differentiate the divs for each product
            div3.setAttribute("id", guitare.id+"div");

        var h4 = document.createElement("h4");

        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = guitare.Name;

        var p1 = document.createElement("p");
            p1.innerHTML = guitare.Details;

        var p2 = document.createElement("p");

        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = guitare.Price+"€";

        p2.appendChild(Strong2);

        /*
        On veut mtnt un boutton moins, un affichage de la qté et un boutton plus
        */
        {var quantityInput = document.createElement("input");
            quantityInput.setAttribute("type", "number");
            quantityInput.setAttribute("id", guitare.id+"quantity");
            quantityInput.setAttribute("placeholder", "1");
            quantityInput.setAttribute("max", guitare.Stock);
            quantityInput.setAttribute("style", "width: 50px; margin-left: 10px; margin-right: 10px; display: block; text-align: center; border: none; color: black; background-color: #f1f1f1;");
            quantityInput.setAttribute("onchange", "if(this.value > "+guitare.Stock+"){this.value = "+guitare.Stock+";}else if(this.value < 1){this.value = 1;}else{console.log(this.value);}");
            quantityInput.setAttribute("onkeyup", "if(this.value > "+guitare.Stock+"){this.value = "+guitare.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");
            quantityInput.setAttribute("onkeydown", "if(this.value > "+guitare.Stock+"){this.value = "+guitare.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");

        }

        {var buttonMoins = document.createElement("button");
            buttonMoins.setAttribute("type", "button");
            buttonMoins.setAttribute("class", "btn btn-primary");
            buttonMoins.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonMoins.innerHTML = "-";
            buttonMoins.setAttribute("onclick", "if(document.getElementById('"+guitare.id+"quantity').value > 1){document.getElementById('"+guitare.id+"quantity').value = document.getElementById('"+guitare.id+"quantity').value - 1;}else{document.getElementById('"+guitare.id+"quantity').value = 1;}console.log(document.getElementById('"+guitare.id+"quantity').value);");
        }

        {var buttonPlus = document.createElement("button");
            buttonPlus.setAttribute("type", "button");
            buttonPlus.setAttribute("class", "btn btn-primary");
            buttonPlus.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonPlus.innerHTML = "+";
            buttonPlus.setAttribute("onclick", "if(document.getElementById('"+guitare.id+"quantity').value < 5 ){document.getElementById('"+guitare.id+"quantity').value++;}else{document.getElementById('"+guitare.id+"quantity').value = 5;}console.log(document.getElementById('"+guitare.id+"quantity').value);" );
        }

        {var buttonStock = document.createElement("button");
            buttonStock.setAttribute("type", "button");
            buttonStock.setAttribute("class", "btn btn-primary");
            buttonStock.setAttribute("style", "margin-top: 10px; margin-bottom: 30px;");
            buttonStock.innerHTML = "Voir le stock";
            //on hover on the button, show stock
            buttonStock.setAttribute("onmouseover", "this.innerHTML = 'Stock : "+guitare.Stock+"';");
            buttonStock.setAttribute("onmouseout", "this.innerHTML = 'Voir le stock';");
        }

        {var ligneDeBouttons = document.createElement("div");
            ligneDeBouttons.setAttribute("style", "display: flex; flex-direction: row; justify-content: center; align-items: center; ");
            ligneDeBouttons.appendChild(buttonMoins);
            ligneDeBouttons.appendChild(quantityInput);
            ligneDeBouttons.appendChild(buttonPlus);
        }            


        {var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px;");
            button.innerHTML = "Ajouter au panier";
        }

        {
        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div3.appendChild(buttonStock);
        div3.appendChild(ligneDeBouttons);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
        }
    }
}


function microChilds() {
    removeChildren();
    var container = document.getElementById("microsContainer");
    for(let i=0; i<microsTabObject.length; i++) {
        var id = microsTabObject[i].id;
        var micro = microsTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");

        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", micro.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            //zoom on hover
            img.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            img.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
            //we want to differentiate the divs for each product
            div3.setAttribute("id", id);

        var h4 = document.createElement("h4");

        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = micro.Name;

        var p1 = document.createElement("p");
            p1.innerHTML = micro.Details;

        var p2 = document.createElement("p");

        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = micro.Price+"€";

        p2.appendChild(Strong2);

        var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px;");
            button.innerHTML = "Ajouter au panier";
            //on click add to cart
            button.setAttribute("onclick", "addToCart('"+id+"')");
        
        var buttonStock = document.createElement("button");
            buttonStock.setAttribute("type", "button");
            buttonStock.setAttribute("class", "btn btn-primary");
            buttonStock.setAttribute("style", "margin-top: 10px; margin-bottom: 30px;");
            buttonStock.innerHTML = "Voir le stock";
            //on hover on the button, show stock
            buttonStock.setAttribute("onmouseover", "this.innerHTML = 'Stock : "+micro.Stock+"';");
            buttonStock.setAttribute("onmouseout", "this.innerHTML = 'Voir le stock';");

        

        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div3.appendChild(buttonStock);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
    }
}


function batterieChilds() {
    removeChildren();
    var container = document.getElementById("batteriesContainer");
    for(let i=0; i<batteriesTabObject.length; i++) {
        var id = batteriesTabObject[i].id;
        var batterie = batteriesTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");

        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", batterie.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            //zoom on hover
            img.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            img.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
            //we want to differentiate the divs for each product
            div3.setAttribute("id", id);

        var h4 = document.createElement("h4");

        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = batterie.Name;

        var p1 = document.createElement("p");
            p1.innerHTML = batterie.Details;

        var p2 = document.createElement("p");

        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = batterie.Price+"€";

        p2.appendChild(Strong2);

        var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-primary");
            button.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px;");
            button.innerHTML = "Ajouter au panier";
            //on click add to cart
            button.setAttribute("onclick", "addToCart('"+id+"')");
        

                    
        var buttonStock = document.createElement("button");
            buttonStock.setAttribute("type", "button");
            buttonStock.setAttribute("class", "btn btn-primary");
            buttonStock.setAttribute("style", "margin-top: 10px; margin-bottom: 30px;");
            buttonStock.innerHTML = "Voir le stock";
            //on hover on the button, show stock
            buttonStock.setAttribute("onmouseover", "this.innerHTML = 'Stock : "+batterie.Stock+"';");
            buttonStock.setAttribute("onmouseout", "this.innerHTML = 'Voir le stock';");

    

        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div3.appendChild(buttonStock);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
    }
}


//now we want to push items to the cart, with quatity selectors, and write into the database
//we need to create a cart object, and push it to the database
