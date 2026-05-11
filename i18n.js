/* =========================================================
   Zametron - i18n (EN / TR) + Geolocation Detection
   ========================================================= */
(function () {
  'use strict';

  /* -----------------------------------------------------------
     Translations
     ----------------------------------------------------------- */
  var t = {

    /* ---- Nav ---- */
    'nav.home': { en: 'Home', tr: 'Ana Sayfa' },
    'nav.about': { en: 'About', tr: 'Hakkımızda' },
    'nav.services': { en: 'Services', tr: 'Hizmetler' },
    'nav.whyUs': { en: 'Why Us', tr: 'Neden Biz' },
    'nav.contact': { en: 'Get in Touch', tr: 'İletişime Geç' },

    /* ---- Hero ---- */
    'hero.label': { en: "Turkey's First Corporate AV & IT Integrator", tr: "Türkiye'nin İlk Kurumsal AV & BT Entegratörü" },
    'hero.title.1': { en: 'Technology', tr: 'Teknoloji' },
    'hero.title.2': { en: 'Beyond', tr: 'Ufkun' },
    'hero.title.3': { en: 'the', tr: '' },
    'hero.title.4': { en: 'Horizon', tr: 'Ötesinde' },
    'hero.subtitle': { en: 'Where comfort meets technology at sea. Premium audio-visual and IT system integration for mega yachts, luxury villas, and special projects.', tr: 'Denizde konfor ve teknolojinin buluştuğu nokta. Mega yatlar, lüks villalar ve özel projeler için premium görsel-işitsel ve BT sistem entegrasyonu.' },
    'hero.explore': { en: 'Explore Services', tr: 'Hizmetleri Keşfedin' },
    'hero.startProject': { en: 'Start a Project', tr: 'Proje Başlat' },
    'hero.scroll': { en: 'Scroll', tr: 'Aşağı Kaydır' },

    /* ---- Stats ---- */
    'stats.yachts': { en: 'Yachts Delivered', tr: 'Yat Teslim Edildi' },
    'stats.years': { en: 'Years Experience', tr: 'Yıllık Deneyim' },
    'stats.support': { en: 'Global Support', tr: 'Küresel Destek' },
    'stats.offices': { en: 'Offices Worldwide', tr: 'Dünya Çapında Ofis' },

    /* ---- About Teaser ---- */
    'about.label': { en: 'About Zametron', tr: 'Zametron Hakkında' },
    'about.heading': { en: 'Engineering <em class="text-accent">Excellence</em> at Sea', tr: 'Denizde Mühendislik <em class="text-accent">Mükemmelliği</em>' },
    'about.text': { en: 'Founded by marine engineers with a vision to bring cutting-edge AV and IT integration to the maritime world, Zametron has become Turkey\'s leading technology integrator for mega yachts and luxury projects.', tr: 'Deniz mühendisleri tarafından, denizcilik dünyasına en son teknoloji AV ve BT entegrasyonunu getirme vizyonuyla kurulan Zametron, mega yatlar ve lüks projeler için Türkiye\'nin lider teknoloji entegratörü haline gelmiştir.' },
    'about.story': { en: 'Our Story', tr: 'Hikayemiz' },

    /* ---- Services ---- */
    'services.label': { en: 'What We Do', tr: 'Ne Yapıyoruz' },
    'services.heading': { en: 'Integrated <em class="text-accent">Solutions</em>', tr: 'Entegre <em class="text-accent">Çözümler</em>' },
    'services.sub': { en: 'End-to-end AV, IT, and automation systems designed for the most demanding maritime and luxury environments.', tr: 'En zorlu denizcilik ve lüks ortamlar için tasarlanmış uçtan uca AV, BT ve otomasyon sistemleri.' },

    /* ---- Service Cards ---- */
    'srv.av.title': { en: 'Audio & Video', tr: 'Ses & Görüntü' },
    'srv.av.text': { en: 'Immersive cinema rooms, distributed audio, and broadcast-grade video systems for yachts and villas.', tr: 'Yatlar ve villalar için etkileyici sinema odaları, dağıtılmış ses ve yayın kalitesinde video sistemleri.' },
    'srv.it.title': { en: 'IT Infrastructure', tr: 'BT Altyapısı' },
    'srv.it.text': { en: 'Enterprise-grade networking, server rooms, and unified communications tailored for marine environments.', tr: 'Deniz ortamları için kurumsal düzeyde ağ, sunucu odaları ve birleşik iletişim çözümleri.' },
    'srv.sat.title': { en: 'Satellite & Internet', tr: 'Uydu & İnternet' },
    'srv.sat.text': { en: 'VSAT, Starlink, and hybrid connectivity solutions ensuring seamless internet access anywhere at sea.', tr: 'Denizde her yerde kesintisiz internet erişimi sağlayan VSAT, Starlink ve hibrit bağlantı çözümleri.' },
    'srv.sec.title': { en: 'Security Systems', tr: 'Güvenlik Sistemleri' },
    'srv.sec.text': { en: 'CCTV surveillance, access control, intrusion detection, and integrated security management platforms.', tr: 'CCTV gözetim, erişim kontrolü, izinsiz giriş tespiti ve entegre güvenlik yönetim platformları.' },
    'srv.light.title': { en: 'Lighting & DMX', tr: 'Aydınlatma & DMX' },
    'srv.light.text': { en: 'Architectural lighting design, DMX control, LED integration, and mood-setting scene programming.', tr: 'Mimari aydınlatma tasarımı, DMX kontrolü, LED entegrasyonu ve atmosfer yaratan sahne programlama.' },
    'srv.auto.title': { en: 'Smart Automation', tr: 'Akıllı Otomasyon' },
    'srv.auto.text': { en: 'Professional automation programming for total environment control from a single interface - lighting, climate, blinds, and entertainment at your fingertips.', tr: 'Tek bir arayüzden tam ortam kontrolü için profesyonel otomasyon programlama - aydınlatma, iklim, panjurlar ve eğlence parmaklarınızın ucunda.' },

    /* ---- Why Us ---- */
    'why.label': { en: 'Why Zametron', tr: 'Neden Zametron' },
    'why.heading': { en: 'Built for the <em class="text-accent">Extraordinary</em>', tr: '<em class="text-accent">Sıradışı</em> Olan İçin İnşa Edildi' },

    /* ---- Diff Cards ---- */
    'diff.1.title': { en: 'Marine Engineering DNA', tr: 'Deniz Mühendisliği DNA\'sı' },
    'diff.1.text': { en: 'Founded by marine engineers who understand the unique challenges of technology at sea - from vibration and humidity to regulatory compliance.', tr: 'Titreşim ve nemden yasal uyumluluğa kadar denizde teknolojinin benzersiz zorluklarını anlayan deniz mühendisleri tarafından kuruldu.' },
    'diff.2.title': { en: 'Global Reach, Local Expertise', tr: 'Küresel Erişim, Yerel Uzmanlık' },
    'diff.2.text': { en: 'With offices across key maritime hubs and partnerships worldwide, we deliver consistent quality wherever your vessel is located.', tr: 'Önemli denizcilik merkezlerindeki ofislerimiz ve dünya çapındaki ortaklıklarımızla, geminiz nerede olursa olsun tutarlı kalite sunuyoruz.' },
    'diff.3.title': { en: '24/7 Technical Support', tr: '7/24 Teknik Destek' },
    'diff.3.text': { en: 'Round-the-clock remote and on-site support ensures your systems perform flawlessly at all times, anywhere in the world.', tr: 'Kesintisiz uzaktan ve yerinde destek, sistemlerinizin dünyanın her yerinde, her zaman kusursuz çalışmasını sağlar.' },
    'diff.4.title': { en: 'Powered by Wave AVI', tr: 'Wave AVI Gücüyle' },
    'diff.4.text': { en: 'Through our founding partnership with Wave AVI - a pioneering AV integration firm with offices in London, Netherlands, Phuket, and Singapore - we deliver globally certified solutions backed by decades of expertise.', tr: 'Londra, Hollanda, Phuket ve Singapur\'da ofisleri bulunan öncü AV entegrasyon firması Wave AVI ile kurucu ortaklığımız sayesinde, onlarca yıllık uzmanlıkla desteklenen küresel sertifikalı çözümler sunuyoruz.' },

    /* ---- Partners ---- */
    'partners.label': { en: 'Our Partners', tr: 'Ortaklarımız' },
    'partners.heading': { en: 'Trusted <em class="text-accent">Partnerships</em>', tr: 'Güvenilir <em class="text-accent">Ortaklıklar</em>' },

    /* ---- CTA ---- */
    'cta.heading': { en: 'Ready to Start Your <em class="text-accent">Project</em>?', tr: '<em class="text-accent">Projenize</em> Başlamaya Hazır mısınız?' },
    'cta.sub': { en: 'From initial concept to final commissioning, our team is ready to bring your vision to life.', tr: 'İlk konseptten son devreye almaya kadar, ekibimiz vizyonunuzu hayata geçirmeye hazır.' },
    'cta.button': { en: 'Get in Touch', tr: 'İletişime Geç' },

    /* ---- Footer ---- */
    'footer.brandText': { en: "Turkey's first corporate AV & IT integration company. Premium technology solutions for mega yachts, luxury villas, and special projects.", tr: "Türkiye'nin ilk kurumsal AV & BT entegrasyon şirketi. Mega yatlar, lüks villalar ve özel projeler için premium teknoloji çözümleri." },
    'footer.nav': { en: 'Navigation', tr: 'Navigasyon' },
    'footer.services': { en: 'Services', tr: 'Hizmetler' },
    'footer.contact': { en: 'Contact', tr: 'İletişim' },
    'footer.copyright': { en: '© 2024 Zametron Muhendislik ve Teknoloji Ltd. Sti. All rights reserved.', tr: '© 2024 Zametron Mühendislik ve Teknoloji Ltd. Şti. Tüm hakları saklıdır.' },

    /* ---- About Page ---- */
    'pageAbout.heading': { en: 'Our <em class="text-accent">Story</em>', tr: '<em class="text-accent">Hikayemiz</em>' },
    'pageAbout.sub': { en: 'Two marine engineers, one shared vision. Building a technology integration company that understands the sea.', tr: 'İki deniz mühendisi, tek bir vizyon. Denizi anlayan bir teknoloji entegrasyon şirketi inşa etmek.' },
    'pageAbout.mission.title': { en: 'Our Mission', tr: 'Misyonumuz' },
    'pageAbout.mission.text': { en: 'To deliver world-class AV and IT integration that exceeds the expectations of the most discerning yacht owners, captains, and luxury property developers.', tr: 'En seçici yat sahipleri, kaptanlar ve lüks mülk geliştiricilerinin beklentilerini aşan dünya standartlarında AV ve BT entegrasyonu sunmak.' },
    'pageAbout.vision.title': { en: 'Our Vision', tr: 'Vizyonumuz' },
    'pageAbout.vision.text': { en: 'To be the global benchmark for maritime technology integration, setting new standards in quality, reliability, and innovation.', tr: 'Kalite, güvenilirlik ve inovasyonda yeni standartlar belirleyerek denizcilik teknoloji entegrasyonunda küresel referans noktası olmak.' },
    'pageAbout.values': { en: 'Our Values', tr: 'Değerlerimiz' },
    'pageAbout.val1.title': { en: 'Precision', tr: 'Hassasiyet' },
    'pageAbout.val1.text': { en: 'Every installation is engineered to the highest standards of accuracy and craftsmanship.', tr: 'Her kurulum, en yüksek doğruluk ve işçilik standartlarına göre tasarlanır.' },
    'pageAbout.val2.title': { en: 'Reliability', tr: 'Güvenilirlik' },
    'pageAbout.val2.text': { en: 'Systems that work flawlessly in the harshest marine conditions, backed by 24/7 support.', tr: 'En zorlu deniz koşullarında kusursuz çalışan, 7/24 destekle güçlendirilmiş sistemler.' },
    'pageAbout.val3.title': { en: 'Innovation', tr: 'İnovasyon' },
    'pageAbout.val3.text': { en: 'Constantly exploring new technologies to deliver cutting-edge solutions for our clients.', tr: 'Müşterilerimize en son teknoloji çözümleri sunmak için sürekli yeni teknolojiler keşfetmek.' },
    'pageAbout.val4.title': { en: 'Integrity', tr: 'Dürüstlük' },
    'pageAbout.val4.text': { en: 'Transparent communication, ethical practices, and genuine commitment to client success.', tr: 'Şeffaf iletişim, etik uygulamalar ve müşteri başarısına gerçek bağlılık.' },
    'pageAbout.team': { en: 'Leadership', tr: 'Liderlik' },
    'pageAbout.team.sub': { en: 'Meet the people behind Zametron', tr: 'Zametron\'un arkasındaki insanlarla tanışın' },
    'pageAbout.team1.name': { en: 'Cem Yılmaz', tr: 'Cem Yılmaz' },
    'pageAbout.team1.role': { en: 'Co-Founder & CEO', tr: 'Kurucu Ortak & CEO' },
    'pageAbout.team1.text': { en: 'Marine engineer with 15+ years in yacht systems integration.', tr: 'Yat sistemleri entegrasyonunda 15+ yıllık deneyime sahip deniz mühendisi.' },
    'pageAbout.team2.name': { en: 'Ahmet Kaya', tr: 'Ahmet Kaya' },
    'pageAbout.team2.role': { en: 'Co-Founder & CTO', tr: 'Kurucu Ortak & CTO' },
    'pageAbout.team2.text': { en: 'Electrical engineer specializing in AV systems and automation.', tr: 'AV sistemleri ve otomasyon konusunda uzmanlaşmış elektrik mühendisi.' },
    'pageAbout.stats.yachts': { en: 'Mega Yachts Completed', tr: 'Mega Yat Tamamlandı' },
    'pageAbout.stats.projects': { en: 'Special Projects', tr: 'Özel Proje' },
    'pageAbout.stats.years': { en: 'Combined Experience', tr: 'Toplam Deneyim' },
    'pageAbout.stats.offices': { en: 'Global Offices', tr: 'Küresel Ofis' },

    /* ---- Services Page ---- */
    'pageServices.heading': { en: 'Our <em class="text-accent">Services</em>', tr: '<em class="text-accent">Hizmetlerimiz</em>' },
    'pageServices.sub': { en: 'Comprehensive technology integration from concept to completion.', tr: 'Konseptten tamamlamaya kapsamlı teknoloji entegrasyonu.' },
    'pageServices.cta': { en: 'Ready to discuss your project?', tr: 'Projenizi görüşmeye hazır mısınız?' },

    /* ---- Why Us Page ---- */
    'pageWhy.heading': { en: 'Why <em class="text-accent">Zametron</em>', tr: 'Neden <em class="text-accent">Zametron</em>' },
    'pageWhy.sub': { en: 'What sets us apart in maritime technology integration.', tr: 'Denizcilik teknoloji entegrasyonunda bizi farklı kılanlar.' },

    /* ---- Contact Page ---- */
    'pageContact.heading': { en: 'Get in <em class="text-accent">Touch</em>', tr: '<em class="text-accent">İletişime</em> Geç' },
    'pageContact.sub': { en: "Let's discuss how we can bring your vision to life.", tr: 'Vizyonunuzu nasıl hayata geçirebileceğimizi görüşelim.' },
    'pageContact.name': { en: 'Your Name', tr: 'Adınız' },
    'pageContact.email': { en: 'Your Email', tr: 'E-posta Adresiniz' },
    'pageContact.phone': { en: 'Your Phone', tr: 'Telefon Numaranız' },
    'pageContact.message': { en: 'Your Message', tr: 'Mesajınız' },
    'pageContact.send': { en: 'Send Message', tr: 'Mesaj Gönder' },

    /* ---- Brochures ---- */
    'brochures.label': { en: 'Company Brochures', tr: 'Şirket Broşürleri' },
    'brochures.heading': { en: 'Download Our <em class="text-accent">Brochures</em>', tr: '<em class="text-accent">Broşürlerimizi</em> İndirin' },
    'brochures.sub': { en: 'Learn more about our capabilities, past projects, and technology partnerships.', tr: 'Yeteneklerimiz, geçmiş projelerimiz ve teknoloji ortaklıklarımız hakkında daha fazla bilgi edinin.' },
    'brochures.download': { en: 'Download PDF', tr: 'PDF İndir' },

    /* ---- Language Switcher ---- */
    'lang.switch': { en: 'TR', tr: 'EN' },
    'lang.switchTitle': { en: 'Türkçe', tr: 'English' }
  };

  /* -----------------------------------------------------------
     Get language — localStorage > navigator.language > IP geo
     ----------------------------------------------------------- */
  function detectLanguage(callback) {
    // 1. localStorage
    var stored = localStorage.getItem('zametron-lang');
    if (stored === 'tr' || stored === 'en') {
      return callback(stored);
    }

    // 2. Browser language
    var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.indexOf('tr') === 0) {
      localStorage.setItem('zametron-lang', 'tr');
      return callback('tr');
    }

    // 3. IP geolocation fallback
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ipapi.co/json/', true);
      xhr.timeout = 4000;
      xhr.onload = function () {
        if (xhr.status === 200) {
          try {
            var data = JSON.parse(xhr.responseText);
            if (data.country_code === 'TR') {
              localStorage.setItem('zametron-lang', 'tr');
              return callback('tr');
            }
          } catch (e) {}
        }
        callback('en');
      };
      xhr.onerror = function () { callback('en'); };
      xhr.ontimeout = function () { callback('en'); };
      xhr.send();
    } catch (e) {
      callback('en');
    }
  }

  /* -----------------------------------------------------------
     Apply translations to page
     ----------------------------------------------------------- */
  function applyTranslations(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n');
      var translation = t[key];
      if (!translation) continue;

      var text = translation[lang];
      if (text === undefined) continue;

      // Check if translation contains HTML
      if (text.indexOf('<') !== -1) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }

    // Update placeholders
    var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < placeholders.length; j++) {
      var pl = placeholders[j];
      var plKey = pl.getAttribute('data-i18n-placeholder');
      var plText = t[plKey];
      if (plText) {
        pl.setAttribute('placeholder', plText[lang] || '');
      }
    }

    // Update lang switcher buttons
    var btns = document.querySelectorAll('[data-lang-switch]');
    for (var k = 0; k < btns.length; k++) {
      var btn = btns[k];
      btn.setAttribute('data-lang', lang);
      btn.textContent = t['lang.switch'][lang];
      btn.setAttribute('title', t['lang.switchTitle'][lang]);
    }

    // Set HTML lang
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
  }

  /* -----------------------------------------------------------
     Language switcher handler
     ----------------------------------------------------------- */
  function switchLanguage(newLang) {
    localStorage.setItem('zametron-lang', newLang);
    applyTranslations(newLang);
  }

  /* -----------------------------------------------------------
     Create language switcher buttons in nav
     ----------------------------------------------------------- */
  function injectSwitcher() {
    // Desktop nav
    var navLinks = document.querySelector('.nav__links');
    if (navLinks) {
      var switcher = document.createElement('button');
      switcher.className = 'lang-switch';
      switcher.setAttribute('data-lang-switch', '');
      switcher.setAttribute('aria-label', 'Switch language');
      switcher.addEventListener('click', function () {
        var current = localStorage.getItem('zametron-lang') || 'en';
        switchLanguage(current === 'tr' ? 'en' : 'tr');
      });
      navLinks.appendChild(switcher);
    }

    // Mobile nav
    var mobileNav = document.querySelector('.nav__mobile');
    if (mobileNav) {
      var mobileSwitcher = document.createElement('button');
      mobileSwitcher.className = 'lang-switch lang-switch--mobile';
      mobileSwitcher.setAttribute('data-lang-switch', '');
      mobileSwitcher.setAttribute('aria-label', 'Switch language');
      mobileSwitcher.addEventListener('click', function () {
        var current = localStorage.getItem('zametron-lang') || 'en';
        switchLanguage(current === 'tr' ? 'en' : 'tr');
      });
      mobileNav.appendChild(mobileSwitcher);
    }
  }

  /* -----------------------------------------------------------
     Init
     ----------------------------------------------------------- */
  function init() {
    injectSwitcher();

    detectLanguage(function (lang) {
      applyTranslations(lang);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
