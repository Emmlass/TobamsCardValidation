import express, { Application } from 'express';
import cardRoutes from './routes/card.routes';

const app: Application = express();

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Mount the routes
app.use('/api', cardRoutes);

// Basic 404 handler for unmapped routes
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found.' });
});

export default app;