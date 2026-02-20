export const CARD_BLOG = [
  {
    id: 1,
    title: "Startup",
    description: "Why Data Security is Vital for Every SaaS Platform",
    date: "OCT 10, 2024",
    imageBlog: "/images/blog1.png",
    detailImage: "/images/usLap.png",
  },
  {
    id: 2,
    title: "SaaS",
    description: "Efficient Strategies for Scaling Your SaaS Business",
    date: "MAR 13, 2025",
    imageBlog: "/images/blog2.png",
    detailImage: "/images/usLap1.png",
  },
  {
    id: 3,
    title: "AI",
    description: "The Ultimate SaaS Template for Startups",
    date: "FEB 16, 2025",
    imageBlog: "/images/blog3.png",
    detailImage: "/images/usLap2.png",
  },
];

export const ALL_BLOG_POSTS = [
  // Originally BLOG_POSTS from business-atps
  {
    id: "1",
    title: "STARTUP",
    description: "Why Data Security is Vital for Every SaaS Platform",
    date: "Oct 10, 2024",
    imageBlog: "/assets/girl1.avif",
  },
  {
    id: "2",
    title: "SAAS",
    description: "Efficient Strategies for Scaling Your SaaS Business",
    date: "Mar 13, 2025",
    imageBlog: "/assets/boys.avif",
  },
  {
    id: "3",
    title: "AI",
    description: "The Ultimate SaaS Template for Startups",
    date: "Feb 16, 2025",
    imageBlog: "/assets/girl2.avif",
  },
  // Originally BLOG_FEATURED_POSTS
  {
    id: "101",
    title: "Security",
    description: "Ensuring Academic Integrity in Online Exams",
    date: "Dec 29, 2025",
    imageBlog: "/assets/pic.png",
    author: { name: "Dr. Shridhar Deshmukh", avatar: "/assets/user_g.png" },
  },
  {
    id: "102",
    title: "EdTech",
    description: "Scaling Digital Classrooms Without Downtime",
    date: "Dec 22, 2025",
    imageBlog: "/assets/analystic_ad.avif",
    author: { name: "Adi Griever", avatar: "/assets/user_b.png" },
  },
  // Originally BLOG_FEED_POSTS
  {
    id: "103",
    title: "EdTech",
    description: "Shaping the Future of Online Education in 2026",
    date: "Jan 02, 2026",
    imageBlog: "/assets/online_exam.avif", // Placeholder or reused
  },
  {
    id: "104",
    title: "Security",
    description: "Keeping Online Exams Secure Across Platforms",
    date: "Dec 23, 2025",
    imageBlog: "/assets/cube.png",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "105",
    title: "Best Practices",
    description: "Scaling Digital Classrooms for Large Student Cohorts",
    date: "Dec 19, 2025",
    imageBlog: "/assets/large_class.avif", // Placeholder
  },
  {
    id: "106",
    title: "EdTech AI",
    description: "Automating Quiz Grading with AI",
    date: "Dec 17, 2025",
    imageBlog: "/assets/ia_p.avif",
    author: { name: "Pedro Figueiredo", avatar: "/assets/user_g.png" },
  },
  {
    id: "107",
    title: "Learning Tools",
    description: "Why Interactive Learning Modules Boost Engagement",
    date: "Dec 12, 2025",
    imageBlog: "/assets/data_m.avif",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "108",
    title: "Assessment",
    description: "Designing Effective Quizzes That Actually Improve Learning",
    date: "Dec 12, 2025",
    imageBlog: "/assets/quiz_design.avif", // Placeholder
  },
  // Originally BLOG_DETAILS (some overlap but including for completeness if distinct)
  {
    id: "201",
    title: "E-Learning",
    description: "Why Secure Online Exams Are Essential for Modern Education",
    date: "Jan 10, 2026",
    imageBlog: "/assets/online_exam.avif",
  },
  {
    id: "202",
    title: "Assessment",
    description: "Best Practices for Creating Effective Online Quizzes",
    date: "Feb 13, 2026",
    imageBlog: "/assets/quiz_strategy.avif",
  },
  {
    id: "203",
    title: "EdTech",
    description: "How Proctored Exams Improve Academic Integrity",
    date: "Mar 16, 2026",
    imageBlog: "/assets/proctoring.avif",
  },
  {
    id: "204",
    title: "Workflow",
    description: "Top Tips for Automating Student Evaluations",
    date: "Jan 29, 2026",
    imageBlog: "/assets/automation.avif",
  },
  {
    id: "205",
    title: "Analytics",
    description: "Data Analytics in E-Learning: Measuring Student Performance",
    date: "Feb 22, 2026",
    imageBlog: "/assets/analytics.avif",
  },
  {
    id: "206",
    title: "Learning Tools",
    description: "Enhancing Engagement with Interactive Learning Modules",
    date: "Mar 02, 2026",
    imageBlog: "/assets/interactive.avif",
  },
  {
    id: "207",
    title: "E-Learning",
    description: "The Future of E-Learning: Cloud-Based Platforms",
    date: "Feb 12, 2026",
    imageBlog: "/assets/cloud_learning.avif",
  },
];

