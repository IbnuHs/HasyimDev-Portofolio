import blogblok1 from "/src/data/images/blogblok/blogblok.png";
import blogblok2 from "/src/data/images/blogblok/blogblok2.png";
import blogblok3 from "/src/data/images/blogblok/blogblok3.png";
import blogblok5 from "/src/data/images/blogblok/blogblok5.png";
import blogblok6 from "/src/data/images/blogblok/blogblok6.png";
import blogblok7 from "/src/data/images/blogblok/blogblok7.png";
import thumbnailblogblok from "/src/data/images/blogblok/ThumbnailBlogBlok.png";

// Lost and found
import thumbnailLF from "/src/data/images/lost&found/thumbnaillostandfound.png";
import lostandfounf from "/src/data/images/lost&found/lost&found.png";
import lostandfounf2 from "/src/data/images/lost&found/lost&found2.png";
import lostandfounf3 from "/src/data/images/lost&found/lost&found3.png";
import lostandfounf4 from "/src/data/images/lost&found/lost&found4.png";
import lostandfounf5 from "/src/data/images/lost&found/lost&found5.png";
import lostandfounf6 from "/src/data/images/lost&found/lost&found6.png";
import lostandfounf7 from "/src/data/images/lost&found/lost&found7.png";
import lostandfounf8 from "/src/data/images/lost&found/lost&found8.png";

// News Apps
import newsAppsThumbnail from "/src/data/images/News Apps/thumbnail.png";
import newsApps2 from "/src/data/images/News Apps/News Apps2.png";
import newsApps3 from "/src/data/images/News Apps/News Apps3.png";
import newsApps4 from "/src/data/images/News Apps/News Apps4.png";
import newsApps5 from "/src/data/images/News Apps/News Apps5.png";
import newsApps6 from "/src/data/images/News Apps/News Apps6.png";
import newsApps7 from "/src/data/images/News Apps/News Apps7.png";

// Tracking Logistic
import thumbnailTrackinglogistic from "/src/data/images/tracking logistic/kallatranslog_logo.jpeg";
import tracklog from "/src/data/images/tracking logistic/tracklog.png";
import tracklog1 from "/src/data/images/tracking logistic/tracklog1.png";
import tracklog2 from "/src/data/images/tracking logistic/tracklog2.png";

// Music apps
import thumbnailmusicapps from "/src/data/images/music-apps/music-apps thumbnail.png";
import musicapps1 from "/src/data/images/music-apps/music-apps1.png";
import musicapps2 from "/src/data/images/music-apps/music-Apps2.png";
import musicapps3 from "/src/data/images/music-apps/music-apps3.png";

// Customer profiling
import customerprofiling1 from "/src/data/images/customer profiling/customer-profiling (1).png";
import customerprofiling2 from "/src/data/images/customer profiling/customer-profiling (2).png";
import customerprofiling3 from "/src/data/images/customer profiling/customer-profiling (3).png";
import customerprofiling4 from "/src/data/images/customer profiling/customer-profiling (4).png";
import customerprofiling5 from "/src/data/images/customer profiling/customer-profiling (5).png";
import customerprofiling6 from "/src/data/images/customer profiling/customer-profiling (6).png";

