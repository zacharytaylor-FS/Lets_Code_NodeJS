/** NodeJS Follows
 * ? Design Pattern
 * * SLR - Server,Listener,Router Design
 * TODO create 3 seperate files
 * ? Module
 * * JS file
 */
const http = require("http");
const app = require("./app/app");
require("dotenv").config();

http.createServer(app).listen(process.env.port, () => {
	console.log(`Server is running in port ${process.env.port}`);
});
