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


let cart = [];
let idToSendForCart= "";



 //fonction qui update le total du panier
function updateCartTotal(cart) {
    var cartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        cartTotal += Number(cart[i].price)*Number(cart[i].qty);
    }
    //document.getElementById("cartTotal").innerHTML = cartTotal;      ==> pour afficher le total dans le panier
    return cartTotal;
}


//fonction qui supprime les doublons dans le panier
function cartCleaner(cart) {
    var cartTotal = 0;
    var cartCopy = cart.slice(); // make a copy of the cart
    var cartTabToSend = [];
    //console.log("cartCopy: ",cartCopy);
    // iterate over the cart from the end to the beginning
    for (let i = cartCopy.length - 1; i >= 0; i--) {
        let found = false;
        // check if the current item is already in the cartTabToSend
        for (let j = 0; j < cartTabToSend.length; j++) {
            if (cartCopy[i].id === cartTabToSend[j].id) {
                found = true;
                break;
            }
        }
        if (!found) {
            // if the current item is not found, add it to cartTabToSend
            cartTabToSend.push(cartCopy[i]);
        }
    }
    // reverse the cartTabToSend to match the original cart order
    cartTabToSend.reverse();
    cart = cartTabToSend;
    //console.log(cart);
    //update cartTotal
    cartTotal = updateCartTotal(cart);
    //console.log(cartTotal);
    return cart;
}


//vide les tableaux du panier, des guitares, des micros et des batteries
function removeChildren(){
    let cartContainer = document.getElementById("cartContainer");
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
    }else if(cartContainer.hasChildNodes()) {
        while (cartContainer.firstChild) {
            cartContainer.removeChild(cartContainer.firstChild);
        }
    }
    cartCleaner(cart);  
};



//fonction qui crée le front du panier ==> A REPRENDRE
function createCartFront(cart) {
    removeChildren();
    cart = cartCleaner(cart);
    var cartTotal = updateCartTotal(cart);
    //faire une fonction qui vide l'affichage du panier ==>
    let cartContainer = document.getElementById("cartContainer");
    //pour chaque objet du panier, on crée un div avec les infos de l'objet
    for(let i=0; i<cart.length; i++) {
        //on veut afficher en une ligne l'image de l'élément du panier, son nom, la qty sélectionnée et son prix
        let divObject = document.createElement("div");
            divObject.setAttribute("class", "row");
            divObject.setAttribute("id", cart[i].id+'DIV');
            divObject.setAttribute("style", "margin-bottom: 20px;");
            divObject.setAttribute("style", "border: none; color: black;");
            console.log(divObject.id);
            console.log(cart[i].id);

        let div2Object = document.createElement("div");
            div2Object.setAttribute("class", "col-sm-4"); 

        let imageObject = document.createElement("img");
            imageObject.setAttribute("src", cart[i].image);
            imageObject.setAttribute("class", "img-responsive");
            imageObject.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            imageObject.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            imageObject.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2Object.appendChild(imageObject);

        let Strong1Object = document.createElement("strong");
            Strong1Object.innerHTML = cart[i].name;

        let Strong2Object = document.createElement("strong");
            Strong2Object.innerHTML = cart[i].price+"€";

        let Strong3Object = document.createElement("strong");
            Strong3Object.innerHTML = "x"+cart[i].qty;
        
        let p2Object = document.createElement("p");
        //console.log(divObject);
        p2Object.appendChild(Strong1Object);
        p2Object.appendChild(Strong2Object);
        p2Object.appendChild(Strong3Object);
        div2Object.appendChild(p2Object);
        divObject.appendChild(div2Object);
        cartContainer.appendChild(divObject);
        //console.log(cartContainer);
    }
    //console.log(cartContainer);
    //console.log(updateCartTotal(cart));

}



