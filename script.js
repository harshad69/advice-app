var request = new XMLHttpRequest();

request.open('GET', 'https://api.adviceslip.com/advice', true);

request.onload = function() {
 var data = JSON.parse(this.response);

 let slipId = data.slip.id;
 let advice = data.slip.advice;
 console.log(slipId, advice);
 let id = document.getElementById('slip-id');
 let textId = document.createTextNode(slipId);
 id.appendChild(textId);

 let advices = document.getElementById('advice');
 let textAdvice = document.createTextNode(`"${advice}"`);
 advices.appendChild(textAdvice)
}

request.send();

