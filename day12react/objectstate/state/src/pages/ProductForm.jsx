
import { useState } from "react";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!product.name.trim() || !product.price || !product.quantity) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex === null) {
      setProducts((prev) => [...prev, { ...product }]);
    } else {
      setProducts((prev) =>
        prev.map((item, index) =>
          index === editIndex ? { ...product } : item
        )
      );
      setEditIndex(null);
    }

    setProduct({ name: "", price: "", quantity: "" });
  };

  const handleEdit = (index) => {
    setProduct({ ...products[index] });
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setProducts((prev) => prev.filter((item, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setProduct({ name: "", price: "", quantity: "" });
    } else if (editIndex !== null && editIndex > index) {
      setEditIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Product Management
          </h1>
          <p className="mt-2 text-slate-500">
            Add, update and manage your products
          </p>
        </div>

        {/* Form */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <h2 className="mb-6 text-xl font-semibold text-slate-800">
            {editIndex === null ? "Add New Product" : "Update Product"}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Product Name
              </label>
              <input
                name="name"
                placeholder="Enter product name"
                value={product.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Price (₹)
              </label>
              <input
                name="price"
                type="number"
                min="0"
                placeholder="Enter price"
                value={product.price}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Quantity
              </label>
              <input
                name="quantity"
                type="number"
                min="1"
                placeholder="Enter quantity"
                value={product.quantity}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleSubmit}
              className={`rounded-lg px-6 py-3 font-semibold text-white shadow transition hover:-translate-y-0.5 ${
                editIndex === null
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-emerald-600 hover:bg-emerald-700"
              }`}
            >
              {editIndex === null ? "Add Product" : "Update Product"}
            </button>

            {editIndex !== null && (
              <button
                onClick={() => {
                  setEditIndex(null);
                  setProduct({ name: "", price: "", quantity: "" });
                }}
                className="rounded-lg bg-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Product Table */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <h2 className="text-xl font-semibold text-slate-800">
              Product List
            </h2>
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Total: {products.length}
            </span>
          </div>

          {products.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-lg font-medium text-slate-500">
                No products added yet
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Add your first product using the form above.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-sm uppercase text-slate-600">
                  <tr>
                    <th className="px-6 py-4">S.No</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Quantity</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {products.map((item, index) => (
                    <tr
                      key={index}
                      className="transition hover:bg-blue-50"
                    >
                      <td className="px-6 py-4 text-slate-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 text-slate-700">
                        {item.quantity}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(index)}
                            className="rounded-md bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-200"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductForm;
