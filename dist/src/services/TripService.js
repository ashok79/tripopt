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
const mongodb_1 = require("mongodb");
const Trip_1 = __importDefault(require("../model/Trip"));
class TripService {
    constructor() {
        this.uri = "mongodb+srv://nodeapp:Ndxqm2vfVMa0xxoc@cluster0.czphu.mongodb.net/tripdb?retryWrites=true&w=majority";
    }
    addTrip(newtrip) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongodb_1.MongoClient(this.uri);
            yield client.connect();
            const db = client.db("Cluster0");
            const coll = db.collection("trips");
            var result = "";
            yield coll.insertOne(newtrip, function (err, res) {
                if (err)
                    throw err;
                result = (res === null || res === void 0 ? void 0 : res.acknowledged) ? "Success" : "Failure";
            });
            return result;
        });
    }
    getTrips() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongodb_1.MongoClient(this.uri);
            yield client.connect();
            const db = client.db("Cluster0");
            const coll = db.collection("trips");
            var trips = [];
            return coll
                .find()
                .toArray()
                .then((items) => {
                items.forEach((item) => {
                    trips.push(new Trip_1.default(item.name, item.start));
                });
                return trips;
            });
        });
    }
}
exports.default = TripService;
