// Import modules
import clean from '../common/sanitize.js';

// Import components
import Material from '../material/Material.jsx';

/**
 * List item containing armor piece
 * @param {Object} props
 * @param {Object} props.item       Armor item object
 * @param {Function} props.onSelect Function to trigger on item selection
 * @param {boolean} props.selected  Boolean representing selection state
 * @returns {React.JSX.Element}
 */
const ArmorListItem = ({ item, onSelect, selected }) => {

  /** Sanitized item name for CSS classes */
  const itemName = clean(item.name);

  /** Rarity tier for CSS classes */
  const rarity = 'tier-' + item.rarity;

  /** Set name with-or-without "selected" based on passed state */
  const className = !selected ? rarity : rarity.concat(' selected')

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
