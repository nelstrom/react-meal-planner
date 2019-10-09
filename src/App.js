import React from "react";
import "./App.css";

const data = [
  { key: 1, name: "Mac Cheese" },
  { key: 2, name: "Roast chicken" },
  { key: 3, name: "Fajita" },
  { key: 4, name: "Spicy Thai Peanut Sauce over Roasted Sweet Potatoes" },
  { key: 5, name: "Pizza" },
  { key: 6, name: "Prawn Masala" },
  { key: 7, name: "Beans and rice" },
  { key: 8, name: "Sugar Snap Pea and Carrot Soba Noodles" },
  { key: 9, name: "Eggs on Toast" }
];

function App() {
  const allMeals = data;

  const remainingSuggestions = allMeals;
  const chosenMeals = [];
  const rejectedMeals = [];

  return (
    <div>
      <h1>Meal Planner</h1>

      <h2>Remaining suggestions</h2>
      <ul>
        {remainingSuggestions.map(meal => {
          return (
            <li key={meal.key}>
              <span>{meal.name}</span>
              <button>Pick</button>
              <button>Reject</button>
            </li>
          );
        })}
      </ul>

      <h2>Chosen meals</h2>
      <ul>
        {chosenMeals.map(meal => {
          return <li key={meal.key}>{meal.name}</li>;
        })}
      </ul>

      <h2>Rejected meals</h2>
      <ul>
        {rejectedMeals.map(meal => {
          return <li key={meal.key}>{meal.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
