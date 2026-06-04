// ============================================================
// APP.JS — Main application logic for the CAD Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const d = portfolioData;

    // ── Backgrounds ──
    document.getElementById('hero').style.backgroundImage = `url('${d.personal.heroBg}')`;
    document.getElementById('experience').style.backgroundImage = `url('${d.personal.experienceBg}')`;
    document.getElementById('patents').style.backgroundImage = `url('${d.personal.patentsBg}')`;

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        if (d.personal.aboutBg) {
            aboutSection.style.backgroundImage = `url('${d.personal.aboutBg}')`;
            const overlay = aboutSection.querySelector('.translucent-overlay');
            if (overlay) {
                const op = d.personal.aboutBgOpacity !== undefined ? d.personal.aboutBgOpacity : 0.3;
                overlay.style.background = `linear-gradient(180deg, rgba(10,14,23,${op}) 0%, rgba(10,14,23,${Math.min(op + 0.5, 1.0)}) 100%)`;
            }
        } else {
            aboutSection.style.backgroundImage = 'none';
            aboutSection.classList.remove('parallax-section');
            const overlay = aboutSection.querySelector('.translucent-overlay');
            if (overlay) overlay.style.display = 'none';
        }
    }

    // ── Hero Section ──
    document.getElementById('hero-name').textContent = d.personal.name;
    document.getElementById('hero-roles').textContent = d.personal.roles.join('  ·  ');
    document.getElementById('hero-quote').textContent = d.personal.quote;

    // Hero icon links
    document.getElementById('icon-email').href = `mailto:${d.personal.email}`;
    document.getElementById('icon-linkedin').href = d.personal.linkedin;
    document.getElementById('icon-github').href = d.personal.github;
    
    const btnContactLinkedin = document.getElementById('btn-contact-linkedin');
    if (btnContactLinkedin) btnContactLinkedin.href = d.personal.linkedin;

    // Hero CTA buttons
    document.getElementById('btn-resume').href = d.personal.resumeLink;
    document.getElementById('btn-cad-portfolio').href = d.personal.cadPortfolioLink;

    // ── Projects Section ──
    const projectsGrid = document.getElementById('projects-grid');

    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        d.projects.forEach(proj => {
            if (filter !== 'all' && proj.category !== filter) return;

            const card = document.createElement('div');
            card.className = 'project-card reveal';
            card.setAttribute('data-id', proj.id);

            card.innerHTML = `
                <div class="project-thumb">
                    <img src="${proj.thumbnail}" alt="${proj.title}" loading="lazy">
                </div>
                <div class="project-info">
                    <div class="project-category">${proj.category}</div>
                    <h3 class="project-title">${proj.title}</h3>
                    <p class="project-short-desc">${proj.shortDesc}</p>
                    <span class="project-view-btn"><i class="fa-solid fa-plus"></i> View Details</span>
                </div>
            `;

            card.addEventListener('click', () => openModal(proj, 'project'));
            projectsGrid.appendChild(card);
        });
        observeRevealElements();
    }

    renderProjects('all');

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // ── Experience Section ──
    const expContainer = document.getElementById('experience-container');
    d.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'exp-item reveal';

        item.innerHTML = `
            <div class="exp-header">
                <img src="${exp.logo}" alt="${exp.company}" class="exp-logo">
                <div>
                    <div class="exp-role">${exp.role}</div>
                    <div class="exp-company">${exp.company}</div>
                </div>
            </div>
            <div class="exp-meta">
                <i class="fa-regular fa-calendar"></i> ${exp.duration} &nbsp;|&nbsp;
                <i class="fa-solid fa-location-dot"></i> ${exp.location}
            </div>
            <p class="exp-desc">${exp.shortDesc}</p>
            <span class="exp-view-btn"><i class="fa-solid fa-plus"></i> View Details</span>
        `;

        // Find the view button and add listener
        item.querySelector('.exp-view-btn').addEventListener('click', () => openModal(exp, 'experience'));
        expContainer.appendChild(item);
    });

    // ── Patents Section ──
    const patentsContainer = document.getElementById('patents-container');
    d.patents.forEach(pat => {
        const card = document.createElement('div');
        card.className = 'patent-card reveal';

        let doiHTML = pat.doi ? `<a href="${pat.doi}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Publication</a>` : '';

        card.innerHTML = `
            <h3>${pat.title}</h3>
            <p>${pat.details}</p>
            <p>${pat.contribution}</p>
            ${doiHTML}
        `;
        patentsContainer.appendChild(card);
    });

    // ── Tools Section ──
    const toolsContainer = document.getElementById('tools-container');
    d.tools.forEach(tool => {
        const item = document.createElement('div');
        item.className = 'tool-item reveal';
        item.innerHTML = `<img src="${tool.logo}" alt="${tool.name}" loading="lazy"><span>${tool.name}</span>`;
        toolsContainer.appendChild(item);
    });

    // ── Education Section ──
    const eduContainer = document.getElementById('education-container');
    eduContainer.innerHTML = '';

    d.education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card reveal';
        card.innerHTML = `
            <img src="${edu.logo}" alt="${edu.institute}" class="edu-logo">
            <div class="education-card-content">
                <h3>${edu.degree}</h3>
                <div class="edu-uni">${edu.institute}</div>
            </div>
            <div class="edu-meta">
                <i class="fa-regular fa-calendar"></i> ${edu.duration}
            </div>
        `;
        eduContainer.appendChild(card);
    });

    // ── About Section ──
    document.getElementById('about-img').src = d.personal.profileImage;
    const aboutText = document.getElementById('about-text');
    d.about.paragraphs.forEach(p => {
        const el = document.createElement('p');
        el.textContent = p;
        aboutText.appendChild(el);
    });

    // ── Footer ──
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // ── Navbar Scroll Effect ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── Mobile Navigation ──
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ── Scroll Reveal ──
    function observeRevealElements() {
        const reveals = document.querySelectorAll('.reveal:not(.visible)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        reveals.forEach(el => observer.observe(el));
    }

    // Add reveal class to static sections
    document.querySelectorAll('.exp-item, .patent-card, .tool-item, .education-card, .about-grid, .contact-grid').forEach(el => {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
    observeRevealElements();

    // ── MODAL LOGIC (Projects & Experience) ──
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    window.openModal = function (data, type) {
        if (type === 'project') {
            const toolsHTML = data.tools.map(t => `<span>${t}</span>`).join('');

            let galleryHTML = '';
            if (data.gallery && data.gallery.length > 0) {
                const hasValidItems = data.gallery.some(img => img && img.trim() !== "");

                if (hasValidItems) {
                    let itemsHTML = data.gallery.map((item, index) => {
                        if (!item || item.trim() === "") {
                            return `<div class="modal-gallery-item" style="border: none; background: transparent; pointer-events: none; visibility: hidden; height: 150px;"></div>`;
                        }

                        const caption = (data.galleryCaptions && data.galleryCaptions[index]) ? data.galleryCaptions[index] : 'Gallery Image ' + (index + 1);

                        // Check if item is a video URL
                        const isVideo = item.includes('drive.google.com') || item.includes('youtube.com') || item.endsWith('.mp4');

                        if (isVideo) {
                            return `
                                <div class="modal-gallery-item" style="position: relative; width: 100%; aspect-ratio: 16/9; background: #0a0e17; display: block; padding: 0; overflow: hidden; border-radius: 8px;">
                                    <iframe src="${item}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; pointer-events: none;" tabindex="-1"></iframe>
                                    <!-- Transparent click-catcher to trigger modal, revealing Google Drive's native play button underneath -->
                                    <div class="video-thumbnail-overlay" onclick="openMediaModal('${item}', '${caption.replace(/'/g, "\\'")}', true)" style="position: absolute; inset: 0; z-index: 10; cursor: pointer; transition: background 0.3s; background: transparent;" onmouseover="this.style.background='rgba(56,189,248,0.1)'" onmouseout="this.style.background='transparent'">
                                    </div>
                                </div>
                            `;
                        } else {
                            return `
                                <div class="modal-gallery-item" style="cursor: pointer;" onclick="openMediaModal('${item}', '${caption.replace(/'/g, "\\'")}', false)">
                                    <img src="${item}" alt="${caption}" loading="lazy">
                                    <div class="modal-gallery-caption">${caption}</div>
                                </div>
                            `;
                        }
                    }).join('');

                    galleryHTML = `
                        <h4 class="modal-gallery-heading">Project Gallery</h4>
                        <div class="modal-gallery">
                            ${itemsHTML}
                        </div>
                    `;
                }
            }

            modalBody.innerHTML = `
                <div class="modal-category">${data.category}</div>
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-tools">${toolsHTML}</div>
                <p class="modal-desc">${data.detailedDesc}</p>
                ${galleryHTML}
            `;
        } else if (type === 'experience') {
            const respHTML = data.responsibilities.map(r => `<li>${r}</li>`).join('');

            modalBody.innerHTML = `
                <div class="modal-category">${data.company}</div>
                <h2 class="modal-title">${data.role}</h2>
                <div class="modal-tools">
                    <span><i class="fa-regular fa-calendar"></i> ${data.duration}</span>
                    <span><i class="fa-solid fa-location-dot"></i> ${data.location}</span>
                </div>
                <p class="modal-desc">${data.detailedDesc}</p>
                <h4 class="modal-gallery-heading" style="margin-top: 20px;">Key Responsibilities</h4>
                <ul class="exp-responsibilities" style="margin-bottom: 20px; list-style: none;">${respHTML}</ul>
            `;
        }

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // ── MEDIA MODAL LOGIC ──
    const mediaModal = document.getElementById('media-player-modal');
    const mediaModalBody = document.getElementById('media-modal-body');
    const mediaModalClose = document.getElementById('media-modal-close');
    const mediaCaptionOverlay = document.getElementById('media-caption-overlay');

    window.openMediaModal = function (url, caption, isVideo = false) {
        if (caption && caption.trim() !== "") {
            mediaCaptionOverlay.textContent = caption;
            mediaCaptionOverlay.style.display = 'block';
        } else {
            mediaCaptionOverlay.style.display = 'none';
        }

        if (isVideo) {
            mediaModalBody.innerHTML = `<iframe src="${url}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
            mediaModalBody.style.paddingBottom = '56.25%'; // 16:9 aspect ratio
        } else {
            mediaModalBody.innerHTML = `<img src="${url}" style="width: 100%; height: auto; max-height: 80vh; object-fit: contain; display: block; border-radius: 8px;">`;
            mediaModalBody.style.paddingBottom = '0'; // Let image dictate height
        }
        
        mediaModal.style.display = 'block';
    };

    function closeMediaModal() {
        if (mediaModal) {
            mediaModal.style.display = 'none';
            if (mediaModalBody) mediaModalBody.innerHTML = ''; // Stop video playback / clear image
        }
    }

    if (mediaModalClose) mediaModalClose.addEventListener('click', closeMediaModal);
    if (mediaModal) mediaModal.addEventListener('click', (e) => { if (e.target === mediaModal || e.target.closest('.media-container') === null && e.target !== mediaModalBody) closeMediaModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && mediaModal && mediaModal.style.display === 'block') closeMediaModal(); });

});
