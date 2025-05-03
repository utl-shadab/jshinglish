export const conditionalsData = {
  id: "conditionals",
  title: "Conditional statements",
  introduction: {
    en: "In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. Conditional statements allow us to represent such decision making in JavaScript.",
    hi: "किसी भी programming language में, code को अलग-अलग inputs के आधार पर decisions लेने और actions करने की जरूरत होती है। उदाहरण के लिए, एक game में, अगर player के पास 0 lives बची हैं, तो game over हो जाता है। Conditional statements हमें JavaScript में ऐसे decision making को represent करने की अनुमति देते हैं।"
  },
  sections: [
    {
      id: "if-else",
      title: "If...else statements",
      content: {
        en: "The most common type of conditional statement is the if...else statement which takes the following form:",
        hi: "Conditional statements का सबसे common प्रकार if...else statement है जो निम्न form में होता है:"
      },
      codeExample: {
        code: `if (condition) {
  // code to run if condition is true
  // कोड जो चलेगा अगर condition सही है
} else {
  // code to run if condition is false
  // कोड जो चलेगा अगर condition गलत है
}`,
        editable: false
      },
      interactiveExample: {
        code: `let iceCream = 'chocolate';

if (iceCream === 'chocolate') {
  console.log('Yay, I love chocolate ice cream!');
  // Yay, मुझे chocolate ice cream पसंद है!
} else {
  console.log('Awww, but chocolate is my favorite...');
  // Awww, लेकिन chocolate मेरा favorite है...
}`,
        output: "Yay, I love chocolate ice cream!",
        explanation: {
          en: "The condition (iceCream === 'chocolate') evaluates to true, so the code in the first block runs.",
          hi: "Condition (iceCream === 'chocolate') true evaluate होता है, इसलिए पहले block का code run होता है।"
        }
      },
      subsections: [
        {
          id: "else-if",
          title: "Multiple conditions: else if",
          content: {
            en: "You can chain multiple conditions using else if when you have more than two possible outcomes:",
            hi: "जब आपके पास दो से अधिक संभावित outcomes हों तो आप else if का उपयोग करके multiple conditions को chain कर सकते हैं:"
          },
          codeExample: {
            code: `const weatherToday = 'rainy';

if (weatherToday === 'sunny') {
  console.log('Take sunglasses!');
  // धूप का चश्मा ले जाओ!
} else if (weatherToday === 'rainy') {
  console.log('Take an umbrella!');
  // छाता ले जाओ!
} else if (weatherToday === 'snowy') {
  console.log('Wear a warm coat!');
  // गरम कोट पहनो!
} else {
  console.log('Weather type not recognized!');
  // मौसम का प्रकार पहचाना नहीं गया!
}`,
            editable: true
          }
        }
      ]
    },
    {
      id: "switch",
      title: "Switch statements",
      content: {
        en: "Switch statements are another way to express conditional logic. They're particularly useful when you have many possible conditions to check against a single value.",
        hi: "Switch statements conditional logic को express करने का एक और तरीका है। वे विशेष रूप से उपयोगी होते हैं जब आपके पास एक single value के लिए कई possible conditions हों।"
      },
      codeExample: {
        code: `const fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('Apples are $0.99 per pound.');
    // Apples $0.99 प्रति पाउंड हैं।
    break;
  case 'banana':
    console.log('Bananas are $0.59 per pound.');
    // Bananas $0.59 प्रति पाउंड हैं।
    break;
  case 'orange':
    console.log('Oranges are $0.79 per pound.');
    // Oranges $0.79 प्रति पाउंड हैं।
    break;
  default:
    console.log(\`Sorry, we're out of \${fruit}.\`);
    // माफ करें, हमारे पास \${fruit} नहीं है।
}`,
        editable: true
      },
      content2: {
        en: "The break statement is important. Without it, the code would continue executing the next case regardless of whether it matches or not.",
        hi: "break statement महत्वपूर्ण है। इसके बिना, code अगले case को execute करता रहेगा, चाहे वह match करे या न करे।"
      }
    },
    {
      id: "ternary",
      title: "Ternary operator",
      content: {
        en: "The ternary or conditional operator is a small syntax that tests a condition and returns one value/expression if it's true, and another if it's false.",
        hi: "Ternary या conditional operator एक छोटा syntax है जो एक condition को test करता है और अगर वह true है तो एक value/expression return करता है, और अगर false है तो दूसरा।"
      },
      codeExample: {
        code: `const age = 19;
const canVote = age >= 18 ? 'Yes, can vote!' : 'No, too young!';

console.log(canVote); // 'Yes, can vote!'
// 'हां, वोट दे सकते हैं!'`,
        editable: true
      },
      content2: {
        en: "This is equivalent to:",
        hi: "यह इसके समान है:"
      },
      codeExample2: {
        code: `let canVote;
if (age >= 18) {
  canVote = 'Yes, can vote!'; // 'हां, वोट दे सकते हैं!'
} else {
  canVote = 'No, too young!'; // 'नहीं, बहुत छोटे हैं!'
}`,
        editable: false
      }
    }
  ],
  exercise: {
    title: "Exercise: Practice conditional statements",
    description: {
      en: "Let's apply what we've learned with a simple exercise. Create a grade calculator that outputs a letter grade based on a numeric score.",
      hi: "आइए हमने जो सीखा है उसे एक simple exercise के साथ apply करें। एक grade calculator बनाएं जो numeric score के आधार पर letter grade output करता है।"
    },
    starterCode: `// Complete the gradeCalculator function
// gradeCalculator function को पूरा करें

function gradeCalculator(score) {
  // Your code here
  // आपका code यहां
  
  // A: 90-100
  // B: 80-89
  // C: 70-79
  // D: 60-69
  // F: 0-59
}

// Test cases
console.log(gradeCalculator(95)); // Should return "A"
console.log(gradeCalculator(82)); // Should return "B"
console.log(gradeCalculator(75)); // Should return "C"
console.log(gradeCalculator(65)); // Should return "D"
console.log(gradeCalculator(45)); // Should return "F"`,
    expectedOutput: `A
B
C
D
F`,
    hint: {
      en: "Use if/else if statements or a switch statement with appropriate conditions to check the score range.",
      hi: "Score range को check करने के लिए if/else if statements या switch statement का उपयोग करें।"
    }
  },
  summary: {
    en: "In this section, we learned about conditional statements in JavaScript: if...else statements for basic conditional logic, else if for handling multiple conditions, switch statements for testing a single value against multiple possible cases, and the ternary operator for concise condition checking.",
    hi: {
      text: "इस section में, हमने JavaScript में conditional statements के बारे में सीखा:",
      points: [
        "Basic conditional logic के लिए if...else statements",
        "Multiple conditions को handle करने के लिए else if",
        "Multiple possible cases के खिलाफ single value को test करने के लिए switch statements",
        "Concise condition checking के लिए ternary operator"
      ]
    }
  },
  prevTopic: {
    id: "operators",
    title: "Operators"
  },
  nextTopic: {
    id: "loops",
    title: "Loops and iteration"
  }
};
