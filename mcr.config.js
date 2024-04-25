export default {

    //logging: "debug",

    name: 'My Playwright Coverage Report',

    reports: [
        'console-details',
        'v8',
        'lcovonly'
    ],

    entryFilter: {
        '**/node_modules/**': false,
        '**/*.vue': true
    },

    sourcePath: (filePath, info) => {
        if (info.distFile) {
            const list = info.distFile.split("/");
            list.shift();
            list.pop();
            list.push(filePath);
            return list.join("/");
        }
        return filePath;
    },

    outputDir: './coverage-reports'
};
