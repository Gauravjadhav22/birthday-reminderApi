const Person = require("../model/person");
const CustomErrors = require("../errors");
const { StatusCodes } = require("http-status-codes");

const GetBirthday = async (req, res) => {
  var d = new Date();

  var date = d.getDate();
  var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }

  var dateStr = date + "-" + month;
  const people = await Person.find({
    dob: { $regex: dateStr, $options: "x" },
  });
  res.status(StatusCodes.OK).json({ arr: people });
};

const PostBirthday = async (req, res) => {
  const { name, dob, contact } = req.body;

  let y = dob.split("-");

  var d = new Date();

  var year = d.getFullYear();

  req.body.age = year - y[2];
  if (!name || !dob) {
    throw new CustomErrors.BadRequestError(`please provide mobile no. !...`);
  }

  await Person.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "the Birthday has Added" });
};

module.exports = {
  GetBirthday,
  PostBirthday,
};
