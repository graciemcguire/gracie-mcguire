import React from 'react';
import { MainSideDiv, SideDiv, SideTitle } from '../StyledComponents/SidePanelStyle';

const SidePanel = (props) => {

    const renderPanel = () => {
        if (props.name === 'Hello!'){
          return (  
            <MainSideDiv>
                <SideTitle>{ props.name }</SideTitle>
            </MainSideDiv>)
        } else {
            return (
             <SideDiv>
                <SideTitle>{ props.name }</SideTitle>
             </SideDiv>)
        }
    }


    return ( 
        <>
        { renderPanel() }
        </>
     );
}
 
export default SidePanel;