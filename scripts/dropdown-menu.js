// DROPDOWN MENU
saladsAndSlidesItems.style.display = "none";
drinksItems.style.display = "none";
combinationsItems.style.display = "none";
slicesItems.style.display = "none";
piadinasItems.style.display = "none";

// FUNCTION TO SHOW AND HIDE BLOCKS
function showAndHideBlocks(btn, item) {
	btn.onclick = function() {
		if (item.style.display === "none") {
			item.style.display = "block";
		}
		else {
			item.style.display = "none";
		}
	};
};

showAndHideBlocks(btnSaladsAndSlides, saladsAndSlidesItems);
showAndHideBlocks(btnDrinks, drinksItems);
showAndHideBlocks(btnCombinations, combinationsItems);
showAndHideBlocks(btnSlices, slicesItems);
showAndHideBlocks(btnPiadinas, piadinasItems);