import React from 'react';
import { addFeature } from "../actions/index"
import { connect } from "react-redux";

const AdditionalFeature = props => {

  //component allows to add to car features on button click 
  // think of calling an action function as capturing water when it pours out of a funnel and then pouring it back in at the top

  return (
    <li>

      <button className="button"
        onClick={() => {
          props.addFeature(props.feature)
        }}>Add
      </button>

      {props.feature.name} + {props.feature.price}

    </li>
  );
};

// connect is essential here because it allows access to the addFeature function from actions
// addFeature is how we "swim upstream" with the state in the component

export default connect(null, { addFeature })(AdditionalFeature);