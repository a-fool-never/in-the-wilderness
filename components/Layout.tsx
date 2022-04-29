import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'in the wilderness' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div id="wrapper">
      <header>
        <h1>in the wilderness</h1>
        <nav>
          <Link href="/">
            <a>am</a>
          </Link>
          {' '}/{' '}
          <Link href='/played-game'>
            <a>played-game</a>
          </Link>
          {' '}/{' '}
          <Link href='/watched-anime'>
            <a>watched-anime</a>
          </Link>
          {' '}/{' '}
          <Link href='/read-manga'>
            <a>read-manga</a>
          </Link>
          {' '}/{' '}
          <Link href='/watched-movie'>
            <a>watched-movie</a>
          </Link>
          {' '}/{' '}
          <Link href='/went-event'>
            <a>went-event</a>
          </Link>
        </nav>
      </header>
      {children}
      <a href="#wrapper" id="page-top">トップへ戻る</a>
      <footer>
        <span>2022</span>
      </footer>
    </div>
  </div>
)

export default Layout
