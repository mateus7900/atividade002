import express from "express";
import cors from "cors";
import BloodTypeController from "./controllers/BloodTypeController.js";
import CollectionPointController from "./controllers/CollectionPointController.js";
import DonationController from "./controllers/DonationController.js";
import PeopleController from "./controllers/PeopleController.js";
import CityController from "./controllers/CityController.js";
import StateController from "./controllers/StateController.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use("/blood-type", BloodTypeController);
app.use("/collection-point", CollectionPointController);
app.use("/donations", DonationController);
app.use("/people", PeopleController);
app.use("/city", CityController);
app.use("/state", StateController);


app.listen(9000, () => {
    console.log("[SERVER] Servidor rodando na porta 9000")
})