//Создать класс vehicle, у него будут наследники:
//car, plane, bus, bike, motorbike
//у класса vehicle свойства: id, brand, changeAvailable 
//методы: setAvailability, getRentalPrice, getPurchasePrice, getColor
//Для классов-наследников:
//bike: type (городской, горный), size, //придумать для всех остальных


//реализовать класс dealerService
//методы: addVehicle (vehicle), rentByID (id), buyById (id),
//returnVehicleById (id), listAvailableVehicles()

//обработать исключения (exceptions.md in sa repository)

class Vehicle {
    constructor(id, brand, color, rentalPrice, purchasePrice) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.rentalPrice = rentalPrice;
        this.purchasePrice = purchasePrice;
        this.available = true;

    }

    changeAvailable() {
        this.available = !this.available;
    }

    setAvailability(status) {
        this.available = status;
    }

    getRentalPrice() {
        return this.rentalPrice;
    }

    getPurchasePrice() {
        return this.purchasePrice;
    }

    getColor() {
        return this.color;
    }

    getBrand() {
        return this.brand;
    }
}


class Car extends Vehicle {
    constructor(id, brand, color, rentalPrice, purchasePrice, year, model) {
        super(id, brand, color, rentalPrice, purchasePrice);
        this.year = year;
        this.model = model;
    }
}

class Bike extends Vehicle {
    constructor(id, brand, color, rentalPrice, purchasePrice, size, useType) {
        super(id, brand, color, rentalPrice, purchasePrice);
        this.size = size;
        this.useType = useType;
    }
}

class Plane extends Vehicle {
    constructor(id, brand, color, rentalPrice, purchasePrice, size, _class) {
        super(id, brand, color, rentalPrice, purchasePrice);
        this.size = size;
        this._class = _class;
    }
}


class Dealer {
    constructor(){
        this.vehicles = new Map();
    }

    addVehicle(vehicle) {
        if (this.vehicles.has(vehicle.id)) {
            throw new Error("ID уже существует");
        }
        this.vehicles.set(vehicle.id, vehicle);
    }

    rentVehicle(id) {
        const vehicle = this.vehicles.get(id)
        if (!vehicle) {
            throw new Error("Транспорт не найден");
        }
        if (!vehicle.available) {
            throw new Error("Транспорт не доступен");
        }
        vehicle.setAvailability(false);
        return vehicle;
    }

    purchaseVehicle(id) {
        const vehicle = this.vehicles.get(id)
        if (!vehicle) {
            throw new Error("Транспорт не найден");
        }
        this.vehicles.delete(id);
        return vehicle;
    }

    listAvailableVehicles() {
        return Array.from(this.vehicles.values()).filter(v => v.available);
    }

}