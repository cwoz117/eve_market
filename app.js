const express = require('express'),
       morgan = require('morgan'),
         cors = require('cors'),
          app = express();

app.use(express.urlencoded({extended: false}))
   .use(express.json())
   .use(cors())
   .use(morgan('tiny'));

app.get('/', (req, res, next) =>{
  res.status(200).json({
    message: 'The MEVN stack!'
  });
});

module.exports = app;
