document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer");
    
    if (footerContainer) {
        footerContainer.innerHTML = `
            <section class="nextieria-links" id="nextieria-links">
                <div class="nextieria-links-inner">
                    <div class="footer-top">
                        <img class="footer-logo" src="https://nextieria.ddns.net:45/Downloads/Images/NextieriaFullName.png" alt="Nextieria">
                    </div>
                    <div class="footer-line"></div>
                    <div class="footer-columns">
                        <div class="footer-column">
                            <h2>Main</h2>
                            <a href="https://nextieria.ddns.net">Home</a>
                            <a href="https://nextieria.ddns.net/Download">Get Nextieria</a>
                            <a href="https://nextieria.ddns.net/news">News</a>
                        </div>
                        <div class="footer-column">
                            <h2>More</h2>
                            <a href="https://nextieria.ddns.net/Info">FAQ/Info</a>
                            <a href="https://nextieria.ddns.net/eula">Eula</a>
                            <a href="https://nextieria.ddns.net/events">Events</a>
                            <a href="https://nextieria.ddns.net/creator">Creator requirements</a>
                        </div>
                        <div class="footer-column">
                            <h2>Support</h2>
                            <a href="https://discord.gg/JvdM7D2B9Y">Get help</a>
                            <a href="https://nextieria.ddns.net/issue">Common issues</a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        Nextieria is not affiliated with, endorsed by, or sponsored by Epic Games, Inc. <br>
                        All Fortnite assets are property of Epic Games.
                    </div>
                </div>
            </section>
        `;
    }
});