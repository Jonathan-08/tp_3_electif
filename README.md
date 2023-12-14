# Dessine moi un mouton

Les navigateurs proposent une librairie de dessin 2D nommée "canvas".
Cette librairie n'est pas forcément évidente à prendre en main et
repose fortement sur le paradigme impératif (il faut appeler
spécifiquement les fonctions dans un certain ordre pour dessiner ce qu'on
veut... Ce qui est une cause de la courbe d'apprentissage et de possibles bugs).

Le but de ce projet (à faire en tant que "devoir maison") est de créer une librairie utilisant le paradigme fonctionnel encapsulant `canvas`.

Cette librairie permet de construire son dessin de façon purement
déclarative, puis avec `renderCentered` dessiner sur le canvas en
un seul effet de bord.

## Instruction pour rendre le TP

Publiez sur Github le dossier 03-homework-canvas comme un repo public et envoyez moi le
lien (oui un repo public. Je vous fais confiance pour faire vous même le travail. Je n'irai
pas vérifier s'il y a plagiat ou non, vous travaillez pour vous. Tout le monde se fichera
comme d'une guigne de la note que vous aurez eu au cours de programmation fonctionnelle
d'ici 2 ans).

## Organisation des fichiers

Voici les différents fichiers dans le dossier `src`:

- `index.html` point d'entrée de la première partie du TP. Ce fichier importe `index.js`.
- `index.js` ce fichier comprend la description d'un dessin (un smiley) en utilisant `drawlib.js`.
- `drawlib.js` la librairie à proprement parler, qu'il faudra compléter!
- `color.js` un petit module pour avoir des couleurs prédéfinies.
- `index2.html` et `index2.js` sont les fichiers pour la deuxième partie du TP.

## Lancement du projet, vérification des types

Javascript n'inclut (pour l'instant) pas de typage statique. Typescript le propose, mais
les navigateurs n'interprètent pas directement ce langage, il y a besoin d'une phase de
transpilation.

Pour simplifier la mise en route au maximum, nous utiliserons donc la technologie
`JsDoc` permettant d'avoir à peu près le même contrôle de types qu'avec Typescript
(+ complétions et autres goodies de nos IDEs) tout en étant directement exécutable par
le navigateur (ce ne sont que des commentaires!). Le prix à payer est un code un peu
plus verbeux.

Le fichier `tsconfig.json` configure votre IDE (au moins VSCode) pour qu'il affiche
les erreurs de typages.

Donc pour lancer le projet, il suffit d'ouvrir un simple serveur web servant
les fichiers sur le disque. Par exemple:

```
python3 -m http.server
```

fait très bien l'affaire. Vous pouvez alors accéder au dessin ici :
[http://localhost:8000/src](http://localhost:8000/src) (vous ne voyez rien, c'est
normal, il y a pour l'instant des erreurs!).

⚠️⚠️⚠️ Le navigateur a tendance à mettre en cache certains fichiers, et donc de ne pas charger
les derniers changements. Pour corriger ce travers, ouvrez les outils du développeur
(F12 en général) puis dans l'onglet `Network` (ou `Réseau`) cochez la case
`Disable cache` (ou `Désactivez le cache`). Laissez les outils du développeur
ouvert pour conserver ce comportement (en vous mettant par exemple sur la
console pour voir les erreurs d'exécution). ⚠️⚠️⚠️

## Partie I

Prenez le temps de comprendre comment sont organisés les fichiers, les types,...

Complétez le fichier `drawlib.js` : il y a un `TODO 1` et un `TODO 2` à faire dans cette ordre là. Le nom des fonctions et les commentaires dans le code environnant de ces "TODO"s devrait être suffisant pour comprendre ce qu'il faut faire.

À la fin, la page sur [http://localhost:8000/src](http://localhost:8000/src) devrait afficher l'image [smiley.png](smiley.png).
Si vous n'avez pas fait n'importe quoi bien sûr !

Faites un commit pour ne pas perdre votre travail !!

## Partie 2

On va donner la possibilité à l'utilisateur de créer des polygones en
donnant sa liste des coordonnées.

1.  Écrivez la fonction suivante. Vous pouvez regarder l'implémentation
    de la fonction `renderSquare` comprendre comment créer et manipuler
    ces `Path2D`:
    - on doit déjà se déplacer (`moveTo`) jusqu'au premier point de la liste de
      coordonnées sans rien tracer,
    - puis se déplacer en traçant (`lineTo`) vers chacun des points,
    - et finalement fermer le chemin (`closePath`).
    ```js
    /**
    * @returns {Path2D}
    * @param {Array<{x:number;y:number}>} points
    */
    function polygonToPath(points)
    ```
2.  Ajoutez un variant
    `{ kind: "Polygon", points: Array<{x: number; y:number}>}`
    dans la définition du type `Shape`.
3.  Gérez ce nouveau cas partout où on fait un `switch(shape.kind)`.
4.  Ajoutez une fonction en complétant la définition suivante:
    ```js
    /**
     * @param {Color} color
     * @param {Array<{x:number; y:number}>} points
     * @returns {Shape}
     */
    export function polygon(color, points) {}
    ```
5.  Oh mais tiens! Un carré c'est un polygone! On va donc supprimer ce
    variant `kind: "Square"`. Il faudra alors:
    - modifier la définition de la fonction `square` qui devra renvoyer un
      polygone
      (vous avez le droit de vous inspirer fortement de `renderSquare` pour
      calculer les coordonnées des points).
    - supprimer la fonction `renderSquare`
    - supprimer tous les `case "Square"`.
6.  Ajoutez une fonction en complétant la définition suivante:
    ```js
    /**
     * @param {Color} color
     * @param {number} width
     * @param {number} height
     * @returns {Shape}
     */
    export function rectangle(color, width, height) {}
    ```
    Le rectangle sera centré autour du point `{x:0, y:0}`.
7.  Rendez-vous sur la page [http://localhost:8000/src/index2.html](http://localhost:8000/src/index2.html), vous devriez y voir le dessin [robot.png](./robot.png).

## Partie 3

Créez des fichiers index3.html et index3.js qui permettent d'afficher plusieurs arbres et des moutons. On utilisera des variables (constantes) et
des fonctions pour éviter les redondances de code.

Faites une copie d'écran et ajoutez la au repos qu'on puisse admirer vos talents d'artistes !
