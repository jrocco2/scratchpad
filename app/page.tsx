"use client";

import { useState, useCallback } from "react";

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Home() {
  const [cat, setCat] = useState<CatImage | null>(null);
  const [history, setHistory] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCat = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med"
      );
      if (!res.ok) throw new Error("Failed to fetch cat photo");
      const data: CatImage[] = await res.json();
      const newCat = data[0];
      setCat(newCat);
      setHistory((prev) => [newCat, ...prev].slice(0, 12));
    } catch {
      setError("Could not fetch a cat photo. Please try again!");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-orange-600 dark:text-orange-400">
            🐱 Cat Photo Generator 🐱
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Click the button to generate a random cat photo!
          </p>

          <button
            onClick={generateCat}
            disabled={loading}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-orange-300 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer disabled:cursor-wait"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Loading...
              </>
            ) : (
              <>🎲 Generate Cat!</>
            )}
          </button>

          {error && (
            <p className="mt-4 text-red-500 dark:text-red-400">{error}</p>
          )}
        </section>

        {cat && (
          <section className="mb-16 flex justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full border-4 border-orange-200 dark:border-orange-800">
              <div className="relative w-full" style={{ minHeight: "300px" }}>
                <img
                  src={cat.url}
                  alt="A randomly generated cat"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "600px" }}
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Cat ID: {cat.id}
                </p>
              </div>
            </div>
          </section>
        )}

        {!cat && !loading && (
          <section className="text-center mb-16">
            <div className="text-9xl mb-6 opacity-40">😺</div>
            <p className="text-gray-400 dark:text-gray-500 text-lg">
              Press the button above to see your first cat!
            </p>
          </section>
        )}

        {history.length > 1 && (
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Recent Cats
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {history.slice(1).map((img) => (
                <button
                  key={img.id}
                  onClick={() => setCat(img)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-2 border-orange-100 dark:border-orange-900 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt="Previous cat"
                    className="w-full h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-orange-600 dark:bg-orange-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold mb-2">
            Made with ❤️ for Cat Lovers Everywhere
          </p>
          <p className="text-orange-100">
            Powered by{" "}
            <a
              href="https://thecatapi.com"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Cat API
            </a>{" "}
            &amp; Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
