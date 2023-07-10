const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Türkçe" },
};

const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $("body").localize();
  $("title").text($.t("index.welcomeTo"));
};

$(function () {
  // use plugins and options as needed, for options, detail see
  // https://www.i18next.com
  i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init(
      {
        debug: true,
        fallbackLng: "tr",
        resources: {
          tr: {
            translation: {
              index: {
                welcomeTo: "TescoMarine'e hoşgeldiniz",
                description: `Size en iyi çözümleri sunmak için titizlikle çalışıyor ve teknenizin en iyi durumda kalmasını sağlamak için elimizden geleni yapıyoruz. İster küçük bir onarım olsun, ister kapsamlı bir bakım veya boyama işlemi, uzmanlığımızı ve profesyonel yaklaşımımızı her adımda göreceksiniz.`,
                getStarted: "Başlayalım",
              },
              site: {
                home: "ANA SAYFA",
                about: "HAKKIMIZDA",
                services: "HİZMETLER",
                projects: "PROJELER",
                blog: "BLOG",
                contact: "İLETİŞİM",
                language: "DİL",
              },
            },
          },
          en: {
            translation: {
              index: {
                welcomeTo: "Welcome to TescoMarine",
                description: `We work meticulously to provide you with the best solutions and make every effort to keep your boat in optimal condition. Whether it's a minor repair, comprehensive maintenance, or painting job, you will experience our expertise and professional approach at every step.`,
                getStarted: "Get Started",
              },
              site: {
                home: "HOME",
                about: "ABOUT",
                services: "SERVICES",
                projects: "PROJECTS",
                blog: "BLOG",
                contact: "CONTACT",
                language: "LANGUAGE",
              },
            },
          },
        },
      },
      (err, t) => {
        if (err) return console.error(err);
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });

        rerender();
      }
    );
});

function setLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    rerender();
  });
}
