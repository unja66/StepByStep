var dbPool = require('./DBPool');

dbPool.query('Select * from sample', function (err, rows, fields) {
	if (err) {
		throw err;
	}
	console.log("The solution is: ", rows[0].name);
	dbPool.end();
});

console.log("finish action");
