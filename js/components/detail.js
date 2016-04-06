import React from 'react';

export default React.createClass({
  _handleRoute: function (e) {
    e.preventDefault();
    var href = e.target.getAttribute("href").substr(1);
    this.props.router.navigate(href, {trigger:true});
  },
  render: function () {
    return (
      <div className="detail">
        <img src={this.props.data.url} />
        <ul>
          <li><strong>Title:</strong> {this.props.data.title}</li>
          <li><strong>Description:</strong> {this.props.data.description}</li>
          <li><a onClick={this._handleRoute} href={"/post/" + this.props.data.objectId + "/edit"}>Edit</a></li>
        </ul>
      </div>
    )
  }
})