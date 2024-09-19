const notFoundHandler = (req, res, next) => {
  try {
    return res
      .status(404)
      .json({ error: `Path provided ${req.originalUrl} does not exist` }); //we recieve the url in the request
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = notFoundHandler;
