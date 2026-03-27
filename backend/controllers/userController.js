const User = require("../models/User");
const jwt = require("jsonwebtoken");


// REGISTER
exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.json({
      message: "User registered",
      user,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};


// LOGIN
exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("User not found");
    }

    if (user.password !== password) {
      return res.status(400).json("Wrong password");
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1d" }
    );

   res.json({
  message: "Login success",
  token,
  user
}); 

  } catch (error) {
    res.status(500).json(error);
  }
};

// ENROLL COURSE

exports.enrollCourse = async (req, res) => {

  try {

    const { userId, courseId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json("User not found");
    }

    user.enrolledCourses.push(courseId);

    await user.save();

    res.json({
      message: "Course enrolled",
      user
    });

  } catch (err) {
    res.status(500).json(err);
  }

};