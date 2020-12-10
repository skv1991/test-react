import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, render } from "enzyme";
import { act } from "react-dom/test-utils";
// import "regenerator-runtime/runtime"; // я работы функций-генераторов в redux saga

configure({ adapter: new Adapter() });

// установка глобальных переменных, чтобы сделать тесты чище
// global.window = window;
// global.document = window.document;

// global.shallow = shallow;
// global.mount = mount;
// global.render = render;
// global.act = act;
