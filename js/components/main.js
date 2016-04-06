import React from 'react';

export default React.createClass({
  _handleRoute: function (e) {
    e.preventDefault();
    var href = e.target.parentNode.getAttribute('href').substr(1);
    this.props.router.navigate(href, {trigger:true});
  },
  render: function () {
    var _this = this;
    return (
      <ul id="main">
        {this.props.data.map(function(obj, i){
          return (
            <li key={obj.objectId}>
              <a onClick={_this._handleRoute} href={"/detail/" + obj.objectId}>
                <img src={obj.url} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
})