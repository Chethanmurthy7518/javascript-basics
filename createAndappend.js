var test= document.createElement('div')
test.setAttribute('id','test')

var ul = document.createElement('ul')

document.body.appendChild(test)

test.appendChild(ul)

var li = document.createElement('li')

ul.appendChild(li)

console.log(test)


    