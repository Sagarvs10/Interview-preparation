import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <img src="image.jpg" alt="Interview Preparation" className={styles.image} />
      <h1>Welcome to Interview Preparation</h1>
      <p>
        <b>
        Whether you're preparing for a job interview or looking to improve your interview skills,
        our platform is here to help. We provide resources, tips, and guidance to boost your confidence
        and increase your chances of success in the competitive job market.
        </b>
      </p>
      <p>
        <b>
        Explore our company lists, discover frequently asked interview questions, and access sample answers
        to help you better understand what employers are looking for. Stay informed about the latest trends
        in the industry and enhance your overall interview preparation experience.
        </b>
      </p>
      <p>
        <b>
        Ready to get started? Check out our <Link to="/companies">Companies</Link> section to explore
        interview questions from top organizations, or visit our <Link to="/about">About</Link> page to learn more
        about what we offer. 
        </b>
      </p>
      
    </div>
  );
}

export default Home;
