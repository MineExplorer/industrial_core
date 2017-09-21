IDRegistry.genItemID("quantumHelmet");
IDRegistry.genItemID("quantumChestplate");
IDRegistry.genItemID("quantumLeggings");
IDRegistry.genItemID("quantumBoots");

Item.createArmorItem("quantumHelmet", "§bQuantum Helmet", {name: "armor_quantum_helmet"}, {type: "helmet", armor: 5, durability: 8333, texture: "armor/quantum_1.png", isTech: true});
Item.createArmorItem("quantumChestplate", "§bQuantum Chestplate", {name: "armor_quantum_chestplate"}, {type: "chestplate", armor: 9, durability: 8333, texture: "armor/quantum_1.png", isTech: true});
Item.createArmorItem("quantumLeggings", "§bQuantum Leggings", {name: "armor_quantum_leggings"}, {type: "leggings", armor: 7, durability: 8333, texture: "armor/quantum_2.png", isTech: true});
Item.createArmorItem("quantumBoots", "§bQuantum Boots", {name: "armor_quantum_boots"}, {type: "boots", armor: 4, durability: 8333, texture: "armor/quantum_1.png", isTech: true});

Player.addItemCreativeInv(ItemID.quantumHelmet, 1, 1);
Player.addItemCreativeInv(ItemID.quantumChestplate, 1, 1);
Player.addItemCreativeInv(ItemID.quantumLeggings, 1, 1);
Player.addItemCreativeInv(ItemID.quantumBoots, 1, 1);

ChargeItemRegistry.registerItem(ItemID.quantumHelmet, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumChestplate, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumLeggings, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumBoots, 1000000, 2, true, 120);

IDRegistry.genItemID("quantumHelmetUncharged");
IDRegistry.genItemID("quantumChestplateUncharged");
IDRegistry.genItemID("quantumLeggingsUncharged");
IDRegistry.genItemID("quantumBootsUncharged");

