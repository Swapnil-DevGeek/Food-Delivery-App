import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HomeMenu from './components/HomeMenu'
import SectionHeaders from './components/SectionHeaders'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>      
      <HomeMenu/>
      <section className='text-center my-16'>
        <SectionHeaders 
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className='text-gray-500 max-w-2xl mx-auto mt-4 flex-col flex gap-6'>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis libero eius ea sapiente at harum saepe facilis quia nihil soluta sunt asperiores a voluptatum perferendis beatae totam recusandae sequi eos, neque aut dolore obcaecati earum, minus consectetur? Expedita delectus accusantium, repellat commodi rerum officiis aut iusto atque! Voluptatum nam in eligendi. Perferendis quod facere numquam nesciunt omnis necessitatibus impedit nobis?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis libero eius ea sapiente at harum saepe facilis quia nihil soluta sunt asperiores a voluptatum perferendis beatae totam recusandae sequi eos, neque aut dolore obcaecati earum, minus consectetur? Expedita delectus accusantium, repellat commodi rerum officiis aut iusto atque! Voluptatum nam in eligendi. Perferendis quod facere numquam nesciunt omnis necessitatibus impedit nobis?
        </p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates est cupiditate praesentium veritatis ipsa, in id cumque nobis laborum ratione itaque officiis asperiores odio? In culpa quas modi quisquam praesentium.</p>

        </div>
        
      </section>

      <section className='my-16 text-center'>
        <SectionHeaders
          subHeader={'Don\'t Hesitate'}
          mainHeader={'Contact Us'}
        />
        <div className='mt-8'>
          <a className='text-4xl text-center underline text-gray-500' href="tel:+9999999999">+91 999 999 9999</a>
        </div>  
      </section>

      <footer className='border-t p-8 text-center text-gray-500 '>

        &copy; 2023 All Rights Reserved

      </footer>
    </>
  )
}

export default Home
