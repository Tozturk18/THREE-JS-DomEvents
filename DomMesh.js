/* DomMesh.js
 * Created by Ozgur Tuna Ozturk
 * Last edited on 02/12/2022
 * This is a JavaScript Module that is build over the Mesh Module
 * of the THREE JS Library. This DomMesh Module allows THREE JS Mesh
 * to become interractable.
 * Currently this module supports Native DomEvents such as:
 * mouseenter, mouseleave, mousedown
 * and additionally this module includes linking to URL such as the <a> Element.
 * 
 * PS: Please contact me if you want additional support for DomEvents to this module.
 * Also console.log() script can slow down this library.
 */

/* --- Imports --- */

import { 
    Mesh, 
    Raycaster, 
    Vector2 
} from 'three';

/* --- End of Imports --- */

class DomMesh extends Mesh {

    constructor(geometry, material, camera) {

        super();

        this.geometry = geometry || null;
        this.material = material || null;
        this._camera = camera || null;
        this._raycaster = new Raycaster();

    }
    
    MouseEnter(func) {

        const camera = this._camera;
        const raycaster = this._raycaster;
        var selected = [];
        var target = this;

        var entered = false;

        function onPointerMove( event ) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components
            const pointer = new Vector2( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    
            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera( pointer, camera );

            // calculate objects intersecting the picking ray
            selected = raycaster.intersectObject( target )[0] || [];

            if (selected.object == target && !entered) {
                func();
                entered = true;
            } else if (selected.object != target && entered) {
                entered = false;
            }
        
        }
        window.addEventListener('pointermove', onPointerMove);
    }

    MouseLeave(func) {

        const camera = this._camera;
        const raycaster = this._raycaster;
        var selected = [];
        var target = this;

        var left = false;

        function onPointerMove( event ) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components
            const pointer = new Vector2( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    
            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera( pointer, camera );

            // calculate objects intersecting the picking ray
            selected = raycaster.intersectObject( target )[0] || [];

            if (selected.object != target && left) {
                func();
                left = false;
            } else if (selected.object == target && !left) {
                left = true;
            }
        
        }
        window.addEventListener('pointermove', onPointerMove);
    }

    MouseDown(func) {

        const camera = this._camera;
        const raycaster = this._raycaster;
        var selected = [];
        var target = this;
        
        function onPointerMove( event ) {

            // calculate pointer position in normalized device coordinates
            // (-1 to +1) for both components
            const pointer = new Vector2( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
    
            // update the picking ray with the camera and pointer position
            raycaster.setFromCamera( pointer, camera );
            
    
            // calculate objects intersecting the picking ray
            selected = raycaster.intersectObject( target )[0] || [];

            if (selected.object == target) {
                window.addEventListener('click', click);
            } else {
                window.removeEventListener('click', click);
            }
        
        }

        function click() {
            func();
        }
        
        window.addEventListener('pointermove', onPointerMove);
    }

    MeshLink(url, defaultColor, hoverColor) {
        this.MouseEnter(() => { this.material.color.set( hoverColor );    document.body.style.cursor	= 'pointer'; } );
        this.MouseLeave(() => { this.material.color.set( defaultColor );  document.body.style.cursor	= 'default'; } );
        this.MouseDown(() => { window.open(url, "_blank"); } );
    }


}

export { DomMesh };