Item.createArmorItem("quantumHelmetUncharged", "§bQuantum Helmet", {name: "armor_quantum_helmet"}, {type: "helmet", armor: 2, durability: 8333, texture: "armor/quantum_1.png", isTech: true});
Item.createArmorItem("quantumChestplateUncharged", "§bQuantum Chestplate", {name: "armor_quantum_chestplate"}, {type: "chestplate", armor: 6, durability: 8333, texture: "armor/quantum_1.png", isTech: true});
Item.createArmorItem("quantumLeggingsUncharged", "§bQuantum Leggings", {name: "armor_quantum_leggings"}, {type: "leggings", armor: 3, durability: 8333, texture: "armor/quantum_2.png", isTech: true});
Item.createArmorItem("quantumBootsUncharged", "§bQuantum Boots", {name: "armor_quantum_boots"}, {type: "boots", armor: 2, durability: 8333, texture: "armor/quantum_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantumHelmetUncharged, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumChestplateUncharged, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumLeggingsUncharged, 1000000, 2, true, 120);
ChargeItemRegistry.registerItem(ItemID.quantumBootsUncharged, 1000000, 2, true, 120);


MachineRecipeRegistry.registerRecipesFor("quantum-armor-charge", {
	"ItemID.quantumHelmet": {charged: ItemID.quantumHelmet, uncharged: ItemID.quantumHelmetUncharged},
	"ItemID.quantumHelmetUncharged": {charged: ItemID.quantumHelmet, uncharged: ItemID.quantumHelmetUncharged},
	"ItemID.quantumChestplate": {charged: ItemID.quantumChestplate, uncharged: ItemID.quantumChestplateUncharged},
	"ItemID.quantumChestplateUncharged": {charged: ItemID.quantumChestplate, uncharged: ItemID.quantumChestplateUncharged},
	"ItemID.quantumLeggings": {charged: ItemID.quantumLeggings, uncharged: ItemID.quantumLeggingsUncharged},
	"ItemID.quantumLeggingsUncharged": {charged: ItemID.quantumLeggings, uncharged: ItemID.quantumLeggingsUncharged},
	"ItemID.quantumBoots": {charged: ItemID.quantumBoots, uncharged: ItemID.quantumBootsUncharged},
	"ItemID.quantumBootsUncharged": {charged: ItemID.quantumBoots, uncharged: ItemID.quantumBootsUncharged},
}, true);


var QUANTUM_ARMOR_FUNCS_CHARGED = {
	maxDamage: Item.getMaxDamage(ItemID.quantumHelmet),
	runTime: 0,
	tick: function(slot, inventory, index){
		if(index==0) UIbuttons.enableButton("button_nightvision");
		var armor = MachineRecipeRegistry.getRecipeResult("quantum-armor-charge", slot.id);
		if(slot.data > this.maxDamage - 5){
			slot.id = armor.uncharged;
			slot.data = this.maxDamage - 4;
			return true;
		}
		else{
			if(slot.id != armor.charged){
				slot.id = armor.charged;
			}
			switch (index){
			case 0:
				Entity.clearEffect(player, MobEffect.poison);
				Entity.clearEffect(player, MobEffect.wither);
				if(UIbuttons.nightvision){
					if(World.getThreadTime()%480==0){slot.data++;}
					var coords = Player.getPosition();
					if(nativeGetLightLevel(coords.x, coords.y, coords.z)==15){
						Entity.addEffect(player, MobEffect.blindness, 25, 1);
					}
					Entity.addEffect(player, MobEffect.nightVision, 225, 1);
				}
			break;
			case 1:
				UIbuttons.enableButton("button_fly");
				//Entity.addEffect(player, MobEffect.fireResistance, 2, 1);
			break;
			case 2:
				var vel = Player.getVelocity();
				var horizontalVel = Math.sqrt(vel.x*vel.x + vel.z*vel.z)
				if(horizontalVel > 0.15){
					if(Math.abs(vel.y+0.078) < 0.001){this.runTime++;}
				}
				else{this.runTime = 0;}
				if(this.runTime > 2 && !Player.getFlying()){
					if(World.getThreadTime()%20==0){
						slot.data = Math.min(slot.data + Math.floor(horizontalVel*10), this.maxDamage - 4);
					}
					Entity.addEffect(player, MobEffect.movementSpeed, 3, 5);
				}
			break;
			case 3:
				UIbuttons.enableButton("button_jump");
				var vel = Player.getVelocity();
				if(vel.y < -0.2){
					Entity.addEffect(player, MobEffect.jump, 2, 255);
				}
			break;
			}
			return true;
		}
	}
};

Armor.registerFuncs("quantumHelmet", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumHelmetUncharged", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumChestplate", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumChestplateUncharged", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumLeggings", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumLeggingsUncharged", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumBoots", QUANTUM_ARMOR_FUNCS_CHARGED);
Armor.registerFuncs("quantumBootsUncharged", QUANTUM_ARMOR_FUNCS_CHARGED);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.quantumHelmet, count: 1, data: Item.getMaxDamage(ItemID.quantumHelmet)}, [
		"a#a",
		"bxb"
	], ['#', ItemID.storageLapotronCrystal, -1, 'x', ItemID.nanoHelmet, -1, 'a', ItemID.plateReinforcedIridium, 0, 'b', BlockID.reinforcedGlass, 0], RECIPE_FUNC_TRANSPORT_ENERGY);
	
	Recipes.addShaped({id: ItemID.quantumChestplate, count: 1, data: Item.getMaxDamage(ItemID.quantumChestplate)}, [
		"bxb",
		"a#a",
		"aca"
	], ['#', ItemID.storageLapotronCrystal, -1, 'x', ItemID.nanoChestplate, -1, 'a', ItemID.plateReinforcedIridium, 0, 'b', ItemID.plateAlloy, 0, 'c', ItemID.jetpack, -1], RECIPE_FUNC_TRANSPORT_ENERGY);
	
	Recipes.addShaped({id: ItemID.quantumLeggings, count: 1, data: Item.getMaxDamage(ItemID.quantumLeggings)}, [
		"m#m",
		"axa",
		"c c"
	], ['#', ItemID.storageLapotronCrystal, -1, 'x', ItemID.nanoLeggings, -1, 'a', ItemID.plateReinforcedIridium, 0, 'm', BlockID.machineBlockBasic, 0, 'c', 348, 0], RECIPE_FUNC_TRANSPORT_ENERGY);
	
	Recipes.addShaped({id: ItemID.quantumBoots, count: 1, data: Item.getMaxDamage(ItemID.quantumBoots)}, [
		"axa",
		"b#b"
	], ['#', ItemID.storageLapotronCrystal, -1, 'x', ItemID.nanoBoots, -1, 'a', ItemID.plateReinforcedIridium, 0, 'b', ItemID.plateAlloy, 0], RECIPE_FUNC_TRANSPORT_ENERGY);
});
