IDRegistry.genItemID("scanner");
IDRegistry.genItemID("scannerAdvanced");
Item.setElectricItem("scanner", "OD Scanner", {name: "scanner", meta: 0});
Item.setElectricItem("scannerAdvanced", "OV Scanner", {name: "scanner_advanced", meta: 0});
ChargeItemRegistry.registerItem(ItemID.scanner, 10000, 0, true, 50, true);
ChargeItemRegistry.registerItem(ItemID.scannerAdvanced, 10000, 0, true, 250, true);

Recipes.addShaped({id: ItemID.scanner, count: 1, data: 250}, [
	" a ",
	"cbc",
	"xxx"
], ['x', ItemID.cableCopper1, 0, 'a', 348, 0, "b", ItemID.storageBattery, -1, "c", ItemID.circuitBasic, 0], RECIPE_FUNC_TRANSPORT_ENERGY);

Recipes.addShaped({id: ItemID.scannerAdvanced, count: 1, data: 40}, [
	" a ",
	"asa",
	"xxx"
], ['x', ItemID.cableGold2, 0, 'a', 348, 0, "s", ItemID.scanner, -1], RECIPE_FUNC_TRANSPORT_ENERGY);

Item.registerUseFunction("scanner", function(coords, item, block){
	if(item.data < Item.getMaxDamage(item.id)){
		Player.setCarriedItem(item.id, 1, item.data-1);
	}
});