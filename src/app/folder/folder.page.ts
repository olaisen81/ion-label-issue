import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public currentModal: any;

  constructor(private activatedRoute: ActivatedRoute, public modalController: ModalController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async openDialog() {
    const modal = await this.modalController.create({
      component: DialogComponent
    });

    await modal.present();
    this.currentModal = modal;
  }

}
