"use client";

import ListItem from "./ListItem";
import NutritionTable from "./NutritionTable";

import Image from "next/image";

const Recipe = () => {
  const ingredients: string[] = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructions: string[] = [
    `<span class="font-bold mr-2">Beat the eggs:</span>Approximately 10 minutes`,
    `<span class="font-bold mr-2">Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.`,
    `<span class="font-bold mr-2">Cook the omelette:</span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.`,
    `<span class="font-bold mr-2">Add fillings (optional):</span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.`,
    `<span class="font-bold mr-2">Fold and serve:</span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.`,
    `<span class="font-bold mr-2">Enjoy:</span>Serve hot, with additional salt and pepper if needed.`,
  ];

  const nutrition: { key: string; value: string }[] = [
    {
      key: "Calories",
      value: "277kcal",
    },
    {
      key: "Carbs",
      value: "0g",
    },
    {
      key: "Protein",
      value: "20g",
    },
    {
      key: "Fat",
      value: "22g",
    },
  ];

  return (
    <section className="container bg-white mx-auto m-10 rounded-[20px] p-8 text-stone-600 flex flex-col gap-6">
      <Image
        src="/image-omelette.jpeg"
        width={1024}
        height={500}
        className="object-contain rounded-[10px] w-full h-full"
        alt=""
      />
      <h1 className="text-4xl">Simple Omelette Recipe</h1>
      <div className="space-y-6">
        <p className="">
          An easy and quickly dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
          perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-rose-50 p-6 rounded-xl space-y-2">
          <p className="text-rose-800 font-semibold">Preparation time</p>
          <ul className="text-stone-600 list-disc ml-6 space-y-2">
            <li>
              <span className="font-bold">Total:</span>Approximately 10 minutes
            </li>
            <li>
              <span className="font-bold">Preparation:</span>5 minutes
            </li>
            <li>
              <span className="font-bold">Cooking:</span>5 minutes
            </li>
          </ul>
        </div>
      </div>
      <ListItem title="Ingredients" items={ingredients} />
      <ListItem title="Instructions" items={instructions} type="decimal" />
      <NutritionTable
        title="Nutrition"
        subtitle="The table below shows nutritional values per serving without the additional fillings"
        items={nutrition}
      />
    </section>
  );
};

export default Recipe;
