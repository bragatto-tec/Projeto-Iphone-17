function Highlights() {
  return (
    <section className="bg-black py-20 px-6" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/titanium-design.jpg"
              alt="Iphone-titanium"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
            <p className="text-gray-300">
              Estrutura em titânio de grau aeroespacial. O smartphone mais forte
              e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img
              className="w-full rounded-2xl mb-4"
              src="/img/ios-features.jpg"
              alt="IOS 2025"
            ></img>
            <h3 className="font-bold mb-2 text-3xl">iOS 26</h3>
            <p className="text-gray-300">
              O sistema operacional mais avançado do mundo com IA integrada.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
          <h3 className="text-4xl font-bold mb-6 text-gradient">A18 PRO</h3>
          <p className="text-gray-300 mb-6">
            O chip mais poderoso em um smartphone
          </p>
          <img
            className="w-full rounded-2xl mb-4"
            src="/img/chip-a18-pro.jpg"
            alt="chip a18"
          ></img>

          <ul className="space-y-3 text-gray-300">
            <li className="">CPU 20% mais rápida</li>
            <li> GPU 25% mais eficiente</li>
            <li> Neural Engine com 16 núcleos </li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
            <h4 className="text-xl font-semibold mb-2">Principal</h4>
            <p className="text-gray-400">
              Sensor quad-pixel com foco automático
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
            <p className="text-gray-400">
              Campo de visão de 120° com modo noturno
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
            <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
