const button=document.getElementById("btn");
const resultarea=document.getElementById("divarea");
async function fetchpostsAsync() {
    resultarea.classList.add("divtext1")
    resultarea.textContent='Loading...';

    try {
        const controler=new AbortController();
        const timeout=setTimeout(() => controler.abort(),5000);

        const response= await fetch('https://dummyjson.com/posts',{signal: controler.signal});
        clearTimeout(timeout);

        if(!response.ok) throw new Error('Failed to fetch');

        const data=await (response.json());

        resultarea.innerHTML='';

        const title=document.createElement('h2');
        title.textContent="List of posts:";
        resultarea.appendChild(title);
        resultarea.classList.add("title");

        data.posts.forEach(post => {
            const postelement=document.createElement('p');
            postelement.textContent=post.title;
            resultarea.appendChild(postelement);
        });
    } catch (error){
        resultarea.textContent="Error"+error.message;
    }
}
button.addEventListener('click',fetchpostsAsync)