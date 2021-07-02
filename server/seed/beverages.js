//Seed for backend
const db = require("../db");
const Beverage = require("../models/beverage");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const beverages = [
    {
      beverage_name: "57 Chevy with a White License Plate",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
      beverage_category: "Cocktail",
      alcohol_content: "Alcoholic",
      ingredients: "Creme de Cacao, Vodka",
      instruction:
        "1. Fill a rocks glass with ice 2. add white creme de cacao and vodka 3.stir",
    },
    {
      beverage_name: "Absolut Summertime",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
      beverage_category: "Cocktail",
      alcohol_content: "Alcoholic",
      ingredients: "Absolut Citrons, Sweet and sour, Sprite, Lemon",
      instruction:
        "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
    },
    {
      beverage_name: "Frappé",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
      beverage_category: "Coffee / Tea",
      alcohol_content: "Non Alcoholic",
      ingredients: "Coffee, Milk, Sugar",
      instruction:
        "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
    },
    {
      beverage_name: "Masala Chai",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
      beverage_category: "Coffee / Tea",
      alcohol_content: "Non Alcoholic",
      ingredients:
        "Water, Tea, Ginger, Cardamon, Cloves, Cinnamon, Black Pepper, Sugar, Milk",
      instruction:
        "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar.",
    },
    {
      beverage_name: "Banana Strawberry Shake",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
      beverage_category: "Milk / Float / Shake",
      alcohol_content: "Non Alcoholic",
      ingredients: "Strawberries, Banana, Yohgurt, Milk, Honey",
      instruction: "Blend all together in a blender until smooth.",
    },
    {
      beverage_name: "Black Forest Shake",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg",
      beverage_category: "Milk / Float / Shake",
      alcohol_content: "Alcoholic",
      ingredients: "Ice, Chocolate Syrup, Cherry Brandy, Vodka, Milk",
      instruction:
        "n a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
    },
    {
      beverage_name: "Amaretto Stone Sour",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/xwryyx1472719921.jpg",
      beverage_category: "Other / Unknown",
      alcohol_content: "Alcoholic",
      ingredients: "Amaretto, Sour mix, Orange Juice",
      instruction: "Shake and Serve over ice",
    },
    {
      beverage_name: "Grape lemon pineapple Smoothie",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg",
      beverage_category: "Other / Unknown",
      alcohol_content: "Alcoholic",
      ingredients: "Grapes, Lemon, Pineapple",
      instruction: "Throw everything into a blender and liquify.",
    },
    {
      beverage_name: "747",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
      beverage_category: "Shot",
      alcohol_content: "Alcoholic",
      ingredients: "Kahlua, Baileys Irish, Cream, Frangelico",
      instruction:
        "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
    },
    {
      beverage_name: "Kool-Aid Slammer",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/kugu2m1504735473.jpg",
      beverage_category: "Shot",
      alcohol_content: "Alcoholic",
      ingredients: "Kool-Aid, Vodka",
      instruction:
        "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
    },
    {
      beverage_name: "Bleeding Surgeon",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/usuvvr1472719118.jpg",
      beverage_category: "Soft Drink / Soda",
      alcohol_content: "Alcoholic",
      ingredients: "Dark Rum, Orange, Surge, Cranberry Juice",
      instruction:
        "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
    },
    {
      beverage_name: "Darkwood Sling",
      beverage_image:
        "https://www.thecocktaildb.com/images/media/drink/sxxsyq1472719303.jpg",
      beverage_category: "Soft Drink / Soda",
      alcohol_content: "Alcoholic",
      ingredients: "Cherry Heering, Soda Water, Orange Juice, Ice",
      instruction:
        "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
    },
  ];
  await Beverage.insertMany(beverages);
  console.log("Created many beverages");
};

const run = async () => {
  await main();
  db.close();
};

run();
