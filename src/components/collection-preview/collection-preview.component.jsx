import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'
import MoreButton from "../more-button/more-button.component";

import { Preview, Title, CollectionPreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({title, items, history, match, routeName }) => (
    <CollectionPreviewContainer >
        <Title onClick={() => history.push(`${match.path}/${routeName}`)} >{title.toUpperCase()}</Title>
        <Preview>
            {
              items.filter((item,idx) => idx < 4).map((item) => (
                  <CollectionItem key={item.id} item={item}/>
              ))  
            }
        </Preview>
        <MoreButton onClick={() => history.push(`${match.path}/${routeName}`)}> more &rarr; </MoreButton>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);