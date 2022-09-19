import './GroceryCard.css'

export default function GroceryCard({groceries}){
    
    return(
        <div className="grocery-card-list">
            {groceries.map((grocery) =>(
                <div className="grocery-card" key={grocery.id}>
                    <h2 className="grocery-name">{grocery.name}</h2>
                    <div className="days-left">
                        <h2>{grocery.daysLeft}</h2>
                        <p>days left</p>
                    </div>
                    <p className="grocery-brand">"{grocery.brand}"</p>
                    <p className="dateOpened">opened: {grocery.dateOpened}</p>
                    <p className="expirationDate">expires: {grocery.expirationDate}</p>
                </div> 
            ))}
        </div>
    )
}