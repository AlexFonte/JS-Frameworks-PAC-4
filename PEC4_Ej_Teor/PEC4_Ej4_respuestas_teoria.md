### 1. Explica què són i quan s'haurien d'utilitzar les variables locals següents de la directiva estructural NgFor: ### 

- **index:** referència a l’índex de l’element actual de la iteració. Es pot utilitzar per saber quin element estem iterant en cada moment.
- **even**: indica si l’índex de l’element actual és parell. Un possible ús podria ser aplicar una classe CSS únicament als elements parells.
- **odd**: indica si l’índex de l’element actual és imparell. Un possible ús podria ser aplicar una classe CSS únicament als elements imparells.
- **first**: indica si l’índex de l’element actual és el primer de la llista que estem iterant. Un possible ús podria ser aplicar només una classe CSS al primer element de la llista.
- **last**: indica si l’índex de l’element actual és l’últim de la llista que estem iterant. Un possible ús podria ser aplicar només una classe CSS a l’últim element de la llista.
  
### 2. Per què serveix l’opció TrackBy de la directiva estructural NgFor? Poseu exemples d'ús ###

trackBy de la directiva NgFor s'utilitza per indicar quin valor ha d'utilitzar Angular per identificar els elements d'una manera més personalitzada en lloc de la referència de l'objecte en Angular. Tot això permet que, si recarreguem la pàgina, utilitzant trackBy amb ngFor, sempre identifiquem els elements d'una llista de la mateixa manera.

Un exemple seria, com en aquesta PEC pràctica, recuperar un llistat d'articles diferents d'un servei web on els preus s'actualitzen amb freqüència, i amb una gran quantitat d'ítems. En utilitzar trackBy, Angular només hauria de modificar els ítems en què els preus hagin canviat, evitant així recórrer i actualitzar tot el DOM i millorant el rendiment de l'aplicació.

### 3. És possible executar dues directives estructurals simultàniament? Explica la raó tant si és possible com si no ho és.###

Angular actualment no permet executar dues directives estructurals simultàniament. 
Això es deu al fet que podria generar confusió sobre l’ordre en què s’han d’executar les directives.