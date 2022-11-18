export const categories = [
  {
    id: 1,
    name: "Kahvaltı",
    sub_category: [
      {
        id: 1.01,
        name: "FRANSIZ TOSTU",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "FRANSIZ TOSTU",
            name: "AVAKADO",
            price: 73,
            desc: "Ekşi Maya Ekmek, Roka, Maydonoz, Erken Hasat Soğuk Sıkım Zeytin Yağı, Orman Meyveleri, Tire Çamur Peyniri",
          },
          {
            category: "FRANSIZ TOSTU",
            name: "MOZZARELLA KASAP SUCUK",
            price: 89,
            desc: "Ekşi Maya Ekmek, Kasap Sucuk, Roka, Confit Domates, Mozzarella Sos",
          },
          {
            category: "FRANSIZ TOSTU",
            name: "MANTAR FÜME ET",
            price: 73,
            desc: "Ekşi Maya Ekmek, Mantar, Ispanak, Göz Yumurta, Gravyer Peynir Rendesi, Sürülebilir Peynir, Taze Kekik",
          },
          {
            category: "FRANSIZ TOSTU",
            name: "YER FISTIĞI EZMESİ - BELÇİKA ÇİKOLATASI",
            price: 79,
            desc: "Ekşi Maya Ekmek, Roka, Maydonoz, Erken Hasat Soğuk Sıkım Zeytin Yağı, Orman Meyveleri, Tire Çamur Peyniri",
          },
          {
            category: "FRANSIZ TOSTU",
            name: "FRENCH BURGER",
            price: 73,
            desc: "Ekşi Maya Ekmek, füme antrikot, chedar peyniri, acı sos, turşu, mevsim reçeli",
          },
        ],
      },
      {
        id: 1.02,
        name: "PANCAKE",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "PANCAKE",
            name: "PANCAKE füme",
            price: 85,
            desc: "2 adet pancake, 2 adet göz yumurta, füme et, mantar, confit domates, kızarmış peynir",
          },
          {
            category: "PANCAKE",
            name: "PANCAKE meyveli",
            price: 78,
            desc: "4 adet pancake, bal şurubu, krema, mevsim meyveleri",
          },
          {
            category: "PANCAKE",
            name: "PANCAKE special",
            price: 180,
            desc: "8 adet pancake, füme, kaburga, mevsim meyveleri, peynir çeşitleri, söğüş tabağı, bal, kaymak, zeytin, sürülebilir peynir, kit-kat, mevsim reçeli, kahvaltılık sos, avokado sos, 2 fincan çay",
          },
        ],
      },
      {
        id: 1.03,
        name: "MEAT STORE",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "MEAT STORE",
            name: "witmeat",
            price: 79,
            desc: "ekşi maya ekmek, mihaliç peyniri, kavurma, roka, scrambledeggs, acılı ev salça, kekik, mevsim yeşillikleri, sürülebilir peynir, lütenitsa",
          },
          {
            category: "MEAT STORE",
            name: "lifano envai",
            price: 86,
            desc: "ekşi maya ekmek, kars gravyeri, kasap sucuk, poşe yumurta, mevsim yeşillikleri, hollandez sos",
          },
          {
            category: "MEAT STORE",
            name: "grand egg",
            price: 105,
            desc: "ekşi maya ekmek, füme somon, avakado, roka, poşe yumurta, hollandez sos, yeşillik",
          },
        ],
      },
      {
        id: 1.04,
        name: "GRANOLA BOWL",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "GRANOLA BOWL",
            name: "GRANOLA BOWL",
            price: 76,
            desc: "süzme yoğurt, süt, granola, orman meyveleri, mevsim yeşillikleri",
          },
        ],
      },
      {
        id: 1.05,
        name: "CHEF'S SPECİAL",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "CHEF'S SPECİAL",
            name: "CHEF'S SPECİAL",
            price: 195,
            desc: "peynir çeşitleri, tereyağı, tire çamur peyniri, söğüş, zeytin (siyah-yeşil), göz yumurta, (x2) dana bacon, füme et, petek bal, kaymak, mevsim reçeli, fındık ezmesi, avokado sos, 2 fincan çay",
          },
        ],
      },
      {
        id: 1.06,
        name: "PROTEİNG",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "PROTEİNG",
            name: "PROTEİNG",
            price: 93,
            desc: "gurme sosis, dana bacon, göz yumurta, sote mantar, kuru fasulye, ekşi maya ekmek, confit domates",
          },
        ],
      },
      {
        id: 1.07,
        name: "KAHVALTI TABAĞI",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "KAHVALTI TABAĞI",
            name: "KAHVALTI TABAĞI",
            price: 88,
            desc: "scrambledeggs, zeytinyağlı humuz, söğüş, zeytin, tire çamur peyniri, sucuk, kızartılmış peynir, petek bal, kaymak, tahin, gevrek simit",
          },
        ],
      },
      {
        id: 1.08,
        name: "BONJOUR",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "BONJOUR",
            name: "BONJOUR",
            price: 93,
            desc: "ekşi maya ekmek, avokado, füme et, 2 adet göz yumurta, fındık ezmesi, kars gravyeri, ezine peyniri, tire çamur peyniri, zeytin, kahvaltılık sos, pesto sos, avokado sos",
          },
        ],
      },
      {
        id: 1.09,
        name: "TAVA KAHVALTI",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "TAVA KAHVALTI",
            name: "TAVA KAHVALTI",
            price: 98,
            desc: "gurme sosis, mantar, scrambledeggs, kızarmış peynir, patates kızartması, confit domates, kahvaltılık sos, pesto sos, avokado sos",
          },
        ],
      },
      {
        id: 1.1,
        name: "KENDİ KAHVALTINI OLUŞTUR",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "KENDİ KAHVALTINI OLUŞTUR",
            name: "KENDİ KAHVALTINI OLUŞTUR",
            price: null,
          },
        ],
      },
      {
        id: 1.11,
        name: "KRUVASAN",
        img: "img/desserts-update.jpg",
        items: [
          {
            category: "KRUVASAN",
            name: "kolbasa",
            price: 85,
            desc: "gurme sosis, scrambledeggs, taze kekik, çörek otu, hardal, barbekü sos",
          },
          {
            category: "KRUVASAN",
            name: "istiridye mantarı",
            price: 90,
            desc: "istiridye mantarı, scrambledeggs, füme antrikot, lutenitse, sürülebilir peynir",
          },
          {
            category: "KRUVASAN",
            name: "fior di latte",
            price: 88,
            desc: "mozzarella peyniri, kuru domates, fesleğen, balzamik sirke, kahvaltılık sos, pesto sos, söğüş",
          },
          {
            category: "KRUVASAN",
            name: "bufalo",
            price: 93,
            desc: "dana bacon, scrambledeggs, avokado, rude gravyer, çörek otu, kahvaltılık sos, pesto sos, sürülebilir peynir, söğüş",
          },
          {
            category: "KRUVASAN",
            name: "deniz feneri",
            price: 105,
            desc: "füme somon, avokado, roka, poşe yumurta, mevsim yeşillikleri",
          },
          {
            category: "KRUVASAN",
            name: "mascarpone",
            price: 88,
            desc: "muz, orman meyveleri, sürülebilir antep fıstığı, mascarpone kreması",
          },
          {
            category: "KRUVASAN",
            name: "lotus biscoff",
            price: 80,
            desc: "sürülebilir lotus kreması, krem diplomat, muz, çilek",
          },
          {
            category: "KRUVASAN",
            name: "en tatlımız",
            price: 78,
            desc: "kırmızı orman meyveleri, nutella, mascarpone kreması, çilek, pudra şekeri",
          },
          {
            category: "KRUVASAN",
            name: "kruvasan special",
            price: 180,
            desc: "2 adet sade kruvasan, füme kaburga, mevsim meyveleri, peynir çeşitleri, söğüş tabağı, bal, kaymak, zeytin, sürülebilir peynir, kit-kat, mevsim reçeli, kahvaltılık sos, pesto sos, fındık ezmesi, 2 fincan çay",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tatlılar",
    sub_category: [],
  },
  {
    id: 3,
    name: "Tereyağlılar",
    sub_category: [],
  },
  {
    id: 4,
    name: "İçecekler",
    sub_category: [],
  },
];
