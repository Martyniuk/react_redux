//Core
import React, { Component } from 'react';
import { object } from 'prop-types';
//Instruments
import Styles from './styles.scss';

export default class Catcher extends Component {
    static propTypes = {
        children: object.isRequired
    };
    state = {
        error: false
    };

    componentDidCatch (error, stack) {
        console.log(`ERROR: -> ${error.message}`);
        console.log(`STACKTRACE: -> ${stack.componentStack}`);

        this.setState(() => ({
            error: false
        }));
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            return (
                <section className = { Styles.catcher }>
                    <span>A mysterious 👽 &nbsp;error 📛 &nbsp;occured.</span>
                    <p>
                        Our space 🛰 &nbsp;engineers strike team 👩🏼‍🚀 👨🏼‍🚀
                        &nbsp;is already working 🚀 &nbsp;in order to fix that
                        for you!
                    </p>
                </section>
            );
        }

        return children;
    }
}
