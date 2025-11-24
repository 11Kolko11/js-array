// Функція filterAdults приймає масив об'єктів з полями name та age
// і повертає новий масив, у якому тільки ті люди, вік яких >= 18.
function filterAdults(people) {
  const adults = [];

  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    // перевіряємо, що вік не менший за 18
    if (person.age >= 18) {
      adults.push(person); // додаємо цю людину в масив дорослих
    }
  }

  return adults;
}

module.exports = filterAdults;
