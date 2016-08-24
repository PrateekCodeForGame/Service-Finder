'use strict';

import mongoose from 'mongoose';

var ReviewsSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String
});

export default mongoose.model('Reviews', ReviewsSchema);
