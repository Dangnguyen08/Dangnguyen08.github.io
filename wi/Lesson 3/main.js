class Car{
    name;
    speed;
    seats;
    brand;

// Hàm constructor là hàm khởi tạo
    constructor(name, speed, seats, brand){
        this.name = name;
        this.speed = speed;
        this.seats = seats;
        this.brand = brand;
    }
    
    start(){
        console.log(`${this.name} đã xuất phát, vận tốc là ${this.speed}`);
    }

    stop(){}

    honk(){}
}

let car1 = new Car("Fadil", 100,4, "Vinfast");
car1.start();

let car2 = new Car ("lamborghini Aventardor", 200, 2, "Lamborghini");
car2.start();

// Tính kế thừa
class SupperCar extends Car{
    // không cần khởi tạo vẫn dùng được static
    static limitSpeed(){
        return 120
    }
    constructor(name, speed, seats, brand, topSpeed){
        super("Ferrari 488", 200, 2, "Ferrari")
        thiss.topSpeed = topSpeed
    }
    turboBoost(){
        console.log(`${this.name} đang Boots với top speed là ${this.topSpeed}`);
    }
    honk(){}
} 
let spCar1 = new SupperCar("Ferrari 488", 200, 2, "Ferrari", 300)
spCar1.name = "Dang"
console.log(spCar1.name);