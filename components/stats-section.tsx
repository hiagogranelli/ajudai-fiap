export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2B5329] mb-8">Como podemos ajudar?</h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conectamos pessoas e organizações para fazer o bem. Seja através de doações de alimentos, roupas, ou seu tempo
          como voluntário, cada pequena ação faz a diferença.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-[#FF5722] mb-2">50+</div>
            <div className="text-gray-600">ONGs Parceiras</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#FF5722] mb-2">1000+</div>
            <div className="text-gray-600">Doações Realizadas</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#FF5722] mb-2">5000+</div>
            <div className="text-gray-600">Pessoas Impactadas</div>
          </div>
        </div>
      </div>
    </section>
  )
}

