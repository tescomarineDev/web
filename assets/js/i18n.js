const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Türkçe" },
};

const rerender = () => {
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  $("body").localize();
  $("title").text($.t("index.welcomeTo"));
  var inputElement1 = document.getElementById("nameInp");
  if (inputElement1 != null) {
    inputElement1.placeholder = $.t("contact.name");
  }
  var inputElement2 = document.getElementById("emailInp");
  if (inputElement2 != null) {
    inputElement2.placeholder = $.t("contact.email");
  }
  var inputElement3 = document.getElementById("phoneInp");
  if (inputElement3 != null) {
    inputElement3.placeholder = $.t("contact.phone");
  }
  var inputElement4 = document.getElementById("messageInp");
  if (inputElement4 != null) {
    inputElement4.placeholder = $.t("contact.message");
  }
  var inputElement5 = document.getElementById("subjectInp");
  if (inputElement5 != null) {
    inputElement5.placeholder = $.t("contact.subject");
  }
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
                getStarted: "Detaylı Bilgi",
              },
              site: {
                home: "Ana Sayfa",
                about: "Hakkımızda",
                services: "Hizmetler ve Ürünler",
                boats: "Botlar",
                projects: "Projeler",
                blog: "Blog",
                contact: "İletişim",
                language: "Dil",
                homeNav: "ANA SAYFA",
                aboutNav: "HAKKIMIZDA",
                servicesNav: "HİZMETLER ve ÜRÜNLER",
                boatsNav: "BOTLAR",
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
                mainOffice: "Merkez Ofis",
                gocekOffice: "Göcek Ofisi",
              },
              services: {
                services: "Tüm Hizmetlerimiz",
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
                periodicObservation: {
                  name: "Düzenli Gözlem",
                  explanation:
                    "Teknelerinizi rutin kontrollerle her an hazır tutuluyoruz. Aksaklıkları küçükken tespit etmeyi ve anında çözümlemeyi önemsiyoruz",
                },
                maintenance: {
                  name: "Su Altı ve Su Üstü Bakımları",
                  explanation:
                    "Karina temizliği ve Antifouling (Zehirli Boya) uygulamalarıyla birlikte Gövde boya, bakım, pasta/cila ve kaplama uygulamaları",
                },
                cleaning: {
                  name: "Düzenli Yıkama ve Temizlik Hizmetleri",
                  explanation:
                    "İstediğiniz anda aplikasyon üzerinden teknenizi bağlı bulunduğu limanda yıkatabilirsiniz. Özel ekipman ve tekniklerimizle kusursuz bir temizlik vadediyoruz",
                },
                machineMaintenance: {
                  name: "Makine Bakım ve Servis",
                  explanation:
                    "Motor, jeneratör ve tüm içten yanmalı makinelerinize bakım ve servis hizmeti. VOLVO PENTA, MAN, CUMMINS, CAT, MTU, ONAN, KOHLER marka motorların bakım ve servis hizmetleri, Modifikasyon ve Sistem Yenileme Projeleri",
                },
                electrical: {
                  name: "Elektrikli Donanım Bakım ve Servis",
                  explanation:
                    "Tüm elektrikli ve elektronik donanımlarınızın bakım, servis, yenileme ve onarım hizmetleri. Tüm sistemlere hakim tecrübeli ve hızlı çözümler",
                },
                survey: {
                  name: "Survey Hizmetleri",
                  explanation:
                    "Satın alma öncesi survey, Hasar/kaza maksatlı survey, Seyir öncesi/sonrası survey",
                },
                osmos: {
                  name: "Ozmos Tedavileri / Ozmos Center",
                  explanation:
                    "Profesyonel ölçüm cihazlarımız ve ekipmanlarımız sayesinde kusursuz tedavi. Akzo Nobel International Osmos center",
                },
                teak: {
                  name: "Krom, TEAK ve Tekstil",
                  explanation:
                    "Teknenizin estetik görünümünü sağlayan donanımlarınızı eşsiz tasarımlar, üst kalite malzeme ve kusursuz işçilikle kullanımınıza sunuyoruz",
                },
                boatTrade: {
                  name: "Tekne, Bot Satın Alma ve Kiralama",
                  explanation:
                    "İhtiyacınız olan tekneyi ve botu bulmanızda yardımcı oluyoruz. Satın alma ve kiralama işlemlerinizde profesyonel destek",
                },
                taxiAndTour: {
                  name: "Bot Taksi ve Tur Hizmetleri",
                  explanation:
                    "Aşağıda yer alan numaradan bize ulaşarak, Göcek ve çevresindeki tüm koylara ulaşım, bot taksi ve tur hizmetlerimizden yararlanabilirsiniz.",
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
              boatsPage: {
                header: "Tekne Satış ve Kiralama",
                explanation:
                  "Tescomarine, Ranieri©'nin güçlü desteğiyle, tekne satın almak veya kiralamak isteyenler için pratik ve güvenilir bir seçenek sunuyor ve deniz severlere denizin tadını çıkarma fırsatı veriyor.",
                boatCatalog: "Tekne Kataloğu",

                genericDescription:
                  "Kalite, performans ve güvenliğin zirvesindeki bu tekne ile bir sonraki maceranıza yelken açın. Renieri©'nin güvenilir yerel ortağı tarafından dağıtılmaktadır.",

                specification: "Teknik Özellikler",

                lengthDaytona: "Uzunluk: 5m",
                beamLengthDaytona: "Kiriş Uzunluğu: 2.10m",
                personLimitDaytona: "Kişi Sayısı: 7",
                weightDaytona: "Ağırlık: 115kg",

                lengthEvo25: "Uzunluk: 7.5m",
                beamLengthEvo25: "Kiriş Uzunluğu: 2.50m",
                personLimitEvo25: "Kişi Sayısı: 10",
                weightEvo25: "Ağırlık: 1.500kg",
                fuelTankEvo25: "Yakıt Deposu: 240ltr",

                lengthGiubileo: "Uzunluk: 6m",
                beamLengthGiubileo: "Kiriş Uzunluğu: 2.38m",
                personLimitGiubileo: "Kişi Sayısı: 10",
                weightGiubileo: "Ağırlık: 600kg",
                fuelTankGiubileo: "Yakıt Deposu: 100ltr",

                lengthR32: "Uzunluk: 9.6m",
                beamLengthR32: "Kiriş Uzunluğu: 3m",
                personLimitR32: "Kişi Sayısı: 14",
                weightR32: "Ağırlık: 2700kg",
                fuelTankR32: "Yakıt Deposu: 1000ltr",
                waterCapacityR32: "Su kapasitesi: 130ltr",

                lengthRenegade: "Uzunluk: 6m",
                beamLengthRenegade: "Kiriş Uzunluğu: 2.25m",
                personLimitRenegade: "Kişi Sayısı: 7",
                weightRenegade: "Ağırlık: 640kg",
                fuelTankRenegade: "Yakıt Deposu: 105ltr",
                waterCapacityRenegade: "Su kapasitesi: 65ltr",

                lengthS44: "Uzunluk: 12.5m",
                beamLengthS44: "Kiriş Uzunluğu: 4m",
                personLimitS44: "Kişi Sayısı: 12",
                weightS44: "Ağırlık: 10.000kg",
                fuelTankS44: "Yakıt Deposu: 240ltr",
                waterCapacityS44: "Su kapasitesi: 250ltr",
                minMaxHpS44: "Motor Gücü: 2x450",

                lengthShark19: "Uzunluk: 5.45m",
                beamLengthShark19: "Kiriş Uzunluğu: 2.12m",
                personLimitShark19: "Kişi Sayısı: 7",
                weightShark19: "Ağırlık: 500kg",
                fuelTankShark19: "Yakıt Deposu: 55ltr",
                waterCapacityShark19: "Su kapasitesi: 50ltr",
                minMaxHpShark19: "Motor Gücü: 128",

                lengthSoverato545: "Uzunluk: 5.45m",
                beamLengthSoverato545: "Kiriş Uzunluğu: 2.12m",
                personLimitSoverato545: "Kişi Sayısı: 7",
                weightSoverato545: "Ağırlık: 520kg",
                fuelTankSoverato545: "Yakıt Deposu: 70ltr",
                waterCapacitySoverato545: "Su kapasitesi: 50ltr",
                minMaxHpSoverato545: "Motor Gücü: 128",

                minMaxHp: "Min-Maks Motor Gücü",
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
                getStarted: "Detailed Information",
              },
              site: {
                home: "Home",
                about: "About",
                services: "Services and Products",
                boats: "Boats",
                projects: "Projects",
                blog: "Blog",
                contact: "Contact",
                language: "Language",
                homeNav: "HOME",
                aboutNav: "ABOUT",
                servicesNav: "SERVICES and PRODUCTS",
                boatsNav: "BOATS",
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
                mainOffice: "Main Office",
                gocekOffice: "Göcek Office",
              },
              services: {
                services: "All Services",
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
                periodicObservation: {
                  name: "Periodic Observation",
                  explanation:
                    "We keep your boats ready at all times with routine checks. We care about detecting malfunctions when they are small and solving them instantly.",
                },
                maintenance: {
                  name: "Underwater and Above Water Maintenance",
                  explanation:
                    "Hull paint, maintenance, polishing / polishing and coating applications with Marina cleaning and Antifouling (Toxic Paint) applications",
                },
                cleaning: {
                  name: "Regular Washing and Cleaning Services",
                  explanation:
                    "You can wash your boat at any time from the application. We promise a perfect cleaning with our special equipment and techniques.",
                },
                machineMaintenance: {
                  name: "Machine Maintenance and Service",
                  explanation:
                    "Maintenance and servicing for engines, generators, and all internal combustion machines. Maintenance and servicing for VOLVO PENTA, MAN, CUMMINS, CAT, MTU, ONAN, KOHLER brand engines, as well as Modification and System Renewal Projects.",
                },
                electrical: {
                  name: "Electrical Equipment Maintenance and Service",
                  explanation:
                    "Maintenance, service, renewal and repair services for all your electrical and electronic equipment. Experienced and fast solutions to all systems",
                },
                survey: {
                  name: "Survey Services",
                  explanation:
                    "Pre-purchase survey, Damage / accident survey, Pre / post navigation survey",
                },
                osmos: {
                  name: "Osmosis Treatments / Osmosis Center",
                  explanation:
                    "Flawless treatment with our professional measuring devices and equipment. Akzo Nobel International Osmosis center",
                },
                teak: {
                  name: "Chrome, TEAK and Textile",
                  explanation:
                    "We offer you your equipment that provides the aesthetic appearance of your boat with unique designs, top quality materials and flawless workmanship.",
                },
                boatTrade: {
                  name: "Boat, Boat Purchase and Rental",
                  explanation:
                    "We help you find the boat you need. Professional support for your purchase and rental transactions",
                },
                taxiAndTour: {
                  name: "Boat Taxi and Tour Services",
                  explanation:
                    "You can benefit from our transportation to all bays in Göcek and its surroundings, boat taxi and tour services by calling the number below.",
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
              boatsPage: {
                header: "Boat Sales and Rental",
                explanation:
                  "Tescomarine, with the strong support of Ranieri©, offers a practical and reliable option for those who want to buy or rent a boat, and gives sea lovers the opportunity to enjoy the sea.",
                boatCatalog: "Boat Catalog",

                genericDescription:
                  "Set sail on your next adventure with the pinnacle of elegance, performance, and safety, distributed by Renieri©'s trusted local partner.",

                specification: "Specifications",

                lengthDaytona: "Length: 5m",
                beamLengthDaytona: "Beam Length: 2.10m",
                personLimitDaytona: "Person Limit: 7",
                weightDaytona: "Weight: 115kg",

                lengthEvo25: "Length: 7.5m",
                beamLengthEvo25: "Beam Length: 2.50m",
                personLimitEvo25: "Person Limit: 10",
                weightEvo25: "Weight: 1.500kg",
                fuelTankEvo25: "Fuel tank: 240ltr",

                lengthGiubileo: "Length: 6m",
                beamLengthGiubileo: "Beam Length: 2.38m",
                personLimitGiubileo: "Person Limit: 10",
                weightGiubileo: "Weight: 600kg",
                fuelTankGiubileo: "Fuel tank: 100ltr",

                lengthR32: "Length: 9.6m",
                beamLengthR32: "Beam Length: 3m",
                personLimitR32: "Person Limit: 14",
                weightR32: "Weight: 2700kg",
                fuelTankR32: "Fuel tank: 1000ltr",
                waterCapacityR32: "Water capacity: 130ltr",

                lengthRenegade: "Length: 6m",
                beamLengthRenegade: "Beam Length: 2.25m",
                personLimitRenegade: "Person Limit: 7",
                weightRenegade: "Weight: 640kg",
                fuelTankRenegade: "Fuel tank: 105ltr",
                waterCapacityRenegade: "Water capacity: 65ltr",

                lengthS44: "Length: 12.5m",
                beamLengthS44: "Beam Length: 4m",
                personLimitS44: "Person Limit: 12",
                weightS44: "Weight: 10.000kg",
                fuelTankS44: "Fuel tank: 240ltr",
                waterCapacityS44: "Water capacity: 250ltr",
                minMaxHpS44: "Max HP: 2x450",

                lengthShark19: "Length: 5.45m",
                beamLengthShark19: "Beam Length: 2.12m",
                personLimitShark19: "Person Limit: 7",
                weightShark19: "Weight: 500kg",
                fuelTankShark19: "Fuel tank: 55ltr",
                waterCapacityShark19: "Water capacity: 50ltr",
                minMaxHpShark19: "Max HP: 128",

                lengthSoverato545: "Length: 5.45m",
                beamLengthSoverato545: "Beam Length: 2.12m",
                personLimitSoverato545: "Person Limit: 7",
                weightSoverato545: "Weight: 520kg",
                fuelTankSoverato545: "Fuel tank: 70ltr",
                waterCapacitySoverato545: "Water capacity: 50ltr",
                minMaxHpSoverato545: "Max HP: 128",

                minMaxHp: "Min-Max HP",
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
