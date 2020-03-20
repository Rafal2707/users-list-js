let users = ['Ola','Ania','Tomek','Bartek']

users.forEach(function(element,index){
    let listItem = document.createElement('li');
    listItem.innerText = element
    console.log(listItem)
    listItem.classList.add('user')
    document.getElementsByClassName('users-list')[0].appendChild(listItem)

});