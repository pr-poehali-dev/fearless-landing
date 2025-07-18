const Bonuses = () => {
  const bonuses = [
    "Гайд: 700 каналов привлечения клиентов",
    "Чек-лист по регламентам",
    "Воронку найма",
    "Финансовую модель",
    "Платёжный календарь",
    "Схему бизнес-процессов",
    "27 способов увеличить продажи",
  ];

  return (
    <section className="bg-aggressive-white text-aggressive-black py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-20 bg-aggressive-red sharp-border"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold text-center mb-16">
          Получи бонусы{" "}
          <span className="text-aggressive-red relative">
            после эфира
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-aggressive-red diagonal-cut"></div>
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="aggressive-card p-8 mb-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="text-6xl">🎁</div>
              <div>
                <h3 className="font-oswald text-3xl font-bold text-aggressive-red mb-2">
                  Все участники получают:
                </h3>
                <p className="font-open-sans text-lg text-aggressive-white">
                  Эксклюзивные материалы стоимостью более 50,000 тенге
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-aggressive-red-dark to-aggressive-black p-4 sharp-border hover:scale-105 transition-all duration-300 futuristic-shadow"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-aggressive-red text-aggressive-white w-8 h-8 rounded-full flex items-center justify-center font-oswald font-bold diagonal-cut flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="font-open-sans font-semibold text-aggressive-white">
                      {bonus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-aggressive-red to-aggressive-red-dark p-8 text-center sharp-border futuristic-shadow animate-pulse-red">
            <h4 className="font-oswald text-2xl font-bold mb-4 text-aggressive-white">
              ⚡ ОГРАНИЧЕННОЕ ВРЕМЯ ⚡
            </h4>
            <p className="font-open-sans text-lg text-aggressive-white">
              Бонусы получают только первые 500 участников эфира!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
