import { Request, Response } from 'express';
import { isValidLuhn } from '../utils/luhn.util';

export const validateCard = (req: Request, res: Response): void => {
    try {
        const cardNumber = req.body?.cardNumber;

        //error handling for missing or badly typed input
        if (cardNumber === undefined || cardNumber === null) {
            res.status(400).json({ error: 'cardNumber field is required.' });
            return;
        }

        if (typeof cardNumber !== 'string') {
            res.status(400).json({ error: 'cardNumber must be a string.' });
            return;
        }

        const isValid = isValidLuhn(cardNumber);

        res.status(200).json({
            valid: isValid,
            cardNumber: cardNumber.replace(/[\s-]/g, '') // Return sanitized version
        });
    } catch (error) {
        // Fallback for unexpected server errors
        res.status(500).json({ error: 'Internal server error during validation.' });
    }
};