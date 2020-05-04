import React, { FC, memo } from 'react';
import { useProductList } from './utils';
import './styles.scss';

export const ProductListsComponent: FC = () => {
  const { handleGetIds, ids } = useProductList();
  return (
    <div className="productList">
      <h3>PRODUCTS {process.env.REACT_APP_MF_CODE}</h3>
      <div className="topGroup">
        <button className="button" onClick={handleGetIds} type="button">
          Get Ids
        </button>
      </div>
      {ids && (
        <pre>
          <code>{JSON.stringify(ids, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

const ProductLists = memo(ProductListsComponent);
ProductLists.displayName = 'ProductLists';
export default ProductLists;
