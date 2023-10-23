import * as React from 'react';
import { CLASSES } from '../Types';
import { getRenderStateEx } from './Utils';
/** @internal */
export const TabButtonStamp = (props) => {
  const { layout, node, iconFactory, titleFactory } = props;
  const selfRef = React.useRef(null);
  const cm = layout.getClassName;
  let classNames = cm(CLASSES.FLEXLAYOUT__TAB_BUTTON_STAMP);
  const renderState = getRenderStateEx(layout, node, iconFactory, titleFactory);
  let content = renderState.content ? (
    <div className={cm(CLASSES.FLEXLAYOUT__TAB_BUTTON_CONTENT)}>{renderState.content}</div>
  ) : (
    node._getNameForOverflowMenu()
  );
  const leading = renderState.leading ? (
    <div className={cm(CLASSES.FLEXLAYOUT__TAB_BUTTON_LEADING)}>{renderState.leading}</div>
  ) : null;
  return (
    <div ref={selfRef} className={classNames} title={node.getHelpText()}>
      {leading}
      {content}
    </div>
  );
};
