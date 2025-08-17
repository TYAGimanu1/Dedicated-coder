import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
    <div className='container'>
    <h1 className='aboutus-text' >About Us</h1>
    <div className={`${styles.aboutpage} `}>
      <div className={styles.textspace}>
      <p>Welcome to Dedicated Coder, a dedicated space for developers and programming enthusiasts. Our journey began with a simple belief: that learning to code should be accessible, engaging, and practical. Here, we share our passion for technology by providing high-quality tutorials, thoughtful articles, and hands-on projects in web development. Whether you're taking your first steps into the world of programming or are a seasoned pro looking to sharpen your skills, our mission is to empower you with the knowledge and resources you need to build, create, and innovate. We believe in the power of code to transform ideas into reality, and we're excited to be a part of your development journey.</p>
      </div>
      <div className={styles.imagecontainer}>
      <div className={styles.image1}>
        <div className={styles.image2}>
          
        </div>
      </div>
      </div>
    </div>
    <h2 className={styles.headings}>Srevices</h2>
    <div className={`${styles.aboutpage} ${styles.mtop}`}>
      <div className={styles.imagecontainer}>
      <div className={styles.image1}>
        <div className={styles.image2}>
          
        </div>
      </div>
      </div>
      <div className={`${styles.textspace}`}>
      <p>This site offers valuable services, primarily focused on education and skill-building. It provides a platform for sharing tutorials, code snippets, and in-depth articles on various programming languages and technologies. Developers can use the site to stay updated on the latest trends, learn from practical examples, and find solutions to common coding problems. The site also often features a community aspect where users can engage in discussions and get support.
      </p>
      <ol>
        <li>Community Interaction</li>
        <li>Industry Insights</li>
        <li>Code Resources</li>
        <li>Educational Content</li>
      </ol>
      </div>
      
    </div>
    <h2 className={styles.headings}>The Mission</h2>
    <div className={`${styles.aboutpage} ${styles.mtop} `}>
      <div className={styles.textspace}>
      <p>At Dedicated Coder, our mission is to make quality technical education accessible to everyone. We believe that curiosity and a desire to learn are the only prerequisites for becoming a great developer. We are committed to providing clear, practical, and engaging content that empowers you to master new skills, build real-world projects, and confidently navigate the ever-evolving world of technology. Our goal is to be a trusted resource that not only teaches you how to code, but also inspires you to become a lifelong learner.</p>
      
      </div>
      <div className={styles.imagecontainer}>
      <div className={styles.image1}>
        <div className={styles.image2}>
          
        </div>
      </div>
      </div>
    </div>
    </div>
    </>

  )
}

export default About
