function getShippingMessage(country, price, deliveryFee) {
  //   загальна вартість замовлення
  const totalPrice = price + deliveryFee;
  // формуємо рядок з повідомленням
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

// Перевірка коректності роботи функції
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
