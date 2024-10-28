
const jokeElement = document.getElementById('loadingJoke');
const loadJokeBtn = document.getElementById('loadJokeBtn');


const loadJoke = async () => {
    
    try{

        const fetchJokes = await fetch('https://api.chucknorris.io/jokes/random',
            {
                headers: {
                    Accept: "application/json"
                }
            }

        );
        const jokeData = await fetchJokes.json();

        jokeElement.innerHTML = jokeData.value;
    }catch(error) {
        console.log(error);
    }
}

loadJokeBtn.addEventListener("click", loadJoke);


