document.addEventListener("DOMContentLoaded", function () {
  
  const recipes = [
      {
          name: "Spaghetti Bolognese",
          img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
          prepTime: "30 minutes",
          ingredients: [
              "200g spaghetti",
              "100g minced beef",
              "1 onion",
              "2 garlic cloves",
              "400g tomato sauce"
          ],
          steps: "Boil spaghetti. Sauté onion and garlic. Add minced beef. Pour tomato sauce and simmer."
      },
      {
          name: "Chicken Curry",
          img: "https://images.pexels.com/photos/6113820/pexels-photo-6113820.jpeg?auto=compress&cs=tinysrgb&w=600",
          prepTime: "45 minutes",
          ingredients: [
              "300g chicken",
              "2 onions",
              "3 garlic cloves",
              "1 tbsp curry powder",
              "200ml coconut milk"
          ],
          steps: "Sauté onions and garlic. Add chicken and curry powder. Pour coconut milk and cook until chicken is tender."
      },
      {
          name: "Garlic Bread",
          img: "https://images.pexels.com/photos/1406336/pexels-photo-1406336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          prepTime: "15 minutes",
          ingredients: [
              "1 loaf of bread",
              "4 garlic cloves",
              "50g butter",
              "1 tbsp parsley"
          ],
          steps: "Mix butter and minced garlic. Spread on bread. Bake until golden."
      },
      {
        name: "Pasta Carbonara",
        img: "https://images.pexels.com/photos/4518836/pexels-photo-4518836.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: "20 minutes",
        ingredients: ["Pasta", "Eggs", "Pancetta", "Parmesan", "Black Pepper"],
        steps: "Boil pasta. Fry pancetta. Mix eggs and cheese. Combine all."
    },
    {
        name: "Chocolate Cake",
        img: "https://images.pexels.com/photos/3734026/pexels-photo-3734026.jpeg?auto=compress&cs=tinysrgb&w=600",
        prepTime: "1 hour",
        ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter"],
        steps: "Mix ingredients. Bake for 30 minutes. Cool and serve."
    },
    {
      name: "Beef Tacos",
      img: "https://images.pexels.com/photos/7613554/pexels-photo-7613554.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "20 minutes",
      ingredients: [
          "300g minced beef",
          "4 taco shells",
          "1 onion",
          "2 tomatoes",
          "Lettuce",
          "Cheese"
      ],
      steps: "Cook beef with onion. Fill taco shells with beef, tomatoes, lettuce, and cheese."
  },
  {
      name: "Caesar Salad",
      img: "https://images.pexels.com/photos/14775661/pexels-photo-14775661.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "15 minutes",
      ingredients: [
          "Romaine lettuce",
          "Caesar dressing",
          "Croutons",
          "Parmesan cheese"
      ],
      steps: "Toss lettuce with dressing. Top with croutons and Parmesan cheese."
  },
  {
      name: "Vegetable Stir Fry",
      img: "https://images.pexels.com/photos/10695887/pexels-photo-10695887.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "20 minutes",
      ingredients: [
          "Broccoli",
          "Bell peppers",
          "Carrots",
          "Soy sauce",
          "Garlic"
      ],
      steps: "Sauté garlic. Add vegetables and stir fry. Add soy sauce before serving."
  },
  {
      name: "Margarita Pizza",
      img: "https://images.pexels.com/photos/4748484/pexels-photo-4748484.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "Pizza dough",
          "Tomato sauce",
          "Mozzarella cheese",
          "Basil leaves"
      ],
      steps: "Roll out dough, spread sauce, add cheese and basil. Bake until crust is golden."
  },
  {
      name: "Shrimp Fried Rice",
      img: "https://images.pexels.com/photos/1630495/pexels-photo-1630495.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "200g shrimp",
          "2 cups cooked rice",
          "1 onion",
          "2 eggs",
          "Soy sauce"
      ],
      steps: "Sauté onion and shrimp. Push to side, scramble eggs. Add rice and soy sauce."
  },
  {
      name: "Beef Stroganoff",
      img: "https://images.pexels.com/photos/28503619/pexels-photo-28503619/free-photo-of-delicious-beef-stroganoff-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "45 minutes",
      ingredients: [
          "400g beef",
          "1 onion",
          "200g mushrooms",
          "200ml sour cream",
          "300g pasta"
      ],
      steps: "Cook beef and onion. Add mushrooms and sour cream. Serve over pasta."
  },
  {
      name: "Pancakes",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "20 minutes",
      ingredients: [
          "1 cup flour",
          "2 tbsp sugar",
          "1 cup milk",
          "1 egg",
          "1 tsp baking powder"
      ],
      steps: "Mix ingredients. Pour batter onto hot pan. Flip when bubbles form."
  },
  {
      name: "Vegetable Curry",
      img: "https://images.pexels.com/photos/6544376/pexels-photo-6544376.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "40 minutes",
      ingredients: [
          "200g mixed vegetables",
          "1 onion",
          "2 garlic cloves",
          "1 tbsp curry powder",
          "200ml coconut milk"
      ],
      steps: "Sauté onion and garlic. Add vegetables and curry powder. Pour in coconut milk."
  },
  {
      name: "Quiche Lorraine",
      img: "https://images.pexels.com/photos/5419174/pexels-photo-5419174.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "1 pie crust",
          "200g bacon",
          "3 eggs",
          "200ml cream",
          "Cheese"
      ],
      steps: "Cook bacon. Whisk eggs and cream. Pour into crust, add bacon and cheese. Bake."
  },
  {
      name: "Fruit Salad",
      img: "https://images.pexels.com/photos/3118421/pexels-photo-3118421.png?auto=compress&cs=tinysrgb&w=600",
      prepTime: "10 minutes",
      ingredients: [
          "1 apple",
          "1 banana",
          "1 orange",
          "1 cup berries"
      ],
      steps: "Chop fruits. Toss together in a bowl."
  },
  {
      name: "Stuffed Peppers",
      img: "https://images.pexels.com/photos/15747862/pexels-photo-15747862/free-photo-of-baked-bell-pepper.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "45 minutes",
      ingredients: [
          "4 bell peppers",
          "200g rice",
          "300g ground beef",
          "1 onion",
          "400g tomato sauce"
      ],
      steps: "Cook rice and beef with onion. Stuff into peppers and bake with tomato sauce."
  },
  {
      name: "Tiramisu",
      img: "https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "250g mascarpone",
          "3 eggs",
          "200g coffee",
          "200g ladyfingers",
          "Cocoa powder"
      ],
      steps: "Mix mascarpone and egg yolks. Dip ladyfingers in coffee. Layer in a dish."
  },
  {
      name: "Lasagna",
      img: "https://images.pexels.com/photos/2765875/pexels-photo-2765875.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "9 lasagna sheets",
          "500g minced beef",
          "400g tomato sauce",
          "300g ricotta cheese",
          "200g mozzarella cheese"
      ],
      steps: "Layer cooked sheets with beef, tomato sauce, ricotta, and mozzarella. Bake until golden."
  },
  {
      name: "Beef Burgers",
      img: "https://images.pexels.com/photos/15141035/pexels-photo-15141035/free-photo-of-close-up-of-hamburgers.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "500g minced beef",
          "4 burger buns",
          "Lettuce",
          "Tomato",
          "Cheese"
      ],
      steps: "Shape beef into patties. Grill and serve in buns with toppings."
  },
  {
      name: "Egg Fried Rice",
      img: "https://images.pexels.com/photos/9980875/pexels-photo-9980875.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "15 minutes",
      ingredients: [
          "2 cups cooked rice",
          "2 eggs",
          "1 onion",
          "2 green onions",
          "Soy sauce"
      ],
      steps: "Sauté onion. Push aside, scramble eggs. Add rice and soy sauce, mix well."
  },
  {
      name: "Caprese Salad",
      img: "https://images.pexels.com/photos/28841118/pexels-photo-28841118/free-photo-of-fresh-caprese-salad-with-mozzarella-and-basil-pesto.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "10 minutes",
      ingredients: [
          "Tomatoes",
          "Mozzarella cheese",
          "Fresh basil",
          "Olive oil",
          "Balsamic vinegar"
      ],
      steps: "Layer tomatoes and mozzarella. Drizzle with oil and vinegar, sprinkle basil."
  },
  {
      name: "Chili Con Carne",
      img: "https://images.pexels.com/photos/1618906/pexels-photo-1618906.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "500g minced beef",
          "1 onion",
          "2 garlic cloves",
          "400g canned tomatoes",
          "400g kidney beans",
          "1 tbsp chili powder"
      ],
      steps: "Cook beef, onion, and garlic. Add tomatoes, beans, and chili powder. Simmer."
  },
  {
      name: "Chicken Alfredo",
      img: "https://images.pexels.com/photos/19098019/pexels-photo-19098019/free-photo-of-meal-on-plate.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prepTime: "30 minutes",
      ingredients: [
          "300g fettuccine",
          "200g chicken",
          "100g parmesan cheese",
          "200ml cream",
          "Garlic"
      ],
      steps: "Cook fettuccine. Sauté chicken and garlic. Add cream and cheese, combine with pasta."
  },
  {
      name: "Greek Salad",
      img: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "10 minutes",
      ingredients: [
          "Cucumber",
          "Tomatoes",
          "Feta cheese",
          "Olives",
          "Olive oil"
      ],
      steps: "Chop vegetables. Mix with feta and olives. Drizzle with olive oil."
  },
  {
      name: "Chocolate Chip Cookies",
      img: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "1 cup flour",
          "1/2 cup sugar",
          "1/2 cup brown sugar",
          "1/2 cup butter",
          "1 egg",
          "1 cup chocolate chips"
      ],
      steps: "Cream butter and sugars. Add egg, mix in flour and chips. Bake until golden."
  },
  {
      name: "Pesto Pasta",
      img: "https://images.pexels.com/photos/2697229/pexels-photo-2697229.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "25 minutes",
      ingredients: [
          "300g pasta",
          "100g pesto",
          "Parmesan cheese",
          "Cherry tomatoes"
      ],
      steps: "Cook pasta. Toss with pesto and top with cheese and tomatoes."
  },
  {
      name: "Eggplant Parmesan",
      img: "https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "2 eggplants",
          "400g tomato sauce",
          "200g mozzarella",
          "100g parmesan",
          "Basil"
      ],
      steps: "Slice eggplants, bake until tender. Layer with sauce, cheese, and bake."
  },
  {
      name: "Banana Bread",
      img: "https://images.pexels.com/photos/4114141/pexels-photo-4114141.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "3 ripe bananas",
          "1/2 cup butter",
          "1 cup sugar",
          "2 eggs",
          "1 cup flour"
      ],
      steps: "Mash bananas. Mix with butter and sugar, add eggs and flour. Bake until done."
  },
  {
      name: "Beef and Broccoli",
      img: "https://images.pexels.com/photos/4768953/pexels-photo-4768953.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "300g beef",
          "200g broccoli",
          "2 garlic cloves",
          "Soy sauce",
          "Ginger"
      ],
      steps: "Stir-fry beef, add broccoli and garlic. Add soy sauce and ginger, cook until tender."
  },
  {
      name: "Ratatouille",
      img: "https://media.istockphoto.com/id/1264113841/photo/ratatouille-made-of-zucchini-eggplants-peppers-onions-garlic-and-tomatoes-slices-with.jpg?b=1&s=612x612&w=0&k=20&c=0q3CeYLVDKLZjjnR61jys1oVdtDPaElVc6k4riqPMeg=",
      prepTime: "1 hour",
      ingredients: [
          "1 zucchini",
          "1 eggplant",
          "1 bell pepper",
          "2 tomatoes",
          "Olive oil"
      ],
      steps: "Chop vegetables. Sauté in olive oil until tender. Season with salt and pepper."
  },
  {
      name: "Lemon Chicken",
      img: "https://images.pexels.com/photos/20371522/pexels-photo-20371522/free-photo-of-meat-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "40 minutes",
      ingredients: [
          "300g chicken",
          "1 lemon",
          "Garlic",
          "Olive oil",
          "Herbs"
      ],
      steps: "Marinate chicken in lemon juice, garlic, and herbs. Bake until cooked through."
  },
  {
      name: "Pork Chops",
      img: "https://images.pexels.com/photos/20527110/pexels-photo-20527110/free-photo-of-close-up-meat-with-rice-and-vegetables-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "30 minutes",
      ingredients: [
          "4 pork chops",
          "Salt",
          "Pepper",
          "Garlic powder",
          "Olive oil"
      ],
      steps: "Season chops. Sear in a hot pan with oil. Cook until browned and done."
  },
  {
      name: "Vegetable Quesadilla",
      img: "https://images.pexels.com/photos/12360593/pexels-photo-12360593.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "20 minutes",
      ingredients: [
          "4 tortillas",
          "200g mixed vegetables",
          "100g cheese",
          "Sour cream"
      ],
      steps: "Sauté vegetables. Fill tortillas with cheese and vegetables. Cook until golden."
  },
  {
      name: "Chickpea Salad",
      img: "https://images.pexels.com/photos/9928198/pexels-photo-9928198.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "15 minutes",
      ingredients: [
          "1 can chickpeas",
          "Cucumber",
          "Tomatoes",
          "Red onion",
          "Feta cheese"
      ],
      steps: "Mix all ingredients in a bowl. Season with olive oil, salt, and pepper."
  },
  {
      name: "Minestrone Soup",
      img: "https://images.pexels.com/photos/28907751/pexels-photo-28907751/free-photo-of-delicious-asian-noodle-bowl-with-fresh-herbs.jpeg?auto=compress&cs=tinysrgb&w=600",
      prepTime: "1 hour",
      ingredients: [
          "2 carrots",
          "2 celery stalks",
          "1 onion",
          "400g canned tomatoes",
          "Pasta",
          "Vegetable broth"
      ],
      steps: "Sauté vegetables. Add broth and tomatoes. Cook with pasta until tender."
  }, {
    name: "Chicken Tikka ",
    img: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "1 hour",
    ingredients: [
        "400g chicken",
        "1 onion",
        "2 garlic cloves",
        "1 tbsp ginger",
        "200g tikka masala sauce",
        "Rice"
    ],
    steps: "Marinate chicken in spices. Cook onion, garlic, and ginger. Add chicken and sauce. Serve with rice."
},
{
    name: "Stuffed Mushrooms",
    img: "https://images.pexels.com/photos/5950435/pexels-photo-5950435.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "12 large mushrooms",
        "100g cream cheese",
        "Garlic",
        "Breadcrumbs",
        "Parsley"
    ],
    steps: "Remove stems from mushrooms. Mix cream cheese, garlic, and breadcrumbs. Stuff mushrooms and bake."
},
{
    name: "Cabbage Rolls",
    img: "https://images.pexels.com/photos/3763621/pexels-photo-3763621.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "1 hour",
    ingredients: [
        "8 cabbage leaves",
        "300g minced meat",
        "1 onion",
        "200g rice",
        "Tomato sauce"
    ],
    steps: "Cook rice and mix with meat and onion. Wrap in cabbage leaves and bake in tomato sauce."
},
{
    name: "Pineapple Fried Rice",
    img: "https://images.pexels.com/photos/16845748/pexels-photo-16845748/free-photo-of-ready-to-eat-meat-with-rice-on-a-frying-pan.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "25 minutes",
    ingredients: [
        "2 cups cooked rice",
        "1 cup pineapple",
        "100g peas",
        "2 eggs",
        "Soy sauce"
    ],
    steps: "Sauté pineapple and peas. Push aside, scramble eggs. Add rice and soy sauce."
},
{
    name: "Seafood Paella",
    img: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "1 hour",
    ingredients: [
        "300g rice",
        "200g shrimp",
        "200g mussels",
        "1 onion",
        "Saffron",
        "Broth"
    ],
    steps: "Sauté onion. Add rice and saffron. Pour in broth, then add seafood. Cook until done."
},
{
    name: "Baked Ziti",
    img: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "45 minutes",
    ingredients: [
        "300g ziti pasta",
        "400g marinara sauce",
        "200g ricotta cheese",
        "200g mozzarella cheese",
        "Parmesan cheese"
    ],
    steps: "Cook pasta, mix with sauces and cheeses. Bake until golden and bubbly."
},
{
    name: "Sweet and Sour Chicken",
    img: "https://images.pexels.com/photos/10692545/pexels-photo-10692545.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "300g chicken",
        "1 bell pepper",
        "1 onion",
        "100g pineapple",
        "Sweet and sour sauce"
    ],
    steps: "Cook chicken, add vegetables and pineapple. Stir in sweet and sour sauce, serve hot."
},
{
    name: "Bruschetta",
    img: "https://images.pexels.com/photos/299410/pexels-photo-299410.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "10 minutes",
    ingredients: [
        "1 baguette",
        "2 tomatoes",
        "Basil",
        "Garlic",
        "Olive oil"
    ],
    steps: "Toast baguette slices. Top with chopped tomatoes, basil, garlic, and drizzle with olive oil."
},
{
    name: "Coconut Rice",
    img: "https://images.pexels.com/photos/5963873/pexels-photo-5963873.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "1 cup rice",
        "200ml coconut milk",
        "1 cup water",
        "Salt"
    ],
    steps: "Combine rice, coconut milk, water, and salt. Cook until rice is tender and fluffy."
},
{
    name: "Clam Chowder",
    img: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "1 hour",
    ingredients: [
        "400g clams",
        "2 potatoes",
        "1 onion",
        "200ml cream",
        "Bacon"
    ],
    steps: "Cook bacon, add onion and potatoes. Add clams and cream, simmer until thick."
},
{
    name: "Pork Stir-Fry",
    img: "https://images.pexels.com/photos/27039848/pexels-photo-27039848/free-photo-of-a-white-plate-with-food-on-it-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prepTime: "20 minutes",
    ingredients: [
        "300g pork",
        "1 bell pepper",
        "2 carrots",
        "Soy sauce",
        "Garlic"
    ],
    steps: "Stir-fry pork with garlic. Add vegetables and soy sauce, cook until tender."
},
{
    name: "Spinach Frittata",
    img: "https://images.pexels.com/photos/5639282/pexels-photo-5639282.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "6 eggs",
        "200g spinach",
        "100g cheese",
        "1 onion"
    ],
    steps: "Sauté onion and spinach. Beat eggs, mix with spinach, pour into pan, and bake."
},
{
    name: "Potato Salad",
    img: "https://images.pexels.com/photos/4210812/pexels-photo-4210812.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "4 potatoes",
        "2 eggs",
        "1 cup mayo",
        "1 onion",
        "Mustard"
    ],
    steps: "Boil potatoes and eggs. Chop and mix with mayo, onion, and mustard."
},
{
    name: "Honey Garlic Shrimp",
    img: "https://images.pexels.com/photos/8983397/pexels-photo-8983397.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "20 minutes",
    ingredients: [
        "300g shrimp",
        "3 tbsp honey",
        "2 garlic cloves",
        "Soy sauce"
    ],
    steps: "Sauté shrimp with garlic. Add honey and soy sauce, cook until shrimp is glazed."
},
{
    name: "Roasted Brussels Sprouts",
    img: "https://images.pexels.com/photos/3510155/pexels-photo-3510155.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "30 minutes",
    ingredients: [
        "400g Brussels sprouts",
        "Olive oil",
        "Salt",
        "Pepper"
    ],
    steps: "Toss Brussels sprouts with oil, salt, and pepper. Roast until golden and crispy."
},
{
    name: "Lentil Soup",
    img: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "1 hour",
    ingredients: [
        "1 cup lentils",
        "1 onion",
        "2 carrots",
        "2 celery stalks",
        "Vegetable broth"
    ],
    steps: "Sauté onion, carrots, and celery. Add lentils and broth, simmer until lentils are soft."
},
{
    name: "Cheesy Garlic Breadsticks",
    img: "https://images.pexels.com/photos/13062441/pexels-photo-13062441.jpeg?auto=compress&cs=tinysrgb&w=600",
    prepTime: "20 minutes",
    ingredients: [
        "1 pizza dough",
        "100g mozzarella",
        "2 garlic cloves",
        "Butter",
        "Parsley"
    ],
    steps: "Roll out dough, top with butter, minced garlic, and cheese. Bake until golden."
},
      
  ];

  const recipeContainer = document.getElementById("recipe-container");

  // Function to display recipes
  recipes.forEach((recipe, index) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("col-3");  // Add Bootstrap's grid column class for 4 cards per row
      recipeCard.innerHTML = `
          <div class="recipe-card">
              <img src="${recipe.img}" alt="${recipe.name}">
              <h5>${recipe.name}</h5>
              <button class="get-recipe btn btn-primary" data-index="${index}">Get Recipe</button>
          </div>
      `;
      recipeContainer.appendChild(recipeCard);
  });
  

  document.querySelectorAll('.get-recipe').forEach(button => {
      button.addEventListener('click', function () {
          const recipeIndex = this.getAttribute("data-index");
          const selectedRecipe = recipes[recipeIndex];

          document.getElementById("modal-recipe-image").src = selectedRecipe.img;
          document.getElementById("modal-recipe-name").textContent = selectedRecipe.name;
          document.getElementById("modal-prep-time").textContent = selectedRecipe.prepTime;

          const ingredientsList = document.getElementById("modal-ingredients-list");
          ingredientsList.innerHTML = '';
          selectedRecipe.ingredients.forEach(ingredient => {
              const li = document.createElement("li");
              li.textContent = ingredient;
              ingredientsList.appendChild(li);
          });

          document.getElementById("modal-preparation-steps").textContent = selectedRecipe.steps;
          $('#recipeModal').modal('show');
      });
  });

