import React from 'react';
import styles from './About.module.css'; // Import styles from About.module.css

const About = () => {
  return (
    <div className={styles.aboutContain}> {/* Use styles.aboutContainer instead of 'about-container' */}
      <h1>About</h1>
      <div className={styles.aboutContents}> {/* Use styles.aboutContent instead of 'about-content' */}
        <p>
          Welcome to our Interview Preparation website! This platform is designed to help you excel in your job interviews by providing valuable resources, tips, and guidance.
          Whether you are a fresh graduate, an experienced professional, or someone looking to switch careers, we've got you covered.
        </p>
        <p>
          Our goal is to assist you in preparing for various interview scenarios and landing your dream job.
          Explore our company lists, discover interview questions and answers, and stay updated on the latest trends in the job market. We believe in empowering individuals with the knowledge and confidence needed to succeed in interviews.
        </p>
        <p>Thank you for choosing Interview Preparation, and we wish you the best in your career journey!</p>
      </div>
      
    </div>
  );
}

export default About;
