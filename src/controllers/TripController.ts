import { NextFunction, Request, Response } from "express";
import Trip from "../model/Trip";
import TripService from "../services/TripService";

const addTrip = async (req: Request, res: Response, next: NextFunction) => {
  const trp = new TripService();
  const newTrip = new Trip(req.body.name, req.body.date);
  trp.addTrip(newTrip).then((status) => {
    res.send("Successfully submitted.");
  });
};

const getTrips = async (req: Request, res: Response, next: NextFunction) => {
  const trp = new TripService();
  trp.getTrips().then((trips) => {
    
    res.send(trips);
  });
};
export default { addTrip, getTrips };
