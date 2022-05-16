//The user will enter a cocktail. Get a cocktail name, photo, and instructions and 
//place them in the DOM
document.getElementById('random').addEventListener('click',getRandom)
document.querySelector('button').addEventListener('click', getDrink)
document.getElementById('virgin').addEventListener('click', getVirginDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('p').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getRandom(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('p').innerText = data.drinks[0].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
