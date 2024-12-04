### 1. Quins són els style encapsulation dels components? Poseu un exemple d'ús de cadascun. ###
Els style encapsulation son els 3 seguents:
- **ViewEncapsulation.Emulated**: és trata de una encapsulacio que s'aplica per defecte als components. Angular simula el comportament ShadowDOM y modifica els selectors css del propi component pel que els estils s'apliquin unicament al propi component. Al ser una simulacio del ShadowDoom el compoent continua sent visible per poder aplicar estils globals 
  `@Component({..., encapsulation: ViewEncapsulation.Native })`
  
- **ViewEncapsulation.ShadowDom**:
  
- **ViewEncapsulation.None**: En aquest cas, Angular no aplica cap tipus de encapsulació de vista, llavors els estils que s'apliquen al component queden accesisbles de forma global, pertant podria ser una opcio ideal cuan es vol compartir estils entre coponents.


### 2. Què és el shadow DOM? ### 

### 3. Què és el `changeDetection`? ###

### 4. Quines diferències hi ha entre les estratègies *`Default`* i *`OnPush`*? Quan has d'usar una i altra? Avantatges i inconvenients. ###

### 5. Explica detalladament el cicle de vida dels components. Fes èmfasi en quan es disparen els hooks *`OnChanges`*, *`OnInit`*, *`AfterViewInit`* i *`OnDestroy`*, ja que són els més utilitzats. ###