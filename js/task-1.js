function makeTransaction(quantity, pricePerDroid) {
  // обчислюємо загальну вартість
  const totalPrice = quantity * pricePerDroid;
  // формуємо рядок з повідомленням
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Перевірка коректності роботи функції
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
