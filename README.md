#Assert Structure

A quick way to validate the structure of an object and report missing properties.

##Usage
```javascript
var assert = require( "assert-structure" );

function assertConfig( config ) {
	assert( config, {
		vso: {
			oauthCallbackUrl: "",
			appId: "",
			appSecret: ""
		},
		redis: {
			server: ""
		},
		riak: {
			server: ""
		}
	} );
}

```
