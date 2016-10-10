// MODELO DE DATOS
//
// var carrito = [
//    {
//      "id": "item1",
//      "nombre": "Sandia",
//      "precio": 2,
//      "img": "assets/img/sandia.jpg"
//    }
//    
//]
var carrito = [];

function addToCart(div) {
    var id = div.id;
    var nombre = div.firstChild.nextSibling.firstChild.data;
    var precio = div.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var img = div.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.src;
    console.log("El producto es:  ID=" + id + " NOMBRE=" + nombre + " PRECIO=" + precio + " IMAGEN=" + img);
}

function subProduct(div) {

}

function deleteProduct(div) {

}