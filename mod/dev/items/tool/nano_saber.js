IDRegistry.genItemID("nanoSaber");
Item.createItem("nanoSaber", "Nano Saber", {name: "nano_saber", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.nano_saber, count: 1, data: Item.getMaxDamage(ItemID.nano_saber)}, [
		"ca ",
		"ca ",
	 	"bxb"
	], ['x', ItemID.storageCrystal, -1, 'a', ItemID.plateAlloy, 0, 'b', ItemID.carbonPlate, 0, 'c', 348], RECIPE_FUNC_TRANSPORT_ENERGY);
});

ChargeItemRegistry.registerItem(ItemID.nanoSaber, 100000, 1, true, 10);

var NANO_SABER_DURABILITY = 10000;

ToolAPI.registerSword(ItemID.nanoSaber, {level: 0, durability: NANO_SABER_DURABILITY, damage: 4}, {
	damage: 0,
	onBroke: function(item){
		item.data = Math.min(item.data, NANO_SABER_DURABILITY);
		return true;
	},
	onAttack: function(item, mob){
		item.data++;
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
