//Convert object (JSON) fields to string in order to run using Newman

"use strict";
const oldFile = process.argv[2];
const newFile = process.argv[3];

const fs = require('fs');

const data = JSON.parse(fs.readFileSync(oldFile));

data.forEach(function(item){
	item.responseMessage = JSON.stringify(item.responseMessage);
	item.dataToCheck = JSON.stringify(item.dataToCheck);
});

fs.writeFileSync(newFile, JSON.stringify(data, null, 4));
