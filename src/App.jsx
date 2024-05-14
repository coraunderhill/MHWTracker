// Import stylesheet
import './common/main.scss';

// Import modules
import { useReducer } from 'react';
import { materialReducer, selectionReducer } from './common/reducers.js';

// Import components
import ArmorList from './armor/ArmorList.jsx';
import Requirements from './armor/Requirements.jsx';
import { sets } from './armor/sets/index.js';

/**
 * Main application container
 */
const App = () => {

  // Set the material and selection states and dispatchers
  const [materials, materialDispatch] = useReducer(materialReducer, []);
  const [selected, selectionDispatch] = useReducer(selectionReducer, []);

  return (
    <div id='container'>
      <div id='armor-list'>
        <ArmorList
          materialsDispatcher={materialDispatch}
          selections={selected}
          selectionDispatcher={selectionDispatch}
        />
      </div>
      <Requirements items={materials} />
    </div>
  );

}

export default App;
