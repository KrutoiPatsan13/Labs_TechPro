let arr = [];
for (let i = 0; i < 12; i++) {
    let randomNumber = Math.floor(Math.random() * 101) - 50;
    arr.push(randomNumber);
}
console.log("Початковий масив:", arr);

console.log("\nВсі елементи масиву:");
for (let i = 0; i < arr.length; i++) {
    console.log(`Індекс: ${i}, Значення: ${arr[i]}`);
}

console.log("\nТільки від'ємні елементи:");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i]);
    }
}