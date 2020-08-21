export function getRandom(fromNumber, toNumber) {
    const difference = toNumber - fromNumber;
    const rand = Math.ceil(Math.random() * (difference + 1)) + fromNumber;
    return rand - 1;
}

export function generateRandomArray(n) {
    const numArray = [];
    const randArray = [];
    for (let i = 0; i < n; i += 1) {
        numArray.push(i);
    }
    while (numArray.length !== 1) {
        const rand = getRandom(0, numArray.length - 1);
        randArray.push(numArray[rand]);
        numArray.splice(rand, 1);
    }
    randArray.push(numArray[0]);
    return randArray;
}
