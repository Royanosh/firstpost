let addtojson=async()=>
{
    let obj=
    {
        image:document.getElementById("image").value,
        title:document.getElementById("title").value,
        cateogory:document.getElementById("cateogory").value,
        summary:document.getElementById("summary").value,
        date:document.getElementById("date").value,
        author:document.getElementById("author").value,
        onframe:document.getElementById("onframe").value,
        updateddate:document.getElementById("updateddate").value,
        body:document.getElementById("body").value
    }
        let selected=document.getElementById("cateogory").value;
        let res1=await fetch(`http://localhost:3000/${selected}`,
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }
//  async function display()
//  {
//     let res2=await fetch(" http://localhost:3000/INDIA")
//     let res3=await res2.json();
//     res3.map(function(el){
//         let p=document.createElement("p");
//         p.innerText=el.body;

//         document.getElementById("container").append(p)
//     })
//  }
//  display();
let addtoreanding=async()=>
{
    let obj=
    {
        image:document.getElementById("image1").value,
        title:document.getElementById("title1").value,
        cateogory:document.getElementById("cateogory1").value,
        summary:document.getElementById("summary1").value,
        date:document.getElementById("date1").value,
        author:document.getElementById("author1").value,
        onframe:document.getElementById("onframe1").value,
        updateddate:document.getElementById("updateddate1").value,
        body:document.getElementById("body1").value
    }
        let selected=document.getElementById("cateogory1").value;
        let res1=await fetch("http://localhost:3000/HEAD-NEWS",
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }

 let addtomostread=async()=>
{
    let obj=
    {
        image:document.getElementById("image2").value,
        title:document.getElementById("title2").value,
        cateogory:document.getElementById("cateogory2").value,
        summary:document.getElementById("summary2").value,
        date:document.getElementById("date2").value,
        author:document.getElementById("author2").value,
        onframe:document.getElementById("onframe2").value,
        updateddate:document.getElementById("updateddate2").value,
        body:document.getElementById("body2").value
    }
        let selected=document.getElementById("cateogory1").value;
        let res1=await fetch("http://localhost:3000/MOST-READ",
        {
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-type":"application/json"
                  }
        })
        alert("Details added successfully")
 }