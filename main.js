
document.querySelector('#app').innerHTML = `
  <article>
    <h2>Getting Started</h2>
    <h3>Setup mob Timer</h3>
    <p>Create a mob team with <a href="https://mobti.me/">https://mobti.me/</a> and add the members name to the mob. Then set the timer duration to 10 minutes and you are ready to go.</p>
    <h2>Exercises</h2>
    <h3>Exercise 1 - Hello Shevelopers!</h3>
    <p>value on page <a href="/exercise1">http://localhost:5173/exercise1</a> in a <code>p</code> element.</p>
    <h3>Exercise 2 - Counter</h3>
    <p>Add a <code>button</code> to <a href="/exercise2">http://localhost:5173/exercise2 </a>that increases a value by one and display the updated value on the page. </p>
    <h3>Exercise 3 - Lasagna </h3>
    <h4>Part 1</h4>
    <p>Display the ingrediens for a lasagna on http://localhost:5173/exercise3 page.</p>
    <p>Inspiration for Vegan Lasagna:</p>
    <pre>
    <code>
    const receipt = {
        tofu: 250, //in g
        onion: 1, 
        mushrooms: 150, //in g
        carrots: 2,
        garlic: 2,
        noodles: 300, //in g
    }
    </code>

</pre>
   <h4>Part 2</h4>
   <p>Now add an input field that takes a number that scales the amount of each ingredient by that number and display the updated values on <a href="/exercise2">http://localhost:5173/exercise3</a>.</p>
   <h2>More Exercises on Exercism</h2>
   <p>For inspiration <a href="https://exercism.org/tracks/javascript/exercises">https://exercism.org/tracks/javascript/exercises</a></p>
  </article>
`
