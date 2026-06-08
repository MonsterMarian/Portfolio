// Všech 64 stavů posuvníku "tlačení na pilu" – od lhostejného po hyper-agresivní
// Každý stav mění vždy jen malou část textu — stejně jako na getcoleman.com
const states = [
  {
    html: `Takže jo, jsem junior developer. No a co jako?`,
    css: false
  },
  {
    html: `Jestli potřebujete juniora, můžete mi napsat. Nebo taky ne.`,
    css: false
  },
  {
    html: `Jestli potřebujete juniora, můžete mi zkusit napsat. Je to na vás.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte juniora, možná bych stál za zkoušku. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/uspechy">motivovaného</a> juniora, možná bych stál za zkoušku. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte celkem <a href="/uspechy">motivovaného</a> juniora, možná bych stál za zkoušku. Myslím, že moje projekty jsou slušné, ale třeba to není váš styl. Posuďte sami.`,
    css: false
  },
  {
    html: `Klidně to ignorujte, ale jestli sháníte <a href="/uspechy">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou slušné a zvládnu věci od webových aplikací po databáze. Posuďte sami.`,
    css: false
  },
  {
    html: `Jestli sháníte <a href="/uspechy">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou slušné a zvládnu věci od webových aplikací po databáze. Třeba to není váš styl — ale třeba jo.`,
    css: false
  },
  {
    html: `Jestli sháníte <a href="/uspechy">motivovaného</a> juniora, možná bych stál za zkoušku. Moje projekty jsou dost dobré a zvládnu věci od webových aplikací po databáze. Třeba to není váš styl — ale třeba jo.`,
    css: false
  },
  {
    html: `Jestli sháníte <a href="/uspechy">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou dost dobré a zvládnu věci od webových aplikací po databázové návrhy. Sám si ve volném čase stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">vlastní aplikace</a>.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/uspechy">motivovaného</a> juniora, stojím za zkoušku. Moje projekty jsou dost dobré a zvládnu věci od webových aplikací po databázové návrhy. Sám si ve volném čase stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">vlastní aplikace</a>.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/uspechy">motivovaného</a> juniora, stojím za zkoušku. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">projekty</a> jsou dost dobré a zvládnu věci od webových aplikací po databázové návrhy. Ve volném čase si stavím vlastní neuronové sítě, takže asi nebude špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/uspechy">motivovaného</a> juniora, stojím za zkoušku. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">projekty</a> jsou fakt dobré a zvládnu věci od webových aplikací po databázové návrhy. Ve volném čase si stavím vlastní neuronové sítě, takže asi nebude špatné.`,
    css: false
  },
  {
    html: `Jestli potřebujete <a href="/uspechy">motivovaného</a> juniora, stojím za zkoušku. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">projekty</a> jsou fakt dobré a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým — od vývoje po bezpečnost.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">projekty</a> jsou fakt dobré a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým — od vývoje po bezpečnost.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují. Zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým — od vývoje po bezpečnost.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují. Zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým — od vývoje, přes kybernetiku, po strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují. Mám slušnou řádku <a href="/uspechy">zkušeností</a> a zvládnu věci od webových aplikací po databázové návrhy. Každý den se zabývám něčím novým — od vývoje, přes kybernetiku, po strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují. Mám slušnou řádku <a href="/uspechy">zkušeností</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým — od vývoje, přes kybernetiku, po strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám slušnou řádku <a href="/uspechy">zkušeností</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým — od vývoje, přes kybernetiku, po strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám bohaté <a href="/uspechy">zkušenosti</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Každý den se zabývám něčím novým — od vývoje, přes kybernetiku, po strojové učení.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Mám bohaté <a href="/uspechy">zkušenosti</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každému projektu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/uspechy">od střední školy</a> a zvládnu věci od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každému projektu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/uspechy">od střední školy</a> a zvládnu vše od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každému projektu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/uspechy">od střední školy</a> a zvládnu vše od webových aplikací po vlastní databázové architektury. Svůj přístup přizpůsobím každé spolupráci.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/uspechy">od střední školy</a> a zvládnu vše od webových aplikací po databázové architektury a API. Svůj přístup přizpůsobím každé spolupráci.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. V oboru se pohybuji <a href="/uspechy">od střední školy</a> a zvládnu vše od webových aplikací po databázové architektury a API. Proto se na mě obracejí spolužáci i lidé mimo školu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a mám zkušenosti s Javou, C#, Pythonem a JavaScriptem. Zvládnu vše od webových aplikací po databázové architektury. Proto se na mě obracejí spolužáci i lidé mimo školu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a mám solidní zkušenosti s Javou, C#, Pythonem a JavaScriptem. Zvládnu vše od webových aplikací po databázové architektury. Proto se na mě obracejí spolužáci i lidé mimo školu.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer. Stavím <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">aplikace a systémy</a>, které reálně fungují a řeší skutečné problémy. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a mám solidní zkušenosti s Javou, C#, Pythonem a JavaScriptem. Zvládnu vše od webových aplikací po databázové architektury. Pracuji přímočaře a bez zbytečného keců.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer, který vám pomůže postavit funkční aplikace a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Zvládnu vše od webových aplikací po databázové architektury. Pracuji přímočaře a bez zbytečného keců.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer, který vám pomůže postavit funkční aplikace a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Zvládnu vše od frontendu po databázové architektury. Pracuji přímočaře a analyticky.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Zvládnu vše od frontendu po databázové architektury. Pracuji přímočaře a analyticky.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě i OSINT nástroje. Jsem flexibilní a zvládnu vše od frontendu po databázové architektury. Pracuji přímočaře a analyticky.`,
    css: false
  },
  {
    html: `Ahoj. Jsem Marian Vystavěl. Jsem junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend. Pracuji přímočaře a analyticky.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem Marian Vystavěl – junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Vystudoval jsem <a href="https://www.spsejecna.cz/" target="_blank" rel="noopener noreferrer">SPŠE Ječná</a> a moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem Marian Vystavěl – junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend.`,
    css: false
  },
  {
    html: `<strong>Prvotřídní kód. Analytické myšlení. Přímočará komunikace.</strong><br>Ahoj. Jsem vysoce <a href="/uspechy">motivovaný</a> junior developer, který vám pomůže postavit funkční aplikace, vyřešit technické problémy a rozjet projekty od nuly. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci nebo vyřešit technický problém?</strong><br>Samozřejmě, že ano. Ozvěte se a zapojte moje zkušenosti do svých služeb. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Ozvěte se a zapojte moje zkušenosti do svých služeb. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Ozvěte se a zapojte moje zkušenosti do svých služeb. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Chcete postavit funkční aplikaci, vyřešit technický problém nebo rozjet projekt od nuly?</strong><br>Samozřejmě, že ano. Tak se ozvěte hned teď a zapojte moje zkušenosti do svých služeb. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce.`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi ještě dnes a pojďme rozjet váš projekt.</strong>`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se hned teď a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi HNED a pojďme rozjet váš projekt.</strong>`,
    css: false
  },
  {
    html: `<strong>Doručuji funkční kód. Řeším reálné problémy. Myslím analyticky.</strong><br>Ozvěte se HNED TEĎ a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi HNED a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>Ozvěte se HNED TEĎ a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí výsledky. <strong>Napište mi HNED a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>Ozvěte se HNED a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>Zarezervujte si mě. Než to udělá váš konkurent.</strong><br>OZVĚTE SE HNED a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong>ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VÁŠ KONKURENT.</strong><br>OZVĚTE SE HNED TEĎ a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">ZAREZERVUJTE SI MĚ. NEŽ TO UDĚLÁ VÁŠ KONKURENT.</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> zahrnuje webové aplikace, vlastní neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>OZVĚTE SE HNED TEĎ NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. Moje <a href="https://github.com/MonsterMarian" target="_blank" rel="noopener noreferrer">práce</a> prokazatelně funguje – webové aplikace, neuronové sítě, OSINT nástroje i databázové architektury. Jsem neuvěřitelně flexibilní a zvládnu vše od frontendu po backend. Proto se na mě obracejí ti, kteří chtějí věci dotáhnout do konce. <strong>Napište mi HNED a získejte moje know-how.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují – webové aplikace, neuronové sítě, OSINT nástroje, databázové architektury. Jsem PROKAZATELNĚ flexibilní a orientovaný na výsledky. <strong>Zavolejte mi HNED na 730 939 804 a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. <strong>Zavolejte mi HNED na 730 939 804 a pojďme na to.</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. Získejte moje know-how pro sebe. <strong>Zavolejte mi HNED na 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. Porazte konkurenci a <strong><a href="mailto:mvystavel@seznam.cz">napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. JEDNEJTE HNED a vyfoukněte termín své konkurenci. <strong><a href="mailto:mvystavel@seznam.cz">Napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  },
  {
    html: `<strong class="red">FIRMA, SE KTEROU SOUTĚŽÍTE O ZAKÁZKU, BY SI MĚ MOHLA NAJMOUT.<br>RISKUJETE TO?</strong><br><strong>KONTAKTUJTE MĚ HNED NA ČÍSLE 730 939 804</strong> a získejte moje technické zkušenosti na svou stranu. PROKAZATELNĚ stavím věci, které fungují. PROKAZATELNĚ analytický přístup. PROKAZATELNĚ flexibilní. PROKAZATELNĚ orientovaný na výsledky. JEDNEJTE HNED a vyfoukněte termín své konkurenci. <strong class="red"><a href="mailto:mvystavel@seznam.cz">Napište mi</a> HNED nebo volejte 730 939 804</strong>`,
    css: false
  }
];

export default states;
