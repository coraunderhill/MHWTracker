// Import components
import Material from './Material.jsx';

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
