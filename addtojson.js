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
