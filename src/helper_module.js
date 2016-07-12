import React from 'react';

// ES6 class syntax; 'export' makes this symbol public
export class StatusArea extends React.Component {

  constructor(){
    super();
    this.state = {defaultValue : "hello!"};
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (

<form action="#" method="post" role="form" className="facebook-share-box" onSubmit={this.handleSubmit.bind(this)}>
  <div className="share">
    <div className="panel panel-default">
      <div className="panel-heading"><i className="fa fa-file"></i> Update Status</div>
      <div className="panel-body">
        <div>
        <textarea name="message" cols="40" rows="10" id="status_message" className="form-control message"  placeholder="What's on your mind ?" />
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

