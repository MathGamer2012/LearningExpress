const express = require('express'); //importing the express.js modlue 

const app = express(); //making a app 

app.get('/', (req, res) => { //creating a get request for the root path
  res.send('<h1> Hello, my name is Ishaan <h1>'); //sending a response of hello world
}); //end of the get request

const PORT = process.env.PORT || 5000; //(3000 is the default port), creats a server with the port 5000 

app.listen(PORT, () => console.log(`Server started on port:${PORT}`)); //listening to the port and logging the message to the console
//enter "node myapp on terimnal to see the output"
//open the browser and enter "localhost:5000" to see the output

//Watch video for ref: https://olympus.mygreatlearning.com/courses/105615/modules/items/5073525?pb_id=581

//git init
//git add .
//git commit -am "message"
//git remove add origin (URL)
//git push origin

//after you have initalized you do: 
//git commit -am "message" (to commit the changes)
//git push origin (branch name) (to push the changes to the branch)

//Continue: https://olympus.mygreatlearning.com/courses/105615/modules/items/5073525?pb_id=581


//For making a new express project: 
//Go to command prompt and type:
//cd express
//mkdir (name of project)
//cd (name of project)
//npm init   
//npm i express

//To run the node enter: 
//node (name of app.js file)