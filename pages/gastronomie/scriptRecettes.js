const recipesList = {
    "paella_valencienne": {
        name: "Paëlla Valencienne",
        defaultAmountOfPeople: 8,

        // En minutes
        preparationTime: 60,
        cookingTime: 80,

        ingredients: [
            { quantity: 1, name: "verre d'huile d'olive", },
            { quantity: 2, name: "tomates concassées" },
            { quantity: 1.5, unit: "kg", name: "de poulet" },
            { quantity: 1.2, unit: "kg", name: "de lapin" },
            { quantity: 300, unit: "g", name: "d'haricots vert plats" },
            { quantity: 200, unit: "g", name: "de garrofo (gros haricots blancs)" },
            { quantity: 6, name: "petits artichauts" },
            { quantity: 1, name: "cuillère à café de safran" },
            { quantity: 2, name: "branches de romarin" },
            { quantity: 1, name: "cuillère à café de piment doux" },
            { quantity: 1, name: "pincée de sel" },
            { quantity: 500, unit: "g", name: "de riz à paëlla de Valence" },
            { quantity: 1, unit: "l", name: "d'eau" },
            { quantity: 1, name: "citron" },
        ],
        steps: [
            "Dans une poêle à paëlla, faites chauffer l'huile d'olive.",
            "Faites revenir les morceaux de poulet et de lapin. Une fois bien dorés, disposez-les sur le bord de la poêle.",
            "Faites de même avec les haricots verts et les artichauts au centre du récipient.",
            "Ajoutez les tomates concassées au centre. Une fois les tomates frites, remuez le tout, salez.",
            "Ajoutez le piment doux, les haricots garrofo, puis versez l'eau en ajoutant le safran.",
            "Portez le tout à ébullition puis laissez cuire 30 minutes à feu doux. Ajoutez de l'eau si nécessaire.",
            "Versez le riz. Laissez cuire à feu fort pendant 5 minutes, puis répartissez le riz dans la poêle.",
            "Laissez encore cuire à feu doux pendant 20 minutes.",
            "Décorez de quartiers de citron et de branches de romarin, puis servez aussitôt."
        ],

        images: [
            "../../assets/imgs/gastronomie/paella_valencienne1.jpg",
            "../../assets/imgs/gastronomie/paella_valencienne2.jpg",
        ],
    },

    "paella_mixte": {
        name: "Paëlla Mixte",
        defaultAmountOfPeople: 8,

        // En minutes
        preparationTime: 35,
        cookingTime: 35,

        ingredients: [
            { quantity: 2, name: "poivrons" },
            { quantity: 500, unit: "g", name: "de riz" },
            { quantity: 1, unit: "kg", name: "de tomate" },
            { quantity: 2, name: "oignons" },
            { quantity: 3, name: "doses de safran" },
            { quantity: 5, name: "cuillères à soupe d'huile d'olive" },
            { quantity: 10, unit: "g", name: "de poivre" },
            { quantity: 10, unit: "g", name: "de sel" },
            { quantity: 1, unit: "kg", name: "de filet de poulet" },
            { quantity: 500, unit: "g", name: "de calamar" },
            { quantity: 1, unit: "l", name: "de moules" },
            { quantity: 15, name: "crevettes" },
            { quantity: 1, name: "chorizo" },
            { quantity: 3, name: "gousses d'ail" },
            { quantity: 1, unit: "l", name: "de bouillon de volaille" },
        ],

        steps: [
            "Découpez le poulet en morceaux, émincez le chorizo et les poivrons, pelez et concassez les tomates, hachez les oignons et l'ail.",
            "Nettoyez les moules et décortiquez les crevettes si vous le souhaitez.",
            "Mettez l'huile dans le plat et faites dorer les morceaux de poulet.",
            "Ajoutez les calamars, les oignons tout en remuant puis mettre les tomates, les poivrons, l'ail, le safran, le sel et le poivre.",
            "Laissez cuire 5 minutes en remuant avant d'incorporer le riz, le chorizo et le bouillon.",
            "Plongez les crevettes et les moules.",
            "Portez à ébullition puis laisser cuire environ 30-35 minutes."
        ],

        images: [
            "../../assets/imgs/gastronomie/paella_mixte1.jpg",
            "../../assets/imgs/gastronomie/paella_mixte2.jpg",
        ],
    },


    "paëlla_fruit_mer": {
        name: "Paëlla aux Fruits de Mer",
        defaultAmountOfPeople: 5,

        // En minutes
        preparationTime: 30,
        cookingTime: 30,

        ingredients: [
            { quantity: 45, unit: "ml", name: "d’huile d’olive" },
            { quantity: 1, name: "oignon haché" },
            { quantity: 2, name: "gousses d’ail entières" },
            { quantity: 2, name: "tomates" },
            { quantity: 5, unit: "g", name: "de pimenton (paprika fumé doux)" },
            { quantity: 5, unit: "g", name: "de sucre" },
            { quantity: 15, name: "pistils de safran" },
            { quantity: 4, name: "calmars (environ 600 g)" },
            { quantity: 500, unit: "g", name: "de riz blanc à grains longs" },
            { quantity: 250, unit: "ml", name: "de vin blanc" },
            { quantity: 750, unit: "ml", name: "de fumet de poisson" },
            { quantity: 12, name: "grosses crevettes (calibre 21/25), crues" },
            { quantity: 450, unit: "g", name: "de moules" },
            { quantity: 12, name: "palourdes" },
        ],

        steps: [
            "Hachez les oignons, pelez et écrasez les gousses d'ail, coupez les tomates en dés, les calmars en rondelles et décortiquez les crevettes.",
            "Dans une grande poêle ou dans une poêle à paëlla, chauffez l’huile à feu doux-moyen. Faites cuire l’oignon et l’ail 2 minutes.",
            "Ajouter les tomates, le pimenton, le sucre et le safran.",
            "Remuez et faites cuire 10 minutes, jusqu’à ce que les tomates soient réduites en purée.",
            "Ajouter les calmars et cuire 1 minute.",
            "Ajoutez le riz, versez le vin et le fumet de poisson, remuez le tout puis salez et poivrez.",
            "Portez à ébullition, puis faites cuire entre 10 et 12 minutes à feu doux en remuant de temps en temps.",
            "Ajoutez les crevettes, les moules et les palourdes.",
            "Couvrez la poêle d’une feuille de papier d’aluminium et prolongez la cuisson de 8 à 10 minutes, jusqu’à l’ouverture des coquillages.",
        ],

        images: [
            "../../assets/imgs/gastronomie/paella_fruitMer2.jpg",
            "../../assets/imgs/gastronomie/paella_fruitMer1.jpg",
        ],
    },

    "paella_vegetarienne": {
        name: "Paëlla Végétarienne",
        defaultAmountOfPeople: 4,

        // En minutes
        preparationTime: 15,
        cookingTime: 45,

        ingredients: [
            { quantity: 2, name: "cuillères à soupe d'huile d'olive" },
            { quantity: 1, name: "oignon" },
            { quantity: 1, name: "poivron rouge" },
            { quantity: 1, name: "poivron vert" },
            { quantity: 4, name: "tomates" },
            { quantity: 2, name: "doses de safran en poudre" },
            { quantity: 5, unit: "g", name: "poivre" },
            { quantity: 5, unit: "g", name: "sel" },
            { quantity: 350, unit: "g", name: "de riz rond espagnol" },
            { quantity: 150, unit: "g", name: "de petits pois" },
            { quantity: 150, unit: "g", name: "de haricots verts" },
            { quantity: 250, unit: "g", name: "de champignon émincés" },
            { quantity: 2, name: "gousses d'ail" },
            { quantity: 150, unit: "g", name: "de noix de cajou non salées" },
            { quantity: 5, unit: "g", name: "poivre de Cayenne" },
            { quantity: 800, unit: "ml", name: "d'eau"}
        ],
        steps: [
            "Emincez l'oignon et les poivrons. Pelez et concassez les tomates. Hachez l'ail.",
            "Faire revenir dans l'huile les oignons, les poivrons et l'ail.",
            "Ajouter les champignons, puis les tomates, les petits pois et les haricots.",
            "Après quelques minutes, ajoutez le riz et mélangez.",
            "Ajouter l'eau, dans laquelle vous aurez dissous le safran. Salez, proivrez et mélangez puis couvrez la poêle.",
            "Laisser cuire à feu très doux, jusqu'à ce que le riz soit cuit et ait absorbé tout le liquide",
            "Faites dorer les noix de cajou dans un peu d'huile dans une seconde poêle, puis égouttez les sur un papier absorbant.",
            "Quand le riz est cuit, ajoutez les noix de cajou au plat puis servez.",
        ],

        images: [
            "../../assets/imgs/gastronomie/paella_vegetarienne1.jpg",
            "../../assets/imgs/gastronomie/paella_vegetarienne2.jpg",
        ],
    }
};

