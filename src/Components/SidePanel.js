import React from 'react';
import { SideDiv, SideTitle } from '../StyledComponents/SidePanelStyle';

const SidePanel = (props) => {
    return ( 
        <SideDiv>
            <SideTitle>{ props.name }</SideTitle>
        </SideDiv>
     );
}
 
export default SidePanel;