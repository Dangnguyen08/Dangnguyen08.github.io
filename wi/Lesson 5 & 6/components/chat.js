class Chat{
    constructor(){
        this.container = document.createElement("div");
        this.container.innerHTML = "Chattt"
    }
    render() {
        return this.container
    }
}

export {Chat}