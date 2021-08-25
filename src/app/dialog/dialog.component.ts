import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { EnumSesso } from './enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})



export class DialogComponent implements OnInit {
  form: FormGroup;
  public tipoSesso = EnumSesso;
  public nascSessoModel: EnumSesso = EnumSesso.femmina;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({});
    this.form.addControl('nascSesso', new FormControl('', [], []));
  }


  close() {
    this.modalController.dismiss();
  }

}
