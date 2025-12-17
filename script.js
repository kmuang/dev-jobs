// ========================================
// JOB DATA
// ========================================

const jobs = [
  {
    id: 1,
    company: "Scoot",
    logo: "scoot",
    logoBackground: "#E99210",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "scoot.com",
    apply: "https://scoot.com/careers",
    description: "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing team. You will be responsible for building and maintaining front end functionality across our main app. If you love building JavaScript applications in an environment that strongly encourages personal growth and ownership, this could be for you.",
    requirements: {
      content: "We are looking for a true problem solver with exceptional analytical abilities and strong communication skills. Ideally, you love building bold new user facing features as much as refactoring, testing and architecting a complex system. You'll be expected to work collaboratively in cross-functional teams to define, design and ship new features, and you'll have proven experience doing just that.",
      items: [
        "You have 5+ years of experience using JavaScript, React.js as well as modern CSS and HTML",
        "You have experience with server-side rendering and implementing JavaScript build processes",
        "You have experience building complex single-page applications and can articulate best practice and trade-offs",
        "You have a deep understanding of semantics, accessibility, SEO and progressive enhancement"
      ]
    },
    role: {
      content: "We're looking for someone to join our small team to assist in the development of web application features. There is a lot of ownership in this role and you will regularly be the driving force of new features and be involved in every stage of the feature development process.",
      items: [
        "Build and maintain scalable frontend features for our web applications",
        "Collaborate with designers and backend engineers to translate product requirements into well-architected solutions",
        "Write clean, maintainable code and comprehensive tests for the features you build",
        "Implement responsive designs ensuring consistency across browsers and devices",
        "Participate in code reviews and provide thoughtful feedback to other engineers",
        "Help establish and improve frontend development processes and standards"
      ]
    }
  },
  {
    id: 2,
    company: "Blogr",
    logo: "blogr",
    logoBackground: "#E54033",
    position: "Haskell and PureScript Dev",
    postedAt: "20h ago",
    contract: "Part Time",
    location: "United States",
    website: "blogr.com",
    apply: "https://blogr.com/careers",
    description: "Blogr is looking for a Haskell and PureScript developer to help us build our CMS and email infrastructure. This is a unique opportunity to work with functional programming languages in production at scale. You'll be working on critical backend services that handle millions of requests per day.",
    requirements: {
      content: "The ideal candidate has significant experience with functional programming and isn't afraid to dive into complex systems. We value clear communication and the ability to explain technical concepts to non-technical stakeholders.",
      items: [
        "3+ years of professional experience with Haskell or PureScript",
        "Strong understanding of functional programming principles and type systems",
        "Experience building RESTful APIs and working with databases",
        "Familiarity with modern DevOps practices and cloud infrastructure"
      ]
    },
    role: {
      content: "You will be working on our core platform, building features that directly impact millions of users. This role offers significant autonomy and the opportunity to shape our technical direction.",
      items: [
        "Design and implement backend services using Haskell and PureScript",
        "Build and maintain our email delivery infrastructure",
        "Optimize database queries and application performance",
        "Collaborate with the frontend team on API design",
        "Contribute to our open-source functional programming libraries"
      ]
    }
  },
  {
    id: 3,
    company: "Vector",
    logo: "vector",
    logoBackground: "#34353F",
    position: "Midlevel Back End Engineer",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Russia",
    website: "vector.com",
    apply: "https://vector.com/jobs",
    description: "Vector is seeking a talented Midlevel Backend Engineer to join our distributed team. You'll work on building scalable microservices that power our data analytics platform. We value clean code, comprehensive testing, and pragmatic solutions to complex problems.",
    requirements: {
      content: "We're looking for engineers who are passionate about building reliable, performant backend systems. You should be comfortable working in a remote-first environment and have experience with modern backend technologies.",
      items: [
        "3-5 years of backend development experience with Python or Node.js",
        "Strong knowledge of SQL and NoSQL databases",
        "Experience with RESTful API design and implementation",
        "Familiarity with Docker, Kubernetes, and cloud platforms (AWS/GCP/Azure)",
        "Understanding of microservices architecture and distributed systems"
      ]
    },
    role: {
      content: "As a backend engineer at Vector, you'll be responsible for designing and implementing services that process terabytes of data daily. You'll work closely with data scientists and frontend engineers to deliver features that help our customers make data-driven decisions.",
      items: [
        "Design and build scalable microservices using Python or Node.js",
        "Implement data processing pipelines and analytics features",
        "Write comprehensive tests and maintain high code quality standards",
        "Participate in architectural decisions and code reviews",
        "Monitor and optimize service performance and reliability",
        "Mentor junior engineers and contribute to technical documentation"
      ]
    }
  },
  {
    id: 4,
    company: "Office Lite",
    logo: "office-lite",
    logoBackground: "#5175FF",
    position: "Senior Application Engineer",
    postedAt: "2d ago",
    contract: "Full Time",
    location: "Japan",
    website: "officelite.com",
    apply: "https://officelite.com/careers",
    description: "Office Lite is revolutionizing workplace productivity with our suite of collaborative tools. We're looking for a Senior Application Engineer to help us build the next generation of our product. You'll work on challenging problems at the intersection of real-time collaboration, data synchronization, and user experience.",
    requirements: {
      content: "We need someone who can architect complex systems and mentor other engineers. You should have a track record of shipping products and a passion for creating tools that people love to use.",
      items: [
        "7+ years of full-stack development experience",
        "Expert knowledge of React, TypeScript, and modern JavaScript",
        "Experience with real-time systems using WebSockets or similar technologies",
        "Strong understanding of application architecture and design patterns",
        "Experience leading technical projects and mentoring other engineers",
        "Excellent problem-solving and communication skills"
      ]
    },
    role: {
      content: "You'll be a key technical leader, working on our most challenging features and helping shape the technical direction of our product. This role offers significant ownership and the opportunity to make a real impact.",
      items: [
        "Lead the development of major product features from design to deployment",
        "Architect scalable solutions for real-time collaborative editing",
        "Work closely with product managers and designers to define requirements",
        "Establish engineering best practices and coding standards",
        "Mentor junior and mid-level engineers",
        "Evaluate and introduce new technologies to improve our stack",
        "Participate in hiring and building the engineering team"
      ]
    }
  },
  {
    id: 5,
    company: "Pod",
    logo: "pod",
    logoBackground: "#132034",
    position: "Remote DevOps Engineer",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "Thailand",
    website: "pod.com",
    apply: "https://pod.com/join",
    description: "Pod is building the future of podcasting with our creator-focused platform. We're seeking a DevOps Engineer to help us scale our infrastructure and improve our deployment processes. This is a remote position perfect for someone who loves automation and infrastructure-as-code.",
    requirements: {
      content: "The ideal candidate has deep experience with cloud infrastructure and a passion for automation. You should be comfortable working independently and have excellent problem-solving skills.",
      items: [
        "4+ years of DevOps or Site Reliability Engineering experience",
        "Strong knowledge of AWS, GCP, or Azure cloud platforms",
        "Experience with Infrastructure-as-Code tools (Terraform, CloudFormation)",
        "Proficiency with containerization (Docker, Kubernetes)",
        "Experience with CI/CD pipelines and automation tools",
        "Strong scripting skills (Python, Bash, or similar)"
      ]
    },
    role: {
      content: "You'll be responsible for maintaining and scaling our cloud infrastructure, implementing monitoring and alerting, and improving our deployment processes. This role offers a lot of autonomy and the opportunity to shape our DevOps practices.",
      items: [
        "Manage and optimize our cloud infrastructure across multiple environments",
        "Implement and maintain CI/CD pipelines",
        "Build monitoring and alerting systems to ensure high availability",
        "Automate repetitive tasks and improve operational efficiency",
        "Collaborate with development teams on deployment strategies",
        "Implement security best practices and ensure compliance",
        "Document infrastructure and create runbooks for common scenarios"
      ]
    }
  },
  {
    id: 6,
    company: "Creative",
    logo: "creative",
    logoBackground: "#D93A56",
    position: "Desktop Support Manager",
    postedAt: "4d ago",
    contract: "Part Time",
    location: "Germany",
    website: "creative.com",
    apply: "https://creative.com/careers",
    description: "Creative is a design and development agency working with world-class clients. We're looking for a Desktop Support Manager to lead our internal IT support team and ensure our staff have the tools and support they need to do their best work.",
    requirements: {
      content: "We need someone with strong technical skills and even stronger people skills. You should be comfortable managing a team and have experience supporting creative professionals who rely on specialized software and hardware.",
      items: [
        "5+ years of desktop support experience, including 2+ years in a management role",
        "Strong knowledge of macOS and Windows operating systems",
        "Experience with Adobe Creative Suite, design tools, and creative workflows",
        "Excellent troubleshooting and problem-solving skills",
        "Strong communication and interpersonal skills",
        "Experience with MDM solutions and asset management"
      ]
    },
    role: {
      content: "As the Desktop Support Manager, you'll lead a team of support technicians and be responsible for ensuring our creative teams have seamless technology experiences. You'll also play a key role in selecting and implementing new tools and solutions.",
      items: [
        "Manage a team of desktop support technicians",
        "Provide hands-on support for complex technical issues",
        "Develop and maintain IT documentation and knowledge base articles",
        "Manage hardware and software inventory",
        "Evaluate and recommend new tools and technologies",
        "Coordinate with vendors and manage relationships",
        "Plan and execute hardware upgrades and migrations"
      ]
    }
  },
  {
    id: 7,
    company: "Pomodoro",
    logo: "pomodoro",
    logoBackground: "#7C3AED",
    position: "iOS Engineer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "United States",
    website: "pomodoro.com",
    apply: "https://pomodoro.com/jobs",
    description: "Pomodoro is on a mission to help people focus better and get more done. Our iOS app has over 2 million users and we're looking for an iOS Engineer to help us build new features and improve the user experience. This is a great opportunity to work on a product that users love and recommend to their friends.",
    requirements: {
      content: "We're looking for an iOS engineer who cares deeply about user experience and code quality. You should have experience shipping iOS apps and be comfortable working across the entire stack.",
      items: [
        "4+ years of iOS development experience with Swift",
        "Strong understanding of iOS frameworks and design patterns",
        "Experience with UIKit and SwiftUI",
        "Published apps in the App Store",
        "Familiarity with RESTful APIs and mobile app architecture",
        "Strong understanding of iOS human interface guidelines"
      ]
    },
    role: {
      content: "You'll work closely with our product and design teams to build features that delight users. You'll have significant ownership over the iOS codebase and the opportunity to influence product direction.",
      items: [
        "Build new features and improve existing functionality in our iOS app",
        "Write clean, maintainable code following best practices",
        "Collaborate with designers to implement pixel-perfect UIs",
        "Optimize app performance and fix bugs",
        "Participate in code reviews and architectural discussions",
        "Help define the iOS development roadmap",
        "Contribute to our engineering blog and open-source projects"
      ]
    }
  },
  {
    id: 8,
    company: "Coffeeroasters",
    logo: "coffeeroasters",
    logoBackground: "#F2DECF",
    position: "Senior Frontend Developer",
    postedAt: "1w ago",
    contract: "Part Time",
    location: "Singapore",
    website: "coffeeroasters.com",
    apply: "https://coffeeroasters.com/careers",
    description: "Coffeeroasters is transforming how people discover and purchase specialty coffee online. We're looking for a Senior Frontend Developer to join our team and help us create beautiful, performant web experiences. This is a part-time remote position perfect for someone looking for flexibility.",
    requirements: {
      content: "We need a frontend expert who can work independently and deliver high-quality work. You should have a strong portfolio demonstrating your skills and experience with modern e-commerce platforms.",
      items: [
        "6+ years of frontend development experience",
        "Expert knowledge of React, Next.js, and TypeScript",
        "Experience with e-commerce platforms (Shopify, Magento, or similar)",
        "Strong CSS skills and experience with styled-components or CSS-in-JS",
        "Understanding of web performance optimization techniques",
        "Experience with headless CMS and JAMstack architecture"
      ]
    },
    role: {
      content: "You'll be responsible for building and maintaining our e-commerce platform, working closely with our design and marketing teams to create compelling shopping experiences.",
      items: [
        "Develop new features for our Next.js e-commerce platform",
        "Implement responsive designs with attention to detail",
        "Optimize page load times and Core Web Vitals",
        "Integrate with third-party services and APIs",
        "Work with the marketing team on A/B testing and conversion optimization",
        "Maintain and improve our component library"
      ]
    }
  },
  {
    id: 9,
    company: "Maker",
    logo: "maker",
    logoBackground: "#3DB5A8",
    position: "Senior EJB Developer",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "maker.com",
    apply: "https://maker.com/jobs",
    description: "Maker is a fintech company building the infrastructure for the future of banking. We're looking for a Senior EJB Developer to work on our core banking systems. This is an opportunity to work with cutting-edge technology while maintaining mission-critical enterprise systems.",
    requirements: {
      content: "We need someone with deep expertise in enterprise Java technologies and a track record of working on large-scale systems. You should be comfortable with both maintaining legacy systems and building new services.",
      items: [
        "8+ years of Java enterprise development experience",
        "Strong knowledge of EJB, JPA, and Java EE/Jakarta EE",
        "Experience with application servers (WildFly, WebLogic, or WebSphere)",
        "Understanding of microservices architecture and SOA",
        "Experience with financial systems is a plus",
        "Strong SQL skills and database optimization experience"
      ]
    },
    role: {
      content: "You'll work on our core banking platform, building new features while maintaining and improving existing systems. This role requires someone who can balance innovation with stability.",
      items: [
        "Design and implement enterprise applications using EJB and related technologies",
        "Maintain and modernize legacy banking systems",
        "Build RESTful and SOAP web services",
        "Optimize application performance and database queries",
        "Ensure compliance with financial regulations and security standards",
        "Lead technical discussions and architectural decisions",
        "Mentor junior developers and conduct code reviews"
      ]
    }
  },
  {
    id: 10,
    company: "Crowdfund",
    logo: "crowdfund",
    logoBackground: "#62BCBC",
    position: "Fullstack Developer",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "New Zealand",
    website: "crowdfund.com",
    apply: "https://crowdfund.com/careers",
    description: "Crowdfund is democratizing investment by connecting innovative projects with passionate backers. We're looking for a Fullstack Developer to help us build features that make crowdfunding more accessible and transparent. This is a part-time remote position based in New Zealand.",
    requirements: {
      content: "We're looking for a versatile developer comfortable working on both frontend and backend. You should be product-minded and able to take features from concept to deployment.",
      items: [
        "4+ years of fullstack development experience",
        "Proficiency with React and Node.js",
        "Experience with PostgreSQL or similar relational databases",
        "Understanding of payment processing and financial transactions",
        "Familiarity with modern deployment practices and cloud platforms",
        "Strong problem-solving and communication skills"
      ]
    },
    role: {
      content: "You'll work across our entire stack, building features that help creators fund their projects and allow backers to discover and support campaigns they care about.",
      items: [
        "Develop features across our React frontend and Node.js backend",
        "Implement payment processing and transaction handling",
        "Build and maintain RESTful APIs",
        "Write tests and ensure code quality",
        "Collaborate with designers on UI/UX implementation",
        "Participate in sprint planning and technical discussions",
        "Help shape our technical roadmap"
      ]
    }
  },
  {
    id: 11,
    company: "Typemaster",
    logo: "typemaster",
    logoBackground: "#F16718",
    position: "Technical Lead Engineer",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "United Kingdom",
    website: "typemaster.com",
    apply: "https://typemaster.com/jobs",
    description: "Typemaster designs and manufactures premium mechanical keyboards for professionals and enthusiasts. We're looking for a Technical Lead Engineer to oversee the development of our e-commerce platform and internal tools. This role combines technical leadership with hands-on development.",
    requirements: {
      content: "We need a technical leader who can balance strategic thinking with hands-on coding. You should have experience leading small teams and making architectural decisions.",
      items: [
        "8+ years of software development experience",
        "3+ years in a technical leadership role",
        "Strong knowledge of modern web technologies (React, Node.js, TypeScript)",
        "Experience with e-commerce platforms and payment integrations",
        "Proven track record of delivering complex projects",
        "Excellent communication and mentoring skills"
      ]
    },
    role: {
      content: "As Technical Lead, you'll be responsible for the technical direction of our platform while also contributing code. You'll work closely with the founders and play a key role in shaping our technology strategy.",
      items: [
        "Lead the development of our e-commerce platform and internal tools",
        "Make architectural decisions and define technical standards",
        "Mentor engineers and conduct code reviews",
        "Collaborate with stakeholders on product roadmap and priorities",
        "Hands-on development of critical features",
        "Evaluate and implement new technologies",
        "Build and manage relationships with technical partners"
      ]
    }
  },
  {
    id: 12,
    company: "Mastercraft",
    logo: "mastercraft",
    logoBackground: "#1E1E1E",
    position: "App & Website Designer",
    postedAt: "2w ago",
    contract: "Freelance",
    location: "United States",
    website: "mastercraft.com",
    apply: "https://mastercraft.com/hire",
    description: "Mastercraft is a product design studio working with startups and established companies to create exceptional digital experiences. We're looking for an App & Website Designer to join our team on a freelance basis. This is perfect for a designer who values creative freedom and variety.",
    requirements: {
      content: "We're looking for a designer with a strong portfolio showcasing both web and mobile work. You should be comfortable working independently and managing multiple projects simultaneously.",
      items: [
        "5+ years of digital product design experience",
        "Expert knowledge of Figma and modern design tools",
        "Strong portfolio demonstrating web and mobile app design",
        "Understanding of interaction design and user experience principles",
        "Experience with design systems and component libraries",
        "Excellent communication and presentation skills",
        "Ability to work within brand guidelines while bringing fresh ideas"
      ]
    },
    role: {
      content: "You'll work on diverse projects ranging from mobile apps to marketing websites. You'll collaborate with our team and clients to create designs that are both beautiful and functional.",
      items: [
        "Design interfaces for web and mobile applications",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Develop and maintain design systems",
        "Collaborate with developers to ensure accurate implementation",
        "Present designs to clients and stakeholders",
        "Conduct user research and incorporate feedback",
        "Stay current with design trends and best practices"
      ]
    }
  }
];

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Generate company logo initials and background
function getCompanyInitials(companyName) {
  return companyName.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
}

