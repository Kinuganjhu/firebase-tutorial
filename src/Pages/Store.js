import useFetch from './useFetch';

export default function Store() {
  const [data] = useFetch('https://fakestoreapi.com/products');

  const handleAddToCart = (productId) => {
    alert(`Product ${productId} added to cart`);
  };

  return (
    <>
      {data && data.map((item) => (
        <div key={item.id} className="store-container">
          <img src={item.image} alt={item.title} />
          <div>
            <h5>{item.title}</h5>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(item.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
