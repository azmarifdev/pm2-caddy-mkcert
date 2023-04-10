module.exports = {
    apps: [
        {
            name: 'express-app',
            script: 'yarn',
            args: 'start',
            cwd: './express-app',
            env: {
                PORT: 8080,
            },
        },
        {
            name: 'express-app',
            script: 'yarn',
            args: 'start',
            cwd: './express-app',
            env: {
                PORT: 8085,
            },
        },
        {
            name: 'my-react-app',
            script: 'yarn',
            args: 'start',
            cwd: './my-react-app',
        },
    ],
};