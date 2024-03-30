"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Header from '../../components/Navbar/Header';
import Omsairam from '../../components/Navbar/Omsairam';
import Footer from '../../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';

const WordPressPosts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [initialPostsCount, setInitialPostsCount] = useState(30);
  const [postsCountToLoad, setPostsCountToLoad] = useState(30);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://homes.devotionalindia.com/wp-json/wp/v2/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching WordPress categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          selectedCategory
            ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed&per_page=${initialPostsCount}`
            : `https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed&per_page=${initialPostsCount}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };

    fetchPosts();
  }, [selectedCategory, initialPostsCount]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(`https://homes.devotionalindia.com/wp-json/wp/v2/posts?per_page=5&_embed`);
        setRecentPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent WordPress posts:', error);
      }
    };

    fetchRecentPosts();
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const loadMorePosts = async () => {
    try {
      const response = await axios.get(
        selectedCategory
          ? `https://homes.devotionalindia.com/wp-json/wp/v2/posts?categories=${selectedCategory}&_embed&per_page=${postsCountToLoad}&offset=${posts.length}`
          : `https://homes.devotionalindia.com/wp-json/wp/v2/posts?_embed&per_page=${postsCountToLoad}&offset=${posts.length}`
      );
      setPosts(prevPosts => [...prevPosts, ...response.data]);
    } catch (error) {
      console.error('Error fetching more WordPress posts:', error);
    }
  };

  return (
    <>
      <Omsairam />
      <Header />
      <div className="mx-auto w-full mb-16">
        <div className="magazine">
          <h1 className="text-6xl sm:font-bold mb-4"> Inspiring Interior News & Advices by Top Experts</h1>
        </div>
        <h1 className='text-center text-4xl font-bold mt-8'>Timeless Collection of Our <span className='text-orange-600'>Interior</span> & <span className='text-green-500'>Architectural</span> Insights</h1>
        <div className="flex items-center mt-8 w-full overflow-x-auto px-4 ">
          <div className="flex items-center mx-auto gap-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`${selectedCategory === category.id
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-500 hover:text-gray-200 shadow-sm'
                  } categoryButton rounded-lg transition-transform transform hover:scale-105 my-auto mt-4 whitespace-nowrap md:mr-0`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className='lg:flex '>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8 my-4 max-w-[1366px] mx-auto">
            {posts.map((post) => (
              <Link key={post.id} href={`/interior-digest-magazine-india/${post.slug}/${post.id}`}>
                <div
                  key={post.id}
                  className="bg-white h-96 p-4 mx-4 border rounded cursor-pointer shadow-md transition-transform transform hover:scale-105"
                >
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <Image
                      width={1000}
                      height={1000}
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text}
                      className="mb-2 w-full h-52 object-cover rounded-t"
                    />
                  )}
                  <div className="flex flex-col justify-between h-[40%]">
                    <h2 className="text-lg font-bold mb-2">{post.title.rendered}</h2>
                    <p className="text-gray-500 text-sm mb-0">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Recent Posts Section */}
          <div className="recent-posts mr-4 p-8 rounded h-auto">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            {recentPosts.map((post) => (
              <div key={post.id} className="recent-post-item rounded shadow-lg shadow-indigo-500/40 p-2 mt-4 bg-white">
                <Link href={`/interior-digest-magazine-india/${post.slug}/${post.id}`} className='flex gap-2'>
                  {post._embedded && post._embedded['wp:featuredmedia'] && (
                    <Image
                      width={100}
                      height={10}
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text}
                      className="mb-2  object-cover rounded"
                    />
                  )}
                  <h3 className="text-sm font-semibold mb-2">{post.title.rendered}</h3>
                </Link>
                <p className="text-gray-500 text-sm mb-0">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
         

        </div>
        {posts.length < initialPostsCount && (
            <div className="recent-posts mr-4 p-8 rounded ">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadMorePosts}>
                Load More
              </button>
            </div>
          )}
      </div>
      <Footer />
    </>
  );
};

export default WordPressPosts;