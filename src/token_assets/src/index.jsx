// import ReactDOM from 'react-dom'
// import React from 'react'
// import App from "./components/App";
// import { AuthClient }  from "@dfinity/auth-client";

// async function handleAuthenticated(authClient){
//   ReactDOM.render(<App loggedInPrincipal={userPrincipal} />, document.getElementById("root"));
// };

// const init = async () => { 
//   const authClient=await AuthClient.create();
//   if(await authClient.isAuthenticated()){
//     handleAuthenticated(authClient);
//     // ReactDOM.render(<App />, document.getElementById("root"));
//   } else{
//     await authClient.login({
//       identityProvider: "https://identity.ic0.app/#authorize",
//       onSuccess: ()=> {
//         handleAuthenticated(authClient);
//         // ReactDOM.render(<App />, document.getElementById("root"));
//       }
//     });
//   }
// }

// init();

import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));



