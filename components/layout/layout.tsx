import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import { JsxElement } from 'typescript'

const name = '[SAYAN BANERJEE]'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: {children: any}) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
    </div>
  )
}
