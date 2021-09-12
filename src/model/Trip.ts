import { ObjectId } from "mongodb";

export default class Trip {
  constructor(public name: string, public start: number) {}
}
