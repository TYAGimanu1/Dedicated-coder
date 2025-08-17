import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import React, { useEffect, useState, useRef } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [blogs, setBlogs] = useState([]);
    
  let b=0;
    useEffect(() => {
      fetch("http://localhost:3000/api/hello")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.allblog)
          setBlogs(data.allblog.slice(0,3));
        });
      },[])
    
       
  return (
   
      <div className={styles.homeconatiner}>
      <h1>Dedicated Coder</h1>
      
      {blogs.map((blogItem, index) => (
          <div key={blogItem.slug} className={styles.blogCard}>
            <h3>{blogItem.title}</h3>
            <p>{blogItem.minidesc}...</p>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <div className={styles.button}>Read more</div>
            </Link>
          </div>
        ))}
       
      </div> 
      
   
  );
}

