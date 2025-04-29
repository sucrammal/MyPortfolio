import { useState } from 'react';
import Header from "../components/Header";
import { Search } from "lucide-react";
// import { useNavigate } from 'react-router-dom'; // For navigation
import newsData from '../data/newsData'; // Import all news entry data

function News() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter news articles based on search term
  const filterArticles = (articles) => {
    let filtered = articles;

    // Search filter
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, 'i');
      filtered = filtered.filter((article) =>
        article.title.match(searchRegex) ||
        article.tags.some(tag => tag.match(searchRegex))
      );
    }

    return filtered;
  };

  const filteredArticles = filterArticles(newsData);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const closeOverlay = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800 font-inter">
      {/* Header bar */}
      <div className="border-b-4 border-purple-300/40">
        <Header />
      </div>

      {/* Navigation Bar with Search */}
      <nav className="flex justify-start items-center bg-gradient-to-r from-purple-500/10 to-purple-600/5 backdrop-blur-sm py-4 sm:py-6 px-4 sm:px-36 shadow-sm">
        {/* Search Bar */}
        <div className="relative flex items-center w-64">
          {/* Search Icon */}
          <button className="absolute right-0 p-2 text-purple-600 hover:text-purple-800 transition-colors z-10">
            <Search size={24} />
          </button>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 pr-10 rounded-full border border-purple-100 focus:outline-none focus:border-purple-300 transition-all duration-300"
          />
        </div>
      </nav>

      {/* News Articles Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-12">
          Latest News
        </h1>

        {filteredArticles.length > 0 ? (
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-lg shadow-md bg-white/80 backdrop-blur-sm border border-purple-100/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
                onClick={() => handleArticleClick(article)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{article.shortDescription}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No news articles found.</p>
        )}
      </main>

      {/* Full Article Overlay */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeOverlay}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-3xl w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold">{selectedArticle.title}</h2>
            <div className="mt-4">{selectedArticle.fullContent}</div>
            <button
              className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-md"
              onClick={closeOverlay}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;