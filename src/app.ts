import express from "express";
import routes from "./routes/Trip";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(process.env.PORT || 5000, () => console.log("Server running"));
