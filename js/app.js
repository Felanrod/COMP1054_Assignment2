// Assignment 2 | COMP1054
// Joel Murphy

/* Variables
-------------------------------------------------- */
var masses = [40, 40, 42, 42]
var amountsList = [['200', '10 g', '6 g', '0 g', '5 mg', '35 mg', '25 g', '1 g', '21 g', '3 g', '', '', '', ''],
			['220', '12 g', '7 g', '0.1 g', '10 mg', '35 mg', '24 g', '0 g', '20 g', '3 g', '', '', '', ''],
			['230', '13 g', '7 g', '0.1 g', '5 mg', '90 mg', '23 g', '1 g', '19 g', '4 g', '', '', '', ''],
			['220', '13 g', '7 g', '0.1 g', '5 mg', '45 mg', '24 g', '0 g', '21 g', '4 g', '', '', '', '']];
var dvsList = [['', '15%', '30%', '', '', '1%', '8%', '4%', '', '', '2%', '0%', '6%', '10%'],
			['', '18%', '36%', '', '', '1%', '8%', '0%', '', '', '0%', '0%', '8%', '2%'],
			['', '20%', '36%', '', '', '4%', '8%', '4%', '', '', '0%', '0%', '6%', '6%'],
			['', '20%', '36%', '', '', '2%', '8%', '0%', '', '', '4%', '0%', '10%', '0%']];
var ingredientsList = ['Sugar, modified milk ingredients, wheat flour, cocoa mass, cocoa butter, palm, palm kernel, coconut and vegetable oils, sunflower and soy lecithin, yeast, sodium bicarbonate, salt, natural flavours.',
					'Sugar, modified milk ingredients, cocoa butter, wheat flour, palm oil, cocoa mass, sunflower lecithin, natural flavour, salt, sodium bicarbonate. May contain peanuts and tree nuts.',
					'Sugar and icing sugar, modified milk ingredients, cocoa butter, peanuts, wheat flour, cocoa mass, palm oil, peanut flour, sunflower lecithin, salt, natural flavour, sodium bicarbonate. may contain tree nuts.',
					'Sugar, Modified Milk Ingredients, Cocoa Butter, Palm Oil, Cocoa Mass, Wheat Flour, Cheese Curds, Sunflower Lecithin, Salt, Baking Soda, Protease, Xylanase, Natural Flavours. May contain peanuts and tree nuts.'];
var mass = document.querySelector('#mass');
var barButtons = document.querySelectorAll('nav img');
var amounts = document.querySelectorAll('tbody tr td:nth-of-type(1)');
var dvs = document.querySelectorAll('tbody tr td:nth-of-type(2)');
var ingredients = document.querySelector('#midCol section p');
var bigImg = document.querySelector('article img');

for (i = 0; i < barButtons.length; i++) {
	barButtons[i].onclick = (function(i) {
		return function() {
			mass.textContent = masses[i];
			ingredients.textContent = ingredientsList[i];
			bigImg.src = this.src;
			for (j = 0; j < amountsList[i].length; j++) {
				amounts[j].textContent = amountsList[i][j];
				dvs[j].textContent = dvsList[i][j];
			}
		}
	})(i);
}