// Function to display recipe details in a modal
function showRecipeDetails(recipe) {
  // Update modal content with the recipe details
  document.getElementById("modal-recipe-image").src = recipe.img;
  document.getElementById("modal-recipe-name").textContent = recipe.name;
  document.getElementById("modal-prep-time").textContent = recipe.prepTime;

  const ingredientsList = document.getElementById("modal-ingredients-list");
  ingredientsList.innerHTML = ''; // Clear the previous ingredients
  recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
  });

  document.getElementById("modal-preparation-steps").textContent = recipe.steps;

  // Show the modal
  $('#recipeModal').modal('show'); // Assuming you are using Bootstrap for modals
}





// Search functionality
function performSearch() {
  const searchQuery = document.getElementById("search-input").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));

  recipeContainer.innerHTML = ''; // Clear current recipes
  if (filteredRecipes.length > 0) {
      filteredRecipes.forEach((recipe) => {
          const recipeCard = document.createElement("div");
          recipeCard.classList.add("col-md-4", "recipe-card");
          recipeCard.innerHTML = `
              <img src="${recipe.img}" alt="${recipe.name}" class="img-fluid">
              <h5>${recipe.name}</h5>
              <button class="btn btn-primary get-recipe">Get Recipe</button>
          `;
          recipeContainer.appendChild(recipeCard);

          // Add event listener for the Get Recipe button
          recipeCard.querySelector('.get-recipe').addEventListener('click', function () {
              showRecipeDetails(recipe); // Pass the whole recipe object
          });
      });
  } else {
      recipeContainer.innerHTML = '<p>No recipes found for your search.</p>';
  }
}

