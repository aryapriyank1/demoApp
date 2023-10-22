import React from 'react';
import _ from 'lodash';
import RGL, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(RGL);
const formTitles = ['First Name', 'Last Name', 'Age', 'Phone Number', 'Email'];

export default class NoCompactingLayout extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    items: 5,
    cols: 2,
    rowHeight: 20,
    onLayoutChange: function () {},
    compactType: 'horizontal'
    // verticalCompact: false,
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  var;

  generateDOM() {
    return _.map(_.range(this.props.items), function (i) {
      return (
        <div key={i} className="form-item">
          {formTitles[i]}
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function (item, i) {
      const y = _.result(p, 'y') || 3;
      return {
        x: i % 2,
        y: Math.floor(i / 2) * y,
        // y: Math.floor(i / 6) * y,
        w: 1,
        h: 3,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}>
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import('./test-hook.jsx').then((fn) => fn.default(NoCompactingLayout));
}
