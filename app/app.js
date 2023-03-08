const express = require("express");
const router = require("../router/router");
const app = express();

const myLogger = function (req, res, next) {
	console.log("LOGGED");
	next();
};

const requestTime = function (req, res, next) {
	req.requestTime = Date.now();
	console.log(`${req.requestTime}`);
	next();
};
//^ Handle Payload(s)
// * use middleware to parse json payLoads into our request model
app.use(express.json());
// req.body.username req.body.password
app.use(myLogger);
app.use(requestTime);

//^ Service actuator - Localhost:3000
app.get("/", (req, res) => {
	res.status(200).json({ message: "Service is up" });
});

//* use middleware to define my router
app.use("/users", router);

//! CATCH ERRORS
app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});
app.use((req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
			status: error.status,
		},
	});
});

module.exports = app;
