// Import components
import Material from './Material.jsx';

/**
 * Removes the scrollbar from the materials requirements divider
 * @returns {number} The width of the scrollbar as a negative absolute or `0` if not using Windows
 */
const scrollbarFix = () => {

  if (!navigator.userAgent.includes('Windows')) { return 0; }

  /** Dummy element */
  let e = document.createElement('div');

  // Set some properties so we end up with a tiny invisble box one scrollbar wide
  e.style.cssText = 'overflow: scroll; position: absolute; visibility: hidden;';

  // Add the invisble div to the end of the body
  document.body.appendChild(e);

  /**
   * Width the browser's scrollbar
   * @type {number}
   */
  const width = e.offsetWidth - e.clientWidth;

  // Remove the dummy element
  e.remove();

  return -Math.abs(width);

}

/**
 * Shows required crafting materials
 * @param {Object} props
 * @param {Array.<Object>} props.items  Materials list
 * @returns {React.JSX.Element}
 */
const Requirements = ({ items }) => {

  return (
    <div id='requirements-container'>
      <div id='requirements' style={{right: scrollbarFix()}}>
        <h2>Material Requirements</h2>
        <ul>
          {items.map(material => {

            return (
              <Material
                key={material.name}
                name={material.name}
                quantity={material.quantity}
              />
            );

          })}
        </ul>
      </div>
    </div>
  );

}

export default Requirements;
