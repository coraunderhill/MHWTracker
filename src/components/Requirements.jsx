// Import modules
import clean from '../js/sanitize';

/**
 * Shows required crafting materials
 * @returns {React.JSX.Element}
 */
const Requirements = ({ items }) => {

  return (
    <div id='requirements-container'>
      <div id='requirements'>
        <h2>Material Requirements</h2>
        <ul>
          {items.map(material => {

            return (
              <li key={material.name} className={clean(material.name)}>
                {material.name}
                &nbsp;
                <span className='quantity'>x{material.quantity}</span>
              </li>
            );

          })}
        </ul>
      </div>
    </div>
  );

}

export default Requirements;
