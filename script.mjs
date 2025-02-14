import fs from 'fs';

const stores = [
  { name: "TechWorld", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" },
  { name: "BookNook", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" },
  { name: "FashionFix", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" },
  { name: "HomeEssentials", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" },
  { name: "FootwearHub", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" },
  { name: "GadgetStore", logo: "https://picsum.photos/200/300", url: "https://picsum.photos/" }
];

const items = [
  { name: "Wireless Mouse", id: "ITEM-001", price: 29.99, quantity: 10 },
  { name: "Hardcover Novel", id: "ITEM-003", price: 22.50, quantity: 5 },
  { name: "Bluetooth Speaker", id: "ITEM-012", price: 199.99, quantity: 3 },
  { name: "Leather Wallet", id: "ITEM-010", price: 45.00, quantity: 2 },
  { name: "Table Lamp", id: "ITEM-005", price: 34.38, quantity: 1 },
  { name: "Running Shoes", id: "ITEM-008", price: 79.99, quantity: 10 },
];

const reasons = [
  "Late delivery", "Wrong item received", "Damaged product",
  "Product not as described", "Incorrect size", "Defective item", "Wrong color received"
];

function getRandomArray(arr) {
  const randomIndex = Math.floor(Math.random() * 5) + 1
  return arr.slice(randomIndex, randomIndex * 2);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomData(count) {
  const data = [];

  for (let i = 1; i <= count; i++) {
    const store = getRandomElement(stores);
    const itemsArr = getRandomArray(items);
    const amount = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    data.push({
      id: `RO-${String(i).padStart(4, "0")}`,
      reason: getRandomElement(reasons),
      store_name: store.name,
      store_logo: store.logo,
      store_url: store.url,
      amount: amount,
      active: Math.random() < 0.5,
      decision: null,
      items: itemsArr,
    });
  }

  return data;
}

const jsonData = generateRandomData(73);

fs.writeFileSync("./db.json", JSON.stringify({ refundOrders: jsonData }, null, 2));

console.log("✅ 73 records saved to db.json!");
