import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import '../css/wines.css'
import { winePlaceholder } from '../img/wine-placeholder.png'

import * as actionCreators from '../actions/wineActions';

export class Wines extends React.PureComponent<any, any> {
    public constructor(props) {
        super(props)
        this.state = {

        }
    }

    public componentDidMount() {
        this.props.actions.fetchWines();
        console.log('this.props.wines', this.props.wines)
    }

    public render() {
        return (
            <div className="wines">
                <h1 className="wines__title">Wine List</h1>
                <div className="wine__select__wrapper">
                    <select className="wine__select__year">
                        <option value="grapefruit">Select Year</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <ul className="wines__list">
                    { this.props.wines
                        .map((wine: any) => {
                            let meanRating = 0;
                            if (wine.ratings.length > 0) {
                                const sum = wine.ratings.reduce((accumulator: number, current: object) => {
                                    return accumulator + current['stars']
                                }, 0)
                                meanRating = Math.floor(sum / wine.ratings.length)
                            }
                            return <li key={wine.name} className="wine">
                                <img className="wine__image" src={winePlaceholder} alt="wine-picture" />
                                <div>
                                    <div className="wine__name">
                                        <span>{wine.name}, </span>
                                        <span>{wine.vintage}</span>
                                    </div>
                                    <div className="wine__region">{wine.region}</div>
                                    <div>RATING!!! { meanRating } ({wine.ratings.length})</div>
                                </div>
                            </li>;
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
