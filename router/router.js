const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Successful GET!",
		metadata: {
			hostname: req.hostname,
			method: req.method,
		},
	});
});

router.post("/", (req, res, next) => {
	res.status(201).json({
		message: "Successful PUT!",
		metadata: {
			hostname: req.hostname,
			method: req.method,
		},
	});
});
router.get("/:id", (req, res, next) => {
	const id = req.params.id;
	res.status(200).json({
		message: "Successful - GET by ID",
		id: id,
		metadata: {
			hostname: req.hostname,
			method: req.method,
		},
	});
});

router.put("/:id", (req, res, next) => {
	const id = req.params.id;
	res.status(200).json({
		message: "Successful - PUT by ID",
		id: id,
		metadata: {
			hostname: req.hostname,
			method: req.method,
		},
	});
});

router.delete("/:id", (req, res, next) => {
	const id = req.params.id;
	res.status(200).json({
		message: "Successful - DELETE by ID",
		id: id,
		metadata: {
			hostname: req.hostname,
			method: req.method,
		},
	});
});

// router.delete();
module.exports = router;
