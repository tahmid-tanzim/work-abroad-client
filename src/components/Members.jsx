import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/application';

export const PureMembers = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return <div className="members">
            <h1>Members</h1>

            <div className="table-container table-responsive">
                <table className="table table-hover table-condensed table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Member ID</th>
                        <th>Applying Trade</th>
                        <th>Name</th>
                        <th>Mobile Phone</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"><span className="badge">1</span></th>
                        <td><span className="label label-default">B-0328-15</span></td>
                        <td>Welder GTAW / TIG</td>
                        <td>NAHID HASAN</td>
                        <td>+8801719468922</td>
                        <td>
                        <span className="pull-right">
                            <a href="#"
                               className="btn btn-success btn-sm"
                               target="_blank"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </a>
                            <a href="#"
                               className="btn btn-info btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                            </a>
                            <button className="btn btn-danger btn-sm"
                                    value=""><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </span>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><span className="badge">2</span></th>
                        <td><span className="label label-default">B-0326-15</span></td>
                        <td>Distribution Engineering Expert</td>
                        <td>Sanjoy Bhorttacharge</td>
                        <td>+8801914908882</td>
                        <td>
                        <span className="pull-right">
                            <a href="#"
                               className="btn btn-success btn-sm"
                               target="_blank"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </a>
                            <a href="#"
                               className="btn btn-info btn-sm"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                            </a>
                            <button className="btn btn-danger btn-sm"
                                    value=""><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    }
});

function mapStateToProps(state) {
    return {};
}

export const Members = connect(mapStateToProps, actionCreators)(PureMembers);
//<th width="2%"></th>
//<th width="10%" style="text-align: center;">Member ID</th>
//<th width="30%" style="text-align: center;">Applying Trade</th>
//<th width="30%" style="text-align: center;">Name</th>
//<th width="8%" style="text-align: center;">Mobile Phone</th>
//<th width="20%"></th>