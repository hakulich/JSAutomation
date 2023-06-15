class Animal {
  move = true;

  print() {
    console.log(` Can I move?: ${this.move}`);
  }
}

class Cat extends Animal {}

const cat1 = new Cat();
cat1.move = false;

cat1.print();
