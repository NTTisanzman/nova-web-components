import { newE2EPage } from '@stencil/core/testing';

describe('mi-primer-componente', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mi-primer-componente></mi-primer-componente>');

    const element = await page.find('mi-primer-componente');
    expect(element).toHaveClass('hydrated');
  });
});
