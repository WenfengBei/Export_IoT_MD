//config.js
export const CONFIG = {
    user: 'username', // SQL Server user
    password: 'password',// password
    server: 'localhost', // host
    database: 'db', // database
    port: 1433, // Default 1433
    options: {
        encrypt: false,
        enableArithAbort: false
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
}

export const DOWNLOAD_CONFIG: DownloadConfig = {
    controllerName: "Controller", // Controller name
    controllerVersion: 5,                      // Controller version 
    outputPath: "./downloaded/"      // The local path where the workflow is stored
}

export interface DownloadConfig {
    controllerName: string,
    controllerVersion: number,
    outputPath: string,
}