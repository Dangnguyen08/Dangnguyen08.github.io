var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
let getDataFromDoc = (doc) => {
  let data = doc.data();
  data.id = doc.id;
  return data;
};

let getDataFromDocs = (docs) => {
  let result = [];
  for (let doc of docs) {
    let data = getDataFromDoc(doc);
    result.push(data);
  }
  return result;
};
let getpost = async () => {
  let result = await firebase.firestore().collection("Socialbooks").get();
  let data = getDataFromDocs(result.docs);
  console.log(data);
  renderPost(data);
};

window.onload = init;

async function init() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let email = user.email;
      let username = user.displayName;
      console.log(user);
      renderUserInfo({name:username })
      getpost();
    } else {
      alert("bạn cần phải đăng nhập");
      open("./login.html", "_self");
    }
  });
}

let renderUserInfo = (data)=>{
    document.getElementById("userName1").innerHTML = data.name;
    document.getElementById("userName2").innerHTML = data.name;
}

let renderPost = (data) => {
  let dom = document.querySelector(".postwrapper");
  for (let i = 0; i < data.length; i++) {
    let html = `<div class="post-container">
    <div class="post-row">
        <div class="user-profile">
            <img src="${data[i].ava}">
            <div>
                <p>${data[i].username}</p>
                <span>${data[i].time}</span>
            </div>
        </div>
        <a href="#"><i class="fas fa-ellipsis-v""></i></a>
    </div>

    <p class="post-text">${data[i].content}</p>
    <img src="${data[i].img}" class="post-img">

    <div class="post-row">
        <div class="activity-icons">
            <div><img src="images/like-blue.png">${data[i].like}</div>
            <div><img src="images/comments.png">${data[i].comment}</div>
            <div><img src="images/share.png">${data[i].share}</div>
        </div>
        <div class="post-profile-icon">
            <img src="${data[i].ava}"><i class="fas fa-caret-down"></i>
        </div>
    </div>
</div>`;
    dom.innerHTML += html;
  }
};
