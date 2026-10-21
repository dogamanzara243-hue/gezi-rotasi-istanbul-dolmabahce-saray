const SPOT_DATA = {
    theme: "history",
    hero: {
        coverImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=1600&q=80",
        category: "Saray Müzesi & Batılılaşma Dönemi",
        badge: "Milli Saraylar Mirası",
        title: "Dolmabahçe Sarayı Müzesi",
        subtitle: "Osmanlı İmparatorluğu'nun son dönem ihtişamı, kristal avizeleri, Boğaz kıyısındaki büyüleyici mimarisi ve Atatürk'ün ebediyete intikal ettiği tarihi mekan.",
        stats: [
            { label: "Yapım Yılı", value: "1856" },
            { label: "Yaptıran", value: "Sultan Abdülmecid" },
            { label: "Oda Sayısı", value: "285 Oda, 44 Salon" },
            { label: "Konum", value: "Beşiktaş / İstanbul" }
        ]
    },
    summary: {
        typeTitle: "Boğaz Kıyısındaki Osmanlı Sarayı",
        description: "31. Osmanlı Padişahı Sultan Abdülmecid tarafından yaptırılan Dolmabahçe Sarayı; Barok, Rokoko ve Neoklasik stillerin Osmanlı mimarisiyle sentezlendiği, 110.000 metrekarelik devasa bir alanda yer alan şaheserdir.",
        badges: [
            { icon: "fa-solid fa-clock", text: "Ziyaret Saatleri: 09:00 - 17:30" },
            { icon: "fa-solid fa-ticket", text: "Müzekart Geçerlidir" },
            { icon: "fa-solid fa-calendar-xmark", text: "Pazartesi Günleri Kapalıdır" }
        ]
    },
    overview: {
        paragraphs: [
            "Dolmabahçe Sarayı, daha önce Osmanlı kaptan-ı deryalarının gemilerini demirlediği doğal bir limanın doldurulmasıyla elde edilen alana inşa edilmiştir. Garabet Amira Balyan ve oğlu Nigoğos Balyan tarafından tasarlanan saray, 1856 yılında kullanıma açılmış ve altı padişaha ile son halife Abdülmecid Efendi'ye ev sahipliği yapmıştır.",
            "Sarayın en önemli tarihi şahsiyetlerinden biri de Türkiye Cumhuriyeti'nin kurucusu Mustafa Kemal Atatürk'tür. Atatürk, İstanbul ziyaretlerinde bu sarayı kullanmış ve 10 Kasım 1938 tarihinde sarayın 71 numaralı odasında hayata gözlerini yummuştur. Saray günümüzde Selamlık (Mabeyn-i Hümayun), Muayede Salonu, Harem-i Hümayun ve Resim Müzesi bölümleriyle ziyaretçilerini ağırlamaktadır."
        ],
        visitorNotes: [
            { title: "Müzekart Bilgisi", description: "T.C. vatandaşları için Selamlık, Harem ve Resim Müzesi dahil Müzekart geçerlidir." },
            { title: "Giriş Güvenliği", description: "Saray içerisindeki tarihi parkelere zarar vermemek için ziyaretçilere galoş takma zorunluluğu uygulanır." },
            { title: "Fotoğraf Çekimi", description: "Sarayın iç bölümlerinde tarihi dokuyu ve eserleri korumak amacıyla fotoğraf çekimi kısıtlamalarına dikkat edilmelidir." },
            { title: "Sesli Rehber", description: "Girişte biletle birlikte ücretsiz kulaklıklı sesli rehber cihazı (Audio Guide) temin edebilirsiniz." }
        ]
    },
    whyVisit: [
        { icon: "fa-solid fa-lightbulb", title: "Dünyanın En Büyük Kristal Avizesi", description: "Muayede Salonu'nda yer alan Kraliçe Victoria hediyesi 4.5 tonluk Baccarat ve İngiliz kristal avizesini görün." },
        { icon: "fa-solid fa-star-and-crescent", title: "Atatürk'ün Ebediyete İntikal Ettiği Oda", description: "Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ün 10 Kasım 1938'de vefat ettiği 71 numaralı tarihi oda." },
        { icon: "fa-solid fa-stairs", title: "Kristal Merdivenler", description: "Trabzanları Baccarat kristalinden yapılmış, çift kollu büyüleyici protokol merdiveni." }
    ],
    mustSee: [
        { image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b3a9b?auto=format&fit=crop&w=600&q=80", title: "Muayede Salonu (Tören Salonu)", description: "36 metre yüksekliğinde kubbesi ve devasa avizesiyle bayramlaşma törenlerinin yapıldığı muhteşem salon." },
        { image: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=600&q=80", title: "Kristal Merdivenler (Protocoll Hall)", description: "Baccarat kristallerinden trabzanları ile Barok dönemi ihtişamını yansıtan merdivenler." },
        { image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80", title: "Dolmabahçe Saat Kulesi", description: "Saray girişinde yer alan 27 metre yüksekliğindeki 4 katlı Neo-Barok saat kulesi." },
        { image: "https://images.unsplash.com/photo-1527838832766-51d7f37c9fd9?auto=format&fit=crop&w=600&q=80", title: "Saray Bahçeleri ve Saltanat Kapıları", description: "Boğaz'a açılan mermer işçilikli kuğulu havuzlar ve görkemli Saltanat Kapısı." }
    ],
    transportation: {
        methods: [
            { icon: "fa-solid fa-train-tram", title: "T1 Tramvay Hattı", detail: "Bağcılar - Kabataş T1 tramvayının son durağı olan 'Kabataş'ta inip 5 dakika yürüyebilirsiniz." },
            { icon: "fa-solid fa-ship", title: "Deniz Ulaşımı", detail: "Üsküdar veya Kadıköy'den Kabataş veya Beşiktaş iskelesine vapurla gelip sahilden yürüyebilirsiniz." },
            { icon: "fa-solid fa-bus", title: "Otobüs Hatları", detail: "Beşiktaş Meydanı'ndan geçen tüm İETT otobüs hatlarıyla sarayın tam önündeki durakta inebilirsiniz." }
        ],
        tip: "Kabataş Tramvay ve İskele merkezine çok yakındır. Trafiğe takılmamak için deniz hattı veya T1 tramvayı tercih edilmelidir.",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Dolmabahce+Sarayi+Besiktas+Istanbul"
    },
    whereToStay: [
        { name: "Swissôtel The Bosphorus", type: "5 Yıldızlı Lüks Otel", rating: "4.9", link: "https://www.google.com/travel/hotels?q=Swissotel+The+Bosphorus+Istanbul" },
        { name: "Shangri-La Bosphorus", type: "Boğaz Kıyısı Lüks Konaklama", rating: "4.8", link: "https://www.google.com/travel/hotels?q=Shangri-La+Bosphorus+Istanbul" },
        { name: "The Ritz-Carlton Istanbul", type: "Lüks Şehir Oteli", rating: "4.7", link: "https://www.google.com/travel/hotels?q=The+Ritz-Carlton+Istanbul" }
    ],
    whereToEat: [
        { name: "Dolmabahçe Sarayı Saat Kulesi Kafeterya", cuisine: "Boğaz Manzaralı Kafe & İçecek", rating: "4.6", link: "https://www.google.com/maps/search/?api=1&query=Dolmabahce+Saat+Kulesi+Kafeteryasi" },
        { name: "Vogue Restaurant Beşiktaş", cuisine: "Dünya Mutfağı & Panoramik Manzara", rating: "4.7", link: "https://www.google.com/maps/search/?api=1&query=Vogue+Restaurant+Besiktas" },
        { name: "Tarihi Beşiktaş Köftecisi", cuisine: "Geleneksel Türk Mutfağı", rating: "4.5", link: "https://www.google.com/maps/search/?api=1&query=Tarihi+Besiktas+Koftecisi" }
    ]
};