const foods = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    },
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

const restaurantMenu = document.getElementById('restaurant-menu')

function addFoodImageToMenu(food){
    const image = document.createElement('img')
    image.src = food.image
    image.addEventListener('click',() => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(image)
}

for(let index = 0; index < foods.length; index++){
    addFoodImageToMenu(foods[index])
}

function displayFoodDetails(food){
        const foodDetailImage = document.querySelector('.detail-image')
        foodDetailImage.src = food.image
        
        const foodName = document.querySelector('.name') 
        foodName.textContent = food.name
        
        const foodDescription = document.querySelector(`#description-display`)
        foodDescription.textContent = food.description
}

displayFoodDetails(foods[0])

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const foodNameValue = document.getElementById('new-name').value
    const imgaeLinkValue = document.getElementById('new-image').value
    const descriptionValue = document.getElementById('new-description').value
    console.log(foodNameValue)
    console.log(imgaeLinkValue)
    console.log(descriptionValue)
    const food = {
        name: foodNameValue,
        image: imgaeLinkValue,
        description: descriptionValue
    }
    addFoodImageToMenu(food)
})