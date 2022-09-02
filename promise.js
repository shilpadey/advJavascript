const posts = [
    {title : 'Post One', body : 'This is post one', createAt: new Date().getTime()},
    {title : 'Post Two', body : 'This is post two',createAt: new Date().getTime()}
];

let intervalId = 0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
  return new Promise((resolve,reject) => {  
     setTimeout(() => {
         posts.push({...post,createAt: new Date().getTime()});
         
         const error = true;

         if(!error){
            resolve();
         }else{
            reject('Error : Something went wrong');
         }
     },2000);
  })
}


function deletePost(){
    return new Promise ((resolve,reject) => { 
        setTimeout( () => {
            for( let i =0; i< posts.length; i++) {
                if(posts.values !== 0){
                resolve(posts.pop());
               }
               else{
                reject('error:Array is empty now');
               }
           
            }
            
        },1000);
    });
}
    
    getPosts();
    createPost({ title: 'post three', body: 'This is post three'})
    .then(getPosts,deletePost)
    .catch(err => console.log(err));


    deletePost()
    .then(() => {
     deletePost().catch(err => console.log(err))
    })
    .catch(err => console.log(err));