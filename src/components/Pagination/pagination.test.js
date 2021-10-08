import Pagination from "./index";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Pagination", () => {
  const mockPagination = {
    hasNextPage: true,
    hasPrevPage: false,
  };
  const mockPage = 1;
  const mockPaginationClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Pagination
        pagination={mockPagination}
        page={mockPage}
        handlePaginationChange={mockPaginationClick}
      />
    );
  });
  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
  it("shows my default text", () => {
    const paginationNumber = wrapper.find(".pagination > div");
    expect(paginationNumber).toHaveLength(1);
    expect(paginationNumber.text()).toEqual(mockPage.toString());
  });
  it("simulates a click event", () => {
    wrapper.find(".pagination > button:last-child").simulate("click");
    expect(mockPaginationClick).toBeCalledTimes(1);
  });
});
