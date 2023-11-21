import styles from './ui-logo.module.scss'

type UILogoProps = {
  className?: string
}

export function UILogo({ className }: UILogoProps) {
  return <div className={styles['ui-logo']}>Inctagram</div>
}
