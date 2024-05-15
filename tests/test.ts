import { Selector, t } from 'testcafe';

interface IPageModel {
  title: Selector;
}

const pageModel: IPageModel = {
  title: Selector('header p')
};

fixture `Example TypeScript Test`
    .page `https://devexpress.github.io/testcafe/example`;

test('Check the title of the page', async (t) => {
  await t
    .debug()
    .expect(pageModel.title.innerText).eql('This webpage is used as a sample in TestCafe tutorials.');
});
