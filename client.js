let axios = require('axios');
let FormData = require('form-data')

var fs = require('fs');
var formData = new FormData();
var x = 'asdfg.png';


fs.readFile(x, function(err, data){

	console.log(data);
	formData.append("image", data, x);
	
	axios.post('http://192.168.0.178:3000/uploadFile', formData, {
		headers: {
		  'Content-Type': 'form/multi-part'
		}
	})
})

