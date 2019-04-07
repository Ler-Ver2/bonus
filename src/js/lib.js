export function sumBonus(items) {

    let total = 0;
    for (const item of items) {
        if (item > 10000) {
            total += (item * 0.05);
    }
    return total;
};