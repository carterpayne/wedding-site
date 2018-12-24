import React, { ReactNode } from 'react'

import styles from './Text.module.css'

interface TextProps {
  size?: "small" | "medium" | "large"
  fancy?: boolean
  fixed?: boolean
  children: ReactNode
}

const classesFromOptions = (size: string, fancy: boolean, fixed: boolean) => {
  const sizeKey = `${size}${fixed ? 'Fixed' : ''}`;
  const classes = [styles.Text, styles[sizeKey]]
  if (fancy) {
    classes.push(styles.fancy)
  }
  return classes.join(' ')
}

const Text = ({ children, size = "medium", fancy = false, fixed = false }: TextProps) => (
  <span className={classesFromOptions(size, fancy, fixed)}>{children}</span>
);

export default Text
