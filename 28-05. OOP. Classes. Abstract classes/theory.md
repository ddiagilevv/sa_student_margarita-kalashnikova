Классы и абстрактные классы в Java

Java - объектно ориентированный язык.
В Java вообще всё основано на классах

В Java класс это 

```js
console.log("Hello world");
```

```java
public class Main {
    public static void main(String[] args){
        // ТОЧКА ВХОДА в приложение
        System.out.println("Hello world");
    }
}
```

# Класс в Java - шаблон(чертеж) по которому создаются объекты.
Класс описывает
- поля (переменные) - характеристики объекта. данные об объекте
- методы - поведение объекта

```java
public class Dog {
    //поля
    String _name;
    int _age;

    //конструктор
    public Dog(String name, int age){
        this._name = name;
        this._age = age;
    }
    
    //метод
    public void bark(){
        System.out.println("Собака " + _name + " говорит гав!");
    }
}

public class Cat {
    String _name;
    int _age;

    public Cat(String name, int age){
        this._name = name;
        this._age = age;
    }

    public void meow(){
        System.out.println("Кот " + _name + " говорит мяу!");
    }
}

public class Main {
    public static void main(String[] args){
       Dog myDog = new Dog("Шарик", 3);
       myDog.bark();
       // Собака Шарик говорит гав!

       Dog myDog1 = new Dog("Дружок", 5);
       myDog1.bark();
       // Собака Дружок говорит гав!

       Cat koshka = new Cat("Фурья", 7);
       koshka.meow();
       // Кот Фурья говорит мяу!
    }

}
```

```java
public abstract class Animal{
    String _name;
    int _age;

    public Animal(String name, int age){
        this._name = name;
        this._age = age;
    }

    //абстрактный метод
    public abstract void makeSound(); //тело отсутствует!!! только сигнатура

    public void sleep(){
        System.out.println("животное по имени " + _name + " спит");
    }
}

// все подклассы Animal (все что отнаследует от Animal) ОБЯЗАНО реализовать все абстрактные методы!!!

public class Cat extends Animal {
    public Cat(String name, int age){
        super(name, age);
    }

    // реализция(переопределение) метода makeSound из класса Animal
    @Override
    public void makeSound() {
        System.out.println("Кот " + _name + " говорит мяу!");
    }

    public void miloTopchetsyaLapkami(){
        //...
    }
}

public class Dog extends Animal {
    public Dog(String name, int age){
        super(name, age);
    }

    // реализция(переопределение) метода makeSound из класса Animal
    @Override
    public void makeSound() {
        System.out.println("Пес " + _name + " говорит ГАВ!");
    }
}


public class Main {
    public static void main(String[] args){
       Animal myDog = new Dog("Шарик", 3);
       myDog.makeSound();
       myDog.sleep();
       // Собака Шарик говорит гав!

       Animal myDog1 = new Dog("Дружок", 5);
       myDog1.makeSound();
       // Собака Дружок говорит гав!

       Animal koshka = new Cat("Фурья", 7);
       koshka.makeSound();
       // Кот Фурья говорит мяу!
       koshka.miloTopchetsyaLapkami();
       koshka.sleep();
    }
}



```

если класс - чертеж объекта
то абстрактный_класс - чертеж класса

Отличия класса от абстрактного класса
| Характеристика | класс | абстрактный класс |
|-------------|-------------|-------------|
| можно ли создать объект на его основе?   | да   | нет   |
| содержит ли абстрактные методы?    | нет!    | да, при этом, может содержать и обычные методы    |

важно! не путать абстрактный класс с интерфейсом

зачем нужны абстрактные классы?
- шаблон в котором указываются обязательные методы для потомков
- унификация группы классов
- частичная реализация общей логики
- полиморфизм



---


классы и "абстрактные классы" в JavaScript
```js
// "абстрактный" класс Animal 
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //абстрактный метод
    makeSound() { //тело отсутствует!!! только сигнатура
        throw new Error("метод makeSound должен быть переопределен в подклассе")
    }

    sleep(){
        console.log(this.name + " спит");
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name, age);
    }

    // оверрайд для абстрактного метода
    makeSound(){
        console.log(this.name + " ГАВ!");
    }
}

const sobaka = new Dog("Добби", 6)
sobaka.makeSound();
sobaka.sleep();
// полаяла и спать пошла

```