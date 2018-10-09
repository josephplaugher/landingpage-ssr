import ReactDOMServer from 'react-dom/server';
import React from 'react';
import express from 'express';
import bodyParser from 'body-parser'
import App from './client/App'

export default function() {
  const app = express();

  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', './src/views');

  let port = process.env.PORT;
  app.listen(port, function(){
    console.log('server started in '+ process.env.NODE_ENV + ' mode on port ' + port);
  });

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
    res.set("X-Powered-By", "Appreciate Corporation");
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false })); // Parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // Parse application/json

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

  app.all('/*', (req, res) => {
    //consolelog('sessionID: ', req.sessionID, 'userdata: ', req.session.userData);
    const AppString = ReactDOMServer.renderToString(<App />);
    res.render('index',{"App": AppString});
  });
}