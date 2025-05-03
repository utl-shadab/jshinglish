export const objectsBasicsData = {
  id: "objects-basics",
  title: "Working with Objects",
  introduction: {
    en: "Objects in JavaScript are collections of key-value pairs. They are used to store and organize related data and functionality. Unlike arrays, which use numeric indices, objects use keys (also called properties) to access values, making them ideal for representing real-world entities with various attributes.",
    hi: "JavaScript में Objects key-value pairs के collections होते हैं। वे related data और functionality को store और organize करने के लिए उपयोग किए जाते हैं। Arrays के विपरीत, जो numeric indices का उपयोग करते हैं, objects values को access करने के लिए keys (जिन्हें properties भी कहा जाता है) का उपयोग करते हैं, जिससे वे various attributes के साथ real-world entities को represent करने के लिए ideal होते हैं।"
  },
  sections: [
    {
      id: "creating-objects",
      title: "Creating Objects",
      content: {
        en: "There are several ways to create objects in JavaScript. The most common methods are using object literals, the Object constructor, and constructor functions.",
        hi: "JavaScript में objects create करने के कई तरीके हैं। सबसे common methods object literals, Object constructor, और constructor functions का उपयोग करना है।"
      },
      codeExample: {
        code: `// Object literal (most common method)
let person = {
  name: 'John',
  age: 30,
  isEmployed: true,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Empty object
let emptyObject = {};

// Using the Object constructor
let car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2020;

// Constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let myBook = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 2008);
console.log(myBook.title); // 'JavaScript: The Good Parts'`,
        editable: true
      }
    },
    {
      id: "accessing-properties",
      title: "Accessing Object Properties",
      content: {
        en: "There are two main ways to access object properties in JavaScript: dot notation and bracket notation.",
        hi: "JavaScript में object properties को access करने के दो main तरीके हैं: dot notation और bracket notation।"
      },
      codeExample: {
        code: `let person = {
  name: 'Sarah',
  age: 28,
  'job-title': 'Software Developer'
};

// Dot notation
console.log(person.name); // 'Sarah'
console.log(person.age); // 28

// Bracket notation
console.log(person['name']); // 'Sarah'
console.log(person['age']); // 28

// Bracket notation is required for property names that aren't valid identifiers
console.log(person['job-title']); // 'Software Developer'

// Using variables with bracket notation
let propertyName = 'age';
console.log(person[propertyName]); // 28`,
        editable: true
      },
      interactiveExample: {
        code: `// Checking if a property exists
let student = {
  name: 'Raj',
  grade: 'A',
  age: 15
};

// Using the in operator
console.log('name' in student); // true
console.log('address' in student); // false

// Using hasOwnProperty method
console.log(student.hasOwnProperty('grade')); // true
console.log(student.hasOwnProperty('gender')); // false`,
        output: `true
false
true
false`,
        explanation: {
          en: "The 'in' operator and hasOwnProperty() method check if a property exists in an object. The 'in' operator checks the object and its prototype chain, while hasOwnProperty() only checks the object's own properties.",
          hi: "'in' operator और hasOwnProperty() method check करते हैं कि क्या एक property object में exist करती है। 'in' operator object और उसके prototype chain को check करता है, जबकि hasOwnProperty() केवल object की own properties को check करता है।"
        }
      }
    },
    {
      id: "modifying-objects",
      title: "Modifying Objects",
      content: {
        en: "Objects in JavaScript are mutable, which means you can add, modify, or delete properties after the object is created.",
        hi: "JavaScript में objects mutable होते हैं, जिसका मतलब है कि आप object create होने के बाद properties को add, modify, या delete कर सकते हैं।"
      },
      codeExample: {
        code: `let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2019
};

// Adding new properties
car.color = 'blue';
car['mileage'] = 5000;

// Modifying existing properties
car.year = 2020;
car['model'] = 'Accord';

// Deleting properties
delete car.mileage;

console.log(car);
// { make: 'Honda', model: 'Accord', year: 2020, color: 'blue' }`,
        editable: true
      }
    },
    {
      id: "methods",
      title: "Object Methods",
      content: {
        en: "Methods are functions that are stored as object properties. They can access and modify the object's data.",
        hi: "Methods ऐसे functions होते हैं जो object properties के रूप में store किए जाते हैं। वे object के data को access और modify कर सकते हैं।"
      },
      codeExample: {
        code: `let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  // Method defined using function keyword
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  // Method defined using shorthand syntax (ES6)
  greet() {
    return \`Hello, my name is \${this.fullName()} and I'm \${this.age} years old.\`;
  },
  // Arrow functions don't have their own 'this' context
  getAgeInMonths: () => {
    // this.age wouldn't work here as expected
    // This refers to the outer scope
    return person.age * 12;
  }
};

console.log(person.fullName()); // 'John Doe'
console.log(person.greet()); // 'Hello, my name is John Doe and I'm 30 years old.'
console.log(person.getAgeInMonths()); // 360`,
        editable: true
      }
    },
    {
      id: "object-operations",
      title: "Common Object Operations",
      content: {
        en: "JavaScript provides several built-in methods for working with objects, like getting all keys or values, copying objects, and more.",
        hi: "JavaScript objects के साथ काम करने के लिए कई built-in methods प्रदान करता है, जैसे सभी keys या values को get करना, objects को copy करना, और अधिक।"
      },
      codeExample: {
        code: `let person = {
  name: 'Alice',
  age: 25,
  city: 'London'
};

// Get all keys
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Get all values
let values = Object.values(person);
console.log(values); // ['Alice', 25, 'London']

// Get all key-value pairs as arrays
let entries = Object.entries(person);
console.log(entries); // [['name', 'Alice'], ['age', 25], ['city', 'London']]

// Copying an object (shallow copy)
let personCopy = Object.assign({}, person);
person.name = 'Bob'; // Changing original doesn't affect copy
console.log(personCopy.name); // 'Alice'

// Spread operator (ES6) for shallow copy
let anotherCopy = {...person};
console.log(anotherCopy); // { name: 'Bob', age: 25, city: 'London' }

// Merging objects
let details = { job: 'Developer', hobby: 'Reading' };
let completeProfile = {...person, ...details};
console.log(completeProfile); 
// { name: 'Bob', age: 25, city: 'London', job: 'Developer', hobby: 'Reading' }`,
        editable: true
      }
    },
    {
      id: "nested-objects",
      title: "Nested Objects",
      content: {
        en: "Objects can contain other objects as properties, creating nested or hierarchical data structures.",
        hi: "Objects अन्य objects को properties के रूप में contain कर सकते हैं, जिससे nested या hierarchical data structures create होते हैं।"
      },
      codeExample: {
        code: `// Object with nested objects
let company = {
  name: 'TechCorp',
  founded: 2010,
  location: {
    city: 'San Francisco',
    state: 'California',
    address: {
      street: '123 Tech Ave',
      zipCode: '94107'
    }
  },
  departments: {
    engineering: {
      head: 'Jane Smith',
      employees: 50
    },
    marketing: {
      head: 'John Doe',
      employees: 20
    }
  }
};

// Accessing nested properties
console.log(company.location.city); // 'San Francisco'
console.log(company.location.address.zipCode); // '94107'
console.log(company.departments.engineering.head); // 'Jane Smith'

// Modifying nested properties
company.departments.engineering.employees += 5;
console.log(company.departments.engineering.employees); // 55

// Adding a new nested property
company.departments.sales = {
  head: 'Robert Johnson',
  employees: 15
};
console.log(company.departments.sales.head); // 'Robert Johnson'`,
        editable: true
      }
    }
  ],
  exercise: {
    title: "Exercise: Creating an Address Book",
    description: {
      en: "Create a function called 'createContact' that takes name, email, and phone parameters and returns a contact object. Then create another function called 'addToAddressBook' that takes an address book array and a contact, adds the contact to the address book, and returns the updated address book.",
      hi: "एक function बनाएं जिसे 'createContact' कहा जाता है जो name, email, और phone parameters लेता है और एक contact object return करता है। फिर एक और function बनाएं जिसे 'addToAddressBook' कहा जाता है जो एक address book array और एक contact लेता है, contact को address book में add करता है, और updated address book return करता है।"
    },
    starterCode: `// Complete the createContact and addToAddressBook functions
// createContact और addToAddressBook functions को पूरा करें

function createContact(name, email, phone) {
  // Your code here
  // आपका code यहां
}

function addToAddressBook(addressBook, contact) {
  // Your code here
  // आपका code यहां
}

// Test case
let myAddressBook = [];
let contact1 = createContact('Alice', 'alice@example.com', '123-456-7890');
let contact2 = createContact('Bob', 'bob@example.com', '987-654-3210');

myAddressBook = addToAddressBook(myAddressBook, contact1);
myAddressBook = addToAddressBook(myAddressBook, contact2);

console.log(myAddressBook);
// Should output an array with two contact objects`,
    expectedOutput: `[
  { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
  { name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' }
]`,
    hint: {
      en: "The createContact function should return an object with name, email, and phone properties. The addToAddressBook function can use the spread operator or push method to add the new contact to the addressBook array.",
      hi: "createContact function को name, email, और phone properties के साथ एक object return करना चाहिए। addToAddressBook function spread operator या push method का उपयोग कर सकता है नए contact को addressBook array में add करने के लिए।"
    }
  },
  summary: {
    en: "In this section, we explored JavaScript objects – collections of key-value pairs that are fundamental to JavaScript programming. We learned how to create objects using various methods, access and modify object properties, work with methods inside objects, and perform common operations like copying and merging objects. We also explored nested objects that allow for creating complex data structures.",
    hi: {
      text: "इस section में, हमने JavaScript objects का exploration किया – key-value pairs के collections जो JavaScript programming के लिए fundamental हैं।",
      points: [
        "हमने विभिन्न methods का उपयोग करके objects create करने का तरीका सीखा",
        "हमने object properties को access और modify करने, objects के अंदर methods के साथ काम करने का तरीका सीखा",
        "हमने objects को copy और merge करने जैसे common operations perform करना सीखा",
        "हमने nested objects का भी exploration किया जो complex data structures create करने की अनुमति देते हैं"
      ]
    }
  },
  prevTopic: {
    id: "functions",
    title: "Functions"
  },
  nextTopic: {
    id: "arrays",
    title: "Arrays"
  }
};
