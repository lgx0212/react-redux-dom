import React from "react";
import { connect } from "react-redux";
const Dom1 = (props) => {
    const add = ()=>{
        props.sendAction()
    }
  return (
    <div>
      <h2>Dom1</h2>
      <button onClick={add}>加一</button>
    </div>
  );
};
const mapDispatchToProps = (dispatch)=>{
    return {
        sendAction:()=>{
            dispatch({
                type:'add'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Dom1);
