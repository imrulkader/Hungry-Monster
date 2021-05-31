const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
fetch(url)
.then(res => res.json())
.then(data=> displayFood(data.categories))


const displayFood = categories => {
    const foodDiv = document.getElementById("food-details");
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const foodDetails = document.createElement('div')
        foodDetails.className = 'food';
        const foodInfo = `
        <h3>${category.strCategory}</h3>
        <img class="pic" src="${category.strCategoryThumb}" alt="" />

        `
        foodDetails.innerHTML = foodInfo;
        foodDiv.appendChild(foodDetails);

        }
}
