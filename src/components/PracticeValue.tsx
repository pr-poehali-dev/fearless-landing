const PracticeValue = () => {
  const practiceItems = [
    {
      icon: "✔️",
      text: "Проверенные схемы",
    },
    {
      icon: "✔️",
      text: "Кейсы из 1400+ бизнесов",
    },
    {
      icon: "✔️",
      text: "Чек-листы, шаблоны, инструкции — бери и внедряй",
    },
  ];

  return (
    <section className="bg-aggressive-white text-aggressive-black py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-20 bg-aggressive-red sharp-border"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-12">
            Только практика —{" "}
            <span className="text-aggressive-red relative">
              никакой воды
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-aggressive-red diagonal-cut"></div>
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {practiceItems.map((item, index) => (
              <div
                key={index}
                className="aggressive-card p-8 hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <p className="font-open-sans text-lg font-semibold text-aggressive-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-aggressive-red-dark to-aggressive-black p-8 sharp-border futuristic-shadow">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="font-oswald text-3xl font-bold mb-4 text-aggressive-red">
              РЕЗУЛЬТАТ ГАРАНТИРОВАН
            </h3>
            <p className="font-open-sans text-xl text-aggressive-white">
              Внедришь систему прямо во время эфира и увидишь первые результаты
              уже через неделю
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeValue;
