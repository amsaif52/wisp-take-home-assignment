import App from "./App";
import { TITLE_TAG, LOADING } from "../const";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Initial Launch of App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render default text", () => {
    const headerTitle = wrapper.find("h1");
    expect(headerTitle).toHaveLength(1);
    expect(headerTitle.text()).toEqual(TITLE_TAG);
    const loadingText = wrapper.find(".loader");
    expect(loadingText).toHaveLength(1);
    expect(loadingText.text()).toEqual(LOADING);
  });
});
