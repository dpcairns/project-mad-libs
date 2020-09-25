// 1) WHAT/GET: We need to grab these HTML elements
// - Button
//     - Why? To submit the form value
// - Input
//     - Why? So we can the animal value
// - Form div
//     - Why? So we can hide it on submit
// - Animal h3
//     - Why? So we can reveal it on submit.
// - Animal span
//     - Why? So we can inject the animal into the span

const myButton = document.getElementById('my-button');
const myInput = document.getElementById('animal-input');
const formDiv = document.getElementById('form');
const animalh3 = document.getElementById('animal-h3');
const animalSpan = document.getElementById('animal-span');

// 2) WHERE/WHEN (SET): We need to listen for user interaction:
// - We should listen for the click on the button.

myButton.addEventListener('click', () => {
    // 3) WHAT HAPPENS: 
    // - Inject the user input into the span
    //     - Get the .value from the input element
    const value = myInput.value;
    //     - SET the animalSpan
    animalSpan.textContent = value;

    // - Hide the #form div
    formDiv.classList.toggle('hidden');
    // - Reveal the animal h3
    animalh3.classList.toggle('hidden');
});

