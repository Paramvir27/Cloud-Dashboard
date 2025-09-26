export const changeTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove('light-theme', 'dark-theme');
  root.classList.add(`${theme}-theme`);
};