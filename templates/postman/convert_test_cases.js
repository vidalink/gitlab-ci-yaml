//Convert object (JSON) fields to string in order to run using Newman

"use strict";
const oldFile = process.argv[2];
const newFile = process.argv[3];

const fs = require('fs');

const data = JSON.parse(fs.readFileSync(oldFile));

data.forEach(function(item){
	if (item.responseMessage != null)
	{
		item.responseMessage = JSON.stringify(item.responseMessage);
	}
	if (item.dataToCheck != null)
	{
		item.dataToCheck = JSON.stringify(item.dataToCheck);
	}
	if (item.minimalContract != null)
	{
		item.minimalContract = JSON.stringify(item.minimalContract);
	}
});

fs.writeFileSync(newFile, JSON.stringify(data, null, 4));
