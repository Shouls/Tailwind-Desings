import video from './assets/videoBG.mp4'
import chase from './assets/chase.png'
import credit from './assets/credito.png'
import CountUp from 'react-countup';

import PricingCard from './PricingCard';

function App() {

  return (
    <main className='w-full'>

      <section className='relative w-full h-[100vh] lg:h-[70vh]'>
        <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-[100vh] lg:h-[70vh]">
          <source src={video} type="video/mp4" />
          {/* Agrega formatos adicionales aquí si es necesario */}
        </video>
        <div className="absolute inset-0 bg-black opacity-70"></div>


        <div className="relative z-10 text-white flex flex-col items-center justify-center gap-8 xl:gap-12 p-8 text-center h-[100vh] lg:h-[70vh] lg:mx-52">

        <p className='text-4xl italic font-bold'>
            ¡Potencia tu flota con los mejores operadores de camiones de carga en México!
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

            <div className='flex flex-col gap-4 justify-center items-center'>
              <span className='text-5xl lg:text-8xl'>
                + <strong> <CountUp end={108000} duration={3} /> </strong>
              </span>
              <h2 className='text-3xl'>
                Operadores registrados
              </h2>
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
              <span className='text-5xl lg:text-8xl'>
                + <strong><CountUp end={1200} duration={3} /> </strong>
              </span>
              <h2 className='text-3xl'>
                Empresas registradas
              </h2>
            </div>

          </div>




          

          <p className='text-4xl italic font-medium justify-between'>
            En BolsadeOperadores.com, entendemos tus necesidades y te ofrecemos soluciones a la medida para encontrar a los operadores de camiones de carga que tu empresa necesita.
          </p>
        </div>
      </section>

      <section className='grid grid-cols-1 lg:grid-cols-2'>

        <div className='p-8 flex flex-col justify-center'>

          <p className='font-semibold italic text-3xl xl:text-4xl pb-8'>
            ¡Nuestros planes de contratación flexibles te permiten encontrar la combinación ideal!
          </p>


          <p className='text-2xl xl:text-3xl leading-8 xl:leading-10'>
            Nuestra plataforma está diseñada exclusivamente para empresas de transporte como la tuya.
            Con una amplia base de datos de operadores, te brindamos acceso directo a operadores que se adaptan perfectamente a tus requisitos,
            desde operadores locales hasta operadores de ruta larga o rutas nacionales e internacionales como los B1´s y Transfer.
          </p>

        </div>

        <div className='flex items-center justify-center'>

          <img
            src="https://img.freepik.com/foto-gratis/camion-remolque-blanco-que-dice-scania-al-costado_123827-23486.jpg"
            alt="Img camión"
            className='w-[90%] h-[90%] object-cover rounded-3xl'
          />

        </div>

      </section>

      <section className=' bg-[#247BAE] flex flex-col items-center text-white py-10'>
        <div className='md:w-[80%]'>
          <h1 className='text-center font-semibold italic text-4xl xl:text-5xl pb-4 lg:pb-10'>
            ¿Por qué elegir la bolsa de operadores?
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2'>

          <div className='flex items-center justify-center'>

            <img
              src="https://img.freepik.com/foto-gratis/muchos-camiones-transporte-estacionados-estacion-servicio-al-atardecer-ai-generativo_123827-23416.jpg"
              alt="Img camión"
              className='w-[90%] h-[90%] object-cover rounded-3xl'
            />

          </div>

          <div className='px-16 lg:px-0 lg:pr-16 xl:pr-24 flex flex-col justify-center'>

            <ul className='list-outside list-disc text-xl xl:text-2xl'>
              <li className='pb-4 xl:pb-8'>
                <span className='font-bold text-2xl xl:text-3xl'>Variedad de Planes: </span> Tenemos planes de contratación que
                se ajustan a tus necesidades y presupuesto.
              </li>

              <li className='pb-4 xl:pb-8'>
                <span className='font-bold text-2xl xl:text-3xl'>Proceso Simplificado: </span> Nuestra plataforma intuitiva facilita la búsqueda, selección y contacto
                con operadores con solo unos clics, desde tu celular o tu PC.
              </li>

              <li className='pb-4 xl:pb-8'>
                <span className='font-bold text-2xl xl:text-3xl'>Filtros de búsqueda: </span> Filtra la búsqueda por tipo de unidad, full o sencillo, estado de residencia,
                tipo de licencia, R-Control, etc.
              </li>

              <li className='pb-4 xl:pb-8'>
                <span className='font-bold text-2xl xl:text-3xl'>Eficiencia y Ahorro: </span> Ahorra tiempo y recursos al encontrar rápidamente los operadores adecuados.
              </li>

              <li className='pb-4 xl:pb-8'>
                <span className='font-bold text-2xl xl:text-3xl'> Acceso inmediato: </span> Al contratar cualquiera de nuestros planes, puedes encontrar perfiles de
                operadores. Publica tus vacantes, llámalos, envía mensajes de chat, WhatsApp, SMS. Recibe alertas de email y notificaciones en tu celular.
              </li>

            </ul>

          </div>



        </div>

      </section>

      <section className=' flex flex-col items-center justify-center text-center'>

        <h4 className='text-4xl xl:text-5xl font-bold py-10 italic text-center px-2'>
          ¡No dejes que la falta de operadores detenga tu crecimiento!
        </h4>

        <div className='px-8 pb-10'>
          <p className='text-2xl pb-8'>
            Visita BolsadeOperadores.com y descubre cómo podemos ayudarte a contactar y reclutar los operadores de camiones de carga que llevarán a tu empresa al
            siguiente nivel. Juntos, construyamos un camino hacia el éxito en el transporte de carga.

            <br />
            <br />
            Realmente no hay mucho que pensarle, pero si quieres hacer lo mismo y multiplicar y perpetuar las perdidas, ¡está bien! Si quieres resolverlo hoy, tenemos un plan para ti.
            ¡Encuentra, contacta y contrata operadores de camiones de carga en México hoy mismo en BolsadeOperadores.com!
          </p>

          <div className='flex items-center justify-center'>

            <button className='px-8 py-4 rounded-full text-white text-3xl font-semibold bg-gradient-to-tr from-[#92fbf7] to-[#247BAE] hover:scale-105 transition-all duration-300 '>
              Iniciar sesión
            </button>

          </div>
        </div>

      </section>


      <section className='  '>

        <h4 className='text-4xl xl:text-5xl font-bold italic text-center text-white pt-10'>
          Planes de contratación
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white p-8 lg:p-16 gap-16'>

          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />
          <PricingCard />

        </div>

      </section>

      <section className='py-10'>

        <h4 className='text-4xl xl:text-5xl font-bold italic text-center px-10'>
          Formas de Pago
        </h4>

        <div className='grid grid-cols-1 md:grid-cols-2 p-16 gap-8 lg:gap-0 lg:p-32'>
          <div className='flex items-center justify-center'>
            <img src={chase} alt="" className='w-full md:w-[50%] h-auto object-cover' />
          </div>

          <div className='flex items-center justify-center'>
            <img src={credit} alt="" className='w-full md:w-[50%] h-auto object-cover' />
          </div>

        </div>

        <h4 className='text-[#247BAE] text-3xl font-bold italic text-center'>
          Activación del servicio inmediato (24hrs)
        </h4>

      </section>

      <div className='flex flex-col'>

        <div className='bg-red-100'>
        asfdjlkasdjfklasdfasfd

        dfasdfasjdfkajs
        asfdjlkasdjfklasdfasfdasdf
        </div>

        <div className='bg-green-100'>
        asfdjlkasdjfklasdfasfd

        dfasdfasjdfkajs
        asfdjlkasdjfklasdfasfdasdf
        </div>

      </div>

    </main>
  )
}

export default App
