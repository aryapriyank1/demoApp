import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './example-styles.css';
import styled from 'styled-components';
typeof window !== 'undefined' && (window.React = React); // for devtools

const StyledButton = styled.button`
  background-color: #3b5998;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export default function makeLayout(Layout) {
  // Basic layout that mirrors the internals of its child layout by listening to `onLayoutChange`.
  // It does not pass any other props to the Layout.
  class ListeningLayout extends React.Component {
    state = { layout: [], showModal: false };

    onLayoutChange = (layout) => {
      this.setState({ layout: layout });
    };

    stringifyLayout() {
      return this.state.layout.map(function (l) {
        const name = l.i === '__dropping-elem__' ? 'drop' : l.i;
        return (
          <div className="layoutItem" key={l.i}>
            {/* <b style="margin-left: 210px">{name}</b> */}
            <b className="previewText">{name}</b>
            {`: [${l.x}, ${l.y}, ${l.w}, ${l.h}]`}
          </div>
        );
      });
    }

    handleClick = () => {
      this.setState({ showModal: !this.state.showModal });
    };

    render() {
      return (
        <React.StrictMode>
          <div>
            {/* <div className="layoutJSON">
              Displayed as <code>[x, y, w, h]</code>:
              <div className="columns">{this.stringifyLayout()}</div>
            </div> */}
            <br />
            <div>
              <StyledButton type="button" onClick={this.handleClick}>
                Create Preview
              </StyledButton>
            </div>
            <br />
            <Layout onLayoutChange={this.onLayoutChange} />
            {this.state.showModal && (
              <div>
                <div className="modal-background" onClick={this.handleClick} />
                <div className="modal">
                  <h1>Preview</h1>
                  <span className="close-button" onClick={this.handleClick}>
                    &times;
                  </span>
                  {this.state.layout.map(function (l) {
                    const name = l.i === '__dropping-elem__' ? 'drop' : l.i;
                    const style = {
                      position: 'absolute',
                      left: `${230 * l.x + 20}px`,
                      top: `${30 * l.y + 80}px`,
                      width: `440px`,
                      height: `40px`,
                      background: '#f0f0f0'
                    };
                    return (
                      <div className="layoutItem" key={l.i} style={style}>
                        <span className="previewText">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </React.StrictMode>
      );
    }
  }

  function run() {
    const contentDiv = document.getElementById('content');
    const gridProps = window.gridProps || {};
    const root = ReactDOM.createRoot(React.createElement(ListeningLayout, gridProps), contentDiv);
    root.render();
  }
  if (!document.getElementById('content')) {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  return ListeningLayout;
}
