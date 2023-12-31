// Create questions using an array of objects
// Each question object should contain an array of answers for the choices
const questions = [
    {
        question: 'Which of the following is NOT a valid keyword for a variable?',
        choices: [ 'const', 'let', 'variable', 'var'],
        correctAnswer: 'variable'    
    },
    {
        question: 'How would you correctly generate a random number between 1 & 10 inclusive?',
        choices: [ 
            'math.random((math.floor() * 10)) + 1', 
            'Math.random((Math.floor() * 10)) + 1', 
            'math.floor((math.random() * 10)) + 1', 
            'Math.floor((Math.random() * 10)) + 1'],
        correctAnswer: 'Math.floor((Math.random() * 10)) + 1'    
    },
    {
        question: 'Which of the following is NOT a valid way to access an element?',
        choices: [ 'querySelector', 'queryId', 'getElementById', 'querySelectorAll'],
        correctAnswer: 'queryId'    
    },
    {
        question: 'Which would you use to insert text content into an element?',
        choices: [ 'textContent', 'addText', 'createElement', 'setText'],
        correctAnswer: 'textContent'    
    },
    {
        question: 'You want a loop, But, you want to ensure the code inside ALWAYS runs at least once. What do you use?',
        choices: [ 'for', 'do-while', 'while', 'switch'],
        correctAnswer: 'do-while'    
    },
    {
        question: 'Java and JavaScript are the same language. Java is just abbreviated.',
        choices: [ 'True', 'False', '', ''],
        correctAnswer: 'False'    
    },
    {
        question: 'Which variable type CANNOT be changed once declared?',
        choices: [ 'const', 'let', 'variable', 'var'],
        correctAnswer: 'const'    
    },
    {
        question: 'Which  is the correct way to declare an empty array?',
        choices: [ 'const = ( );', 'const = " ";', 'const = { };', 'const = [ ];'],
        correctAnswer: 'const = [ ];'    
    },
    {
        question: 'Which of the following is not a valid variable type in javaScript?',
        choices: [ 'boolean', 'img', 'number', 'string'],
        correctAnswer: 'img'    
    },
    {
        question: 'When used as an arithmetic operator, `%` gives you the ...?',
        choices: [ 'Modulus', 'Percent', 'Fraction', 'Increment'],
        correctAnswer: 'Modulus'    
    },
    {
        question: 'JavaScript is used primarily server-side, but can also be used client-side.',
        choices: [ 'True', 'False', '', ''],
        correctAnswer: 'True'    
    },
    {
        question: 'An infinite loop that never exits..',
        choices: [ 
            'Can end the world', 
            'Can crash your program', 
            'Can allow computers to take over the world', 
            'Can turn you into a zombie'],
        correctAnswer: 'Can crash your program'    
    },
    {
        question: 'What is the correct tag to insert JavaScript into HTML?',
        choices: [ '<Java>', '<javascript>', '<link>', '<script>'],
        correctAnswer: '<script>'    
    },
    {
        question: 'How do write Error in an alert box?',
        choices: [ 'alert("Error");', 'alertBox("Error");', 'alert= "Error";', 'Alert(){Error};'],
        correctAnswer: 'alert("Error");'    
    },
    {
        question: 'All things considered, JavaScript is pretty Awesome',
        choices: [ 'False', 'True', '', ''],
        correctAnswer: 'True'    
    }
]