function playAudio(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    const audio = new Audio('https://www.myinstants.com/media/sounds/fortnite-knocked.mp3');
    audio.play().catch(error => {
        console.error("Error playing audio:", error);
    });
}

const navbarHTML = `
<nav class="site-nav" aria-label="Main navigation">
    <a class="brand" href="https://nextieria.ddns.net/" aria-label="Nextieria home">
        <img src="https://nextieria.ddns.net:45/Downloads/Images/NextieriaN.png" alt="" onclick="playAudio(event)" style="cursor: pointer;" width="70" height="70">
    </a>
    <a href="https://nextieria.ddns.net/">Home</a>
    <a href="https://nextieria.ddns.net/shop">Shop</a>
    <a href="https://nextieria.ddns.net/tutorials/">Tutorials</a>
    <a href="https://nextieria.ddns.net/news">News</a>
    <a href="https://nextieria.ddns.net/Download" class="nav-download-btn">DOWNLOAD NOW</a>

    <input type="checkbox" id="nav-more-toggle" class="more-toggle" hidden> 
    <label for="nav-more-toggle" class="nav-more" aria-label="More options">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </label>

    <div class="more-menu" role="menu" aria-hidden="false">
        <a href="https://nextieria.ddns.net/system-requirements" role="menuitem">System Requirements</a>
        <a href="https://nextieria.ddns.net/eula" role="menuitem">Eula</a>
        <a href="https://nextieria.ddns.net/events" role="menuitem">Events</a> 
        <a href="https://nextieria.ddns.net/creator" role="menuitem">Creator requirements</a> 
        <a href="https://nextieria.ddns.net/status" role="menuitem">Server Status</a>
    </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('main-nav');
    if (navContainer) {
        navContainer.innerHTML = navbarHTML;

        const currentPath = window.location.pathname;
        const links = navContainer.querySelectorAll('a:not(.nav-download-btn)');

        links.forEach(link => {
            const linkPath = new URL(link.href, window.location.origin).pathname;

            const normalizedCurrent = currentPath.endsWith('/') && currentPath.length > 1 
                ? currentPath.slice(0, -1) 
                : currentPath;
                
            const normalizedLink = linkPath.endsWith('/') && linkPath.length > 1 
                ? linkPath.slice(0, -1) 
                : linkPath;

            if (normalizedCurrent === normalizedLink) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }
});
