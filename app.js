const joke = document.getElementById('jokes');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click',getRequest);

getRequest();

// Using Async/Await

async function getRequest(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com',config);

    const data = await res.json();

    joke.innerText = data.joke;
}


//Using .then()

// function getRequest(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com',config)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerText = data.joke;
//     })
// }