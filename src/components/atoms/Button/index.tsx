import S from './styles.module.css'
import type { ButtonProps } from './types'

export const Button = ({ label, icon, className, ...props }: ButtonProps) => (
  <button className={clsx(S.button, className)} {...props}>
    {icon}
    {label}
  </button>
)
