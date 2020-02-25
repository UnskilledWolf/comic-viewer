var current = 0;
const MAIN_IMAGE = document.getElementById("main-img");

window.onload = () => { resizeComic() }

window.onresize = () => { resizeComic() }

function resizeComic()
{
    getMeta(findGetParameter("comic"), (e) =>
    {
        MAIN_IMAGE.style.backgroundImage = `url(${findGetParameter("comic")})`;
        MAIN_IMAGE.style.width = `${e.width * document.body.offsetHeight / (e.height / findGetParameter("panels"))}px` //Find the width if only one panel is shown
    })
}


function setComicPage(page)
{
    current = page;
    MAIN_IMAGE.style.backgroundPosition = `0% ${100 * page / 7}%`
}

function pageLeft()
{
    setComicPage(Math.floor(Math.max(0, current - 1)))
    console.log(current)
}

function pageRight()
{
    setComicPage(Math.floor(Math.min(findGetParameter("panels"), current + 1)))
    console.log(current)
}