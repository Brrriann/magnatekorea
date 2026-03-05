// ==================== 네비게이션 ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ==================== 스크롤 애니메이션 ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// About 카드 애니메이션
document.querySelectorAll('.about-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Portfolio 아이템 애니메이션
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.animationDelay = `${index * 0.05}s`;
    observer.observe(item);
});

// Team 멤버 애니메이션
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.opacity = '0';
    member.style.animationDelay = `${index * 0.1}s`;
    observer.observe(member);
});

// ==================== 폼 제출 ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        company: contactForm.querySelector('input[type="text"]:first-of-type').value,
        name: contactForm.querySelector('input[type="text"]:last-of-type').value,
        email: contactForm.querySelector('input[type="email"]').value,
        phone: contactForm.querySelector('input[type="tel"]').value,
        message: contactForm.querySelector('textarea').value
    };

    // 폼 제출 처리 (실제 서버로 전송하려면 API 연결 필요)
    console.log('Form Data:', formData);

    // 사용자 피드백
    showSuccessMessage();
    contactForm.reset();
});

function showSuccessMessage() {
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '✓ 신청되었습니다!';
    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #00d4ff, #ff006e)';
    }, 3000);
}

// ==================== 스크롤 헤더 효과 ====================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// ==================== 부드러운 스크롤 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 페이드인 애니메이션 CSS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== 카운터 애니메이션 ====================
const countUp = (element, target, duration = 2000) => {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
};

// ==================== 로드 애니메이션 ====================
window.addEventListener('load', () => {
    document.querySelectorAll('.about-card, .portfolio-item, .team-member').forEach(element => {
        if (element.style.animation) {
            element.style.opacity = '1';
        }
    });
});

// ==================== 포트폴리오 필터링 ====================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('[data-category]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 활성 버튼 변경
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 필터링
        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                }, 0);
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ==================== 통계 숫자 애니메이션 ====================
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const countUp = (element, target) => {
        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // 숫자에 따라 포맷팅
            if (element.textContent.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    };

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observeStats = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(element => {
                    const text = element.textContent;
                    let target = 0;

                    if (text.includes('500')) target = 500;
                    else if (text.includes('150')) target = 150;
                    else if (text.includes('98')) target = 98;
                    else if (text.includes('12')) target = 12;

                    if (target > 0) {
                        countUp(element, target);
                    }
                });

                observeStats.unobserve(entries[0].target);
            }
        }, observerOptions);

        observeStats.observe(statsSection);
    }
};

animateStats();

// ==================== 추가 카드 애니메이션 ====================
document.querySelectorAll('.service-card, .news-card, .testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ==================== 페이지 로드 시작 ====================
console.log('MAGNATE KOREA - Website Loaded Successfully');
