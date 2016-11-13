import React from 'react';
import {Link} from 'react-router';

export default class results extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.data
  }

  render() {
    var data = this.state

    return (
      <div classNameName="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="panel panel-success">
              <div className="panel-body">
                <div className="media">
                  <div className="media-left">
                    <Link to={"/recipes/" + data.name}>
                      <img className="media-object result-pic" src="img/brownie-egg.jpg" alt="brownie-egg"></img>
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      <Link to={"/recipes/" + data.name}>{data.name}</Link>
                    </h4>
                    {data.description}
                  </div>
                  <div className="media-right recipe-vote">
                    <a href="#"><span className="glyphicon glyphicon-arrow-up"></span></a>
                    <div>{data.chefPoints}</div>
                    <a href="#"><span className="glyphicon glyphicon-arrow-down"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-2"></div>
      </div>
    </div>
    )
  }
}
