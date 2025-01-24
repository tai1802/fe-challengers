"use client";

// import Image from "next/image";

const Recipe = () => {
  return (
    <section className="container bg-white mx-auto m-10 rounded-[20px] ">
      {/* <Image
        src="/image-omelette.jpeg"
        width={1024}
        height={500}
        className="object-contain rounded-[10px] w-full h-full"
        alt=""
      /> */}
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quickly dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
        optionally filled with your choice of cheese, vegetables, or meats.
      </p>
      <div>
        <p>Preparation time</p>
        <ul>
          <li>
            <span>Total:</span>Approximately 10 minutes
          </li>
          <li>
            <span>Preparation:</span>5 minutes
          </li>
          <li>
            <span>Cooking:</span>5 minutes
          </li>
        </ul>
      </div>
      <div></div>
      <p>Ingredients</p>
      <ul>
        <li>
          <span>Beat the eggs:</span>Approximately 10 minutes
        </li>
        <li>
          <span>Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li>
          <span>Cook the omelette:</span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
          ensure the eggs evenly coat the surface.
        </li>
        <li>
          <span>Add fillings (optional):</span>When the eggs begin to set at the edges but are still slightly runny in
          the middle, sprinkle your chosen fillings over one half of the omelette.
        </li>
        <li>
          <span>Fold and serve:</span>As the omelette continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.
        </li>
        <li>
          <span>Enjoy:</span>Serve hot, with additional salt and pepper if needed.
        </li>
      </ul>
    </section>
  );
};

export default Recipe;
