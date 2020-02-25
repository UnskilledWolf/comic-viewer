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

function getMeta(url, callback)
{
    var img = new Image();
    img.onload = () => { callback(img) };
    img.src = url;
}