export const NEWS_CATEGORIES = [
  "All",
  "EdTech",
  "Security",
  "Best Practices",
  "EdTech AI",
  "Learning Tools",
  "Assessment",
  "Workflow",
  "Analytics",
  "E-Learning",
];

export const ALL_NEWS = [
  {
    id: "103",
    title: "Shaping the Future of Online Education in 2026",
    category: "EdTech",
    date: "Jan 02, 2026",
    excerpt:
      "Discover the emerging trends that will redefine how we teach and learn online in the coming years.",
    image: "/assets/girl1.avif",
    content:
      "As we move into 2026, online education is poised for a major transformation. From immersive technologies to AI-driven personalization, the landscape is shifting rapidly. Institutions that adapt to these changes will be better positioned to serve their students and faculty. Key trends include the rise of micro-credentials, the integration of VR/AR in classrooms, and a renewed focus on accessibility.",
    author: { name: "Dr. Carlota Soto", avatar: "" },
  },
  {
    id: "104",
    title: "Keeping Online Exams Secure Across Platforms",
    category: "Security",
    date: "Dec 23, 2025",
    excerpt:
      "Maintaining exam integrity is critical. Learn how secure proctoring and cloud-based solutions prevent cheating and ensure fairness.",
    image: "/assets/cube.png",
    content:
      "Security in online exams is a top priority for educational institutions. with the proliferation of remote learning, ensuring that assessments are fair and valid is more challenging than ever. New technologies, such as AI-proctoring and secure browser lockdowns, are helping to mitigate risks. However, balancing security with user privacy remains a key concern for administrators.",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "105",
    title: "Scaling Digital Classrooms for Large Student Cohorts",
    category: "Best Practices",
    date: "Dec 19, 2025",
    excerpt:
      "Strategies for managing large online classes without compromising engagement or educational quality.",
    image: "/assets/smart.avif",
    content:
      "Managing large digital classrooms requires a different approach than traditional lecturing. Instructors need to leverage tools that allow for scalable interaction, such as breakout rooms, automated quizzes, and peer review systems. This article explores best practices for keeping hundreds of students engaged simultaneously while maintaining a personal connection.",
    author: { name: "Admin", avatar: "" },
  },
  {
    id: "106",
    title: "Automating Quiz Grading with AI",
    category: "EdTech AI",
    date: "Dec 17, 2025",
    excerpt:
      "Explore how AI-powered grading can reduce instructor workload and provide instant feedback to students.",
    image: "/assets/ia_p.avif",
    content:
      "AI is revolutionizing the grading process. By automating the assessment of quizzes and even essays, instructors can save valuable time and provide students with immediate, actionable feedback. This shift allows educators to focus more on mentorship and less on administrative tasks.",
    author: { name: "Pedro Figueiredo", avatar: "/assets/user_g.png" },
  },
  {
    id: "107",
    title: "Why Interactive Learning Modules Boost Engagement",
    category: "Learning Tools",
    date: "Dec 12, 2025",
    excerpt:
      "Interactive modules keep students engaged and improve knowledge retention compared to traditional static content.",
    image: "/assets/data_m.avif",
    content:
      "Static PDFs and long video lectures are becoming things of the past. Interactive learning modules, which require active student participation, have been shown to significantly boost engagement and retention rates. Gamification elements, quizzes, and simulations are just a few examples of how interactivity can be woven into the curriculum.",
    author: { name: "Dr. Carlota Soto", avatar: "/assets/user_b.png" },
  },
  {
    id: "108",
    title: "Designing Effective Quizzes That Actually Improve Learning",
    category: "Assessment",
    date: "Dec 12, 2025",
    excerpt:
      "Quizzes shouldn't just be for grades. Learn how to design assessments that reinforce learning and identify gaps.",
    image: "/assets/adaptive.avif",
    content:
      "Effective quizzes do more than just measure performance; they reinforce learning. By designing questions that require critical thinking and providing detailed feedback, instructors can turn assessments into powerful learning tools. This article covers the principles of good quiz design, including distractor analysis and question variety.",
    author: { name: "John Doe", avatar: "" },
  },
  {
    id: "201",
    title: "Why Secure Online Exams Are Essential for Modern Education",
    category: "E-Learning",
    date: "Jan 10, 2026",
    excerpt:
      "As education moves online, the integrity of exams becomes paramount. Here's why security matters.",
    image: "/assets/online_exam.avif",
    content:
      "The shift to online education has brought about a need for robust security measures in examinations. Without secure testing environments, the value of online degrees and certifications could be compromised. We discuss the importance of secure browsers, identity verification, and plagiarism detection in maintaining the credibility of online education.",
    author: { name: "Jane Doe", avatar: "" },
  },
  {
    id: "202",
    title: "Best Practices for Creating Effective Online Quizzes",
    category: "Assessment",
    date: "Feb 13, 2026",
    excerpt:
      "A guide to creating quizzes that accurately measure student understanding and progress.",
    image: "/assets/quiz_strategy.avif",
    content:
      "Creating an effective online quiz involves more than just writing questions. It requires careful consideration of learning objectives, question formats, and timing. This guide provides actionable tips for educators looking to improve their online assessment strategies.",
    author: { name: "Jim Doe", avatar: "" },
  },
  {
    id: "203",
    title: "How Proctored Exams Improve Academic Integrity",
    category: "EdTech",
    date: "Mar 16, 2026",
    excerpt:
      "Proctoring technology is evolving. See how modern solutions help maintain academic standards.",
    image: "/assets/proctoring.avif",
    content:
      "Proctored exams are a cornerstone of academic integrity in online learning. Modern proctoring solutions use a combination of AI and human oversight to monitor exams and prevent cheating. We explore the latest advancements in this field and how they are being adopted by institutions worldwide.",
    author: { name: "Admin", avatar: "" },
  },
  {
    id: "204",
    title: "Top Tips for Automating Student Evaluations",
    category: "Workflow",
    date: "Jan 29, 2026",
    excerpt:
      "Automation can save time and improve consistency in student evaluations. Here are some tips to get started.",
    image: "/assets/automation.avif",
    content:
      "Automating student evaluations can streamline the grading process and ensure that feedback is consistent and timely. We discuss various tools and strategies for automating evaluations, from rubric-based grading to AI-powered assessment platforms.",
    author: { name: "Admin", avatar: "" },
  },
  {
    id: "205",
    title: "Data Analytics in E-Learning: Measuring Student Performance",
    category: "Analytics",
    date: "Feb 22, 2026",
    excerpt:
      "Data analytics provides valuable insights into student performance. Learn how to leverage data for better outcomes.",
    image: "/assets/analytics.avif",
    content:
      "Data analytics is transforming the field of e-learning. By analyzing student data, educators can identify at-risk students, personalize learning paths, and improve overall course effectiveness. We explore the key metrics to track and how to interpret them.",
    author: { name: "Admin", avatar: "" },
  },
  {
    id: "206",
    title: "Enhancing Engagement with Interactive Learning Modules",
    category: "Learning Tools",
    date: "Mar 02, 2026",
    excerpt:
      "Interactive learning modules can make a big difference in student engagement. Here's how to create them.",
    image: "/assets/interactive.avif",
    content:
      "Interactive learning modules are a powerful tool for engaging students. By incorporating quizzes, simulations, and other interactive elements, educators can create a more dynamic and effective learning experience. We provide tips and examples for designing secure and engaging interactive modules.",
    author: { name: "Admin", avatar: "" },
  },
  {
    id: "207",
    title: "The Future of E-Learning: Cloud-Based Platforms",
    category: "E-Learning",
    date: "Feb 12, 2026",
    excerpt:
      "Cloud-based platforms are the future of e-learning. Discover the benefits of moving to the cloud.",
    image: "/assets/cloud_learning.avif",
    content:
      "Cloud-based platforms offer numerous advantages for e-learning, including scalability, accessibility, and cost-effectiveness. We discuss the trends driving the adoption of cloud-based learning management systems and what the future holds for this technology.",
    author: { name: "Admin", avatar: "" },
  },
];
