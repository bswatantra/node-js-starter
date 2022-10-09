import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema( {
	title: String,
	description: String,
	created_at: { type: Date, default: Date.now },
} );

export default new mongoose.model( "Blog", BlogSchema );