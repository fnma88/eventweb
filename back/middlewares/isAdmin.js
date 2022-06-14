function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    console.log(JSON.stringify(req));
    return next();
  } else {
    return res.status(400).json({ message: "El usuario no es admin" });
  }
}

module.exports = isAdmin;
