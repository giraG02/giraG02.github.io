---
titolo: "Truth or Dare: social media, text mining e reazioni dei mercati ai post di Trump"
tipo: "universitario"
inizio: 2025-03
fine: 2025-06
strumenti: ["R", "Python"]
ruolo: "Progetto di gruppo (4 persone). Mio contributo: raccolta dei dati di Bluesky e Reddit e analisi dei dati testuali (pulizia, topic modelling, sentiment analysis)"
risultato: "Il confronto tra tre piattaforme mostra reazioni molto diverse agli stessi post, e un rendimento anomalo medio positivo sui titoli USA il 9 aprile 2025."
tag: ["text mining", "sentiment analysis", "topic modelling", "serie storiche", "R"]
report: "/report/truth-or-dare-report.pdf"
immagine: "/immagini/truth-or-dare-copertina.jpg"
in_evidenza: false
bozza: false
---

## Problema
Il 9 aprile 2025 Donald Trump ha scritto su Truth Social "This is a great time to buy" e, in giornata, è stata annunciata una pausa dei dazi. Il gruppo ha chiesto come hanno reagito i mercati e come ne hanno parlato gli utenti online. Le accuse di manipolazione e insider trading sono un'ipotesi dibattuta, che il lavoro non accerta.

## Approccio e metodo
Dati: serie storiche di titoli, ETF e criptovalute (yfinance) e commenti di Truth Social, Bluesky e Reddit. Finanza: rendimenti anomali rispetto a un indice di riferimento e test t. Testi, la mia parte: raccolta dei commenti di Bluesky e Reddit, pulizia, matrice documenti-termini, LDA e sentiment con AFINN, Bing e NRC, confrontati tra piattaforme.

## Risultato
Rendimenti anomali medi positivi sui titoli USA (p = 0,03), non significativi sui titoli esteri. Sentiment prevalentemente negativo su Bluesky e Reddit, più polarizzato su Truth Social.

<figure style="margin:1.5rem 0">
<img src="/immagini/truth-or-dare-anomali-usa.jpg" alt="Rendimenti anomali dei titoli USA il 9 aprile 2025" width="420" />
<figcaption style="font-size:0.85rem;opacity:0.8">Titoli USA: differenza tra il rendimento di ogni titolo e quello dell'indice S&amp;P 500 il 9 aprile 2025. L'effetto maggiore è sul settore tecnologico, più contenuto su banche ed ETF.</figcaption>
</figure>

<figure style="margin:1.5rem 0">
<img src="/immagini/truth-or-dare-anomali-esteri.jpg" alt="Rendimenti anomali dei titoli esteri il 9 aprile 2025" width="420" />
<figcaption style="font-size:0.85rem;opacity:0.8">Titoli esteri: stessa differenza rispetto a un indice azionario mondiale. Salgono i semiconduttori (SOXX, SMH, ASML), scendono le case auto elettriche cinesi (NIO, XPEV, LI) e HSBC; le criptovalute reagiscono in modo misto.</figcaption>
</figure>

<figure style="margin:1.5rem 0">
<img src="/immagini/truth-or-dare-sentiment-bluesky.png" alt="Sentiment dei commenti su Bluesky" width="420" />
<figcaption style="font-size:0.85rem;opacity:0.8">Bluesky: numero di commenti per tono prevalente, secondo il dizionario Bing. Gli oltre 20.000 commenti negativi (barra rossa) superano nettamente i neutri (grigio, circa 13.000) e i positivi (verde, circa 13.000).</figcaption>
</figure>

<figure style="margin:1.5rem 0">
<img src="/immagini/truth-or-dare-topic-bluesky.jpg" alt="Temi dei commenti su Bluesky" width="420" />
<figcaption style="font-size:0.85rem;opacity:0.8">Bluesky: i 7 temi trovati dal modello LDA. Ogni riquadro è un tema e le barre mostrano le parole più probabili al suo interno, per esempio "tariff" e "pause" (dazi), "market", "stock" e "manipulate" (mercati), "china" e "trump", "economy" e "bond", fino a un tema di opinioni personali ("think", "everyone").</figcaption>
</figure>

## Cosa ho imparato
Ogni piattaforma ha un pubblico diverso, i dizionari non colgono il sarcasmo, i commenti con sole immagini sono esclusi e altri eventi possono pesare. So raccogliere, pulire e analizzare dati testuali, leggere i risultati in modo critico e dichiarare ciò che non si può concludere.
