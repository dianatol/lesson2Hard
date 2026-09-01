let num = 266219;
let result = 1;
num = num.toString().split("").map(Number)

for (let i = 0; i < num.length; i++) {
    result *= num[i];
}

console.log(result)

result = result**3

result = result.toString()
console.log(result.substring(0,2))
