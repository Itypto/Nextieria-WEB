const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const HOSTNAME = "nextieria.ddns.net";

const options = {
    key: fs.readFileSync(path.join(__dirname, "pems", "privkey.pem")),
    cert: fs.readFileSync(path.join(__dirname, "pems", "fullchain.pem"))
};

function sendStaticFile(res, ...parts) {
    const filePath = path.join(__dirname, ...parts);
    if (!fs.existsSync(filePath)) return res.status(404).send("File not found");
    return res.sendFile(filePath);
}

app.get(["/", "/Nextieria/home"], (req, res) => sendStaticFile(res, "HTML", "Home.html"));
app.get("/shop", (req, res) => sendStaticFile(res, "HTML", "shop.html"));
app.get("/status", (req, res) => sendStaticFile(res, "HTML", "Status.html"));
app.get("/code/tutorial", (req, res) => sendStaticFile(res, "JSON", "Tutorial.json"));
app.get("/news/launcher", (req, res) => sendStaticFile(res, "JSON", "NewsLauncher.json"));
app.get(["/news", "/news.html"], (req, res) => sendStaticFile(res, "HTML", "news.html"));
app.get("/tutorials", (req, res) => sendStaticFile(res, "HTML", "Tutorials.html"));
app.get("/download", (req, res) => sendStaticFile(res, "HTML", "Download.html"));
app.get("/Info", (req, res) => sendStaticFile(res, "HTML", "InfoAbt.html"));
app.get("/eula", (req, res) => sendStaticFile(res, "HTML", "eula.html"));
app.get("/tutorials/android", (req, res) => sendStaticFile(res, "HTML", "AndroidGuide.html"));
app.get("/tutorials/iOS", (req, res) => sendStaticFile(res, "HTML", "iOSGuide.html"));
app.get("/creator", (req, res) => sendStaticFile(res, "HTML", "creator.html"));
app.get("/events", (req, res) => sendStaticFile(res, "HTML", "events.html"));
app.get("/socials", (req, res) => sendStaticFile(res, "HTML", "socials.html"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/js", express.static(path.join(__dirname, "HTML", "js")));
app.use("/HTML", express.static(path.join(__dirname, "HTML")));
app.get("/soon", (req, res) => sendStaticFile(res, "HTML", "soon.html"));
app.get("/secret", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Secret Reward</title>
            <link rel="icon" type="image/x-icon" href="https://nextieria.ddns.net:45/Downloads/Other/NextieriaN.ico?v=a3bd85f6">
            <style>
                body, html {
                    margin: 0; padding: 0; width: 100%; height: 100%;
                    overflow: hidden; background-color: #000;
                    display: flex; justify-content: center; align-items: center;
                    font-family: sans-serif; color: white; cursor: pointer;
                }
                video {
                    display: none;
                    width: 100%; height: 100%; object-fit: cover;
                }
                #overlay {
                    text-align: center;
                }
                .btn {
                    background: #ffeb3b; color: #000; padding: 15px 30px;
                    font-weight: bold; font-size: 20px; border: none;
                    border-radius: 5px; cursor: pointer; margin-top: 20px;
                }
            </style>
        </head>
        <body>

            <div id="overlay">
                <h2></h2>
                <button class="btn" onclick="startPrank()">CLAIM REWARD</button>
            </div>

            <video id="trollVideo" loop playsinline>
                <source src="/secret-video" type="video/mp4">
            </video>

            <script>
                function startPrank() {
                    const video = document.getElementById('trollVideo');
                    const overlay = document.getElementById('overlay');
                    
                    overlay.style.display = 'none';
                    video.style.display = 'block';
                    
                    video.play().catch(err => {
                        console.log("Playback failed:", err);
                    });
                }
            </script>
        </body>
        </html>
    `);
});

app.get("/secret-video", (req, res) => {
    res.sendFile(path.join(__dirname, "Filmer", "HEHE.mp4"));
});
app.get("/js/:file", (req, res) => {
    const filepath = path.join(__dirname, "HTML", req.params.file);
    if (!fs.existsSync(filepath)) return res.status(404).send("File not found");
    res.setHeader("Content-Type", "application/javascript");
    fs.createReadStream(filepath).pipe(res);
});

https.createServer(options, app).listen(443, () => {
    console.log(`Server running at https://${HOSTNAME}:443`);
});
