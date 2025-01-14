onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/occultism/ritual/';
    recipes = [
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 60,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_crusher',
            ingredients: ['#forge:ores/iron', '#forge:ores/gold', '#forge:ores/copper', '#forge:ores/silver'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_crusher'
        }
    ];

    /*
        Ingredient Display in JEI
            ingredients: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
