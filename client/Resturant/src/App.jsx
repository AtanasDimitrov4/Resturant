import { useState, useEffect } from "react";
import DishCard from "./components/DishCard";

export default function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("plates.json")
    .then((result) => result.json())
    .then((data)) => setDishes(data))
    .catch((err)) => console.error("Faild to fetch plates", err));
  }, []);

  return (
    <div className="app" >
      <header className="header" />
        <h1>Delicius Resturant</h1>
        <p>No Jackal, just good food</p>
        </header>

        <main>
          <h2>Menu</h2>
          <div className="dish-grid">
            {dish.map((dish) => (
              <DishCard key={dish.id} dish={dish}/>

            ))}
            </div>
        </main>

        <footer className="footer">
          <p>@ 2025 AlbertoPer</p>
        </footer>
        </div>
  );
}