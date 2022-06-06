let cookies = 0



function addCookies(num){
    cookies += num
    document.getElementById("count").innerHTML = "Cookies:" + cookies;
}

function addCookiesPerSec(num, req)
{
    if (cookies >= req)
    {
    setInterval(()=>addCookies(num), 100);
    cookies -= req
    }
}

document.getElementById("grandma").onclick=()=>{addCookiesPerSec(1, 10)}

document.getElementById("farm").onclick=()=>{addCookiesPerSec(10, 100)}

document.getElementById("factory").onclick=()=>addCookiesPerSec(100, 1000)