
const url = 'http://www.mocky.io/v2/5d73bf3d3300003733081869';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      var authors = data;
      var bat = '';
    var tab = 
  '<tr><th>Name</th> <th>Username</th> <th>Email</th><th>Age</th><th>Adress</th><th>Phone</th><th>Website</th><th>Company</th> </tr>';

    authors.map(function(author) {
  ;

     
      
  
      
      bat += '<div class="card"><img src="profile.jpg" width="100px" /><span class="name">'
      + author.name 
      + '</span> <span> Mobile: <b>' 
      + author.phone 
      + '</b></span> <span> Company: <b>' 
      + author.company 
      + '</b></span> <span> Website: <b>' 
      + author.website 
      + '</b></span> Age:<span class="age">' 
       + author.age +'</span></div>';
      

      
      document.getElementById("people-list").innerHTML = bat;  

    });
  })
  .catch(function(error) {
    console.log(error);
  });

