function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content); // Конвертуємо значення контенту у число
  const paddingWidth = parseFloat(padding) * 2; // Подвоюємо, оскільки падінг з обох сторін
  const borderWidth = parseFloat(border) * 2; // Подвоюємо, оскільки бордер також з обох сторін

  const totalWidth = contentWidth + paddingWidth + borderWidth; // Обчислюємо загальну ширину
  return totalWidth;
}

// Перевірка коректності роботи функції
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
