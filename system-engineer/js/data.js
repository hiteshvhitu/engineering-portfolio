const portfolioData = {
    personal: {
        name: "Hitesh V",
        roles: ["Research Engineer", "CAD Designer", "Software Developer", "CFD Engineer"],
        email: "hitesh.v.hitu@gmail.com",
        phone: "+91-9986107024",
        linkedin: "https://www.linkedin.com/in/hitesh-v-553b28238/",
        github: "https://github.com/",
        cv_link: "#",
        cad_portfolio_link: "#",
        about: "I’m Hitesh V, an Aerospace Engineer with interests spanning computational simulations, software development, embedded systems, and engineering-driven technology. My work focuses on combining engineering fundamentals with programming to build practical systems, tools, and technical solutions.\n\nOver the years, I have worked on projects involving CFD and multiphysics simulations, Qt/Python-based software development, ESP32 embedded systems, and CAD modeling. I enjoy understanding systems from the ground up — how they function internally, how different subsystems interact, and how ideas can be translated into real implementations.\n\nWhat interests me most is the intersection of multidisciplinary engineering within the space sector. I am particularly drawn toward areas involving simulation, automation, and hands-on work related to assembly, integration, and testing of real aerospace systems such as satellites, flight systems, and space technologies.\n\nBeyond core engineering, I also enjoy exploring UI development, 3D printing, and electronics-based projects and prototypes. I see every project as part of a continuous learning process — an opportunity to experiment, improve technically, and expand my understanding across multiple domains.\n\nEvery challenge and project has contributed to my journey so far, and I am always looking forward to building, learning, and taking on what comes next.",
        profile_img: "https://media.licdn.com/dms/image/v2/D5603AQENS4FocmIdLQ/profile-displayphoto-crop_800_800/B56Z4WO7_PIQAI-/0/1778489494776?e=1779926400&v=beta&t=OEkcsdS9sryrXmM1514a-YG457tv2I-q-J1yltXCqPA",
        bg_hero: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Earth
        bg_tools: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // ISS
        bg_projects: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Mars surface / Satellite vibe
        bg_about: "https://images.unsplash.com/photo-1541888086884-2591605f1eb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Will be opaque 10%. User can change this to their picture.
        bg_contact: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Rocket launch
    },
    experience: [
        {
            role: "Research Engineer – CAD & Multiphysics",
            company: "Fluidyn Consultancy Pvt Ltd",
            duration: "Feb 2025 – Present",
            logo: "https://www.fluidyn.com/wp-content/uploads/2020/10/logotitle-1-e1602585348458.png",
            hover_text: "At Fluidyn, I lead the CAD development of a parachute-based descent system using CATIA V5. I handle heavy geometry cleanup and defeaturing for massive 2.5M cell CFD/FSI simulations, and develop Python/Qt tools to streamline our post-processing workflows."
        },
        {
            role: "Engineering Intern",
            company: "Hindustan Aeronautics Limited (HAL)",
            duration: "Jun 2024 – Jul 2024",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Hindustan_Aeronautics_Limited_Logo.svg/1280px-Hindustan_Aeronautics_Limited_Logo.svg.png",
            hover_text: "During my time at HAL's ADB division, I was hands-on with the Tejas LCA. I performed crucial aircraft inspections, verified flight readiness, and participated in Ground Run Tests (GRT). It gave me an incredible look into integrated aerospace system architecture."
        },
        {
            role: "Researcher and Project Lead",
            company: "Alliance University",
            duration: "2023 – 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/1280px-Alliance_University_Icon.svg.png",
            hover_text: "I led the R&D for a morphing propeller-turbine blade designed for eVTOLs. Through iterative aerodynamic and structural analysis in ANSYS and CATIA V5, my team and I successfully secured a design patent and presented at an IEEE conference."
        },
        {
            role: "Marketing Manager & Tech (Part-time)",
            company: "City Electronics",
            duration: "2018 – 2022",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQSjsaTcm15TwpkE597eI3ODhuTAfRBzVOg&s",
            hover_text: "Oversaw the technical aspects of the enterprise, providing solutions for electronic malware and system issues, while also managing sales and marketing of mobile accessories to understand current market trends."
        }
    ],
    tools: [
        { name: "CATIA V5", logo: "https://logodix.com/logo/1810230.jpg" },
        { name: "SolidWorks", logo: "https://grabcad.com/screenshots/pics/7e1c19d75085bfb7004db332a7665fc8/large.png" },
        { name: "ANSYS", logo: "https://logowik.com/content/uploads/images/ansys4328.jpg" },
        { name: "FUSION 360", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN18Dwy7DdaN_AjmQSohNYLSQh3k-oqdQg3Q&s" },
        { name: "PyCharm", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/PyCharm_Icon.svg/1280px-PyCharm_Icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
        { name: "MATLAB & SIMULINK", logo: "https://lembarque.com/fichiers/images/articles/5566eeed6dbcf.png" },
        { name: "Arduino IDE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1280px-Arduino_Logo.svg.png" }
    ],
    education: [
        {
            degree: "B.Tech in Aerospace Engineering",
            institute: "Alliance University",
            duration: "2021 - 2025",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Alliance_University_Icon.svg/1280px-Alliance_University_Icon.svg.png"
        },
        {
            degree: "Pre University (Class XII)",
            institute: "Shankuntala Devi Pre University",
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
    projects: [
        {
            id: "proj1",
            title: "UAV Morphing Propeller System",
            date: "2023 - 2025",
            image: "https://media.licdn.com/dms/image/v2/D5622AQG6rZnPqxIdzQ/feedshare-shrink_1280/B56ZnhIjKPJYAs-/0/1760418744016?e=1779926400&v=beta&t=ELGshXiIp9Fl9d954Udl5ycRZwFVr5eI8RWyw5d7YNs",
            gallery: [
                "https://media.licdn.com/dms/image/v2/D5622AQG6rZnPqxIdzQ/feedshare-shrink_1280/B56ZnhIjKPJYAs-/0/1760418744016?e=1779926400&v=beta&t=ELGshXiIp9Fl9d954Udl5ycRZwFVr5eI8RWyw5d7YNs",
                "https://media.licdn.com/dms/image/v2/D5622AQEtd9JHc1jLrA/feedshare-shrink_1280/B56ZnhIjKBHQAs-/0/1760418743633?e=1779926400&v=beta&t=TwGMe-6bij2IlcmonOSHgROFtbOGzu87rjq4_wAhhWk",
                "https://media.licdn.com/dms/image/v2/D5622AQHHBWgzclGH9A/feedshare-shrink_1280/B56ZnhIjJuHUAs-/0/1760418743981?e=1779926400&v=beta&t=87BW6gh-ixySpO6j6ycwqzzkDg5ub7VGlHw6N3Sc93o"
            ],
            tech: ["CATIA V5", "Fusion 360", "ANSYS", "Aerodynamics"],
            short_desc: "A patented morphing propeller-turbine blade system for eVTOL applications.",
            detailed_html: `
                <h4>The Challenge</h4>
                <p>eVTOLs require high efficiency in both hover and forward flight, which standard rigid propellers cannot optimally provide. We needed a design that could adapt its geometry dynamically.</p>
                <h4>The Solution</h4>
                <p>I led the R&D to design a variable-shape blade that transforms between a propeller and a turbine. Using <strong>CATIA V5</strong> for intricate assembly modeling and <strong>ANSYS</strong> for structural and aerodynamic validation, we proved the concept's viability.</p>
                <h4>Achievements</h4>
                <ul>
                    <li>Granted a Government of India Design Patent (No. 465595-001).</li>
                    <li>Published findings in the Journal of Aeronautics, Astronautics and Aviation. <br><strong>DOI:</strong> <a href="https://doi.org/10.6125/JoAAA.202510_57(8).08" target="_blank" style="color: var(--accent);">10.6125/JoAAA.202510_57(8).08</a></li>
                </ul>
                <img src="https://media.licdn.com/dms/image/v2/D5622AQHWtsrnMy-0Vg/feedshare-shrink_800/B56ZnhIjJ.JoAg-/0/1760418741728?e=1779926400&v=beta&t=SgEQ8c6Q8nnFtagSgBdysmKevpCEnpHw_XVIAb8dol4" alt="Patent">
            `
        },
        {
            id: "proj2",
            title: "Embedded Flight Control System",
            date: "2024",
            image: "https://images.unsplash.com/photo-1527022204555-520e5d95d18e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1527022204555-520e5d95d18e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ],
            tech: ["ESP32", "C++", "PID Control", "Sensor Fusion"],
            short_desc: "Real-time custom flight controller built on an ESP32 using MPU6050 IMU.",
            detailed_html: `
                <h4>Overview</h4>
                <p>Rather than using off-the-shelf flight controllers, I wanted to understand flight dynamics from the ground up by building my own embedded system on an ESP32 microcontroller.</p>
                <h4>Implementation</h4>
                <p>I integrated an MPU6050 IMU and implemented a custom <strong>Complementary Filter</strong> for precise sensor fusion. This fed into a custom <strong>PID stabilization loop</strong> outputting PWM signals to control the ESCs on an F450 frame.</p>
                <h4>Testing</h4>
                <p>Conducted extensive real-world flight testing and iterative PID tuning, ultimately demonstrating stable feedback control and state estimation.</p>
            `
        },
        {
            id: "proj3",
            title: "IN-SPACe Model Rocketry Mission",
            date: "2024",
            image: "https://media.licdn.com/dms/image/v2/D5622AQHLRNQlxTQzxg/feedshare-shrink_800/feedshare-shrink_800/0/1732299168133?e=1779926400&v=beta&t=sle-0VbCSw3HJVUeXC5aTaB5gGrabZG4KyrOKJ-uKfs",
            gallery: [
                "https://media.licdn.com/dms/image/v2/D5622AQHLRNQlxTQzxg/feedshare-shrink_800/feedshare-shrink_800/0/1732299168133?e=1779926400&v=beta&t=sle-0VbCSw3HJVUeXC5aTaB5gGrabZG4KyrOKJ-uKfs",
                "https://media.licdn.com/dms/image/v2/D5622AQGJwrZlvfGDyg/feedshare-shrink_800/feedshare-shrink_800/0/1732299187350?e=1779926400&v=beta&t=195zwH4J9ctl83O1uK8aLP3icwD-E1z6OdUDEJNQP7A",
                "https://media.licdn.com/dms/image/v2/D5622AQFGppLx2Gu0cg/feedshare-shrink_480/feedshare-shrink_480/0/1732299174218?e=1779926400&v=beta&t=8X9FIg04r-xKlnQQ3qpF8I9jMCGY1mmlrFMtzVdRaN8"
            ],
            tech: ["Arduino", "Systems Engineering"],
            short_desc: "Delivered a CanSat payload to exactly 1 km altitude under strict constraints.",
            detailed_html: `
                <h4>Mission Parameters</h4>
                <p>As Team Lead for the Aerospace Division in the ISRO/IN-SPACe program, the objective was to launch and safely recover a CanSat payload at exactly 1 km altitude.</p>
                <h4>Development</h4>
                <p>We utilized <strong>OpenRocket</strong> and <strong>ANSYS</strong> to simulate the flight trajectory and aerodynamics. For avionics, we integrated barometric altitude sensing (BMP sensor) with an Arduino Nano flight controller.</p>
                <h4>Result</h4>
                <p>Successfully executed the mission with rigorous CONOPS-style thinking, validating all performance criteria and system constraints.</p>
            `
        }
    ]
};
