const posts = [
    {title : 'Post One', body : 'This is post one'},
    {title : 'Post Two', body : 'This is post two'}
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title} </li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

const Posts = async () => {
 function createPost(post){
   return new Promise((resolve,reject) => {  
      setTimeout(() => {
          posts.push(post);
         
          const error = false;

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
}
    
    //getPosts();
    //createPost({ title: 'post three', body: 'This is post three'})
    //.then(getPosts,deletePost)
    //.catch(err => console.log(err));


    //deletePost()
    //.then(() => {
     //deletePost().catch(err => console.log(err))
    //})
    //.catch(err => console.log(err));

    
    getPosts();
    createPost({ title: 'post three', body: 'This is post three'})
    .then(getPosts,userupdates)
    .catch(err => console.log(err));

    deletePost().then(deletePost).catch(err => console.log(err));