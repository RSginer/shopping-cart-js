var totalPrice = 0;
var cartCount = 0;
function addToCart(div) {
    // DATOS DEL PRODUCTO
    var id = div.id;
    var name = div.firstChild.nextSibling.firstChild.data;
    var price = div.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var img = div.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.src;

    if (!this.isInCart(id + "-cart")) {
        /* CREO EL ELEMENTO ITEM DE CARRITO*/
        var cartItem =
                '<div class="cart-list__item__title">' +
                '<p><b>' + name + '</b> <i onclick="subProduct(this)" class="fa fa-minus-square"></i><i onclick="addProduct(this)" class="fa fa-plus-square"></i><i class="fa fa-trash" onclick="deleteProduct(this)"></i></p>' +
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
        document.getElementById("cart-list").insertBefore(node, document.getElementById("cart-list").firstChild);
        this.updateTotal(price);
    } else {
        var nodeInCart = document.getElementById(id + "-cart");
        var nodeQuantity = nodeInCart.getElementsByTagName("p")[1].lastChild.firstChild;
        var quantity = parseInt(nodeQuantity.data);
        quantity++;
        nodeQuantity.data = quantity;
        var nodePrice = nodeInCart.getElementsByTagName("p")[2].lastChild.firstChild;
        var priceChanged = parseInt(quantity) * price;
        nodePrice.data = parseInt(priceChanged);
        this.updateTotal(price);
    }
}

function subProduct(div) {
    var item = div.parentNode.parentNode.parentNode;
    var idProduct = item.id.toString().split("-")[0];
    var product = document.getElementById(idProduct);
    var price = product.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var id = item.id;
    var nodePrice = item.getElementsByTagName("p")[2].lastChild.firstChild;
    var nodeQuantity = item.getElementsByTagName("p")[1].lastChild.firstChild;
    var quantity = parseInt(nodeQuantity.data);
    quantity--;
    if (quantity === 0) {
        this.deleteProduct(div);
    } else {
        nodeQuantity.data = quantity;
        var priceChanged = parseInt(quantity) * price;
        nodePrice.data = parseInt(priceChanged);
        this.updateTotal(-price);
    }
}

function deleteProduct(div) {
    var cartList = document.getElementById("cart-list");
    var item = div.parentNode.parentNode.parentNode;
    console.log(item);
    var price = item.getElementsByTagName("p")[2].lastChild.firstChild.data;
    cartList.removeChild(item);
    this.updateTotal(-parseInt(price));
}

function addProduct(div) {
    var item = div.parentNode.parentNode.parentNode;
    var idProduct = item.id.toString().split("-")[0];
    var product = document.getElementById(idProduct);
    var price = product.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling.firstChild.data;
    var id = item.id;
    var nodePrice = item.getElementsByTagName("p")[2].lastChild.firstChild;
    var nodeQuantity = item.getElementsByTagName("p")[1].lastChild.firstChild;
    var quantity = parseInt(nodeQuantity.data);
    quantity++;
    nodeQuantity.data = quantity;
    var priceChanged = parseInt(quantity) * price;
    nodePrice.data = parseInt(priceChanged);
    this.updateTotal(price);
}

function isInCart(id) {
    if (document.getElementById(id) === null) {
        return false;
    } else {
        return true;
    }
}

function updateTotal(price) {
    this.totalPrice += parseInt(price);
    if (price>0) {
            this.cartCount += 1;
    }else{
            this.cartCount -= 1;
    }

    document.getElementById("total-price").innerHTML = this.totalPrice;
    document.getElementById("cart-count-number").innerHTML = this.cartCount;
}