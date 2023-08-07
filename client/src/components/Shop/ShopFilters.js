import '../../styles/ShopFilters.css';
import { v4 as uuidv4 } from 'uuid';

const filterOptions = {
  check: 0,
  range: 1
}

const ShopFilter = ({ filters, type }) => {
  return (
    <ul className='shop-filters'>
      {
        !filters ? null :
        filters.map((filter, index) => {
            const filterName = `${filter}-${index}`;
            const filterNameUnique = `${filterName}-${uuidv4()}`;
            
            return <li className='shop-filter' key={index}>
              <input type='checkbox' name={filterName} id={filterNameUnique} />
              <label for={filterNameUnique}>{filter}</label>
            </li>
          })
      }
    </ul>
  );
}

export default ShopFilter;
export { ShopFilter, filterOptions };