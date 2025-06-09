const HeroSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 opacity-10 diagonal-cut"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600 opacity-5 sharp-border"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-oswald text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Как увеличить прибыль в{" "}
            <span className="text-red-600 relative">
              2–3 раза
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 diagonal-cut"></div>
            </span>{" "}
            уже в 2025 году
          </h1>

          <div className="aggressive-card p-8 mb-8 animate-slide-diagonal">
            <h2 className="font-oswald text-2xl md:text-3xl font-semibold mb-4 text-red-400">
              Онлайн-лекция Аслана Жумабаева
            </h2>
            <p className="text-xl mb-6 font-open-sans">
              Новый подход, инструменты и готовая система для владельцев бизнеса
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-600 diagonal-cut"></div>
                <span className="font-semibold">
                  Только проверенные методики
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-600 diagonal-cut"></div>
                <span className="font-semibold">
                  Внедришь уже во время эфира
                </span>
              </div>
            </div>
          </div>

          <button className="aggressive-btn text-xl md:text-2xl font-oswald font-bold mb-8 animate-pulse-red">
            ПРИНЯТЬ УЧАСТИЕ
          </button>

          <div className="bg-gradient-to-r from-red-900 to-black p-6 sharp-border futuristic-shadow">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎁</span>
              <div>
                <h3 className="font-oswald text-xl font-bold mb-2 text-red-400">
                  Бонус:
                </h3>
                <p className="font-open-sans">
                  5 инструментов + гайд с 700 каналами привлечения клиентов и 27
                  способов увеличить продажи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
