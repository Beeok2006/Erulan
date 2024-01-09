import AutoSlider from '../components/PrdComponents/Carousel/Carousel';
import CardCarousel from '../components/Carousel/Carousel';




const Home = () => {
  return (
    <>
    
    <AutoSlider/>
    <h1 className='text-4xl text-center pl-6 pr-6'>
	Программы и наборы </h1>  
  <p className='mainDescription text-center pl-6 pr-6 pt-4'>
	 Комплексные решения для насыщенной, активной жизни с универсальной системой оздоровления организма от Vita Balancce</p>
     <CardCarousel/>
     
    </>
  )
}

export default Home