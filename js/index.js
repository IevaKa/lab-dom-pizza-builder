// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(shroom => {
    if (state.mushrooms) {
      shroom.style.visibility = 'visible';
    } else {
      shroom.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(pep => {
    if(state.greenPeppers){
      pep.style.visibility = 'visible';
    } else {
      pep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(e => {
    if(state.whiteSauce){
      e.style.visibility = 'visible';
    } else {
      e.style.visibility = 'hidden';
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(e => {
    if(state.glutenFreeCrust) {
      e.classList.add('crust-gluten-free');
    } else {
      e.classList.remove('crust-gluten-free');
    }
  })
}


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if(state.pepperoni) {
      document.querySelector('.btn.btn-pepperoni').classList.add('active');
    } else {
      document.querySelector('.btn.btn-pepperoni').classList.remove('active');
    }
  
  if(state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }

  if(state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }

  if(state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }

  if(state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  let ing = JSON.parse(JSON.stringify(ingredients));
  // Iteration 4: change the HTML of `<aside class="panel price">`
  if(state.pepperoni) {
    document.querySelector('.price li:nth-child(1)').style.display = 'block';
  } else {
    document.querySelector('.price li:nth-child(1)').style.display = 'none';
    ing.pepperoni.price = 0;
  }

  if(state.mushrooms) {
    document.querySelector('.price li:nth-child(2)').style.display = 'block';
  } else {
    document.querySelector('.price li:nth-child(2)').style.display = 'none';
    ing.mushrooms.price = 0;
  }

  if(state.greenPeppers) {
    document.querySelector('.price li:nth-child(3)').style.display = 'block';
  } else {
    document.querySelector('.price li:nth-child(3)').style.display = 'none';
    ing.greenPeppers.price = 0;
  }

  if(state.whiteSauce) {
    document.querySelector('.price li:nth-child(4)').style.display = 'block';
  } else {
    document.querySelector('.price li:nth-child(4)').style.display = 'none';
    ing.whiteSauce.price = 0;
  }

  if(state.glutenFreeCrust) {
    document.querySelector('.price li:nth-child(5)').style.display = 'block';
  } else {
    document.querySelector('.price li:nth-child(5)').style.display = 'none';
    ing.glutenFreeCrust.price = 0;
  }

  let total = basePrice + Object.keys(ing).reduce((acc, key) => {
    return acc + ing[key].price
  }, 0);
  
  document.querySelector('.price strong').innerText = '$' + total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
}) 


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

