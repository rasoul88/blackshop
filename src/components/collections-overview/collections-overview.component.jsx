import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollectionForPreview } from '../../redux/shop/shop.selectors';

import { CollectionOverviewContainer } from "./collection-overview.styles";

const collectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=> (
                <CollectionPreview key={id} {...otherCollectionProps }/>
            ))
        }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
})

export default connect(mapStateToProps)(collectionsOverview);
 