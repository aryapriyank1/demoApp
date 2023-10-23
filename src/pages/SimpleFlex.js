import React from 'react';
import * as FlexLayout from 'flexlayout-react';
import 'flexlayout-react/style/light.css';
import '../components/SimpleFlex/simpleflex.css';

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
    weight: 100,
    children: [
      {
        type: 'tabset',
        weight: 50,
        selected: -1,
        children: [
          {
            type: 'tab',
            name: '1',
            component: 'text'
          }
        ]
      }
    ]
  }
};

class SimpleFlex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: FlexLayout.Model.fromJson(json) };
  }

  factory(node) {
    const component = node.getComponent();
    if (component === 'text') {
      return <div className="flexpanel">Panel {node.getName()}</div>;
    }
  }
  render() {
    return <FlexLayout.Layout model={this.state.model} factory={this.factory.bind(this)} />;
  }
}

export default SimpleFlex;
