IDRegistry.genItemID("upgradeOverclocker");
Item.createItem("upgradeOverclocker", "Overclocker Upgrade", {name: "upgrade_overclocker", meta: 0}, {stack: 16});

IDRegistry.genItemID("upgradeEnergyStorage");
Item.createItem("upgradeEnergyStorage", "Energy Storage Upgrade", {name: "upgrade_energy_storage", meta: 0});

//IDRegistry.genItemID("upgradeTransformer");
//Item.createItem("upgradeTransformer", "Transformer Upgrade", {name: "upgrade_transformer", meta: 0});

IDRegistry.genItemID("upgradeRedstone");
Item.createItem("upgradeRedstone", "Redstone Signal Inverter Upgrade", {name: "upgrade_redstone_inv", meta: 0});

IDRegistry.genItemID("upgradePulling");
IDRegistry.genItemID("upgradePulling1");
IDRegistry.genItemID("upgradePulling2");
IDRegistry.genItemID("upgradePulling3");
IDRegistry.genItemID("upgradePulling4");
IDRegistry.genItemID("upgradePulling5");
IDRegistry.genItemID("upgradePulling6");
Item.createItem("upgradePulling", "Pulling Upgrade", {name: "upgrade_pulling", meta: 0});
Item.createItem("upgradePulling1", "Pulling Upgrade", {name: "upgrade_pulling", meta: 1}, {isTech: true});
Item.createItem("upgradePulling2", "Pulling Upgrade", {name: "upgrade_pulling", meta: 2}, {isTech: true});
Item.createItem("upgradePulling3", "Pulling Upgrade", {name: "upgrade_pulling", meta: 3}, {isTech: true});
Item.createItem("upgradePulling4", "Pulling Upgrade", {name: "upgrade_pulling", meta: 4}, {isTech: true});
Item.createItem("upgradePulling5", "Pulling Upgrade", {name: "upgrade_pulling", meta: 5}, {isTech: true});
Item.createItem("upgradePulling6", "Pulling Upgrade", {name: "upgrade_pulling", meta: 6}, {isTech: true});

IDRegistry.genItemID("upgradeEjector");
IDRegistry.genItemID("upgradeEjector1");
IDRegistry.genItemID("upgradeEjector2");
IDRegistry.genItemID("upgradeEjector3");
IDRegistry.genItemID("upgradeEjector4");
IDRegistry.genItemID("upgradeEjector5");
IDRegistry.genItemID("upgradeEjector6");
Item.createItem("upgradeEjector", "Ejector Upgrade", {name: "upgrade_ejector", meta: 0});
Item.createItem("upgradeEjector1", "Ejector Upgrade", {name: "upgrade_ejector", meta: 1}, {isTech: true});
Item.createItem("upgradeEjector2", "Ejector Upgrade", {name: "upgrade_ejector", meta: 2}, {isTech: true});
Item.createItem("upgradeEjector3", "Ejector Upgrade", {name: "upgrade_ejector", meta: 3}, {isTech: true});
Item.createItem("upgradeEjector4", "Ejector Upgrade", {name: "upgrade_ejector", meta: 4}, {isTech: true});
Item.createItem("upgradeEjector5", "Ejector Upgrade", {name: "upgrade_ejector", meta: 5}, {isTech: true});
Item.createItem("upgradeEjector6", "Ejector Upgrade", {name: "upgrade_ejector", meta: 6}, {isTech: true});

IDRegistry.genItemID("upgradeFluidEjector");
IDRegistry.genItemID("upgradeFluidEjector1");
IDRegistry.genItemID("upgradeFluidEjector2");
IDRegistry.genItemID("upgradeFluidEjector3");
IDRegistry.genItemID("upgradeFluidEjector4");
IDRegistry.genItemID("upgradeFluidEjector5");
IDRegistry.genItemID("upgradeFluidEjector6");
Item.createItem("upgradeFluidEjector", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 0});
Item.createItem("upgradeFluidEjector1", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 1}, {isTech: true});
Item.createItem("upgradeFluidEjector2", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 2}, {isTech: true});
Item.createItem("upgradeFluidEjector3", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 3}, {isTech: true});
Item.createItem("upgradeFluidEjector4", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 4}, {isTech: true});
Item.createItem("upgradeFluidEjector5", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 5}, {isTech: true});
Item.createItem("upgradeFluidEjector6", "Fluid Ejector Upgrade", {name: "upgrade_fluid_ejector", meta: 6}, {isTech: true});


Recipes.addShaped({id: ItemID.upgradeOverclocker, count: 1, data: 0}, [
	"aaa",
	"x#x",
], ['#', ItemID.circuitBasic, 0, 'x', ItemID.cableCopper1, 0, 'a', ItemID.cellWater, 0]);

