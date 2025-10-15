# Educonnect Development Server
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:3000/")
$listener.Start()

Write-Host "🎓 Educonnect Development Server"
Write-Host "Server started at http://localhost:3000/"
Write-Host "Serving modern educational portal"
Write-Host "Press Ctrl+C to stop the server"
Write-Host "============================================"

$basePath = $PWD.Path

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Add CORS headers
        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")
        
        # Get the requested file path
        $localPath = $request.Url.LocalPath
        Write-Host "📡 Request: $localPath" -ForegroundColor Cyan
        
        if ($localPath -eq "/") {
            $localPath = "/index.html"
        }
        
        $filePath = Join-Path $basePath $localPath.TrimStart('/')
        
        if (Test-Path $filePath) {
            # Handle binary and text files properly
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            
            switch ($extension) {
                ".html" { 
                    $response.ContentType = "text/html; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
                ".css" { 
                    $response.ContentType = "text/css; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
                ".js" { 
                    $response.ContentType = "application/javascript; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
                ".json" { 
                    $response.ContentType = "application/json; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
                ".svg" { 
                    $response.ContentType = "image/svg+xml; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
                ".png" { 
                    $response.ContentType = "image/png"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".jpg" { 
                    $response.ContentType = "image/jpeg"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".jpeg" { 
                    $response.ContentType = "image/jpeg"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".gif" { 
                    $response.ContentType = "image/gif"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".webp" { 
                    $response.ContentType = "image/webp"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".ico" { 
                    $response.ContentType = "image/x-icon"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".woff" { 
                    $response.ContentType = "font/woff"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                ".woff2" { 
                    $response.ContentType = "font/woff2"
                    $buffer = [System.IO.File]::ReadAllBytes($filePath)
                }
                default { 
                    $response.ContentType = "text/plain; charset=utf-8"
                    $content = Get-Content $filePath -Raw -Encoding UTF8
                    $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                }
            }
            
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            Write-Host "✅ Served: $($buffer.Length) bytes" -ForegroundColor Green
        } else {
            $response.StatusCode = 404
            $content = "<!DOCTYPE html><html><head><title>404 - Not Found</title></head><body><h1>404 - File Not Found</h1><p>The requested file <code>$localPath</code> was not found.</p></body></html>"
            Write-Host "❌ 404: $filePath" -ForegroundColor Red
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.OutputStream.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "🛑 Server stopped" -ForegroundColor Yellow
}