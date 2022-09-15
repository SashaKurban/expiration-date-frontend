import './GroceryCard.css'

export default function GroceryCard({groceries}){
    
    return(
        <div>
            {groceries.map((grocery) =>(
                <div className="groceryCard" key={grocery.id}>
                <label>Name: </label>
                <input type="text" id ="food" name="food" value={grocery.name} disabled></input>
                <label>Brand: </label>
                <input type="text" id ="brand" name="brand" value={grocery.brand} disabled></input>
                <label>Days Left: </label>
                <input type="text" id ="days-left" name="days-left" value={grocery.daysLeft} disabled></input>
                </div> 
            ))}
        </div>
    )
}