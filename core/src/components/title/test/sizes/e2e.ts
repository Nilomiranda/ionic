import { newE2EPage } from '@stencil/core/testing';

test('title: sizes', async () => {
  const page = await newE2EPage({
    url: '/src/components/title/test/sizes?ionic:_testing=true'
  });

  await page.waitFor(250);

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});

test('title:rtl: sizes', async () => {
  const page = await newE2EPage({
    url: '/src/components/title/test/sizes?ionic:_testing=true&rtl=true'
  });

  await page.waitFor(250);

  const compare = await page.compareScreenshot();
  expect(compare).toMatchScreenshot();
});
