import React from 'react';
import Post from '../models/post';

export default React.createClass({
  getDefaultProps: function () {
    return {
      data: {
        objectId: '',
        title: '',
        description: '',
        url: ''
      }
    }
  },
  getInitialState: function () {
    return {
      title: this.props.data.title,
      url: this.props.data.url,
      description: this.props.data.description
    }
  },
  _handleChange: function (e) {
    this.setState({
      title: document.getElementById('title').value,
      url: document.getElementById('url').value,
      description: document.getElementById('description').value
    })
  },
  _handleSubmit: function (e) {
    e.preventDefault();
    var _this = this;
    var post = new Post();
    if ($("#objectId").length) {
      post.set("objectId", $("#objectId").val());
    }
    if ($("#title").length) {
      post.set("title", $("#title").val());
    }
    if ($("#url").length) {
      post.set("url", $("#url").val());
    }
    if ($("#description").length) {
      post.set("description", $("#description").val());
    }
    post.save({}, {
      success: function (rsp) {
        console.log('success');
        _this.props.router.navigate("/", {trigger: true});
      }
    })
  },
  render: function () {
    return (
      <form id="detailForm" onSubmit={this._handleSubmit}>
        {this.props.data.objectId ? <input id="objectId" type="hidden" value={this.props.data.objectId} /> : ''}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input onChange={this._handleChange} type="text" className="form-control" id="title" placeholder="Title" value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this._handleChange} type="text" className="form-control" id="url" placeholder="Image URL" value={this.state.url} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea value={this.state.description} onChange={this._handleChange} id="description" className="form-control" rows="3" placeholder="Description">
          </textarea>
        </div>
        <button className="btn btn-default" type="submit">Submit</button>
      </form>
    )
  }
})