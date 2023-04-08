const app = () => {
  const form = document.querySelector('form');

  const state = {
    words: [],
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const russian = formData.get('russian');
    const english = formData.get('english');
    const englishInput = document.querySelector('input#english');

    const firstLetter = english.slice(0, 1).toLowerCase();

    const wordsElements = document.querySelectorAll(`tr#${firstLetter}`);

    const wordsElementsArray = [...wordsElements];

    const lastWord = wordsElementsArray[wordsElementsArray.length - 1];

    const tr = document.createElement('tr');
    tr.setAttribute('id', firstLetter);

    const tdEnglish = document.createElement('td');
    tdEnglish.textContent = english;

    const tdRussian = document.createElement('td');
    tdRussian.textContent = russian;

    tr.append(tdEnglish, tdRussian);

    lastWord.after(tr);

    state.words.push({ russian, english });

    englishInput.focus();
    e.target.reset();
  });
}

app();