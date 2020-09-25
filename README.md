# project-mad-libs

## Goal:

> Let user input animal and display a sentence using that word. The form should disappear on click, and the sentence should appear on click (initially hidden). 

1) WHAT: We need to grab these HTML elements
    - Button
        - Why? To submit the form value
    - Input
        - Why? So we can the animal value
    - Form div
        - Why? So we can hide it on submit
    - Animal h3
        - Why? So we can reveal it on submit.
    - Animal span
        - Why? So we can inject the animal into the span

2) WHERE/WHEN: We need to listen for user interaction:
    - We should listen for the click on the button.

3) WHAT HAPPENS: 
    - Inject the user input into the span
        - Get the .value from the input element
    - Hide the #form div
        - element.classList.toggle('hidden')
        - element.style.display = 'none'
    - Reveal the animal h3
        - element.classList.toggle('hidden')
        - element.style.display = 'block'

    
- This is dani's mad-libs code!
- We all worked on it as a team!
- But it's time to swich driver's!
- So dani is going to push their code!
- And we're gonna swap off!

# Some New Code

Check out this new code!
