import '../../styles/ShopPage.css';
import '../../styles/Card.css';
import { ShopFilter, filterOptions } from './ShopFilters';

const ShopPage = () => {
  return (
    <div id='shop'>
      <div className='filters'>
        <ShopFilter type={filterOptions.check} filters={[
          'Cat 1',
          'Cat 2',
          'Cat 3'
        ]} />
      </div>
      
      <div className='items'>
        
      </div>
    </div>
  );
}

export default ShopPage;