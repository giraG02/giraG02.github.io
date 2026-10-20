---
titolo: "Replica di Zheng & Wang (2024) sull'impatto economico di Fukushima con il controllo sintetico"
tipo: "universitario"
inizio: 2025-12
fine: 2026-01
strumenti: ["R", "Quarto", "Synth", "augsynth"]
ruolo: "Progetto di gruppo (con A.C. Mattazzi e G. Tossici). Mio contributo: gran parte del codice R dell'analisi."
risultato: "Replicati pesi, medie dei predittori e test principali del paper; documentate le differenze nel filtro placebo e negli intervalli di confidenza."
tag: ["inferenza causale", "controllo sintetico", "replica", "R"]
report: "/report/GirardiMattazziTossici_pubblico.pdf"
link:
   - etichetta: "Presentazione (PDF)"
     url: "/report/Presentazione_Fukushima_compressa.pdf"
in_evidenza: false
bozza: false
---

## Problema
Come si misura il danno economico di un evento come l'incidente nucleare di Fukushima (2011)? Serve stimare cosa sarebbe successo senza incidente. Con due colleghe ho replicato lo studio di Zheng e Wang (2024) per verificare se i risultati reggono.

## Approccio e metodo
Controllo sintetico in R (Synth): una "Fukushima sintetica" costruita pesando 21 prefetture non colpite. Verifiche con placebo nel tempo e nello spazio, sensitività e intervalli di confidenza (conformal, augsynth). Intervalli di Firpo e Possebom calcolati con la funzione di Possebom.

## Risultato
Pesi, medie dei predittori e test coincidono con il paper, che stima un calo del 14,4% nel 2012 e un gap quasi chiuso nel 2013. Differenze: nel filtro placebo restano 8 prefetture invece di 7 (Okayama in più) e gli intervalli di Firpo e Possebom non convergono con il 2011 come anno di trattamento.

## Cosa ho imparato
So leggere un paper, riprodurne l'analisi in R e documentare dove i risultati divergono.