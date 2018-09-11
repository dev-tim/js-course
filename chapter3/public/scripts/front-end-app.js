(function(axios){

   // Make a request for a user with a given ID
   axios.get('/accounts-fake')
        .then(function (response) {
          var currentbalance = response.data.balance;
          document.querySelector('#current-balance-data').innerText = 'Balance: ' + currentbalance;
        })
        .catch(function (error) {
            debugger;
            console.log(error);
        })
}(axios))