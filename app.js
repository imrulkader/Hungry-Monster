const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
fetch(url)
.then(res => res.json())
.then(data=> displayFood(data.categories))


const displayFood = categories => {
    const foodDiv = document.getElementById("food-details");
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const foodNameDiv = document.createElement('div')
        const name = document.createElement('h3')
        name.innerText = category.strCategory;
        const foodImage = document.createElement('p')
        foodImage.innerHTML = `<img src="${category.strCategoryThumb}" alt="" />`
        foodNameDiv.appendChild(name);
        foodNameDiv.appendChild(foodImage);
        foodDiv.appendChild(foodNameDiv);

        }
}
