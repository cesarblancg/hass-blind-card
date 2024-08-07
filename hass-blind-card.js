class BlindCard extends HTMLElement {
  set hass(hass) {
    const _this = this;
    const entities = this.config.entities;
    const imageClosed = 'data:@file/png;base64,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';
    const imageOpen = 'data:@file/png;base64,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';
    
    //Init the card
    if (!this.card) {
      const card = document.createElement('ha-card');


      if (this.config.title) {
          card.header = this.config.title;
      }
    
      this.card = card;
      this.appendChild(card);
    
      let allBlinds = document.createElement('div');
      allBlinds.className = 'sc-blinds';
      entities.forEach(function(entity) {
        let entityId = entity;
        if (entity && entity.entity) {
            entityId = entity.entity;
        }
        
        let buttonsPosition = 'left';
        if (entity && entity.buttons_position) {
            buttonsPosition = entity.buttons_position.toLowerCase();
        }
        
        let titlePosition = 'top';
        if (entity && entity.title_position) {
            titlePosition = entity.title_position.toLowerCase();
        }

        let invertPercentage = false;
        if (entity && entity.invert_percentage) {
          invertPercentage = entity.invert_percentage;
        }

        let invertCommands = false;
        if (entity && entity.invert_commands) {
          invertCommands = entity.invert_commands;
        }

        let blindColor = '#ffffff'
        if (entity && entity.blind_color) {
          blindColor = entity.blind_color;
        }
    
        let blind = document.createElement('div');

        blind.className = 'sc-blind';
        blind.dataset.blind = entityId;
        blind.innerHTML = `
          <div class="sc-blind-top" ` + (titlePosition == 'bottom' ? 'style="display:none;"' : '') + `>
            <div class="sc-blind-label">
            
            </div>
            <div class="sc-blind-position">
            
            </div>
          </div>
          <div class="sc-blind-middle" style="flex-direction: ` + (buttonsPosition == 'right' ? 'row-reverse': 'row') + `;">
            <div class="sc-blind-buttons">
              <ha-icon-button class="sc-blind-button" data-command="up"><ha-icon icon="mdi:arrow-up"></ha-icon></ha-icon-button><br>
              <ha-icon-button class="sc-blind-button" data-command="stop"><ha-icon icon="mdi:stop"></ha-icon></ha-icon-button><br>
              <ha-icon-button class="sc-blind-button" data-command="down"><ha-icon icon="mdi:arrow-down"></ha-icon></ha-icon-button>
            </div>
            <div class="sc-blind-selector">
              <div class="sc-blind-selector-picture">
                <div class="sc-blind-selector-slide"></div>
                <div class="sc-blind-selector-picker"></div>
              </div>
            </div>
          </div>
          <div class="sc-blind-bottom" ` + (titlePosition != 'bottom' ? 'style="display:none;"' : '') + `>
            <div class="sc-blind-label">
            
            </div>
            <div class="sc-blind-position">
            
            </div>
          </div>
        `;
        
        let picture = blind.querySelector('.sc-blind-selector-picture');
        let slide = blind.querySelector('.sc-blind-selector-slide');
        let picker = blind.querySelector('.sc-blind-selector-picker');

        slide.style.background = blindColor ;
        
        let mouseDown = function(event) {
            if (event.cancelable) {
              //Disable default drag event
              event.preventDefault();
            }
            
            _this.isUpdating = true;
            
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('touchmove', mouseMove);
            document.addEventListener('pointermove', mouseMove);
      
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('touchend', mouseUp);
            document.addEventListener('pointerup', mouseUp);
        };
  
        let mouseMove = function(event) {
          let newPosition = event.pageY - _this.getPictureTop(picture);
          _this.setPickerPosition(newPosition, picker, slide);
        };
           
        let mouseUp = function(event) {
          _this.isUpdating = false;
            
          let newPosition = event.pageY - _this.getPictureTop(picture);
          
          if (newPosition < _this.minPosition)
            newPosition = _this.minPosition;
          
          if (newPosition > _this.maxPosition)
            newPosition = _this.maxPosition;
          
          let percentagePosition = (newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition);
          
          if (invertPercentage) {
            _this.updateBlindPosition(hass, entityId, percentagePosition);
          } else {
            _this.updateBlindPosition(hass, entityId, 100 - percentagePosition);
          }
          
          document.removeEventListener('mousemove', mouseMove);
          document.removeEventListener('touchmove', mouseMove);
          document.removeEventListener('pointermove', mouseMove);
      
          document.removeEventListener('mouseup', mouseUp);
          document.removeEventListener('touchend', mouseUp);
          document.removeEventListener('pointerup', mouseUp);
        };
      
        //Manage slider update
        picker.addEventListener('mousedown', mouseDown);
        picker.addEventListener('touchstart', mouseDown);
        picker.addEventListener('pointerdown', mouseDown);
        
        //Manage click on buttons
        blind.querySelectorAll('.sc-blind-button').forEach(function (button) {
            button.onclick = function () {
                const command = this.dataset.command;
                
                let service = '';
                
                switch (command) {
                  case 'up':
                      service = !invertCommands ? 'open_cover' : 'close_cover';
                      break;
                      
                  case 'down':
                      service = !invertCommands ? 'close_cover' : 'open_cover';
                      break;
                
                  case 'stop':
                      service = 'stop_cover';
                      break;
                }
                
                hass.callService('cover', service, {
                  entity_id: entityId
                });
            };
        });
      
        allBlinds.appendChild(blind);
      });
      
      
      const style = document.createElement('style');
      style.textContent = `
        .sc-blinds { padding: 16px; }
          .sc-blind { margin-top: 1rem; overflow: hidden; }
          .sc-blind:first-child { margin-top: 0; }
          .sc-blind-middle { display: flex; max-width: 210px; width: 100%; margin: auto; }
            .sc-blind-buttons { flex: 0; text-align: center; margin-top: 0.4rem; }
            .sc-blind-selector { flex: 1; }
              .sc-blind-selector-picture { position: relative; margin: auto; background-size: 100% 100%; background-repeat: no-repeat; min-height: 151px; max-height: 100%; width: 100%; max-width: 153px; }
                .sc-blind-selector-picture { background-image: url(data:@file/png;base64,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); }
              .sc-blind-selector-slide { background-color: #ffffff; position: absolute; top: 19px; left: 3.921568%; width: 92.156862%; height: 0; }
              .sc-blind-selector-picker { position: absolute; top: 19px; left: 2.941176%; width: 94.117647%; cursor: pointer; height: 20px; background-repeat: no-repeat; }
                .sc-blind-selector-picker { background-image: url(data:@file/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAHCAYAAADuzmQ5AAAABGdBTUEAALGeYUxB9wAAACBjSFJNAACHCwAAjBIAAP70AAB/DgAAgQYAAOhBAAA54AAAHiqESS3PAAAA22lDQ1BJQ0MgUHJvZmlsZQAAKM9jYGB8wAAETECcm1dSFOTupBARGaXAfoGBEQjBIDG5uMA32C2EASf4dg2i9rIuA+mAs7ykoARIfwBikaKQIGegm1iAbL50CFsExE6CsFVA7CKgA4FsE5D6dAjbA8ROgrBjQOzkgiKgmYwFIPNTUouTgewGIDsB5DeItZ9ZwW5mFFVKLi0qg7qFkcmYgYEQH2FGHjsDg9lVBgbm/Qix1G4Ghm0nGRjE5RBiykC3CyUyMOxIKkmtKEH2PMRtYMCWXwAMfQZqAgYGAC7ONG+WT8jJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB5klEQVRYR+2XwWrCQBCGs2li7KmQCqJ46qVv0KeofRZfpM/Qk4fqQ0jRkydBBKGnHnopNmJiAjFp0v9Ps2UrEmyLtEI+GGYzOzMbsz+bKObzeadWq91qJSW/wPf9O8/zZmIymXTr9XrbNM0q4inQhBAfWcWkMAO5ES/gN6xDfTVJkhOEYoY5V/L/Ufed3rKsLBaG4Zc5iYzpus5x4jjOwnXdoRiNRv1Go9E2DMOSibsaFMGG+TADtXo+LDki1L2nUAh0oUVRtFMTjOWCSiEmZ71eD8R4PL5vtVo3KKwyQdq+gkLuGxwFxVOJp5Y8ueBKjg3ufRzHWqVSyTwFhTdONlcgqGS5XC7wynsQ0+m032w222iQnVD7ojRzsZCBRSlprmjiujyhjhApJgqHe0u/LSIVqQHsfYpXngNBDfjK6+Kj/Fp+QzGxqIkEzVI009EsQD7FyNoNzKQhniBOcFlyCLihNMLn/JNnLXuwFj6FoNjEkv1gIdPgSVYjYV1+qCSr1eoVghqKXq/XsW37CoIymQAdZEl7wF9yDouxUB3mo/6J94TYqdrnGz3/HHmv8uHJZ0LUuITzpCjnUGzv1/a9F6HUYphmDeA91D7DXjDmn6wL+DNMPcJf4tqGfX4vK+vxG8oNgmD2Di0RPo9DidC/AAAAAElFTkSuQmCC); }
          .sc-blind-top { text-align: center; margin-bottom: 1rem; }
          .sc-blind-bottom { text-align: center; margin-top: 1rem; }
            .sc-blind-label { display: inline-block; font-size: 20px; vertical-align: middle; }
            .sc-blind-position { display: inline-block; vertical-align: middle; padding: 0 6px; margin-left: 1rem; border-radius: 2px; background-color: var(--secondary-background-color); }
      `;
    
      this.card.appendChild(allBlinds);
      this.appendChild(style);
    }
    
    //Update the blinds UI
    entities.forEach(function(entity) {
      let entityId = entity;
      if (entity && entity.entity) {
        entityId = entity.entity;
      }

      let invertPercentage = false;
      if (entity && entity.invert_percentage) {
        invertPercentage = entity.invert_percentage;
      }
        
      const blind = _this.card.querySelector('div[data-blind="' + entityId +'"]');
      const slide = blind.querySelector('.sc-blind-selector-slide');
      const picker = blind.querySelector('.sc-blind-selector-picker');
      const background = blind.querySelector('.sc-blind-selector-picture');
        
      const state = hass.states[entityId];
      const friendlyName = (entity && entity.name) ? entity.name : state ? state.attributes.friendly_name : 'unknown';
      const currentPosition = state ? state.attributes.current_position : 'unknown';

      const blindHasWindow = entity.window_entity !== undefined;
      const stateWindow = hass.states[entity.window_entity];
      const positionWindow = stateWindow?.state || 'unknown';
      
      if (blindHasWindow && positionWindow === 'on') {
        // The window is open
        blind.style.pointerEvents = 'none';
        blind.style.touchAction = 'none';
        picker.style.display = 'none';
        slide.style.display = 'none';
        
        background.style.backgroundImage = `url('${imageOpen}')`;
      } else {
        blind.style.pointerEvents = 'auto';
        blind.style.touchAction = 'auto';
        picker.style.display = 'block';
        slide.style.display = 'block';
        
        background.style.backgroundImage = `url('${imageClosed}')`;
      }
      
        

      blind.querySelectorAll('.sc-blind-label').forEach(function(blindLabel) {
          blindLabel.innerHTML = friendlyName;
          if(blindHasWindow && positionWindow == 'on'){
            blindLabel.innerHTML = entity.window_message !== undefined ? `${friendlyName} (${entity.window_message})` : friendlyName + ' (Open)';
          }
      })
      
      if (!_this.isUpdating) {
        blind.querySelectorAll('.sc-blind-position').forEach(function (blindPosition) {
          blindPosition.innerHTML = currentPosition + '%';
        })

        if (invertPercentage) {
          _this.setPickerPositionPercentage(currentPosition, picker, slide);
        } else {
          _this.setPickerPositionPercentage(100 - currentPosition, picker, slide);
        }
      }
    });
  }
  
  getPictureTop(picture) {
      let pictureBox = picture.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;

      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

      let clientTop = docEl.clientTop || body.clientTop || 0;

      let pictureTop  = pictureBox.top + scrollTop - clientTop;
      
      return pictureTop;
  }
  
  setPickerPositionPercentage(position, picker, slide) {
    let realPosition = (this.maxPosition - this.minPosition) * position / 100 + this.minPosition;
  
    this.setPickerPosition(realPosition, picker, slide);
  }


  setPickerPosition(position, picker, slide) {
    if (position < this.minPosition)
      position = this.minPosition;
  
    if (position > this.maxPosition)
      position = this.maxPosition;
  

    picker.style.top = position + 'px';
    slide.style.height = position - this.minPosition + 'px';
  }
  
  updateBlindPosition(hass, entityId, position) {
    let blindPosition = Math.round(position);
  
    hass.callService('cover', 'set_cover_position', {
      entity_id: entityId,
      position: blindPosition
    });
  }

  setConfig(config) {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }
    
    this.config = config;
    this.maxPosition = 137;
    this.minPosition = 19;
    this.isUpdating = false;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return this.config.entities.length + 1;
  }
}

customElements.define("blind-card", BlindCard);
