//! Promise task 2 is about fetch the data from the ISRO api ("https://isro.vercel.app/api/customer_satellites") and
//! displaying Id, country, Launch-Date, Mass, Launcher by using Promise and Fetch.

//! The div tag is slected by getElementsByClassName

const satellite = document.querySelector(".satellite");

//!Fetch and Promise
function satelliteDetails(){
    fetch("https://isro.vercel.app/api/customer_satellites")
    .then((res)=>res.json())
    .then((res1)=>satelliteloopDetails(res1))
    .catch((err)=>console.log(err))
    //!forEach loop is used to display the contents
}


function satelliteloopDetails(satDetails){
satDetails.customer_satellites.forEach((ele)=>{
   const card = document.createElement("div");
   card.setAttribute("class", "card");
   card.setAttribute("style", "width: 16rem;");
   card.innerHTML += `
   <div class= "card-body">
   <h1 class="card-title">${ele.country}</h1>
   <h4 class="card-subtitle mb-2 text-body-secondary">${ele.launch_date}</h4>
   <p class="card-text">ID : ${ele.id}</p>
    <p class="card-text">Mass : ${ele.mass} Kilograms</p>
    <p class="card-text">Launcher : ${ele.launcher}</p>
   
   </div>`;
   satellite.append(card);
})
}
 //!Function call  
satelliteDetails();
