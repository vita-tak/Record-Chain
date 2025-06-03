import { app } from "./app.mjs";
import recordsRouter from "./routes/records-routes.mjs";

const PORT = process.env.PORT || 4001;

app.use("/api/v1/records", recordsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT} and is running in ${process.env.NODE_ENV} mode`);
});
