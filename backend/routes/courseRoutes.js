const express = require("express");
const router = express.Router();

const {
  addCourse,
  getCourses,
  deleteCourse,
} = require("../controllers/courseController");


// add course
router.post("/add", addCourse);

// get all courses
router.get("/", getCourses);

// delete course
router.delete("/:id", deleteCourse);


module.exports = router;