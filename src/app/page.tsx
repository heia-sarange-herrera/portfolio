import React from 'react'
import Hero from './(components)/hero/page'
import dynamic from 'next/dynamic';
import ParticlesBackground from './(components)/hero/ParticlesBackground';



function Home() {

  return (
    <>
      {/* <ParticlesBackground /> */}
      <Hero />
    </>
  )
}

export default Home