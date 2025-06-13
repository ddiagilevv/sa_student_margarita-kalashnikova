function median(array){
    const sorted = array.slice().sort((a, b) => a - b);
     const mid = Math.floor(sorted.length / 2);
     
    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    } else { 
        // если четная:
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
}

const data = [1, 99, 85, 3, 4566, 54, 781, 12, 0, 1];
console.log(`Данные: ${data}`);
console.log(`медиана=${median(data)}`);