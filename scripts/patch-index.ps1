$fn = 'c:\Users\ankav\Desktop\server\SERVER\web server\status-server\index.js'
$text = Get-Content -Raw -Path $fn
$text = $text.Replace('path.join(__dirname, "nextieria.ddns.net-key.pem")', 'path.join(__dirname, "pems", "nextieria.ddns.net-key.pem")')
$text = $text.Replace('path.join(__dirname, "nextieria.ddns.net-crt.pem")', 'path.join(__dirname, "pems", "nextieria.ddns.net-crt.pem")')
$text = $text.Replace('path.join(__dirname, "Nextieria.html")', 'path.join(__dirname, "HTML", "Nextieria.html")')
$text = $text.Replace('path.join(__dirname, "createAccount.html")', 'path.join(__dirname, "HTML", "createAccount.html")')
$text = $text.Replace('path.join(__dirname, "shop.html")', 'path.join(__dirname, "HTML", "shop.html")')
$text = $text.Replace('path.join(__dirname, "gameserver.html")', 'path.join(__dirname, "HTML", "gameserver.html")')
$text = $text.Replace('path.join(__dirname, "Tutorial.json")', 'path.join(__dirname, "JSON", "Tutorial.json")')
$text = $text.Replace('path.join(__dirname, "Tutorials.html")', 'path.join(__dirname, "HTML", "Tutorials.html")')
$text = $text.Replace('path.join(__dirname, "InfoAbt.html")', 'path.join(__dirname, "HTML", "InfoAbt.html")')
$text = $text.Replace('path.join(__dirname, req.params.file)', 'path.join(__dirname, "HTML", req.params.file)')
Set-Content -Path $fn -Value $text -Encoding UTF8
Write-Output "Patched index.js"
