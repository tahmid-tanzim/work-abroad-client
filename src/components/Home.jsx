import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actionCreators from '../actions/application';

export const PureHome = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return <div className="hello">
            <h1>Hello! Welcome to Work Abroad.</h1>
            <Link to="/members" className="btn btn-primary" type="button">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span> Admin Panel
            </Link>
        </div>;
    }
});

function mapStateToProps(state) {
    return {};
}

export const Home = connect(mapStateToProps, actionCreators)(PureHome);