import express from "express";
import "dotenv/config";
import user_router from "./routes/user_route.js";
import filme_router from "./routes/filme_route.js";
import aluguel_route from "./routes/aluguel_route.js";

const app = express();

app.use(express.json());

app.use("/user", user_router);
app.use("/filme", filme_router);
app.use("/aluguel", aluguel_route);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));