const recipeBlock = document.getElementById("recettes");
const selectItem = recipeBlock.children[0].children[1];


let currentAmountOfPeople = 8;
let currentRecipe = "paella_valencienne";

displayRecipe(currentAmountOfPeople, currentRecipe);
loadSelectOptions();

document.getElementById("nbPersonnesRecette").addEventListener("input", (event) => {
    let amountOfPeople = parseInt(event.target.value);

    if (isNaN(amountOfPeople) || amountOfPeople < 1) {
        amountOfPeople = 1;
        event.target.value = "1";
    }

    currentAmountOfPeople = amountOfPeople;

    displayRecipe(currentAmountOfPeople, currentRecipe);
})
selectItem.addEventListener("change", () => {
    currentRecipe = selectItem.value;

    displayRecipe(currentAmountOfPeople, currentRecipe);
})

function loadSelectOptions() {

    let options = Object.keys(recipesList).map(recipeKey => {
        return `<option value="${recipeKey}">${recipesList[recipeKey].name}</option>`;
    })

    selectItem.innerHTML = options;

}

function displayRecipe(amountOfPeople, recipe) {
    let generatedRecipe = generateRecipe(amountOfPeople, recipe);

    recipeBlock.querySelector("p").innerHTML = `Temps de préparation : ${generatedRecipe.preparationTime} | Temps de cuisson : ${generatedRecipe.cookingTime}`;
    recipeBlock.querySelector("ul").innerHTML = generatedRecipe.ingredientList.join("");
    recipeBlock.querySelector("ol").innerHTML = generatedRecipe.stepList.join("");

    if (recipesList[recipe]?.images?.length > 2) {
        recipesList[recipe].images = recipesList[recipe].images.slice(0, 2);
    }

    recipeBlock.querySelector("figure").innerHTML = recipesList[recipe]?.images?.map((imgLink, i) => {
        return `<img src="${imgLink}" id="img${recipe}${i}" alt="Image de la recette de ${recipesList[recipe].name}" title="Représentation de la ${recipesList[recipe].name}">`;
    }).join("\n") || "";
}

