import request from 'supertest';
import app from '../src/app';

describe('POST /api/validate', () => {
    it('should return valid: true for a correct card number', async () => {
        const response = await request(app)
            .post('/api/validate')
            .set('Content-Type', 'application/json')
            .send({ cardNumber: '49927398716' }); // Example valid Luhn number

        expect(response.status).toBe(200);
        expect(response.body.valid).toBe(true);
    });

    it('should return valid: false for an incorrect card number', async () => {
        const response = await request(app)
            .post('/api/validate')
            .set('Content-Type', 'application/json')
            .send({ cardNumber: '49927398717' }); // Example invalid Luhn number

        expect(response.status).toBe(200);
        expect(response.body.valid).toBe(false);
    });

    it('should return 400 Bad Request if cardNumber is missing', async () => {
        const response = await request(app)
            .post('/api/validate')
            .set('Content-Type', 'application/json')
            .send({}); // Empty body

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
    });

    it('should return 400 Bad Request if cardNumber is not a string', async () => {
        const response = await request(app)
            .post('/api/validate')
            .set('Content-Type', 'application/json')
            .send({ cardNumber: 1234567890 }); // Number type instead of string

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
    });

    it('should return valid: false if string contains letters', async () => {
        const response = await request(app)
            .post('/api/validate')
            .set('Content-Type', 'application/json')
            .send({ cardNumber: '4992739A716' });

        expect(response.status).toBe(200);
        expect(response.body.valid).toBe(false);
    });
});