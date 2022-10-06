import express from "express";
import routes from "./routes/index.js";
import * as dotenv from "dotenv";


const PORT = process.env.PORT || 4000;
const app = express();
dotenv.config();

app.get( "/", ( req, res ) => {
	res.send( "Hello World" );
} );
app.use( "/", routes );

app.listen( PORT, () => {
	console.log( "Server is running at http://localhost:4000" );
} );