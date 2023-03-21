export default class UserService {
     static default_headers= {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     };
   
     static login(parameters){
      
          var endpoint="http://localhost:3036/api/organization/create";
       return fetch(endpoint, {
           method: "POST",
           headers: UserService.default_headers,
           body: JSON.stringify(parameters)
       })
       .then((response)=>response.json())
       .then((responseData) => {
             return responseData;
         }
       )
       .catch((error) => {
          console.log("ERROR......");
          console.log(error);
        });
      };
    
    }