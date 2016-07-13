import React from 'react';
import ReactDOM from 'react-dom';


export class StatusBox extends React.Component {

  constructor() {
    super();
    this.state = { data: [] }
  }

  handleStatusSubmit(status){
    var statuses = this.state.data;
    var newStatuses = statuses.concat([status]);
    this.setState({data: newStatuses});
  }

  render() {
    return (
    <div className="status-wrapper">
      <h3>Post Your Status here!</h3>
      <StatusArea onStatusSubmit={this.handleStatusSubmit.bind(this)} />

      <StautusList data={this.state.data} />
    </div>
  );
 }
}

export class StatusArea extends React.Component {

  constructor(){
    super();
    this.state = {defaultValue : "hello!"};
  }

  handleSubmit(e) {
    e.preventDefault();

    let message = ReactDOM.findDOMNode(this.refs.message).value.trim();
    let author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    if (!message || !author) {
      return;
    }

    this.props.onStatusSubmit({author: author, message: message});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.message).value = '';
    return;
  }

  render() {
    return (

<form action="#" method="post" role="form" className="facebook-share-box" onSubmit={this.handleSubmit.bind(this)}>
  <div className="share">
    <div className="panel panel-default">
      <div className="panel-heading"><i className="fa fa-file"></i> Update Status</div>
      <div className="panel-body">
      <div className="form-group">
        <input ref ="author" type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="form-group">
      <textarea ref="message" cols="40" rows="10" className="form-control"  placeholder="What's on your mind ?" />
      </div>

      </div>
      <div className="panel-footer">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
            <input type="submit" name="submit" value="Post" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>

    );
  }
}


class StautusList extends React.Component {
  render() {
    let statusNodes = this.props.data.map((status, key) => {
      return (<li key={key} className="list-group-item">
        <h4 className="list-group-item-heading">{status.author}</h4>
        <p className="list-group-item-text">{status.message}</p></li>)
    });
    return (<div className="list-group">
    {statusNodes}
    </div>)
  }
}
