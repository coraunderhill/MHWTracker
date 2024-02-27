// Import modules
import clean from '../js/sanitize';

/**
 * Displays a material divider displaying the name and quantity
 * @param {string} name     Material name
 * @param {number} quantity Quantity required
 * @returns {React.JSX.Element}
 */
const Material = ({ name, quantity }) => {

  /** Sanitized material name for CSS classes */
  const cleanName = clean(name);

  return (
    <div className={cleanName}>
      {name}
      &nbsp;
      <span className='quantity'>x{quantity}</span>
    </div>
  );

}

export default Material;
