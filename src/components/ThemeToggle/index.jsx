import { Sun, Moon } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/slices/dashboardSlice'
import styles from './style.module.css'

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.dashboard);
  const title = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
  const icon = theme === 'light' ? <Moon size={20} /> : <Sun size={20} />;

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className={styles.themeToggle}
      title={title}
    >
      {icon}
    </button>
  )
}
