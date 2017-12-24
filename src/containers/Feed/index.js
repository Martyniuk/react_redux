//Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { object, bool, array } from 'prop-types';
//Instruments
import feedActions from 'actions/feed';
import { getUsers } from '../../selectors/feed';
import { uid } from '../../helpers';
//Components
import Spinner from '../../components/Spinner';
//import Catcher from 'components/Catcher';
import Wall from '../../components/Wall';

class Feed extends Component {
    static propTypes = {
        actions:      object.isRequired,
        feedFetching: bool.isRequired,
        users:        array.isRequired,
    };

    render () {
        const { feedFetching, users, actions } = this.props;
        //TODO: delete commented stuff
        //console.log(`users ---> ${users}`); // ----> undefined
        //console.log(`actions ---> `, actions);

        return [
            <Spinner key = { '1' } spin = { feedFetching } />,
            <Wall
                actions = { actions }
                key = { '2' }
                users = { users }
            />
        ];
    }
}

const mapStateToProps = ({ ui, feed }) => {
    return {
        feedFetching: ui.get('feedFetching'),
        users:        feed.toJS(), // TODO: with reserelect gives undefined here?
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(feedActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
