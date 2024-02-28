// Import modules
import clean from '../js/sanitize';

/**
 * Adds comma separation to large numbers
 * @param {number} i Input number
 * @returns {string} Number as string with commas
 */
const commas = i => i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
      <span className='quantity'>x{commas(quantity)}</span>
    </div>
  );

}

export default Material;
