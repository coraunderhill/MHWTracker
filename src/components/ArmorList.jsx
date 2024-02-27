// Import components
import ArmorListItem from './ArmorListItem.jsx';

// Import armor sets
import sets from '../json/index.js';

/**
 * List containing armor sets
 * @param {Function} materialsDispatcher  React dispatcher for materials
 * @param {Array} selections              Array of selected items
 * @param {Function} selectionDispatcher  React disaptcher for item selection
 * @returns {React.JSX.Element}
 */
const ArmorList = ({ materialsDispatcher, selections, selectionDispatcher }) => {

  /**
   * Checks if the passed item is in the current state
   * @param {string} name Name of the item
   * @returns {boolean}
   */
  const isSelected = name => selections.includes(name);

  /**
   * Toggle list item selection
   * @param {string} name     Name of the selected item
   * @param {Array} materials Crafting materials
   */
  const toggle = (name, materials) => {

    // Update the materials state
    materialsDispatcher({
      type: isSelected(name) ? 'delete' : 'add',
      value: materials,
    });

    // Update the selections state
    selectionDispatcher({
      type: isSelected(name) ? 'delete' : 'add',
      value: name,
    });

  }

  return sets.map(item => {

    return (
      <ArmorListItem
        key={item.name}
        item={item}
        onSelect={() => toggle(item.name, item.materials)}
        selected={isSelected(item.name)}
      />
    );

  });

}

export default ArmorList;
