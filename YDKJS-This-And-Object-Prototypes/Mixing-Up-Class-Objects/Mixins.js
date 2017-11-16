/*
*	Since JavaScript will not automatically copy from vehicle to car, we can
*	instead create a utility that manually copies called a mixin
*/

// vastly simplified 'mixin(..' example:
function mixin( sourceObj, targetObj ) {
	for (var key in sourceObj) {
		// only copy if not already present
		if(!(key in targetObj)) {
			targetObj[key] = sourceObj[key];
		}
	}

	return targetObj;
}

var Vehicle = {
	engines: 1,

	ignition: function() {
		console.log( "Turning on my engine" );
	},

	drive: function() {
		this.ignition();
		console.log( "Steering and moving forward" );
	}
};

var Car = mixin( Vehicle, {
	wheels: 4,

	drive: function() {
		Vehicle.drive.call( this );
		console.log( "Rolling on all " + this.wheels + " wheels!" );
	}
});