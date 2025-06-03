import { app } from "./app.mjs";

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT} and is running in ${process.env.NODE_ENV} mode`);
});
