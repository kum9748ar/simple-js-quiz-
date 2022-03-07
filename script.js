/*quiz data */
const quizData = [
  {
    question: 'Who is the current CEO of Google ?',
    a: 'Sunder Pichai',
    b: 'Larry Page ',
    c: 'Jhon Brown',
    correct: 'a',
  },
  {
    question: 'Who is the current CEO of Amazon ?',
    a: 'Jeff Bezos',
    b: 'Warren Buffet ',
    c: 'Andy Jassy',
    correct: 'c',
  },
  {
    question: 'Who is the current CEO of Tesla ?',
    a: 'Jeffry Black',
    b: 'Elon Musk ',
    c: 'Jhon Brown',
    correct: 'b',
  },
  {
    question: 'Who is the current CEO of Microsoft ?',
    a: 'Satya Nadella ',
    b: 'Tom Klington',
    c: 'Jhon Brown',
    correct: 'a',
  },
  {
    question: 'Which of the company is owned by Mark Zkerburg ?',
    a: 'Neuralink ',
    b: 'Meta Platforms Inc ',
    c: 'Metaverse LLC ',
    correct: 'b',
  },
];
/*Grabing all the elements */
const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');

let index = 0;
let score = 0;
//get the getSelected answer
function getSelected() {
  let ans = undefined;

  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
  question.innerText = quizData[index].question;
  a.innerText = quizData[index].a;
  b.innerText = quizData[index].b;
  c.innerText = quizData[index].c;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == quizData[index].correct) {
        score++;
      }
    }
    index++;
    if (index < quizData.length) {
      getquiz();
    } else {
      alert('score :' + score);
      location.reload();
    }
  });
}
getquiz();
startquiz();
