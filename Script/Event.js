AFRAME.registerComponent('markerhandler', {

  //  init: function() {
        // const animatedMarker = document.querySelector("#animated-marker");
        // const aEntity = document.querySelector("#animated-model");

        // // every click, we make our model grow in size :)
        // animatedMarker.addEventListener('click', function(ev, target){
        //     const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
        //     if (aEntity && intersectedElement === aEntity) {
        //         const scale = aEntity.getAttribute('scale');
        //         Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
        //         aEntity.setAttribute('scale', scale);
        //     }
        // });
        init:function() {
            var element = document.querySelector('body');
            const marker =  document.querySelector("#animated-marker");
            const model =document.querySelector("#animated-model");
            var hammertime = new Hammer(element);
            var pinch = new Hammer.Pinch(); // Pinch is not by default in the recognisers
            hammertime.add(pinch); // add it to the Manager instance
      
            hammertime.on('pan', (ev) => {
              let rotation = model.getAttribute("rotation")
              switch(ev.direction) {
                case 2:
                  rotation.y = rotation.y + 4
                  break;
                case 4:
                  rotation.y = rotation.y - 4
                  break;
                case 8:
                  rotation.x = rotation.x + 4
                  break;
                case 16:
                  rotation.x = rotation.x - 4
                  break;
                default:
                  break;
              }
              model.setAttribute("rotation", rotation)
            });
      
           hammertime.on("pinch", (ev) => {
              let scale = {x:ev.scale, y:ev.scale, z:ev.scale}
              model.setAttribute("scale", scale);
          });
        }
      });
