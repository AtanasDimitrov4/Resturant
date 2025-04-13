export default function DishCard({ dish }) {
    return (
        <div className="dish-card">
            <img className="dish-image" src= {dish.image} alt={dish.menuItem} />
            <h3>{dish.menuItem}</h3>
            <p>{dish.description}</p>
            <strong>{dish.price}</strong>
        </div>    
    );
}