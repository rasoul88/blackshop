import React, {lazy, Suspense, useEffect} from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

// import CollectionPage from '../collection/collection.component';
// import CollectoinOverview from '../../components/collections-overview/collections-overview.component';

import ProgressBar from '../../components/progress-bar/progressBar.component';
import Spinner from '../../components/spinner/spinner.component'

import { fetchCollectiosStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPage = lazy(() => import('../collection/collection.component'));
const CollectoinOverview = lazy(() => import('../../components/collections-overview/collections-overview.component'))
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectoinOverview);

const ShopPage = ({dispatch, match, isCollectionFetching, isCollectionLoaded}) => {

    useEffect(() => {
        dispatch(fetchCollectiosStart())
    }, [dispatch])

    return(
        <div >
            <ProgressBar/>
            <Suspense fallback={<Spinner/>}>
                <Route exact path={`${match.path}`} 
                    render={(props) => (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
            </Suspense>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded : selectIsCollectionLoaded
})

export default connect(mapStateToProps)(ShopPage);