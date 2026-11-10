---
titolo: "Analisi territoriale della sicurezza stradale e dello sviluppo infrastrutturale in Spagna (2015-2023)"
tipo: "universitario"
inizio: 2026-02
fine: 2026-02
strumenti: ["QGIS", "Data Plotly"]
ruolo: "Autore unico (elaborato individuale)"
risultato: "Nel 2023, tra le 17 Comunidades Autónomas, le regioni con meno autostrade sono quelle con gli incidenti più gravi: l'indice va da 0,74 (Madrid) a 3,28 (Extremadura)"
tag: ["GIS", "QGIS", "cartografia", "analisi territoriale", "Eurostat"]
immagine: "/immagini/spagna-sicurezza-stradale-mappe.png"
in_evidenza: false
bozza: false
---

## Problema
In Spagna, dove ci sono più autostrade gli incidenti stradali sono meno gravi? Ho confrontato le 17 Comunidades Autónomas, più Ceuta e Melilla, con dati Eurostat dal 2015 al 2023. Nel 2023 le regioni interne, con poche autostrade, hanno gli incidenti più gravi; Madrid, Cataluña e País Vasco i meno gravi.

## Approccio e metodo
Ho costruito due indicatori: indice di gravità (morti su morti più feriti, in percentuale) e chilometri di autostrada ogni 1.000 km². In QGIS ho unito le tabelle Eurostat ai confini NUTS 2, riproiettato in EPSG:3035 e prodotto due mappe coropletiche a cinque classi (quantili). Con la funzione Atlas ho generato un atlante di 19 pagine, una per regione, con mappa, tabella e grafici (plugin Data Plotly).

![Due mappe della Spagna per regione: indice di gravità degli incidenti e densità di autostrade nel 2023](/immagini/spagna-sicurezza-stradale-mappe.png)
*Più scuro a sinistra significa incidenti più gravi; più scuro a destra significa più autostrade. Le regioni interne sono scure a sinistra e chiare a destra.*

## Risultato
Nel 2023 l'indice va da 0,74 (Madrid) a 3,28 (Extremadura). Tra le 17 Comunidades l'associazione con la densità autostradale è negativa; Ceuta e Melilla, senza autostrade e con pochissimi casi, fanno eccezione. L'analisi è descrittiva: non considera traffico, tipo di strada e popolazione, e non dimostra che le autostrade riducano la mortalità. Nel tempo non emerge un trend chiaro.

![Pagina dell'atlante dedicata all'Extremadura](/immagini/spagna-sicurezza-stradale-extremadura.png)
*Una regione con poche autostrade: l'indice di gravità oscilla tra 2 e 3,3 in tutti gli anni.*

![Pagina dell'atlante dedicata alla Comunidad de Madrid](/immagini/spagna-sicurezza-stradale-madrid.png)
*La regione con più autostrade: l'indice resta sotto 1 per tutto il periodo.*

## Cosa ho imparato
So costruire indicatori territoriali da dati Eurostat, unirli a geometrie, scegliere proiezione e classi, e impaginare mappe e atlanti in QGIS. So anche controllare i dati e dichiararne i limiti.

Dati: Eurostat.
