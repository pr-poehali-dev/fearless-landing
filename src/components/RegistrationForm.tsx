import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-aggressive-black text-aggressive-white py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-aggressive-red opacity-5 diagonal-cut"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-aggressive-red opacity-5 sharp-border"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold mb-8">
            Зарегистрируйся и получи{" "}
            <span className="text-aggressive-red relative">
              всё
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-aggressive-red sharp-border"></div>
            </span>
          </h2>

          <div className="aggressive-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">📥</span>
              <p className="font-open-sans text-lg text-aggressive-white">
                Оставь имя и номер, чтобы получить ссылку и бонусы
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-aggressive-gray border-2 border-aggressive-red text-aggressive-white font-open-sans text-lg sharp-border focus:outline-none focus:border-aggressive-red-dark transition-all duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-aggressive-gray border-2 border-aggressive-red text-aggressive-white font-open-sans text-lg sharp-border focus:outline-none focus:border-aggressive-red-dark transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="aggressive-btn text-xl font-oswald font-bold w-full animate-pulse-red"
              >
                ПРИНЯТЬ УЧАСТИЕ
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-aggressive-red-dark to-aggressive-black p-4 sharp-border">
              <div className="text-3xl mb-2">🔒</div>
              <p className="font-open-sans text-sm text-aggressive-white">
                Конфиденциальность гарантирована
              </p>
            </div>
            <div className="bg-gradient-to-br from-aggressive-red-dark to-aggressive-black p-4 sharp-border">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-open-sans text-sm text-aggressive-white">
                Мгновенный доступ
              </p>
            </div>
            <div className="bg-gradient-to-br from-aggressive-red-dark to-aggressive-black p-4 sharp-border">
              <div className="text-3xl mb-2">📱</div>
              <p className="font-open-sans text-sm text-aggressive-white">
                SMS с ссылкой на эфир
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
