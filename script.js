// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Contact Form Validation
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        if (name === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
            e.target.reset();
        }
    });
}

// Fetch API - Load Users
const loadBtn = document.getElementById("loadUsersBtn");
if (loadBtn) {
    loadBtn.addEventListener("click", async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            const userList = document.getElementById("userList");
            userList.innerHTML = "";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });
        } catch (err) {
            console.error("Failed to load users:", err);
        }
    });
}

// Enhanced FAQ Toggle with Collapse
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Collapse all items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
        });

        // Expand current item if not already open
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Real-Time Clock
const clock = document.getElementById("clock");
if (clock) {
    setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 1000);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
