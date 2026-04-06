export default function Home() {
  const catFacts = [
    "Cats spend 70% of their lives sleeping",
    "A group of cats is called a 'clowder'",
    "Cats have over 20 vocalizations",
    "A cat's purr vibrates at 25-150 Hz",
    "Cats can rotate their ears 180 degrees",
    "A cat's nose print is unique, like a fingerprint"
  ];

  const catBreeds = [
    { name: "Persian", trait: "Fluffy & Calm" },
    { name: "Siamese", trait: "Vocal & Social" },
    { name: "Maine Coon", trait: "Large & Gentle" },
    { name: "Bengal", trait: "Wild & Playful" },
    { name: "Ragdoll", trait: "Relaxed & Affectionate" },
    { name: "British Shorthair", trait: "Sturdy & Easy-going" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-orange-600 dark:text-orange-400">
            🐱 The Wonderful World of Cats 🐱
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <div className="text-8xl mb-6">😺</div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Cat Paradise!
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover fascinating facts, adorable breeds, and everything you need to know about our feline friends.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Amazing Cat Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catFacts.map((fact, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200 dark:border-orange-900"
              >
                <div className="text-4xl mb-3">🐾</div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Popular Cat Breeds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catBreeds.map((breed, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-3 text-center">🐈</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {breed.name}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {breed.trait}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12">
          <div className="text-6xl mb-6">😻</div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why We Love Cats
          </h3>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Cats are independent yet affectionate companions who bring joy and comfort to millions of homes worldwide.
            </p>
            <p>
              Their playful antics, soothing purrs, and unique personalities make them beloved members of the family.
            </p>
            <p>
              Whether they're napping in a sunny spot or chasing a toy, cats never fail to entertain and enchant us!
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-orange-600 dark:bg-orange-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-semibold mb-2">
            Made with ❤️ for Cat Lovers Everywhere
          </p>
          <p className="text-orange-100">
            Purr-fectly crafted with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
