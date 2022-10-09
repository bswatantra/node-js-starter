import Blog from '../models/Blog.js';
import { body, check, validationResult } from 'express-validator';
export const index = async ( req, res ) => {
	return res.send( 'hello blogs nodemon' );
};

export const store = async ( req, res ) => {
	try
	{
		const errors = validationResult( req );
		if ( errors )
		{
			return res.status( 422 ).json( { errors: errors.array() } );
		}

		const { title, description } = req.body;

		const blog = new Blog( {
			title,
			description,
		} );

		await blog.save();

		res.json( { message: "Success" } );

	} catch ( error )
	{
		console.log( error );
	}

};