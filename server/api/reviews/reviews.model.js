'use strict';

import mongoose from 'mongoose';

var ReviewsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Reviews', ReviewsSchema);
