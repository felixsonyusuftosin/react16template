
/**
 * @file COMPONENTNAME-  Define COMPONENTNAME components here
 */
// TODO !IMPORTANT Before using this template PLEASE REPLACE COMPONENTNAME With intended
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
const initialComponentState = { }

export class COMPONENTNAME extends React.PureComponent {

/** *******************************/
/* Static Properties
 * { Static getDerivedStateFromProps}
/** *******************************/

/**
 * Static function called on every rerender
 * No matter what causes rerender
 * @param { Object } - nextProps
 * @param { Object } - PrevState
 * @return {Object } - representation of the state to return
 */
static getDerivedStateFromProps(nextProps, PrevState) {
        // Define initial state here
        let initialState = {};

        // return initialState after it has being changed
        return initialState;
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
                // Access the current url state via React Router prop
                const { match } = this.props;
                this.setState(()=>{
                    return { 
                        // Set state stuffs you want here 
                    };
                });
        // DO something
    }

/**
 * @function getSnapshotBeforeUpdate
 * Runs just before component renders or rerenders as the case may be 
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
 * be unmounted perform all clean up process here
 */
    componentWillUnmount() {
        // Dosomething
    }

/**
 * @function componentDIdCatch - render a fallback ui for errors
 * @param { any } error - the error object
 * @param { any } info - the info Object
 */
    componentDidCatch(error, info) {
        // Set the state to display error fallBack UI
        this.setState({hasError: true});
    } 

/**
 * @function render - Display  ReactDom components here
 * NB ! Try to minimmize witing  non DOM  Logic here 
 */
    render() {
        // Define initial state variables here
        const {hasError, loading} = this.state;
        if (hasError) {
            /** *******************************
            /* Display Error page if it has an error 
            ********************************/
            return (
                <div/>
            );
        } else if (loading) {
            /** *******************************
            /* Display if loading
            ********************************/

            return <div/>;
        } else {
            /** *******************************
            /* Display When component is ready
            ********************************/
            return (
             <div/>
           
            );
        }

    }
}
/** *******************************
 * {defineDefaultProps}
 *******************************/
// Define default Props here
COMPONENTNAME.defualtProps = () => {
    return null;
};
COMPONENTNAME.propTypes = {
    styles: Proptypes.object,
    match: Proptypes.object

};