Recipes.addShaped({id: ItemID.upgradeEnergyStorage, count: 1, data: 0}, [
	"aaa",
	"x#x",
	"aca"
], ['#', ItemID.storageBattery, -1, 'x', ItemID.cableCopper1, 0, 'a', 5, -1, 'c', ItemID.circuitBasic, 0]);

Recipes.addShaped({id: ItemID.upgradeRedstone, count: 1, data: 0}, [
	"x x",
	" # ",
	"x x",
], ['x', ItemID.plateTin, 0, '#', 69, -1]);

Recipes.addShaped({id: ItemID.upgradePulling, count: 1, data: 0}, [
	"aba",
	"x#x",
], ['#', ItemID.circuitBasic, 0, 'x', ItemID.cableCopper1, 0, 'a', 29, -1, 'b', 410, 0]);

Recipes.addShaped({id: ItemID.upgradeEjector, count: 1, data: 0}, [
	"aba",
	"x#x",
], ['#', ItemID.circuitBasic, 0, 'x', ItemID.cableCopper1, 0, 'a', 33, -1, 'b', 410, 0]);

Recipes.addShaped({id: ItemID.upgradeFluidEjector, count: 1, data: 0}, [
	"x x",
	" # ",
	"x x",
], ['x', ItemID.plateTin, 0, '#', ItemID.electricMotor, 0]);


function PULLING_UPGRADE_FUNC(machine, container, data, coords, direction){
	if(World.getThreadTime()%20 == 0){
		var items = [];
		for(var slotName in container.slots){
			if(slotName.match(/Source/)){
				var item = container.getSlot(slotName);
				if(item.count < 64){items.push(item);}
			}
		}
		if(items.length){
			var containers = UpgradeAPI.findNearestContainers(coords, direction);
			getItemsFrom(items, containers);
		}
	}
}

function EJECTOR_UPGRADE_FUNC(machine, container, data, coords, direction){
	var items = [];
	for(var slotName in container.slots){
		if(slotName.match(/Result/)){
			var item = container.getSlot(slotName);
			if(item.id){items.push(item);}
		}
	}
	if(items.length){
		var containers = UpgradeAPI.findNearestContainers(coords, direction);
		addItemsToContainers(items, containers);
	}
}

UpgradeAPI.registerUpgrade(ItemID.upgradeOverclocker, function(count, machine, container, data, coords){
	if(data.work_time){
		data.energy_consumption = Math.round(data.energy_consumption * Math.pow(1.6, count));
		data.work_time = Math.round(data.work_time * Math.pow(0.7, count));
	}
});

UpgradeAPI.registerUpgrade(ItemID.upgradeEnergyStorage, function(count, machine, container, data, coords){
	data.energy_storage += 10000 * count;
});

UpgradeAPI.registerUpgrade(ItemID.upgradePulling, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords);
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling1, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "down");
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling2, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "up");
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling3, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "north");
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling4, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "south");
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling5, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "west");
});
UpgradeAPI.registerUpgrade(ItemID.upgradePulling6, function(count, machine, container, data, coords){
	PULLING_UPGRADE_FUNC(machine, container, data, coords, "east");
});

UpgradeAPI.registerUpgrade(ItemID.upgradeEjector, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords);
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector1, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "down");
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector2, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "up");
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector3, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "north");
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector4, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "south");
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector5, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "west");
});
UpgradeAPI.registerUpgrade(ItemID.upgradeEjector6, function(count, machine, container, data, coords){
	EJECTOR_UPGRADE_FUNC(machine, container, data, coords, "east");
});

Item.registerUseFunction("upgradeEjector", function(coords, item, block){
	Player.setCarriedItem(ItemID["upgradeEjector" + (coords.side+1)], item.count);
});
for(var i = 1; i <= 6; i++){
Item.registerUseFunction("upgradeEjector"+i, function(coords, item, block){
	Player.setCarriedItem(ItemID.upgradeEjector, item.count);
});
}

Item.registerUseFunction("upgradePulling", function(coords, item, block){
	Player.setCarriedItem(ItemID["upgradePulling" + (coords.side+1)], item.count);
});
for(var i = 1; i <= 6; i++){
Item.registerUseFunction("upgradePulling"+i, function(coords, item, block){
	Player.setCarriedItem(ItemID.upgradePulling, item.count);
});
}

Item.registerUseFunction("upgradeFluidEjector", function(coords, item, block){
	Player.setCarriedItem(ItemID["upgradeFluidEjector" + (coords.side+1)], item.count);
});
for(var i = 1; i <= 6; i++){
Item.registerUseFunction("upgradeFluidEjector"+i, function(coords, item, block){
	Player.setCarriedItem(ItemID.upgradeFluidEjector, item.count);
});
}
