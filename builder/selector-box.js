window.onload = () =>
{
    var SELECTOR_BOXES = document.getElementsByClassName("selector-box");
    Array.from(SELECTOR_BOXES).forEach(box =>
    {
        //Find choices
        // var choices = null
        // Array.from(box.children).forEach(child =>
        // {
        //     if (child.className == "tabs")
        //     {
        //         choices = Array.from(child.children).map(tab => tab.getAttribute("name"))
        //     }
        // })
        // console.log(choices)

        Array.from(box.children).forEach(child =>
        {
            if (child.className == "tabs")
            {
                Array.from(child.children).forEach(button => button.addEventListener("click", (e) =>
                {
                    console.log(`Going to ${e.target.getAttribute("name")}`)
                    Array.from(e.target.parentElement.parentElement.children).forEach(child =>
                    {
                        if (child.className == "tabs")
                        {
                            Array.from(child.children).forEach(tab =>
                            {
                                if (tab.getAttribute("name") == e.target.getAttribute("name"))
                                {
                                    tab.classList.add("selected")
                                }
                                else
                                {
                                    tab.classList.remove("selected")
                                }
                            })
                        }
                        else if (child.getAttribute("name") == e.target.getAttribute("name"))
                        {
                            child.classList.remove("hide")
                        }
                        else
                        {
                            child.classList.add("hide")
                        }
                    })
                }))
            }
        })
    });
}