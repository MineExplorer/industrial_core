IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin"});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze Ingot", {name: "ingot_bronze"});

IDRegistry.genItemID("ingotSteel");
Item.createItem("ingotSteel", "Steel Ingot", {name: "ingot_steel"});

IDRegistry.genItemID("ingotLead");
Item.createItem("ingotLead", "Lead Ingot", {name: "ingot_lead"});


Callback.addCallback("PreLoaded", function(){
	// steel
	Recipes.addFurnace(265, ItemID.ingotSteel, 0);
	// from dust
	Recipes.addFurnace(ItemID.dustCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.dustTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.dustLead, ItemID.ingotLead, 0);
	Recipes.addFurnace(ItemID.dustBronze, ItemID.ingotBronze, 0);
	Recipes.addFurnace(ItemID.dustIron, 265, 0);
	Recipes.addFurnace(ItemID.dustGold, 266, 0);
	// from plates
	Recipes.addFurnace(ItemID.plateCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.plateTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.plateLead, ItemID.ingotLead, 0);
	Recipes.addFurnace(ItemID.plateBronze, ItemID.ingotBronze, 0);
	Recipes.addFurnace(ItemID.plateIron, 265, 0);
	Recipes.addFurnace(ItemID.plateGold, 266, 0);
	// from ore
	Recipes.addFurnace(ItemID.oreCrushedCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(ItemID.oreCrushedTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(ItemID.oreCrushedLead, ItemID.ingotLead, 0);
});