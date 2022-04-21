// import React, {useState} from "react";
import '../style/main.css';
// import data from "./Components/Data";
import Chicken from "../images/ChickenBreast.JPEG";
import Cookies from "../images/Cookies.JPEG";
import Potatoe from "../images/Potatoe.JPEG";



function Recipe(){

    return(
        <div>
            <div className="RecipeContain">
                <img src={Chicken} alt="food"></img>
                <div>
                    <div className="rowLabel">
                        <h3>Melt-In-Your-Mouth Baked Chicken Breasts</h3>
                        <h3>Main Dishes</h3>
                    </div>
                    <hr></hr>
                    <p>
                        These creamy, cheesy chicken breasts will, as their title says, melt in your mouth. The recipe is a Yummly original created by [Sara Mellas](https://www.yummly.com/dish/author/Sara%20Mellas).
                    </p>
                </div>
            </div>
            <div className="RecipeContain">
                <img src={Cookies} alt="food"></img>
                <div>
                    <div className="rowLabel">
                        <h3>Soft and Chewy Keto “Sugar” Cookies</h3>
                        <h3>Desserts</h3>
                    </div>
                    <hr></hr>
                    <p>
                        Meet your new favorite keto cookie recipe! Super-fine almond flour, erythritol, cream cheese, and butter come together to make these easy, soft keto 'sugar' cookies. While they appear and taste like classic sugar cookies, these guilt-free cookies are low in carbs, making them keto diet approved. They're incredibly rich thanks to the butter, cream cheese, and egg, while erythritol (a sugar-alcohol-based alternative sweetener) and vanilla extract provide the perfect amount of sweetness. Not only are they low-carb, but they're also gluten-free and grain-free — plus you can feel good about using erythritol because it's natural and tastes like sugar without the extra calories. An added bonus: they only take about 20 minutes to make.These keto cookies are perfect for any party or special occasion. They're always a hit around Christmas — sugar cookies are a holiday staple in most American households — and they make a great healthy option for holiday cookie swaps. The recipe is a Yummly original created by [Sara Mellas](https://www.yummly.com/dish/author/Sara%20Mellas).
                    </p>
                </div>
            </div>
            <div className="RecipeContain">
                <img src={Potatoe} alt="food"></img>
                <div>
                    <div className="rowLabel">
                        <h3>Extra Creamy Scalloped Potatoes</h3>
                        <h3>Side Dishes</h3>
                    </div>
                    <hr></hr>
                    <p>
                        Super rich scalloped potatoes are the perfect side to complete a special meal. The recipe is a Yummly original created by [Sara Mellas](https://www.yummly.com/dish/author/Sara%20Mellas).
                    </p>
                </div>
            </div>
        </div>
    )
    // console.log(data)
    // const [recipe, setRecipe] = useState(data);

    // React.useEffect(()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
    //             'X-RapidAPI-Key': '89e38d0479msh18bc1d0087213ccp1535aejsn70cca4b05732'
    //         }
    //     };
        
    //     fetch('https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=10&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly', options)
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(err => console.error(err));
    // },[])




    // return(   unfinish process
    //     <div>
    //         {recipe.map((recipes) => {
    //             const {id, name, images, desc, type} = recipes;
    //             <div key={id} className="RecipeContain">
    //                 <img src={images} alt="food"></img>
    //                 <div>
    //                     <div className="rowLabel">
    //                         <h3>{name}</h3>
    //                         <h3>{desc}</h3>
    //                     </div>
    //                     <hr></hr>
    //                     <p>{type}</p>
    //                 </div>
    //             </div>
    //             })
    //         }
    //     </div>
    // )
    

}


export default Recipe;