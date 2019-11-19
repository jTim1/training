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

function createPost(newPost, callback) {
    setTimeout(()=> {
      posts.push(newPost);
      callback();
    }, 2000);
}

//getPosts();

createPost(
    { title: 'Post Three', description:'This a post three'},
    getPosts);