import {InputGroup} from "./inputGroup.js"
import {Register} from "./register.js";
import {setScreen} from "../app.js";
import {Chat} from "./chat";

class Login {
    constructor(){
        this.container = document.createElement('div');
        this.container.classList.add("center","h-100", "f-column")

        this.title = document.createElement("h3")
        this.title.innerHTML = "Login";

        this.InputGroupEmail = new InputGroup("email", "Email", "email", "Enter your email address")
        this.inputGroupPassword = new InputGroup("password", "Password", "password", "Enter your password")

        this.form = document.createElement("form");
        this.form.addEventListener("submit", this.handleSubmit);

        this.btnSubmit = document.createElement("button")
        this.btnSubmit.type = "submit"
        this.btnSubmit.innerHTML = "login"

        this.linkToRegister = document.createElement("p")
        this.linkToRegister.innerHTML = "You don't have an account?"
        this.linkToRegister.classList.add("btn_link")
        this.linkToRegister.addEventListener("clink", this.moveToRegister)
    }
    moveToRegister = ()=>{
        const register = new Register();
        setScreen(register);
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        //validate the form
        const email = this.InputGroupEmail.getInputValue()
        const password = this.inputGroupPassword.getInputValue()

        this.inputGroupPassword.setError(null)
        this.inputGroupemail.setError(null)

        if(!email){
            this.inputGroupemail.setError("Email is required")
        }
        if(password.length < 6){
            this.inputGroupPassword.setError("Password is required")
        };
        console.log(email);
        console.log(password);   

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        const chat = new Chat();
        setScreen(chat)
        })
        .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage)
        });
    };

    render(){
        this.form.appendChild(this.InputGroupEmail.render())
        this.form.appendChild(this.inputGroupPassword.render())
        this.form.appendChild(this.btnSubmit)

        this.container.appendChild(this.title);
        this.container.appendChild(this.form);
        this.container.appendChild(this.linkToRegister);

        return this.container
    }
}

export {Login}