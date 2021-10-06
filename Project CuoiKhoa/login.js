let formRegister = document.getElementById("register")
formRegister.onsubmit = (e) => {
    e.preventDefault()
    let username = formRegister.username.value
    let email = formRegister.email.value
    let password = formRegister.password.value
    signup(username, email, password)
}
let signup = async (username, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            user.updateProfile({
                displayName: username,
                photoURL: "https://picsum.photos/200"
            }).then(() => {
                console.log("OK")
            }).catch((error) => {
                console.log(error)
            });
            // ...
        })
        .catch((error) => {
            alert(error.message)
            // ..
        });
}
let formSignin = document.getElementById("login")
formSignin.onsubmit = (e) => {
    e.preventDefault()
    let username = formSignin.username.value
    let password = formSignin.password.value
    signin(username, password)
}
let signin = async (username, password) => {
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            open("./index.html", "_self")
            // ...
        })
        .catch((error) => {
            alert(error.message);
        });
}
