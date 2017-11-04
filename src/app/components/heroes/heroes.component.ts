import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Models/hero';
import { Router } from '@angular/router';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService

  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
    alert("Go to hero");
  }

}
