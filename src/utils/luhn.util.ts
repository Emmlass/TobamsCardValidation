/* Creating a Luhn validator
 String of number is inputed to be checked for validation
 the function returns True if it is valid */

export const isValidLuhn = (cardNumber: string): boolean => {
    const sanitizedCard = cardNumber.replace(/[\s-]/g, '');
    if (!sanitizedCard || !/^\d+$/.test(sanitizedCard)) {
        return false;
    }


    let sum = 0;
    let shouldDouble = false;

    for (let i = sanitizedCard.length - 1; i >= 0; i -= 1) {
        let digit = parseInt(sanitizedCard.charAt(i), 10)

        if (shouldDouble) {
            digit *= 2
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;

}