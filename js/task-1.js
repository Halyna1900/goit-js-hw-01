function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid; // обчислюємо загальну вартість
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`; // формуємо рядок з повідомленням
}

// Перевірка коректності роботи функції
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
