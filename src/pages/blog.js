import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [inView, setInView] = useState(false);
  const blogRef = useRef();

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.allblog);
      })
      .catch((error) => console.error("Error fetching blog data:", error));

    // Intersection Observer for on-scroll animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    }, { threshold: 0.2 });

    if (blogRef.current) {
      observer.observe(blogRef.current);
    }
    
    return () => {
      if (blogRef.current) {
        observer.unobserve(blogRef.current);
      }
    };
  }, []);

  return (
    <div className='container'>
      <div 
        className={`${styles.blogpage} ${inView ? styles.fadeIn : ''}`} 
        ref={blogRef}
      >
        <h2>BLOG</h2>
        {blogs.length > 0 ? blogs.map((blogItem) => (
          <div key={blogItem.slug} className={styles.blogCard}>
            <h3>{blogItem.title}</h3>
            <p>{blogItem.minidesc}...</p>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <div className={styles.button}>Read more</div>
            </Link>
          </div>
        )) : <p>Loading blogs or no blogs available...</p>}
      </div>
    </div>
  );
};

export default Blog;