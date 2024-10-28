function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee; //   загальна вартість замовлення
  return `Shipping to ${country} will cost ${totalPrice} credits`; // формуємо рядок з повідомленням
}

// Перевірка коректності роботи функції
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
