import ProductCard from "./ProductCard";

function Home() {
  return (
    <section className="bg-gray-100 py-12 min-h-screen">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Products
      </h1>

      <div className="flex justify-center gap-8 flex-wrap">

        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>

    </section>
  );
}

export default Home;