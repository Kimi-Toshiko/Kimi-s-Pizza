// SHOW ADDITIONAL INFO FOR PIZZA AND DRINKS
function showAdditionalInfo (btn, types) {
	btn.onclick = function() {
		types.style.display = "block";
		console.log('pizza sizes are displayed');
	}
}
// IN PIZZAS
showAdditionalInfo(btnUrbanCombo, sizesUrbanCombo);
showAdditionalInfo(btnUrbanBeast, sizesUrbanBeast);
showAdditionalInfo(btnJackAndDeloresSpecial, sizesJackAndDoloresSpecial);
showAdditionalInfo(btnGreekPizza, sizesGreekPizza);
showAdditionalInfo(btnVeggiePower1, sizesVeggiePower1);
showAdditionalInfo(btnVeggiePower2, sizesVeggiePower2);
showAdditionalInfo(btnThaiOneOn, sizesThaiOneOn);
showAdditionalInfo(btnBarbecueChicken, sizesBarbecueChicken);
showAdditionalInfo(btnHawaiian, sizesHawaiian);
showAdditionalInfo(btnCheesePlease, sizesCheesePlease);
// IN DRINKS SHOW TYPES OF DRINKS
showAdditionalInfo(btnByTheCan, drinkTypeByTheCan);
showAdditionalInfo(btnByTheBottle, drinkTypeByTheBottle);
showAdditionalInfo(btnGuayakiYerbaMateTerere, drinkTypeGuayakiYerbaMateTerere);
showAdditionalInfo(btnGuayakiYerbaMate, drinkTypeGuayakiYerbaMate);
showAdditionalInfo(btnBoylanSodas, drinkTypeBoylanSodas);

// PUT ITEMS INTO ORDER TABLE
function makeOrderItem(name, price) {
	return {
		name: name,
		price: '$' + price.toFixed(2)
	}
}
// SALADS AND SLIDES
var urbanChef = makeOrderItem('Urban Chef', 10.50);
var arugulaSalad = makeOrderItem('Arugula Salad', 9.50);
var caesarSalad = makeOrderItem('Caesar Salad', 8.50);
var greekSalad = makeOrderItem('Greek Salad', 9.75);
var roastCarrots = makeOrderItem('Roast Carrots', 6.95);

// DRINKS
var byTheCanCoke = makeOrderItem('Coke in the Can', 1.25);
var byTheCanDietCoke = makeOrderItem('Diet Coke in the Can', 1.25);
var byTheCan7Up = makeOrderItem('7up in the Can', 1.25);
var byTheCanRootBeer = makeOrderItem('Root Beer in the Can', 1.25);
var byTheCanDrPeper = makeOrderItem('DrPeper in the Can', 1.25);
var byTheCanDietDrPeper = makeOrderItem('Diet DrPeper in the Can', 1.25);

var byTheBottleCrystalGeyser = makeOrderItem('Bottle Crystal Geyser', 1.25);
var byTheBottleSparklingLemon = makeOrderItem('Bottle Sparkling Lemon', 1.25);
var byTheBottleSparklingLime = makeOrderItem('Bottle Sparkling Lime', 1.25);
var byTheBottleSparklingPlain = makeOrderItem('Bottle Sparkling Plain', 1.25);

var guayakiYerbaMateTerereBluephoria = makeOrderItem('Guayaki Yerba Mate/Terere Bluephoria', 2.95);
var guayakiYerbaMateTerereEnlightenMint = makeOrderItem('Guayaki Yerba Mate/Terere Enlighten Mint', 2.95);
var guayakiYerbaMateTerereRevelBerry = makeOrderItem('Guayaki Yerba Mate/Terere Revel Berry', 2.95);
var guayakiYerbaMateTerereMint = makeOrderItem('Guayaki Yerba Mate/Terere Mint', 2.95);
var guayakiYerbaMateTererePeach = makeOrderItem('Guayaki Yerba Mate/Terere Peach', 2.95)
var guayakiYerbaMateTerereTraditional = makeOrderItem('Guayaki Yerba Mate/Terere Traditional', 2.95);

var guayakiYerbaMatePomegranate = makeOrderItem('Guayaki Yerba Mate Pomegranate', 2.25);
var guayakiYerbaMateGrapefruitGinger = makeOrderItem('Guayaki Yerba Mate Grapefruit Ginger', 2.25);
var guayakiYerbaMateBlackberryMint = makeOrderItem('Guayaki Yerba Mate Blackberry Mint', 2.25);

var boylanSodasRootBeer = makeOrderItem('Boylan Sodas Root-beer', 2.95);
var boylanSodasGingerale = makeOrderItem('Boylan Sodas Gingerale', 2.95);
var boylanSodasBlackCherryCola = makeOrderItem('Boylan Sodas Black Cherry Cola', 2.95);
var boylanSodasVanillaCreamCola = makeOrderItem('Boylan Sodas Vanilla Cream Cola', 2.95);

// COMBINATIONS
var urbanCombo12 = makeOrderItem('Urban Combo 12"', 19.25);
var urbanCombo14 = makeOrderItem('Urban Combo 14"', 25.25);
var urbanCombo18 = makeOrderItem('Urban Combo 18"', 29.00);

var urbanBeast12 = makeOrderItem('Urban Beast 12"', 19.25);
var urbanBeast14 = makeOrderItem('Urban Beast 14"', 25.25);
var urbanBeast18 = makeOrderItem('Urban Beast 18"', 29.00);

var jackAndDoloresSpecial12 = makeOrderItem('Jack and Dolores Special 12"', 19.25);
var jackAndDoloresSpecial14 = makeOrderItem('Jack and Dolores Special 14"', 25.25);
var jackAndDoloresSpecial18 = makeOrderItem('Jack and Dolores Special 18"', 29.00);

var trueGreek12 = makeOrderItem('True Greek 12"', 19.25);
var trueGreek14 = makeOrderItem('True Greek 14"', 25.25);
var trueGreek18 = makeOrderItem('True Greek 18"', 29.00);

var veggiePower112 = makeOrderItem('Veggie Power#1 12"', 19.25);
var veggiePower114 = makeOrderItem('Veggie Power#1 14"', 25.25);
var veggiePower118 = makeOrderItem('Veggie Power#1 18"', 29.00);

var veggiePower212 = makeOrderItem('Veggie Power#2 12"', 18.00);
var veggiePower214 = makeOrderItem('Veggie Power#2 14"', 23.50);
var veggiePower218 = makeOrderItem('Veggie Power#2 18"', 27.00);

var thaiOneOn12 = makeOrderItem('Thai One On 12"', 18.00);
var thaiOneOn14 = makeOrderItem('Thai One On 14"', 23.50);
var thaiOneOn18 = makeOrderItem('Thai One On 18"', 27.00);

var barbecueChicken12 = makeOrderItem('Barbecue Chicken 12"', 18.00);
var barbecueChicken14 = makeOrderItem('Barbecue Chicken 14"', 23.50);
var barbecueChicken18 = makeOrderItem('Barbecue Chicken 18"', 27.00);

var hawaiian12 = makeOrderItem('Hawaiian 12"', 15.50);
var hawaiian14 = makeOrderItem('Hawaiian 14"', 19.50);
var hawaiian18 = makeOrderItem('Hawaiian 18"', 23.00);

var cheesePlease12 = makeOrderItem('Cheese Please! 12"', 13.00);
var cheesePlease14 = makeOrderItem('Cheese Please! 14"', 14.25);
var cheesePlease18 = makeOrderItem('Cheese Please! 18"', 19.00);

// SLICES
var cheeseSlice = makeOrderItem('Cheese Slice', 3.75);
var salamiSlice = makeOrderItem('Salami Slice', 4.25);
var pepperoniSlice = makeOrderItem('Pepperoni Slice', 4.50);
var comboSlice = makeOrderItem('Combo Slice', 5.50);

// PIADINAS
var prosciuttoPiadina = makeOrderItem('Prosciutto Piadina', 9.50);
var chickenPiadina = makeOrderItem('Chicken Piadina', 8.75);
var eggplantPiadina = makeOrderItem('Eggplant Piadina', 8.50);

// HTML ELEMENT
var dataTable = document.querySelector('.data-table');


// TO ADD ORDERED PRODUCT TO ORDER LIST 
var i = 1;
function addToOrderList(btn, product, block) {
	btn.onclick = function() {
		var tableRow = document.createElement('tr');
		dataTable.appendChild(tableRow);

		var tableData1 = document.createElement('td');
		tableRow.append(tableData1);
		tableData1.className = 'number-cell';

		var tableData2 = document.createElement('td');
		tableRow.append(tableData2);
		tableData2.className = 'product-name-cell';

		var tableData3 = document.createElement('td');
		tableRow.append(tableData3);
		tableData3.className = 'price-cell';

		tableData1.innerHTML = i++;
		tableData2.innerHTML = product.name;
		tableData3.innerHTML = product.price;

		block.style.display = "none";
	}
}

