
/**
 * @file COMPONENTNAME-  Define COMPONENTNAME components here
 */
/* TODO: !!!IMPORTANT Before using this template PLEASE REPLACE COMPONENTNAME with intended */
// name Of the component 

/** *******************************/
/** Third party imports */
/** **********************************/
import React from 'react';
import Proptypes from 'prop-types';

/** *******************************/
/** Local Imports */
/** **********************************/
// NA

/** *******************************/
/** GLOBAL CONSTANTS */
/** **********************************/

// Set default state here 
const initialComponentState = {}

export class COMPONENTNAME extends React.PureComponent {

    /** *******************************/
    /* Static Properties
     * { Static getDerivedStateFromProps}
     * { Static defaultProps }
    /** *******************************/

    /**
     * Static function called on every re-render
     * No matter what causes re-render
     * @param { Object } - nextProps
     * @param { Object } - PrevState
     * @return { Object } - representation of the state to return
     */
    static getDerivedStateFromProps(nextProps, PrevState) {
        // Define initial state here
        let initialState = {};

        // return initialState after it has been changed
        return initialState;
    }
    // Set default props here
    static defaultProps() {
        let defaultprops = {};
        return defaultprops;
    }

    /** *******************************
     * Life Cycle methods - Displayed as they are called
     * { constructor }
     * { componentDidlMount }
     * { getSnapshotBeforeUpdate }
     * { componentDidUpdate }
     * { componentWillUnmount }
     * { componentDidCatch }
     * { componentWillUnmount }
     * { render }
    /** *******************************/

    /**
     * @function constructor
     * set initial state here
     * @param { Object } props
     */
    constructor(props) {
        super(props);
        this.state = initialComponentState;
    }

    /**
     * @function componentDidlMount called just after a component is mounted
     */
    componentDidMount() {
        // Access the current url state via React Router match prop
        const { match } = this.props;
        this.setState(() => {
            return {
                // Set state stuffs you want here 
            };
        });
        // DO something
    }

    /**
     * @function getSnapshotBeforeUpdate
     * Runs just before component renders or re-renders as the case may be 
     * Current props (that will render) is available via this.props
     * @param { Object } prevProps- Previous props
     * @param { Object }prevState - Previous State
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Do something or
        return null;
    }

    /**
     * @function componentDidUpdate - called any time component state is changed or 
     * component needs to rerender 
     * @param { Object } prevProps- Previous props
     * @param { Object }prevState - Previous State
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        const nextState = this.state;
        // Dosomething

    }

    /**
     * @function componentWillUnmount  - called When component is about to
     * be unmounted. Perform all clean up processes here
     */
    componentWillUnmount() {
        // Dosomething
    }

    /**
     * @function componentDidCatch - render a fallback ui for errors
     * @param { any } error - the error object
     * @param { any } info - the info Object
     */
    componentDidCatch(error, info) {
        // Set the state to display error fall back UI
        this.setState({ hasError: true });
    }

    /**
     * @function someEventHandler - use ES6 arrow function to automatically bind this and escape having to bind event handlers in the constructor
     * @param {Event} event - an event called from interaction with a UI component having this as its handler
     * @memberof COMPONENTNAME
     */
    someEventHandler = (event) => {

    }

    /**
     * @function render - Display  ReactDOM components here
     * NB ! Try to minimize writing  non-DOM  Logic here 
     */
    render() {
        // Define initial state variables here
        const { hasError, loading } = this.state;
        if (hasError) {
            /** *******************************
            /* Display Error page if it has an error 
            ********************************/
            return (
                <div />
            );
        } else if (loading) {
            /** *******************************
            /* Display if loading
            ********************************/

            return <div />;
        } else {
            /** *******************************
            /* Display when component is ready
            ********************************/
            return (
                <div />

            );
        }

    }
}
/** *******************************
 * {defineDefaultProps}
 *******************************/
// Define default Props here
COMPONENTNAME.defaultProps = () => {
    return null;
};
COMPONENTNAME.propTypes = {
    styles: Proptypes.object,
    match: Proptypes.object

};
