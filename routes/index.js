import express from 'express';
import App from '../src/App.jsx';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Server Side Rendered React',
    content: ReactDOMServer.renderToString(<App />)
  });
});

export default router;
