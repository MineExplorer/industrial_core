IDRegistry.genItemID("nanoSaber");
Item.setElectricItem("nanoSaber", "Nano Saber", {name: "nano_saber", meta: 0});
ChargeItemRegistry.registerItem(ItemID.nanoSaber, 100000, 1, true, 10, true);
Item.setToolRender(ItemID.nanoSaber, true);

Recipes.addShaped({id: ItemID.nanoSaber, count: 1, data: NANO_SABER_DURABILITY}, [
	"ca ",
	"ca ",
	"bxb"
], ['x', ItemID.storageCrystal, -1, 'a', ItemID.plateAlloy, 0, 'b', ItemID.carbonPlate, 0, "c", 348, 0], RECIPE_FUNC_TRANSPORT_ENERGY);


var NANO_SABER_DURABILITY = 10000;

ToolAPI.registerSword(ItemID.nanoSaber, {level: 0, durability: NANO_SABER_DURABILITY, damage: 4}, {
	damage: 0,
	onBroke: function(item){
		item.data = Math.min(item.data, NANO_SABER_DURABILITY);
		return true;
	},
	onAttack: function(item, mob){
		item.data -= 2;
		this.damage = item.data < NANO_SABER_DURABILITY ? 16 : 0;
	}
});

Callback.addCallback("tick", function(){
	if(World.getThreadTime() % 10 == 0){
		var item = Player.getCarriedItem()
		if(item.id == ItemID.nanoSaber){
			item.data = Math.min(item.data+1, NANO_SABER_DURABILITY);
			Player.setCarriedItem(item.id, 1, item.data);
		} 
	}
});