import { newSpecPage } from '@stencil/core/testing';
import { MiCabecera } from '../mi-cabecera';

describe('mi-cabecera', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiCabecera],
      html: `<mi-cabecera></mi-cabecera>`,
    });
    expect(page.root).toEqualHtml(`
      <mi-cabecera>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mi-cabecera>
    `);
  });
});
