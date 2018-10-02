

(function(){
    function changeBodyColor(){
        return new Promise(function(resolve, reject){
            var bodyElement = document.getElementsByTagName('body')[0];
            bodyElement.className = 'soft-body';
            resolve(bodyElement);
        })
    }

    function addSubmitButtonToBody(bodyElement){
        return new Promise(function(resolve, reject){
            if (bodyElement){
                var createdButton = document.createElement('button')
                createdButton.innerText = 'Submit';
                createdButton.id = 'submit-button'
                bodyElement.appendChild(createdButton);
                resolve(bodyElement);
            } else {
                reject('No body available')
            }
        })
    }


    function waitUntillButtonIsClicked(){
        return new Promise(function(resolve, reject){
            var button = document.getElementById('submit-button');
            button.addEventListener('click', function(e){
                var helloWorldTitle = document.querySelector('h1');
                var successTitle = document.querySelector('h2');
        
                helloWorldTitle.className = 'hidden';
                successTitle.className = 'bolder';
                resolve('Success!')
            });
        })
    }

    function showDelayedMessage(message){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                alert('Hey hey! ' + message)
                resolve();
            }, 5000);
        });
    }

    changeBodyColor()
    .then(function(bodyElement){
        return addSubmitButtonToBody(bodyElement);
    }).then((res) => {
        return waitUntillButtonIsClicked();
    })
    .then((message) => {
        showDelayedMessage(message);
    })
    .catch(e => {
        alert('AAAA' + e)
    })

})()
