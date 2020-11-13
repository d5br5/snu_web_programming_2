class Animal{
  constructor(name, height, weight, age){
    this.name=name;
    this.height=height;
    this.weight=weight;
    this.age=age;
  }
}

class Dog extends Animal{
  watch(){console.log('bowwow')};
}

const d1=new Dog('happy',130,150,12);

d1.watch();