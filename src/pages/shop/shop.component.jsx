import React from 'react';
import { Route } from "react-router-dom";

import CollectionPage from '../collection/collection.component';
import CollectoinOverview from '../../components/collections-overview/collections-overview.component';

import ProgressBar from '../../components/progress-bar/progressBar.component';

const ShopPage = ({ match }) => (
            <div className='shop-page'>
                <ProgressBar/>
                <Route exact path={`${match.path}`} component={CollectoinOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
    );

export default ShopPage;