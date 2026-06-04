// Všech 64 stavů posuvníku "tlačení na pilu" – od lhostejného po hyper-agresivní
// Každý stav obsahuje HTML obsah a volitelný inline CSS
const states = [
  {
    html: `Takže, jo, jsem copywriter na volné noze. No a co jako?`,
    css: false
  },
  {
    html: `Jestli potřebujete copywritera na volné noze, můžete mi zavolat. Nebo taky ne.`,
    css: false
  },
  {
    html: `Jestli potřebujete copywritera na volné noze, můžete mi zkusit zavolat. Je to celkem na vás.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte copywritera na volné noze, možná bych stál za zkoušku. Myslím, že moje práce je celkem slušná, ale třeba to není úplně váš styl. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/cv">zkušeného</a> copywritera na volné noze, možná bych stál za zkoušku. Myslím, že moje práce je celkem slušná, ale třeba to není váš styl. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/cv">zkušeného</a> copywritera na volné noze, možná bych stál za zkoušku. Moje práce je obvykle celkem slušná a zvládnu většinu věcí od reklamních kampaní po brand booky. Moje kreativní nápady nemůžou být úplně marné, jinak by mě agentury pořád dokola nebookovaly.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">zkušeného</a> copywritera na volné noze, možná bych stál za zkoušku. Moje práce je obvykle celkem slušná a zvládnu většinu věcí od reklamních kampaní po brand booky. Moje kreativní nápady nemůžou být úplně marné, jinak by mě agentury pořád dokola nebookovaly.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">zkušeného</a> copywritera na volné noze, možná bych stál za zkoušku. Moje práce je dost dobrá a zvládnu většinu věcí od reklamních kampaní po brand booky. Moje kreativní nápady nemůžou být úplně marné, jinak by mě agentury pořád dokola nebookovaly.`,
    css: false
  },
  {
    html: `Jestli sháníte celkem <a href="/cv">zkušeného</a> copywritera na volné noze, možná bych stál za zkoušku. Moje práce je dost dobrá a posbíral jsem i pár <a href="/awards">ocenění</a>. Zvládnu většinu věcí od reklamních kampaní po brand booky. Moje kreativní nápady nemůžou být úplně marné, jinak by mě několik různých <a href="/agencies">agentur</a> nebookovalo stále dokola.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">zkušeného</a> copywritera na volné noze, stojím za zkoušku. Moje práce je dost dobrá a posbíral jsem i pár <a href="/awards">ocenění</a>. Zvládnu většinu věcí od reklamních kampaní po brand booky. Pravidelně mě bookuje celá řada reklamních a designových <a href="/agencies">agentur</a>, takže to asi nebude úplně špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">zkušeného</a> copywritera na volné noze, stojím za zkoušku. Moje práce je dost dobrá a posbíral jsem i pár <a href="/awards">ocenění</a>. Mám slušnou řádku zkušeností a zvládnu většinu věcí od reklamních kampaní po brand booky. Pravidelně mě bookuje celá řada reklamních a designových <a href="/agencies">agentur</a>, takže to asi nebude úplně špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">zkušeného</a> copywritera na volné noze, stojím za zkoušku. Moje práce je fakt dobrá a posbíral jsem i pár <a href="/awards">ocenění</a>. Mám slušnou řádku zkušeností a zvládnu většinu věcí od reklamních kampaní po brand booky. Pravidelně mě bookuje široká škála reklamních a designových <a href="/agencies">agentur</a>, takže to se mnou nebude tak hrozné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">zkušeného</a> copywritera na volné noze, stojím za zkoušku. Moje práce je fakt dobrá a posbíral jsem i pár <a href="/awards">ocenění</a>. Mám za sebou spoustu zkušeností a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s širokou škálou reklamních a designových <a href="/agencies">agentur</a>.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/cv">zkušeného</a> copywritera na volné noze, stojím za zkoušku. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám za sebou spoustu zkušeností a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s širokou škálou reklamních a designových <a href="/agencies">agentur</a>.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám za sebou spoustu <a href="/cv">zkušeností</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s širokou škálou reklamních a designových <a href="/agencies">agentur</a>.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s několika velmi známými reklamními a designovými <a href="/agencies">agenturami</a>.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji se spoustou velmi známých reklamních a designových <a href="/agencies">agentur</a>.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám slušnou řádku <a href="/cv">zkušeností</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. Mám bohaté <a href="/cv">zkušenosti</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat nějaká ta <a href="/awards">ocenění</a>. Mám bohaté <a href="/cv">zkušenosti</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat nějaká ta <a href="/awards">ocenění</a>. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Každý den dělám na něčem jiném a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu většinu věcí od reklamních kampaní po brand booky. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand booky. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a>. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a> jako Roses. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a> jako Roses a Clios. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry a sbírat <a href="/awards">ocenění</a> jako D&amp;AD, Clios a Roses. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry, budovat skvělé značky a sbírat <a href="/awards">ocenění</a> jako D&amp;AD, Clios a Roses. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vám pomohou vyhrávat tendry, budovat skvělé značky a sbírat <a href="/awards">ocenění</a> jako D&amp;AD, Clios a Roses. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a zvládnu všechno od reklamních kampaní po brand guidelines. Svůj styl přizpůsobím každé zakázce a spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vyhrávají tendry a budují skvělé značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a získal jsem přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Svůj styl přizpůsobím každé zakázce a zvládnu všechno od reklamních kampaní po brand guidelines. Spolupracuji s některými z nejlepších reklamních a designových <a href="/agencies">agentur</a> v oboru.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vyhrávají tendry a budují skvělé značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a získal jsem přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios and Roses. Svůj styl přizpůsobím každé zakázce a zvládnu všechno od reklamních kampaní po brand guidelines. Mezi mé klienty patří jedny z nejlepších agentur v zemi, včetně Music a Havas Lynx.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vyhrávají tendry a budují skvělé značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a získal jsem přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios and Roses. Svůj styl přizpůsobím každé zakázce a zvládnu všechno od reklamních kampaní po brand guidelines. Spolupracuji s nejlepšími reklamními a designovými <a href="/agencies">agenturami</a> v zemi, včetně Music a Havas Lynx.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vyhrávají tendry a budují skvělé značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a získal jsem přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios and Roses. Svůj styl přizpůsobím každé zakázce a zvládnu všechno od reklamních kampaní po brand guidelines. Spolupracuji s nejlepšími reklamními a designovými <a href="/agencies">agenturami</a> v zemi, včetně Music, Havas Lynx a McCanns.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze. Vymýšlím <a href="/portfolio">slova a koncepty</a>, které vyhrávají tendry a budují skvělé značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a získal jsem přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios and Roses. Svůj styl přizpůsobím každé zakázce a zvládnu všechno od reklamních kampaní po brand guidelines. Spolupracuji s nejlepšími reklamními a designovými <a href="/agencies">agenturami</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem copywriter na volné noze a pomohu vám vyhrávat tendry, sbírat ocenění a budovat skvělé značky. V oboru působím již <a href="/cv">přes 15 let</a> a moje <a href="/portfolio">práce</a> získala přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Svůj styl přizpůsobím každé zakázce a zvládnu vše od ad kampaní po brand guidelines. Spolupracuji s nejlepšími agenturami v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `Ahoj. Jsem copywriter na volné noze, který vám pomůže vyhrát tendry, získat ocenění a vybudovat skvělé značky. V oboru působím již <a href="/cv">přes 15 let</a> a moje <a href="/portfolio">práce</a> získala přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Mezi mé klienty patří nejlepší reklamní a designové <a href="/agencies">agentury</a> v zemi, jako Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní texty pro reklamu a design s razancí zbraně hromadného ničení.</strong><br>Ahoj. Jsem copywriter na volné noze, který vám pomůže vyhrávat tendry, sbírat ocenění a budovat silné značky. V oboru se pohybuji už <a href="/cv">přes 15 let</a> a moje <a href="/portfolio">práce</a> posbírala přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Přizpůsobím se každé zakázce a zvládnu vše od kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní texty pro reklamu a design s razancí zbraně hromadného ničení.</strong><br>Ahoj. Jsem vysoce <a href="/cv">zkušený</a> copywriter na volné noze, který vám pomůže vyhrávat tendry, sbírat ocenění a budovat silné značky. Moje <a href="/portfolio">práce</a> posbírala přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Přizpůsobím se každé zakázce a zvládnu vše od kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní texty pro reklamu a design s razancí zbraně hromadného ničení.</strong><br>Ahoj. Jsem vysoce <a href="/cv">zkušený</a> copywriter na volné noze, který vám pomůže vyhrávat tendry, sbírat ocenění a budovat silné značky. Moje <a href="/portfolio">práce</a> posbírala přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem extrémně flexibilní a zvládnu vše od kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní texty pro reklamu a design s razancí zbraně hromadného ničení.</strong><br>Ahoj. Jsem mimořádně <a href="/cv">zkušený</a> copywriter na volné noze, který vám pomůže vyhrávat tendry, sbírat ocenění a budovat silné značky. Moje <a href="/portfolio">práce</a> posbírala přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem extrémně flexibilní a zvládnu vše od kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Chcete vyhrávat tendry, sbírat ocenění a budovat skvělé značky?</strong><br>Samozřejmě, že ano. Tak se ozvěte a zapojte mých 15 let zkušeností z velkých agentur do svých služeb. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Chcete vyhrávat tendry, sbírat ocenění a budovat skvělé značky?</strong><br>Samozřejmě, že ano. Tak se ozvěte a zapojte mých 15 let prvotřídních zkušeností z nejlepších agentur do svých služeb. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší <a href="/agencies">agentury</a> v zemi, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Chcete vyhrávat tendry, sbírat ocenění a budovat skvělé značky?</strong><br>Samozřejmě, že ano. Tak se ozvěte hned teď a zapojte mých 15 let prvotřídních zkušeností z nejlepších agentur do svých služeb. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">ocenění</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, včetně Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Vyhrávejte tendry. Sbírejte ocenění. Budujte silné značky.</strong><br>Ozvěte se hned teď a získejte mých 15 let zkušeností z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od ad kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns.`,
    css: false
  },
  {
    html: `<strong>Vyhrávejte tendry. Sbírejte ocenění. Budujte silné značky.</strong><br>Ozvěte se hned teď a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od ad kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi ještě dnes a zapojte mých 15 let know-how do hry.</strong>`,
    css: false
  },
  {
    html: `<strong>Vyhrávejte tendry. Sbírejte ocenění. Budujte silné značky.</strong><br>Ozvěte se hned teď a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od ad kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a zapojte mých 15 let know-how do hry.</strong>`,
    css: false
  },
  {
    html: `<strong>Vyhrávejte tendry. Sbírejte ocenění. Budujte silné značky.</strong><br>Ozvěte se HNED TEĎ a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem navíc neuvěřitelně flexibilní a zvládnu cokoli od ad kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED TEĎ a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá vaše konkurenční agentura.</strong><br>Ozvěte se hned a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá vaše konkurenční agentura.</strong><br>Ozvěte se HNED a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá vaše konkurenční agentura.</strong><br>OZVĚTE SE HNED a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VAŠE KONKURENČNÍ AGENTURA.</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VAŠE KONKURENČNÍ AGENTURA.</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> vyhrála přes 30 kreativních <a href="/awards">cen</a> včetně D&amp;AD, Design Week, Clios a Roses. Jsem neuvěřitelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> prokazatelně vyhrává <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. Je prokazatelně flexibilní a zvládnu vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. Moje <a href="/portfolio">práce</a> prokazatelně vyhrává <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. Je prokazatelně flexibilní a zvládne vše od reklamních kampaní po brand guidelines. Proto mě pravidelně bookují nejlepší britské <a href="/agencies">agentury</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED a získejte mých 15 let know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED na číslo 730 939 804 a zapojte mé know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. <strong>Zavolejte mi HNED na číslo 730 939 804 a zapojte mé know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. Získejte 15 let know-how pro sebe. <strong>Zavolejte mi HNED na 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. Získejte 15 let know-how. <strong><a href="mailto:mvystavel@seznam.cz">Napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. Poražte konkurenci a získejte termín: <strong><a href="mailto:mvystavel@seznam.cz">napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. Poražte konkurenci a <strong class="red"><a href="mailto:mvystavel@seznam.cz">napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">AGENTURA, PROTI KTERÉ STOJÍTE V TENDRU, BY SI MĚ MOHLA NAJMOUT.<br>RISKNETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte mé zkušenosti z velkých agentur na svou stranu. PROKÁZANĚ vyhrávám <a href="/awards">ocenění</a>, včetně D&amp;AD, Design Week, Clios a Roses. PROKÁZANĚ dělám radost prestižním klientům. PROKÁZANĚ flexibilní. PROKÁZANĚ úspěšný v nejlepších britských <a href="/agencies">agenturách</a>, jako Music, Havas Lynx, B&amp;W Studio a McCanns. JEDNEJTE HNED a vyfoukněte ten termín své konkurenci. <strong class="red"><a href="mailto:mvystavel@seznam.cz">Napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  }
];

export default states;
