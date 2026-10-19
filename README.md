# kacka.kramolis.cz

Tvoje vlastní stránka a portfolio. Je postavená v [Astru](https://astro.build) a GitHub ji sám zveřejní po každé
změně ve větvi `main`. Nemusíš nic instalovat: všechno jde upravit přímo tady na GitHubu, v prohlížeči i na mobilu.

## Přidat práci do portfolia (3 minuty)

1. Otevři složku [`src/content/portfolio`](src/content/portfolio).
2. Klikni na **Add file → Upload files** a nahraj obrázek (jpg, png nebo webp). Pojmenuj ho jednoduše, bez mezer
   a diakritiky, třeba `moje-kocka.jpg`. Nemusíš ho zmenšovat, web si udělá menší verze sám.
3. Otevři soubor `_vzor.md` a zkopíruj jeho obsah.
4. Ve složce klikni na **Add file → Create new file**, pojmenuj ho stejně jako obrázek, jen s `.md`
   (`moje-kocka.md`), vlož vzor a přepiš hodnoty: název, `obrazek: ./moje-kocka.jpg`, obor, rok, techniku.
5. Dole klikni na **Commit changes**. Za minutu je práce na webu.

`obor` (kresba, grafika, ilustrace, foto…) si vymýšlíš sama: z oborů se na webu samy udělají tlačítka filtru.

Ukázkové práce (`ukazka-*.md` a `ukazka-*.jpg`, na webu mají štítek „ukázka“) smaž, až budeš mít první vlastní:
otevři soubor, vpravo nahoře **⋯ → Delete file**.

## Změnit texty

Jméno, úvodní text, nálepky kolem jména, slova v běžícím pásu, text „O mně“ s koníčky a odkazy (Instagram, Behance…)
jsou v [`src/site.ts`](src/site.ts). Odkaz se na webu ukáže, jakmile u něj vyplníš `url`.

## Když se něco pokazí

Když web nepůjde postavit (třeba se jméno obrázku v `.md` neshoduje s nahraným souborem), na webu zůstane
poslední funkční verze a v záložce **Actions** uvidíš červený křížek s popisem chyby. Oprav to a ulož znovu.

## Pro pokročilé: lokálně na počítači

Potřebuješ Node.js 24 nebo novější.

```shell
npm install
npm run dev       # web na http://localhost:4321, změny vidíš hned
npm run build     # hotový web do dist/
```

Struktura:

```
src/site.ts                  texty a odkazy
src/content/portfolio/       práce: obrázek + .md soubor se stejným jménem (_vzor.md je vzor)
src/content.config.ts        co může práce obsahovat
src/pages/index.astro        úvodní stránka (úvod, portfolio, o mně)
src/components/Lightbox.astro  prohlížeč obrázků
src/styles/global.css        barvy a písma
public/                      soubory beze změny (CNAME = doména, favicon)
```
