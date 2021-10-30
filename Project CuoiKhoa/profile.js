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

      renderProfile(user.photoURL, username);

      console.log(user);
    } else {
      alert("bạn cần phải đăng nhập");
      open("./login.html", "_self");
    }
  });
}

let updateFormProfile = document.querySelector("#updateProfile");

updateFormProfile.onsubmit = async (e) => {
  e.preventDefault();

  let newName = updateFormProfile.name.value;

  uploadPost(newName)

};

let renderProfile = (ava, name) => {
  document.querySelector("#currentName").innerHTML = name;
  document.querySelector("#current_img").src = ava;
};

let uploadPost = async (userName) => {
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
        let imgUrl = url;
        updateProfile(userName, imgUrl)
      })
      .catch((err) => {
        alert(err);
      });
  };


let updateProfile = async (name, photo) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
      photoURL: photo,
    })
    .then(() => {
      alert("Cập nhật Thành Công");
      // ...
    })
    .catch((error) => {
      alert(error.message);
    });
};
