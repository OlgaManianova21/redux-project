
const Dish = ({dish}) => {
    return(<div>
<img src={`./${dish.img}.jpeg`}/>
<h2>{dish.name}</h2>
<p>$ {dish.price}</p>

{/* TO FIX LATER*/}
<button>How many portions?</button>

<button>Add to cart</button>
    </div>)
}
export default Dish;