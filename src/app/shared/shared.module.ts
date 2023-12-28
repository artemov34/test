import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [CommonModule, ReactiveFormsModule, FormsModule];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class SharedModule {}
