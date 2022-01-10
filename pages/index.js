import Header from '../components/Head'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header pageName = "Home"></Header>
      <div className="bg-[#d45907] w-100 h-screen
        flex flex-col justify-center items-center
        text-white font-mono">
          <h1 className="font-bold text-4xl underline"> Anthony Di Stefano </h1>
        <Socials></Socials>
      </div>
      <Footer></Footer>
    </>
  )
}