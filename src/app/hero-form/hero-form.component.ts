import { Component,Input,OnInit } from '@angular/core';
import {sendAddtoDB} from '../sendAddtoDB'
import { Address } from '../address';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit{

  
  @Input()
  model: Address=new Address();

  constructor(private sendToApi: sendAddtoDB){}
  

  onSubmit() { console.log(this.user);
    this.sendAddtoDB.registerAddress(this.user).subscribe(data=>{
     alert("Successfully User is register?")
    },error=>alert("Sorry User not register")); }

  ngOnInit(): void {
  }

  
/*
  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////
  */

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/