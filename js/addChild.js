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


function guitareChilds() {
    removeChildren();
    var container = document.getElementById("guitaresContainer");
    for(let i=0; i<guitaresTabObject.length; i++) {
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

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
        var h4 = document.createElement("h4");
        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = guitare.Name;
        var p1 = document.createElement("p");
            p1.innerHTML = guitare.Details;
        var p2 = document.createElement("p");
        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = guitare.Price+"€";
        p2.appendChild(Strong2);
        var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-primary");
            button.innerHTML = "Ajouter au panier";

        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
    }
}


function microChilds() {
    removeChildren();
    var container = document.getElementById("microsContainer");
    for(let i=0; i<guitaresTabObject.length; i++) {
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

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
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
            button.innerHTML = "Ajouter au panier";

        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
    }
}


function batterieChilds() {
    removeChildren();
    var container = document.getElementById("batteriesContainer");
    for(let i=0; i<guitaresTabObject.length; i++) {
        var battery = batteriesTabObject[i];
        var div1 = document.createElement("div");
            div1.setAttribute("class", "row");
            div1.setAttribute("style", "margin-bottom: 20px;");
            div1.setAttribute("style", "border: none; color: black;");
        var div2 = document.createElement("div");
            div2.setAttribute("class", "col-sm-4");    
        
        var img = document.createElement("img");
            img.setAttribute("src", battery.Image);
            img.setAttribute("class", "img-responsive");
            img.setAttribute("style", "width:100%; object-fit: contain; max-height: 150px;");

        div2.appendChild(img);

        var div3 = document.createElement("div");
            div3.setAttribute("class", "col-sm-8");
        var h4 = document.createElement("h4");
        var Strong1 = document.createElement("strong");
            Strong1.innerHTML = battery.Name;
        var p1 = document.createElement("p");
            p1.innerHTML = battery.Details;
        var p2 = document.createElement("p");
        var Strong2 = document.createElement("strong");
            Strong2.innerHTML = battery.Price+"€";
        p2.appendChild(Strong2);
        var button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "btn btn-primary");
            button.innerHTML = "Ajouter au panier";

        p2.appendChild(Strong2);
        h4.appendChild(Strong1);
        div3.appendChild(h4);
        div3.appendChild(p1);
        div3.appendChild(p2);
        div3.appendChild(button);
        div1.appendChild(div2);
        div1.appendChild(div3);
        container.appendChild(div1);
    }
}
