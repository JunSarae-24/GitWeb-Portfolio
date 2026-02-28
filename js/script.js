// Initialize Lucide Icons
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