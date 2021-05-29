const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
fetch(url)
.then(res => res.json())
.then(data=> displayFood(data.categories))

function displayFood(categories){
    // /console.log(categories);
    const categoryNames = categories.map(categories=> categories.strCategory);
    const ul = document.getElementById("food-details");
    for (let i = 0; i < categoryNames.length; i++) {
        const categories = categoryNames[i];
        const li = document.createElement("li");
        li.innerText = categories;
        ul.appendChild(li);

    }
}