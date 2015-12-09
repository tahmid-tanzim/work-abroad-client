import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const PureHome = React.createClass({
    mixins: [PureRenderMixin],
    render() {
        return <div className="hello">
            <h1>Hello! Welcome to Work Abroad.</h1>
        </div>;
    }
});

function mapStateToProps(state){
    return {};
}

export const Home = connect(mapStateToProps, actionCreators)(PureHome);