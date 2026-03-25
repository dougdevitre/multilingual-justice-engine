function adaCompliance(req, res, next) {
  res.setHeader('Content-Language', req.query.lang || 'en');
  res.setHeader('X-Content-Accessible', 'true');
  next();
}
module.exports = { adaCompliance };
