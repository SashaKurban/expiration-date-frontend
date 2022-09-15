import './GroceryCard.css'

export default function GroceryCard(props){
    return(
        <div className="groceryCard">
            <label>Name: </label>
            <input type="text" id ="food" name="food" value="bread" disabled></input>
            <label>Brand: </label>
            <input type="text" id ="brand" name="brand" value="Nature valley" disabled></input>
            <label>Days Left: </label>
            <input type="text" id ="days-left" name="days-left" value="10" disabled></input>
        </div>
    )
}