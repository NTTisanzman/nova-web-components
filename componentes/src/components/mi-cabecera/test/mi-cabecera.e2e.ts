import { newE2EPage } from '@stencil/core/testing';

describe('mi-cabecera', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mi-cabecera></mi-cabecera>');

    const element = await page.find('mi-cabecera');
    expect(element).toHaveClass('hydrated');
  });
});
