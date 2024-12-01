## 1. (0.75 punts) Quina ordre has d'utilitzar per crear un nou projecte Angular utilitzant Angular CLI anomenat ecommerce? (A les preguntes que us faci Angular CLI pots contestar utilitzant les opcions per defecte). Amb Angular Cli crea el projecte angular ecommerce i explica breument l'estructura i els fitxers que ha generat Angular CLI: ## 

Per crear un nou projecte anomenat ecommerce, és te que utilizar la commanda `ng new ecommerce --no-strict --standalone=false`.


- Fitxers de configuració a l'arrel del projecte:
  - **tsconfing.app.json**: configuració dels fitxers `TypseScript` en el entorn de treball.
  - **angular.json**: configuracions per defecte de Angular CLI aplicades en el entorn de treball
  - **package.json**: congiracions de dependencies dels paquest `npm`.
  - **.editorconfig**:configuracions per als editors de codi (IDE's).
  - **.gitignore**: difineix regles de carpetes i fitxers ignorats per Git.

- **Directori node_modules**: conté tots les llibreries npm disponibles per tot l'entorn de treball.
- **Directori src:**: Directori que conte els fitxers del projecte.
  - **index.html**: Plantilla principal de l'aplicació.
  - **main.ts**: punt d'entrada de l'aplicació.
  - **styles.css**: ficher d'estils globals de l'aplicació.
  - **Directori assets**: Directori on es guarden elements utilizats per l'aplicació com imatges, videos ... 
  - **Directori app**: Directori on es difineix la logica i dades de l'aplicació.
    - __Fitxers app.component.*__: defineix la lógica i configuració de `AppComponent` de l'arrel.
    - **Fitxers app.module.ts**:defineix el módulo arrel `AppModule` utilitzat en la contrucció del projecte.

## 2. (0.25 punts) Explica cadascun dels següents decoradors generats per Angular CLI, detallant cadascuna de les propietats que es defineixen a:## 
- **app.module.ts - @NgModule (declarations, imports, providers, bootstrap).**
El decorador @NgModule s'utiliza per la defincio d'un modul de Angular, transformant la classe a comportatse com a modul amb les seves propietats:
    - **declarations:** defineix els components i directives que podran ser utilizats en el modul de l'aplicació
    - **imports:** declara la importació de movuls externs utilizats pels components del modul.
    - **providers:** indica quin seran els objectes que podran ser injectats en els components o directives
    - **bootstrap:** defines el compoent que actua com a punt d'entrada de l'aplicació
  
- **app.component.ts - @Component (selector, templateUrl, styleUrls).**
Aquest decorador transforma la classe per compoartes com un compentnet d'Angular amb els parametres:
  - **selector:** etiqueta que s'utlizar per donar nom al component
  - **templateUrl:** Plantilla html del component.
  - **styleUrls:** fitxer d'estils del component.

## 3. (0.25 punts) És possible poder injectar el template i els estils en línia d'un component sense necessitat d'especificar-los a templateUrl, styleUrls? És recomanable fer-ho?##
Es totalment possible utlizant els atributs `template` en lloc de `templateUrl` i `styles` en lloc de `stylesUrls`, en cara que solament s'hauria d'utilizar en casso que el codi sigui molt reduit i amb poques lines de codi.