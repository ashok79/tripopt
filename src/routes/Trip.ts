import express from "express";
import trip from "../controllers/TripController";

const router = express.Router();

router.post('/trips', trip.addTrip);
router.get("/trips", trip.getTrips)

export = router; 