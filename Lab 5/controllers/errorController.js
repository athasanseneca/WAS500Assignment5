const httpStatus = require("http-status-codes");

exports.logErrors = (error, req, res, next) => {
  console.log("There is an error with logging");
  console.error("here it is", error.stack);
  next(error);
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  var errormsg = `This page is not available, Error Code: ${errorCode}`;
  console.log(errormsg);
  res.render('404', { errormsg: errormsg })
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  var errormsg = `There is a problem with the application Error Code: ${errorCode}`;
  console.log(errormsg);
  res.render('404', { errormsg: errormsg })
};