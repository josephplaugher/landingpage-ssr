"use strict";

var _server = _interopRequireDefault(require("react-dom/server"));

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _App = _interopRequireDefault(require("./client/App"));

var _extendRequire = _interopRequireDefault(require("isomorphic-loader/lib/extend-require"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _extendRequire.default)().then(function () {
  require("./server");
}).catch(function (err) {
  console.log(err);
});
app.use(_express.default.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
var port = process.env.PORT;
app.listen(port, function () {
  console.log('server started in ' + process.env.NODE_ENV + ' mode on port ' + port);
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
  res.set("X-Powered-By", "Appreciate Corporation");
  next();
});
app.use(_bodyParser.default.urlencoded({
  extended: false
})); // Parse application/x-www-form-urlencoded

app.use(_bodyParser.default.json()); // Parse application/json

/*use sessions for user login
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    store: new FileStore(),
    secret: uuid(),
    resave: false,
    saveUninitialized: false,
    maxAge: 60000,
    cookie:{secure: app.get('env') === 'production'}
}));
*/
//app.use('/', userCont);

app.all('/*', function (req, res) {
  //consolelog('sessionID: ', req.sessionID, 'userdata: ', req.session.userData);
  var AppString = _server.default.renderToString(_react.default.createElement(_App.default, null));

  res.render('index', {
    "App": AppString
  });
});