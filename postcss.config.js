module.exports = {
  plugins: [
    require(`tailwindcss/nesting`),
    require(`tailwindcss`)(`./styles/tailwind.config.js`),
    require(`autoprefixer`),
  ],
};
