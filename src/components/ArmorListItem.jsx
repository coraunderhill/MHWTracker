// Import modules
import clean from '../js/sanitize.js';

// Import components
import Material from './Material.jsx';

/**
 * List item containing armor piece
 * @param {Object} item       JSON object containing item information
 * @param {Function} onSelect Function to trigger on item selection
 * @param {boolean} selected  Boolean representing selection state
 * @returns {React.JSX.Element}
 */
const ArmorListItem = ({ item, onSelect, selected }) => {

  /** Sanitized item name for CSS classes */
  const itemName = clean(item.name);

  /** Sanitized armor set name for CSS classes */
  const setName = clean(item.set);

  /** Set name with-or-without "selected" based on passed state */
  const className = !selected ? setName : setName.concat(' selected')

  return (
    <li
      key={itemName}
      className={className}
      onClick={onSelect}
    >
      <div className='name'>{item.name}</div>
      <div className='materials'>
        {item.materials.map(material => {

          return (
            <Material
              key={material.name}
              name={material.name}
              quantity={material.quantity}
            />
          );

        })}
      </div>
    </li>
  );

}

export default ArmorListItem;
