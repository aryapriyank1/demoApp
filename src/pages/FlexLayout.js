import React from 'react';
import * as _FlexLayout from 'flexlayout-react';
import 'flexlayout-react/style/light.css';
import '../components/FlexLayout/flexlayout.css';

const json = {
  global: { tabEnableClose: false },
  borders: [
    {
      type: 'border',
      location: 'left',
      size: 500,
      children: [
        {
          type: 'tab',
          name: '2',
          component: 'text'
        },
        {
          type: 'tab',
          name: '3',
          component: 'text'
        },
        {
          type: 'tab',
          name: '4',
          component: 'text'
        },
        {
          type: 'tab',
          name: '5',
          component: 'text'
        }
      ]
    },
    {
      type: 'border',
      location: 'right',
      size: 500,
      children: []
    },
    {
      type: 'border',
      location: 'bottom',
      size: 500,
      children: []
    }
  ],
  layout: {
    type: 'row',
    weight: 500,
    children: [
      {
        type: 'tabset',
        weight: 500,
        selected: 0,
        children: [
          {
            type: _FlexLayout.addTabWithDragAndDrop,
            name: 'Add Tab',
            component: 'text'
          }
        ]
      }
    ]
  }
};

class FlexLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: _FlexLayout.Model.fromJson(json) };
  }
  factory(node) {
    const component = node.getComponent();
    if (component === 'text') {
      return <div className="flexpanel">Panel {node.getName()}</div>;
    }
  }
  render() {
    return <_FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)} />;
  }
}

export default FlexLayout;
