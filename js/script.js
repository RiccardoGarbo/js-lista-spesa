//1-Creo la variabile array con tutti gli elementi della lista
const shoppingList = ['Riso', 'Pasta', 'Pane', 'Cereali', 'Latte', 'Pollo']
//2-Creo la variabile che conterrà la lista nel documento HTML
const listElement = document.getElementById('lista-spesa')
//3-Creo la variabile che conterrà l'ul
let list = `<ul>`
let i = 0
//5-Utilizzo il ciclo while per creare tutti gli elementi della lista e inserirli nell ul 
while (i < shoppingList.length) {
    list += `<li>${shoppingList[i]}</li>`
    i++;
}
//6-Chiudo la variabile che contiene la lista
list += `</ul>`