// Event listener for the search icon click
document.getElementById("search-icon").addEventListener("click", performSearch);

// Event listener for Enter key press in the search input
document.getElementById("search-input").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
      performSearch();
  } else {
      performSearch(); // Update search results as the user types
  }
});




  // Top chefs
  const chefs = [
      {
          name: "Chef Gordon Ramsay",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSR4pX-PaQQtKiSaCifNpfTwRJp5xE8wLucQvREuvGS-RQT_jVv",
          recipes: [
              {
                  name: "Beef Wellington",
                  img: "https://images.pexels.com/photos/20182343/pexels-photo-20182343/free-photo-of-bun-with-wish-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600",
                  prepTime: "2 hours",
                  ingredients: [
                      "500g beef fillet",
                      "100g mushrooms",
                      "1 puff pastry",
                      "2 tbsp mustard",
                      "Prosciutto slices"
                  ],
                  steps: "Sear beef. Layer with mushrooms and prosciutto. Wrap in puff pastry and bake."
              },
              
                {
                    name: "Lamb Chops with Mint Sauce",
                    img: "https://images.pexels.com/photos/11795607/pexels-photo-11795607.jpeg?auto=compress&cs=tinysrgb&w=600",
                    prepTime: "30 minutes",
                    ingredients: [
                        "4 lamb chops",
                        "2 tbsp olive oil",
                        "Salt",
                        "Pepper",
                        "Mint sauce"
                    ],
                    steps: "Season lamb chops. Sear in a hot pan with olive oil until cooked to your liking. Serve with mint sauce."
                },
                {
                    name: "Ramsay's Spaghetti Carbonara",
                    img: "https://images.pexels.com/photos/4518836/pexels-photo-4518836.jpeg?auto=compress&cs=tinysrgb&w=600",
                    prepTime: "20 minutes",
                    ingredients: [
                        "200g spaghetti",
                        "100g pancetta",
                        "2 eggs",
                        "50g parmesan cheese",
                        "Black pepper"
                    ],
                    steps: "Cook spaghetti. Fry pancetta. Beat eggs and cheese, combine with spaghetti and pancetta. Serve immediately."
                },
                {
                    name: "Classic Beef Burger",
                    img: "https://images.pexels.com/photos/15141035/pexels-photo-15141035/free-photo-of-close-up-of-hamburgers.jpeg?auto=compress&cs=tinysrgb&w=600",
                    prepTime: "30 minutes",
                    ingredients: [
                        "500g minced beef",
                        "1 egg",
                        "Salt",
                        "Pepper",
                        "4 burger buns",
                        "Lettuce",
                        "Tomato"
                    ],
                    steps: "Mix beef with egg, salt, and pepper. Shape into patties. Grill and serve in buns with toppings."
                },
                {
                    name: "Herb-Crusted Salmon",
                    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
                    prepTime: "25 minutes",
                    ingredients: [
                        "4 salmon fillets",
                        "1 cup breadcrumbs",
                        "2 tbsp Dijon mustard",
                        "Fresh herbs (parsley, dill)",
                        "Olive oil"
                    ],
                    steps: "Spread mustard on salmon. Mix breadcrumbs with herbs, press onto salmon. Bake until cooked through."
                },
                {
                    name: "Beef Stroganoff",
                    img: "https://images.pexels.com/photos/20234576/pexels-photo-20234576/free-photo-of-steak-spaghetti.jpeg?auto=compress&cs=tinysrgb&w=600",
                    prepTime: "40 minutes",
                    ingredients: [
                        "500g beef strips",
                        "1 onion",
                        "200g mushrooms",
                        "200ml sour cream",
                        "Paprika",
                        "Egg noodles"
                    ],
                    steps: "Sauté onions and mushrooms. Add beef and cook. Stir in sour cream and paprika. Serve over egg noodles."
                },
                
                
            
            
          ]
      },
      {
          name: "Sanjeev kapoor",
          img: "https://images.javatpoint.com/top10-technologies/images/top-10-chefs-in-india1.jpg",
          recipes: [
              {
                  name: "15-Minute Meals: Grilled Salmon",
                  img: "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  prepTime: "15 minutes",
                  ingredients: [
                      "2 salmon fillets",
                      "1 lemon",
                      "Olive oil",
                      "Salt",
                      "Pepper"
                  ],
                  steps: "Grill salmon with olive oil, salt, and pepper. Squeeze lemon on top and serve."
              },
              {
                name: "Paneer Tikka",
                img: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600",
                prepTime: "30 minutes",
                ingredients: [
                    "200g paneer",
                    "1 bell pepper",
                    "1 onion",
                    "2 tbsp yogurt",
                    "1 tsp tikka masala",
                    "Skewers"
                ],
                steps: "Cut paneer and vegetables into cubes. Marinate with yogurt and tikka masala. Skewer and grill until charred."
            },
            {
                name: "Biryani",
                img: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600",
                prepTime: "1.5 hours",
                ingredients: [
                    "500g basmati rice",
                    "500g chicken",
                    "1 onion",
                    "2 tomatoes",
                    "1 tbsp biryani masala",
                    "Cilantro"
                ],
                steps: "Sauté onions, add chicken, and cook. Layer cooked rice and masala, then simmer. Garnish with cilantro."
            },
            
            {
                name: "Chocolate Burfi",
                img: "https://images.pexels.com/photos/28981045/pexels-photo-28981045/free-photo-of-elegant-display-of-assorted-chocolates-on-ornate-tray.jpeg?auto=compress&cs=tinysrgb&w=600",
                prepTime: "1 hour",
                ingredients: [
                    "200g khoya (milk solids)",
                    "100g sugar",
                    "50g cocoa powder",
                    "Almonds for garnish"
                ],
                steps: "Mix khoya, sugar, and cocoa. Cook until thick. Pour into a greased tray, let cool, and cut into pieces. Garnish with almonds."
            }
          ]
      },
      {
        name: "Chef Thomas Keller",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1Wn9osdR9xsrKThhbUOyvGUGUeTwpsAwrg&s",
        recipes: [
          {
            name: "Pan-Seared Scallops",
            img: "https://images.pexels.com/photos/3645127/pexels-photo-3645127.jpeg?auto=compress&cs=tinysrgb&w=600",
            prepTime: "20 minutes",
            ingredients: [
                "12 scallops",
                "2 tbsp olive oil",
                "Butter",
                "Salt",
                "Lemon"
            ],
            steps: "Pat scallops dry. Sear in hot oil and butter until golden. Squeeze lemon juice over before serving."
        },
        {
            name: "Vegetable Risotto",
            img: "https://images.pexels.com/photos/6129128/pexels-photo-6129128.jpeg?auto=compress&cs=tinysrgb&w=600",
            prepTime: "40 minutes",
            ingredients: [
                "200g Arborio rice",
                "1 onion",
                "2 garlic cloves",
                "1 zucchini",
                "1 bell pepper",
                "Vegetable broth",
                "Parmesan cheese"
            ],
            steps: "Sauté onion and garlic. Add rice, then gradually add broth. Stir in chopped vegetables and cheese."
        },
        {
            name: "Chocolate Fondant",
            img: "https://images.pexels.com/photos/12832699/pexels-photo-12832699.jpeg?auto=compress&cs=tinysrgb&w=600",
            prepTime: "30 minutes",
            ingredients: [
                "100g dark chocolate",
                "100g butter",
                "2 eggs",
                "50g sugar",
                "50g flour"
            ],
            steps: "Melt chocolate and butter. Beat eggs with sugar, mix in flour and chocolate. Bake until set on the edges."
        },
        {
            name: "Crispy Roast Potatoes",
            img: "https://images.pexels.com/photos/273825/pexels-photo-273825.jpeg?auto=compress&cs=tinysrgb&w=600",
            prepTime: "1 hour",
            ingredients: [
                "1kg potatoes",
                "Olive oil",
                "Salt",
                "Rosemary"
            ],
            steps: "Boil potatoes until tender. Drain and roughen the surface. Roast in oil with salt and rosemary."
          
        }
      ]
      }
    
      
  ];

  const chefsContainer = document.getElementById("chefs-container");

  chefs.forEach((chef, index) => {
      const chefCard = document.createElement("div");
      chefCard.classList.add("col-md-4", "text-center");
      chefCard.innerHTML = `
          <img src="${chef.img}" alt="${chef.name}" class="rounded-circle chef-img img-fluid">
          <h5>${chef.name}</h5>
          <button class="btn btn-secondary view-chef-recipes" data-index="${index}">View Recipes</button>
      `;
      chefsContainer.appendChild(chefCard);
  });

  document.querySelectorAll('.view-chef-recipes').forEach(button => {
      button.addEventListener('click', function () {
          const chefIndex = this.getAttribute("data-index");
          const selectedChef = chefs[chefIndex];
          recipeContainer.innerHTML = '';

          selectedChef.recipes.forEach((recipe, index) => {
              const recipeCard = document.createElement("div");
              recipeCard.classList.add("col-md-4", "recipe-card");
              recipeCard.innerHTML = `
                  <img src="${recipe.img}" alt="${recipe.name}" class="img-fluid">
                  <h5>${recipe.name}</h5>
                  <button class="btn btn-primary get-recipe" data-index="${index}" data-chef-index="${chefIndex}">Get Recipe</button>
              `;
              recipeContainer.appendChild(recipeCard);
          });

          document.querySelectorAll('.get-recipe').forEach(button => {
              button.addEventListener('click', function () {
                  const recipeIndex = this.getAttribute("data-index");
                  const chefIndex = this.getAttribute("data-chef-index");
                  const selectedRecipe = chefs[chefIndex].recipes[recipeIndex];

                  document.getElementById("modal-recipe-image").src = selectedRecipe.img;
                  document.getElementById("modal-recipe-name").textContent = selectedRecipe.name;
                  document.getElementById("modal-prep-time").textContent = selectedRecipe.prepTime;

                  const ingredientsList = document.getElementById("modal-ingredients-list");
                  ingredientsList.innerHTML = '';
                  selectedRecipe.ingredients.forEach(ingredient => {
                      const li = document.createElement("li");
                      li.textContent = ingredient;
                      ingredientsList.appendChild(li);
                  });

                  document.getElementById("modal-preparation-steps").textContent = selectedRecipe.steps;
                  $('#recipeModal').modal('show');
              });
          });
      });
  });
});