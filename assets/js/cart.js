function addToCart(div) {
    // Datos del producto
    var id = div.id;
    var name = div.firstChild.nextSibling.firstChild.data;
    var price = div.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var img = div.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.src;
    
    
    
    var cartItem =
            '<div class="cart-list__item__title">' +
            '<p><b>'+ name + '</b> <i class="fa fa-minus-square"></i><i class="fa fa-plus-square"></i><i class="fa fa-trash"></i></p>' +
            '</div>' +
            ' <div class="cart-list__item__left">' +
            ' <img class="cart-list__item__image" src="'+img+'"/>' +
            ' </div>' +
            '<div class="cart-list__item__info">' +
            ' <p><b>Unidades:</b> <span class="cart-list__item__quantity">1</span></p>' +
            ' <p><b>Precio:</b> <span class="cart-list__item__price">'+ price +'</span></p>' +
            '</div>';
    var node = document.createElement("div");
    node.className="cart-list__item";
    node.id=id;
    node.innerHTML += cartItem;
    document.getElementById("cartList").appendChild(node);
    
    
    console.log("El producto es:  ID=" + id + " NOMBRE=" + nombre + " PRECIO=" + precio + " IMAGEN=" + img);
}

function subProduct(div) {

}

function deleteProduct(div) {

}

function addProduct(div) {

}