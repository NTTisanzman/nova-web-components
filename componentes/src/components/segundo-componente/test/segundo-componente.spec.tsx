import { newSpecPage } from '@stencil/core/testing';
import { SegundoComponente } from '../segundo-componente';

describe('segundo-componente', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SegundoComponente],
      html: `<segundo-componente></segundo-componente>`,
    });
    expect(page.root).toEqualHtml(`
      <segundo-componente>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </segundo-componente>
    `);
  });
});
