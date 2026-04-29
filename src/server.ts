import app from './app';

const PORT = process.env.PORT || 2121;

app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});