var current = 0;
const MAIN_IMAGE = document.getElementById("main-img");

window.onload = () =>
{
    //Check for in iframe
    if (!inIframe() && findGetParameter("comic") === null)
    {
        console.log("Redirecting to builder")
        window.location.replace("/comic-viewer/builder");
    }

    resizeComic()
    document.getElementById("pageSelector").max = findGetParameter("panels") - 1;

    //BG Color
    document.body.style.backgroundColor = findGetParameter("bgcolor")

    if (findGetParameter("download") === "1")
        document.getElementById("btn-download").classList.remove("hidden")

    if (findGetParameter("fullscreen") === "1")
        document.getElementById("btn-full").classList.remove("hidden")
}

window.onresize = () => { resizeComic() }

//Make the width of the correct, so the image does not stretch.
function resizeComic()
{
    getMeta(findGetParameter("comic"), (e) =>
    {
        MAIN_IMAGE.style.backgroundImage = `url(${findGetParameter("comic")})`;
        MAIN_IMAGE.style.width = `${e.width * document.body.offsetHeight / (e.height / findGetParameter("panels"))}px` //Find the width if only one panel is shown
    })
}

//Navigation
function setComicPage(page)
{
    current = page;
    document.getElementById("pageSelector").value = current;
    MAIN_IMAGE.style.backgroundPosition = `0% ${100 * page / (findGetParameter("panels") - 1)}%`
}

function pageLeft()
{
    setComicPage(Math.floor(Math.max(0, current - 1)))
    console.log(current)
}

function pageRight()
{
    setComicPage(Math.floor(Math.min(findGetParameter("panels") - 1, current + 1)))
    console.log(current)
}

document.getElementById("pageSelector").addEventListener("change", (e) =>
{
    setComicPage(e.target.value)
})

//Control Hover
document.getElementById("control-hover").addEventListener("mousemove", (e) =>
{
    // console.log(`X:${e.clientX} Y:${e.clientY}`)
    if (e.clientY > 87 * document.body.offsetHeight / 100)
        document.getElementById("controls").classList.remove("retracted")
    else
        document.getElementById("controls").classList.add("retracted")
})

document.getElementById("control-hover").addEventListener("mouseleave", (e) =>
{
    document.getElementById("controls").classList.add("retracted")
})

//Extra
function downloadFile()
{
    alert("Use:\nRight Click > Save as Image")
    window.open(findGetParameter("comic"), "_self")
}
