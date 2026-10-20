---
titolo: "Analisi di serie storiche multivariate su dati economici della Spagna"
tipo: "universitario"
inizio: 2025-12
fine: 2026-01
strumenti: ["R", "Quarto"]
ruolo: "Autore unico"
risultato: "Il PIL anticipa investimenti e tassi a breve; un VAR(1) prevede gli investimenti 2020–2025 un po' meglio di un ARIMA (RMSE 0,078 contro 0,081)."
tag: ["statistica", "serie storiche", "econometria", "R", "var"]
link:
  - etichetta: "Repository"
    url: "https://github.com/giraG02/serie-storiche-spagna"
report: "/report/serie-storiche-spagna.pdf"
immagine: "/immagini/spagna-previsioni.png"
in_evidenza: false
bozza: false
---

## Problema
Chi anticipa chi: PIL, investimenti o tassi di interesse? Ho analizzato i dati trimestrali della Spagna (1995–2025). Il PIL anticipa investimenti e tassi a breve; gli investimenti non risultano anticipare nessuna delle altre serie.

![Schema delle relazioni di Granger tra PIL, investimenti, tasso a breve e tasso a lungo](/immagini/spagna-granger.png)

## Approccio e metodo
Dati Eurostat (tassi dell'area euro). Stima fino al 2019, verifica dal 2020 per escludere il Covid. In R: test ADF, VAR(1) con causalità di Granger, risposte all'impulso, cointegrazione di Johansen, funzione di trasferimento; previsioni degli investimenti confrontate con un ARIMA.

## Risultato
Il VAR(1) prevede gli investimenti meglio dell'ARIMA (RMSE 0,078 contro 0,081), il VECM peggio (0,181), forse per la rottura causata dal Covid. Limiti: residui non normali, eteroschedasticità nel PIL, shock Covid imprevedibile.

## Cosa ho imparato
So impostare in R un'analisi multivariata di serie storiche, dalla stazionarietà alla previsione, e confrontare i modelli su un periodo di verifica separato.