import { newSpecPage } from '@stencil/core/testing';
import { MiPrimerComponente } from '../mi-primer-componente';

describe('mi-primer-componente', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiPrimerComponente],
      html: `<mi-primer-componente></mi-primer-componente>`,
    });
    expect(page.root).toEqualHtml(`
      <mi-primer-componente>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mi-primer-componente>
    `);
  });
});
