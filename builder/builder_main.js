const INPUT_LINK = document.getElementById("link");
const INPUT_PANELS = document.getElementById("panels");
const INPUT_COLOR = document.getElementById("color");
const INPUT_DOWNLOAD = document.getElementById("download");
const OUTPUT = document.getElementById("output");
const PREVIEW = document.getElementById("main-frame")
const PAGE_LINK = "/index.html"

INPUT_LINK.addEventListener("change", update)
INPUT_PANELS.addEventListener("change", update)
INPUT_COLOR.addEventListener("change", update)
INPUT_DOWNLOAD.addEventListener("change", update)
INPUT_LINK.addEventListener("input", update)
INPUT_PANELS.addEventListener("input", update)

function update()
{
    var src = `${PAGE_LINK}?comic=${encodeURI(INPUT_LINK.value)}&panels=${INPUT_PANELS.value}&bgcolor=%23${INPUT_COLOR.value.substring(1)}&download=${INPUT_DOWNLOAD.checked ? 1 : 0}`
    OUTPUT.innerHTML = `&lt;iframe src="${src}" frameborder="0" height="500px" width="825px"&gt;&lt;/iframe&gt;`
    PREVIEW.src = src;
    console.log("u")
}

update()