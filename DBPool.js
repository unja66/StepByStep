var mysql      = require('mysql');

var dbPool= mysql.createPool({
	host     : 'localhost',
	database : 'stepbystep',
	user     : 'unja66',
	password : 'uychoi66'
});

module.exports = dbPool;
