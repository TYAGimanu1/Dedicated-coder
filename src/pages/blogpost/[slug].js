import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image";
import styles from "@/styles/Blog.module.css";
const slug = () => {
  
    const [blog,setblog]=useState();
     const router = useRouter()
   useEffect(() => {
   if (!router.isReady) return; 
    const { slug } = router.query;
    fetch( `http://localhost:3000/api/getblog?slug=${slug}`)
    .then((res)=>res.json())
    .then((parsed)=>{
         console.log(parsed);
    setblog(parsed)
    })
   },[router.isReady])

   function createmarup(c){
      return{__html: c}
   }
  return (
    <div className={`${styles.singleblogcontainer} `}>
      <div className={styles.singleblogpag}>
       <h1>{blog && blog.title}
      </h1>
    <div className={styles.singleblogpage}>
      <div className={styles.singleblogimg}>
        <img src={blog && blog.img} alt="blog image" width={500} height={300} />
      </div>
      {blog && <div dangerouslySetInnerHTML={createmarup(blog.description)}></div>}
      
      
        
     </div>
  
      </div>
      </div>
  )
}

export default slug