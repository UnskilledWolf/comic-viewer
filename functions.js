//https://stackoverflow.com/a/5448595
function findGetParameter(parameterName)
{
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item)
        {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

//https://stackoverflow.com/a/11442850
function getMeta(url, callback)
{
    var img = new Image();
    img.onload = () => { callback(img) };
    img.src = url;
}

//https://stackoverflow.com/a/326076
function inIframe()
{
    try
    {
        return window.self !== window.top;
    } catch (e)
    {
        return true;
    }
}