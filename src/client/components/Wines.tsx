import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import '../css/wines.css';
import { winePlaceholder } from '../img/wine-placeholder.png';
import StarRatings from 'react-star-ratings';

import * as actionCreators from '../actions/wineActions';

export class Wines extends React.PureComponent<any, any> {
    public constructor(props: object) {
        super(props)
        this.state = {
            wines: [],
            vintageMap: {},
            bestSeller: '',
        }
    }

    public async componentDidMount() {
        await this.props.actions.fetchWines();
        
        // Reorganize data and cache data
        const vintageMap = {}
        const wineList = this.props.wines;
        let globalBestSoldUnit = 0;
        let globalBestSeller;
        for (let i=0;i<wineList.length;i++) {
            if (wineList[i]['vintage'] in vintageMap) {
                vintageMap[wineList[i]['vintage']].wines.push(wineList[i])
            } else {
                vintageMap[wineList[i]['vintage']] = {}
                vintageMap[wineList[i]['vintage']].wines = [wineList[i]]
                vintageMap[wineList[i]['vintage']].bestUnitsSold = 0
            }
            // best seller in each year
            if (vintageMap[wineList[i]['vintage']]['bestUnitsSold'] <= wineList[i].unitsSold) {
                vintageMap[wineList[i]['vintage']]['bestUnitsSold'] = wineList[i].unitsSold
                vintageMap[wineList[i]['vintage']]['bestSeller'] = wineList[i].id
            }

            // global best seller
            if (globalBestSoldUnit <= wineList[i].unitsSold) {
                globalBestSoldUnit = wineList[i].unitsSold;
                globalBestSeller = wineList[i].id
            }
        }
        vintageMap['all'] = {
            wines: this.props.wines,
            bestSeller: globalBestSeller,
        }

        this.setState({
            vintageMap: vintageMap,
            wines: this.props.wines,
            bestSeller: globalBestSeller
        })
    }


    public handleVintageChange = (event: any) => {
        const vintage = event.target.value;
        if (vintage in this.state.vintageMap) {
            this.setState({
                wines: this.state.vintageMap[vintage].wines,
                bestSeller: this.state.vintageMap[vintage].bestSeller,
            })
        } else {
            this.setState({
                wines: this.state.vintageMap['all'].wines,
                bestSeller: this.state.vintageMap['all'].bestSeller,
            })
        }
        console.log('this.state.bestSeller', this.state.bestSeller)
    }

    public render() {
        return (
            <div className="wines">
                <h1 className="wines__title">Wine List</h1>

                <div className="wine__select__wrapper">
                    <select className="wine__select__year" onChange={this.handleVintageChange}>
                        <option value="grapefruit">Select Year</option>
                        {
                            Object.entries(this.state.vintageMap).map((entry) => {
                                if (entry[0] !== 'all') {
                                    return (<option value={entry[0]} key={entry[0]}>{entry[0]}</option>)
                                }
                            })
                        }
                    </select>
                </div>

                <ul className="wines__list">
                    { this.state.wines
                        .map((wine: any) => {
                            let meanRating = 0;
                            if (wine.ratings.length > 0) {
                                const sum = wine.ratings.reduce((accumulator: number, current: object) => {
                                    return accumulator + current['stars']
                                }, 0)
                                meanRating = sum / wine.ratings.length
                            }
                            return <li key={wine.name} className="wine">
                                <img className="wine__image" src={winePlaceholder} alt="wine-picture" />
                                <div>
                                    <div className="wine__name">
                                        <span>{wine.name}, </span>
                                        <span>{wine.vintage}</span>
                                        { this.state.bestSeller === wine.id ? (<span className="wine__best__seller">BEST SELLER</span>) : null}
                                        
                                    </div>
                                    <div className="wine__region">{wine.region}</div>
                                    <div className="wine__rating">
                                        <StarRatings
                                            rating={meanRating} 
                                            starDimension="25px"
                                            starRatedColor="orange"
                                            starSpacing="1px"
                                        /> 
                                        ({wine.ratings.length})
                                    </div>
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
