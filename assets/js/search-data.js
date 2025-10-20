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
        },{id: "projects-real-time-wheat-stripe-rust-detector",
          title: 'Real-time Wheat Stripe-Rust Detector',
          description: "Undergraduate Research Program",
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
          description: "2023 Int&#39;l Smart Ag-Equipment Contest | 2nd Prize",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "researches-trajectory-planning-for-multi-vehicle-cooperative-parking",
          title: 'Trajectory Planning for Multi-Vehicle Cooperative Parking',
          description: "(2023.9-2024.6)",
          section: "Researches",handler: () => {
              window.location.href = "/researches/1_research/";
            },},{id: "researches-mcts-enhanced-actor-critic-algorithm",
          title: 'MCTS-Enhanced Actor-Critic Algorithm',
          description: "(2024.7-2025.3)",
          section: "Researches",handler: () => {
              window.location.href = "/researches/2_research/";
            },},{
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