function generateRecipe(amountOfPeople, recipe) {

    let ingredientList = generateIngredientList(amountOfPeople, recipe);
    let stepList = generateSteptsList(recipe);

    return {
        ingredientList: ingredientList,
        stepList: stepList,
        preparationTime: formatTime(recipesList[recipe].preparationTime),
        cookingTime: formatTime(recipesList[recipe].cookingTime),
    }
};

function formatTime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;

    if (hours > 0) {
        return `${hours}h${mins > 0 ? mins: ""}`;
    } else {
        return `${mins}min`;
    }
}

function generateSteptsList(recipe) {
    recipe = recipesList[recipe];

    return recipe.steps.map(step => {
        return `<li>${step}</li>`;
    });
};

function generateIngredientList(amountOfPeople, recipe) {
    recipe = recipesList[recipe];


    return recipe.ingredients.map(i => {
        return `<li>${calculateQuantity(i.quantity, amountOfPeople, recipe.defaultAmountOfPeople, i.unit)} ${i.name}</li>`;
    });
};


function optimizeQuantity(result, unit) {
    switch (unit) {
        case "kg": {
            if (result < 1) {
                return `${(result * 1000).toFixed(0)}g`;
            } else {
                return `${result.toFixed(1)}kg`;
            }
        }

        case "l": {
            if (result < 1) {
                return `${(result * 1000).toFixed(0)}ml`;
            } else {
                return `${result.toFixed(1)}l`;
            }
        }

        case "ml": {
            if (result >= 1000) {
                return `${(result / 1000).toFixed(1)}l`;
            } else {
                return `${Math.round(result).toFixed(0)}ml`;
            }
        }

        case "g": {
            if (result >= 1000) {
                return `${(result / 1000).toFixed(1)}kg`;
            } else {
                return `${Math.round(result).toFixed(0)}g`;
            }
        }

        default: {
            
            if (result < 0.10) {
                return;
            } else if (result < 0.35) {
                return `1/4${unit ? ` ${unit}` : ``}`;
            } else if (result < 0.65) {
                return `1/2${unit ? ` ${unit}` : ``}`;
            } else if (result < 0.85) {
                return `3/4${unit ? ` ${unit}` : ``}`;
            } else if (result < 1) {
                return `1${unit ? `${unit}` : ``}`;
            } else {
                return `${Math.round(result).toFixed(0)}${unit ? `${unit}` : ``}`;
            }
        }
    }
}

function calculateQuantity(quantity, amountOfPeople, defaultAmountOfPeople, unit) {
    let result = (quantity / defaultAmountOfPeople) * amountOfPeople;

    return optimizeQuantity(result, unit);
};