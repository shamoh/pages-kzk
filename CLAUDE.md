# CLAUDE.md

Osobní stránka a portfolio (česky), https://kacka.kramolis.cz. Zatím ochutnávka s fiktivním jménem „Rachel“
a ukázkovými pracemi: žádné skutečné jméno ani osobní údaje (věk,
škola, fotky, kontakty), dokud je tam majitelka sama nedá. Má být „wow“, hravá a mladá; hlavně na mobilu a tabletu.

- Astro (statický výstup), vlastní CSS: krémový papír, výrazné barvy, tlusté obrysy a stíny, písma
  Bricolage Grotesque + Caveat (`@fontsource`).
- Portfolio = content collection `src/content/portfolio/*.md`, obrázek vedle souboru (`obrazek: ./x.jpg`, `image()`
  ve schématu `src/content.config.ts`); soubory s `_` na začátku jsou vzory. Filtr se tvoří z hodnot `obor`.
  Přidávání musí jít jen přes web GitHubu (README): nové pole vždy nepovinné, `_vzor.md` s komentáři držet aktuální.
- Texty, koníčky (štítky v „O mně“) a odkazy v `src/site.ts`. Prohlížeč obrázků `Lightbox.astro` (`<dialog>`, přeskakuje práce skryté filtrem).
- Node.js ≥ 24 (`engines`), ve workflow `node-version: 24`.
- Deploy: GitHub Actions → GitHub Pages z `main` (`.github/workflows/deploy.yml`), doména v `public/CNAME`.
