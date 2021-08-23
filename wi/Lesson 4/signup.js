class InputForm {
    constructor(type, lable, placeholder){
        this.$container = document.createElement('div')

        this.$lable = document.createElement('lable')
        this.$lable.innerHTML = lable
        
        this.$input = document.createElement('input')
        this.$input.type = type
        this.$input.placeholder = "name"
    }

    render(){
        this.$container.appendChild(this.$lable)
        this.$container.appendChild(this.$input)

        return this.$container
    }
}