import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <div class="test-page">
      <h1>Área de Pruebas de Componentes</h1>
      
      <div class="test-section">
        <h2>Componentes Disponibles</h2>
        <div class="component-grid">
          <!-- Aquí se agregarán los componentes de prueba -->
          <div class="component-placeholder">
            <p>Los componentes se mostrarán aquí</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .test-page {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
      text-align: center;
      font-size: 2.5rem;
    }
    h2 {
      color: #34495e;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
    .test-section {
      background: #ffffff;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    .component-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }
    .component-placeholder {
      background: #f8f9fa;
      border: 2px dashed #dee2e6;
      border-radius: 6px;
      padding: 2rem;
      text-align: center;
      min-height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .component-placeholder p {
      color: #6c757d;
      font-size: 1.1rem;
    }
  `]
})
export class TestComponent {}