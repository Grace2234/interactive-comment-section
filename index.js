const data = {
    "currentUser": {
      "image": { 
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [
      {
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": { 
            "png": "../interactive-comments-section-main/images/avatars/image-amyrobson.png",
            "webp": "../interactive-comments-section-main/images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": { 
            "png": "./interactive-comments-section-main/images/avatars/image-maxblagun.png",
            "webp": "./interactive-comments-section-main/images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [
          {
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": { 
                "png": "./interactive-comments-section-main/images/avatars/image-ramsesmiron.png",
                "webp": "./interactive-comments-section-main/images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": { 
                "png": "./interactive-comments-section-main/images/avatars/image-juliusomo.png",
                "webp": "./interactive-comments-section-main/images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            },
          },
        ],
      },
    ],
  };






function loadComments(){
  let section = document.getElementById('big-container');
  for( let i=0; i < data.comments.length; i++){
    let comments =`<div id="first-con">
    <div id="small">
       <img src="./interactive-comments-section-main/images/icon-plus.svg" alt="">
        <p id="score">${ data.comments[i].score}</p>
       <img src="./interactive-comments-section-main/images/icon-minus.svg" alt="">
    </div>
    <div class="big">
        <div id="image-con">
            <div id="imgc">
            <img src=${data.comments[i].user.image.png} alt="">
                
            </div>
            <h4 id="userName">${data.comments[i].user.username}</h4> 
        <p id="time-created" >${ data.comments[i].createdAt}</p>
            <div id="img2">
                <img src="./interactive-comments-section-main/images/icon-reply.svg" alt="">
                <span>Reply</span>
            </div>
            
        </div>
        <div id="com">
        <p id="comment">${ data.comments[i].content} </p>
        
        
      </div>
    </div>
    
   </div>
   
   `
/* <div id="replies"></div> */
   console.log(i)
  section.innerHTML += comments;
  }
}
window.addEventListener('load', loadComments);

const form = document.getElementById('form')

function replyBox(e){
  e.preventDefault()

  const reply = document.getElementById('replyInput').value 
  const name = document.getElementById('nameInput').value
  const score = document.getElementById('scoreinput').value 
  const timeCreated = document.getElementById('time').value 
  const replySection = document.getElementById('replies');

  

  const div = `<div id="second-con">
  <div id="small">
     <img src="./interactive-comments-section-main/images/icon-plus.svg" alt="">
      <p id="score">${ score}</p>
     <img src="./interactive-comments-section-main/images/icon-minus.svg" alt="">
  </div>
  <div class="big">
      <div id="image-con">
          <div id="imgc">
          <img src="./interactive-comments-section-main/images/avatars/image-juliusomo.png" alt="">
              
          </div>
          <h4 id="userName">${name}</h4> 
      <p id="time-created" >${timeCreated}</p>
          <div id="img2">
              <img src="./interactive-comments-section-main/images/icon-reply.svg" alt="">
              <span>Reply</span>
          </div>
          
      </div>
      <div id="com">
      <p id="comment">${ reply } </p>
      
    </div>
  </div>
 </div>`
  
 replySection.innerHTML += div
  console.log(reply, name, score, timeCreated)
}

form.addEventListener('submit', replyBox)