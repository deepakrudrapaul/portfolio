

export const AppConstants = {
    NOTION_TOKEN: "VITE_NOTION_TOKEN",
    DATABASE_ID: "VITE_DATABASE_ID",
    SERVICE_ID: "VITE_EMAIL_JS_SERVICE_ID",
    TEMPLATE_ID:"VITE_EMAIL_JS_TEMPLATE_ID",
    PUBLIC_KEY:"VITE_EMAIL_JS_PUBLIC_KEY",

    Routes: {
        HOME: 'home',
        OI_SCAN: 'oi-scan',
        OI_BUILD_UP: 'oi-buildup',
    },
    NavLinks :[
        // {
        //   id: "about",
        //   title: "About",
        //   path: "/about",
        //   external: false
        // },
        {
          id: "project",
          title: "Projects",
          path: "/projects",
          external: false
        },
        {
          id: "blog",
          title: "Blog",
          path: "https://deepakrudrapaul.hashnode.dev/",
          external: true

        },
        {
          id: "contact",
          title: "Contact",
          path: "/contact",
          external: false
        },
      ],
      Icon: {
        logo: "/logo.svg",
        menu: "/menu.svg",
        close: "/close.svg",
        github: "/github.png",
        twitter: "/twitter.png",
        linkedin: "/linkedin.png",
        youtube: "/youtube.png",
      },
      Services: [
        {
          title: "Web Developer",
          icon: "/web.png",
        },
        {
          title: "React Native Developer",
          icon: "/mobile.png",
        },
        {
          title: "Backend Developer",
          icon: "/backend.png",
        },
        {
          title: "Content Creator",
          icon: "/creator.png",
        },
      ],
      Work: [
        {
          designation: "Full Stack Developer",
          company: "JP Tokyo India Pvt Ltd",
          icon: "/jptokyo.jpeg",
          fromDate: "Sep 2019",
          toDate: "Present",
          description: `Developed and maintained Pro Clinic, a multi-tenant patient management system using React JS, MongoDB, and Material UI used by more than 10k users </br/>
            Successfully migrated a legacy Angular JS project to React JS, reducing page load time by 60% and improving user experience.
            `
        },
        {
          designation: "Fontend Developer",
          company: "Wanderwagon Pvt Ltd",
          icon: "/wanderwagon.jpeg",
          fromDate: "Oct 2017",
          toDate: "Dec 2018",
          description: `Built a social media platform for travelers to connect and share experiences using TypeScript and Angular 4.`
        },
        {
          designation: "Fontend Developer",
          company: "Qikship Logistics Pvt Ltd",
          icon: "/qikship.jpeg",
          fromDate: "Dec 2015",
          toDate: "Aug 2016",
          description: `
            Developed the admin panel using Angular JS for managing orders, shipments, and payments.
            Implemented API to scrape data periodically from a website and store it in a MySQL database.
            `
        },
      ]
}

