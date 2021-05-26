export function returnClass() {
  abstract class Person {
    static birthday: Date = new Date(1997, 11, 4);

    name: string;
    surname: string;
    age: number;
    isMarried: boolean;
    gender: string;
    birthday: Date;

    readonly email: string;
    readonly phoneNumber: string;

    abstract id: number;

    constructor(
      firstName: string,
      lastName: string,
      age: number,
      isMarried: boolean,
      gender: string,
      email: string,
      phoneNumber: string,
      birthday: Date
    ) {
        this.name = firstName;
        this.surname = lastName;
        this.age = age;
        this.isMarried = isMarried;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
    }

    static returnAge(): number {
      return new Date().getFullYear() - this.birthday.getFullYear();
    }

    protected _returnHobbies(): void {
      console.log(this);
      console.log(['Reading', 'watching TV', 'coding', 'drinking coffee']);
    }

    abstract returnName(): string;

  }

  // A new class that must inherit from Person class.

  class User extends Person {
    id: number;

    constructor(
      firstName: string,
      lastName: string,
      age: number,
      isMarried: boolean,
      gender: string,
      email: string,
      phoneNumber: string,
      birthday: Date
    ) {
        super(firstName, lastName, age, isMarried, gender, email, phoneNumber, birthday);
    }

    giveInfo(): string {
      return `User: ${this.name} ${this.surname} ${this.age}.`
    }

    returnHobbies(): void {
      console.log(super._returnHobbies());
      console.log(['Walking']);
    }

    returnName(): string {
      return this.name;
    }

    printValueOfThis(): void {
      console.log(this);
    }

  }
  // let person: Person = new Person('', ...); - We can't create an instance of abstract class!
  let user: User = new User(
    'Arman', 'Adamyan', 23, false, 'male', 'adamyanarman527@gmail.com', '+37498774423', new Date(1997, 11, 4)
  );
  console.log(user);
  console.log(user.giveInfo());
  console.log(user.email);
  // user.phoneNumber = '+37498774428'; - We can't change values of properties that have been created as readonly!
  user.id = 77550;
  // An abstract class must have one or several abstract methods and simple properties!
  console.log(user.id);
  console.log(user.returnName());
  // We can call a static method or a simple static property only with a class using dot before method or property.
  // Without class we can't call a static method or a static property.
  console.log(Person.birthday);
  console.log(Person.returnAge());
  console.log(User.birthday); // and with an inherited class also we can call them.
  // console.log(user.birthday); // It is already a bad case.
  console.log(user.birthday); // We can create the same properties and methods with and without static keyword.
  user.returnHobbies();
  console.log(user);
  user.printValueOfThis();
}
