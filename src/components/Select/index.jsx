import React from 'react'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'
import styles from './style.module.css'

const SelectComponent = ({ 
  placeholder = "Select an option...", 
  value, 
  onValueChange, 
  options = [],
  label,
  disabled = false 
}) => {
  return (
    <div className={styles.selectWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <Select.Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <Select.Trigger className={styles.selectTrigger} aria-label={label || placeholder}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={styles.selectIcon}>
            <ChevronDown size={16} />
          </Select.Icon>
        </Select.Trigger>
        
        <Select.Portal>
          <Select.Content className={styles.selectContent}>
            <Select.ScrollUpButton className={styles.selectScrollButton}>
              <ChevronUp size={16} />
            </Select.ScrollUpButton>
            
            <Select.Viewport className={styles.selectViewport}>
              {options.map((option) => (
                <Select.Item 
                  key={option.value} 
                  className={styles.selectItem} 
                  value={option.value}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className={styles.selectItemIndicator}>
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            
            <Select.ScrollDownButton className={styles.selectScrollButton}>
              <ChevronDown size={16} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

export default SelectComponent
