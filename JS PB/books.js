function books(input) {
  let index = 0;

  const book = input[index];

  index++;

  let books = "";

  let count = 0;

  const comand = "No More Books";

  let bool = false;
  let booltwo = true;

  while (books !== book) {
    books = input[index];

    index++;

    if (books === book) {
      bool = true;
      break;
    }

    if (books === comand) {
      false;

      break;
    }

    count++;
  }

  if (bool) {
    console.log(`You checked ${count} books and found it.`);
  } else {
    console.log("The book you search is not here!");

    console.log(`You checked ${count} books.`);
  }
}

books([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
