const Benefits = () => {
  const benefits = [
    {
      icon: "📊",
      number: "1",
      title: "Финансовый порядок и рост прибыли",
      description: "Увеличение прибыли на 20–40% за 3 месяца",
    },
    {
      icon: "📣",
      number: "2",
      title: "Эффективный маркетинг",
      points: [
        "Рекламный бюджет работает на результат",
        "Снижение затрат до 30%",
        "Рост заявок в 1.5–2 раза даже в «низкий сезон»",
      ],
    },
    {
      icon: "💼",
      number: "3",
      title: "Отдел продаж, который закрывает сделки",
      points: [
        "Менеджеры действуют по системе",
        "Конверсия в оплату растёт на 15–40%",
        "Воронка прозрачна и управляется как в крупных компаниях",
      ],
    },
    {
      icon: "🧘",
      number: "4",
      title: "Делегирование без боли",
      points: [
        "Не будешь затыкать дыры",
        "Задачи распределяются без твоего постоянного контроля",
        "Выйдешь из операнки и сосредоточишься на росте",
      ],
    },
  ];

  return (
    <section className="bg-aggressive-black text-aggressive-white py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-aggressive-red opacity-5 sharp-border"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold text-center mb-16">
          Что ты получишь на{" "}
          <span className="text-aggressive-red relative">
            эфире
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-aggressive-red sharp-border"></div>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-aggressive-gray to-aggressive-black p-8 border-l-4 border-aggressive-red relative futuristic-shadow hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{benefit.icon}</div>
                <div className="bg-aggressive-red text-aggressive-white w-12 h-12 rounded-full flex items-center justify-center font-oswald text-xl font-bold diagonal-cut">
                  {benefit.number}
                </div>
              </div>

              <h3 className="font-oswald text-2xl font-bold mb-4 text-aggressive-red">
                {benefit.title}
              </h3>

              {benefit.description && (
                <p className="font-open-sans text-lg text-aggressive-white">
                  {benefit.description}
                </p>
              )}

              {benefit.points && (
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 font-open-sans text-aggressive-white"
                    >
                      <div className="w-2 h-2 bg-aggressive-red mt-2 diagonal-cut flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
