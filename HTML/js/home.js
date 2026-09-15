        const slideDuration = 6500;
        let currentSlide = 0;
        let slides = [];
        let dots = [];
        let slideTimer = null;

        function playAudio() {
            new Audio('https://www.myinstants.com/media/sounds/fortnite-knocked.mp3').play();
        }

        async function init() {
            try {
                const response = await fetch('https://nextieria.ddns.net:45/Downloads/JSON/INFO.json');
                const data = await response.json();
                const container = document.getElementById('news-container');
                const extra = document.getElementById('extra-content');
                const dotsContainer = document.getElementById('slide-dots');

                data.forEach((item) => {
                    if (item.type === 'featured') {
                        const slideIndex = slides.length;
                        const slide = document.createElement('div');
                        slide.className = `news-slide ${slideIndex === 0 ? 'active' : ''}`;
                        slide.style.backgroundImage = `url('${item.image}')`;
                        slide.innerHTML = `<div class="news-content"><h2>${item.title}</h2><p>${item.description}</p>${item.button ? `<a href="${item.buttonLink}" class="news-btn">${item.buttonText}</a>` : ''}</div>`;
                        container.appendChild(slide);
                        slides.push(slide);

                        const dot = document.createElement('button');
                        dot.type = 'button';
                        dot.className = `slide-dot ${slideIndex === 0 ? 'active' : ''}`;
                        dot.setAttribute('aria-label', `Go to slide ${slideIndex + 1}`);
                        dot.innerHTML = '<span></span>';
                        dot.addEventListener('click', () => showSlide(slideIndex, true));
                        dotsContainer.appendChild(dot);
                        dots.push(dot);
                    } else if (item.type === 'section') {
                        extra.innerHTML += `<div class="content-section"><img src="${item.image}" alt="${item.title}"><div><h2>${item.title}</h2><p>${item.description}</p></div></div>`;
                    }
                });

                if (slides.length > 0) {
                    document.documentElement.style.setProperty('--slide-duration', `${slideDuration}ms`);
                    restartTimer();
                }
            } catch (e) {
                console.error(e);
            }

            try {
                const playerRes = await fetch('https://nextieria.ddns.net:72/');
                const playerData = await playerRes.json();
                document.getElementById('player-count').innerText = "Players online: " + playerData.Clients.amount;
            } catch (e) {
                document.getElementById('player-count').innerText = "Players online: unavailable";
            }
        }

        function restartTimer() {
            clearTimeout(slideTimer);
            dots.forEach((dot) => {
                dot.classList.remove('active');
                const fill = dot.querySelector('span');
                fill.style.animation = 'none';
                fill.offsetHeight;
                fill.style.animation = '';
            });

            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }

            slideTimer = setTimeout(nextSlide, slideDuration);
        }

        function showSlide(index, manual = false) {
            if (!slides.length) {
                return;
            }

            slides.forEach(s => s.classList.remove('active'));
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            restartTimer();

            if (manual) {
                const activeDot = dots[currentSlide];
                if (activeDot) {
                    activeDot.blur();
                }
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1, true);
        }

        function scrollPastHero() {
            const target = document.getElementById('extra-content');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function handleScrollMoreKey(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                scrollPastHero();
            }
        }

        function goToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function handleGoTopKey(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                goToTop();
            }
        }

        function updateScrollControls() {
            const scrollMore = document.getElementById('scroll-more');
            if (scrollMore) {
                scrollMore.classList.toggle('hidden', window.scrollY > 40);
            }

            const goTop = document.getElementById('go-top');
            if (goTop) {
                const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
                goTop.classList.toggle('visible', nearBottom);
            }
        }

        window.addEventListener('scroll', updateScrollControls, { passive: true });
        window.addEventListener('load', updateScrollControls);

        init();