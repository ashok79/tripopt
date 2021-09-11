"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const TripController_1 = __importDefault(require("../controllers/TripController"));
const router = express_1.default.Router();
router.post('/trips', TripController_1.default.addTrip);
router.get("/trips", TripController_1.default.getTrips);
module.exports = router;