///////////////////////////////////////--AJOUTS AU PANIER--///////////////////////////////////////
//fonction addGuitareToCart(id, qty)
function addGuitareToCart(id, qty) {
    cartCleaner(cart);
    //console.log(id);
    //console.log(qty);
    //on va chercher la guitare en fonction de l'id
    for(let i=0; i<guitaresTabObject.length; i++) {
        if(guitaresTabObject[i].id == id) {
            //console.log(guitaresTabObject[i]);
            //on crée un objet guitare qui contient les infos de la guitare
            var guitareCart = {
                "id": guitaresTabObject[i].id,
                "name": guitaresTabObject[i].Name,
                "image": guitaresTabObject[i].Image,
                "price": guitaresTabObject[i].Price,
                "qty": qty
            }
           // console.log(guitareCart.id , id);
            
            //on va vérifier si la guitare est déjà présente dans le panier
            if(cart.length == 0) {
                cart.push(guitareCart);
                console.log("le panier est vide, on ajoute l elt");
            }

            else {                 //sinon, on va vérifier si la guitare est déjà présente dans le panier
                //pour chaque objet du panier(boucle sur j), on compare l'id de l'objet avec l'id de la guitare, qui est le meme que celui rentré en paramètre
                //console.log(cart.length, id);
                for(let j=0; j<cart.length; j++) {
                    if(cart[j].id == id && cart[j].qty != guitareCart.qty) {
                        console.log(id , cart[j].id);
                        //si la guitare est déjà présente dans le panier, on compare les qty et on update la qty dans l'objet du panier sans en rajouter un nouveau
                        cart[j].qty = guitareCart.qty;
                        console.log("l elt est deja present mais on a changé sa qty");
                    }else if (cart[j].id != id){ //si la guitare n'est pas présente dans le panier, on l'ajoute
                        cart.push(guitareCart);
                    }
                }
            }
            //console.log(cart);
        }
    }
    //console.log(cartTotal);
    cart = cartCleaner(cart);
    //console.log(cart);
}
//fonction addMicroToCart(id, qty)
function addMicroToCart(id, qty) {
    cartCleaner(cart);
    //console.log(id);
    //console.log(qty);
    //on va chercher la guitare en fonction de l'id
    for(let i=0; i<microsTabObject.length; i++) {
        if(microsTabObject[i].id == id) {
            //console.log(guitaresTabObject[i]);
            //on crée un objet guitare qui contient les infos de la guitare
            var microCart = {
                "id": microsTabObject[i].id,
                "name": microsTabObject[i].Name,
                "image": microsTabObject[i].Image,
                "price": microsTabObject[i].Price,
                "qty": qty
            }
           // console.log(guitareCart.id , id);
            
            //on va vérifier si la guitare est déjà présente dans le panier
            if(cart.length == 0) {
                cart.push(microCart);
                console.log("le panier est vide, on ajoute l elt");
            }

            else {                 //sinon, on va vérifier si la guitare est déjà présente dans le panier
                //pour chaque objet du panier(boucle sur j), on compare l'id de l'objet avec l'id de la guitare, qui est le meme que celui rentré en paramètre
                //console.log(cart.length, id);
                for(let j=0; j<cart.length; j++) {
                    if(cart[j].id == id && cart[j].qty != microCart.qty) {
                        console.log(id , cart[j].id);
                        //si la guitare est déjà présente dans le panier, on compare les qty et on update la qty dans l'objet du panier sans en rajouter un nouveau
                        cart[j].qty = microCart.qty;
                        console.log("l elt est deja present mais on a changé sa qty");
                    }else if (cart[j].id != id){ //si la guitare n'est pas présente dans le panier, on l'ajoute
                        cart.push(microCart);
                    }
                }
            }
            //console.log(cart);
        }
    }
    //actualiser le total du panier

    cart = cartCleaner(cart);
}
//fonction addBatterieToCart(id, qty)
function addBatterieToCart(id , qty){
    cartCleaner(cart);
    //console.log(id);
    //console.log(qty);
    //on va chercher la guitare en fonction de l'id
    for(let i=0; i<batteriesTabObject.length; i++) {
        if(batteriesTabObject[i].id == id) {
            //console.log(guitaresTabObject[i]);
            //on crée un objet guitare qui contient les infos de la guitare
            var batterieCart = {
                "id": batteriesTabObject[i].id,
                "name": batteriesTabObject[i].Name,
                "image": batteriesTabObject[i].Image,
                "price": batteriesTabObject[i].Price,
                "qty": qty
            }
           // console.log(guitareCart.id , id);
            
            //on va vérifier si la guitare est déjà présente dans le panier
            if(cart.length == 0) {
                cart.push(batterieCart);
                console.log("le panier est vide, on ajoute l elt");
            }

            else {                 //sinon, on va vérifier si la guitare est déjà présente dans le panier
                //pour chaque objet du panier(boucle sur j), on compare l'id de l'objet avec l'id de la guitare, qui est le meme que celui rentré en paramètre
                //console.log(cart.length, id);
                for(let j=0; j<cart.length; j++) {
                    if(cart[j].id == id && cart[j].qty != batterieCart.qty) {
                        console.log(id , cart[j].id);
                        //si la guitare est déjà présente dans le panier, on compare les qty et on update la qty dans l'objet du panier sans en rajouter un nouveau
                        cart[j].qty = batterieCart.qty;
                        console.log("l elt est deja present mais on a changé sa qty");
                    }else if (cart[j].id != id){ //si la guitare n'est pas présente dans le panier, on l'ajoute
                        cart.push(batterieCart);
                    }
                }
            }
            //console.log(cart);
        }
    }
    //actualiser le total du panier

}


