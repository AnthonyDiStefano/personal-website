import Header from '../components/Head'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Header pageName = "Home"></Header>
      <div className="bg-[#bb530d] w-100 h-screen">
      <Navbar />
        <div className="h-4/6 flex flex-col justify-center items-center
        text-white font-mono">
          <h1 className="font-bold text-4xl underline"> Anthony Di Stefano </h1>
          <Socials></Socials>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}