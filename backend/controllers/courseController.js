const Course = require("../models/Course");


// ADD COURSE
exports.addCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    const course = new Course({
      title,
      description,
      price,
    });

    await course.save();

    res.json({
      message: "Course added",
      course,
    });

  } catch (err) {
    res.status(500).json(err);
  }
};



// GET ALL COURSES
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json(courses);

  } catch (err) {
    res.status(500).json(err);
  }
};



// DELETE COURSE
exports.deleteCourse = async (req, res) => {
  try {

    await Course.findByIdAndDelete(req.params.id);

    res.json({
      message: "Course deleted",
    });

  } catch (err) {
    res.status(500).json(err);
  }
};