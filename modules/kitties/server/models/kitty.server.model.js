'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Kitty Schema
 */
var KittySchema = new Schema({
  name0: {
    type: String,
    default: '',
    required: 'Please fill Kitty name',
    trim: true
  },
  name1: {
    type: String,
    default: '',
    required: 'Please fill Kitty surname',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Kitty', KittySchema);
