# THREE-JS-DomEvents-for-Mesh
DomMesh is a THREE.JS extention that builds on the THREE.Mesh module which enables the use of Native DOMEvents on your 3D objects.
Currently DomMesh module supports [mousedown](https://www.quirksmode.org/dom/events/click.html) (and other alternatives such as click), [mouseenter and mouseleave](https://www.quirksmode.org/dom/events/mouseover.html). Additionally this module also includes the ```<a>``` element. 

# Example

# Install
To use this module on your code you can simply download the [DomMesh.js](https://github.com/Tozturk18/THREE-JS-DomEvents-for-Mesh/edit/main/DomMesh.js) file and import it at the very top of your JavaScript file.
  
```javascript
import { DomMesh } from './DomMesh.js';
```

# Instructions
Once you donwload the DomMesh module and imported it, the usage is very similar to creating a new THREE.Mesh.

First we need to create a DomMesh Object, let's call the object mesh1.

```javascript

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const meshGeomerty = new THREE.SphereGeometry(1);

const meshMaterial = new THREE.MeshBasicMaterial( { 
      color: 0xffffff, 
} );

// DomMesh Object needs the geometry and the material of the object and the camera used in the scene to raytrace from.
const mesh1 = new DomMesh( meshGeomerty, meshMaterial, camera );

```

Once we create a new instance of a DomMesh element we can now tell it to do specific DOMEvents. I have created it using modules,
hence you can easily access the options with only one parameter needed.

```javascript

// To create a click, mousedown, mouseup, dblclick event you can use the .MouseDown module
mesh1.MouseDown( () => {
  console.log("Clicked!");
} );

// To create a mouseenter, mouseover event you can use the .MouseEnter module
mesh1.MouseEnter( () => {
  console.log("Hovering!");
} );

// To create a mouseleave, mouseout event you can use the .MouseLeave module
mesh1.MouseLeave( () => {
  console.log("Left the Object!");
} );

```
## Parameters
For ```MouseDown```, ```MouseEnter```, and ```MouseLeave``` events the only parameter is:
* ```function()```: is any function that you want to run when the events happens.

```javascript

// To create a link event you can use the .MeshLink module
// MeshLink takes a URL, a default color and a highlight color as parameters
mesh1.MeshLink( "https://github.com/Tozturk18/", 0xffffff, 0x555555 );

```
## Parameters
For ```MeshLink``` event the parameter are:
* ```url```: a string containing a link (a url).
* ```defaultColor```: a hexidecimal color that defines the default (before mouseover) color of the mesh object.
* ```highlightColor```: a hexidecimal color that defines the highlight (during mouseover) color of the mesh object.

# Additionaly
Please contact me if you want me to add more to this module or if there is anything that I need to fix.
