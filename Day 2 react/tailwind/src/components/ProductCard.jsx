function ProductCard() {
  return (
    <div className="bg-white w-64 p-6 rounded-xl shadow-lg text-center">

      <h2 className="text-xl font-bold text-gray-800">
        Smart Watch
      </h2>

      <p className="text-blue-600 text-lg font-semibold mt-3">
        ₹2,999
      </p>

      <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg">
        Buy Now
      </button>

    </div>
  );
}

export default ProductCard;