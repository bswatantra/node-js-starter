export const index = async ( req, res ) => {
	return res.send( 'hello blogs nodemon' );
};

export const store = async ( req, res ) => {
	console.log( req.body );
	return res.send( 'hello blogs store' );
};