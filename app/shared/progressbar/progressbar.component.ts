import { Component, ViewChild, OnInit } from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'eb-progress-bar',
  template: `
  <modal [animation]="false" #modal>
    <modal-header [show-close]="false">
      <h4 class="modal-title">Aguarde...</h4>
    </modal-header>
    <modal-body>
    <div class="progress">
      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
        <span class="sr-only">Carregando...</span>
      </div>
    </div>
    </modal-body>
    <!--<modal-footer [show-default-buttons]="true"></modal-footer>-->
  </modal>
  `
})

export class ProgressBarComponent implements OnInit {

  @ViewChild('modal')
  modal: ModalComponent;

  ngOnInit(): void {

  }

  public show():void {
    this.modal.open();
  }

  public hide():void {
    this.modal.close();
  }

}
