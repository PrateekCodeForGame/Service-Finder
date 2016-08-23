'use strict';

import mongoose from 'mongoose';

var JobSchema = new mongoose.Schema({
  address: String,
  category: String,
  city: String,
  contactTime: String,
  description: String,
  email: String,
  jobTime: String,
  jobType: String,
  name: String,
  phone: String,
  pin: String,
  ssn: String,
  subCategory: String
});

export default mongoose.model('Job', JobSchema);
