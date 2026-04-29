# Card Validation API

A simple Express REST API built with TypeScript that validates credit card numbers using the Luhn Algorithm.

## Features
- **Luhn Algorithm Validation:** Checks whether a provided card number satisfies the Luhn check.
- **Input Sanitization:** Ignores dashes and spaces in card numbers.
- **Error Handling:** Gracefully handles invalid inputs and returns appropriate HTTP status codes (e.g., `400 Bad Request`).
- **Testing:** Comprehensive test suite written using Jest and SuperTest.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- `npm` (comes with Node.js)

## Setup & Installation

1. Navigate into the project directory:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- `npm run dev`
  Runs the application in development mode using `nodemon`. The server will automatically reload if you make changes to the code.
  
- `npm run build`
  Compiles the TypeScript code into plain JavaScript in the `dist/` directory.

- `npm start`
  Runs the compiled application from the `dist/` directory. (Make sure you run `npm run build` first).
  
- `npm test`
  Runs the Jest test suite.

## API Documentation

### Validate Card

Validates a credit card number.

- **URL:** `/api/validate`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

#### Request Body (JSON)

| Property     | Type     | Required | Description                     |
|--------------|----------|----------|---------------------------------|
| `cardNumber` | `string` | Yes      | The credit card number to check |

**Example:**
```json
{
  "cardNumber": "4242 4242 4242 4242"
}
```

#### Success Response

- **Code:** `200 OK`
- **Content:**
  ```json
  {
    "valid": true,
    "cardNumber": "4242424242424242"
  }
  ```

#### Error Responses

- **Condition:** If the `cardNumber` property is missing or not sent properly as JSON.
- **Code:** `400 Bad Request`
- **Content:**
  ```json
  {
    "error": "cardNumber field is required."
  }
  ```

- **Condition:** If the `cardNumber` property is not a string (e.g., passed as an integer).
- **Code:** `400 Bad Request`
- **Content:**
  ```json
  {
    "error": "cardNumber must be a string."
  }
  ```

## Technologies Used
- Node.js
- Express.js
- TypeScript
- Jest & SuperTest (for testing)
