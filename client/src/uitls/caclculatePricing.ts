

export const calculatePricing = (price: number, period: boolean): string => {
    let result = 0;
    switch (period) {
        case true: result = price * 10;
            break
        default: result = price
            break;
    }
    return result.toFixed(2);
}
