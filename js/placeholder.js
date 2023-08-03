// Знаходимо всі елементи з класом "connect-form-input"
const inputElements = document.querySelectorAll('.connect-form-input');

// Ітеруємося по всім знайденим елементам і додаємо зірочку після плейсхолдера
inputElements.forEach(inputElement => {
  const placeholderText = inputElement.getAttribute('placeholder');
  inputElement.setAttribute('placeholder', placeholderText + ' *');
});

// // Знаходимо всі елементи з класом "connect-form-input"
// const inputElements = document.querySelectorAll('.connect-form-input');

// // Ітеруємося по всім знайденим елементам
// inputElements.forEach(inputElement => {
//   // Створюємо новий елемент <span> для зірочки
//   const asteriskElement = document.createElement('span');
//   asteriskElement.textContent = '*';
//   asteriskElement.style.color = '#c30000'; // Задайте потрібний колір для зірочки
//   asteriskElement.style.marginLeft = '4px'; // Додайте відступ між текстом плейсхолдера та зірочкою

//   // Вставляємо зірочку після плейсхолдера
//   inputElement.parentNode.appendChild(asteriskElement);
// });
