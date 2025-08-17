import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Blog.module.css";

const Slug = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; 
    const { slug } = router.query;

    fetch(`/api/getblog?slug=${slug}`)
      .then((res) => res.json())
      .then((parsed) => {
        setBlog(parsed);
      })
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [router.isReady, router.query.slug]);

  function createMarkup(c) {
    return { __html: c };
  }

  if (!blog) {
    return <div>Loading blog post...</div>;
  }

  return (
    <div className={`${styles.singleblogcontainer}`}>
      <div className={styles.singleblogpag}>
        <h1>{blog.title}</h1>
        <div className={styles.singleblogpage}>
          <div className={styles.singleblogimg}>
            <img src={blog.img} alt="blog image" width={500} height={300} />
          </div>
          <div dangerouslySetInnerHTML={createMarkup(blog.description)}></div>
        </div>
      </div>
    </div>
  );
};

export default Slug;