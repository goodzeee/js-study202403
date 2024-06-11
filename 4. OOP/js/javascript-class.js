
// 객체의 설계도 class

class Pet {
  // 생성자를 통해 필드를 선언 - 생성자 먼저 만듬 !!
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 선언
  introduce() {
    console.log(`내 이름은 ${this.name}이고요. 나이는 ${this.age}살 입니다.`);
  }

}

// 상속
class Dog extends Pet {

  constructor(name, age, hobby) {
    super(name, age); // 부모한테 보내기
    this.hobby = hobby;  // Dog만에 추가 생성자
  }
}

class Cat extends Pet {

  constructor(name, age, sleep) {
    super(name, age); // 부모한테 보내기
    this.sleep = sleep;
  }
}

const dog = new Dog('초코', 3, '산책');
console.log(dog);

const cat = new Cat('페퍼', 6, '일광욕하면서 낮잠');
console.log(cat);

console.log(dog === cat);

console.log('===================================');

dog.introduce();
cat.introduce();