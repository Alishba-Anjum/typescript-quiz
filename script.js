const quizQuestions = [
    // Variables
    {
        question: "How do you declare a variable in TypeScript?",
        answers: {
            a: "var x = 5;",
            b: "let x: number = 5;",
            c: "const x: number = 5;",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    // const, let
    {
        question: "What is the purpose of the `const` keyword in TypeScript?",
        answers: {
            a: "To declare a variable that can be reassigned",
            b: "To declare a variable that cannot be reassigned",
            c: "To declare a variable with block scope",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the difference between `let` and `var` in TypeScript?",
        answers: {
            a: "`let` is function-scoped while `var` is block-scoped",
            b: "`var` is function-scoped while `let` is block-scoped",
            c: "Both are function-scoped",
            d: "Both are block-scoped"
        },
        correctAnswer: "b"
    },
    // Conditions
    {
        question: "Which of the following is the correct syntax for an if statement in TypeScript?",
        answers: {
            a: "if x = 5 {}",
            b: "if (x == 5) {}",
            c: "if x == 5 {}",
            d: "if (x = 5) {}"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you write a ternary conditional statement in TypeScript?",
        answers: {
            a: "x ? y : z",
            b: "x ? (y) : (z)",
            c: "if x then y else z",
            d: "x if y else z"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not a conditional operator in TypeScript?",
        answers: {
            a: "==",
            b: "===",
            c: "!==",
            d: "<=>"
        },
        correctAnswer: "d"
    },
    // Arrays
    {
        question: "How do you declare an array in TypeScript?",
        answers: {
            a: "let arr: number[] = [1, 2, 3];",
            b: "let arr: Array<number> = [1, 2, 3];",
            c: "let arr: number[] = new Array(1, 2, 3);",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you add an element to an array in TypeScript?",
        answers: {
            a: "arr.push(element);",
            b: "arr.append(element);",
            c: "arr.add(element);",
            d: "arr.insert(element);"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you iterate over an array in TypeScript?",
        answers: {
            a: "for (let i = 0; i < arr.length; i++) {}",
            b: "for (let item of arr) {}",
            c: "arr.forEach(item => {});",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    // Loops
    {
        question: "Which loop is not present in TypeScript?",
        answers: {
            a: "for",
            b: "while",
            c: "do-while",
            d: "foreach"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the output of the following loop?\nfor (let i = 0; i < 3; i++) { console.log(i); }",
        answers: {
            a: "0 1 2",
            b: "1 2 3",
            c: "0 1 2 3",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which loop should you use if the number of iterations is unknown?",
        answers: {
            a: "for",
            b: "while",
            c: "do-while",
            d: "for-of"
        },
        correctAnswer: "b"
    },
    // Operators
    {
        question: "Which operator is used for strict equality comparison in TypeScript?",
        answers: {
            a: "==",
            b: "===",
            c: "!=",
            d: "!=="
        },
        correctAnswer: "b"
    },
    {
        question: "Which operator is used to concatenate strings in TypeScript?",
        answers: {
            a: "+",
            b: "&&",
            c: "||",
            d: "&"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the result of the expression 5 + '5' in TypeScript?",
        answers: {
            a: "10",
            b: "55",
            c: "Error",
            d: "NaN"
        },
        correctAnswer: "b"
    },
    // Enums
    {
        question: "How do you define an enum in TypeScript?",
        answers: {
            a: "enum Color {Red, Green, Blue};",
            b: "enum Color = {Red, Green, Blue};",
            c: "enum Color: {Red, Green, Blue};",
            d: "enum Color {Red = 1, Green = 2, Blue = 3};"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you access the value of an enum in TypeScript?",
        answers: {
            a: "Color.Red",
            b: "Color[0]",
            c: "Color['Red']",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Can enum values in TypeScript be strings?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only for numeric enums",
            d: "Only for heterogenous enums"
        },
        correctAnswer: "a"
    },
    // Rest, optional and default parameters
    {
        question: "How do you define a function with a rest parameter in TypeScript?",
        answers: {
            a: "function foo(...args: number[]) {}",
            b: "function foo(args: ...number[]) {}",
            c: "function foo(args: number...) {}",
            d: "function foo(...args: number) {}"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you specify an optional parameter in TypeScript?",
        answers: {
            a: "function foo(arg: number?) {}",
            b: "function foo(arg?: number) {}",
            c: "function foo(?arg: number) {}",
            d: "function foo(arg: number = 0) {}"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you specify a default parameter in TypeScript?",
        answers: {
            a: "function foo(arg: number) = 0 {}",
            b: "function foo(arg = 0: number) {}",
            c: "function foo(arg: number = 0) {}",
            d: "function foo(arg?: number = 0) {}"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you call a function with a rest parameter in TypeScript?",
        answers: {
            a: "foo(...[1, 2, 3])",
            b: "foo(1, 2, 3)",
            c: "foo([1, 2, 3])",
            d: "a and b"
        },
        correctAnswer: "d"
    },
    // Explicit casting
    {
        question: "How do you explicitly cast a variable in TypeScript?",
        answers: {
            a: "let x = <number>value;",
            b: "let x = value as number;",
            c: "Both a and b",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following is not a way to cast a variable in TypeScript?",
        answers: {
            a: "let x = <number>value;",
            b: "let x = value as number;",
            c: "let x = (value as number);",
            d: "let x = number(value);"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the correct way to cast a variable from one type to another in TypeScript?",
        answers: {
            a: "let x: any = value;",
            b: "let x: unknown = value;",
            c: "let x: <type>value;",
            d: "let x: type = value as type;"
        },
        correctAnswer: "d"
    },
    // Index signature
    {
        question: "Which of the following is the correct way to define an index signature in TypeScript?",
        answers: {
            a: "interface StringArray { [index: number]: string; }",
            b: "interface StringArray { index: number: string; }",
            c: "interface StringArray { [index: string]: number; }",
            d: "interface StringArray { index: string: number; }"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of an index signature in TypeScript?",
        answers: {
            a: "To define the types for keys and values in an object",
            b: "To define the types for function parameters",
            c: "To define the types for array elements",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Can an index signature be used with string keys?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only for number keys",
            d: "Only for symbol keys"
        },
        correctAnswer: "a"
    },
    // Asynchronous and synchronous JavaScript
    {
        question: "Which of the following is a way to handle asynchronous operations in JavaScript?",
        answers: {
            a: "Promises",
            b: "Async/Await",
            c: "Callbacks",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Which method is used to create a new promise in JavaScript?",
        answers: {
            a: "Promise.create()",
            b: "new Promise()",
            c: "Promise()",
            d: "new Promise.create()"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of the `async` keyword in JavaScript?",
        answers: {
            a: "To define an asynchronous function",
            b: "To wait for a promise to resolve",
            c: "To handle errors in asynchronous code",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you handle errors in asynchronous code in JavaScript?",
        answers: {
            a: "Using try/catch blocks",
            b: "Using .catch() method",
            c: "Both a and b",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    // Modules import export
    {
        question: "How do you export a function in TypeScript?",
        answers: {
            a: "export function foo() {}",
            b: "function export foo() {}",
            c: "export { foo };",
            d: "a and c"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you import a module in TypeScript?",
        answers: {
            a: "import { module } from 'module';",
            b: "import module from 'module';",
            c: "require('module');",
            d: "Both a and b"
        },
        correctAnswer: "d"
    },
    {
        question: "Can you use ES6 modules in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with Babel",
            d: "Only with Webpack"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the purpose of the `default` keyword in module exports?",
        answers: {
            a: "To export multiple values",
            b: "To export a single value",
            c: "To export all values",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    // Structural typing
    {
        question: "What is structural typing in TypeScript?",
        answers: {
            a: "A type system where type compatibility is determined by explicit declarations.",
            b: "A type system where type compatibility is determined by the actual structure or shape of the types.",
            c: "A type system where type compatibility is determined by inheritance.",
            d: "None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is true about structural typing?",
        answers: {
            a: "Types are compatible if they have the same structure",
            b: "Types are compatible only if explicitly declared",
            c: "Types are compatible if they inherit from the same class",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Can structural typing be used with interfaces in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with classes",
            d: "Only with type aliases"
        },
        correctAnswer: "a"
    },
    // Tuples
    {
        question: "How do you define a tuple in TypeScript?",
        answers: {
            a: "let tuple: [string, number] = ['hello', 10];",
            b: "let tuple: (string, number) = ['hello', 10];",
            c: "let tuple: [string, number]('hello', 10);",
            d: "let tuple = ['hello', 10];"
        },
        correctAnswer: "a"
    },
    {
        question: "Can tuples have optional elements in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with default values",
            d: "Only with type aliases"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you access the second element of a tuple in TypeScript?",
        answers: {
            a: "tuple[0]",
            b: "tuple[1]",
            c: "tuple.second",
            d: "tuple[2]"
        },
        correctAnswer: "b"
    },
    // Type alias
    {
        question: "How do you define a type alias in TypeScript?",
        answers: {
            a: "alias Point = { x: number, y: number };",
            b: "type Point = { x: number, y: number };",
            c: "typedef Point = { x: number, y: number };",
            d: "define Point = { x: number, y: number };"
        },
        correctAnswer: "b"
    },
    {
        question: "Can type aliases be used for union types in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with interfaces",
            d: "Only with classes"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you use a type alias in TypeScript?",
        answers: {
            a: "type Point = { x: number, y: number }; let p: Point = { x: 1, y: 2 };",
            b: "alias Point = { x: number, y: number }; let p: Point = { x: 1, y: 2 };",
            c: "typedef Point = { x: number, y: number }; let p: Point = { x: 1, y: 2 };",
            d: "define Point = { x: number, y: number }; let p: Point = { x: 1, y: 2 };"
        },
        correctAnswer: "a"
    },
    // Type union
    {
        question: "Which of the following is the correct way to define a union type in TypeScript?",
        answers: {
            a: "let x: number | string;",
            b: "let x: (number, string);",
            c: "let x: number or string;",
            d: "let x: union(number, string);"
        },
        correctAnswer: "a"
    },
    {
        question: "Can union types include more than two types in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with type aliases",
            d: "Only with interfaces"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you define a variable that can be either a string or a number in TypeScript?",
        answers: {
            a: "let x: string | number;",
            b: "let x: (string, number);",
            c: "let x: string or number;",
            d: "let x: union(string, number);"
        },
        correctAnswer: "a"
    },
    // Intersection
    {
        question: "Which of the following is the correct way to define an intersection type in TypeScript?",
        answers: {
            a: "let x: number & string;",
            b: "let x: (number, string);",
            c: "let x: number and string;",
            d: "let x: intersection(number, string);"
        },
        correctAnswer: "a"
    },
    {
        question: "Can intersection types include more than two types in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with type aliases",
            d: "Only with interfaces"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you define a variable that must be both a string and a number in TypeScript?",
        answers: {
            a: "let x: string & number;",
            b: "let x: (string, number);",
            c: "let x: string and number;",
            d: "let x: intersection(string, number);"
        },
        correctAnswer: "a"
    },
    // Decorators
    {
        question: "What is a decorator in TypeScript?",
        answers: {
            a: "A function that takes a class, method, accessor, property, or parameter and adds some functionality to it",
            b: "A function that creates a new instance of a class",
            c: "A function that performs type checking",
            d: "None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not a type of decorator in TypeScript?",
        answers: {
            a: "Class decorator",
            b: "Method decorator",
            c: "Constructor decorator",
            d: "Property decorator"
        },
        correctAnswer: "c"
    },
    {
        question: "How do you define a class decorator in TypeScript?",
        answers: {
            a: "@decorator\nclass MyClass {}",
            b: "class MyClass {\n@decorator\n}",
            c: "class MyClass @decorator {}",
            d: "class MyClass {\n@decorator()\n}"
        },
        correctAnswer: "a"
    },
    // Generics
    {
        question: "What is a generic type in TypeScript?",
        answers: {
            a: "A type that is defined once and can be reused with different types",
            b: "A type that can hold any value",
            c: "A type that is only used with classes",
            d: "A type that is used with enums"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you define a generic function in TypeScript?",
        answers: {
            a: "function foo<T>(arg: T): T {}",
            b: "function foo(arg: T): T {}",
            c: "function foo<T>(arg): T {}",
            d: "function foo<T>(): T {}"
        },
        correctAnswer: "a"
    },
    {
        question: "Can generics be used with interfaces in TypeScript?",
        answers: {
            a: "Yes",
            b: "No",
            c: "Only with classes",
            d: "Only with functions"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const output = [];
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<li>
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}: ${currentQuestion.answers[letter]}
                    </label>
                </li>`
            );
        }
        output.push(
            `<div class="question">
                <h3>${currentQuestion.question}</h3>
                <ul class="answers">${answers.join('')}</ul>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let numCorrect = 0;
    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });
    document.getElementById('result').innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct.`;
}

document.getElementById('submit').addEventListener('click', showResults);

buildQuiz();
