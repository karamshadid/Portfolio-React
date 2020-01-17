import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 
export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton  style={{width: 40}} ToggledStyle={{right: 30}}  ShowAtPosition={600}/>
                
            </div>
        );
    }
}
