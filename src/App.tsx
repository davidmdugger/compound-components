import * as React from 'react';

import './styles.css'

interface SegmentListProps {
  children: any;
}

class SegmentList extends React.Component<SegmentListProps, {}> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

interface SegmentProps {
  children?: any;
  isDisabled?: boolean;
  isActive?: boolean;
  style?: string;
}

class Segment extends React.Component<SegmentProps, {}> {
  public render() {
    const { children } = this.props;
    const isDisabled = false;
    const isActive = false;
    const style = isDisabled ?
      "disabled" :
      isActive ?
        "active" :
        "tab";

    return (
      <div className={style}>
        {children}
      </div>
    );
  }
}

interface TabPanelsProps {
  children: any;
}

class TabPanels extends React.Component<TabPanelsProps, {}> {
  public render() {
    const { children } = this.props;
    const activeIndex = 0;
    return (
      <div>
        {children}
      </div>
    );
  }
}

interface TabPanelProps {
  children: any;
}

class TabPanel extends React.Component<TabPanelProps, {}> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

interface SegmentedControlProps {
  children: any;
}

interface SegmentedControlState {
  activeIndex: any;
}

class SegmentedControl extends React.Component<SegmentedControlProps, SegmentedControlState> {
  state = {
    activeIndex: 0
  }

  public render() {
    const children = React.Children.map(this.props.children, (child: any) => {
      if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex
        })
      } else {
        return child
      }
    });
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default class SegmentedControl2 extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <SegmentedControl>
          <SegmentList>
            <Segment>Tacos</Segment>
            <Segment>Burritos</Segment>
            <Segment>Coconuts</Segment>
          </SegmentList>
          <TabPanels>
            <TabPanel>
              <p>Tacos are delicious</p>
              <p>Burritos are just big tacos</p>
              <p>Coocoo for Coconuts</p>
            </TabPanel>
          </TabPanels>
        </SegmentedControl>
      </div>
    );
  }
}