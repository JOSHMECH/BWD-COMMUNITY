// Nigerian Design League - Main JavaScript File

// Mock data
const challengesData = [
  {
    id: 1,
    title: "5-aside (ui/ux & developer) Challenge",
    description:
      "Redesign a popular Nigerian mobile app interface with focus on user experience and local cultural elements.",
    status: "Upcoming", // changed
    deadline: "2024-09-15",
    participants: 145,
    prize: "₦150,000",
    category: "UI/UX Design/developer",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Graphic Design league",
    description:
      "Create a series of posters celebrating Nigerian cultural heritage and diversity across different regions.",
    status: "Upcoming", // changed
    deadline: "2024-09-22",
    participants: 0,
    prize: "₦200,000",
    category: "Graphic Design",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Fintech Dashboard Innovation",
    description:
      "Design an innovative dashboard for a Nigerian fintech startup focusing on cryptocurrency and digital payments.",
    status: "Upcoming", // changed
    deadline: "2024-09-08",
    participants: 89,
    prize: "₦300,000",
    category: "Product Design/developer",
    difficulty: "Advanced",
  },
  {
    id: 4,
    title: "Sustainable Lagos Branding",
    description:
      "Create a comprehensive brand identity for a sustainable development initiative in Lagos State.",
    status: "Upcoming", // changed
    deadline: "2024-09-01",
    participants: 112,
    prize: "₦175,000",
    category: "Brand Design",
    difficulty: "Intermediate",
  },
];

const leaderboardData = [
  {
    rank: 1,
    name: "josh_d_developer",
    title: "developer / creative designer",
    points: 2850,
    wins: 8,
    challenges: 15,
    avatar: "JDD",
  },
  {
    rank: 2,
    name: "isreal the UI/UX Oracle",
    title: "UI/UX Designer",
    points: 2720,
    wins: 6,
    challenges: 12,
    avatar: "IS",
  },
  {
    rank: 3,
    name: "Design God",
    title: "Brand Designer",
    points: 2680,
    wins: 7,
    challenges: 14,
    avatar: "GD",
  },
  {
    rank: 4,
    name: "Lawrence the plug",
    title: "craetive designer / web designer",
    points: 2540,
    wins: 5,
    challenges: 11,
    avatar: "LA",
  },
  {
    rank: 5,
    name: "francel",
    title: "Motion Designer",
    points: 2480,
    wins: 4,
    challenges: 10,
    avatar: "FR",
  },
  {
    rank: 6,
    name: "Enobong",
    title: "Product Designer",
    points: 2350,
    wins: 3,
    challenges: 9,
    avatar: "EN",
  },
  {
    rank: 7,
    name: "fanzy",
    title: "Creative Director",
    points: 2280,
    wins: 4,
    challenges: 8,
    avatar: "FA",
  },
  {
    rank: 8,
    name: "Steezii",
    title: "Graphic Designer",
    points: 2180,
    wins: 2,
    challenges: 7,
    avatar: "ST",
  },
  {
    rank: 9,
    name: "Holly",
    title: "Web Developer",
    points: 2100,
    wins: 2,
    challenges: 6,
    avatar: "AD",
  },
  {
    rank: 10,
    name: "Asap",
    title: "Animator",
    points: 2050,
    wins: 1,
    challenges: 5,
    avatar: "TS",
  },
];

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const challengesGrid = document.getElementById("challengesGrid");
const leaderboardTable = document.getElementById("leaderboardTable");
const countdownElements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}

// Countdown Timer
function updateCountdown() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);
  deadline.setHours(23, 59, 59, 999);

  const now = new Date().getTime();
  const distance = deadline.getTime() - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (countdownElements.days)
      countdownElements.days.textContent = days.toString().padStart(2, "0");
    if (countdownElements.hours)
      countdownElements.hours.textContent = hours.toString().padStart(2, "0");
    if (countdownElements.minutes)
      countdownElements.minutes.textContent = minutes
        .toString()
        .padStart(2, "0");
    if (countdownElements.seconds)
      countdownElements.seconds.textContent = seconds
        .toString()
        .padStart(2, "0");
  }
}

// Initialize countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Helper Functions
function getStatusBadgeClass(status) {
  switch (status) {
    case "upcoming":
      return "badge-primary";
    case "judging":
      return "badge-accent";
    case "upcoming":
      return "badge-secondary";
    case "upcoming":
      return "badge-muted";
    default:
      return "badge-muted";
  }
}