// Format time posted
function formatTimePosted(time) {
  return time;
}

// ========================================
// THEME TOGGLE
// ========================================

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    });
  }
}

// ========================================
// JOB LISTING PAGE
// ========================================

let displayedJobs = [];
let filteredJobs = [...jobs];
let jobsToShow = 9;

function renderJobCards() {
  const jobsGrid = document.getElementById('jobsGrid');
  if (!jobsGrid) return;

  jobsGrid.innerHTML = '';
  displayedJobs = filteredJobs.slice(0, jobsToShow);

  displayedJobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.onclick = () => navigateToDetail(job.id);
    
    jobCard.innerHTML = `
      <div class="company-logo" style="background-color: ${job.logoBackground}">
        ${getCompanyInitials(job.company)}
      </div>
      <div class="job-meta">
        ${formatTimePosted(job.postedAt)} • ${job.contract}
      </div>
      <h2 class="job-title">${job.position}</h2>
      <p class="job-company">${job.company}</p>
      <p class="job-location">${job.location}</p>
    `;
    
    jobsGrid.appendChild(jobCard);
  });

  // Update load more button visibility
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = displayedJobs.length < filteredJobs.length ? 'block' : 'none';
  }
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const locationFilter = document.getElementById('locationFilter');
  const fullTimeCheckbox = document.getElementById('fullTimeCheckbox');
  const searchBtn = document.getElementById('searchBtn');

  // Checkbox toggle
  if (fullTimeCheckbox) {
    fullTimeCheckbox.addEventListener('click', () => {
      fullTimeCheckbox.classList.toggle('checked');
      const checkmark = fullTimeCheckbox.querySelector('.checkmark');
      if (checkmark) {
        checkmark.style.display = fullTimeCheckbox.classList.contains('checked') ? 'block' : 'none';
      }
    });
  }

  // Search function
  const performSearch = () => {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const locationTerm = locationFilter?.value.toLowerCase() || '';
    const fullTimeOnly = fullTimeCheckbox?.classList.contains('checked') || false;

    filteredJobs = jobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.position.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm);
      
      const matchesLocation = !locationTerm || 
        job.location.toLowerCase().includes(locationTerm);
      
      const matchesContract = !fullTimeOnly || 
        job.contract.toLowerCase() === 'full time';

      return matchesSearch && matchesLocation && matchesContract;
    });

    jobsToShow = 9;
    renderJobCards();
  };

  // Event listeners
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }

  if (locationFilter) {
    locationFilter.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
}

function setupLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      jobsToShow += 3;
      renderJobCards();
    });
  }
}

function navigateToDetail(jobId) {
  window.location.href = `detail.html?id=${jobId}`;
}

// ========================================
// JOB DETAIL PAGE
// ========================================

function renderJobDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = parseInt(urlParams.get('id'));
  const job = jobs.find(j => j.id === jobId);

  if (!job) {
    window.location.href = 'index.html';
    return;
  }

  // Update page title
  document.getElementById('pageTitle').textContent = `${job.position} at ${job.company} - devjobs`;

  // Render company header
  const companyHeader = document.getElementById('companyHeader');
  if (companyHeader) {
    companyHeader.innerHTML = `
      <div class="company-logo-large" style="background-color: ${job.logoBackground}">
        ${getCompanyInitials(job.company)}
      </div>
      <div class="company-info">
        <h2 class="company-name">${job.company}</h2>
        <p class="company-website">${job.website}</p>
      </div>
      <a href="${job.apply}" target="_blank" class="btn-company-site">Company Site</a>
    `;
  }

  // Render job detail card
  const jobDetailCard = document.getElementById('jobDetailCard');
  if (jobDetailCard) {
    jobDetailCard.innerHTML = `
      <div class="job-header">
        <div class="job-detail-meta">
          ${formatTimePosted(job.postedAt)} • ${job.contract}
        </div>
        <h1 class="job-detail-title">${job.position}</h1>
        <p class="job-detail-location">${job.location}</p>
        <button class="btn-apply" onclick="applyForJob('${job.apply}')">Apply Now</button>
      </div>

      <div class="job-description">
        <p>${job.description}</p>
      </div>

      <div class="job-section">
        <h3>Requirements</h3>
        <p>${job.requirements.content}</p>
        <ul>
          ${job.requirements.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="job-section">
        <h3>What You Will Do</h3>
        <p>${job.role.content}</p>
        <ol>
          ${job.role.items.map(item => `<li>${item}</li>`).join('')}
        </ol>
      </div>
    `;
  }

  // Render footer
  const jobFooter = document.getElementById('jobFooter');
  if (jobFooter) {
    jobFooter.innerHTML = `
      <div class="footer-job-info">
        <h3>${job.position}</h3>
        <p>${job.company}</p>
      </div>
      <button class="footer-btn-apply" onclick="applyForJob('${job.apply}')">Apply Now</button>
    `;
  }
}

function applyForJob(applyUrl) {
  window.open(applyUrl, '_blank');
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  setupThemeToggle();

  // Check which page we're on
  const isDetailPage = window.location.pathname.includes('detail.html');

  if (isDetailPage) {
    // Detail page
    renderJobDetail();
  } else {
    // Listing page
    renderJobCards();
    setupSearch();
    setupLoadMore();
  }
});
