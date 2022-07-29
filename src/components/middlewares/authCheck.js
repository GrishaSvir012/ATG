export default function authCheck(req, res, next) {
  console.log('AUTH CHECK');
  if (req.session?.name) {
    next();
  } else {
    res.redirect('/');
  }
}
