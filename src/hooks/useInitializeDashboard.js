import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, addRealTimeNotification } from '../store/slices/dashboardSlice'

const useInitializeDashboard = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.dashboard.isLoading)

  // Handle loading state changes - whenever isLoading becomes true, set it to false after 1 second
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        dispatch(setLoading(false))
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isLoading, dispatch])

  // Handle real-time notifications interval
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addRealTimeNotification())
    }, 60000)

    return () => clearInterval(interval)
  }, [dispatch])

  return { isLoading }
}

export default useInitializeDashboard
