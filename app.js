const express = require('express');
const app = express();
const os = require('os');

app.get('/', (req, res) => {
    const healthInfo = {
        status: "Success",
        message: "CodeChine DevOps Task is Live!",
        deployedBy: "Abdul Rehman",
        hostname: os.hostname(),
        platform: os.platform(),
        uptime: Math.floor(process.uptime()) + " seconds"
    };

    res.send(`
        <body style="font-family: Arial; text-align: center; background: #f4f4f4; padding: 50px;">
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); display: inline-block;">
                <h1 style="color: #2ecc71;">${healthInfo.message}</h1>
                <p><strong>Deployed By:</strong> ${healthInfo.deployedBy}</p>
                <p><strong>Server Hostname:</strong> ${healthInfo.hostname}</p>
                <p><strong>OS Platform:</strong> ${healthInfo.platform}</p>
                <p><strong>Server Uptime:</strong> ${healthInfo.uptime}</p>
                <hr>
                <small>Environment: Production | Dockerized: Yes</small>
            </div>
        </body>
    `);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
