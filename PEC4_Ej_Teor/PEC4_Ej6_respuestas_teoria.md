### 1. Quins són els style encapsulation dels components? Poseu un exemple d'ús de cadascun. ###
Els style encapsulation són els 3 següents:

- **ViewEncapsulation.Emulated**: es tracta d'una encapsulació que s'aplica per defecte als components. Angular simula el comportament Shadow DOM i modifica els selectors CSS del mateix component pel qual els estils s'apliquin únicament al mateix component. En ser una simulació del Shadow DOM el component continua sent visible per poder aplicar estils globals `@Component({..., encapsulation: ViewEncapsulation.Native })`
  
- **ViewEncapsulation.ShadowDom**: Angular amb Shadow DOM, utilitza la implementació del mateix navegador on s'està executant l'aplicació. D'aquesta manera s'obté un encapsulament aïllat dels estils del component. Seria l'opció per a quan volem que els estils globals no afectin a aquest component. `@Component({..., encapsulation: ViewEncapsulation.ShadowDom })`
   
- **ViewEncapsulation.None**: En aquest cas, Angular no aplica cap mena d'encapsulació de vista, llavors els estils que s'apliquen al component queden accessibles de forma global, per tant, podria ser una opció ideal quan es vol compartir estils entre components. `@Component({..., encapsulation: ViewEncapsulation.None })`

### 2. Què és el shadow DOM? ### 
El shadow DOM és una propietat de ViewEncapsulation que ens permet ocultar elements de manera que no sigui visible per a la resta del document. Tot això ens permet la encapsulació d'estils, perquè tots els elements dintre de shadow root, no seran detectats pels estils globals. Llavors aquest estil no s'aplicaran als components o elements que estiguin dintre de l'arbre de shadow root.

### 3. Què és el `changeDetection`? ###
ChangeDetection és una propietat del component d'Angular, que permet establir i aplicar un millor dinamisme entre els components, cosa que permet quan realitzar l'actualització dels bindings. Per defecte angular comprava cada binding dels components de la vista, on compara els valors actuals amb els anteriors per detectar per si hi ha canvis a aplicar.

### 4. Quines diferències hi ha entre les estratègies *`Default`* i *`OnPush`*? Quan has d'usar una i altra? Avantatges i inconvenients. ###
Per defecte Angular aplica l'estratègia `Default`, que és el comportament de detecció de canvis que aplica Angular per defecte. Aquesta estratègia es basa en el fet que sempre que hi hagi una modificació en l'arbre de component, Angular revisarà un per un cada element de l'arbre per realitzar i canviar la vista, aquest comportament serà acceptable per la gran majoria d'aplicació.

Per altra banda, podem tenir aplicacions que continguin una gran quantitat de components, l'estratègia per defecte es pot tenir un impacte negatiu en el rendiment global, per culpa de recórrer tots els components de l'arbre i comprar amb els valors actuals i anteriors. Per això Angular té l'opció de l'estratègia de `OnPush`, que informa a Angular de realitzar la comprovació dels canvis durant la renderització inicial o només quan els valors del component canvi passar per l'anotació `@Input`. Aquesta estratègia permet millor significativament el rendiment global de l'aplicació, és una bona opció per utilitzar amb components i dades que han de ser immutables o solament canviar quan es desitgi. 

### 5. Explica detalladament el cicle de vida dels components. Fes èmfasi en quan es disparen els hooks *`OnChanges`*, *`OnInit`*, *`AfterViewInit`* i *`OnDestroy`*, ja que són els més utilitzats. ###
Els components d'Angular tenen el seu propi cicle de vida, des de la creació, la representació, la modificació i la destrucció.
El punt inicial del cicle de vida comença amb el constructor, on és realment on és crear dit component. Una vegada creat podem començar a utilitzar el seu cicle de vida, també anomenat _lifecycle hooks_. Els cicles de vida tenen el següent ordre:

- **ngOnChanges()**: és el primer en la llista del cicle de vida, és cridat immediatament després del constructor, i sempre que Angular detecti canvis amb els bindings `@Input` del component.  
- **ngOnInit()**: s'executa una única vegada, a continuació del _hook_ `OnChange`. És on s'inicialitzen habitualment les propietats del component, o on es carreguen les dades del servidor.
- **ngDoCheck()**: és on podem detectar canvis, que s'han produït i que no poden ser detectats per Angular automàticament. Amb el canvi d'estratègia a `OnPush`.
- **ngAfterContent​Init()**: s'executa una sola vegada després del `DoCheck`, una vegada que Angular processi i projecti el contingut del component.
- **ngAfterContent​Checked()**: s'executa després de `ngAfterContentInit()` i després de cada `ngDoCheck`, quan el contingut del component ha sigut verificat.
- **ngAfterView​Init()**: s'executa quan la vista del component ha sigut inicialitzada totalment, amb tots els seus subcomponents.
- **ngAfterViewChecked()**: es crida després d'haver verificat les dades del component incloent els seus components fills.
- **ngOnDestroy()**: s'executa, en últim lloc, abans, que Angular elimini el component i la vista. Serveix per netejar totes les connexions, observables etc.  Per evitar possible fuges de memòria.