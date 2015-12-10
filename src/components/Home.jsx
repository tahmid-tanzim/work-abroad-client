import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/application';

export const PureHome = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return <div className="hello">
            <h1>Hello! Welcome to Work Abroad.</h1>
            <span className="label label-success"><i className="glyphicon glyphicon-phone"></i> Success</span>
        </div>;
    }
});

function mapStateToProps(state){
    return {};
}

export const Home = connect(mapStateToProps, actionCreators)(PureHome);