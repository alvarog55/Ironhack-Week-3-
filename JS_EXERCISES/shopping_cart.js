var Shoppingcart = function(){
	this.items = []
}

Shoppingcart.prototype.addItem = function(item) {
	this.items.push(item)
}

Shoppingcart.prototype.show = function() {
	return "The total is " + (this.total_price() - this.count_apples());
}

Shoppingcart.prototype.count_apples = function(items) {
	var count = 0;
	for(var i = 0; i < this.items.length; i++){
    	if (this.items[i].name === "apple"){
    	 count++;	
    	}
    }
       return (Math.floor(count / 2)) * p1.price;
}

Shoppingcart.prototype.total_price = function(items) {
	var sum = 0;
	for (var i=0; i<this.items.length; i++) {
		sum += this.items[i].price;
 	}
 	if (this.items.length > 5) {
			sum *= 0.9;
	}
 	return sum;
}



var Product = function(name,price) {
	this.name = name;
	this.price = price;
}


var cart = new Shoppingcart();

var p1 = new Product("apple", 10)
var p2 = new Product("orange", 5)
var p3 = new Product("grapes", 15)
var p4 = new Product("banana", 20)
var p5 = new Product("watermelon", 50)

cart.addItem(p1);
cart.addItem(p1);
cart.addItem(p1);
cart.addItem(p1);
cart.addItem(p1);
cart.addItem(p1);

console.log(cart.show());
