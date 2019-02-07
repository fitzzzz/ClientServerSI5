require("@babel/core").transform("code", {
    plugins: ["transform-inline-environment-variables",{
        "include": [
            "NODE_ENV",
            "BASE_URL",
            "GOOGLE_APIKEY"
        ]
    }]
});

module.exports = {
  presets: [
    '@vue/app'
  ],
};