//////////////////////////////////////--SUPPRESSION DES ARTICLES DU PANIER--//////////////////////////////////////


function removeFromCartTab(id){
    //console.log(id);
    for(let i=0; i<cart.length; i++) {
        if(cart[i].id == id) {
            console.log("l'élément du tableau à supprimer est: " , cart[i]);
            cart.splice(i, 1);
        } 
    }
    return cart;
}

function emptyCart(){
    cart = [];
    updateCartTotal(cart);
    cart = cartCleaner(cart);
    console.log("panier vidé");
    return cart;
}


//////////////////////////////////////--GÉNÉRATION DES HTML DES PRODUITS + INTERACTIONS--//////////////////////////////////////
function guitareChilds() {
    removeChildren();
    var container = document.getElementById("guitaresContainer");
    var tableauDesId = [];
    for(let i=0; i<guitaresTabObject.length; i++) {
        //faire un tableau contenant les id des guitares
        var id = guitaresTabObject[i].id;
        tableauDesId.push(id);
        //console.log(tableauDesId);

        var guitare = guitaresTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
            div1.setAttribute("id", guitare.id);
            //on hover, get id of the guitare
            div1.setAttribute("onmouseover", "idToSendForCart = this.id;");
        
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
            button.setAttribute("onclick", "if((document.getElementById('"+guitare.id+"quantity').value) == ''){(document.getElementById('"+guitare.id+"quantity').value) = 1;}console.log(document.getElementById('"+guitare.id+"quantity').value + ' en qty de ' + idToSendForCart);addGuitareToCart(idToSendForCart , document.getElementById('"+guitare.id+"quantity').value)");//mtnt on veut envoyer ces deux donnees dans une fonction qui va récupérer la guitare et la qty en parametres, et l ajouter au tableau d items du panier
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
        //console.log(div1.id);
        }

    }

    cart = cartCleaner(cart);
}


