const SpeakerInfo = () => {
  return (
    <section className="bg-aggressive-black text-aggressive-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-aggressive-red opacity-10 diagonal-cut"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-aggressive-red opacity-5 sharp-border"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-oswald text-4xl md:text-6xl font-bold text-center mb-16">
          Кто ведёт{" "}
          <span className="text-aggressive-red relative">
            эфир
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-aggressive-red sharp-border"></div>
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Speaker Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-aggressive-gray to-aggressive-black border-4 border-aggressive-red sharp-border futuristic-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💼</div>
                    <p className="text-aggressive-white">
                      Фото Аслана Жумабаева
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aggressive-red diagonal-cut"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-aggressive-red sharp-border"></div>
            </div>

            {/* Speaker Info */}
            <div className="space-y-6">
              <h3 className="font-oswald text-4xl font-bold text-aggressive-red">
                Аслан Жумабаев
              </h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-aggressive-red-dark to-transparent p-4 sharp-border">
                  <p className="font-open-sans text-lg text-aggressive-white">
                    Бизнес-эксперт, работал с{" "}
                    <strong className="text-aggressive-red">1400+</strong>{" "}
                    предпринимателями
                  </p>
                </div>

                <div className="bg-gradient-to-r from-aggressive-red-dark to-transparent p-4 sharp-border">
                  <p className="font-open-sans text-lg text-aggressive-white">
                    Помог компаниям выйти из хаоса и{" "}
                    <strong className="text-aggressive-red">
                      кратно увеличить прибыль
                    </strong>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-aggressive-red-dark to-transparent p-4 sharp-border">
                  <p className="font-open-sans text-lg text-aggressive-white">
                    Автор системы управления и{" "}
                    <strong className="text-aggressive-red">
                      масштабирования бизнеса
                    </strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-aggressive-red text-aggressive-white p-4 diagonal-cut text-center">
                  <div className="font-oswald text-2xl font-bold">1400+</div>
                  <div className="text-sm">Клиентов</div>
                </div>
                <div className="bg-aggressive-red text-aggressive-white p-4 diagonal-cut text-center">
                  <div className="font-oswald text-2xl font-bold">10+</div>
                  <div className="text-sm">Лет опыта</div>
                </div>
                <div className="bg-aggressive-red text-aggressive-white p-4 diagonal-cut text-center">
                  <div className="font-oswald text-2xl font-bold">300%</div>
                  <div className="text-sm">Рост прибыли</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerInfo;
