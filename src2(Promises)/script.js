const button=document.getElementById("btn");
const resultarea=document.getElementById("text");
function fetchposts(){
    return new Promise((resolve,reject)=>{
        const timeout=setTimeout(() => reject(new error('Operation timed out')), 5000);
        fetch('https://dummyjson.com/posts')
           .then(Response => Response.json())
           .then(data=> {
            clearTimeout(timeout);
            resolve(data);
           })
           .catch(error=> reject(error));
    });
}  

button.addEventListener("click",()=>{
    const resultdiv=resultarea;
    resultdiv.classList.add("text1")
    resultdiv.textContent="Loading...";

    fetchposts()
        .then(data=>{
        resultdiv.innerHTML='';   //Empty div
        resultdiv.classList.add("effect");

        const title=document.createElement('h2');
        title.textContent="List of Posts";
        title.classList.add("title");
        resultdiv.appendChild(title);

         //displays the fetched data
        data.posts.forEach(post => {
            const postelement=document.createElement('p');
            postelement.textContent=post.title;
            resultdiv.appendChild(postelement); //appending posts to result div
            
        });
    })
    .catch(error=>{
        resultdiv.textContent="Error:"+error.message;
    });
});