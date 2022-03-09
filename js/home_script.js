'use strict'
const logoutBtn = document.getElementById('logout')
const welcomeUser = document.querySelector('.wlc-user')
// id display data html  
const postes = document.getElementById('postes')
let container = []
function logout()
{
    localStorage.removeItem('sessionlogin')
    window.location.href = ('login.html')
}
logoutBtn.addEventListener('click', logout)





async function theMoves()
{
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=aab5c082e7e9c036409e4c52f55977bc`);
    let results = await response.json()
    container = results.results

}



function displayMoves()
{
    let movie = container.splice(0, 15)
    let contentMovie = `    <h2 class="text-center  text-light py-5 fa-4x">The Movie</h2>`
    for (let n in movie)
    {
        let title = movie[n].title.split(" ", 4).join(" ")
        let overview = movie[n].overview.split(" ", 10).join(" ")

        contentMovie += `

            <div class="col-md-4 my-3" >
            <img src="https://image.tmdb.org/t/p/w500${movie[n].backdrop_path}" alt="background movie img" class="w-100 pb-4 shadow-lg rounded-1">
                <div class="caption ">
                    <h4 class="text-white-50"> ${title}..</h4>
                    <p class=" text-muted">${overview}....</p>
                </div>
            </div>
        
        `
    }


    postes.innerHTML = contentMovie
}


(async function ()
{
    await theMoves();
    await displayMoves();
    console.log(1)
})();

