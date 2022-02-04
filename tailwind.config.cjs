module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,svelte}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: true,
  plugins: [require('flowbite/plugin')],
}
