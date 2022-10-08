import bodyParser from "body-parser";
import cors from 'cors';
import express from "express";
import routes from "./routes/index.js";
import * as dotenv from "dotenv";


const PORT = process.env.PORT || 4000;
const app = express();

app.use( cors() );
app.use( bodyParser.json() );

dotenv.config();

app.get( "/", ( req, res ) => {
	res.send( "Backend is running....." );
} );

app.use( "/api", routes );

app.listen( PORT, () => {
	console.log( "Server is running at http://localhost:4000" );
} );