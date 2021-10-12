const posts = [
  {title: "Book One", body: "This was written by Hari"},
  {title: "Book Two", body: "This was written by Sandeep"}
]

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index)=>{
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post) {
  return new Promise ((resolve, reject)=>{
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

createPost({title: "Book Three", body:"This was written by Sandhya"})
.then(getPosts)
.catch(err => console.log(err));