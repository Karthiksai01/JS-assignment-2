const button=document.getElementById("btn");
const resultarea=document.getElementById("text");
function fetchdata(callback){
    setTimeout(() => {
        fetch('https://dummyjson.com/posts')
           .then(Response => Response.json())
           .then(data => callback(data))
           .catch(error=> console.error('Error:',error));
    }, 5000);

}
button.addEventListener("click",()=>{
    const resultdiv=resultarea;
    resultdiv.classList.add("text1")
    resultdiv.textContent="Loading posts wait for 5 sec...";

    fetchdata((data)=>{
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
    });
});