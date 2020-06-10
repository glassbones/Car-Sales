import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions/index"

//component allows to remove items onClick that have been added to the "Added features:" section
// think of calling an action function as capturing water when it pours out of a funnel and then pouring it back in at the top

const AddedFeature = props => {
  return (
    <li>
      <button className="button"
        onClick={() => { props.removeFeature(props.feature) }}> X
      </button>
      {props.feature.name}
    </li>
  );
};

// connect is essential here because it allows access to the removeFeature function from actions
// removeFeature is how we "swim upstream" with the state from this child component

export default connect(null, { removeFeature })(AddedFeature);
