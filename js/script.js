lucide.createIcons();

function filterSelection(category) {
    const projects = document.getElementsByClassName("project-card");
    const buttons = document.getElementsByClassName("filter-btn");

    // Handle button styles
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
    const activeBtn = document.getElementById("btn-" + category);
    if (activeBtn) activeBtn.classList.add("active");

    // Handle project visibility
    for (let i = 0; i < projects.length; i++) {
        if (category === "all") {
            projects[i].classList.remove("hidden");
        } else {
            if (projects[i].classList.contains(category)) {
                projects[i].classList.remove("hidden");
            } else {
                projects[i].classList.add("hidden");
            }
        }
    }
}

// THIS LINE MAKES GAMES SHOW FIRST AUTOMATICALLY
filterSelection('gamedev');
// --- Language Toggle System ---
const langToggleBtn = document.getElementById('lang-toggle');

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Toggle the 'es-active' class on the body
        document.body.classList.toggle('es-active');
        
        // Change the button text depending on the active language
        if (document.body.classList.contains('es-active')) {
            langToggleBtn.innerText = 'EN'; // Show EN button when in Spanish
        } else {
            langToggleBtn.innerText = 'ES'; // Show ES button when in English
        }
    });
}