const express = require('express')
const router = express.Router()
var fileupload= require('express-fileupload');
router.use(fileupload())
var multipleUpload= upload.fields([{name: 'field1',maxCount :5}])

router.post('/uploads',multipleUpload, async (req, res) => {
	var jsonStr={};
    // Create a new user
    try {
        if(req.files){
        	fs = require('fs');
        	for(var files in req.files){

				var x = "";
				fs.readFile("files", 'utf8', function (err,data) {
				  if (err) {
				    return console.log(err);
				  }
				  x = x + data;
				  
				});
    			var words = x.textContent.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];})
    			var obj= JSON.parse(jsonStr);
    			obj.push({"fileName":files.name,"Unique Word count":words })
			}

        }
        res.status(200).send(jsonStr);
        
    } catch (error) {
        res.status(400).send(error)
    }
})