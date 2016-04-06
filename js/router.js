var Backbone = require('./lib/backbone-parse/backbone-parse');
var Post = require('./models/post');
var Posts = require('./collections/posts');
var mainTemplate = require('./templates/main.html');
var detailTemplate = require('./templates/detail.html');
var addEditTemplate = require('./templates/addEdit.html');

import React from 'react';
import { render } from 'react-dom';
import Main from './components/main';
import Detail from './components/detail';
import AddEdit from './components/addEdit';

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start({pushState: true});
  },
  routes: {
    "detail/:objectId": "post",
    "post/add": "add",
    "post/:objectId/edit": "edit",
    "":"index"
  },
  index: function () {
    Posts.fetch({
      success: function (posts) {
        render(<Main router={router} data={posts.toJSON()} />, document.getElementById('container'));
      }
    });
  }
});

var router = new Router();

router.on('route:post', function (objectId) {
  var post = Posts.get(objectId);
  render(<Detail router={router} data={post.toJSON()} />, document.getElementById('container'));
});

router.on('route:add', function () {
  render(<AddEdit router={router} />, document.getElementById('container'));
});

router.on('route:edit', function (objectId) {
  var post = Posts.get(objectId);
  render(<AddEdit router={router} data={post.toJSON()} />, document.getElementById('container'));
});

$('#addBtn').on('click', function (e) {
  e.preventDefault();
  router.navigate('post/add', {trigger:true});
});

$("#brand").on('click', function (e) {
  e.preventDefault();
  router.navigate('/', {trigger: true});
})

module.exports = router;