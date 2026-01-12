export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  featuredImage: string;
  images: string[];
  content: string;
  pros: string[];
  cons: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Novostavba vs. Rekonstrukce: Co zvolit?",
    description: "Detailní porovnání stavby na zelené louce a obnovy staršího objektu. Zjistěte, co je pro vaši budoucnost výhodnější.",
    slug: "novostavba-vs-rekonstrukce",
    date: "12. ledna 2026",
    author: "Ing. Jan Novák",
    featuredImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503387762-592dea58db21?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541913054-21149ceb2170?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800"
    ],
    content: `Rozhodnutí mezi stavbou nového domu a rekonstrukcí staršího objektu patří k nejtěžším krokům v životě každého stavebníka. Novostavba nabízí čistý štít – můžete si navrhnout dispozice přesně podle svých představ, využít nejmodernější technologie a dosáhnout pasivního energetického standardu. Vše je nové, se zárukou a bez skrytých vad. Na druhou stranu, získání stavebního povolení na "zelené louce" může být běh na dlouhou trať a cena pozemků v žádaných lokalitách neustále roste.

Rekonstrukce má své nezaměnitelné kouzlo. Staré domy mají duši, vzrostlou zahradu a často se nacházejí v centrech obcí s kompletní infrastrukturou. Rekonstrukci lze navíc provádět po etapách, což lépe vyhovuje průběžnému financování. Musíte však počítat s tím, že po odkrytí první zdi vás může čekat nepříjemné překvapení v podobě vlhkosti nebo statických trhlin. Harmonogram a rozpočet jsou u rekonstrukcí často jen orientační.`,
    pros: [
      "Možnost navrhnout si vše od nuly",
      "Vysoká energetická účinnost a moderní technologie",
      "Nižší náklady na budoucí údržbu",
      "Jasné záruky na provedené práce"
    ],
    cons: [
      "Vysoká počáteční investice do pozemku a sítí",
      "Často delší administrativní proces",
      "Absence vzrostlé zeleně a historie místa",
      "Stavební ruch v okolí u nových lokalit"
    ]
  },
  {
    title: "Cihly z Polska: Kvalitní úspora nebo riziko?",
    description: "Analýza dovozu stavebních materiálů z polského trhu. Vyplatí se úspora při nákupu cihel u sousedů?",
    slug: "cihly-z-polska",
    date: "10. ledna 2026",
    author: "Petr Svoboda",
    featuredImage: "https://images.unsplash.com/photo-1590069230005-db393731299c?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1590069230005-db393731299c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541888941255-081d746fd26d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800"
    ],
    content: `Polský trh je pro české stavebníky dlouhodobě lákavý díky nižším cenám, které jsou dány větší konkurencí a nižšími výrobními náklady. U cihel a pórobetonu lze ušetřit i 20–30 % oproti cenám v tuzemských stavebninách. Častou otázkou však zůstává kvalita. Je důležité vědět, že většina velkých polských výrobců (např. Wienerberger Polska, Xella) vyrábí podle stejných evropských norem (CE) jako ti čeští. Z technického hlediska tak k obavám není důvod.

Hlavním úskalím je doprava. Cihly jsou těžký materiál a cena za kamionovou dopravu z vnitrozemí Polska může smazat veškeré úspory. Ideální je nákup v příhraničních oblastech nebo při odběru celých kamionových sestav (cca 24 tun). Také je nutné pamatovat na jazykovou bariéru při případných reklamacích a rozdílné rozměry některých typů cihel, které nemusí přesně odpovídat českým zvyklostem.`,
    pros: [
      "Výrazně nižší pořizovací cena materiálu",
      "Dodržování stejných evropských norem kvality",
      "Široká dostupnost a rychlost dodání v příhraničí",
      "Možnost nákupu i doplňkového materiálu levněji"
    ],
    cons: [
      "Vysoké náklady na dopravu při dlouhých vzdálenostech",
      "Komplikovanější řešení případných reklamací",
      "Nutnost kontroly kompatibility rozměrů",
      "Riziko poškození při dlouhém převozu"
    ]
  },
  {
    title: "Stavba svépomocí vs. s firmou: Realita.",
    description: "Postavit si dům vlastníma rukama, nebo vsadit na profesionály? Porovnáváme čas, finance a stres.",
    slug: "svepomoci-vs-firma",
    date: "8. ledna 2026",
    author: "Ing. Jan Novák",
    featuredImage: "https://images.unsplash.com/photo-1541913054-21149ceb2170?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1541913054-21149ceb2170?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1503387762-592dea58db21?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1516156008625-3a9d6067faf5?auto=format&fit=crop&q=80&w=800"
    ],
    content: `Představa ušetřených statisíců korun při stavbě svépomocí je velmi lákavá. Skutečně, cena práce tvoří u rodinného domu 30–50 % nákladů. Musíte však být velmi zruční a mít k dispozici obrovské množství volného času – stavba svépomocí obvykle trvá 3 až 5 let, což klade enormní nároky na psychiku a rodinný život. Navíc každá chyba, kterou uděláte, může být v budoucnu velmi drahá a záruku držíte jen vy sami.

Stavba s profesionální firmou (nebo "na klíč") je rychlá, obvykle hotová do roka. Získáte komplexní záruku na celé dílo a odborný dozor hlídá technologické postupy. Vy se můžete věnovat své práci a rodině. Daní za tento komfort je samozřejmě vyšší cena. Je však důležité si spočítat, zda čas strávený na stavbě není cennější než rozdíl v ceně, který zaplatíte odborníkům.`,
    pros: [
      "Úspora peněz za práci u svépomoci",
      "Maximální kontrola nad materiálem u svépomoci",
      "Rychlost a záruka u profesionální firmy",
      "Minimální stres a volný čas u firmy"
    ],
    cons: [
      "Extrémní časová náročnost u svépomoci",
      "Riziko technologických chyb bez dozoru",
      "Vyšší finanční investice u firmy",
      "Závislost na spolehlivosti dodavatelské firmy"
    ]
  },
  {
    title: "Izolace: Polystyren vs. Minerální vlna.",
    description: "Který izolační materiál je nejlepší pro vaši fasádu? Srovnání vlastností, ceny a použití.",
    slug: "izolace-polystyren-vs-vlna",
    date: "5. ledna 2026",
    author: "Marek Teplý",
    featuredImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621905252870-8e7c1f8ebf1f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1482731235134-598348393527?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
    ],
    content: `Zateplení je klíčové pro tepelnou pohodu i úsporu energií. Bílý nebo šedý polystyren (EPS) je nejčastější volbou díky příznivé ceně a snadné manipulaci. Má vynikající tepelně-izolační vlastnosti, ale je hořlavý a prakticky nepropouští vodní páru, což u starších, vlhčích domů může vést k tvorbě plísní uvnitř.

Minerální vlna (např. Rockwool) je dražší alternativou, která však nabízí unikátní výhody. Je zcela nehořlavá (vhodná pro výškové budovy nebo požární pásy), má skvělé akustické vlastnosti a je difuzně otevřená – dům tedy "dýchá". Je ideální pro rekonstrukce starých domů i pro dřevostavby. Práce s ní je však náročnější na přesnost a ochranu zdraví při instalaci.`,
    pros: [
      "Polystyren: Levný a lehký materiál",
      "Vlna: Požární bezpečnost a nehořlavost",
      "Vlna: Skvělá zvuková izolace",
      "Vlna: Prodyšnost materiálu (difuze)"
    ],
    cons: [
      "Polystyren: Nízká prodyšnost a odolnost ohni",
      "Vlna: Výrazně vyšší cena (cca o 50-80 %)",
      "Vlna: Vyšší hmotnost a náročnost na kotvení",
      "Vlna: Citlivost na navlhnutí při skladování"
    ]
  },
  {
    title: "Stavba na nezasíťovaném pozemku: Právní postup.",
    description: "Jak získat stavební povolení na pozemku, který ještě není v územním plánu jako stavební.",
    slug: "nezasitovany-pozemek-povoleni",
    date: "2. ledna 2026",
    author: "JUDr. Martin Krátký",
    featuredImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    ],
    content: `Koupit levně louku a doufat, že z ní bude stavební pozemek, je riskantní strategie. Prvním krokem je vždy prostudování Územního plánu obce. Pokud pozemek není veden jako "Plocha pro bydlení", musíte požádat o změnu územního plánu, což trvá minimálně 12–24 měsíců a výsledek není nikdy zaručen. 

I když je pozemek v územním plánu, neznamená to, že je zastavitelný. Klíčová je dopravní dostupnost a inženýrské sítě. Pokud k pozemku nevede veřejná cesta nebo chybí přípojky, musíte je na vlastní náklady vybudovat. To vyžaduje složitou projektovou dokumentaci a souhlas mnoha dotčených orgánů. Často je nutné uzavřít s obcí plánovací smlouvu, kde se zavážete k určité investici do infrastruktury.`,
    pros: [
      "Nižší nákupní cena nezasíťovaného pozemku",
      "Možnost získat pozemek ve výjimečné lokalitě",
      "Potenciál vysokého zhodnocení po zasíťování",
      "Svoboda při plánování vlastní infrastruktury"
    ],
    cons: [
      "Extrémně dlouhá a nejistá byrokracie",
      "Vysoké náklady na vybudování sítí a cest",
      "Riziko zamítnutí územního plánu",
      "Nutnost zajištění souhlasů sousedů a obce"
    ]
  }
];
