let axios = require('axios');
export default async (amount,name,currency) =>{ 

   //this is a customId than you can assign to identify the transactions
   let orderId = "1000003224343"  // this can be the userID in the crm 
  
   //client details 
   let email = 'user@email.com'
   let phone = '+90 555 555 5555'
   // let name = 'userName'

   //transaction details
   let posData = 'here any details can be passed'
   let itemDesc = 'describe the transaction'

   let notificationURL = "https://clientzones.mblhightech.com/clientzones/bitPay/webhook.php"
   let notificationEmail = "ares.r@icb.capital"
   let redirectURL = "http://www.example.com"
   let API_TOKEN = process.env.API_KEY_BITPAY
   // console.log(process.env.API_KEY_BITPAY)

   //invoice creation
   let resource_url = 'https://test.bitpay.com/invoices';
   let post_data = {
      "currency": currency,
      "price": amount,
      "orderId": orderId,
      "fullNotifications": true,
      "extendedNotifications": true,
      "transactionSpeed": "medium",
      "notificationURL": notificationURL,
      "notificationEmail": notificationEmail,
      "redirectURL": redirectURL,
      "buyer": {
         "email":email,
         "name": name,
         "phone":phone,
         "address1": "2630 Hegal Place",
         "address2": "Apt 42",
         "locality": "Alexandria",
         "region": "VA",
         "postalCode": "23242",
         "country": "US",
         "notify": true
      },
      "posData": posData,
      "itemDesc": itemDesc,
      "token": API_TOKEN
   };
   let headers = {"x-accept-version": "2.0.0", "Content-type": "application/json"};
   let options = {
      url: resource_url,
      method: 'POST',
      data: post_data,
      headers: headers
   };

   const response = await axios(options)
   .then( function (response){
      return response.data
   });
   
   return response;
}