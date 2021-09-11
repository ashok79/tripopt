"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trip_1 = __importDefault(require("../model/Trip"));
const TripService_1 = __importDefault(require("../services/TripService"));
const addTrip = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const trp = new TripService_1.default();
    const newTrip = new Trip_1.default(req.body.name, req.body.date);
    trp.addTrip(newTrip).then((status) => {
        res.send("Successfully submitted.");
    });
});
const getTrips = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const trp = new TripService_1.default();
    trp.getTrips().then((trips) => {
        res.send(trips);
    });
});
exports.default = { addTrip, getTrips };
