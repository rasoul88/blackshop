import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors';
import ErrorBoundary from '../error-bounndary/error-boundary.component';

import { CollectionOverviewContainer } from "./collections-overview.styles";

const collectionsOverview = ({ collections }) => {
    if(collections.length >= 1){
        console.log(collections)
        return(
            <CollectionOverviewContainer className='collections-overview'>
                {
                    collections.map(({id, ...otherCollectionProps})=> (
                        <CollectionPreview key={id} {...otherCollectionProps }/>
                    ))
                }
            </CollectionOverviewContainer>
        )
    }
    return (<ErrorBoundary/>)
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
})

export default connect(mapStateToProps)(collectionsOverview);
 