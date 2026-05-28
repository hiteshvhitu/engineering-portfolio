// ============================================================
// PORTFOLIO DATA — Edit this file to update all website content
// ============================================================
// IMAGE GUIDE: Replace placeholder URLs below with your Google
// Drive shareable links. Use the format:
// https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
// ============================================================

const portfolioData = {

    // ── Personal & Hero Section ──────────────────────────────
    personal: {
        name: "HITESH VENKATESH",
        roles: ["CAD Design Engineer", "Simulation Geometry Specialist", "Aerospace Engineer"],
        email: "hitesh.v.hitu@gmail.com",
        phone: "+91-9986107024",
        linkedin: "https://www.linkedin.com/in/hitesh-v-553b28238/",
        github: "https://github.com/hiteshvhitu",
        location: "Bengaluru, India",

        // Backgrounds for Parallax — replace with your Google Drive links or Unsplash
        heroBg: "https://wallpapercave.com/wp/wp6929292.jpg?q=80&w=1920&auto=format&fit=crop",
        experienceBg: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1920&auto=format&fit=crop",
        patentsBg: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1920&auto=format&fit=crop",
        // aboutBg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop",
        aboutBgOpacity: 0.7, // Change this value from 0.0 (fully transparent) to 1.0 (fully dark) to control the overlay darkness over the background

        // Download links for hero buttons
        resumeLink: "https://drive.google.com/file/d/1U-DWw9q8ydpV0W9jq63lTsKSSq_rsITb",           // Google Drive link to your resume PDF
        cadPortfolioLink: "#",     // Google Drive link to your CAD Portfolio PDF

        // Profile image for About section — replace with your Google Drive link
        profileImage: "https://lh3.googleusercontent.com/d/1-pIFf1hYbrRFd7PtF9yvCWILvwyhWIWS",
    },

    // ── About Me Section ─────────────────────────────────────
    // This section sits right above "Get in Touch"
    about: {
        heading: "About Me",
        paragraphs: [
            "Hello,",

            "If you have scrolled this far, you might already know a little bit about me. Most of my projects here come from my work experience, personal builds, college projects, and random ideas that I involved myself in.",

            "I mainly work around CAD modelling, assemblies, industrial geometry reconstruction, and simulation-ready preprocessing workflows. Along with that, I also handle technical documentation, project discussions, and coordination whenever required during development and analysis stages.",

            "Outside my regular work, I spend a lot of time building personal engineering projects, experimenting with electronics, and working on prototype mechanisms using 3D printing. I also run a small side venture helping engineering students with electronics and major projects, which honestly helped me learn a lot more practically over the years.",

            "Most of the things I know today came from trying things out myself, making mistakes, redesigning parts repeatedly, and slowly figuring out better ways to build systems that actually work."
        ]
    },

    // ── Experience Section ────────────────────────────────────
    experience: [
        {
            id: "exp-fluidyn",
            role: "Research Engineer – CAD & Simulation Geometry",
            company: "Fluidyn Consultancy Pvt Ltd",
            duration: "Feb 2025 – Present",
            location: "Bengaluru, India",
            logo: "https://www.fluidyn.com/wp-content/uploads/2020/10/logotitle-1-e1602585348458.png",
            shortDesc: "Lead CAD development and geometry defeaturing for massive CFD/FSI simulations.",
            detailedDesc: "I handle multi-project CAD delivery across industrial sectors. My day-to-day involves building large-scale facility geometry in CATIA V5 from DWG references. I prepare simulation-ready assemblies by suppressing bolts, fillet edges, and non-critical features. Basically, I make sure the geometry survives CFD meshing without drama.",
            responsibilities: [
                "Built large-scale industrial CAD models using CATIA V5 Part Design and Assembly Design.",
                "Reconstructed complete facility geometry from 2D DWG engineering layouts.",
                "Prepared simulation-ready assemblies for CFD meshing and solver workflows.",
                "Suppressed non-critical geometric details like bolts, fillets, and chamfers for clean meshing.",
                "Managed assembly revisions based on project management directives and client feedback.",
                "Attended client and technical meetings to coordinate with simulation and delivery teams.",
                "Supported steady-state and transient CFD simulation preparation across multiple projects."
            ]
        },
        {
            id: "exp-hal",
            role: "Engineering Intern",
            company: "Hindustan Aeronautics Limited (HAL)",
            duration: "Jun 2024 – Jul 2024",
            location: "Bengaluru, India",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Hindustan_Aeronautics_Limited_Logo.svg/1280px-Hindustan_Aeronautics_Limited_Logo.svg.png",
            shortDesc: "Hands-on exposure to Tejas LCA assembly and aircraft inspections.",
            detailedDesc: "This internship gave me hands-on exposure to real aerospace manufacturing floors. I observed assembly processes on the Tejas LCA and participated in aircraft inspections. Seeing how CAD drawings translate to flight-ready hardware was genuinely eye-opening.",
            responsibilities: [
                "Gained exposure to aerospace engineering workflows at HAL's Aircraft Division.",
                "Observed assembly, integration, and testing processes on the Tejas LCA platform.",
                "Participated in aircraft inspection and Ground Run Test (GRT) procedures."
            ]
        },
        {
            id: "exp-city-electronics",
            role: "Marketing Manager & Tech",
            company: "City Electronics",
            duration: "2018 – 2022",
            location: "Bengaluru, India",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQSjsaTcm15TwpkE597eI3ODhuTAfRBzVOg&s",
            shortDesc: "Provided tech solutions and managed mobile accessories marketing.",
            detailedDesc: "Oversaw the technical aspects of the enterprise, providing solutions for electronic malware and system issues, while also managing sales and marketing of mobile accessories to understand current market trends.",
            responsibilities: [
                "Provided solutions for electronic malware and system issues.",
                "Managed sales and marketing of mobile accessories.",
                "Analyzed current market trends to optimize product offerings."
            ]
        }
    ],

    // ── Projects Section ──────────────────────────────────────
    projects: [
        {
            id: "patalam-station",
            title: "Patalam Train Station – Ventilation & Fire Safety",
            category: "Industrial CAD",
            thumbnail: "https://lh3.googleusercontent.com/d/1jA8g3QKGMu_fVwmjDyuQR4CFCgrV9D8Q",
            shortDesc: "Multi-level train station geometry reconstructed from DWG plans for CFD fire and smoke analysis.",
            detailedDesc: "I rebuilt the complete multi-level Patalam train station geometry in CATIA V5 using the engineering layouts provided for the project. My work mainly involved modeling the platforms, concourses, ventilation shafts, and internal structural layouts while organizing the assemblies into a simulation-ready geometry. I also simplified several internal details and optimized surfaces so the final model could be used efficiently for large-scale ventilation and fire safety studies.",
            tools: ["CATIA V5", "Infrastructure CAD", "Geometry Preparation"],
            gallery: [
                "https://lh3.googleusercontent.com/d/1jA8g3QKGMu_fVwmjDyuQR4CFCgrV9D8Q",
                "https://lh3.googleusercontent.com/d/1UUCGvYP_6NxsgEp9OxTF8u1QRHj4dUZd",
                "https://lh3.googleusercontent.com/d/1uF_BcnyeNc9BojmtxJiJMgRxgEsiZGoH",

            ],
            galleryCaptions: ["Sectional view showing the internal station levels and structural layout. ",
                "Platform layout and internal passage reconstruction used for geometry preparation",
                "Complete underground station assembly modeled in CATIA V5.",

            ]
        },
        {
            id: "sewage-treatment",
            title: "Sewage Treatment Plant – Ventilation Study",
            category: "Industrial CAD",
            thumbnail: "https://lh3.googleusercontent.com/d/17CKRFjJLhvyZQw1ZzL_7IJMBLG8Yqj9-",
            shortDesc: "Complete 3D industrial treatment facility modeled from DWG references for toxic gas airflow analysis.",
            detailedDesc: "This project involved reconstructing a large-scale sewage treatment facility from DWG engineering references using CATIA V5. My responsibilities included rebuilding structural layouts, airflow systems, internal process geometry, and organizing large imported STEP assemblies while preparing simplified simulation-ready CAD models for engineering analysis workflows",
            tools: ["CATIA V5", "DWG References", "CFD Prep"],
            gallery: ["https://lh3.googleusercontent.com/d/17CKRFjJLhvyZQw1ZzL_7IJMBLG8Yqj9-",
                "https://lh3.googleusercontent.com/d/1dJJcpkrlq-PjHGu8NidD2-OtO6d3DijW",
                "https://lh3.googleusercontent.com/d/1JoOqyY9ZtgAbGyCmmXQw4pLL6lHyqIPv",
                "https://lh3.googleusercontent.com/d/1jBGvgD7DvfFvzhC2c7xkiHHcXWoHdGfv"],
            galleryCaptions: ["Complete multi-level sewage treatment facility reconstructed in CATIA V5",
                "Internal airflow passages, structural systems, and process layout organization",
                "DWG engineering references used for industrial CAD reconstruction workflow",
                "Large assembly organization and STEP-based component integration workflow"]
        },
        // {
        //     id: "refinery-facility",
        //     title: "Refinery Facility – Industrial Geometry Modeling",
        //     category: "Industrial CAD",
        //     thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
        //     shortDesc: "Large refinery geometry containing thousands of components simplified for CFD preprocessing.",
        //     detailedDesc: "This was one of the most geometry-heavy projects I have worked on. The refinery facility contained thousands of individual components including pipe systems, ventilation ducts, and structural assemblies. My job was to model and then simplify this complex geometry so it could pass through CFD preprocessing and meshing workflows without failing. Knowing what to keep and what to remove is the real skill here.",
        //     tools: ["CATIA V5", "Assembly Design", "CFD Preprocessing"],
        //     gallery: []
        // },
        {
            id: "uav-morphing",
            title: "UAV Turbo-Propeller Morphing System",
            category: "R&D Projects",
            thumbnail: "https://lh3.googleusercontent.com/d/1r8uPVOqCKRv1BlDv0RS7CD5XirV36M-i",
            shortDesc: "Patented morphing propeller-to-turbine blade mechanism designed and validated through CFD simulation.",
            detailedDesc: "This project involved designing a morphing UAV propeller system capable of transitioning between propeller and turbine configurations. The CAD geometry and internal morphing mechanism were developed using Fusion 360 and CATIA V5 with parametric constraints and actuator-based motion integration. I performed motion studies to validate smooth profile transformation and assembly movement while optimizing the blade geometry for aerodynamic continuity. The final design resulted in a granted Government of India design patent and a peer-reviewed aerospace engineering publication.",
            tools: ["Fusion 360", "CATIA V5", "ANSYS Fluent", "Motion Study", "Mechanical Design"],
            gallery: [
                "https://lh3.googleusercontent.com/d/1AARKBSeOwMkMRv2FoSM0f-xbFLYYX0xq",
                "https://lh3.googleusercontent.com/d/102ndfPbudiGVonaUUxoBKckleomNXmMI",
                "https://lh3.googleusercontent.com/d/1r8uPVOqCKRv1BlDv0RS7CD5XirV36M-i",
                "https://lh3.googleusercontent.com/d/1RiThHlD1g9SuHz4LgquTSDLWcgVSe2R1",
                "https://lh3.googleusercontent.com/d/10OjNHP-bUUJP6SC-U185XIoJTt-WEoSA",
                "https://lh3.googleusercontent.com/d/1l_K82PehfvmqbF0ks4VlqUMZkxWu8MPY",
                "https://lh3.googleusercontent.com/d/1o7Gq7zNReBA6YBhw8DyElmGFU7Oc1l08"

            ],
            galleryCaptions: ["Government of India design patent granted for morphing UAV turbo-propeller mechanism",
                "Aerodynamic flow validation performed to evaluate blade performance characteristics",
                "Internal morphing mechanism with actuator integration",
                "Final turbine-mode configuration optimized for aerodynamic profile continuity",
                "Top view of the UAV in propeller mode",
                "Pressure and Velocity contours on the blade surface at 200 m/s in propeller mode",
                "Pressure and Velocity contours on the blade surface at 200 m/s in turbine mode"]
        },
        {
            id: "morphing-wing",
            title: "Manufactured Morphing Wing UAV",
            category: "R&D Projects",
            thumbnail: "https://lh3.googleusercontent.com/d/18qihBi2jpBzwsYAVUQMF8tkzRrXTyQXE",
            shortDesc: "Complete morphing wing assembly designed in CATIA V5 and 3D printed with servo actuation.",
            detailedDesc: "This was an academic design and fabrication project where I designed a complete morphing wing assembly using CATIA V5 parametric tools. The cool part was actually manufacturing the prototype on my personal AnyCubic Kobra Neo 2 FDM printer. I integrated SG90 servo motors for rotational wing movement and achieved tight tolerance fits between the printed components. Seeing the wing physically morph after weeks of CAD iterations was incredibly satisfying.",
            tools: ["CATIA V5", "FDM 3D Printing", "Servo Actuation"],
            gallery: [
                "https://lh3.googleusercontent.com/d/15bTPAiQ-rfN__-s40yxdfAUBKX2YwuId",
                "https://drive.google.com/file/d/1Z9BP3tr0qmo_qElO8H70Zz0M28WwrE2h/preview",
                "https://lh3.googleusercontent.com/d/1bvl6JQeUyEzVFBj_43rKPF73QgLNJV1P",
                "https://drive.google.com/file/d/1zD7MzfJ9B1EbqIP5m6jTKfB88ua_o32b/preview",
            ],
            galleryCaptions: [
                " Assembly of Morphing Wing UAV using CATIA V5",
                " Assembly of Morphing Wing UAV video",
                "3D Printed Model using AnyCubic Kobra Neo 2 FDM printer",
                "Servo Mechanism Demonstration"]
        },
        {
            id: "inspace-rocketry",
            title: "IN-SPACe Model Rocketry Mission",
            category: "R&D Projects",
            thumbnail: "https://lh3.googleusercontent.com/d/1gtIrexRJSNnRhH4WFi_qaB9ontQNOqxh",
            shortDesc: "Led a team to launch and recover a CanSat payload at exactly 1 km altitude for ISRO.",
            detailedDesc: "As Team Lead for the Aerospace Division in the ISRO/IN-SPACe program, I managed the design and launch of a CanSat payload. The objective was precise — hit exactly 1 km altitude and safely recover the payload. We used OpenRocket and ANSYS for trajectory and aerodynamic simulation. The avionics stack used a BMP barometric sensor with an Arduino Nano flight controller. Successfully executing this mission taught me systems-level thinking that no single CAD project ever could.",
            tools: ["OpenRocket", "ANSYS", "Arduino", "Systems Engineering"],
            gallery: [
                "https://lh3.googleusercontent.com/d/159xFUmyPSwiceSdiTEpHAD4gTJDqYL3S",
                "https://drive.google.com/file/d/1KdvhHF94itriJAUextEAVXAcjLxN7r2O/preview",
                "https://lh3.googleusercontent.com/d/1gtIrexRJSNnRhH4WFi_qaB9ontQNOqxh",
                "",
                "https://lh3.googleusercontent.com/d/14qbwqHts4A2tFxTCsoVHyZWU7Qr8i9NI",

            ],
            galleryCaptions: ["Certificate received after successfully completing the IN-SPACe model rocketry mission program.",
                "Launch sequence of the CanSat rocket during the IN-SPACe mission event",
                "Team photo after completing the launch mission and payload recovery sequence",
                "",
                "Final launch-ready CanSat rocket payload prepared during the mission program"
            ]
        }
    ],

    // ── Patents & Publications ────────────────────────────────
    patents: [
        {
            title: "UAV Turbo-Propeller — Design Patent",
            details: "Granted Patent | Design No. 465595-001 | Government of India, 2025.",
            contribution: "Contributed to ideation, CATIA V5 CAD modeling, and geometry definition."
        },
        {
            title: "Dual-Mode Morphing Propeller System for Enhanced UAV Performance",
            details: "Peer-Reviewed Publication | Journal of Aeronautics, Astronautics and Aviation.",
            contribution: "Contributed: Ideation, CAD Modeling, CFD Simulation using ANSYS Fluent.",
            doi: "https://doi.org/10.6125/JoAAA.202510_57(8).08"
        }
    ],

    // ── Education ─────────────────────────────────────────────
    education: [
        {
            degree: "B.Tech – Aerospace Engineering",
            institute: "Alliance University",
            duration: "2021 – 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/1280px-Alliance_University_Icon.svg.png"
        },
        {
            degree: "Pre University (Class XII)",
            institute: "Shakuntala Devi Pre University",
            duration: "2018 - 2020",
            logo: "https://www.shakuntaladevicolleges.co.in/assets/images/SDPUC-Logo.png"
        },
        {
            degree: "Class X",
            institute: "Bright Future Primary and High School",
            duration: "Graduated 2018",
            logo: "https://www.schoolsuniverse.com/_next/image?url=https%3A%2F%2Fcdn.schoolsuniverse.com%2Fmedia%2Fuploads%2F2024-10-29%252006%253A07%253A19.796242Screenshot%25202024-10-29%2520113651.png&w=1200&q=65"
        }
    ],

    // ── Tools / Software Icons ────────────────────────────────
    tools: [
        { name: "CATIA V5", logo: "https://logodix.com/logo/1810230.jpg" },
        { name: "SolidWorks", logo: "https://grabcad.com/screenshots/pics/7e1c19d75085bfb7004db332a7665fc8/large.png" },
        { name: "ANSYS", logo: "https://logowik.com/content/uploads/images/ansys4328.jpg" },
        { name: "Fusion 360", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN18Dwy7DdaN_AjmQSohNYLSQh3k-oqdQg3Q&s" },
        { name: "PyCharm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1280px-PyCharm_Icon.svg.png" },
        { name: "MATLAB", logo: "https://lembarque.com/fichiers/images/articles/5566eeed6dbcf.png" },
        { name: "Arduino IDE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1280px-Arduino_Logo.svg.png" }
    ],

    // ── Background Animation Settings ─────────────────────────
    animation: {
        // Increase visibility by adjusting these values
        particleColor: "rgba(56, 189, 248, 0.8)", // Color of the dots
        lineColor: "rgba(56, 189, 248, 0.35)",     // Color of the connecting lines
        particleDensity: 15000,                   // Lower number = MORE particles (e.g., 15000 is more dense than 20000)
        particleMaxRadius: 2.5,                   // Maximum size of particles
        connectionDistance: 140,                  // How far lines will reach to connect dots
        canvasOpacity: 0.75                       // Overall visibility of the animation layer (0.0 to 1.0)
    }
};
