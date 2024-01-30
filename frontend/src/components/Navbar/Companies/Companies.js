import React, { useState } from 'react';
import styles from './Companies.module.css';

const Companies = () => {
  const mncCompanies = [
    { name: 'Google', questions: [' What is your favorite Google product, and how would you improve it? ',
                                   'What is your knowledge of Google history?', 
                                   ' In your opinion, should people have to use their legal names when setting up a Gmail account?',
                                   ],
                      answers: ['My favorite Google product is Google Maps. Its helped me find my way when Ive been lost either in town or on my travels, and I love how it shows me where there traffic or other potential sources of delays. To improve it, I would offer customers a paid, live map version that doesnt require data to see paths to certain areas. This will help people traveling in remote communities, without access to data. ', 
                                'Headquartered in Mountain View, California, Google LLC, formerly Google Inc. (1998-2017), is an American company which develops, produces, and distributes software in diverse technological domains. With more than 70% of worldwide online search requests being handled by Google, it is essential to most internet users experience. At first, Google just focused on its search function, but now it offers a multitude of products such as email, document-creation software, and more. However, 2012 acquisition of Motorola Mobility enabled it to sell its own hardware as well. ',
                                 'Although it is required by Google, you dont need to use your real name (or the Google username of your choice) to complete this profile. You can put your nickname, make sure it sounds authentic like a first name, and you should be all set.',
                                 ], 
                      link: 'https://hackr.io/blog/google-interview-questions'        
                      },
    
    { name: 'TCS', questions: ['What is Socket Programming? What Are The Benefits And Drawbacks Of Java Sockets?',
                               'What do you know about SLIP?', 
                               ' What is Ethernet?', 
                               ],
                   answers: ['Socket programming is a method of allowing two network nodes to communicate with each other. One socket (node) listens on a specific port at an IP address, while the other socket connects with it. While the client connects to the server, the server creates the listener socket.',
                                'Serial Line Internet Protocol (SLIP) is a basic protocol for communication over serial ports and routers that works with TCP/IP. They allow machines that were previously configured for direct communication to communicate with one another.', 
                                'Ethernet is a network technology that connects devices via cables for data transmission in Local Area Networks (LANs), Metropolitan Area Networks (MANs), and Wide Area Networks (WANs). It delivers services on the OSI Models Physical and Data Link layers. The purpose of an Ethernet network is so computers and other devices can efficiently share files, information, and data. Ethernet was first introduced in 1980.',
                                     ],
                    link: 'https://www.interviewbit.com/tcs-interview-questions/'                 },
    
    { name: 'Accenture', questions: ['Can we implement multiple interfaces in a single Java class?',
                                    'What is the significance of the “super” and “this” keywords in Java?',
                                     'What is a classifier in Python?',
                                     ], 
                        answers: ['Yes, it is allowed to implement multiple interfaces in a single class. In Java, multiple inheritances is achieved by implementing multiple interfaces into the class. While implementing, each interface name is separated by using a comma(,) operator.', 
                                  'super keyword: In Java, the “super” keyword is used to provide reference to the instance of the parent class(superclass). Since it is a reserved keyword in Java, it cannot be used as an identifier. This keyword can also be used to invoke parent class members like constructors and methods. this Keyword:  In Java, the “this” keyword is used to refer to the instance of the current class. Since it is a reserved keyword in Java, it cannot be used as an identifier. It can be used for referring object of the current class, to invoke a constructor of the current class, to pass as an argument in the method call or constructor call, to return the object of the current class.',
                                'A classifier is an algorithm that predicts the class of an input element on the basis of a set of features. Usually, it will make use of training data(large datasets used to train an algorithm or machine learning model) to obtain understand-ability regarding the relation between input variables and class. It is mainly used in machine learning and supervised learning.',
                                ],
                        link: 'https://www.interviewbit.com/accenture-interview-questions/'       },
    
    { name: 'Oracle', questions: ['What are the components of physical database structure of Oracle database?',
                                'What are the components of logical database structure in Oracle database?',
                                 'What is a tablespace?',
                                 ], 
                    answers: ['Components of physical database structure are given below.One or more data files, Two or more redo log files & One or more control files.', 
                              'Components of logical database structure.Tablespaces and Databases schema objects',
                            'A database contains Logical Storage Unit called tablespaces. A tablespace is a set of related logical structures. Actually a tablespace groups related logical structures together.',
                            ],
                    link: 'https://www.javatpoint.com/oracle-interview-questions' },
     
    { name: 'Deloitte', questions: [' What is SMTP (Simple Mail Transfer Protocol) in Computer Networks?',
                            'What are the pros and cons of star topology in Computer Networks?',
                             'What is a Kernel in OS?',
                             ], 
                answers: ['Email is quickly becoming one of the most valuable services available on the internet. SMTP is the most used technique for transferring mail from one user to another over the internet. SMTP is a push protocol that is used to transmit mail. It is an application layer protocol. The client who wants to send the email establishes a TCP connection with the SMTP server and then sends the email via it. The SMTP server is always set to listen. The SMTP process establishes a connection as soon as it detects a TCP connection from any client. The client process sends the letter immediately after successfully establishing a TCP connection.', 
                          'In computer networks, a star network is an application of the spoke–hub distribution model. Every host in a star network is linked to a central hub. One central hub serves as a channel for messages in its most basic form. One of the most popular computer network topologies is the star network.',
                        'Kernel is a component of an operating system that manages computer and hardware functions. It primarily oversees memory and CPU functions. Its a crucial part of any operating system. Kernel serves as a link between applications and hardware-based data processing via inter-process communication and system calls.',
                        ],
                link: 'https://www.simplilearn.com/deloitte-interview-questions-answers-article'       },

    { name: 'IBM', questions: ['What is Process Scheduling ?',
                        'What is a Deadlock in Operating System ?',
                         'What is virtual memory in OS ?'], 
            answers: ['Process scheduling is the activity of the process manager that handles the removal of the running process from the CPU and the selection of another process on the basis of a particular strategy.', 
                      ' A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.',
                    'Virtual Memory is a storage allocation scheme in which secondary memory can be addressed as though it were part of the main memory. The addresses a program may use to reference memory are distinguished from the addresses the memory system uses to identify physical storage sites and program-generated addresses are translated automatically to the corresponding machine addresses.'],
            link:'https://www.interviewbit.com/ibm-interview-questions/' },  
                    
    { name: 'Infosys', questions: ['What is an Object in OOPs?',
                    'What is a Class in OOPs?',
                     ' What is a constructor?',
                     ], 
        answers: ['An object is an instance or subset of the class. It is attributable to a physical operation such as individual attributes, properties and behavior. It occupies space in the memory and has member functions defined in a class.', 
                  ' A class gives the objects outline and has a fixed data type defined by the user. Member functions, variables, constants and other functionality are designated within a class. It does not use any memory during run time. A class can exist without an object, but an object cannot exist outside the class.',
                'Constructors are used to initialize the data members of a new object. It prepares the object for run-time operation using keywords and member variables.',
              ],
        link: 'https://www.simplilearn.com/infosys-interview-questions-article'     },  
                
    { name: 'Cisco', questions: [' Define a firewall?',
                'What is a link?',
                 ' What is the default TCP session timeout for CISCO?',
                 ], 
    answers: ['A network security device that monitors and filters incoming and outgoing network traffic given an organizations established security policies is called a firewall. It is a barrier between a private internal network and the public Internet.', 
              'A logical or physical component of a network interconnecting devices or nodes is termed a link.',
            'The default timeout in the TCP session is one minute. The connection slots get freed on an average of one minute once the sequence of normal connection close gets completed. However, it can be configured into other settings as required. ',
          ],
    link: 'https://www.interviewbit.com/cisco-interview-questions/' }, 
            
    

    // Add similar objects for other companies
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (companyIndex) => {
    if (selectedCompany && selectedCompany.name === mncCompanies[companyIndex].name) {
      setSelectedCompany(null); // If the same company is clicked again, close it
    } else {
      setSelectedCompany(mncCompanies[companyIndex]); // Open the selected company
    }
  };

  return (
    <div className={styles.companiesContainer}> {/* Use styles.companiesContainer instead of 'companies-container' */}
      <h2>Name of Companies</h2>
      <div className={styles.companiesGrid}> {/* Use styles.companiesGrid instead of 'companies-grid' */}
      {mncCompanies.map((company, index) => (
    <div key={index} className={styles.companyCard}>
      <button onClick={() => handleCompanyClick(index)}>
        {company.name === 'Google' && (
          <img
            src="google-logo.png" // Replace with the actual path to your Google logo image
            alt="Google Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'IBM' && (
          <img
            src="ibm.png" // Replace with the actual path to your IBM logo image
            alt="IBM Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'TCS' && (
          <img
            src="tcs.png" // Replace with the actual path to your IBM logo image
            alt="TCS Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'Accenture' && (
          <img
            src="Accenture.png" // Replace with the actual path to your IBM logo image
            alt="Accenture Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'Oracle' && (
          <img
            src="Oracle.png" // Replace with the actual path to your IBM logo image
            alt="Oracle Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'Deloitte' && (
          <img
            src="Deloitte.png" // Replace with the actual path to your IBM logo image
            alt="Deloitte Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'Infosys' && (
          <img
            src="infosys.png" // Replace with the actual path to your IBM logo image
            alt="Infosys Logo"
            className={styles.companyLogo}
          />
        )}
        {company.name === 'Cisco' && (
          <img
            src="Cisco.png" // Replace with the actual path to your IBM logo image
            alt="Cisco Logo"
            className={styles.companyLogo}
          />
        )}
       
        
      </button>
    </div>
        ))}
      </div>

      {selectedCompany && (
        <div className={styles.selectedCompanyInfo}> {/* Use styles.selectedCompanyInfo instead of 'selected-company-info' */}
          <h3>{selectedCompany.name} Interview Questions</h3>
          <ul>
            {selectedCompany.questions.map((question, index) => (
              <li key={index}>
                <strong>Q: {question}</strong>
                <p>A: {selectedCompany.answers[index]}</p>
              </li>
            ))}
          </ul>
          <p>
            <b>For more interview questions, please visit the page: </b>
            <a href={selectedCompany.link} target="_blank" rel="noopener noreferrer">
              {selectedCompany.name} Interview Questions
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Companies;
