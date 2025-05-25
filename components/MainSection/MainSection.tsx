import React from 'react'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

const MainSection = () => {
  return (
    <section className="bg-[url('/main-bg.svg')] h-full text-custom-primary text-white">
      <Header />
      <Nav />
    </section>
  )
}

export default MainSection