function getDifficultyIcon(difficulty) {
  const iconClass =
    difficulty === "Beginner"
      ? "difficulty-beginner"
      : difficulty === "Intermediate"
      ? "difficulty-intermediate"
      : "difficulty-advanced";

  return `<svg class="${iconClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
    </svg>`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Render Challenges
function renderChallenges() {
  if (!challengesGrid) return;

  challengesGrid.innerHTML = challengesData
    .map(
      (challenge) => `
        <div class="challenge-card">
            <div class="challenge-header">
                <div class="challenge-content">
                    <h3 class="challenge-title">${challenge.title}</h3>
                    <p class="challenge-description">${
                      challenge.description
                    }</p>
                </div>
                <div class="badge ${getStatusBadgeClass(challenge.status)}">${
        challenge.status
      }</div>
            </div>
            
            <div class="challenge-badges">
                <div class="badge badge-outline">${challenge.category}</div>
                <div class="badge badge-outline flex items-center gap-2">
                    ${getDifficultyIcon(challenge.difficulty)}
                    ${challenge.difficulty}
                </div>
            </div>

            <div class="challenge-stats">
                <div class="challenge-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 2v4"/>
                        <path d="M16 2v4"/>
                        <rect width="18" height="18" x="3" y="4" rx="2"/>
                        <path d="M3 10h18"/>
                    </svg>
                    <span>Due: ${formatDate(challenge.deadline)}</span>
                </div>
                <div class="challenge-stat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    <span>${challenge.participants} participants</span>
                </div>
            </div>

            <div class="challenge-footer">
                <div class="challenge-prize">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                        <path d="M4 22h16"/>
                        <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.25 18.75 14 20 16 20s3.75-1.25 5.03-1.79c.5-.23.97-.66.97-1.21v-2.34"/>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                    </svg>
                    <span class="prize-amount">${challenge.prize}</span>
                </div>
                
                <div class="challenge-actions">
  ${
    // Use an external link for each challenge, based on its id or title
    (() => {
      // Map challenge id or title to a specific external link
      const detailsLinks = {
        1: "upcoming.html", // 5-aside (ui/ux & developer) Challenge
        2: "https://forms.gle/xRR1v6uG6SAkTy7W9", // Graphic Design league
        3: "upcoming.html", // Fintech Dashboard Innovation
        4: "upcoming.html", // Sustainable Lagos Branding
      };
      const link = detailsLinks[challenge.id];
      if (link) {
        return `
        <a
          class="btn btn-outline"
          href="${link}"
          target="_blank"
          rel="noopener"
        >
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          View Details
        </a>
        `;
      } else {
        return `
        <button class="btn btn-outline">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          View Details
        </button>
        `;
      }
    })()
  }
  ${
    challenge.status === "Active"
      ? `
      <button class="btn btn-primary">
        Join Challenge
      </button>
    `
      : ""
  }
</div>
            </div>
        </div>
    `
    )
    .join("");
}

// Render Leaderboard
function renderLeaderboard() {
  if (!leaderboardTable) return;

  leaderboardTable.innerHTML = leaderboardData
    .map(
      (designer) => `
        <div class="leaderboard-item">
            <div class="rank ${
              designer.rank <= 3 ? `rank-${designer.rank}` : ""
            }">${designer.rank}</div>
            <div class="designer-avatar">${designer.avatar}</div>
            <div class="designer-info">
                <div class="designer-name">${designer.name}</div>
                <div class="designer-title">${designer.title}</div>
            </div>
            <div class="designer-stats">
                <span class="points">${designer.points.toLocaleString()} pts</span>
                <span>${designer.wins} wins</span>
                <span>${designer.challenges} challenges</span>
            </div>
        </div>
    `
    )
    .join("");
}

// Tab functionality for leaderboard
function initializeTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all tabs
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked tab
      button.classList.add("active");

      // Here you could implement different data loading based on the tab
      // For now, we'll just re-render the same data
      renderLeaderboard();
    });
  });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains("open")) {
          mobileMenu.classList.remove("open");
        }
      }
    });
  });
}

// Newsletter form handling
function initializeNewsletter() {
  const newsletterForm = document.querySelector(".newsletter-form");
  const newsletterInput = document.querySelector(".newsletter-input");
  const subscribeBtn = newsletterForm?.querySelector(".btn-accent");

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = newsletterInput?.value;

      if (email && isValidEmail(email)) {
        alert(
          "Thank you for subscribing! You'll receive updates about new challenges."
        );
        newsletterInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add some interactive animations
function addInteractiveAnimations() {
  // Add hover effects to challenge cards
  const challengeCards = document.querySelectorAll(".challenge-card");
  challengeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Add click animation to buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    });
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderChallenges();
  renderLeaderboard();
  initializeTabs();
  initializeSmoothScrolling();
  initializeNewsletter();

  // Add interactive animations after a short delay to ensure all elements are rendered
  setTimeout(addInteractiveAnimations, 100);
});

// Handle window resize for responsive behavior
window.addEventListener("resize", () => {
  // Close mobile menu on resize to larger screen
  if (window.innerWidth >= 1024 && mobileMenu) {
    mobileMenu.classList.remove("open");
  }
});

// Add some performance optimizations
// Throttle scroll events
let scrollTimeout;
window.addEventListener("scroll", () => {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(() => {
    // Add scroll-based animations here if needed
    const scrollY = window.scrollY;
    const navbar = document.querySelector(".nav");

    if (navbar) {
      if (scrollY > 100) {
        navbar.style.background = "hsla(0, 0%, 98%, 0.98)";
        navbar.style.backdropFilter = "blur(12px)";
      } else {
        navbar.style.background = "hsla(0, 0%, 98%, 0.95)";
        navbar.style.backdropFilter = "blur(8px)";
      }
    }
  }, 10);
});

// Export functions for potential future use
window.NigerianDesignLeague = {
  updateCountdown,
  renderChallenges,
  renderLeaderboard,
  challengesData,
  leaderboardData,
};
