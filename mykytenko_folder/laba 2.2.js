let sacrificedarr = [];
for (let i = 0; i < 100; i++) {
  sacrificedarr.push(i);
}

for (let i = sacrificedarr.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [sacrificedarr[i], sacrificedarr[j]] = [sacrificedarr[j], sacrificedarr[i]];
}

let arr = sacrificedarr.slice(0, 10);

console.log("Массив: ", arr.join(", "));

let arrsorted = [];
arrsorted = arr.sort((a, b) => b - a);
console.log("Відсортованний массив: ", arrsorted.join(", "));