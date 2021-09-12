import { INSPECT_MAX_BYTES } from "buffer";
import { Db, MongoClient } from "mongodb";
import Trip from "../model/Trip";

class TripService {
  uri: string =
    "mongodb+srv://nodeapp:Ndxqm2vfVMa0xxoc@cluster0.czphu.mongodb.net/tripdb?retryWrites=true&w=majority";

  async addTrip(newtrip: Trip): Promise<string> {
    const client = new MongoClient(this.uri);
    await client.connect();
    const db = client.db("Cluster0");
    const coll = db.collection("trips");
    var result: string = "";
    await coll.insertOne(newtrip, function (err, res) {
      if (err) throw err;
      result = res?.acknowledged ? "Success" : "Failure";
    });
    return result;
  }

  async getTrips(): Promise<Array<Trip>> {
    const client = new MongoClient(this.uri);
    await client.connect();
    const db = client.db("Cluster0");
    const coll = db.collection("trips");
    var trips: Trip[] = [];
    return coll
      .find()
      .toArray()
      .then((items) => {
        items.forEach((item) => {
          trips.push(new Trip(item.name, item.start));
        });
        return trips;
      });
  }
}
export default TripService;
