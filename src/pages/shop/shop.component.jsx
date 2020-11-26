import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import CollectionPage from '../collection/collection.component';
import CollectoinOverview from '../../components/collections-overview/collections-overview.component';

import ProgressBar from '../../components/progress-bar/progressBar.component';

import { fetchCollectiosStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectoinOverview);

class ShopPage extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchCollectiosStart())
    }

    render(){
        const {match, isCollectionFetching, isCollectionLoaded} = this.props; 
        return(
            <div >
                <ProgressBar/>
                <Route exact path={`${match.path}`} 
                    render={(props) => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})

export default connect(mapStateToProps)(ShopPage);