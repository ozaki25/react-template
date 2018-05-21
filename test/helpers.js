import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

export const elementToJson = element =>
  // shallowだとstyled-componentsが展開されない。mountだとstyled-components以外も展開されちゃうし重い。
  toJson(shallow(element));

export const snapshot = (title, element) =>
  it(`should match snapshot: ${title}`, () => {
    expect(elementToJson(element)).toMatchSnapshot();
  });
