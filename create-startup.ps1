$WshShell = New-Object -ComObject WScript.Shell
$startupFolder = [System.Environment]::GetFolderPath('Startup')
$Shortcut = $WshShell.CreateShortcut("$startupFolder\PortfolioDevServer.lnk")
$Shortcut.TargetPath = "C:\Users\vinay\OneDrive\Desktop\portfolio-website\start-dev.bat"
$Shortcut.WorkingDirectory = "C:\Users\vinay\OneDrive\Desktop\portfolio-website"
$Shortcut.WindowStyle = 7
$Shortcut.Description = "Portfolio Dev Server - localhost:3000"
$Shortcut.Save()
Write-Host "Done! Startup shortcut created at: $startupFolder"

