// js/navbar.js

const navbarHTML = `
<nav class="site-nav" aria-label="Main navigation">
    <a class="brand" href="https://nextieria.ddns.net/" aria-label="Nextieria home">
        <img src="https://nextieria.ddns.net:45/Downloads/Images/NextieriaN.png" alt="" width="70" height="70">
    </a>
    <a href="https://nextieria.ddns.net/">Home</a>
    <a href="https://nextieria.ddns.net/shop">Shop</a>
    <a href="https://nextieria.ddns.net/tutorials/">Tutorials</a>
    <a href="https://nextieria.ddns.net/news" aria-current="page">News</a>

    <input type="checkbox" id="nav-more-toggle" class="more-toggle" hidden> 
    <label for="nav-more-toggle" class="nav-more" aria-label="More options">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </label>

    <div class="more-menu" role="menu" aria-hidden="false">
        <a href="https://nextieria.ddns.net/Info" role="menuitem">Info</a>
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
    }
});