export const projects = [
  {
    id: 1,
    title: "Lost & Found",
    type: "Full-Stack",
    techsStack: "ReactJs, TailwindCss, NestJs, MySQL",
    urlImg: [
      lostandfounf,
      lostandfounf2,
      lostandfounf3,
      lostandfounf4,
      lostandfounf5,
      lostandfounf6,
      lostandfounf7,
      lostandfounf8,
    ],
    thumbnail: thumbnailLF,
    alert:
      "The backend service is currently unavailable. The application is running in frontend-only mode. Some features may not work properly until the backend is restored.",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus facere fugit rem error molestiae eveniet! Accusamus eos aspernatur, vel, sit labore laborum facilis accusantium nostrum ab, placeat perspiciatis expedita.
      Voluptatum eos voluptatem ad nobis nihil hic blanditiis earum aliquid atque ea fuga, odio in dicta vel aspernatur exercitationem sed et minus, rem velit dolorum reprehenderit pariatur molestias dignissimos! Deserunt.`,
    url: "https://lost-and-found.pages.dev/",
  },
  {
    id: 2,
    title: "BlogBlok",
    type: "Front-End",
    techsStack: "ReactJs, TailwindCss",
    urlImg: [blogblok1, blogblok3, blogblok5, blogblok6, blogblok7, blogblok2],
    alert:
      "This application is currently under development. At this stage, only several frontend pages are available, and some features may be limited. The backend (API) is still in progress and will be integrated in future updates to support full functionality.",
    detail: `BlogBlok is a web application that allows users to write and share personal stories or daily life experiences in the form of blogs or news posts. Users can create their own content, interact with others through likes, and explore posts from a diverse range of writers. With a responsive design and clean user interface, BlogBlok encourages self-expression and fosters an active community. The application is built using React.js and Tailwind CSS, providing a fast, lightweight, and modern user experience.`,
    thumbnail: thumbnailblogblok,
    url: "https://blogblok.pages.dev/",
  },

  {
    id: 3,
    title: "News Apps",
    type: "Front-End",
    techsStack: "ReactJs, TailwindCss",
    urlImg: [newsApps2, newsApps3, newsApps4, newsApps5, newsApps6, newsApps7],
    thumbnail: newsAppsThumbnail,
    alert:
      "The Project Not Deployed because the API is not free for Production, if you ask Why??  because im a poor developer hahahahaha....",
    url: "",
    detail:
      "This news application is a platform that delivers the latest and most relevant headlines from around the world by integrating data from the News API. It provides users with real-time updates across various categories such as technology, business, health, and entertainment. The application is designed with a clean and responsive user interface, allowing users to easily browse and read articles from multiple trusted news sources. Each article includes essential details like the title, source, publication date, and a brief summary, with a link to read the full story. This project not only demonstrates how to consume external APIs but also showcases modern frontend development practices using React and TailwindCSS, offering a fast, intuitive, and informative user experience.",
  },
  {
    id: 4,
    title: "Tracking Logistic API",
    type: "Back-End",
    techsStack: "NestJs, MySQL, NodeMailer",
    urlImg: [tracklog, tracklog1, tracklog2],
    thumbnail: thumbnailTrackinglogistic,
    detail: `This project is a freight tracking system developed for Kalla Translog expeditions. The system allows users to track the status and location of the goods they send through the Kalla Translog service in real-time. This project was developed during the Merdeka Campus Internship program at Kalla Group. In this project, I was responsible as a backend developer who focused on creating and developing a RESTful API to support the needs of the frontend team. The API I built was tasked with providing shipment tracking data, including information on shipment status and last location.`,
  },
  {
    id: 5,
    title: "Dashboard Customer Profiling",
    type: "Data Visualitation",
    techsStack: "KNIME, Power BI",
    urlImg: [
      customerprofiling1,
      customerprofiling2,
      customerprofiling3,
      customerprofiling4,
      customerprofiling5,
      customerprofiling6,
    ],
    thumbnail: customerprofiling3,
    url: "",
    detail: `This project involves the development of an interactive dashboard showcasing sales data of Honda motorcycles in the Papua region over several years. The raw data was first processed using KNIME for cleaning, transformation, and aggregation. Afterward, the processed data was visualized using Power BI. The dashboard is designed to provide strategic insights into sales trends, regional performance, and growth patterns over time, supporting better and more informed business decision-making.`,
  },
  {
    id: 6,
    title: "Dashboard Customer Honda Care",
    type: "Data Visualitation",
    techsStack: "KNIME, Power BI",
    urlImg: "",
    thumbnail: "",
    url: "",
  },
  {
    id: 7,
    title: "Automatic Spreadsheet Filling Tool - Dealer Sales Data",
    type: "Data Visualitation",
    techsStack: "Google App Script, Mailer, Spreadsheet",
    urlImg: "",
    thumbnail: "",
    url: "",
  },
  {
    id: 8,
    title: "Automatic Spreadsheet Filling Tools - KPB Service Data",
    type: "Data Visualitation",
    techsStack: "Google App Script, Mailer, Spreadsheet",
    urlImg: "",
    thumbnail: "",
    url: "",
  },

  {
    id: 9,
    title: "Music Apps",
    type: "Desktop Apps",
    techsStack: "Electron.js, Html, Css, Javascript (Vanilla)",
    urlImg: [musicapps1, musicapps2, musicapps3],
    thumbnail: thumbnailmusicapps,
    alert:
      "This application is currently not publicly available as I am in the process of determining the most efficient hosting and storage solution for distribution. Once deployment infrastructure is finalized, a download link or demo will be provided.",
    url: "",
    detail:
      "A modern music player application based on Electron.js that allows users to read, play and manage local music files from the application directory. Designed with a simple yet interactive interface, the app utilizes HTML, CSS and JavaScript on the frontend and Node.js on the backend through the Electron architecture.",
  },
];
