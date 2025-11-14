import { useState, useEffect } from "react";
import api from "@/api";
import { Product } from "@/api/productApi";
import { Program } from "@/api/programApi";
import { Book } from "@/api/bookApi";

const ApiTest = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch products
        const productsResponse = await api.products.getProducts();
        setProducts(productsResponse.data);
        
        // Fetch programs
        const programsResponse = await api.programs.getPrograms();
        setPrograms(programsResponse.data);
        
        // Fetch books
        const booksResponse = await api.books.getBooks();
        setBooks(booksResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data from the API");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4">Loading data from backend API...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">API Integration Test</h1>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product._id} className="border p-4 rounded-lg">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">₹{product.price}</p>
              <p className="text-sm mt-1">{product.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program) => (
            <div key={program._id} className="border p-4 rounded-lg">
              <h3 className="font-medium">{program.title}</h3>
              <p className="text-sm text-gray-600">{program.category}</p>
              <p className="text-sm mt-1">{program.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {books.map((book) => (
            <div key={book._id} className="border p-4 rounded-lg">
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-sm mt-1">₹{book.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApiTest;