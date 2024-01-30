import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Feel free to reach out to us. We're here to help you with any inquiries you may have.
      </p>
      <p>
        You can contact us via email at <strong>info@interviewprep.com</strong>.
      </p>
      <p>
        Follow us on social media for updates and tips:
      </p>
      <ul>
        <li>
          <span className={`${styles.icon} fas fa-twitter`}></span>
          <FontAwesomeIcon icon={faTwitter} />
          {' '}
          <b>Twitter</b>
          <a href="https://twitter.com/interviewprep" target="_blank" rel="noopener noreferrer">@interviewprep</a>
        </li>
        <li>
          <span className={`${styles.icon} fas fa-facebook`}></span>
          <FontAwesomeIcon icon={faFacebook} />{' '}
          <b>Facebook</b>
          <a href="https://www.facebook.com/interviewprep" target="_blank" rel="noopener noreferrer">Interview Preparation</a>
        </li>
        <li>
          <span className={`${styles.icon} fas fa-linkedin`}></span>
          <FontAwesomeIcon icon={faLinkedin} /> {' '} 
          <b>LinkedIn</b>
          <a href="https://www.linkedin.com/company/interviewprep" target="_blank" rel="noopener noreferrer">InterviewPreparation</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
