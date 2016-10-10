var total = 0;

function addToCart(div) {
    // Datos del producto
    var id = div.id;
    var name = div.firstChild.nextSibling.firstChild.data;
    var price = div.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var img = div.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.src;

    if (!this.isInCart(id+ "-cart")) {
        /* CREO EL ELEMENTO ITEM DE CARRITO*/
        var cartItem =
                '<div class="cart-list__item__title">' +
                '<p><b>' + name + '</b> <i class="fa fa-minus-square"></i><i class="fa fa-plus-square"></i><i class="fa fa-trash"></i></p>' +
                '</div>' +
                ' <div class="cart-list__item__left">' +
                ' <img class="cart-list__item__image" src="' + img + '"/>' +
                ' </div>' +
                '<div class="cart-list__item__info">' +
                ' <p><b>Unidades:</b> <span class="cart-list__item__quantity">1</span></p>' +
                ' <p><b>Precio:</b> <span class="cart-list__item__price">' + price + '</span></p>' +
                '</div>';
        var node = document.createElement("div");
        node.className = "cart-list__item";
        node.id = id + "-cart";
        node.innerHTML += cartItem;
        /* LO INSERTO EN EL DIV DE CARRITO*/
        document.getElementById("cartList").insertBefore(node,document.getElementById("cartList").firstChild);
    }else{
        var nodeInCart = document.getElementById(id+"-cart");
        var nodeQuantity = nodeInCart.lastChild.firstChild.nextSibling.firstChild.nextSibling.nextSibling.firstChild;
        var quantity = parseInt(nodeQuantity.data);
        quantity++;
        nodeQuantity.data=quantity;
        var nodePrice = nodeInCart.lastChild.lastChild.firstChild.nextSibling.nextSibling.firstChild;
        var priceChanged = parseInt(quantity) * price;
        nodePrice.data=parseInt(priceChanged); 
    }
}

function subProduct(div) {

}

function deleteProduct(div) {

}

function addProduct(div) {

}

function isInCart(id) {
    if (document.getElementById(id)===null) {
        return false;
    }else{
        return true;
    }
}