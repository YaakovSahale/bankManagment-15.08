

//!...........................1

const bankCustomers = [
  {
    id: 0001,
    Name: "kobi",
    phone: "058-9997456",
    email: "myemail@gmail.com",
    balance: 78630,
  },
  {
    id: 0002,
    Name: "zehava",
    phone: "053-784522",
    email: "sharo785@gmail.com",
    balance: 1000000,
  },
  {
    id: 0003,
    Name: "yaron",
    phone: "052-1122365",
    email: "krak89dil@gmail.com",
    balance: 100,
  },
];




// function blacklist(userId){
//   let blockedlist = [1,4,78,33,5,67,9]

//   for (let i = 0; i < blockedlist.length; i++) {
//     const blockedUser = blockedlist[i];
//     if(blockedUser == userId){
//       return false
//     }
    
//   }
//   return true

// }




//!...............................   2.a



// function addClient (newClient){
//     bankCustomers.push(newClient)
// }

// newCustomer =  {
//     id: 88,
//     Name: "yaron",
//     phone: "052-1122365",
//     email: "krak89dil@gmail.com",
//     balance: 56,
// }


// if(blacklist(newCustomer.id)){

//   addClient(newCustomer)

// }
// else{
//   console.log("you are blocked");
// }




// console.log(bankCustomers);





//!...............................   2.b



// function getClient(clientId){
//     for (let i = 0; i < bankCustomers.length; i++) {
//         if (clientId == bankCustomers[i].id){
//             console.log(bankCustomers[i]);
//             break;
//         } 
//     }
// }


// getClientId = 0002




// if(blacklist(newCustomer.id)){

//   getClient(getClientId)

// }
// else{
//   console.log("you are blocked");
// }





//!...............................   2.c





// function deleteClient (clientId) {
//     for (let i = 0; i < bankCustomers.length; i++) {
//         if (clientId == bankCustomers[i].id){
//             bankCustomers.splice(i,1);
//             break;
//         } 
//     }
// }




// if(blacklist(newCustomer.id)){
//   deleteClient (0003)
// }
// else{
//   console.log("you are blocked");
// }

// console.log(bankCustomers);





//!...............................   2.d-e



// function withDrawMoney (clientId, amount) {
//     for (let i = 0; i < bankCustomers.length; i++) {
//         if (clientId == bankCustomers[i].id){
//             bankCustomers[i].balance -= amount;
//             console.log( bankCustomers[i]);
//             break;
//         } 
//     }
// }




// if(blacklist(newCustomer.id)){
//   withDrawMoney(0003,9999)
// }
// else{
//   console.log("you are blocked");
// }



//!...................................tasks.1



// function moreThan400 (customersArray){
//   for (let i = 0; i < customersArray.length; i++) {
//     if(customersArray[i].balance > 400){
//       console.log(customersArray[i]);
//     }
//   }
// }

// moreThan400(bankCustomers)


//!...................................tasks.2



// function lessThan200(customersArray){
//   for (let i = 0; i < customersArray.length; i++) {
//     if(customersArray[i].balance < 200){
//       console.log(customersArray[i]);
//     }   
//   }
// }

// lessThan200(bankCustomers)


//!....................................tasks.3



// function lessThan200(customersArray){
//   for (let i = 0; i < customersArray.length; i++) {
//     if(customersArray[i].balance >= 1000000){
//       console.log(customersArray[i]);
//     }   
//   }
// }

// lessThan200(bankCustomers)