function microChilds() {
    removeChildren();
    var container = document.getElementById("microsContainer");
    var tableauDesId = [];
    for(let i=0; i<microsTabObject.length; i++) {
        //faire un tableau contenant les id des guitares
        var id = microsTabObject[i].id;
        tableauDesId.push(id);
        //console.log(tableauDesId);

        var micro = microsTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
            div1.setAttribute("id", micro.id);
            //on hover, get id of the micro
            div1.setAttribute("onmouseover", "idToSendForCart = this.id;");
        
        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", micro.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            //on hover zoom
            img.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            img.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
            //we want to differentiate the divs for each product
            div3.setAttribute("id", micro.id+"div");

        var h4 = document.createElement("h4");

        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = micro.Name;

        var p1 = document.createElement("p");
            p1.innerHTML = micro.Details;

        var p2 = document.createElement("p");

        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = micro.Price+"€";

        p2.appendChild(Strong2);

        /*
        On veut mtnt un boutton moins, un affichage de la qté et un boutton plus
        */
        {var quantityInput = document.createElement("input");
            quantityInput.setAttribute("type", "number");
            quantityInput.setAttribute("id", micro.id+"quantity");
            quantityInput.setAttribute("placeholder", "1");
            quantityInput.setAttribute("max", micro.Stock);
            quantityInput.setAttribute("style", "width: 50px; margin-left: 10px; margin-right: 10px; display: block; text-align: center; border: none; color: black; background-color: #f1f1f1;");
            quantityInput.setAttribute("onchange", "if(this.value > "+micro.Stock+"){this.value = "+micro.Stock+";}else if(this.value < 1){this.value = 1;}else{console.log(this.value);}");
            quantityInput.setAttribute("onkeyup", "if(this.value > "+micro.Stock+"){this.value = "+micro.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");
            quantityInput.setAttribute("onkeydown", "if(this.value > "+micro.Stock+"){this.value = "+micro.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");

        }

        {var buttonMoins = document.createElement("button");
            buttonMoins.setAttribute("type", "button");
            buttonMoins.setAttribute("class", "btn btn-primary");
            buttonMoins.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonMoins.innerHTML = "-";
            buttonMoins.setAttribute("onclick", "if(document.getElementById('"+micro.id+"quantity').value > 1){document.getElementById('"+micro.id+"quantity').value = document.getElementById('"+micro.id+"quantity').value - 1;}else{document.getElementById('"+micro.id+"quantity').value = 1;}console.log(document.getElementById('"+micro.id+"quantity').value);");
        }

        {var buttonPlus = document.createElement("button");
            buttonPlus.setAttribute("type", "button");
            buttonPlus.setAttribute("class", "btn btn-primary");
            buttonPlus.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonPlus.innerHTML = "+";
            buttonPlus.setAttribute("onclick", "if(document.getElementById('"+micro.id+"quantity').value < 5 ){document.getElementById('"+micro.id+"quantity').value++;}else{document.getElementById('"+micro.id+"quantity').value = 5;}console.log(document.getElementById('"+micro.id+"quantity').value);" );
        }

        {var buttonStock = document.createElement("button");
            buttonStock.setAttribute("type", "button");
            buttonStock.setAttribute("class", "btn btn-primary");
            buttonStock.setAttribute("style", "margin-top: 10px; margin-bottom: 30px;");
            buttonStock.innerHTML = "Voir le stock";
            //on hover on the button, show stock
            buttonStock.setAttribute("onmouseover", "this.innerHTML = 'Stock : "+micro.Stock+"';");
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
            button.setAttribute("onclick", "if((document.getElementById('"+micro.id+"quantity').value) == ''){(document.getElementById('"+micro.id+"quantity').value) = 1;}console.log(document.getElementById('"+micro.id+"quantity').value + ' en qty de ' + idToSendForCart);addMicroToCart(idToSendForCart , document.getElementById('"+micro.id+"quantity').value)");//mtnt on veut envoyer ces deux donnees dans une fonction qui va récupérer la micro et la qty en parametres, et l ajouter au tableau d items du panier
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
        //console.log(div1.id);
        }
    }
    cart = cartCleaner(cart);

}


function batterieChilds() {
    removeChildren();
    var container = document.getElementById("batteriesContainer");
    var tableauDesId = [];
    for(let i=0; i<batteriesTabObject.length; i++) {
        //faire un tableau contenant les id des guitares
        var id = batteriesTabObject[i].id;
        tableauDesId.push(id);
        //console.log(tableauDesId);

        var batterie = batteriesTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
            div1.setAttribute("id", batterie.id);
            //on hover, get id of the batterie
            div1.setAttribute("onmouseover", "idToSendForCart = this.id;");
        
        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", batterie.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");
            //on hover zoom
            img.setAttribute("onmouseover", "this.style.transform='scale(1.2)';");
            img.setAttribute("onmouseout", "this.style.transform='scale(1)';");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
            //we want to differentiate the divs for each product
            div3.setAttribute("id", batterie.id+"div");

        var h4 = document.createElement("h4");

        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = batterie.Name;

        var p1 = document.createElement("p");
            p1.innerHTML = batterie.Details;

        var p2 = document.createElement("p");

        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = batterie.Price+"€";

        p2.appendChild(Strong2);

        /*
        On veut mtnt un boutton moins, un affichage de la qté et un boutton plus
        */
        {var quantityInput = document.createElement("input");
            quantityInput.setAttribute("type", "number");
            quantityInput.setAttribute("id", batterie.id+"quantity");
            quantityInput.setAttribute("placeholder", "1");
            quantityInput.setAttribute("max", batterie.Stock);
            quantityInput.setAttribute("style", "width: 50px; margin-left: 10px; margin-right: 10px; display: block; text-align: center; border: none; color: black; background-color: #f1f1f1;");
            quantityInput.setAttribute("onchange", "if(this.value > "+batterie.Stock+"){this.value = "+batterie.Stock+";}else if(this.value < 1){this.value = 1;}else{console.log(this.value);}");
            quantityInput.setAttribute("onkeyup", "if(this.value > "+batterie.Stock+"){this.value = "+batterie.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");
            quantityInput.setAttribute("onkeydown", "if(this.value > "+batterie.Stock+"){this.value = "+batterie.Stock+";}else if(this.value < 1){this.value = 1;}else{this.value = this.value+1}");

        }

        {var buttonMoins = document.createElement("button");
            buttonMoins.setAttribute("type", "button");
            buttonMoins.setAttribute("class", "btn btn-primary");
            buttonMoins.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonMoins.innerHTML = "-";
            buttonMoins.setAttribute("onclick", "if(document.getElementById('"+batterie.id+"quantity').value > 1){document.getElementById('"+batterie.id+"quantity').value = document.getElementById('"+batterie.id+"quantity').value - 1;}else{document.getElementById('"+batterie.id+"quantity').value = 1;}console.log(document.getElementById('"+batterie.id+"quantity').value);");
        }

        {var buttonPlus = document.createElement("button");
            buttonPlus.setAttribute("type", "button");
            buttonPlus.setAttribute("class", "btn btn-primary");
            buttonPlus.setAttribute("style", "margin-top: 10px; margin-bottom: 30px; margin-right: 10px; display: block;");
            buttonPlus.innerHTML = "+";
            buttonPlus.setAttribute("onclick", "if(document.getElementById('"+batterie.id+"quantity').value < 5 ){document.getElementById('"+batterie.id+"quantity').value++;}else{document.getElementById('"+batterie.id+"quantity').value = 5;}console.log(document.getElementById('"+batterie.id+"quantity').value);" );
        }

        {var buttonStock = document.createElement("button");
            buttonStock.setAttribute("type", "button");
            buttonStock.setAttribute("class", "btn btn-primary");
            buttonStock.setAttribute("style", "margin-top: 10px; margin-bottom: 30px;");
            buttonStock.innerHTML = "Voir le stock";
            //on hover on the button, show stock
            buttonStock.setAttribute("onmouseover", "this.innerHTML = 'Stock : "+batterie.Stock+"';");
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
            button.setAttribute("onclick", "if((document.getElementById('"+batterie.id+"quantity').value) == ''){(document.getElementById('"+batterie.id+"quantity').value) = 1;}console.log(document.getElementById('"+batterie.id+"quantity').value + ' en qty de ' + idToSendForCart);addBatterieToCart(idToSendForCart , document.getElementById('"+batterie.id+"quantity').value)");//mtnt on veut envoyer ces deux donnees dans une fonction qui va récupérer la batterie et la qty en parametres, et l ajouter au tableau d items du panier
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
        //console.log(div1.id);
        }
    }
    cart = cartCleaner(cart);
}

