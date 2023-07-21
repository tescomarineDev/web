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
  var inputElement = document.getElementById("subjectInp");
  inputElement.placeholder = $.t("contact.subject");
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
                welcomeTo: "Tescomarine'e hoşgeldiniz",
                description:
                  "Size en iyi çözümleri sunmak için titizlikle çalışıyor ve teknenizin en iyi durumda kalmasını sağlamak için elimizden geleni yapıyoruz. İster küçük bir onarım olsun, ister kapsamlı bir bakım veya boyama işlemi, uzmanlığımızı ve profesyonel yaklaşımımızı her adımda göreceksiniz.",
                getStarted: "Başlayalım",
              },
              site: {
                home: "Ana Sayfa",
                about: "Hakkımızda",
                services: "Hizmetler ve Ürünler",
                projects: "Projeler",
                blog: "Blog",
                contact: "İletişim",
                language: "Dil",
                homeNav: "ANA SAYFA",
                aboutNav: "HAKKIMIZDA",
                servicesNav: "HİZMETLER ve ÜRÜNLER",
                projectsNav: "PROJELER",
                blogNav: "BLOG",
                contactNav: "İLETİŞİM",
                languageNav: "DİL",
              },
              contact: {
                sendYourProblem: "Sorununuz için bizimle iletişime geçin.",
                explanation1:
                  "Teknenizle ilgili bir sorununuz mu var? Tescomarine; bakım, onarım, tamirat; sistem yenileme; gözlem; iç dış döşeme tasarım ve dekorasyon hizmetleriyle birlikte her türlü boya uygulamaları ile sizlerin hizmetinde.",
                explanation2:
                  "Formu doldurarak bizimle iletişime geçebilirsiniz. Sorununuz hakkında bilgi vermeniz bize yardımcı olacaktır. En kısa sürede sizinle iletişime geçeceğiz.",
                form: "İLETİŞİM FORMU",
                fillAllAreas:
                  "Tüm bilgilerinizi eksiksiz ve doğru bir şekilde doldurun.",
                giveDetails:
                  "Lütfen sorunu olabildiğince detaylı anlatın. En kısa sürede sizinle iletişime geçeceğiz.",
                name: "Adınız",
                email: "E-posta",
                phone: "Telefon",
                subject: "Konu",
                message: "Mesajınız",
                errorSending:
                  "Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
                tyForSending:
                  "Bizi tercih ettiğiniz için teşekkür ederiz. En kısa sürede sizinle iletişime geçeceğiz.",
                ourAddress: "Adresimiz",
                callUs: "Bize Ulaşın",
              },
              services: {
                services: "Hizmetlerimiz",
                servicesExpShort:
                  "Tescomarine olarak tekne bakım hizmetleri, tekne onarım hizmetleri, yenileme hizmetleri; proje tasarımı, imalat ve montaj hizmetleri, hidrolik sistem arge tasarımı ve hidrolik sistem bakım hizmetleri ile satış; şişme bot ve motor bakım ve onarımı; dekorasyon ve boya hizmetleri sunmaktayız.",
                boatJobs: "Tekne ve Yat İşleri",
                explanation:
                  "Deneyimli ve uzman kadromuzla birlikte, teknenizdeki tüm sorunlar için sizlere hizmet vermekteyiz. Uygulamalarımızdan bazıları:",
                repairExpShort:
                  "Rutin veya acil onarım; elektrik, elektronik, mekanik, motor onarımlarıyla birlikte şişme bot ve motorlarının onarımları.",
                maintenanceExpShort:
                  "Tekne bakım işlemleri ve tekne bakımı ile ilgili hizmetler. Elektrik ve elektronik bakımları, dizel ve benzin motor bakımları, hidrolik sistemlerin bakımları.",
                projectExpShort:
                  "Tekne ve yatlarınız için proje tasarım ve montaj hizmetleri. Elektrik ve elektronik proje tasarımı, imalatı ve montajı; hidrolik ve mekanik proje tasarımı, imalat ve montajıyla sistem arge tasarım.",
                renovation: "Yenileme Projeleri",
                renovationExpShort:
                  "Tekne yenileme projeleri ve yat yenileme projeleri ile ilgili hizmetler. Hidrolik sistem yenileme; modifikasyon ve sistem yenileme projeleri.",

                maintenance: {
                  name: "Bakım İşlemleri",
                  electrical: "Elektrik ve Elektronik Sistem Bakımı",
                  engine: "Dizel ve Benzin Motor Bakımı",
                  hydraulic: "Hidrolik Sistem Bakımı",
                  inflatable: "Şişme Bot ve Motor Bakımı",
                  periodic: "Yıllık Bakım ve Gözlem",
                  generator: "Jeneratör ve Güç Sistemleri Bakımı",
                },
                repair: {
                  name: "Onarım İşlemleri",
                  electrical: "Elektronik Kart Onarımı",
                  engine: "Dizel ve Benzin Motor Onarımı",
                  hydraulic: "Hidrolik Sistem Onarımı",
                  inflatable: "Şişme Bot ve Motor Onarımı",
                  sail: "Yelken Yapımı ve Onarımı",
                  generator: "Jeneratör ve Güç Sistemleri Onarımı",
                },
                projects: {
                  name: "Proje Tasarım ve Montaj",
                  hydraulic: "Hidrolik Sistem Arge Tasarımı",
                  electricalDesign: "Elektirik ve Elektronik Proje Tasarımı",
                  electricalManufacturing:
                    "Elektrik ve Elektronik Proje İmalat ve Montaj",
                  hydraulicDesign: "Hidrolık ve Mekanik Proje Tasarımı",
                  hydraulicManufacturing:
                    "Hidrolik ve Mekanik Proje İmalat ve Montaj",
                },
                renovation: {
                  name: "Yenileme",
                  hydraulic: "Hidrolik Sistem Yenileme",
                  modification: "Modifikasyon ve Sistem Yenileme Projeleri",
                },
                sales: {
                  name: "Satış İşlemleri",
                  teak: "Tik Satış ve Uygulamaları",
                },
                decorationAndPainting: {
                  name: "Boya Uygulamaları ve Dekorasyon",
                  interior: "İç Mekan Döşeme Tasarım ve Dekorasyon",
                  painting: "Boya Uygulamaları",
                  decoration: "Dekorasyon",
                },
              },
              misc: {
                loading: "Yükleniyor...",
                send: "Gönder",
              },
              promotion: {
                title: ">Profesyonel, Kaliteli ve Güvenli",
                intro:
                  "Tekne servisimizde, müşterilerimize en üst düzeyde profesyonellik, kalite ve güven sunmayı hedefliyoruz. Uzman ekibimiz, yılların deneyimi ve bilgisiyle donatılmıştır ve müşterilerimize yüksek kalitede hizmet sunmak için sürekli olarak kendini geliştirmektedir.",
                professionality: "Profesyonellik",
                professionalityExp:
                  "Uzman ekibimiz, teknik bilgi ve becerilerini kullanarak işlerinizi profesyonel bir şekilde tamamlar",
                quality: "Kalite",
                qualityExp:
                  " Yüksek kalite standartlarına bağlı kalarak malzemeleri seçer ve işleri titizlikle tamamlarız",
                reliability: "Güven",
                reliabilityExp:
                  "Müşterilerimize güven vermek için adımlarımızı atar, işlerimizi zamanında ve güvenli bir şekilde tamamlarız",
                customerSatisfaction: "Müşteri Memnuniyeti",
                customerSatisfactionExp:
                  "Müşterilerimizin beklentilerini aşmak ve en iyi hizmeti sunmak için çalışırız. Müşteri memnuniyeti her zaman önceliğimizdir.",
              },
              blog: {
                title: "Blog Yazıları",
                intro:
                  "Yıllardan süregelen sektör bilgimizi ve tecrübemizi sizlerle paylaşmaya devam ediyoruz. Sizler için hazırladığımız blog yazılarımızı okuyarak, sektör; son gelişmeler ve yenilikler hakkında bilgi sahibi olabilirsiniz.",
                postComingSoon: "Blog yazılarımız yakında sizlerle",
              },
              footer: {
                phone: "Telefon",
                email: "E-posta",
                copyright: "Tüm Hakları Saklıdır.",
                usefulLinks: "Yararlı Linkler",
              },
              about: {
                successStoryTitle: "Başarı Hikayemiz",
                successStory:
                  "Tescomarine sürekli hizmet anlayışından ödün vermeden kadrosunu güçlü tutarak başarılı çalışmalarına devam etmektedir. Deniz üzerindeki özgürlüğünüzün konforlu ve güvenli olması adına sizler için son teknolojik sistemleri uyguluyoruz.",
                successStory2:
                  "Yelkenli ve motor yatların servis, bakım, refit işlemleri tecrübeli ve konusunda eğitimli ekibimiz tarafından başarı ile uygulamaktadır.",
                successStory3: "Misyonumuz:",
                step1:
                  "Toplam Kalite felsefesini esas alarak takım ruhu içinde şirket ve birim hedeflerine ulaşmak için çalışmak ve her daim gelişime, yeniliğe açık olmak.",
                step2:
                  "Üstlenmiş olduğumuz projelerde müşteri taleplerini doğru algılamak, müşteri isteklerini doğru yönlendirmek ve bu isteklere maksimum düzeyde uymak.",
                step3:
                  "Projeleri iş programına ve teknik şartnamelere uygun olarak zamanında bitirmek ve teslim etmek..",
                watchOurVideo: "Videomuzu izleyin",
                happyClients: "Mutlu Müşteri",
                projectAndProcess: "Proje ve İşlem",
                hoursWorked: "Saat Çalışma",
                workers: "Özverili Çalışan",
                ourTeam: "Takımımız",
                ourTeamExp:
                  "Our team consists of experienced and expert people in their fields. We are constantly improving ourselves to provide you with the best service.",
                ourTeamExp:
                  "Takımımız deneyimli ve uzman kişilerden oluşmaktadır. Alanlarında uzmanlaşmış ekip üyelerimizle sürekli kendimizi geliştiriyoruz ve size en iyi hizmeti sunmayı hedefliyoruz.",
                ctos: "Kurucu, CEO",
                zaferErdemExp:
                  "Zafer Erdem, denizcilik sektöründe uzun yıllardır faaliyet gösteren bir isimdir. 2019 yılından bu yana tekne ve yat bakımı, onarımı, dekorasyonu, proje inşası ve boyama konularında uzmanlaşmış olarak sektörde çalışmaktadır. Tescomarine'in kurucusu ve CEO'sudur.",
              },
            },
          },
          en: {
            translation: {
              index: {
                welcomeTo: "Welcome to Tescomarine",
                description:
                  "We work meticulously to provide you with the best solutions and make every effort to keep your boat in optimal condition. Whether it's a minor repair, comprehensive maintenance, or painting job, you will experience our expertise and professional approach at every step.",
                getStarted: "Get Started",
              },
              site: {
                home: "Home",
                about: "About",
                services: "Services and Products",
                projects: "Projects",
                blog: "Blog",
                contact: "Contact",
                language: "Language",
                homeNav: "HOME",
                aboutNav: "ABOUT",
                servicesNav: "SERVICES and PRODUCTS",
                projectsNav: "PROJECTS",
                blogNav: "BLOG",
                contactNav: "CONTACT",
                languageNav: "LANGUAGE",
              },
              contact: {
                sendYourProblem: "Contact us for your problem.",
                explanation1:
                  "Do you have a problem with your boat? Tescomarine is at your service with maintenance, repair, renovation, system renewal, observation, interior and exterior upholstery design and decoration services, as well as all kinds of paint applications.",
                explanation2:
                  "You can contact us by filling out the form. It will be helpful for us if you provide information about your problem. We will contact you as soon as possible.",
                form: "Contact Form",
                fillAllAreas: "Fill in all your information correctly.",
                giveDetails:
                  "Please describe the problem in as much detail as possible. We will contact you as soon as possible.",
                name: "Name",
                email: "E-mail",
                phone: "Phone",
                subject: "Subject",
                message: "Message",
                errorSending:
                  "An error occurred while sending your message. Please try again.",
                tyForSending:
                  "Thank you for choosing us. We will contact you as soon as possible.",
                ourAddress: "Our Address",
                callUs: "Call Us",
              },
              services: {
                services: "Services",
                servicesExpShort:
                  "As Tescomarine, we offer boat maintenance services, boat repair services, renovation services; project design, manufacturing and installation services, hydraulic system R&D design and hydraulic system maintenance services and sales; inflatable boat and engine maintenance and repair; decoration and painting services.",
                boatJobs: "Boat and Yacht Jobs",
                explanation:
                  "With our experienced and expert team, we provide you with services for all the problems on your boat. Some of our applications:",
                repairExpShort:
                  "Routine or emergency repair; electrical, electronic, mechanical, engine repairs along with inflatable boat and engine repairs.",
                maintenanceExpShort:
                  "Boat maintenance and services related to boat maintenance. Electrical and electronic maintenance, diesel and gasoline engine maintenance, maintenance of hydraulic systems.",
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
                intro:
                  "We continue to share our industry knowledge and experience that has been going on for years. You can read our blog posts that we have prepared for you to be informed about the industry, the latest developments and innovations.",
                postComingSoon: "Blog posts are coming soon.",
              },
              footer: {
                phone: "Phone",
                email: "E-mail",
                copyright: "All rights reserved.",
                usefulLinks: "Useful Links",
              },
              about: {
                successStoryTitle: "Our Story",
                successStory:
                  "Tescomarine continues its successful work by keeping its staff strong without sacrificing its continuous service understanding. In order for your freedom on the sea to be comfortable and safe, we apply the latest technological systems for you.",
                successStory2:
                  "Service, maintenance, refit operations of sailing and motor yachts are successfully implemented by our experienced and trained team.",
                successStory3: "Our mission:",
                step1:
                  "To work in a team spirit to achieve company and unit goals based on the Total Quality philosophy and to always be open to development and innovation.",
                step2:
                  "To perceive customer demands correctly in the projects we have undertaken, to direct customer requests correctly and to comply with these requests at the maximum level.",
                step3:
                  "To finish and deliver projects on time in accordance with the work schedule and technical specifications.",
                watchOurVideo: "Watch Our Video",
                happyClients: "Happy Clients",
                projectAndProcess: "Project and Jobs",
                hoursWorked: "Hours Worked",
                workers: "Dedicated Workers",
                ourTeam: "Our Team",
                ourTeamExp:
                  "Our team consists of experienced and expert people in their fields. We are constantly improving ourselves to provide you with the best service.",
                ctos: "Founder, CEO",
                zaferErdemExp:
                  "Zafer Erdem, who has been in the maritime sector for many years, has been working in the sector as a boat and yacht maintenance, repair, decoration, project construction and painting specialist since 2019. He is the founder and CEO of Tescomarine.",
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
