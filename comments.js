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
app.use(json());
// create mongoose
import { Schema as _Schema } from 'mongoose';
// create mongoose schema
const Schema = _Schema;
const commentSchema = new Schema({
    // code for commentSchema goes here
});
