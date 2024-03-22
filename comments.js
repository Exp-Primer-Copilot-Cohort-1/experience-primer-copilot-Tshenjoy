// create web server
// create express server
import express from 'express';
const app = express();
// create server
import { createServer } from 'http';
const server = createServer(app);
// create socket.io
import socketIo from 'socket.io';
const io = socketIo(server);
// create body parser
import { json } from 'body-parser';
import mongoose from 'mongoose'; // Import mongoose package

app.use(json());

// create mongoose schema
const Schema = mongoose.Schema; // Use mongoose.Schema instead of _Schema
const commentSchema = new Schema({
    // code for commentSchema goes here
});
const Comment = mongoose.model('Comment', commentSchema);