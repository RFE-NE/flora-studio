
import { useParams } from 'react-router-dom';
import {useGetProductsByIdQuery} from "../api/apiSlice.js"

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductsByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="detail-container">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.discount && (
        <p>
          Discounted Price: $
          {product.price + (product.discount / 100) * product.price}
        </p>
      )}
    </div>
  );
};

export default Detail;
