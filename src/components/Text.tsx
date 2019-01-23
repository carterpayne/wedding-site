import React, { ReactNode } from 'react'

import styles from './Text.module.css'

interface TextProps {
  size?: "small" | "medium" | "large"
  fancy?: boolean
  children: ReactNode
}

const classesFromOptions = (size: string, fancy: boolean) => {
  const classes = [styles.Text, styles[size]]
  if (fancy) {
    classes.push(styles.fancy)
  }
  return classes.join(' ')
}

const Text = ({ children, size = "medium", fancy = false }: TextProps) => (
  <span className={classesFromOptions(size, fancy)}>{children}</span>
);

export default Text
