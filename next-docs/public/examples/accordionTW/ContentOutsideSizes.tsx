import { Accordion } from '@heathmont/moon-core-tw';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Accordion itemSize="xl">
      <Accordion.Item value="item-1">
        <Accordion.Header className="moon-open:[&_svg]:rotate-90">
          <Accordion.Button>
            <span>X Large (xl)</span>
            <ControlsChevronRight
              className="text-trunks text-moon-16 transition-transform transition-200"
            />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.ContentOutside>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.ContentOutside>
      </Accordion.Item>
    </Accordion>
    <Accordion itemSize="lg">
      <Accordion.Item value="item-2">
        <Accordion.Header className="moon-open:[&_svg]:rotate-90">
          <Accordion.Button>
            <span>Large (lg)</span>
            <ControlsChevronRight
              className="text-trunks text-moon-16 transition-transform transition-200"
            />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.ContentOutside>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.ContentOutside>
      </Accordion.Item>
    </Accordion>
    <Accordion>
      <Accordion.Item value="item-3">
        <Accordion.Header className="moon-open:[&_svg]:rotate-90">
          <Accordion.Button>
            <span>Medium is default (md)</span>
            <ControlsChevronRight
              className="text-trunks text-moon-16 transition-transform transition-200"
            />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.ContentOutside>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.ContentOutside>
      </Accordion.Item>
    </Accordion>
    <Accordion itemSize="sm">
      <Accordion.Item value="item-4">
        <Accordion.Header className="moon-open:[&_svg]:rotate-90">
          <Accordion.Button>
            <span>Small (sm)</span>
            <ControlsChevronRight
              className="text-trunks text-moon-16 transition-transform transition-200"
            />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.ContentOutside>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.ContentOutside>
      </Accordion.Item>
    </Accordion>
  </>
);

export default Example;
