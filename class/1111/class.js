class Car{
    constructor(color, price, x){
      this.color=color;
      this.price=price;
      this.x=x;
    }
  
    move(x){
      this.x+=x;
    }
  
    horn(){
      console.log(`My color is ${this.color}. Price is ${this.price}. I'm at ${this.x}`);
  
      const a=()=>{//arrow function은 환경을 구성하지 않아서, 바로 this 가능
        console.log(this.color);
      };
      a();
      
      /* function은 독자적인 실행환경을 구성하기 때문에, this가 car를 가르키지 않음
      function aa(){
        console.log(this.color);
      }
  
      this를 사용하려면,
      const self=this
      function ~~ self.color 이런 식으로 사용
      depth를 잘 파악해야함!
      */ 
  
    }
  
    changeColor(newColor){
      this.color=newColor;
    }
  }
  
  
  const c1=new Car('black',500, 0);
  const c2=new Car('white', 100, 3);
  
  const cars=[c1,c2];
  
  cars.forEach((car)=>car.horn());
  cars.forEach((car)=>console.log(car));
  cars.forEach((car)=>car.move(4));
  
  cars.forEach((car)=>car.horn());
  
  c1.horn();
  

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