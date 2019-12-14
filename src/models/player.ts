import mongoose from "mongoose";

export interface IPlayer extends mongoose.Document {
  name: string;
  wins: number;
  losses: number;
}

export const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  wins: { type: Number },
  losses: { type: Number }
});

const Player = mongoose.model<IPlayer>("Player", PlayerSchema);

export default Player;
