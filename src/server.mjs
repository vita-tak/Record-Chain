import { app } from "./app.mjs";
import { logger } from "./middleware/logger.mjs";
import AppError from "./models/error/appError.mjs";
import errorHandler from "./middleware/errorHandler.mjs";
import recordsRouter from "./routes/records-routes.mjs";

import Blockchain from "./models/blockchain/Blockchain.mjs";
export const blockchain = new Blockchain();

const PORT = process.env.PORT || 4001;

if (process.env.NODE_ENV === 'development') {
    app.use(logger);
}

app.use("/api/v1/records/", recordsRouter);

app.all("*", (req, res, next) => {
    next(
        new AppError(
            `Route "${req.originalUrl}" not found`,
            404
        )
    );
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT} and is running in ${process.env.NODE_ENV} mode`);
});
