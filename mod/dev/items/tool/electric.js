IDRegistry.genItemID("electricHoe");
IDRegistry.genItemID("electricTreetap");
Item.setElectricItem("electricHoe", "Electric Hoe", {name: "electric_hoe", meta: 0});
Item.setElectricItem("electricTreetap", "Electric Treetap", {name: "electric_treetap", meta: 0});
ChargeItemRegistry.registerItem(ItemID.electricHoe, 10000, 0, true, 50, true);
ChargeItemRegistry.registerItem(ItemID.electricTreetap, 10000, 0, true, 50, true);
Item.setToolRender(ItemID.electricHoe, true);

Recipes.addShaped({id: ItemID.electricHoe, count: 1, data: 201}, [
	"pp",
	" p",
	" x"
], ['x', ItemID.powerUnitSmall, 0, 'p', ItemID.plateIron, 0]);

Recipes.addShapeless({id: ItemID.electricTreetap, count: 1, data: 201}, [{id: ItemID.powerUnitSmall, data: 0}, {id: ItemID.treetap, data: 0}]);


Item.registerUseFunction("electricHoe", function(coords, item, block){
	if(item.data < 201 && (block.id==2 || block.id==3 || block.id==110) && coords.side==1){ 
		World.setBlock(coords.x, coords.y, coords.z, 60);
		World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
		Player.setCarriedItem(item.id, 1, item.data + 1);
	}
});
Item.registerUseFunction("electricTreetap", function(coords, item, block){
	if(item.data < 201 && block.id == BlockID.rubberTreeLogLatex && block.data == coords.side - 2){
		World.setBlock(coords.x, coords.y, coords.z, BlockID.rubberTreeLog);
		Player.setCarriedItem(item.id, 1, item.data + 1);
		Entity.setVelocity(
			World.drop(
				coords.relative.x + 0.5,
				coords.relative.y + 0.5,
				coords.relative.z + 0.5,
				ItemID.latex, 1 + parseInt(Math.random() * 3), 0
			),
			(coords.relative.x - coords.x) * 0.25,
			(coords.relative.y - coords.y) * 0.25,
			(coords.relative.z - coords.z) * 0.25
		);
	}
});