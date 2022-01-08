var con = document.querySelector(".container")
var inp = document.querySelector(".submit")
var dis = document.querySelector(".display")


function ao(e){
    e.preventDefault();
    console.log("h1");
       var abc = inp.value 
     
       fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+abc)
       .then(res=>  res.json())
       .then(data=> show(data.meals))
}

function show(data){
    console.log(data,"hh");
    let inp = document.getElementsByTagName("input")[0]
    console.log(inp);
    let ress=""
    data.map((e)=>{
        ress+=`<div class="main">
        <img class="pic" src=${e.strMealThumb}>
        <div class="textdiv">
        <h1 class="dish">${e.strMeal}</h1>
        <h2>${e.strArea}</h2>
      
        </div>
        <button class="btn">details</button>
       
        </div>`
        dis.innerHTML=ress
    })

    let btn = document.querySelectorAll('button')
    btn.forEach(ei=>{
        ei.onclick=(el)=>{
            let parent = el.target.parentElement
            console.log(parent);
            let txt = parent.querySelector(".dish").innerText
            console.log(txt);

            let filter = data.filter(en=>{
                return en.strMeal==txt
            })
              showdetails(filter)
        }
    })
}

       function showdetails(filter){
           con.innerHTML=`<div class="details">
           <div class="snap-i">
             <img class="snap" src=${filter[0].strMealThumb}>
             </div>
             <h1 class="food-cat">${filter[0].strCategory}</h1>
             <h3 class="ing">${filter[0].strIngredient1},${filter[0].strIngredient2},${filter[0].strIngredient3},${filter[0].strIngredient4}</h3>
             <p>${filter[0].strInstructions}</p>
           </div>`

       }

console.log("aaaaaa");