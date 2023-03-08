const mathOperations = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	multiply: function (a, b) {
		return a * b;
	},
	divide: function (a, b) {
		return a / b;
	},
	sqrt: function(num){
		return (Math.sqrt(num))
	},
	max: function(a,b){
		return (Math.max((a,b)))
	}
};


module.exports = mathOperations;
