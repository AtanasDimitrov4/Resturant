import { useEffect, useState } from "react";

export default function RestaurantMenu() {
  const [plates, setPlates] = useState([]);

  const fetchPlates = () => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setPlates(data))
      .catch((error) => console.error("Error loading plates:", error));
  };

  useEffect(() => {
    fetchPlates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Restorant</h1>
        <p className="text-gray-500">It Taste Delicius</p>
        <button
          onClick={fetchPlates}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Refresh Menu
        </button>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plates.map((plate) => (
              <div key={plate.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plate.name}</h3>
                <p className="text-gray-600 mb-4">{plate.description}</p>
                <div className="text-lg font-semibold text-indigo-600">{plate.price}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
