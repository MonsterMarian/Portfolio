// Všech 64 stavů posuvníku "tlačení na pilu" – od lhostejného po hyper-agresivní
// Každý stav obsahuje HTML obsah a volitelný inline CSS
const states = [
  {
    html: `Takže jo, jsem student IT. No a co jako?`,
    css: false
  },
  {
    html: `Jestli potřebujete juniora, můžete mi napsat. Nebo taky ne.`,
    css: false
  },
  {
    html: `Jestli potřebujete juniora, můžete mi zkusit napsat. Je to celkem na vás.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte juniora, možná bych stál za zkoušku. Myslím, že moje projekty jsou celkem slušné, ale třeba to není úplně váš styl. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/cv">motivovaného</a> juniora, možná bych stál za zkoušku. Myslím, že moje projekty jsou celkem slušné, ale třeba to není váš styl. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/cv">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou obvykle celkem slušné a zvládnu věci od webových aplikací po databázové systémy. Moje technická řešení nemůžou být úplně marná, jinak by mě spolužáci a učitelé pořád neprosili o pomoc.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou obvykle celkem slušné a zvládnu věci od webových aplikací po databázové systémy. Moje technická řešení nemůžou být úplně marná, jinak by mě spolužáci a učitelé pořád neprosili o pomoc.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou dost dobré a zvládnu věci od webových aplikací po databázové systémy. Moje technická řešení nemůžou být úplně marná, jinak by mě lidé kolem pořád neprosili o pomoc.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou dost dobré a mám za sebou i pár <a href="/projekty">vlastních aplikací</a>. Zvládnu věci od webových aplikací po databázové systémy. Moje technické nápady nemůžou být úplně marné, jinak bych se ve volném čase nepustil do tvorby vlastní <a href="/projekty">neuronové sítě</a>.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou dost dobré a mám za sebou i pár <a href="/projekty">vlastních aplikací</a>. Zvládnu věci od webových aplikací po databázové návrhy. Ve volném čase stavím vlastní <a href="/projekty">neuronovou síť</a>, takže to asi nebude úplně špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou dost dobré a mám za sebou i pár <a href="/projekty">vlastních aplikací</a>. Mám slušnou řádku zkušeností a zvládnu věci od webových aplikací po databázové návrhy. Ve volném čase stavím vlastní <a href="/projekty">neuronovou síť</a>, takže to asi nebude úplně špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou fakt dobré a mám za sebou i pár <a href="/projekty">vlastních aplikací</a>. Mám slušnou řádku zkušeností a zvládnu věci od webových aplikací po databázové návrhy. Studium na SPŠE Ječná mi dalo solidní základ, takže se mnou to nebude tak hrozné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou fakt dobré a mám za sebou i pár <a href="/projekty">vlastních aplikací</a>. Mám za sebou spoustu zkušeností a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým – od vývoje po kybernetickou bezpečnost.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">motivovaného</a> juniora, stojím za zkoušku. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám za sebou spoustu zkušeností a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým – od vývoje po kybernetickou bezpečnost a OSINT.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám za sebou spoustu <a href="/cv">zkušeností</a> a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti a umělé inteligence.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti, OSINTu a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti, OSINTu a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti, OSINTu a strojového učení. Pracuji s některými z nejzajímavějších technologií v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám bohaté <a href="/cv">zkušenosti</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti, OSINTu a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám bohaté <a href="/cv">zkušenosti</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým a pohybuji se v prostoru vývoje, kybernetické bezpečnosti, OSINTu a strojového učení. Záleží mi na tom, aby věci fungovaly – ne jen navenek, ale i pod povrchem.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám bohaté <a href="/cv">zkušenosti</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. V oboru IT se pohybuji od střední školy a každý den se učím něco nového – od vývoje po kybernetickou bezpečnost a strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se učím něco nového – od vývoje po kybernetickou bezpečnost a strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po návrhy databázových architektur a UML modely. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy – jako Activity Planner nebo vlastní neuronová síť. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy – jako Region Beta Activity Planner nebo vlastní neuronová síť. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy – jako Region Beta Activity Planner nebo vlastní neuronová síť. V oboru se pohybuji <a href="/cv">od střední školy</a> a zvládnu vše od webových aplikací po návrhy databázových architektur a API. Spolupracuji na projektech, které dávají smysl, a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a získal jsem zkušenosti v Javě, C#, Pythonu a JavaScriptu. Zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a AI.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a získal jsem solidní zkušenosti s Javou, C#, Pythonem a JavaScriptem. Zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer. Stavím <a href="/projekty">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/cv">od střední školy</a> a získal jsem více než 3 roky praxe s Javou, C#, Pythonem a JavaScriptem. Zvládnu vše od webových aplikací po návrhy databázových architektur. Svůj přístup přizpůsobím každému projektu a pohybuji se v oblasti vývoje, kybernetické bezpečnosti a strojového učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže postavit aplikace a systémy, které reálně fungují. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">projekty</a> sahají od webových aplikací přes vlastní neuronové sítě až po OSINT nástroje. Zvládnu vše od frontendu po databázové návrhy. Svůj přístup přizpůsobím každé spolupráci.`,
    css: false
  },
  {
    html: `Ahoj. Jsem copywriter… ne, pardon. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže postavit aplikace a systémy, které reálně fungují. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">projekty</a> sahají od webových aplikací přes vlastní neuronové sítě až po OSINT nástroje. Zvládnu vše od frontendu po databázové návrhy.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže postavit aplikace a systémy, které reálně fungují. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">projekty</a> sahají od webových aplikací přes vlastní neuronové sítě až po OSINT nástroje. Jsem flexibilní a zvládnu vše od frontendu po databázové návrhy. Zajímá mě, jak věci fungují pod povrchem – ne jen povrchové používání nástrojů.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže vyřešit technické problémy, postavit funkční aplikace a rozjet projekty od nuly. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">projekty</a> sahají od webových aplikací přes vlastní neuronové sítě až po OSINT nástroje. Jsem flexibilní a zvládnu vše od frontendu po databázové architektury.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže vyřešit technické problémy, postavit funkční aplikace a rozjet projekty od nuly. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">projekty</a> sahají od webových aplikací přes vlastní neuronové sítě až po OSINT nástroje. Přizpůsobím se každé spolupráci a zvládnu vše od frontendu po databázové architektury. Proto se na mě obracejí lidé, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT student a junior developer, který vám pomůže vyřešit technické problémy, postavit funkční aplikace a rozjet projekty od nuly. V oboru se pohybuji <a href="/cv">od střední školy</a> a moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Přizpůsobím se každé spolupráci a zvládnu vše od frontendu po databázové architektury. Proto se na mě obracejí lidé, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. V oboru působím <a href="/cv">od střední školy</a> a moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Přizpůsobím se každé spolupráci a zvládnu vše od frontendu po databázové architektury. Pracuji přímočaře a bez zbytečného keců.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem IT junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. V oboru působím <a href="/cv">od střední školy</a> a moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i návrhy databázových architektur. Přizpůsobím se každé spolupráci. Pracuji přímočaře, analyticky a bez zbytečného keců.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem Marian Vystavěl – IT junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. V oboru působím <a href="/cv">od střední školy</a> a moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i návrhy databázových architektur. Přizpůsobím se každé spolupráci a pracuji přímočaře a bez zbytečného keců.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem vysoce <a href="/cv">motivovaný</a> IT junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i návrhy databázových architektur. Přizpůsobím se každé spolupráci a pracuji přímočaře.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem mimořádně <a href="/cv">motivovaný</a> IT junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i návrhy databázových architektur. Jsem extrémně flexibilní a pracuji přímočaře.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Tak se ozvěte a zapojte moje zkušenosti z SPŠE Ječná a vlastních projektů do svých služeb. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě a OSINT nástroje. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po databázové architektury. Proto se na mě obracejí lidé, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Tak se ozvěte a zapojte moje prvotřídní znalosti z SPŠE Ječná a vlastních projektů do svých služeb. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě a OSINT nástroje. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po databázové architektury. Proto se na mě obracejí lidé, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Tak se ozvěte hned teď a zapojte moje prvotřídní znalosti z SPŠE Ječná a vlastních projektů do svých služeb. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě a OSINT nástroje. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po databázové architektury. Proto se na mě obracejí ti nejlepší.`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti z vlastních projektů na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od backendu po frontend. Proto se na mě obracejí ti, kteří chtějí výsledky.`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od backendu po frontend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi ještě dnes a pojďme rozjet váš projekt.</strong>`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od backendu po frontend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi HNED a pojďme rozjet váš projekt.</strong>`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se HNED TEĎ a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od backendu po frontend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi HNED TEĎ a získejte moje know-how pro sebe.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>Ozvěte se hned a získejte moje technické zkušenosti z vlastních projektů na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>Ozvěte se HNED a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>OZVĚTE SE HNED a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VÁŠ KONKURENT.</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VÁŠ KONKURENT.</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje a databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="/projekty">práce</a> prokazatelně funguje – webové aplikace, neuronové sítě, OSINT nástroje i databázové architektury. Je prokazatelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují – webové aplikace, neuronové sítě, OSINT nástroje, databázové architektury. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. <strong>Zavolejte mi HNED na číslo 730 939 804 a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. <strong>Zavolejte mi HNED na číslo 730 939 804 a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. Získejte moje know-how pro sebe. <strong>Zavolejte mi HNED na 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. Porazte konkurenci a získejte termín: <strong><a href="mailto:mvystavel@seznam.cz">napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. JEDNEJTE HNED a vyfoukněte ten termín své konkurenci. <strong class="red"><a href="mailto:mvystavel@seznam.cz">Napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  }
];

export default states;
