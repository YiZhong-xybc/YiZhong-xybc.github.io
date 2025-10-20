// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-researches",
          title: "researches",
          description: "Here are some of my research works and academic projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researches/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Here are some of the projects I&#39;ve worked on, including competition entries and course designs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-real-time-wheat-stripe-rust-detector",
          title: 'Real-time Wheat Stripe-Rust Detector',
          description: "A lightweight YOLOv5-Lite model running on Raspberry Pi 4B",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-tic-tac-toe-human-machine-device",
          title: 'Tic-Tac-Toe Human-Machine Device',
          description: "2023 Beijing E-Design Contest, 3rd Prize",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-fruit-and-veg-sorting-robot",
          title: 'Fruit-and-Veg Sorting Robot',
          description: "Software Practice Course Design | Grade A+",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-line-following-smart-car",
          title: 'Line-Following Smart Car',
          description: "Comprehensive Practice Course Design | Grade A+",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-cotton-seeding-robot",
          title: 'Cotton Seeding Robot',
          description: "2023 Int&#39;l Smart Ag-Equipment Contest | Provincial A-Class 2nd Prize",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "researches-multi-vehicle-cooperative-parking-planning",
          title: 'Multi-Vehicle Cooperative Parking Planning',
          description: "Trajectory planning for multi-vehicle cooperative parking under continuous traffic in highly constrained parking lots",
          section: "Researches",handler: () => {
              window.location.href = "/researches/1_research/";
            },},{id: "researches-mcts-enhanced-actor-critic-algorithm",
          title: 'MCTS-Enhanced Actor-Critic Algorithm',
          description: "Deep reinforcement learning algorithm combining Monte Carlo Tree Search with Actor-Critic framework",
          section: "Researches",handler: () => {
              window.location.href = "/researches/2_research/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%6F%6E%67%79%69@%63%61%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zhongyi-xybc", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
