const express = require("express");
const app = express();

const port = 5001;

const path = require("path");

const posts = [
    {
        id: 1,
        title: "Started Building My Personal Portfolio",
        date: "21 Jul 2026",
        desc: "Today I started developing my portfolio website using Express.js, EJS and CSS. My goal is to create a clean, modern portfolio that showcases my projects, technical skills, achievements and latest activities while keeping everything dynamic."
    },

    {
        id: 2,
        title: "Completed Express.js Fundamentals",
        date: "20 Jul 2026",
        desc: "Finished learning Express routing, middleware, serving static files and EJS templating. The next step is connecting the application with MongoDB so that posts and projects can be managed dynamically."
    },

    {
        id: 3,
        title: "Solved LeetCode 863",
        date: "19 Jul 2026",
        desc: "Successfully solved All Nodes Distance K in Binary Tree after understanding graph conversion and BFS traversal. Learned an alternative DFS approach as well."
    },

    {
        id: 4,
        title: "Created Latest Updates Component",
        date: "18 Jul 2026",
        desc: "Designed a reusable activity feed that automatically displays the newest five updates on the home page while keeping older posts accessible from the All Posts section."
    },

    {
        id: 5,
        title: "Designed Responsive Intro Card",
        date: "18 Jul 2026",
        desc: "Redesigned the landing section with a floating glass-style card, profile picture, typography improvements and subtle animations to create a cleaner first impression."
    },

    {
        id: 6,
        title: "Learning MongoDB",
        date: "17 Jul 2026",
        desc: "Started learning MongoDB collections, documents, CRUD operations and schema design in preparation for replacing the temporary JavaScript arrays with a database."
    },

    {
        id: 7,
        title: "Implemented Dynamic Navigation",
        date: "16 Jul 2026",
        desc: "Navigation tabs now automatically highlight the currently active page using EJS variables instead of hardcoded classes."
    },

    {
        id: 8,
        title: "Started Project Showcase",
        date: "15 Jul 2026",
        desc: "Designed the structure for displaying projects with screenshots, technologies used, GitHub links and deployment links."
    },

    {
        id: 9,
        title: "Improved Website Performance",
        date: "14 Jul 2026",
        desc: "Optimized images, reduced unnecessary CSS, improved layout consistency and prepared reusable components for future pages."
    },

    {
        id: 10,
        title: "Learning Advanced CSS",
        date: "13 Jul 2026",
        desc: "Explored Flexbox, Grid, transitions, hover animations, shadows and responsive layouts to improve the visual quality of the website."
    },

    {
        id: 11,
        title: "Started Timeline Page",
        date: "12 Jul 2026",
        desc: "Planning a chronological timeline showing academic achievements, internships, certifications, hackathons and important milestones."
    },

    {
        id: 12,
        title: "Built Project Cards",
        date: "11 Jul 2026",
        desc: "Created reusable project cards with hover effects, technology badges and external links for GitHub repositories."
    },

    {
        id: 13,
        title: "Planning Blog Section",
        date: "10 Jul 2026",
        desc: "The blog section will contain articles about web development, DSA, projects and my learning journey with search and category filters."
    },

    {
        id: 14,
        title: "Improved Portfolio UI",
        date: "9 Jul 2026",
        desc: "Added rounded cards, subtle shadows, better spacing and modern typography inspired by contemporary portfolio websites."
    },

    {
        id: 15,
        title: "Portfolio Roadmap Created",
        date: "8 Jul 2026",
        desc: "Prepared a complete roadmap for the portfolio including Home, Projects, Timeline, Blog, Contact and future integration with a backend database."
    }
];

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});


