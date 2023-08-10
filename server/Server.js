let myExpress = require('express');

let app = myExpress();


app.use(myExpress.json())

app.listen(3010, function () {

    console.log("server live ho gya")

})


require("./model/db")

let SignupUsers = require('./model/user')


app.post('/signUp', async (req, res) => {
    try {
        
    
        let existingUser = await SignupUsers.findOne({ email:req.body.email });
        if (existingUser) {
            return res.status(400).send("User with this email already exists");
        }

        let password = req.body.password;
        let cpassword = req.body.cpassword;

        if (password === cpassword) {
            let newUser = new SignupUsers(req.body);
            await newUser.save();
            res.send("User Created");
        } else {
            res.send("Passwords do not match");
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
});