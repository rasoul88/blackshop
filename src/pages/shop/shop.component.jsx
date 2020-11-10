import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import CollectionPage from '../collection/collection.component';
import CollectoinOverview from '../../components/collections-overview/collections-overview.component';

import ProgressBar from '../../components/progress-bar/progressBar.component';

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectoinOverview);

class ShopPage extends React.Component{
    
    state = { 
       Loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {dispatch} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const collections = await convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateCollections(collections));
            this.setState({ Loading:false });
        })
    }
    
    render(){
        const {match} = this.props;
        const {Loading} = this.state;
        return(
            <div >
                <ProgressBar/>
                <Route exact path={`${match.path}`} 
                    render={(props) => (<CollectionOverviewWithSpinner isLoading={Loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => (<CollectionPageWithSpinner isLoading={Loading} {...props} />)} />
            </div>
        );
    }
}

export default connect()(ShopPage);