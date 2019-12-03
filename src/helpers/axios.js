/*

 - Here we learn about using `axios`. (asynchronous javascript) 🤓 .. 
 - ⚠️ : Make sure that's not the only way to do it ⛔️ .. 
 - Other Solution 💯 : 
    - XMLHttpRequest
    - Fetch API
    - Request
    - jQuery $.ajax
    - SuperAgent

*/

  const axios = require('axios');


  // We use a fake api : JSON PLACEHOLDER 🤥 .. 
  const API_URL = 'http://localhost:4000/users';


  // GET REQUEST 📥 : 
  axios.get(API_URL)
              .then( response => console.log(`Success GET ✅ \n ${response.data[0].firstName}`))
              .catch( error => console.log(`Failed GET ❌`));


  // POST REQUEST 📤 : 
  const data = {
    "id": 101,
    "firstName": "imed",
    "lastName": "jaberi",
    "email": "imed_jebari@hotmail.fr"
  }


  axios.post(API_URL,{data})
              .then( response => console.log(`Success POST ✅`))
              .catch( error => console.log(`Failed POST ❌`));

  // PATCH / PUT REQUEST (update) ♻️ : same as POST .. 

  
  // DELETE REQUEST ☠️ : 
  axios.delete(API_URL+'/1',{data}) // delete user with id equal to 1 .. 
              .then( response => console.log(`Success DELETE ✅`))
              .catch( error => console.log(`Failed DELETE ❌`));



  // THERE ARE SOME OTHER TYPES OF REQUESTS SUPPORTED BY AXIOS SUCH AS `HEAD` & `OPTIONS` 🦪 .. 

  // HEAD ==> get all headers informations 🧪 ..   
  // OPTIONS ==> get all communication options ( json / xml / text ) 🔬 .. 
