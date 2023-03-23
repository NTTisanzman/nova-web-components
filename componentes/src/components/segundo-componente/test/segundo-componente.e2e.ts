import { newE2EPage } from '@stencil/core/testing';

describe('segundo-componente', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<segundo-componente></segundo-componente>');

    const element = await page.find('segundo-componente');
    expect(element).toHaveClass('hydrated');
  });
});
