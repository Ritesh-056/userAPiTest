function clickTofetch(){
   window.location.href = "user.html";
}


function loadApiData(){

  var items = document.getElementById("items");
  let output = "";

   var url = 'https://api.github.com/users';
      fetch(url)
      .then(response =>{return response.json()})
      .then(data =>{
    
         for (var i =0 ; i<data.length; i++){
            console.log("The size of the data is :"  + data.length)
            output +=
            `
                      <div class="site">
                      <img src="${data[i]["avatar_url"]}" alt="this is user logo" height="100" width="100">
                      <h1><b>${data[i]["login"]}</b></h1>
                      </div>
          
               `;
             items.innerHTML = output ;   
         }
      });
}