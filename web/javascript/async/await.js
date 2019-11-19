const posts = [
    { title:'Post One', description:'This is post one'},
    { title:'Post Two', description:'This is post two'},
];

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`; 
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(newPost);
            const error = false;
          
            if(!error) {
                resolve();
            }
            else {
                reject('Error: prob');
            }
          }, 2000);
    });
    
}

async function init(){
    await createPost({ title: 'Post Three', description:'This a post three'});
    getPosts();
}

init();