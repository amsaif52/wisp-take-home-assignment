import ResultTable from "./index";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockResults = [
  {
    details: "Engine failure at 33 seconds and loss of vehicle",
    flight_number: 1,
    launch_name: "FalconSat",
    launch_year: 2006,
    presskit: null,
    rocket_name: "Falcon 1",
  },
  {
    details:
      "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
    flight_number: 2,
    launch_name: "DemoSat",
    launch_year: 2007,
    presskit: null,
    rocket_name: "Falcon 1",
  },
  {
    details:
      "Residual stage 1 thrust led to collision between stage 1 and stage 2",
    flight_number: 3,
    launch_name: "Trailblazer",
    launch_year: 2008,
    presskit: null,
    rocket_name: "Falcon 1",
  },
  {
    details:
      "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
    flight_number: 4,
    launch_name: "RatSat",
    launch_year: 2008,
    presskit: null,
    rocket_name: "Falcon 1",
  },
  {
    details: null,
    flight_number: 5,
    launch_name: "RazakSat",
    launch_year: 2009,
    presskit:
      "http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit",
    rocket_name: "Falcon 1",
  },
  {
    details: null,
    flight_number: 6,
    launch_name: "Falcon 9 Test Flight",
    launch_year: 2010,
    presskit:
      "http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821",
    rocket_name: "Falcon 9",
  },
  {
    details: null,
    flight_number: 7,
    launch_name: "COTS 1",
    launch_year: 2010,
    presskit: "http://www.spacex.com/files/downloads/cots1-20101206.pdf",
    rocket_name: "Falcon 9",
  },
  {
    details:
      "Launch was scrubbed on first attempt, second launch attempt was successful",
    flight_number: 8,
    launch_name: "COTS 2",
    launch_year: 2012,
    presskit: "https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf",
    rocket_name: "Falcon 9",
  },
  {
    details:
      "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
    flight_number: 9,
    launch_name: "CRS-1",
    launch_year: 2012,
    presskit: "https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf",
    rocket_name: "Falcon 9",
  },
  {
    details: "Last launch of the original Falcon 9 v1.0 launch vehicle",
    flight_number: 10,
    launch_name: "CRS-2",
    launch_year: 2013,
    presskit:
      "https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf",
    rocket_name: "Falcon 9",
  },
];
describe("Pagination", () => {
  const mockPagination = {
    hasNextPage: true,
    hasPrevPage: false,
  };
  const mockPage = 1;
  const mockPaginationClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResultTable results={mockResults} />);
  });
  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });
  it("renders a grid", () => {
    const table = wrapper.find("table");
    const row = table.find("tr");
    const column = table.find("td");
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(11);
    expect(column).toHaveLength(50);
  });
});
