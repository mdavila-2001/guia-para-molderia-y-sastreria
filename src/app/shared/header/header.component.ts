import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule, AsyncPipe]
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen$: Observable<boolean>;
  private clickListener: any;

  constructor(private navigationService: NavigationService) {
    this.isMenuOpen$ = this.navigationService.isMenuOpen$;
  }

  ngOnInit() {
    // Agregar listener para cerrar el menú al hacer clic fuera
    this.clickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.navbar')) {
        this.closeMenu();
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  ngOnDestroy() {
    // Limpiar el listener al destruir el componente
    document.removeEventListener('click', this.clickListener);
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Evitar que el clic se propague
    this.navigationService.toggleMenu();
  }

  closeMenu() {
    this.navigationService.closeMenu();
  }
}