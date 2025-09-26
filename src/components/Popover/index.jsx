import React from 'react'
import { Popover } from "radix-ui";
import styles from './style.module.css'

const PopoverComponent = ({ trigger, children, side = "bottom", align = "end", ...props }) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        {trigger}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={styles.popoverContent}
          side={side}
          align={align}
          sideOffset={8}
        >
          {children}
          <Popover.Arrow className={styles.popoverArrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopoverComponent
