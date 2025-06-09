const TargetAudience = () => {
  const audienceItems = [
    {
      icon: "👑",
      title: "Владелец бизнеса",
      description:
        "устал тащить всё сам, хочешь зарабатывать больше, а работать меньше",
    },
    {
      icon: "🚀",
      title: "Предприниматель",
      description: "хочешь избежать ошибок и расти быстро",
    },
    {
      icon: "⚡",
      title: "Топ-менеджер",
      description: "закрываешь все задачи за команду",
    },
    {
      icon: "🎯",
      title: "Амбициозный",
      description: "планируешь масштабироваться и выйти на весь Казахстан",
    },
    {
      icon: "🤝",
      title: "Партнёр",
      description: "тащишь бизнес, пока «второй» не справляется",
    },
  ];

  return (
    <section className="bg-white text-black py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-red-600 diagonal-cut"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold text-center mb-16">
          Этот эфир для тебя, если ты<span className="text-red-600">...</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {audienceItems.map((item, index) => (
            <div
              key={index}
              className="aggressive-card p-6 hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-oswald text-xl font-bold mb-3 text-red-400">
                {item.title}
              </h3>
              <p className="font-open-sans text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="aggressive-btn text-xl font-oswald font-bold">
            ПРИНЯТЬ УЧАСТИЕ
          </button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
