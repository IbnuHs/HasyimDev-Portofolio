import blogblok1 from "/src/data/images/blogblok/blogblok.png";
import blogblok2 from "/src/data/images/blogblok/blogblok2.png";
import blogblok3 from "/src/data/images/blogblok/blogblok3.png";
import blogblok4 from "/src/data/images/blogblok/blogblok4.png";
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

// Tracking Logistic
import thumbnailTrackinglogistic from "/src/data/images/tracking logistic/kallatranslog_logo.jpeg";
import tracklog from "/src/data/images/tracking logistic/tracklog.png";
import tracklog1 from "/src/data/images/tracking logistic/tracklog1.png";
import tracklog2 from "/src/data/images/tracking logistic/tracklog2.png";

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
      lostandfounf4,
      lostandfounf5,
      lostandfounf6,
      lostandfounf7,
      lostandfounf8,
    ],
    thumbnail: thumbnailLF,
    alert: "",
    detail: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus facere fugit rem error molestiae eveniet! Accusamus eos aspernatur, vel, sit labore laborum facilis accusantium nostrum ab, placeat perspiciatis expedita.
      Voluptatum eos voluptatem ad nobis nihil hic blanditiis earum aliquid atque ea fuga, odio in dicta vel aspernatur exercitationem sed et minus, rem velit dolorum reprehenderit pariatur molestias dignissimos! Deserunt.`,
  },
  {
    id: 2,
    title: "BlogBlok",
    type: "Front-End",
    techsStack: "ReactJs, TailwindCss",
    urlImg: [
      blogblok1,
      blogblok2,
      blogblok3,
      blogblok4,
      blogblok5,
      blogblok6,
      blogblok7,
    ],
    thumbnail: thumbnailblogblok,
    url: "",
  },

  {
    id: 3,
    title: "News Apps",
    type: "Front-End",
    techsStack: "ReactJs, TailwindCss",
    urlImg: [newsApps2, newsApps3, newsApps4, newsApps5, newsApps6],
    thumbnail: newsAppsThumbnail,
    alert:
      "The Project Not Deployed because the API is not free for Production",
    url: "",
  },
  {
    id: 4,
    title: "Tracking Logistic API",
    type: "Back-End",
    techsStack: "NestJs, MySQL, NodeMailer",
    urlImg: [tracklog, tracklog1, tracklog2],
    thumbnail: thumbnailTrackinglogistic,
  },
  {
    id: 5,
    title: "Dashboard Customer Profiling",
    type: "Data Visualitation",
    techsStack: "KNIME, Power BI",
    thumbnail: "",
    url: "",
  },
  {
    id: 6,
    title: "Dashboard Customer Honda Care",
    type: "Data Visualitation",
    techsStack: "KNIME, Power BI",
    thumbnail: "",
    url: "",
  },
  {
    id: 7,
    title: "Automatic Spreadsheet Filling Tool - Dealer Sales Data",
    type: "Data Visualitation",
    techsStack: "Google App Script, Mailer, Spreadsheet",
    thumbnail: "",
    url: "",
  },
  {
    id: 8,
    title: "Automatic Spreadsheet Filling Tools - KPB Service Data",
    type: "Data Visualitation",
    techsStack: "Google App Script, Mailer, Spreadsheet",
    thumbnail: "",
    url: "",
  },
];
