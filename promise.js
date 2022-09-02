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
    
    //getPosts();
    //createPost({ title: 'post three', body: 'This is post three'})
    //.then(getPosts,deletePost)
    //.catch(err => console.log(err));


    //deletePost()
    //.then(() => {
     //deletePost().catch(err => console.log(err))
    //})
    //.catch(err => console.log(err));

    const promise1 = Promise.resolve('Hello World');
    const promise2 = 10;
    const promise3 = new Promise((resolve,reject) => {
        setTimeout(resolve,2000,'Good Bye')
    });

    const promise4 = {LastUserActivityTime : ''}

    const updateLastUserActivityTime = function() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                promise4.LastUserActivityTime = new Date().getTime();
                resolve(promise4.LastUserActivityTime);
            },1000)
        })
    };

    function userupdates() {
        Promise.all([createPost, updateLastUserActivityTime])
        .then(()=> {
            createPost()
            updateLastUserActivityTime();
        })
        .catch(err => console.log(err))
    }

    Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));

    getPosts();
    createPost({ title: 'post three', body: 'This is post three'})
    .then(getPosts,userupdates)
    .catch(err => console.log(err));

    deletePost().then(deletePost).catch(err => console.log(err));