IDRegistry.genBlockID("miningPipe");
Block.createBlock("miningPipe", [
	{name: "Mining Pipe", texture: [["mining_pipe", 0]], inCreative: true},
	{name: "tile.mining_pipe.name", texture: [["mining_pipe", 1]], inCreative: false}
], BLOCK_TYPE_METAL_BLOCK);
ToolAPI.registerBlockMaterial(BlockID.miningPipe, "stone", 2);
Block.setBlockShape(BlockID.miningPipe, {x: 5/16, y: 0, z: 5/16}, {x: 11/16, y: 1, z: 11/16}, 0);
Block.registerDropFunction("miningPipe", function(coords, blockID, blockData, level){
	if(level > 1){
		return [[blockID, 1, 0]]
	}
	return [];
}, 2);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.miningPipe, count: 8, data: 0}, [
		"p p",
		"p p",
		"pxp",
	], ['x', 54, 0, 'a', ItemID.plateIron, 0]);
});