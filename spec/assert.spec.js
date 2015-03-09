/* global describe,it */

require( 'should' );
var assertStructure = require( '../src/' );

function test( actual, expected ) {
	return assertStructure.bind( this, actual, expected );
}


describe( 'when asserting same object strucutres', function() {
	var expected = {
		lol: true
	};

	var actual = {
		lol: false
	};

	it( 'should not throw', function() {
		test( actual, expected ).should.not.throw();
	} );
} );

describe( 'when asserting same nested object strucutres', function() {
	var expected = {
		lol: true,
		bacon: {
			isGreat: true
		}
	};

	var actual = {
		lol: false,
		bacon: {
			isGreat: true
		}
	};

	it( 'should not throw', function() {
		test( actual, expected ).should.not.throw();
	} );
} );

describe( 'when asserting different object strucutres', function() {
	var expected = {
		bacon: true,
		foo: 'sure'
	};

	var actual = {
		turkey: false
	};

	it( 'should throw and show properties', function() {
		test( actual, expected ).should.throw( /bacon,foo$/ );
	} );
} );

describe( 'when asserting different nested object strucutres', function() {
	var expected = {
		bacon: true,
		lol: {
			cats: true,
			dogs: 'sure',
			foo: {
				bar: 'baz'
			}
		}
	};

	var actual = {
		bacon: true,
		lol: { foo: true }
	};

	it( 'should throw and show prefixed properties', function() {
		test( actual, expected ).should.throw( /lol.cats,lol.dogs,lol.foo.bar$/ );
	} );
} );
