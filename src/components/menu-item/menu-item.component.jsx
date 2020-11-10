import React from 'react';
import {withRouter} from 'react-router-dom';

import { ContentContainer,
         BackgroundImage,
         MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
        
            <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
                <BackgroundImage  
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                <ContentContainer >
                    <h1>{title.toUpperCase()}</h1>
                    <span>SHOP NOW</span>
                </ContentContainer>
            </MenuItemContainer>
    
)
export default withRouter(MenuItem);
