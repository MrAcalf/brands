import type { NextPage } from 'next'
import { HeadComponent } from '@components/layoutComponents/headComponent'

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent 
        title='Create Next App' 
        description='description'
        content='Generated by create next app'
      />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>Test</p>
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}

export default Home
