import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import _ from 'lodash';
import styled from 'styled-components';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const StyledButton = styled.button`
  background-color: #3b5998;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
export default class AddRemoveLayout extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    items: 2,
    cols: { lg: 4, md: 4, sm: 4, xs: 4, xxs: 4 },
    rowHeight: 20,
    onLayoutChange: function () {},
    // compactType: 'vertical'
    compactType: 'horizontal'
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [0, 1].map(function (i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: i === list.length - 1
        };
      }),
      newCounter: 2
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    const i = el.i;
    return (
      <div key={i} data-grid={el}>
        <span className="text">{i}</span>
        <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>
          x
        </span>
      </div>
    );
  }

  onAddItem() {
    this.setState({
      // Add a new item. It must have a unique key
      items: this.state.items.concat({
        i: this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: 2, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {
    return (
      <div>
        <StyledButton type="button" onClick={this.onAddItem}>
          Add Item
        </StyledButton>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}>
          {_.map(this.state.items, (el) => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import('./test-hook-add.jsx').then((fn) => fn.default(AddRemoveLayout));
}