// SALADS AND SLIDES
addToOrderList(btnUrbanChef, urbanChef);
addToOrderList(btnArugulaSalad, arugulaSalad);
addToOrderList(btnCaesarSalad, caesarSalad);
addToOrderList(btnGreekSalad, greekSalad);
addToOrderList(btnRoastCarrots, roastCarrots);
// DRINKS
// BY THE CAN
addToOrderList(btnByTheCanCoke, byTheCanCoke, drinkTypeByTheCan);
addToOrderList(btnByTheCanDietCoke, byTheCanDietCoke, drinkTypeByTheCan);
addToOrderList(btnByTheCan7Up, byTheCan7Up, drinkTypeByTheCan);
addToOrderList(btnByTheCanRootBeer, byTheCanRootBeer, drinkTypeByTheCan);
addToOrderList(btnByTheCanDrPeper, byTheCanDrPeper, drinkTypeByTheCan);
addToOrderList(btnByTheCanDietDrPeper, byTheCanDietDrPeper, drinkTypeByTheCan);
// BY THE BOTTLE
addToOrderList(btnByTheBottleCrystalGeyser, byTheBottleCrystalGeyser, drinkTypeByTheBottle);
addToOrderList(btnByTheBottleSparklingLemon, byTheBottleSparklingLemon, drinkTypeByTheBottle);
addToOrderList(btnByTheBottleSparklingLime, byTheBottleSparklingLime, drinkTypeByTheBottle);
addToOrderList(btnByTheBottleSparklingPlain, byTheBottleSparklingPlain, drinkTypeByTheBottle);
// GUAYAKI YERBA MATE/TERERE
addToOrderList(btnGuayakiYerbaMateTerereBluephoria, guayakiYerbaMateTerereBluephoria, drinkTypeGuayakiYerbaMateTerere);
addToOrderList(btnGuayakiYerbaMateTerereEnlightenMint, guayakiYerbaMateTerereEnlightenMint, drinkTypeGuayakiYerbaMateTerere);
addToOrderList(btnGuayakiYerbaMateTerereRevelBerry, guayakiYerbaMateTerereRevelBerry, drinkTypeGuayakiYerbaMateTerere);
addToOrderList(btnGuayakiYerbaMateTerereMint, guayakiYerbaMateTerereMint, drinkTypeGuayakiYerbaMateTerere);
addToOrderList(btnGuayakiYerbaMateTererePeach, guayakiYerbaMateTererePeach, drinkTypeGuayakiYerbaMateTerere);
addToOrderList(btnGuayakiYerbaMateTerereTraditional, guayakiYerbaMateTerereTraditional, drinkTypeGuayakiYerbaMateTerere);
// GUAYAKI YERBA MATE
addToOrderList(btnGuayakiYerbaMatePomegranate, guayakiYerbaMatePomegranate, drinkTypeGuayakiYerbaMate);
addToOrderList(btnGuayakiYerbaMateGrapefruitGinger, guayakiYerbaMateGrapefruitGinger, drinkTypeGuayakiYerbaMate);
addToOrderList(btnGuayakiYerbaMateBlackberryMint, guayakiYerbaMateBlackberryMint, drinkTypeGuayakiYerbaMate);
// BOYLAN SODAS
addToOrderList(btnBoylanSodasRootBeer, boylanSodasRootBeer, drinkTypeBoylanSodas);
addToOrderList(btnBoylanSodasGingerale, boylanSodasGingerale, drinkTypeBoylanSodas);
addToOrderList(btnBoylanSodasBlackCherryCola, boylanSodasBlackCherryCola, drinkTypeBoylanSodas);
addToOrderList(btnBoylanSodasVanillaCreamCola, boylanSodasVanillaCreamCola, drinkTypeBoylanSodas);
// COMBINATIONS
// URBAN COMBO
addToOrderList(btnUrbanCombo12, urbanCombo12, sizesUrbanCombo);
addToOrderList(btnUrbanCombo14, urbanCombo14, sizesUrbanCombo);
addToOrderList(btnUrbanCombo18, urbanCombo18, sizesUrbanCombo);
// URBAN BEAST
addToOrderList(btnUrbanBeast12, urbanBeast12, sizesUrbanBeast);
addToOrderList(btnUrbanBeast14, urbanBeast14, sizesUrbanBeast);
addToOrderList(btnUrbanBeast18, urbanBeast18, sizesUrbanBeast);
// JACK AND DOLORES SPECIAL
addToOrderList(btnJackAndDeloresSpecial12, jackAndDoloresSpecial12, sizesJackAndDoloresSpecial);
addToOrderList(btnJackAndDoloresSpecial14, jackAndDoloresSpecial14, sizesJackAndDoloresSpecial);
addToOrderList(btnJackAndDoloresSpecial18, jackAndDoloresSpecial18, sizesJackAndDoloresSpecial);
// TRUE GREEK
addToOrderList(btnTrueGreek12, trueGreek12, sizesGreekPizza);
addToOrderList(btnTrueGreek14, trueGreek14, sizesGreekPizza);
addToOrderList(btnTrueGreek18, trueGreek18, sizesGreekPizza);
// VEGGIE POWER #1
addToOrderList(btnVeggiePower112, veggiePower112, sizesVeggiePower1);
addToOrderList(btnVeggiePower114, veggiePower114, sizesVeggiePower1);
addToOrderList(btnVeggiePower118, veggiePower118, sizesVeggiePower1);
// VEGGIE POWER #2
addToOrderList(btnVeggiePower212, veggiePower212, sizesVeggiePower2);
addToOrderList(btnVeggiePower214, veggiePower214, sizesVeggiePower2);
addToOrderList(btnVeggiePower218, veggiePower218, sizesVeggiePower2);
// THAI ONE ON
addToOrderList(btnThaiOneOn12, thaiOneOn12, sizesThaiOneOn);
addToOrderList(btnThaiOneOn14, thaiOneOn14, sizesThaiOneOn);
addToOrderList(btnThaiOneOn18, thaiOneOn18, sizesThaiOneOn);
// BARBECUE CHCIKEN
addToOrderList(btnBarbecueChicken12, barbecueChicken12, sizesBarbecueChicken);
addToOrderList(btnBarbecueChicken14, barbecueChicken14, sizesBarbecueChicken);
addToOrderList(btnBarbecueChicken18, barbecueChicken18, sizesBarbecueChicken);
// HAWAIIAN
addToOrderList(btnHawaiian12, hawaiian12, sizesHawaiian);
addToOrderList(btnHawaiian14, hawaiian14, sizesHawaiian);
addToOrderList(btnHawaiian18, hawaiian18, sizesHawaiian);
// CHEESE PLEASE!
addToOrderList(btnCheesePlease12, cheesePlease12, sizesCheesePlease);
addToOrderList(btnCheesePlease14, cheesePlease14, sizesCheesePlease);
addToOrderList(btnCheesePlease18, cheesePlease18, sizesCheesePlease);
// SLICES
addToOrderList(btnCheeseSlice, cheeseSlice);
addToOrderList(btnSalamiSlice, salamiSlice);
addToOrderList(btnPepperoniSlice, pepperoniSlice);
addToOrderList(btnComboSlices, comboSlice);
// PIADINAS
addToOrderList(btnProsciuttoPiadina, prosciuttoPiadina);
addToOrderList(btnChickenPiadina, chickenPiadina);
addToOrderList(btnEggplantPiadina, eggplantPiadina);


// SHOW ORDER DIALOGUE
btnCart.onclick = function() {
	listOfOrders.style.display = "block";
}
btnClose.onclick = function() {
	listOfOrders.style.display = "none";
}
btnOrderToForm.onclick = function() {
	orderForm.style.display = "block";
}
btnCloseForm.onclick = function() {
	orderForm.style.display = "none";
}

btnPayOrder.onclick = function() {
	if (firstName.value.length === 0) {
		window.alert('All fields should be filled!')
	}
	else if (lastName.value.length === 0) {
		window.alert('All fields should be filled!')
	}
	else if (addressField.value.length === 0) {
		window.alert('All fields should be filled!')
	}
	else if (phoneNumber.value.length === 0) {
		window.alert('All fields should be filled!')
	}
	else {
		window.alert('Your order is successfully placed');
	}
}