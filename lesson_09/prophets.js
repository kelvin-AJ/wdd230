const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
prophets.forEach(displayProphets);
  });

const displayProphets = (prophet) => {
    // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let dob = document.createElement("div");
  let pob = document.createElement("div");




  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  dob.textContent = `Date of Birth: ${prophet.birthdate}`;
  dob.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(dob);
  card.appendChild(pob);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}
// async function fetchProphets(){
//     const response = await fetch(requestURL);
//     const jsonObject = await response.json()
//     console.log(jsonObject)
// }
// fetchProphets()
