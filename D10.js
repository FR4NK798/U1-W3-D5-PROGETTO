/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = { name: "Francesco", surname: "Ricciardi", age: "25" };
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me["age"];
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", 
  contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("c sharp");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" 
  contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  const random = Math.floor(Math.random() * 7);
  return random;
};

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const n1 = 12;
const n2 = 10;

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    console.log("Il maggiore è il numero 1: ", n1);
  } else if (n1 === n2) {
    console.log("I due numeri sono uguali");
  } else {
    console.log("Il maggiore è il numero 2: ", n2);
  }
};

whoIsBigger(n1, n2);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro 
  e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const strEs3 = "I love coding";

const splitMe = (string) => {
  const array = string.split(" ");
  return array;
};

console.log(splitMe(strEs3));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true 
    la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne("cane", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro 
  e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
// const eS5 = "I have 4 dogs";
const eS5 = "I have 4 dogs";

const onlyLetters = (str) => {
  const newArray = str.split("");
  const withoutNum = [];
  for (let i = 0; i < newArray.length; i++) {
    if (isNaN(newArray[i])) {
      withoutNum.push(newArray[i]);
    } else if (isNaN(newArray[i]) === false && newArray[i] === " ") {
      withoutNum.push(newArray[i]);
    }
  }
  for (let i = 0; i < newArray.length; i++) {
    if (withoutNum[i] === " " && withoutNum[i + 1] === " ") {
      withoutNum.splice(i, 1);
    }
  }
  return withoutNum.join("");
};

console.log(onlyLetters(eS5));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e 
  ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (string) => {
  if ((string.includes("@") && string.endsWith(".com")) || string.endsWith(".it")) {
    console.log(`Il testo ${string} è un'email`);
  } else {
    console.log(`Il testo ${string} non è un'email`);
  }
};
isThisAnEmail("ciao@ciao.it");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
// estrae il momento nel tempo attuale in cui si esegue in forma di data
const now = new Date().getDay();
const whatDayIsIt = (now) => {
  const day = ["domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  return day[now];
};

console.log(whatDayIsIt(now));

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values",
   contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (num) => {
  const obj = {
    values: [], //array num estratti con dice
  };
  let sum = 0;
  for (let i = 0; i < num; i++) {
    let numRand = dice();
    obj.values.push(numRand);
    sum = sum + numRand;
  }
  obj.sum = sum;
  return obj;
};

console.log(rollTheDices(10));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e 
  ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (data) => {};

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const date = new Date("February 2, 2024");

const day = date.getDate();
// console.log(day);
const month = date.getMonth();

const dataInserita = new Date(month, day);
console.log(dataInserita);

function isTodayMyBirthday(dataInserita) {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth();

  const dataAttuale = new Date(month, day);
  console.log(dataAttuale);

  if (dataAttuale === dataInserita) {
    return true;
  } else {
    return false;
  }
}

console.log(isTodayMyBirthday(dataInserita));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" 
  che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const strForn = "age";
const objEs11 = { age: 25 };
console.log(objEs11);
// delete objEs11.age;
// console.log(objEs11);

const deleteProp = (obj, string) => {
  delete obj.string;
  return obj;
};

console.log(deleteProp(objEs11, strForn));
// console.log(objEs11);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array) {
  let current = 0;
  current = array[0].Year;
  let x = 0;
  for (let i = 0; i < array.length; i++) {
    if (current < array[i].Year) {
      current = array[i].Year;
      x = i;
    }
  }
  console.log(array[x]);
}
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (array) => {
  return array.length;
};
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array 
  con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (array) => {
  const arrFilm = [];
  for (let i = 0; i < array.length; i++) {
    arrFilm.push(array[i].Year);
    // console.log(arrFilm);
  }
  return arrFilm;
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" 
  che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (array) => {
  const arrMovieMill = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].Year);
    if (array[i].Year < 2000) {
      arrMovieMill.push(array[i]);
    }
  }
  return arrMovieMill;
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" 
  che ritorna la somma di tutti gli anni in cui sono stati prodotti i film 
  contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (array) => {
  let somma = 0;
  let current = 0;
  // console.log(isNaN(somma));
  for (let i = 0; i < array.length; i++) {
    current = array[i].Year;
    // console.log(isNaN(current));
    somma = somma + parseInt(current);
    // console.log(somma);
  }
  // console.log(somma);
  return somma;
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" 
  che riceve una stringa come parametro e 
  ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (array, string) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].Title.includes(string)) {
      console.log(`Il titolo ${array} è contenuto nei seguenti film: `, array[i]);
    }
  }
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" 
  che riceve una stringa come parametro 
  e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito 
        che contengono la stringa fornita all'interno del proprio titolo, 
    mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (string, array) => {
  let match = [];
  let unmatch = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Title.includes(string)) {
      match.push(array[i]);
    } else {
      unmatch.push(array[i]);
    }
  }
  return [match, unmatch];
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e 
  ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (array, num) => {
  array.splice(num, 1);
  return array;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("DOM");
const elemCont = document.getElementById("container");
console.log(elemCont);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTd = document.querySelectorAll("td");
console.log(allTd);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, 
  stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const contTd = (td) => {
  allTd.forEach((td) => console.log(td.innerHTML));
};

contTd(allTd);

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const link = document.querySelector("div a");
console.log(link);
link.style = "background-color: red";

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

newestMovie(movies);

console.log(countMovies(movies));

console.log(onlyTheYears(movies));

console.log(onlyInLastMillennium(movies));

console.log(sumAllTheYears(movies));

searchByTitle(movies, "Avengers");

console.log(searchAndDivide("Avengers", movies));

console.log(removeIndex(movies, 2));
