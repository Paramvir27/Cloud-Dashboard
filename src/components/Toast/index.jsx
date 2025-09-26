import React from 'react'
import { Toast } from "radix-ui";
import { AlertTriangle, AlertCircle, Info, CheckCircle, X } from 'lucide-react'
import styles from './style.module.css'

// Simple Toast Component
const ToastComponent = ({ currentToast, onDismiss, onAutoDismiss }) => {

  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return <AlertCircle size={16} className={styles.toastIconError} />
      case 'warning':
        return <AlertTriangle size={16} className={styles.toastIconWarning} />
      case 'success':
        return <CheckCircle size={16} className={styles.toastIconSuccess} />
      case 'info':
      default:
        return <Info size={16} className={styles.toastIconInfo} />
    }
  }

  if (!currentToast) return null

  return (
    <Toast.Provider swipeDirection="right" duration={5000}>
      <Toast.Root
        key={currentToast.toastId}
        className={`${styles.toastRoot} ${styles[`toast${currentToast.type.charAt(0).toUpperCase() + currentToast.type.slice(1)}`]}`}
        onOpenChange={(open) => {
          if (!open && onAutoDismiss) {
            onAutoDismiss()
          }
        }}
      >
        <div className={styles.toastContent}>
          <div className={styles.toastIcon}>
            {getIcon(currentToast.type)}
          </div>
          <div className={styles.toastText}>
            <Toast.Title className={styles.toastTitle}>
              {currentToast.type.charAt(0).toUpperCase() + currentToast.type.slice(1)}
            </Toast.Title>
            <Toast.Description className={styles.toastDescription}>
              {currentToast.message}
            </Toast.Description>
          </div>
          <Toast.Close 
            className={styles.toastClose}
            onClick={onDismiss}
          >
            <X size={14} />
          </Toast.Close>
        </div>
      </Toast.Root>
      <Toast.Viewport className={styles.toastViewport} />
    </Toast.Provider>
  )
}

export default ToastComponent

