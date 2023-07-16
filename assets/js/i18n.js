const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Türkçe" },
};

const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $("body").localize();
  $("title").text($.t("index.welcomeTo"));
  var inputElement = document.getElementById("nameInp");
  inputElement.placeholder = $.t("contact.name");
  var inputElement = document.getElementById("emailInp");
  inputElement.placeholder = $.t("contact.email");
  var inputElement = document.getElementById("phoneInp");
  inputElement.placeholder = $.t("contact.phone");
  var inputElement = document.getElementById("messageInp");
  inputElement.placeholder = $.t("contact.message");
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
              contact: {
                sendYourProblem: "Sorununuz için bizimle iletişime geçin.",
                explanation1:
                  "Teknenizle ilgili bir sorununuz mu var? TescoMarine; bakım, onarım, tamirat; sistem yenileme; gözlem; iç dış döşeme tasarım ve dekorasyon hizmetleriyle birlikte her türlü boya uygulamaları ile sizlerin hizmetinde.",
                explanation2:
                  "Formu doldurarak bizimle iletişime geçebilirsiniz. Sorununuz hakkında bilgi vermeniz bize yardımcı olacaktır. En kısa sürede sizinle iletişime geçeceğiz.",
                form: "İletişim Formu",
                fillAllAreas:
                  "Tüm bilgilerinizi eksiksiz ve doğru bir şekilde doldurun.",
                giveDetails:
                  "Lütfen sorunu olabildiğince detaylı anlatın. En kısa sürede sizinle iletişime geçeceğiz.",
                name: "Adınız",
                email: "E-posta Adresiniz",
                phone: "Telefon Numaranız",
                message: "Mesajınız",
                errorSending:
                  "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
                tyForSending:
                  "Bizi tercih ettiğiniz için teşekkür ederiz. En kısa sürede sizinle iletişime geçeceğiz.",
              },
              services: {
                services: "Hizmetlerimiz",
                servicesExpShort:
                  "TescoMarine olarak tekne bakım hizmetleri, tekne onarım hizmetleri, yenileme hizmetleri; proje tasarımı, imalat ve montaj hizmetleri, hidrolik sistem arge tasarımı ve hidrolik sistem bakım hizmetleri ile satış; şişme bot ve motor bakım ve onarımı; dekorasyon ve boya hizmetleri sunmaktayız.",
                boatJobs: "Tekne ve Yat İşleri",
                explanation:
                  "Deneyimli ve uzman kadromuzla birlikte, teknenizdeki tüm sorunlar için sizlere hizmet  Uygulamalarımızdan bazıları:",
                repair: "Onarım İşlemleri",
                repairExpShort:
                  "Rutin veya acil onarım; elektrik, elektronik, mekanik, motor onarımlarıyla birlikte şişme bot ve motorlarının onarımları.",
                maintenance: "Bakım İşlemleri",
                maintenanceExpShort:
                  "Tekne bakım işlemleri ve tekne bakımı ile ilgili hizmetler. Elektrik ve elektronik bakımları, dizel ve benzin motor bakımları, hidrolik sistemlerin bakımları.",
                project: "Proje Tasarım ve Montaj",
                projectExpShort:
                  "Tekne ve yatlarınız için proje tasarım ve montaj hizmetleri. Elektrik ve elektronik proje tasarımı, imalatı ve montajı; hidrolik ve mekanik proje tasarımı, imalat ve montajıyla sistem arge tasarım.",
                renovation: "Yenileme Projeleri",
                renovationExpShort:
                  "Tekne yenileme projeleri ve yat yenileme projeleri ile ilgili hizmetler. Hidrolik sistem yenileme; modifikasyon ve sistem yenileme projeleri.",
              },
              misc: {
                loading: "Yükleniyor...",
                send: "Gönder",
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
                home: "Home",
                about: "About",
                services: "Services",
                projects: "Projects",
                blog: "Blog",
                contact: "Contact",
                language: "Language",
              },
              contact: {
                sendYourProblem: "Contact us for your problem.",
                explanation1: `Do you have a problem with your boat? TescoMarine is at your service with maintenance, repair, renovation, system renewal, observation, interior and exterior upholstery design and decoration services, as well as all kinds of paint applications.`,
                explanation2: `You can contact us by filling out the form. It will be helpful for us if you provide information about your problem. We will contact you as soon as possible.`,
                form: "Contact Form",
                fillAllAreas: "Fill in all your information correctly.",
                giveDetails:
                  "Please describe the problem in as much detail as possible. We will contact you as soon as possible.",
                name: "Name",
                email: "E-mail Address",
                phone: "Phone Number",
                message: "Message",
                errorSending:
                  "An error occurred while sending your message. Please try again.",
                tyForSending:
                  "Thank you for choosing us. We will contact you as soon as possible.",
              },
              services: {
                services: "Services",
                servicesExpShort:
                  "As TescoMarine, we offer boat maintenance services, boat repair services, renovation services; project design, manufacturing and installation services, hydraulic system R&D design and hydraulic system maintenance services and sales; inflatable boat and engine maintenance and repair; decoration and painting services.",
                boatJobs: "Boat and Yacht Jobs",
                explanation:
                  "With our experienced and expert team, we provide you with services for all the problems on your boat. Some of our applications:",
                repairExpShort:
                  "Routine or emergency repair; electrical, electronic, mechanical, engine repairs along with inflatable boat and engine repairs.",
                maintenanceExpShort: `Boat maintenance and services related to boat maintenance. Electrical and electronic maintenance, diesel and gasoline engine maintenance, maintenance of hydraulic systems.`,
                projectExpShort:
                  "Project design and installation services for your boats and yachts. Electrical and electronic project design, manufacturing and installation; hydraulic and mechanical project design, manufacturing and installation with system R&D design.",
                renovationExpShort:
                  "Services related to boat renovation projects and yacht renovation projects. Hydraulic system renewal; modification and system renewal projects.",
                maintenance: {
                  name: "Maintenance",
                  electrical: "Electric and Electronic System Maintenance",
                  engine: "Diesel and Gasoline Engine Maintenance",
                  hydraulic: "Hydraulic System Maintenance",
                  inflatable: "Inflatable Boat and Engine Maintenance",
                  periodic: "Yearly Maintenance and Observation",
                  generator: "Generator Maintenance",
                },
                repair: {
                  name: "Repair",
                  electrical: "Electronic Card Repair",
                  engine: "Diesel and Gasoline Engine Repair",
                  hydraulic: "Hydraulic System Repair",
                  inflatable: "Inflatable Boat and Engine Repair",
                  sail: "Sail Making and Repair",
                  generator: "Generator and Power Systems Repair",
                },
                projects: {
                  name: "Projects",
                  hydraulic: "Hydraulic System R&D Design",
                  electricalDesign: "Electrical and Electronic Project Design",
                  electricalManufacturing:
                    "Electrical and Electronic Project Manufacturing and Installation",
                  hydraulicDesign: "Hydraulic and Mechanical Project Design",
                  hydraulicManufacturing:
                    "Hydraulic and Mechanical Project Manufacturing and Installation",
                },
                renovation: {
                  name: "Renovation",
                  hydraulic: "Hydraulic System Renovation",
                  modification: "Modification and System Renovation Projects",
                },
                sales: {
                  name: "Sales",
                  teak: "Teak Deck Sales and Applications",
                },
                decorationAndPainting: {
                  name: "Decoration and Painting",
                  interior: "Interior Upholstery Design and Decoration",
                  painting: "Painting",
                  decoration: "Decoration and Design",
                },
              },
              misc: {
                loading: "Loading...",
                send: "Send",
              },
              promotion: {
                title: "Professional, High Quality and Reliable",
                intro:
                  "We aim to provide our customers with the highest level of professionalism, quality and reliability in our boat service. Our expert team is equipped with years of experience and knowledge and is constantly improving itself to provide high quality service to our customers.",
                professionality: "Professionality",
                professionalityExp:
                  "Our expert team completes your work professionally using their technical knowledge and skills.",
                quality: "Quality",
                qualityExp:
                  "We select materials in accordance with high quality standards and complete our work with care.",
                reliability: "Reliability",
                reliabilityExp:
                  "We take steps to reassure our customers and take important precautions regarding privacy and security and deliver the time on schedule.",
                customerSatisfaction: "Customer Satisfaction",
                customerSatisfactionExp:
                  "We work to exceed our customers' expectations and provide the best service. Customer satisfaction is always our priority.",
              },
              blog: {
                title: "Blog Posts",
                intro: `We continue to share our industry knowledge and experience that has been going on for years. You can read our blog posts that we have prepared for you to be informed about the industry, the latest developments and innovations.`,
                postComingSoon: "Blog posts are coming soon.",
              },
              footer: {
                phone: "Phone",
                email: "E-mail",
                copyright: "All rights reserved.",
                usefulLinks: "Useful Links",
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
