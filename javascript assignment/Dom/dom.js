const element = document.getElementById('test')
console.log('element ', element);

console.log(element.innerText);
console.log(element.innerHTML);
console.log(element.textContent);

// element.innerText ='<button> Good afternoon </button>'
element.innerHTML = '<button> Good afternoon </button>'


document.write('Welcome to Js Class')

console.log('.............');
 const pElement = document.createElement('p')
 console.log('pElement', pElement);
 pElement.textContent = 'Monday mock'
 document.body.appendChild(pElement)
 element.insertAdjacentHTML('afterend', '<p>Mock interview </p>')
 console.log('......................');

 console.log('========================');
 const h1Elements = document.getElementsByTagName('h1')
 console.log('h1Elements' ,h1Elements);

//  const demoClassElement = document.getElementsByClassName('demo')
//  console.log('demoClassElement',demoClassElement);
 const demoClassElement = document.querySelectorAll('.demo')
 console.log('demoClassElement',demoClassElement);
 console.log('=====================');
 const h1Element = document.querySelector('h1')
 console.log('h1Element' , h1Element);
 console.log('..............');
 const h1Elemets = document.querySelectorAll('p')
 console.log('h1Elemets',h1Elemets);