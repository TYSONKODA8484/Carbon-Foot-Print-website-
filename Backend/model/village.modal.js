import mongoose from 'mongoose';

// Define the Mongoose schema
const villageSchema = new mongoose.Schema({
  location: String, required: true },
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  solar: { type: Number, default: 0 },
  biogas: { type: Number, default: 0 },
  vermiculture: { type: Number, default: 0 },
  structureStability: { type: Number, default: 0 },
  description: { type: String, default: '' },
  address: { type: String, required: true },
});

const Village = mongoose.model('Village', villageSchema);

export default Village;
