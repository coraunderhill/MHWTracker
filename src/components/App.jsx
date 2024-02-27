// Import modules
import { useReducer } from 'react';
import { materialReducer, selectionReducer } from '../js/reducers.js';

// Import components
import ArmorList from './ArmorList.jsx';
import Requirements from './Requirements.jsx';

/**
 * Main application container
 */
const App = () => {

  // Set the material and selection states and dispatchers
  const [materials, materialDispatch] = useReducer(materialReducer, []);
  const [selected, selectionDispatch] = useReducer(selectionReducer, []);

  return (
    <div id='container'>
      <ul id='armor'>
        <ArmorList
          materialsDispatcher={materialDispatch}
          selections={selected}
          selectionDispatcher={selectionDispatch}
        />
      </ul>
      <Requirements items={materials} />
    </div>
  );

}

export default App;
