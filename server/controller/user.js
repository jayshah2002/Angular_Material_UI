const registermodel = require('../models/user');

exports.register = async function (req, res) {

  // console.log(req.body);
  const {
    name,
    email,
    pass,
  } = req.body;
  // console.log(pass);
    try {
      const userexit = await registermodel.findOne({
        email: email
      });
      if (userexit) {
        return res.status(422).json({
          error: "Email ID already exists!! Try other one"
        });
      } 
      else {
        console.log("create user");
        const object = new registermodel({
          name,
          email,
          pass
        });
        // console.log(object);
        //  hasing of password before save
        const x = await object.save();
        // console.log(x)
     }
    }catch (err) {console.log(err);}
    
}

exports.userDisplay = async function (req, res) {

  const objectdata = await registermodel.find({});
  console.log(objectdata)
  res.status(201).json(objectdata);

}


exports.deluser=async function (req, res) {

  const email=req.params.email;
  const deleteUser=await registermodel.findOneAndDelete(email);
  if (!deleteUser) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).send({ message: "Product Deleted Succesfully" });
}

exports.auth = async function (req, res) {
  console.log("hello login")
  const {
    email,
    password,
  } = req.body;
  console.log(email);
  try {
    const userlogin = await registermodel.findOne({
      email: email
    });
    console.log(!userlogin);
    if (!userlogin) {
      return res.status(400).json({
        error: "invailad crenteidatisl"
      });
    } else {
      // console.log(userlogin.password);
      // console.log(password);
      const ismatch = await bcrypt.compare(password, userlogin.password);
      // console.log(ismatch);
      if (!ismatch) {
        return res.status(400).json({
          error: "invaild credientails"
        });
      } else {
        console.log("genrate employee");
        token = await userlogin.generateAuthToken();
        const obj = {
          message: "user sucesfully",
          token: token,
          loginuser: userlogin,
        };

        return res.status(201).json(obj);

      }
    }

  } catch (err) {
    console.log(err);
  }
}