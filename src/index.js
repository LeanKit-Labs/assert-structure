var _ = require( 'lodash' );

function makePrefix( prefix, key ) {
	return prefix ? ( prefix + '.' + key ) : key;
}

function assert( actual, expected, prefix ) {
	var missingKeys = _.map( expected, function( v, k ) {
		if ( !actual.hasOwnProperty( k ) ) {
			return makePrefix( prefix, k );
		}

		if ( _.isObject( v ) ) {
			return assert( actual[ k ], v, makePrefix( prefix, k ) );
		}
		return [];
	} );

	if ( !prefix ) {
		var flattened = _.flatten( missingKeys );
		if ( flattened.length ) {
			var message = 'Object missing the following keys: ' + flattened.join( ',' );
			throw Error( message );
		}
		return true;
	}
	return missingKeys;
}

module.exports = function( actual, expected ) {
	assert( actual, expected );
};
