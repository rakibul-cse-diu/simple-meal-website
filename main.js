// handle search
const handleSearch = () => {
    const searchInput = document.getElementById("search-feild");
    let foodName = searchInput.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))

    searchInput.value = '';
}


// display data
const displayData = (data) => {
    const container = document.querySelector(".result-container");
    container.textContent = '';
    data.forEach(item => {
        const instruction = item.strInstructions.slice(0, 150);
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
                <div class="card h-100">
                    <img src='${item.strMealThumb}' class="card-img-top" alt="food">
                    <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p class="card-text">${instruction}</p>
                        <button class="btn btn-primary" onclick="handleDetails(${item.idMeal})">See Details</button>
                    </div>
                </div>
        `
        container.appendChild(col);
    });
}




// handle details
const handleDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))
}



// display details
const displayDetails = (data) => {
    const container = document.querySelector(".details-container");
    container.textContent = '';
    data.forEach(item => {
        const instruction = item.strInstructions;
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
                <div class="card h-100">
                    <img src='${item.strMealThumb}' class="card-img-top" alt="food">
                    <div class="card-body">
                        <h5 class="card-title">${item.strMeal}</h5>
                        <p class="card-text">${instruction}</p>
                    </div>
                </div>
        `
        container.appendChild(col);
    });
}