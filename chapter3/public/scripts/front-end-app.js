(function(axios){
  var balanceContainer = document.getElementById('balance-contaner');
  var atmForm = document.querySelector('#atm-form');
  var atmFormMoneyAmoundInput = document.querySelector('#moneySum');
  var atmFormDepositButton = document.querySelector('#deposit-button');
  var atmFormWidthrawButton = document.querySelector('#widthraw-button');


  function performAtmOperation(operation, moneyAmount){
    return axios.put('/balance', {
        operation: operation,
        amount: moneyAmount
    }).then(function (response) {
        var balance = response.data.balance;
        balanceContainer.innerText = 'Current balance: ' + balance
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
  }

  axios.get('/balance')
    .then(function (response) {
        var balance = response.data.balance;
        balanceContainer.innerText = 'Current balance: ' + balance
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });

    atmFormDepositButton.addEventListener('click', function(e){
        var moneyAmount = atmFormMoneyAmoundInput.value;
        performAtmOperation('put', moneyAmount)
        .then(function(){
            atmFormMoneyAmoundInput.value = '';
        });
    })

    atmFormWidthrawButton.addEventListener('click', function(e){
        var moneyAmount = atmFormMoneyAmoundInput.value;
        performAtmOperation('pull', moneyAmount).then(function(){
            atmFormMoneyAmoundInput.value = '';
        });
    })

    atmForm.addEventListener('submit', function(e){
        e.preventDefault();
    })

    


})(axios);