document.addEventListener("DOMContentLoaded", () => {
    // Backgrounds for parallax sections
    document.getElementById("hero").style.backgroundImage = `url('${portfolioData.personal.bg_hero}')`;
    document.getElementById("tools").style.backgroundImage = `url('${portfolioData.personal.bg_tools}')`;
    document.getElementById("projects").style.backgroundImage = `url('${portfolioData.personal.bg_projects}')`;
    document.getElementById("about").style.backgroundImage = `url('${portfolioData.personal.bg_about}')`;
    document.getElementById("contact").style.backgroundImage = `url('${portfolioData.personal.bg_contact}')`;

    // Populate Hero Section
    document.getElementById("hero-name").textContent = portfolioData.personal.name;
    document.getElementById("hero-title").textContent = portfolioData.personal.roles.join(" | ");
    
    document.getElementById("icon-email").href = `mailto:${portfolioData.personal.email}`;
    document.getElementById("icon-linkedin").href = portfolioData.personal.linkedin;
    document.getElementById("icon-github").href = portfolioData.personal.github;

    document.getElementById("btn-cv").href = portfolioData.personal.cv_link;
    document.getElementById("btn-cad").href = portfolioData.personal.cad_portfolio_link;

    // Populate Experience (Compact + Hover narrative)
    const experienceContainer = document.getElementById("experience-container");
    portfolioData.experience.forEach(exp => {
        const item = document.createElement("div");
        item.className = "timeline-item";

        item.innerHTML = `
            <img src="${exp.logo}" alt="${exp.company} Logo" class="timeline-logo">
            <div class="timeline-content">
                <div class="timeline-role">${exp.role}</div>
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-date">${exp.duration}</div>
                <div class="hover-details">
                    <p>${exp.hover_text}</p>
                </div>
            </div>
        `;
        experienceContainer.appendChild(item);
    });

    // Populate Tools
    const toolsContainer = document.getElementById("tools-container");
    portfolioData.tools.forEach(tool => {
        const tDiv = document.createElement("div");
        tDiv.className = "tool-card";
        tDiv.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name} Logo">
            <span>${tool.name}</span>
        `;
        toolsContainer.appendChild(tDiv);
    });

    // Populate Education
    const educationContainer = document.getElementById("education-container");
    portfolioData.education.forEach(edu => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        
        item.innerHTML = `
            <img src="${edu.logo}" alt="${edu.institute} Logo" class="timeline-logo">
            <div class="timeline-content">
                <div class="timeline-role">${edu.degree}</div>
                <div class="timeline-company">${edu.institute}</div>
                <div class="timeline-date">${edu.duration}</div>
            </div>
        `;
        educationContainer.appendChild(item);
    });

    // Populate Projects & Modal Logic
    const projectsContainer = document.getElementById("projects-container");
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-btn");

    portfolioData.projects.forEach(proj => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openModal(proj);
        
        let techHTML = '<div class="card-tech">';
        proj.tech.forEach(t => {
            techHTML += `<span class="tech-tag">${t}</span>`;
        });
        techHTML += '</div>';

        card.innerHTML = `
            <img src="${proj.image}" alt="${proj.title}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${proj.title}</h3>
                <div class="timeline-date">${proj.date}</div>
                <p class="card-desc">${proj.short_desc}</p>
                ${techHTML}
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    function openModal(proj) {
        let galleryHTML = '';
        if (proj.gallery && proj.gallery.length > 0) {
            galleryHTML = '<h4 style="color: var(--accent); margin-top: 25px; margin-bottom: 10px;">Project Gallery</h4><div class="modal-gallery">';
            proj.gallery.forEach(imgUrl => {
                if (!imgUrl || imgUrl.trim() === "") {
                    galleryHTML += `<div style="height: 150px; visibility: hidden; pointer-events: none;"></div>`;
                } else {
                    galleryHTML += `<img src="${imgUrl}" alt="Gallery Image" class="modal-gallery-img">`;
                }
            });
            galleryHTML += '</div>';
        }

        modalBody.innerHTML = `
            <h2 style="font-size:2rem; margin-bottom:10px;">${proj.title}</h2>
            <div class="timeline-date" style="margin-bottom:20px;">${proj.date}</div>
            ${proj.detailed_html}
            ${galleryHTML}
        `;
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Populate About
    document.getElementById("about-img").src = portfolioData.personal.profile_img;
    document.getElementById("about-desc").textContent = portfolioData.personal.about;

    // Populate Contact
    document.getElementById("contact-phone").textContent = portfolioData.personal.phone;
    document.getElementById("contact-email-text").textContent = portfolioData.personal.email;
    document.getElementById("contact-linkedin-btn").href = portfolioData.personal.linkedin;
});
