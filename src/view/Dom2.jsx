import React from 'react'
import { connect } from "react-redux";

const Dom2 = (props)=> {
    console.log(props)

  return (
    <div>
        <h2>Dom2</h2>
        <div>{props.reducer.value}</div>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps)(Dom2)
