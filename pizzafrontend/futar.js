document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const selectButton = document.getElementById("select");
    
    createButton.addEventListener("click", async function(){
        let fazon = document.getElementById("fazon").value;
        let baseUrl='http://localhost/pizza/index.php?futar/'+fazon;
        const formdata= new FormData(document.getElementById("pizzaForm")); 
        let options={
            method: "POST",
            mode: "cors",
            body: formdata
        };
        let response= await fetch(baseUrl, options);
    });
    updateButton.addEventListener("click", async function(){
        let baseUrl='http://localhost/pizza/index.php?futar/'+fazon;
        let object={
            fazon: document.getElementById("fazon").value,
            fnev: document.getElementById("fnev").value,
            ftel: document.getElementById("ftel").value
        };
        let body=JSON.stringify(object);
        let options={
            method: "PUT",
            mode: "cors",
            body: body
        };
        let response= await fetch(baseUrl, options);
    });
    readButton.addEventListener("click", async function(){
        let baseUrlFutar="http://localhost/pizza/index.php?futar";
        let optionsFutar={
            method: "GET",
            mode: "cors"
        };
        let responseFutar= await fetch(baseUrlFutar, optionsFutar);
        if(responseFutar.ok){
            let dataFutar= await responseFutar.json();
            futarokListazasa(dataFutar);
        }
        else{
            console.error("Hiba a szerver válaszában!");
        }
    });
    function futarokListazasa(futarok){
        let futarokDiv= document.getElementById("pizzalista");
        let card = futarFejlec();
        for(let futar of futarok){
            card+= futarSor(futar);
        }
        futarokDiv.innerHTML = card+"</div></div>";
    }
    function futarSor(futarok){
        let sor =`<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="futár.jpg" alt="Futár">
                    <div class="card-body">
                        <h4 class="card-text">Azonosító: <b>${futarok.fazon}</b></h4>
                        <p class="card-text">Név: ${futarok.fnev}</p>
                        <p class="card-text">Telefonszám: ${futarok.ftel, futarok.par}</p>
                        <button type="button" class="btn btn-outline-success" id="select" onclick="adatBetoltes(${futarok.fazon},'${futarok.fnev}','${futarok.ftel}')" >Kiválaszt</button>
                        <button type="button" class="btn btn-outline-danger" id="delete" onclick="adatTorles('${futarok.fazon}')" ><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>`
        return sor;
    }
    function futarFejlec(){
        let fejlec=`<div class="row">`;
        return fejlec;
    }
});
function adatBetoltes(fazon, fnev, ftel){
    let baseUrl='http://localhost/pizza/index.php?futar/'+fazon;
    let options={
        method: "GET",
        mode: "cors"
    };
    let response= fetch(baseUrl, options);
    document.getElementById("fazon").value=fazon;
    document.getElementById("fnev").value=fnev;
    document.getElementById("ftel").value=ftel;
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}
function adatTorles(fazon){
    let baseUrl='http://localhost/pizza/index.php?futar/'+fazon;
    let options={
        method: "DELETE",
        mode: "cors"
    };
    let response= fetch(baseUrl, options);
    response.then(function(response){
        if(response.ok){
            let data= response.json();
        }
        else{
            console.error("Hiba a szerverben!");
        }
    });
}