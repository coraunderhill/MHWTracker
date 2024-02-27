/**
 * Reducer for counting required materials
 * @param {Array} state         Current component state
 * @param {Object} action       User action object
 * @param {string} action.type  `add` or `delete`
 * @param {string} action.value Array of material objects
 * @returns {Array} New component state
 */
export const materialReducer = (state, action) => {

  // Pull out the action type and value
  const { type, value } = action;

  // Add the materials to the current state
  if (type == 'add') {

    /** Array of materials to add to the state */
    const additions = [];

    /** Copy of the current state */
    let newState = state;

    // Iterate over the material objects array
    value.map(material => {

      // If the material is found in the current state
      if (state.find(item => item.name === material.name)) {

        /** Single-index array of matched material */
        const result = newState.filter(item => item.name === material.name);

        // Remote the matched material from the current state
        newState = newState.filter(item => item.name !== material.name);

        // Add the matched material to the additions array with an updated quantity
        additions.push({
          name: material.name,
          quantity: material.quantity + result[0].quantity,
        })

      }

      // If the material is not in the current state, add it to the additions array
      else additions.push(material);

    });

    // Merge the newState and additions arrays
    newState = [...newState, ...additions];

    // Sort newState by material names
    newState.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    // Return the newState
    return newState;

  }

  // Remove the materials from the current state
  else if (type == 'delete') {

    /** Copy of the current state */
    let newState = state;

    // Iterate over the material objects array
    value.map(material => {

      /** Single-index array of matched material */
      const result = newState.filter(item => item.name === material.name);

      /** Difference between the state quantity and the material object  */
      const difference = result[0].quantity - material.quantity;

      // Remote the matched material from the current state
      newState = newState.filter(item => item.name !== material.name);

      // If the material is still required, add the material back into the updated state
      if (difference !== 0) newState = [...newState, {
        name: material.name,
        quantity: difference,
      }];

    });

    // Sort newState by material names
    newState.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

    // Return the updated state
    return newState;
  }

  // Throw an error
  else throw Error('No case found for ' + type);

}

/**
 * Reducer for handling array state changes
 * @param {Array} state         Current component state
 * @param {Object} action       User action object
 * @param {string} action.type  `add` or `delete`
 * @param {string} action.value Value of the selected item
 * @returns {Array} New component state
 */
export const selectionReducer = (state, action) => {

  // Pull out the action type and value
  const { type, value } = action;

  // Create a new state
  let newState = [];

  // Add a selection to the current state
  if (type == 'add') newState =  [...state, value];

  // Remove a selection from the current state
  else if (type == 'delete') newState = state.filter(item => item !== value );

  // Throw an error
  else throw Error('Invalid action type: ' + type);

  // Return the updated state
  return newState;
}
