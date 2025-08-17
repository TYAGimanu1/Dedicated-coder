import React, { useState } from 'react';
import styles from "@/styles/Blog.module.css";

const Contact = () => {
  const [users, setUsers] = useState({ name: "", email: "", mobile: "", course: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/postcontact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(users),
      });

      if (res.ok) {
        console.log("Success: Contact form submitted successfully.");
        // Optionally, reset the form
        setUsers({ name: "", email: "", mobile: "", course: "" });
      } else {
        console.error("Error: Failed to submit contact form.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className='container'>
      <div className={styles.textfields}>
        <h1>Fill Your Concern</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Enter Name</label>
            <input
              id="name"
              type='text'
              placeholder='Enter Name'
              value={users.name}
              onChange={(e) => setUsers({ ...users, name: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Enter Email</label>
            <input
              id="email"
              type='email'
              placeholder='Enter Email'
              value={users.email}
              onChange={(e) => setUsers({ ...users, email: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mobile">Enter Mobile</label>
            <input
              id="mobile"
              type='number'
              placeholder='Enter Mobile'
              value={users.mobile}
              onChange={(e) => setUsers({ ...users, mobile: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="course">Enter Course</label>
            <textarea
              id="course"
              placeholder='Enter Course'
              rows="5"
              value={users.course}
              onChange={(e) => setUsers({ ...users, course: e.target.value })}
            />
          </div>

          <button type='submit' className={styles.button}>Insert Data</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;