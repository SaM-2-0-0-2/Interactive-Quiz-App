let questions = [
  {
    numb: 1,
    question: "Which HTML tag is used to define a hyperlink?",
    answer: "B. <a>",
    options: ["A. <link>", "B. <a>", "C. <href>", "D. <nav>"]
  },
  {
    numb: 2,
    question: "Which HTML attribute is used to provide alternative text for an image?",
    answer: "C. alt",
    options: ["A. title", "B. src", "C. alt", "D. href"]
  },
  {
    numb: 3,
    question: "Which tag is used to create an unordered list?",
    answer: "B. <ul>",
    options: ["A. <ol>", "B. <ul>", "C. <li>", "D. <list>"]
  },
  {
    numb: 4,
    question: "Which CSS property controls the text size?",
    answer: "C. font-size",
    options: ["A. text-size", "B. font-style", "C. font-size", "D. size"]
  },
  {
    numb: 5,
    question: "Which CSS property is used to make text bold?",
    answer: "D. font-weight",
    options: ["A. font-style", "B. text-weight", "C. bold", "D. font-weight"]
  },
  {
    numb: 6,
    question: "Which value of position makes an element relative to the browser window?",
    answer: "D. fixed",
    options: ["A. static", "B. relative", "C. absolute", "D. fixed"]
  },
  {
    numb: 7,
    question: "Which CSS layout module is best for one-dimensional layouts?",
    answer: "C. Flexbox",
    options: ["A. Grid", "B. Float", "C. Flexbox", "D. Table"]
  },
  {
    numb: 8,
    question: "Which JavaScript keyword is used to declare a variable?",
    answer: "D. All of the above",
    options: ["A. var", "B. let", "C. const", "D. All of the above"]
  },
  {
    numb: 9,
    question: "Which symbol is used for single-line comments in JavaScript?",
    answer: "C. //",
    options: ["A. <!-- -->", "B. /* */", "C. //", "D. #"]
  },
  {
    numb: 10,
    question: "Which JavaScript method converts JSON to an object?",
    answer: "B. JSON.parse()",
    options: ["A. JSON.stringify()", "B. JSON.parse()", "C. JSON.convert()", "D. JSON.object()"]
  },
  {
    numb: 11,
    question: "Which JavaScript method is used to output data to the browser console?",
    answer: "C. console.log()",
    options: ["A. print()", "B. log()", "C. console.log()", "D. alert()"]
  },
  {
    numb: 12,
    question: "Which function runs after a specified time interval?",
    answer: "B. setTimeout()",
    options: ["A. setInterval()", "B. setTimeout()", "C. delay()", "D. wait()"]
  },
  {
    numb: 13,
    question: "Which operator is used to compare both value and type in JavaScript?",
    answer: "C. ===",
    options: ["A. ==", "B. =", "C. ===", "D. !="]
  },
  {
    numb: 14,
    question: "Which method selects the first matching element using CSS selectors?",
    answer: "B. document.querySelector()",
    options: [
      "A. document.getElementById()",
      "B. document.querySelector()",
      "C. document.querySelectorAll()",
      "D. document.getElementsByClassName()"
    ]
  },
  {
    numb: 15,
    question: "Which event occurs when a user clicks on an HTML element?",
    answer: "C. onclick",
    options: ["A. onhover", "B. onload", "C. onclick", "D. onchange"]
  },
  {
    numb: 16,
    question: "Which HTTP method is mainly used to fetch data?",
    answer: "C. GET",
    options: ["A. POST", "B. PUT", "C. GET", "D. DELETE"]
  },
  {
    numb: 17,
    question: "Which HTTP status code means 'Page Not Found'?",
    answer: "C. 404",
    options: ["A. 200", "B. 301", "C. 404", "D. 500"]
  },
  {
    numb: 18,
    question: "Which protocol is used to secure web communication?",
    answer: "D. HTTPS",
    options: ["A. HTTP", "B. FTP", "C. SMTP", "D. HTTPS"]
  },
  {
    numb: 19,
    question: "Which file is used to add styles to a webpage?",
    answer: "C. .css",
    options: ["A. .html", "B. .js", "C. .css", "D. .json"]
  },
  {
    numb: 20,
    question: "Which CSS unit is relative to the root element font size?",
    answer: "C. rem",
    options: ["A. px", "B. em", "C. rem", "D. %"]
  },
  {
    numb: 21,
    question: "Which JavaScript loop is guaranteed to run at least once?",
    answer: "C. do...while",
    options: ["A. for", "B. while", "C. do...while", "D. foreach"]
  },
  {
    numb: 22,
    question: "Which array method adds an element to the end of an array?",
    answer: "C. push()",
    options: ["A. pop()", "B. shift()", "C. push()", "D. unshift()"]
  },
  {
    numb: 23,
    question: "Which keyword is used to define a constant in JavaScript?",
    answer: "C. const",
    options: ["A. let", "B. var", "C. const", "D. static"]
  },
  {
    numb: 24,
    question: "Which HTML element is semantic?",
    answer: "C. <article>",
    options: ["A. <div>", "B. <span>", "C. <article>", "D. <b>"]
  },
  {
    numb: 25,
    question: "Which CSS property hides an element but keeps its space?",
    answer: "B. visibility: hidden",
    options: ["A. display: none", "B. visibility: hidden", "C. opacity: 0", "D. overflow: hidden"]
  },
  {
    numb: 26,
    question: "Which API is used to make HTTP requests in JavaScript?",
    answer: "B. fetch()",
    options: ["A. request()", "B. fetch()", "C. http()", "D. ajax()"]
  },
  {
    numb: 27,
    question: "Which tool is used to track changes in code?",
    answer: "B. Git",
    options: ["A. NPM", "B. Git", "C. Webpack", "D. Docker"]
  },
  {
    numb: 28,
    question: "Which command initializes a new Git repository?",
    answer: "C. git init",
    options: ["A. git start", "B. git create", "C. git init", "D. git new"]
  },
  {
    numb: 29,
    question: "Which meta tag is essential for responsive design?",
    answer: "C. viewport",
    options: ["A. charset", "B. description", "C. viewport", "D. author"]
  },
  {
    numb: 30,
    question: "Which CSS property is used to create rounded corners?",
    answer: "C. border-radius",
    options: ["A. corner-radius", "B. border-style", "C. border-radius", "D. radius"]
  }
];