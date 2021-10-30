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
<<<<<<< Updated upstream

      let formUpload = document.querySelector("#formUpload");

      formUpload.onsubmit = async (e) => {
        e.preventDefault();
        uploadPost(email,username )
      };

      renderUserInfo({ name: username });
=======
      
      let formUpload = document.querySelector("formUpload")

      renderUserInfo({name:username })
>>>>>>> Stashed changes
      getpost();
    } else {
      alert("bạn cần phải đăng nhập");
      open("./login.html", "_self");
    }
  });
}

let renderUserInfo = (data) => {
  document.getElementById("userName1").innerHTML = data.name;
  document.getElementById("userName2").innerHTML = data.name;
};

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

<<<<<<< Updated upstream
let uploadPost = async (email, username) => {
  const ref = await firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];

  const metadata = {
    contentType: file.type,
  };
  const name = file.name;
  const imgUploaded = ref.child(name).put(file, metadata);

  imgUploaded
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      let content = formUpload.content.value;
      let imgUrl = url;

      let data = {
        content: content,
        ava: "https://picsum.photos/200",
        username: username,
        img: imgUrl,
        like: 100,
        owner: email,
        share: 50,
        time: getRealTime(),
        comment: 50,
      };
      addConversation(data)
    })
    .catch((err) => {
      alert(err);
    });
};

let getRealTime = () => {
  let date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = days[date.getUTCDay()];

  let h_ = "";
  let m_ = "";
  let s_ = "";

  if (h < 10) {
    h_ = "0" + h;
  } else {
    h_ = h;
  }
  if (m < 10) {
    m_ = "0" + m;
  } else {
    m_ = m;
  }
  if (s < 10) {
    s_ = "0" + s;
  } else {
    s_ = s;
  }

  let time = h_ + ":" + m_ + ":" + s_ + " " + d;

  return time;
};


let addConversation = async (data)=>{
  await firebase.firestore().collection('Socialbooks').add(data)
=======
let uploadIMG = async ()=>{
  const ref = await firebase.storage().ref();
  const file = document.querySelector("#photo").file[0]

  const metadata = {
    contentType: file.type,
  }
  const name = file.name
  const imgUploaded = ref.child(name).put(file, metadata)
  imgUploaded.then(snapshot=> snapshot.ref.getDownloadURL()).then(url =>{
    return url
  })
  .catch(err=>{
    alert(err)
  });
>>>>>>> Stashed changes
}