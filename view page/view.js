//get id from local storage
//get link from localstorage
let viewpage=async()=>
{
    let res1=await fetch(`https://firstpost-masai-server.herokuapp.com/INDIA/1`)
    let res2=await res1.json();
    document.getElementById("forcateogory").innerText=res2.cateogory
    document.getElementById("fortitle").innerText=res2.title
    document.getElementById("forsummary").innerText=res2.summary
    document.getElementById("forauthor").innerText=res2.author
    document.getElementById("fordate").innerText=res2.date

    

}
viewpage();