import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/wineActions';

export class Wines extends React.PureComponent<any, any> {
    public componentDidMount() {
        this.props.actions.fetchWines();
        console.log('this.props.wines', this.props.wines)
    }

    public render() {
        return (
            <div className="wines">
                <h1 className="wines__title">Wine List</h1>
                <ul className="wines__list">
                    { this.props.wines
                        .map((wine: any) => {
                            return <li key={wine.name} className="wine">{wine.name}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        ...state.wines
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
