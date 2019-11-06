

//OBJECTS/CLASSES WITHOUT CONSTRUCTOR OR SUPER USING ES7

class Human {
    gender = 'male';
    
    printGender =() => {
      console.log(this.gender);
    }
  }
  
  
  class Person extends Human {
    name = 'Max';
    gender = 'female';
    
    printMyName = ()=> {
        console.log(this.name);
    }
  }
  
  const person = new Person();
  person.printMyName();
  person.printGender();
  
  
  //...
  
  const numbers = [1,2,3];
  const newNumbers = [...numbers, 4, 5];
  
  console.log(newNumbers);
  
  const person2 = {
    name: 'max'
  };
  
  const newPerson2 = {
    ...person,
    age: 28
  }
  
  console.log(newPerson2);
  
  const filter = (...args) => {
    return args.filter( el => el === 1);
  }
  
  console.log(filter(1,2,3))
  
  
  //DESTRUCTURING 
  
  const numbers2 = [1,2,3];
  [num1, , num3]= numbers2;
  console.log(num1,num3);
  
  //PRIMITIVE & REFERENCE TYPES
  
  const numb = 1;
  const numb2 = numb; //copies the value
  
  console.log(numb2);
  
  
  //objects and arrays are reference types
  const people = {
    name: 'Max'
  };
  
  const secondPeopleCurly ={ //must create new object with copied properties to make an actual copy vs a copy of a pointer
    ...people
  };
  console.log(secondPeopleCurly); 
  
  const secondPeople = people; 
  console.log(secondPeople); // person is stored in memory and the constant is stored as a pointer
  people.name = 'Manu'; // only copied the pointer so it will print the name as Manu
  console.log(secondPeople); 
  
  