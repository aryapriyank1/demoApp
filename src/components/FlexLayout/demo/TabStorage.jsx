import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Actions, TabNode } from '../src/index';
import { randomUUID } from '../src/model/Utils';
export function TabStorage({ tab, layout }) {
  const [storedTabs, setStoredTabs] = useState(tab.getConfig()?.storedTabs ?? []);
  useEffect(() => {
    tab.getModel().doAction(
      Actions.updateNodeAttributes(tab.getId(), {
        config: { ...(tab.getConfig() ?? {}), storedTabs }
      })
    );
  }, [storedTabs]);
  const [contents, setContents] = useState(null);
  const [list, setList] = useState(null);
  const refs = useRef(new Map()).current;
  const [emptyElem, setEmptyElem] = useState(null);
  // true = down, false = up, null = none
  const [scrollDown, setScrollDown] = useState(null);
  const scrollInvalidateRef = useRef();
  const scroller = useCallback(
    (isDown) => {
      contents?.scrollBy(0, isDown ? 10 : -10);
      scrollInvalidateRef.current?.();
    },
    [contents]
  );
  const scrollerRef = useRef(scroller);
  scrollerRef.current = scroller;
  useEffect(() => {
    if (scrollDown !== null) {
      let scrollInterval;
      let scrollTimeout = setTimeout(() => {
        scrollerRef.current(scrollDown);
        scrollInterval = setInterval(() => scrollerRef.current(scrollDown), 50);
      }, 500);
      return () => {
        clearTimeout(scrollTimeout);
        clearInterval(scrollInterval);
      };
    }
    return;
  }, [scrollDown]);
  const kickstartingCallback = useCallback(
    (dragging) => {
      const json = dragging instanceof TabNode ? dragging.toJson() : dragging;
      if (json.id === undefined) {
        json.id = `#${randomUUID()}`;
      }
      setStoredTabs((tabs) => [...tabs, json]);
      if (dragging instanceof TabNode) {
        tab.getModel().doAction(Actions.deleteTab(dragging.getId()));
      }
    },
    [tab]
  );
  const calculateInsertion = useCallback(
    (absoluteY) => {
      const rects = storedTabs.map((json) => refs.get(json.id).getBoundingClientRect());
      const splits = [rects[0].top];
      for (let i = 1; i < rects.length; i++) {
        splits.push((rects[i - 1].bottom + rects[i].top) / 2);
      }
      splits.push(rects[rects.length - 1].bottom);
      let insertionIndex = 0;
      for (let i = 1; i < splits.length; i++) {
        if (Math.abs(splits[i] - absoluteY) <= Math.abs(splits[insertionIndex] - absoluteY)) {
          insertionIndex = i;
        }
      }
      return {
        insertionIndex,
        split: splits[insertionIndex]
      };
    },
    [storedTabs]
  );
  const insertionCallback = useCallback(
    (dragging, _, __, y) => {
      const absoluteY = y + tab.getRect().y + (layout.getDomRect()?.top ?? 0);
      const { insertionIndex } = calculateInsertion(absoluteY);
      const json = dragging instanceof TabNode ? dragging.toJson() : dragging;
      if (json.id === undefined) {
        json.id = `#${randomUUID()}`;
      }
      setStoredTabs((tabs) => {
        const newTabs = [...tabs];
        const foundAt = newTabs.indexOf(json);
        if (foundAt > -1) {
          newTabs.splice(foundAt, 1);
          newTabs.splice(insertionIndex > foundAt ? insertionIndex - 1 : insertionIndex, 0, json);
        } else {
          newTabs.splice(insertionIndex, 0, json);
        }
        return newTabs;
      });
      setScrollDown(null);
      if (dragging instanceof TabNode) {
        tab.getModel().doAction(Actions.deleteTab(dragging.getId()));
      }
    },
    [calculateInsertion, tab, layout]
  );
  tab.getExtraData().tabStorage_onTabDrag = useCallback(
    (_dragging, _over, x, y, _, refresh) => {
      if (contents && list) {
        const layoutDomRect = layout.getDomRect();
        const tabRect = tab.getRect();
        const rootX = tabRect.x + (layoutDomRect?.left ?? 0);
        const rootY = tabRect.y + (layoutDomRect?.top ?? 0);
        const absX = x + rootX;
        const absY = y + rootY;
        const listBounds = list.getBoundingClientRect();
        if (
          absX < listBounds.left ||
          absX >= listBounds.right ||
          absY < listBounds.top ||
          absY >= listBounds.bottom
        )
          return;
        if (emptyElem) {
          return {
            x: listBounds.left - rootX,
            y: listBounds.top - rootY,
            width: listBounds.width,
            height: listBounds.height,
            callback: kickstartingCallback,
            cursor: 'copy'
          };
        } else {
          const insertion = calculateInsertion(absY);
          scrollInvalidateRef.current = refresh;
          if (absY - rootY < tabRect.height / 5) {
            setScrollDown(false);
          } else if (absY - rootY > (tabRect.height * 4) / 5) {
            setScrollDown(true);
          } else {
            setScrollDown(null);
          }
          return {
            x: listBounds.left - rootX,
            y: insertion.split - rootY - 2,
            width: listBounds.width,
            height: 0,
            callback: insertionCallback,
            invalidated: () => setScrollDown(null),
            cursor: 'row-resize'
          };
        }
      }
      return undefined;
    },
    [storedTabs, contents, list, refs, emptyElem]
  );
  return (
    <div ref={setContents} className="tab-storage">
      <p>
        This component demonstrates the custom drag and drop features of FlexLayout, by allowing you
        to store tabs in a list. You can drag tabs into the list, reorder the list, and drag tabs
        out of the list, all using the layout's built-in drag system!
      </p>
      <div ref={setList} className="tab-storage-tabs">
        {storedTabs.length === 0 && (
          <div ref={setEmptyElem} className="tab-storage-empty">
            Looks like there's nothing here! Try dragging a tab over this text.
          </div>
        )}
        {storedTabs.map((stored, _i) => (
          <div
            ref={(ref) => (ref ? refs.set(stored.id, ref) : refs.delete(stored.id))}
            className="tab-storage-entry"
            key={stored.id}
            onMouseDown={(e) => {
              e.preventDefault();
              layout.addTabWithDragAndDrop(
                stored.name ?? 'Unnamed',
                stored,
                (node) => node && setStoredTabs((tabs) => tabs.filter((tab) => tab !== stored))
              );
            }}
            onTouchStart={(_e) => {
              layout.addTabWithDragAndDrop(
                stored.name ?? 'Unnamed',
                stored,
                (node) => node && setStoredTabs((tabs) => tabs.filter((tab) => tab !== stored))
              );
            }}>
            {stored.name ?? 'Unnamed'}
          </div>
        ))}
      </div>
    </div>
  );
}
